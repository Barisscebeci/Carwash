import React, { useState } from "react";
import "../css/ContactForm.css";
import { Box, TextField, Button, Typography } from "@mui/material";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Mesajınız gönderildi!");
      } else {
        alert("Mesaj gönderilirken bir hata oluştu.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Mesaj gönderilirken bir hata oluştu.");
    }
  };

  return (
    <Box className="contact-form">
      <Typography variant="h4">Bizimle İletişime Geçin</Typography>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">
            İsim <span className="required">*</span>
          </label>
          <TextField
            fullWidth
            label=""
            variant="outlined"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">
            Soy İsim <span className="required">*</span>
          </label>
          <TextField
            fullWidth
            label=""
            variant="outlined"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email adresi <span className="required">*</span>
          </label>
          <TextField
            fullWidth
            label=""
            variant="outlined"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">
            Telefon <span className="required">*</span>
          </label>
          <TextField
            fullWidth
            label=""
            variant="outlined"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Mesaj <span className="required">*</span>
          </label>
          <TextField
            fullWidth
            label=""
            variant="outlined"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            multiline
            rows={4}
          />
        </div>
        <Button variant="contained" color="primary" type="submit">
          Gönder
        </Button>
      </form>
    </Box>
  );
}

export default ContactForm;
