const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password',
    },
});

const mailOptions = {
    from: 'DrNajimblabla-email@gmail.com',
    to: 'blabla-email@example.com',
    subject: 'Test Email',
    text: 'This is a test email sent from Node.js',
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
    console.error(error);
} else {
    console.log('Email sent: ' + info.response);
}
});
