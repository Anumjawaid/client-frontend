import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cardImage from '../Components/images/images.jfif'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import ModalCard from './ModalCard'
function CurrentWeather(props) {
	const temp = props.obj.temp
	const description = props.obj.description
	const city = props.obj.city
	const iconId = props.obj.iconId

	return (
		<>
			<Box >
				<Grid container rowSpacing={1}>
					<Grid item xs={2} md={2} lg={3.5} sx={{ ml: 2 }} >
						{/* <Item> */}
						<Card sx={{ maxWidth: 345 }}>
							<CardMedia
								sx={{ height: 140 }}
								image={cardImage}
								title="green iguana"
							/>
							<CardContent>

								<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
									<p>{iconId}</p>
								</Typography>
								<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
									<p>{Math.round(temp)}</p>
								</Typography>
								<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
									<p>{description}</p>
								</Typography>
								<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
									<p>{city}</p>
								</Typography>
							</CardContent>
							<CardActions>
								{/* <ModalCard /> */}

							</CardActions>
						</Card>
						{/* </Item> */}
					</Grid>
				</Grid>
			</Box>
		</>
	)
} export default CurrentWeather;