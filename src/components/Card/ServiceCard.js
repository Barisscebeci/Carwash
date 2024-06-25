import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./ServiceCard.css";
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ServiceCard({ title, description, image, link }) {
  return (
    <Card className="service-card">
      <CardActionArea component={Link} to={link}>
        <CardMedia
          component="img"
          height="175"
          image={image}
          alt={title}
        />
        <CardContent className='card-content'>
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
