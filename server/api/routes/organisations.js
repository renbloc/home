const express = require('express');
var router = express.Router();

const OrganisationController = require('../controllers/organisations');

const auth = require('../helpers/auth')


router.post('/register', OrganisationController.org_signup)
router.post('/login', OrganisationController.org_login)
router.get('/users', auth.authenticateToken, OrganisationController.org_org)
router.post('/token',  OrganisationController.refresh_tokens)
router.delete('/logout', OrganisationController.org_logout)





module.exports = router;