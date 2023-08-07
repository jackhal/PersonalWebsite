import React, { useRef, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { HeaderContext } from '../Contexts/HeaderContext.js';

export default function Header() {

    let navigate = useNavigate(); 
    const appBarRef = useRef();
    const { setHeaderHeight } = useContext(HeaderContext);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            for(let entry of entries) {
                setHeaderHeight(entry.contentRect.height);
            }
        });

        if(appBarRef.current) {
            resizeObserver.observe(appBarRef.current);
        }

        return () => {
            if(appBarRef.current) {
                resizeObserver.unobserve(appBarRef.current);
            }
        };
    }, [setHeaderHeight]);

    const routeChange = (path) => {
        navigate(path);
    }

  return (
    <AppBar ref={appBarRef} position="fixed" color="transparent">
        <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
                <Button disableRipple='true' sx={{"&:hover": {backgroundColor: "transparent", }}} onClick={() => routeChange('/PersonalWebsite')}><img alt="" height="50vh" src={require("../img/jh-high-resolution-logo.png")} /></Button>
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
  );
}