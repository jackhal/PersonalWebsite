import React from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Header() {

  let navigate = useNavigate(); 

  const routeChange = (path) =>{
    navigate(path);
  }

  return (
    <Box height="5vh" sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Button disableRipple='true' sx={{"&:hover": {backgroundColor: "transparent", }}} onClick={() => routeChange('/PersonalWebsite')}><img alt="" height="50vh" src={require("../img/jh-high-resolution-color-logo.png")} /></Button>
                </Box>
                <Button disableRipple='true' sx={{"&:hover": {backgroundColor: "transparent", }}} onClick={() => routeChange('/PersonalWebsite/about')}>
                    <Typography variant="button" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                        About
                    </Typography>
                </Button>
                <Button disableRipple='true' sx={{"&:hover": {backgroundColor: "transparent", }}} onClick={() => routeChange('/PersonalWebsite/experience')}>
                    <Typography variant="button" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                        Experience
                    </Typography>
                </Button>
                <Button disableRipple='true' sx={{"&:hover": {backgroundColor: "transparent", }}} onClick={() => routeChange('/PersonalWebsite/resume')}>
                    <Typography variant="button" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                        Resume
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
    </Box>
  );
}