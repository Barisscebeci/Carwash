import React from 'react';
import '../css/ContactForm.css';
import { Box, Typography } from '@mui/material';

function Map() {
  return (
    <Box className="map-container">
      <Typography variant="h4">Konum</Typography>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.172598704061!2d31.152408526293986!3d40.846134204385024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409d9ffd996fc09b%3A0xf30c1944291da4a0!2zS8O8bHTDvHIsIDc5MS4gU2suIE5vOjQyLCA4MTYwMCBEw7x6Y2UgTWVya2V6L0TDvHpjZQ!5e0!3m2!1str!2str!4v1718577715676!5m2!1str!2str"
        style={{ width: '100%', height: '100%', border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Podium Garage Location"
      ></iframe>
    </Box>
  );
}

export default Map;
