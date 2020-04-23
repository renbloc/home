const express = require('express');
var router = express.Router();

const UserController = require('../controllers/user');

const auth = require('../helpers/auth')


router.post('/register', UserController.users_signup)
router.post('/login', UserController.users_login)
router.post('/forgot', UserController.users_forgot)
router.post('/update_password/:token', UserController.update_password)
//router.get('/users', auth.authenticateToken(["user"]), UserController.users_users)
router.get('/users', UserController.users_users)
router.post('/token',  UserController.refresh_tokens)
router.post('/logout', UserController.users_logout)





module.exports = router;