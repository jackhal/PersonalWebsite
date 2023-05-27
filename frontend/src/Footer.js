import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Footer() {
  return (
    <Box height="5vh" sx={{ flexGrow: 1 }}>
        <Box sx={{ flexGrow: 1 }}>
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
        </Box>
    </Box>
  );
}