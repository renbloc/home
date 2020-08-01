const express = require('express');
var router = express.Router();

const UserController = require('../controllers/user');

const auth = require('../helpers/auth')


router.post('/register', UserController.users_signup)
router.post('/register_org', UserController.org_signup)
router.post('/forgot', UserController.users_forgot)
router.post('/update_password/:token', UserController.update_password)
router.post('/token',  UserController.refresh_tokens)
router.post('/login', UserController.users_login)
router.post('/logout', UserController.users_logout)

router.post('/mail', UserController.users_mail)

//router.get('/users', auth.authenticateToken(["admin"]), UserController.users_users)
router.get('/users', UserController.users_users)







module.exports = router;