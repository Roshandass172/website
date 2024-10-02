// server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(bodyParser.json());
app.use(express.static('public')); // Serve the frontend from the 'public' directory

// OTP Storage (for demo purposes, you might want to store this in a database)
let otpStore = {};

// Function to generate a random 6-digit OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// POST endpoint to send OTP
app.post('/send-otp', (req, res) => {
    const { username } = req.body;

    // Validate the username
    if (!username || !/^\d{12}$/.test(username)) {
        return res.status(400).json({ message: 'Invalid Register Number' });
    }

    const otp = generateOTP();
    const email = `${username}@eec.srmrmp.edu.in`;

    // Store the OTP (you should also store this securely in a database)
    otpStore[username] = otp;

    // Setup Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail', // You can use your preferred email service
        auth: {
            user: process.env.EMAIL, // Environment variable for email
            pass: process.env.PASSWORD, // Environment variable for email password
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP for login is ${otp}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ message: 'Error sending OTP' });
        } else {
            console.log('Email sent: ' + info.response);
            return res.json({ message: 'OTP sent to your university email' });
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
