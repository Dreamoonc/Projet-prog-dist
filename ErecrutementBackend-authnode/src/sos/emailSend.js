const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports amira123456789
    auth: {
        user: 'amirastaffer@gmail.com',
        pass: 'vfsneebtdgvjhdcd'
    }
});

// setup email data with unicode symbols
function sendEmail(to, nom, prenom) {
    const email = to;
    console.log(email);
    let mailOptions = {
        from: 'amirastaffer@gmail.com', // sender address
        to: email, // dynamic "to" field
        subject: "Registration confirmation",
        html: `<p>Hello ${nom} ${prenom}, <br> Thank you for registering! Please click the following link to confirm your registration:</p><a href='http://127.0.0.1:5000/api/auth/confirm/${email}'>Confirm Registration</a>`,

    
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
}
module.exports={sendEmail}