import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import React from 'react';
import JackHale_Resume from "../Files/JackHale_Resume.pdf"
import Button from '@mui/material/Button';

export default function ResumePage() {
    return (
        <div>
            <Box height="5vh" sx={{ flexGrow: 1 }}/>
            <Box height="85vh" sx={{ flexGrow: 1 }}>
                <Typography variant="h2" align="center" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                    My Resume
                </Typography>

                <a href={JackHale_Resume} download="JackHale_Resume.pdf" target='_blank'>
                    <Button>Download</Button>
                </a>
            </Box>
        </div>
    );
}