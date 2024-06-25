import React from 'react';
import { Grid } from '@mui/material';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <div >
              <p>Hizmetlerimiz</p>
              <p>İletişim</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div >
              <p>İletişim Numaralarımız</p>
              <h3>05051355313</h3>
              <h3>barisscebeci@gmail.com</h3>
              <h4>Barış Cebeci</h4>
            </div>
          </Grid>
        </Grid>
        <p className="footer-design">Web design by EB05</p>
      </div>
    </footer>
  );
}

export default Footer;
