import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import React from 'react';

export default function AboutPage() {
    return (
        <div>
            <Box height="5vh" sx={{ flexGrow: 1 }}/>
            <Box height="85vh" sx={{ flexGrow: 1 }}>
                <Typography variant="button" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                    About page
                </Typography>
            </Box>
        </div>
    );
}