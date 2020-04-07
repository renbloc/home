const express = require('express');
var router = express.Router();

const UserController = require('../controllers/user');

const auth = require('../helpers/auth')


router.post('/register', UserController.users_signup)
router.post('/login', UserController.users_login)
router.get('/users', auth.authenticateToken(["user"]), UserController.users_users)
router.post('/token',  UserController.refresh_tokens)
router.delete('/logout', UserController.users_logout)





module.exports = router;