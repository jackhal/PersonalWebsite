import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import React from 'react';

export default function HomePage() {
    return (
        <div>
            <Box height="5vh" sx={{ flexGrow: 1 }}></Box>
            <Box height="85vh" sx={{ flexGrow: 1 }}>
                <Typography variant="h5" align="center" style={{ color: '#A0D2EB', textTransform: 'none' }}>
                    Hi, my name is
                </Typography>
                <Typography variant="h1" align="center" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                    Jack Hale.
                </Typography>
                <Typography variant="h3" align="center" style={{ color: '#E5EAF5', textTransform: 'none' }}>
                    And I like to build stuff.
                </Typography>
                <Typography variant="body1" align="center" style={{ color: '#E5EAF5', textTransform: 'none' }}>
                    I'm a software engineer and accomplished leader, experienced in solving complex problems collaboratively.
                </Typography>
                <Typography variant="body1" align="center" style={{ color: '#E5EAF5', textTransform: 'none' }}>
                    I'm committed to delivering excellent results, while working to create an inclusive, growth-oriented atmosphere.
                </Typography>
                <Typography variant="h3" align="center" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                    Get to know me:
                </Typography>
            </Box>
        </div>
    );
}