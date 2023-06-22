import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Footer.css';

export default function Footer() {
  return (
    <Box height="5vh" sx={{ flexGrow: 1 }}>
        <Box sx={{ flexGrow: 1 }}>
            <div className="button-container">
                <Button variant="outlined" sx={{ borderColor: '#D0BDF4' }}>
                    <Typography variant="button" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                        Check out this website on GitHub!
                    </Typography>
                </Button>
                <Button variant="outlined" sx={{ borderColor: '#D0BDF4' }}>
                    <Typography variant="button" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                        Other fun things
                    </Typography>
                </Button>
            </div>
        </Box>
    </Box>
  );
}