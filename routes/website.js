const express = require('express');
 const bodyParser = require('body-parser');
const router =  express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const websiteController = require('../controllers/websiteControllers')
 const recaptchaMiddleware = require('../middleware/recaptchaMiddleware')


// Home Page
router.get('/', websiteController.home);

// About Page
router.get('/about', websiteController.about);

// Service page
router.get('/service', websiteController.services);

// Team Page
router.get('/team', websiteController.team)

// Contact page

router.get('/contact', websiteController.contact);
router.post('/contactEmail', recaptchaMiddleware, websiteController.contactEmail);






module.exports = router;