require('dotenv').config()

const db = require('../helpers/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

let refreshTokens = []

exports.users_logout = async (req, res, next) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(204)
}

exports.refresh_tokens = async (req, res, next) => {
    const refreshToken = req.body.token
    if(refreshToken == null) return res.sendStatus(401)
    if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        const accessToken = generateAccessToken({ user: user})
        res.json({ accessToken: accessToken})
    })
}


exports.users_signup = async (req, res, next) => {
    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const user = { username: req.body.username, password: hashedPassword }
        // push user 
        db('users').insert(user).then((result) => {
            console.log(result);
            
        })
        res.status(201).send()
    } catch (error) {
        console.log(error);
        
        res.status(500).send()
    }
}

exports.users_login = async (req, res, next) => { 
    db('users').where({ username: req.body.username }).then(async data => {
        const user = data
        if (user == null) {
            return res.status(400).send('Cannot find user')
        }

        
        try {
            if (await bcrypt.compare(req.body.password, user[0].password)) {
                
                const payload = { user: user[0] };
                //const options = { expiresIn: '2d', issuer: 'https://scotch.io' };
                
                const accessToken = generateAccessToken(payload)
                const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET)

                refreshTokens.push(refreshToken)


                res.json({accessToken: accessToken, refreshToken: refreshToken})
            } else {
                res.send('Not allowed')
            }
        } catch (error) {
            console.log(error);
            
            res.status(500).send()
        }
    })
}

exports.users_users = (req, res, next) => {
    try {
        db('users').select('username').then(function(projectNames){
            //do something here
            res.send(projectNames)
        });
        
    } catch (error) {
        console.log(error);
        
    }

}

function generateAccessToken(payload) {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m'})
}