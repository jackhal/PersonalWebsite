import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Footer from '../Components/Footer.js'
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
                <Button disableRipple='true' sx={{"&:hover": {backgroundColor: "transparent", }}} onClick={() => routeChange('/PersonalWebsite')}><img alt="" height="50vh" src={require("../img/jh-high-resolution-color-logo.png")} /></Button>
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
            <Footer />
        </div>
    );
}