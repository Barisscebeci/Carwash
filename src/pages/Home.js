import React from "react";
import ServiceCard from "../components/Card/ServiceCard";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";
import "../css/Home.css";
import Link from "@mui/material/Link";
import { Grid, Box, Typography } from "@mui/material";

const services = [
  {
    title: "Pasta cila",
    description:
      " Pasta-Cila uygulamamızla çizik ve kusurları profesyonel bakım ile ortadan kaldırın. ",
    image: "/image/pasta-cila.png",
    
  },
  {
    title: "Detaylı Temizlik",
    description:
      " Detaylı temizlik uygulamamızla aracınızın parlaklığını yeniden canlandırın. ",
    image: "/image/detaylı-temizlik.png",
    
  },
  {
    title: "Cam Film",
    description:
      " Cam filmi uygulamamızla aracınızı yepyeni görünümüne kavuşturun. ",
    image: "/image/Cam-Film.png",
    
  },
  {
    title: "Motor Temizleme",
    description:
      "Motor Temizleme uygulamamızla aracınızın performansını ve görünümünü yenileyin.",
    image: "/image/Motor-temizleme.png",
    
  },
  {
    title: "Far Temizleme",
    description: " Göz alıcı ve net farlarla yola çıkın. ",
    image: "/image/Far-Temizleme.png",
    
  },
  {
    title: "Seramik Kaplama",
    description:
      " Seramik Kaplama ile aracınızın yüzeyini koruyun ve uzun ömürlü parlaklık kazanın. ",
    image: "/image/Seramik-Kaplama.png",
    
  },
];

function Home() {
  return (
    <section id="home">
      <div className="parallax">
        <div className="resim-ustu">
          <Typography variant="h2" gutterBottom>
            Podium Garage'a Hoş Geldiniz
          </Typography>
          <h2>En yüksek kalite malzemelerle premium oto yıkama hizmetleri</h2>
          <button className="view-services">
            <Link href="#hizmetlerimiz" underline="none" color="white">
              Hizmetlerimiz
            </Link>
          </button>
        </div>
      </div>
      <div className="hakkinda" id="hakkinda">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={8} md={6} className="grid-item">
            <Typography variant="h6" gutterBottom>
              PODIUM GARAGE HAKKINDA
            </Typography>
            <Typography variant="h4" gutterBottom>
              Oto yıkama, film kaplama, seramik kaplama ve far temizleme
              konularında uzmanız.
            </Typography>
            <Typography variant="body1" paragraph>
              Şehrin kalbinde yer alan Podium Garage, birinci sınıf oto yıkama,
              seramik kaplama ve cam filmi uygulama hizmetleri sunan bir oto
              bakım merkezidir.
            </Typography>
            <Link href="#iletisim" underline="hover">
              Bizimle İletişime Geçin
            </Link>
          </Grid>
          <Grid item xs={12} sm={4} md={6} className="resim-container">
            <img
              src="/image/1.jpeg"
              alt="Podium Garage"
              className="resimhakkinda"
            />
          </Grid>
        </Grid>
      </div>
      <div className="hizmetler" id="hizmetlerimiz">
        <div className="hizmetler-baslik">
          <Typography variant="h6">HİZMETLERİMİZ</Typography>
          <Typography variant="h4">Her ayrıntıda mükemmellik</Typography>
          <Typography variant="subtitle2">
            Oto yıkamadan seramik kaplamaya, cam filmi uygulamasından far
            temizliğine kadar her hizmetimizde aracınızın yeni gibi görünmesini
            sağlıyoruz.
          </Typography>
        </div>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
                link={service.link}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="contact-section" id="iletisim">
        <Grid container spacing={2}>
          <Grid item xs={12} s={6} md={6}>
            <ContactForm />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box bgcolor="grey.300" p={2}>
              <Map />
              <div className="hours">
                <h2>Çalışma Saatlerimiz</h2>
                <ul>
                  <li>Pazartesi: 09:00 - 20:00</li>
                  <li>Salı: 09:00 - 20:00</li>
                  <li>Çarşamba: 09:00 - 20:00</li>
                  <li>Perşembe: 09:00 - 20:00</li>
                  <li>Cuma: 09:00 - 20:00</li>
                  <li>Cumartesi: 09:00 - 20:00</li>
                  <li>Pazar: 09:00 - 20:00</li>
                </ul>
              </div>
            </Box>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default Home;
