import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import './OtherFunThings.css';


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
            <AppBar position="static" color="transparent">
                <Toolbar>
                <div style={{ display: 'flex', alignItems: 'baseline', flex: 1, justifyContent: 'center' }}>
                    <Typography variant="h3" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                        Other Fun Projects
                    </Typography>
                    <Typography variant="body5" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                        (by Jack Hale)
                    </Typography>
                </div>
                </Toolbar>
            </AppBar>
            <div className="content">
                
            </div>
            <div style={{ position: "absolute", bottom: 0, width: '100%' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <div className="button-container">
                        <Button variant="outlined" sx={{ borderColor: '#D0BDF4' }} onClick={() => redirect()}>
                        <Typography variant="button" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                            This site on{'\u00A0'}
                        </Typography>
                            <GitHubIcon style={{ color: '#D0BDF4'}}/>
                        </Button>
                        <Button variant="outlined" sx={{ borderColor: '#D0BDF4' }} onClick={() => routeChange(-1)}>
                            <Typography variant="button" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                                Back
                            </Typography>
                        </Button>
                    </div>
                </Box>
            </div>
        </div>
    );
}