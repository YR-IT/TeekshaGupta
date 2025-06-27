const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config({ path: `${__dirname}/.env` });

console.log('🔑 ENV GMAIL_USER:', process.env.GMAIL_USER);
console.log('🔑 ENV GMAIL_PASS:', process.env.GMAIL_PASS ? '****' : 'MISSING');


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for frontend requests
app.use(express.json()); // Parse JSON bodies

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Handle form submission
app.post('/api/contact', async (req, res) => {
  console.log(' Incoming request body:', req.body);
  const { fullName, email, phone, projectType, subject, vision } = req.body;

  // Validate input
  if (!fullName || !email || !subject || !vision) {
    console.log('Validation failed — missing required fields');
    return res.status(400).json({ error: 'Please fill in all required fields' });
  }
  console.log(' Passed validation. Sending email...');

  // Email options
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    replyTo: email,
  headers: {
    'Reply-To': email,
  },
  cc: email,
    subject: `New Contact Form Submission: ${subject}`,
    text: `
      Full Name: ${fullName}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      Project Type: ${projectType || 'Not specified'}
      Subject: ${subject}
      Vision: ${vision}
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully!');
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
     console.error(' Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Start server
app.listen(PORT, () => { 
  console.log(`Server running on port ${PORT}`);
});

app.get('/api/ping', (req, res) => {
  console.log('👉 Received GET /api/ping');
  res.send('pong');
});
