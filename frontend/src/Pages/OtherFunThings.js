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
                <Button disableRipple='true' sx={{"&:hover": {backgroundColor: "transparent", }}} onClick={() => routeChange('/PersonalWebsite')}><img alt="" height="50vh" src={require("../img/jh-high-resolution-logo.png")} /></Button>
                <p class="complete-title">
                    <span class="large-title">Other Fun Projects</span>
                    <span class="small-title">(by Jack Hale)</span>
                </p>
                </Toolbar>
            </AppBar>
            <div className="content">
                <p class="construction-text">This page is still under construction.</p>
            </div>
            <Footer />
        </div>
    );
}