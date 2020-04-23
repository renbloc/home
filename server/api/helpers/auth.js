require('dotenv').config()

const jwt = require('jsonwebtoken')

exports.authenticateToken = (role) => {
    return (req, res, next) => {
        //console.log(role.indexOf("user"));
        
        const authHeader = req.cookies.token || '';
        
        const token = authHeader && authHeader.split(' ')[1]
        if (token == null) {
            return res.sendStatus(401)
        }

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
            if (err) {
                return res.sendStatus(403)
            } else if (role.indexOf(data.user.role) == -1) {
                return res.sendStatus(403)
            } else {
                req.user = data.user
                next()
            }
        })
    }
}

