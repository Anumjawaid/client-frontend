import React,{useState,useEffect} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupIcon from '@mui/icons-material/Group';
import { useSelector, useDispatch } from "react-redux";
// import GroupIcon from '@material-ui/icons/Group';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import logo from '../UI/logo.png'
// import './App.css'
import { Grid } from '@mui/material';
import { getWeather,addCity} from '../Store/userreducer'
import {  useNavigate } from 'react-router'

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    background: '#e67e22',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const listval = [
  
  ]
  const card = useSelector((state) => state.users.cities)
  const currentCities = useSelector((state) => state.users.currentCities)
  console.log(card, "card")
  card.map((v, i) => {
    console.log(v,"dd")
    listval.push( { text: v.Name, icon: <GroupIcon />, path: "/userdashboard" })
})
const theme = useTheme();
const [open, setOpen] = React.useState(false);
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

const handleDrawerOpen = () => {
  setOpen(true);
};

const handleDrawerClose = () => {
  setOpen(false);
};

return (
  <Box sx={{ display: 'flex' }}>
    <Box>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar style={{ backgroundColor: '#1A1D20' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <img src={logo} style={{ width: '50px', height: '50px' }} />
          </IconButton>

        </Toolbar>
      </AppBar>
      <Drawer PaperProps={{
        sx: {
          backgroundColor: "#E1A100",
          color: "white",
        }
      }} variant="permanent" open={open} >

        <DrawerHeader>
          <p style={{ position: 'absolute', left: '5%', fontWeight: 'bolder', fontSize: '21px' }}>Weather App</p>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (<img src={logo} style={{ width: '50px', height: '50px' }} />) : (<img src={logo} style={{ width: '50px', height: '50px' }} />)}
          </IconButton>


        </DrawerHeader>
        {/* <Divider /> */}
        <List sx={{
          marginTop: '5rem',
        }}>
          {listval.map((text, index) => (
            <ListItemButton
              key={text.text}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                backgroundColor: '#23282D',
                marginBottom: '2rem',
                borderRadius: '10px',
                width: '80%',
                marginLeft: '0.5rem'
              }}
              // href={text.path}
              onClick={()=>dispatch(getWeather({ q: text.text }))}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',

                  color: 'white'
                }}
              >
                {text.icon}
              </ListItemIcon>
              <ListItemText primary={text.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}

          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
              backgroundColor: '#23282D',
              marginTop: '18rem',
              borderRadius: '10px',
              width: '80%',
              marginLeft: '0.5rem'
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: 'white'
              }}
            >
              <img src={logo} style={{ width: '30px', height: '30px' }} />
            </ListItemIcon>
            <ListItemText primary={"Admin"} sx={{ opacity: open ? 1 : 0 }} />
            <ListItemIcon
              sx={{
                minWidth: 0,
                lr: open ? 6 : 'none',
                marginTop: '5px',
                justifyContent: 'center',
                color: 'white',
                display: open ? 'block' : 'none',

              }}
            >
              <GroupIcon />
            </ListItemIcon>

          </ListItemButton>
        </List>

      </Drawer>
    </Box>
    <Box component="main" sx={{
      color: 'white', background: "#1A1D20",
      color: "white", flexGrow: 1, p: 3
    }}>
      <DrawerHeader />
      {props.component}

    </Box>
  </Box>
);
}