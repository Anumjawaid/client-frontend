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
import ModalCard from './ModalCard'
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';

function CurrentWeather(props) {
	const temp = props.obj.temp
	const description = props.obj.description
	const city = props.obj.city
	const iconId = props.obj.iconId

	const card = ['1', '2', '3', '4', '5']

	function temperatureClass() {
		let temp = this.convertTemperature();
		if (temp >= 100) {
			this.setState({
				temperatureClass: 'boiling'
			});
		}
		if (temp < 100 && temp >= 85) {
			this.setState({
				temperatureClass: 'hot'
			});
		}
		if (temp < 85 && temp >= 65) {
			this.setState({
				temperatureClass: 'warm'
			});
		}
		if (temp < 65 && temp >= 50) {
			this.setState({
				temperatureClass: 'perfect'
			});
		}
		if (temp < 50 && temp >= 32) {
			this.setState({
				temperatureClass: 'cool'
			});
		}
		if (temp < 32) {
			this.setState({
				temperatureClass: 'freezing'
			});
		}
	}
	
	return (
		<>
			<Box >
				<Box
					component="form"
					sx={{
						'& > :not(style)': { m: 1, width: '25ch' },
					}}
					noValidate
					autoComplete="off"
				>
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', width: '100%' }} ><TextField id="outlined-basic" label="Enter City Name" variant="outlined" sx={{background:'white'}} /><AddIcon /></div>

				</Box>
				<Grid container rowSpacing={6}>
					{card.map((card) => {
						return (
							<>
								<Grid item xs={2} md={2} lg={3.5} sx={{ ml: 2 }} key={card} >
									<Card sx={{ maxWidth: 345 }}>
										<CardMedia
											sx={{ height: 140 }}
											image={cardImage}
											title="green iguana"
											
										/>
										<CardContent>

											<Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
												<p>{iconId}</p>
											</Typography>
											<Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
												<p>{Math.round(temp)}</p>
											</Typography>
											<Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
												<p>{description}</p>
											</Typography>
											<Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
												<p>{city}</p>
											</Typography>
										</CardContent>
										<CardActions>
											<ModalCard />

										</CardActions>
									</Card>
								</Grid>
							</>
						)
					})}


				</Grid>
			</Box>
		</>
	)
				
} export default CurrentWeather;