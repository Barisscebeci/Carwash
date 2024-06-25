const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.post('/send-email', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'brscbc8@gmail.com',
      pass: 'flwpsqtzgatwvnog' // Uygulama şifresi
    }
  });

  const mailOptions = {
    from: email, // Sabit gönderen e-posta adresi
    to: 'brscbc8@gmail.com', // Sabit alıcı e-posta adresi
    replyTo: email, // Kullanıcının girdiği e-posta adresi
    subject: 'Yeni İletişim Formu Mesajı',
    text: `İsim: ${firstName} ${lastName}\nEmail: ${email}\nTelefon: ${phone}\nMesaj: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).send('Mesaj gönderilirken bir hata oluştu.');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Mesajınız gönderildi!');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
