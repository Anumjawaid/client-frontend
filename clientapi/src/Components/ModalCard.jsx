import React,{useState} from 'react';
import { Table, TableRow, TableBody, TableCell } from '@mui/material';
import moment from 'moment';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import cardImage from '../Components/images/pakistani.png'
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
  const handleOpen = () => setOpen(true);
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
          <p style={{textAlign:'center'}}>City Name:</p>
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







  

