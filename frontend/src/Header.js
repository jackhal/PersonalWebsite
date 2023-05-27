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
    <div>
        <Box height="5vh" sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Button onClick={() => routeChange('/')}><img src="./img/jh-high-resolution-color-logo.png" /></Button>
                    </Box>
                    <Button onClick={() => routeChange('/about')}>
                        <Typography variant="button" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                            About
                        </Typography>
                    </Button>
                    <Button onClick={() => routeChange('/experience')}>
                        <Typography variant="button" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                            Experience
                        </Typography>
                    </Button>
                    <Button onClick={() => routeChange('/contact')}>
                        <Typography variant="button" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                            Contact
                        </Typography>
                    </Button>
                    <Button onClick={() => routeChange('/resume')}>
                        <Typography variant="button" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                            Resume
                        </Typography>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    </div>
  );
}