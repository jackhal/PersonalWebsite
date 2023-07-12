import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import './HomePage.css';

export default function HomePage() {
    
    return (
        <div className="content">
            <Box minHeight='calc(85vh - 64px)' sx={{ flexGrow: 1 }}>
                <Box height="10vh" sx={{ flexGrow: 1 }}></Box>
                <div style={{ display: 'flex', alignItems: 'baseline', marginLeft: 'calc(max(50px, 15vw))' }}>
                    <Typography variant="h5"style={{ color: '#A0D2EB', textTransform: 'none' }}>
                        Hi, my name is
                    </Typography>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', marginLeft: 'calc(max(50px, 15vw))' }}>
                    <Typography variant="h1" align="left" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                        Jack Hale.
                    </Typography>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', marginLeft: 'calc(max(50px, 15vw))' }}>
                    <Typography variant="h3" align="left" style={{ color: '#E5EAF5', textTransform: 'none' }}>
                        I like to build things.
                    </Typography>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', marginLeft: 'calc(max(50px, 15vw))', marginRight: 'calc(max(50px, 25vw))' }}>
                    <Typography variant="body1" align="left" style={{ color: '#E5EAF5', textTransform: 'none' }}>
                        I'm a software engineer and accomplished leader, experienced in solving complex problems collaboratively.
                        I'm committed to delivering excellent results, while working to create an inclusive, growth-oriented atmosphere.
                    </Typography>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', marginLeft: 'calc(max(50px, 15vw))', marginRight: 'calc(max(50px, 25vw))' }}>
                    <Typography variant="body1" align="left" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                        If you're a recruiter, fellow developer, or really anyone, feel free to contact me using the methods below and I'll get back to you as soon as I can.
                    </Typography>
                </div>
            </Box>
        </div>
    );
}