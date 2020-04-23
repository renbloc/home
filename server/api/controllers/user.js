require('dotenv').config()

const db = require('../helpers/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const TokenHelper = require('../helpers/token')

let refreshTokens = []

// Should maybe check so the required fields are not empty...? 


exports.users_logout = async (req, res, next) => {
    //refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    
    const AccessToken = req.cookies.AccessToken
    const RefreshToken = req.cookies.RefreshToken
    if (AccessToken && RefreshToken) {
        res.clearCookie("AccessToken");
        res.clearCookie("RefreshToken");
        res.send('Cookies are removed')
        
    } else {
        res.status(404).send('You are not logged in')
    }
}

exports.refresh_tokens = async (req, res, next) => {
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401)
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        const accessToken = generateAccessToken({ user: user })
        res.json({ accessToken: accessToken })
    })
}


exports.users_signup = async (req, res, next) => {
    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const user = { username: req.body.username, email: req.body.email, password: hashedPassword }
        // push user 
        await db('users').insert(user)

        res.status(200).send({
            message: 'User was created'
        })
    } catch (error) {
        res.status(500).send({
            message: 'User was not created'
        })
    }
}

exports.users_login = async (req, res, next) => {


    try {

        const user = await db('users').where({ username: req.body.username }).first()


        if (user == null || !user) {
            res.status(400).send('Cannot find user')
        }

        if (await bcrypt.compare(req.body.password, user.password)) {

            const payload = { userId: user.id }
            //const options = { expiresIn: '2d', issuer: 'https://scotch.io' };

            const accessToken = TokenHelper.generateAccessToken(payload)
            const refreshToken = TokenHelper.generateRefreshToken(payload)

            refreshTokens.push(refreshToken)

            //res.json({ accessToken: accessToken, refreshToken: refreshToken })
            
            res.cookie('AccessToken', accessToken, { expire: 360000 + Date.now(), secure: false, httpOnly: true})
            res.cookie('RefreshToken', refreshToken, { expire: 360000 + Date.now(), secure: false, httpOnly: true})
            res.status(200).send('Cookie is set')
        } else {
            res.send('Not allowed')
        }
    } catch (error) {
        console.log(error);
        
        res.status(500).send({
            error: error
        })
    }
    //})
}

exports.users_users = async (req, res, next) => {
    try {
        const users = await db('users')
        res.status(200).send(users)

    } catch (error) {
        res.status(500).send({
            error: error
        })

    }

}

exports.users_forgot = async (req, res, next) => {

    try {
        const user = await db('users').where({ email: req.body.email }).first()
        if (user == null || !user) {
            res.status(400).send('Cannot find user')
        }
        const payload = { userId: user.id };
        const token = jwt.sign(payload, process.env.RESET_PASS_TOKEN, { expiresIn: '15m' })

        res.send(token)

        // Generate Email

        // Send email

    } catch (error) {
        console.log(error);
        
        res.status(500).send({
            
            error: error
        })
    }
}

exports.update_password = async (req, res, next) => {
    try {
        const { token } = req.params

        // Get info from token where the userid is 
        const payload = jwt.decode(token, process.env.RESET_PASS_TOKEN)

        const user = await db('users').where({ id: payload['userId'] }).first()

        if (user == null || !user) {
            res.status(400).send('Cannot find user')
        }

        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const updated_user = await db('users').where({ id: payload['userId'] }).update({ password: hashedPassword })

        res.status(202).json({
            message: 'User updated successfully',
            user: updated_user
        })

    } catch (error) {
        console.log(error);
        
        res.status(500).send({
            error: error
        })
    }
}


