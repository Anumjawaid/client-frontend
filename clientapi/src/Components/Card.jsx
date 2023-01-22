import React ,{useEffect}from 'react';
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
import { useSelector ,useDispatch} from "react-redux"
import { AccordionDetails } from '@mui/material';
import { findByLabelText } from '@testing-library/react';
import { FilledButton } from './helper';
import { getWeather} from '../Store/userreducer'
import {  useNavigate } from 'react-router'

function CurrentWeather() {
	const dispatch = useDispatch()
	 const card = useSelector((state) => state.users.cities)
	 const currentCities = useSelector((state) => state.users.currentCities)
	 
	 useEffect(()=>{
		console.log(currentCities,"fdgfdg")
		if(Object.keys(currentCities).length !=0){
			console.log("Not zero")
			navigate('/weather')
		}
		else{
			console.log("Not zeddfdro")
		}

    },[currentCities])
	 const navigate = useNavigate()
	// const temp = "32"
	// const description = cities.condition.text
	// const city= cities.Name
	// const iconId = cities.detail.condition.icon

	//const card = ['1', '2', '3', '4', '5']
	let change=()=>{
		console.log("change")
		dispatch(getWeather({ q: "karachi" }))
		
		
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
							<FilledButton name={"View"} fn={(e)=>change(e)}/>
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