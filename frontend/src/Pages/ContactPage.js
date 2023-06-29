import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from "@mui/material/IconButton";
import PopUpEmail from '../Components/PopUpEmail'

export default function ContactPage() {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <div>
            <Box height="5vh" sx={{ flexGrow: 1 }}/>
            <Box height="85vh" sx={{ flexGrow: 1 }}>
                <Typography variant="h2" align="center" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                    Contact
                </Typography>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'left' }}>
                    <Box sx={{ width: '15%' }}></Box>
                    <Typography variant="body3" align="left" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                        If you're a recruiter, fellow developer, or really anyone, feel free to contact me using the methods below and I'll get back to you as soon as I can.
                    </Typography>
                </div>
                <Box height="2vh" sx={{ flexGrow: 1 }}/>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <IconButton onClick={openModal}>
                        <MailOutlineIcon style={{ color: '#D0BDF4' }} fontSize="large" />
                    </IconButton>
                    <IconButton>
                        <LinkedInIcon style={{ color: '#D0BDF4' }} fontSize="large" />
                    </IconButton>
                    <IconButton>
                        <GitHubIcon style={{ color: '#D0BDF4' }} fontSize="large" />
                    </IconButton>
                    <PopUpEmail isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
            </Box>
        </div>
    );
}