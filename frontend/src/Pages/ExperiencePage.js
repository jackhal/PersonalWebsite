import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import React from 'react';

export default function ExperiencePage() {
    return (
        <div>
            <Box height="5vh" sx={{ flexGrow: 1 }}/>
            <Box height="85vh" sx={{ flexGrow: 1 }}>
                <Typography variant="h2" align="center" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                    Experience
                </Typography>
                <Box height="5vh" sx={{ flexGrow: 1 }} />
                <Box height="75vh" sx={{ flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'left' }}>
                        <Box sx={{ width: '15%' }}></Box>
                        <Typography variant="body5" align="left" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                            Baylor University,
                        </Typography>
                        <Typography variant="body5" align="left" style={{ color: '#E5EAF5', textTransform: 'none' }}>
                            Waco, TX
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'left' }}>
                        <Box sx={{ width: '15%' }}></Box>
                        <Typography variant="body5" align="left" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                            Undergraduate Research Assistant
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'left' }}>
                        <Box sx={{ width: '17.5%' }}></Box>
                        <Typography variant="body5" align="left" style={{ color: '#E5EAF5', textTransform: 'none' }}>
                            ● Wrote SAR for Microservice Systems Using GraalVM Native Image which was submitted to ASE 2023
                        </Typography>
                    </div>
                </Box>
            </Box>
        </div>
    );
}