const nodemailer = require('nodemailer');

// import data.json
const data = require('../data.json')

// Home Page
exports.home = (req, res) => {
    try { 
        const {global, home} = data;       
        res.render('index', {
            pageData: {...global, ...home}
        });
    } catch (error) {
        console.log("error", error) 
        res.end("500 Server Error");
    }    
}

// About Page
exports.about = (req, res) => {
    try {
        const {global, home} = data;
        res.render('about',{
            pageData: {...global, ...home}
        })
    } catch (error) {
        console.log("error", error) 
        res.end("500 Server Error");
    }    
}

// Services Page
exports.services = (req, res) => {
    try {
        const { global,home } = data;
        res.render('service',{
            pageData: {...global,...home}
        })
    } catch (error) {
        console.log("error", error) 
        res.end("500 Server Error");
    }    
}

// Team Page
exports.team = (req,res)=>{
    try{
        const { global,home } = data;
        res.render('team',{
            pageData:{ ...global,...home}
        })
    }catch(error){
        console.log("error",error)
        res.end("500 Server Error")
    }
}

// Contact Page
exports.contact = (req, res) => {
    try {
        const { global,home } = data;
        res.render('contact',{
            pageData:{...global,...home}
        })
    } catch (error) {
        console.log("error", error) 
        res.end("500 Server Error");
    }    
}

// Contact Page Send Email
exports.contactEmail = (req, res) => {
    const { name,phone,service, email, message } = req.body;    

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

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("error", error);
            return res.status(500).send("500 Server Error");
        }
        console.log('Message sent: %s', info.messageId);
        res.status(200).send("Message sent successfully");
    });
};