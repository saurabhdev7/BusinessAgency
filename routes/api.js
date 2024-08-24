const express = require('express');
const router =  express.Router();

const apiController = require('../controllers/apiControllers')
const { siteVerifiy } = require('../middleware/dummyMiddleware');
// import recpatcha middleware
const recaptchaMiddleware = require('../middleware/recaptchaMiddleware')

// Contact Form API
router.post('/contact', recaptchaMiddleware, apiController.contactEmail);


module.exports = router;

