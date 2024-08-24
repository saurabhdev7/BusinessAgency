const nodemailer = require('nodemailer');



// Contact Page Send Email
exports.contactEmail = (req, res) => {
    const { name,phone,service, email, message } = req.body;
    
    // reCAPTCHA validation 

    // Create a transporter object using Gmail SMTP
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'iambipintripathi7@gmail.com', // Your Gmail address
            pass: 'frqslygrtbezcmrb' // Your Gmail App Password
        }
    });

    // Setup email data
    let mailOptions = {
        from: email,
        to: ['bipintripathi786@gmail.com', email], // Your email address to receive the contact form messages
        subject: 'Contact Form Submission',
        text: `Name: ${name}\n Phone: ${phone}\nService: ${service}\nEmail: ${email}\nMessage: ${message}`
    };

    console.log("mailOptions", mailOptions);

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("error", error);
            return res.status(500).json({
                message: "Internal Server Error",
                status: 500,
                error: true
            });
        }
        console.log('Message sent: %s', info.messageId);
        res.status(200).json({
            message: "Message sent successfully",
            status: 200,
            error: false
        })
    });
};

