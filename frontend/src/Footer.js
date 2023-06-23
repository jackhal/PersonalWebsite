import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css';

export default function Footer() {

  let navigate = useNavigate(); 

  const routeChange = (path) =>{
    navigate(path);
  }

  const redirect = () => {
    window.location.href = 'https://github.com/jackhal';
  }
  
  return (
    <Box height="5vh" sx={{ flexGrow: 1 }}>
        <Box sx={{ flexGrow: 1 }}>
            <div className="button-container">
                <Button variant="outlined" sx={{ borderColor: '#D0BDF4' }} onClick={() => redirect()}>
                    <GitHubIcon style={{ color: '#D0BDF4'}}/>
                </Button>
                <Button variant="outlined" sx={{ borderColor: '#D0BDF4' }} onClick={() => routeChange('/other')}>
                    <Typography variant="button" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                        Other fun things
                    </Typography>
                </Button>
            </div>
        </Box>
    </Box>
  );
}