import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PopUp from '../Components/PopUp'

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
                <MailOutlineIcon style={{ color: '#D0BDF4'}} fontSize='large'/>
                <Button onClick={openModal}>Open Modal</Button>
                <PopUp isOpen={isOpen} setIsOpen={setIsOpen} />
            </Box>
        </div>
    );
}