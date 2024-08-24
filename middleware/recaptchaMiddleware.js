const axios = require('axios');

const recaptchaMiddleware = async (req, res, next) => {
    try {
        const  recaptchaToken  = req.body['g-recaptcha-response'];
        if (!recaptchaToken) {
            return res.status(400).json({ message: 'Recaptcha token is required' });
        }
        const secretKey = "6Lfl9SYqAAAAADXfTIWV6XnWA2pwbIEENMQZ-q45";
        const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
        const response = await axios.post(url);
        const { success } = response.data;
        if (!success) {
            return res.status(400).json({ message: 'Recaptcha verification failed' });
        }
        next();
    } catch (error) {
        console.log('error', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = recaptchaMiddleware;