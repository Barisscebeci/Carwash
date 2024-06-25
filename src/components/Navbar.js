import React from 'react';
import '../css/Navbar.css'; // CSS dosyamızı dahil ediyoruz

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src="/image/logo.png" alt="Podium Garage Logo" className="logo" />
        <span className="brand-name">PODIUM GARAGE</span>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
          <a href="#home">Ana Sayfa</a>
          </li>
          <li>
            <a href="#hakkinda">Hakkımızda</a>
          </li>
          <li>
            <a href="#hizmetlerimiz">Hizmetlerimiz</a>
          </li>
          <li>
            <a href="#iletisim" className="contact-button">İletişime Geçin</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
