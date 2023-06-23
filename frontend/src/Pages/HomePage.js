import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import React from 'react';

export default function HomePage() {
    return (
        <div>
            <Box height="5vh" sx={{ flexGrow: 1 }}></Box>
            <Box height="85vh" sx={{ flexGrow: 1 }}>
                <Box height="10vh" sx={{ flexGrow: 1 }}></Box>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'left' }}>
                    <Box sx={{ width: '16%' }}></Box>
                    <Typography variant="h5"style={{ color: '#A0D2EB', textTransform: 'none' }}>
                        Hi, my name is
                    </Typography>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'left' }}>
                    <Box sx={{ width: '15%' }}></Box>
                    <Typography variant="h1" align="left" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                        Jack Hale.
                    </Typography>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'left' }}>
                    <Box sx={{ width: '15%' }}></Box>
                    <Typography variant="h3" align="left" style={{ color: '#E5EAF5', textTransform: 'none' }}>
                        I like to build things.
                    </Typography>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'left' }}>
                    <Box sx={{ width: '15%' }}></Box>
                    <Typography variant="body1" align="left" style={{ color: '#E5EAF5', textTransform: 'none' }}>
                        I'm a software engineer and accomplished leader, experienced in solving complex problems collaboratively.
                    </Typography>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'left' }}>
                    <Box sx={{ width: '15%' }}></Box>
                    <Typography variant="body1" align="left" style={{ color: '#E5EAF5', textTransform: 'none' }}>
                        I'm committed to delivering excellent results, while working to create an inclusive, growth-oriented atmosphere.
                    </Typography>
                </div>
            </Box>
        </div>
    );
}