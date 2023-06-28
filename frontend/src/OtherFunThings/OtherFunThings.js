import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function OtherFunThings(){

    let navigate = useNavigate(); 

    const routeChange = (path) =>{
      navigate(path);
    }

    const redirect = () => {
        window.location.href = 'https://github.com/jackhal';
    }

    return(
        <div>
            <Box height="95vh" sx={{ flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
                    <Typography variant="h1" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                        Other Fun Projects
                    </Typography>
                    <Typography variant="body4" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                        (by Jack Hale)
                    </Typography>
                </div>
            </Box>
            <Box height="5vh" sx={{ flexGrow: 1 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <div className="button-container">
                        <Button variant="outlined" sx={{ borderColor: '#D0BDF4' }} onClick={() => redirect()}>
                            <GitHubIcon style={{ color: '#D0BDF4'}}/>
                        </Button>
                        <Button variant="outlined" sx={{ borderColor: '#D0BDF4' }} onClick={() => routeChange(-1)}>
                            <Typography variant="button" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                                Home Page
                            </Typography>
                        </Button>
                    </div>
                </Box>
            </Box>
        </div>
    );
}