import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cardImage from '../UI/logo.png'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ModalCard from './ModalCard'

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
  }));

export default function WeatherCard() {
  return (
    <>
    <Box >
        <Grid container rowSpacing={1}>
    <Grid item xs={2} md={2} lg={3.5} sx={{ml:2}} >
        {/* <Item> */}
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={cardImage}
        title="green iguana"
      />
      <CardContent>
  
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <p>City Name:</p>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <p>Temprature:</p>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <p>Sunrise:</p>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <p><p>Sunset:</p></p>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <p>Description:</p>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <p>Humidity:</p>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <p>Day:</p>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <p>Date:</p>
        </Typography>
      </CardContent>
      <CardActions>
      <ModalCard/>

      </CardActions>
    </Card>
    {/* </Item> */}
  </Grid>
  <Grid item xs={2} md={2} lg={4} >
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={cardImage}
        title="green iguana"
      />
      <CardContent>
  
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <p>City Name:</p>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <p>Temprature:</p>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <p>Sunrise:</p>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <p><p>Sunset:</p></p>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <p>Description:</p>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <p>Humidity:</p>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <p>Day:</p>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <p>Date:</p>
        </Typography>
      </CardContent>
      <CardActions>
       <ModalCard/>
  
      </CardActions>
    </Card>
  </Grid>

  <Grid item xs={2} md={2} lg={4} >
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={cardImage}
        title="green iguana"
      />
      <CardContent>
  
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <p>City Name:</p>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <p>Temprature:</p>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <p>Sunrise:</p>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <p><p>Sunset:</p></p>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <p>Description:</p>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <p>Humidity:</p>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <p>Day:</p>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <p>Date:</p>
        </Typography>
      </CardContent>
      <CardActions>
      <ModalCard/>
  </CardActions>
    </Card>
  </Grid>
  </Grid>
  </Box>
    </>
  );
}