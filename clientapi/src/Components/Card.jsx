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
<<<<<<< HEAD
function CurrentWeather(props) {
	const temp = props.obj.temp
	const description = props.obj.description
	const city = props.obj.city
	const iconId = props.obj.iconId
=======
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from "react-redux"
import { AccordionDetails } from '@mui/material';
import { findByLabelText } from '@testing-library/react';
>>>>>>> e8063ae9c875a0176909af9de1385f7909117313

function CurrentWeather() {
	 const card = useSelector((state) => state.users.cities)
	// const temp = "32"
	// const description = cities.condition.text
	// const city= cities.Name
	// const iconId = cities.detail.condition.icon

	//const card = ['1', '2', '3', '4', '5']

	
	
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
								<Grid item xs={2} md={2} lg={3.5} sx={{ ml: 1 }} key={card} >
									<Card sx={{ maxWidth: 300 }}>
										<CardMedia
											// sx={{ height:-50 }}
											// image={cardImage}
											borderstyl='solid'
                                            bordercolor= 'black'
											title="green iguana"
											
										/>
										<CardContent>

											<Typography sx={{ fontSize: 20, display:'flex',justifyContent:'center',alignItems: 'center' }} color="text.secondary" gutterBottom>
												<img src={card.detail.condition.icon}/>
											</Typography>
											<Typography sx={{ fontSize: 20 , display:'flex',justifyContent:'center',alignItems: 'center'}} color="text.secondary" gutterBottom>
												<p>{Math.round(card.detail.temp)}*C</p>
											</Typography>
											<Typography sx={{ fontSize: 25, display:'flex',justifyContent:'center',alignItems: 'center' }} color="text.secondary" gutterBottom>
												<p>{card.Name}</p>
											</Typography>
											<Typography sx={{ fontSize: 20, display:'flex',justifyContent:'center',alignItems: 'center' }} color="text.secondary" gutterBottom>
												<p>{card.detail.condition.text}</p>
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