import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import React from 'react';
import Header from '../Header.js';
import Footer from '../Footer.js';

export default function ResumePage() {
    return (
        <div>
            <Header />
            <Box height="5vh" sx={{ flexGrow: 1 }}/>
            <Box height="85vh" sx={{ flexGrow: 1 }}>
                <Typography variant="button" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                    Resume page
                </Typography>
            </Box>
            <Footer />
        </div>
    );
}