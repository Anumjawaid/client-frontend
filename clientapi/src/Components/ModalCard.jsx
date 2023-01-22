import React,{useState} from 'react';
import { Table, TableRow, TableBody, TableCell } from '@mui/material';
import moment from 'moment';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from "react-redux"
import { getWeather} from '../Store/userreducer'

const style = {
  position: 'absolute',
 
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1800,
  height:1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()
  const currentCities = useSelector((state) => state.users.currentCities)
  console.log(currentCities,"sddssad")
  const handleOpen = () => {
    dispatch(getWeather({ q: "karachi" }))
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign:'center'}}>
            More in a modal
          </Typography>

          <Typography id="modal-modal-title" variant="h6" component="h2">
          <p style={{textAlign:'center'}}>City Name:{currentCities.location.Name}</p>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <p style={{textAlign:'center'}}>Temprature:</p>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <p style={{textAlign:'center'}}>Sunrise:</p>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <p style={{textAlign:'center'}}><p>Sunset:</p></p>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <p style={{textAlign:'center'}}>Description:</p>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <p style={{textAlign:'center'}}>Humidity:</p>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <p style={{textAlign:'center'}}>Wind Speed:</p>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <p style={{textAlign:'center'}}>Day:</p>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <p style={{textAlign:'center'}}>Date:</p>
        </Typography>
        </Box>
      </Modal>
    </div>
  );
}








// function DetailedInfo(props){
// return(
// 	<div className="whole-details-area" style={{color:"white"}}>
// 		<h4>Weather Details</h4>
// 		<Table className="weather-details" style={{color:"white"}}>
// 			<TableBody>
// 				<TableRow>
// 					<TableCell style={{color:"white"}}>High Temperature</TableCell>
// 					<TableCell className="cell-data" style={{color:"white"}}>{props.obj.high}&deg;</TableCell>
// 				</TableRow>
// 				<TableRow>
// 					<TableCell style={{color:"white"}}>Low Temperature</TableCell>
// 					<TableCell className="cell-data" style={{color:"white"}}>{props.obj.low}&deg;</TableCell>
// 				</TableRow>
// 				<TableRow>
// 					<TableCell style={{color:"white"}}>Humidity</TableCell>
// 					<TableCell className="cell-data" style={{color:"white"}}>{props.obj.humidity}%</TableCell>
// 				</TableRow>
// 				<TableRow>
// 					<TableCell style={{color:"white"}}>Wind Speed</TableCell>
// 					<TableCell className="cell-data" style={{color:"white"}}>{props.obj.windSpeed}</TableCell>
// 				</TableRow>
// 				<TableRow>
// 					<TableCell style={{color:"white"}}>Sunrise</TableCell>
// 					<TableCell className="cell-data" style={{color:"white"}}>{moment.unix(props.obj.sunrise).format('h:mA')}</TableCell>
// 				</TableRow>
// 				<TableRow>
// 					<TableCell style={{color:"white"}}>Sunset</TableCell>
// 					<TableCell className="cell-data" style={{color:"white"}}>{moment.unix(props.obj.sunset).format('h:mA')}</TableCell>
// 				</TableRow>
// 				<TableRow>
// 					<TableCell style={{color:"white"}}>Date</TableCell>
// 					<TableCell className="cell-data" style={{color:"white"}}>{moment.unix(props.obj.time).format('ddd, h:mA')}</TableCell>
// 				</TableRow>
// 			</TableBody>
// 		</Table>
// 	</div>
// );
// }
// export default DetailedInfo;
  

