import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const cityData = [
  {
    title: "City Park",
    description: "A beautiful park in the center of the city.",
    image: "path/to/city-park.jpg"
  },
  {
    title: "Historical Museum",
    description: "Museum showcasing the history of the city.",
    image: "path/to/museum.jpg"
  },
  {
    title: "Modern Art Gallery",
    description: "Gallery with modern art exhibits.",
    image: "path/to/art-gallery.jpg"
  },
  // Add more city highlights here
];

const carouselStyle = {
  marginTop: '40px',
};

const legendStyle = {
  background: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  padding: '10px',
  position: 'absolute',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  textAlign: 'center',
  borderRadius: '5px',
  fontSize: '18px',
};

const cardContainerStyle = {
  marginTop: '40px',
};

const Homie: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box mt={5}>
        <Typography variant="h3" align="center" gutterBottom>
          Welcome to Our City
        </Typography>
        <Typography variant="h6" align="center" paragraph>
          Discover the beauty and attractions of our city.
        </Typography>

        <Box style={carouselStyle}>
          <Carousel showThumbs={false} autoPlay interval={3000} infiniteLoop>
            {cityData.map((item, index) => (
              <div key={index}>
                <img src={item.image} alt={item.title} />
               
              </div>
            ))}
          </Carousel>
        </Box>

        <Box style={cardContainerStyle}>
          <Typography variant="h4" gutterBottom>
            About the City
          </Typography>
          <Typography paragraph>
            Our city is known for its vibrant culture, historical landmarks, and modern amenities. Explore the various attractions and highlights that make our city unique.
          </Typography>

          <Grid container spacing={4}>
            {cityData.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box mt={5}>
          <Typography variant="h4" gutterBottom>
            Upcoming Events
          </Typography>
          <Typography paragraph>
            Stay tuned for the upcoming events in our city. From cultural festivals to sports events, there's always something happening here.
          </Typography>
          {/* Add event cards or a list here */}
        </Box>

        <Box mt={5}>
          <Typography variant="h4" gutterBottom>
            Contact Information
          </Typography>
          <Typography paragraph>
            For any inquiries or more information, feel free to contact us.
          </Typography>
          <Typography paragraph>
            <strong>Email:</strong> info@citywebsite.com
          </Typography>
          <Typography paragraph>
            <strong>Phone:</strong> 123-456-7890
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Homie;
