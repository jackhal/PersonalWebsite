import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import React from 'react';
import './ExperiencePage.css';

export default function ExperiencePage() {
    return (
        <div className="content">
            <Box minHeight='calc(85vh - 64px)' sx={{ flexGrow: 1 }}>
                <Typography variant="h2" align="center" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                    Experience
                </Typography>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'left' }}>
                        <Typography variant="body5" align="left" style={{ color: '#D0BDF4', textTransform: 'none', paddingLeft: '15%' }}>
                            Baylor University,{'\u00A0'}
                        </Typography>
                        <Typography variant="body5" align="left" style={{ color: '#E5EAF5', textTransform: 'none'}}>
                            Waco, TX
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'left' }}>
                        <Typography variant="body5" align="left" style={{ color: '#D0BDF4', textTransform: 'none', paddingLeft: '15%' }}>
                            Undergraduate Research Assistant
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                        <Typography variant="body5" align="left" style={{ color: '#E5EAF5', textTransform: 'none', paddingLeft: '17.5%', paddingRight: '17.5%' }}>
                            ● Wrote SAR for Microservice Systems Using GraalVM Native Image which was submitted to ASE 2023
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                        <Typography variant="body5" align="left" style={{ color: '#E5EAF5', textTransform: 'none', paddingLeft: '17.5%', paddingRight: '17.5%' }}>
                            ● Developed language-agnostic microservice intermediate representations for an Oracle-backed project using GraalVM, Graal, Native Image, and Graal-Prophet
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                        <Typography variant="body5" align="left" style={{ color: '#E5EAF5', textTransform: 'none', paddingLeft: '17.5%', paddingRight: '17.5%' }}>
                            ● Implemented static bytecode analysis of the intermediate representations to allow for anti-pattern detection and cyclic dependency discovery within microservice intermediate representations
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                        <Typography variant="body5" align="left" style={{ color: '#E5EAF5', textTransform: 'none', paddingLeft: '17.5%', paddingRight: '17.5%' }}>
                            ● Developed a visualization tool to showcase service dependency graphs and system context insights derived from the language-agnostic microservice intermediate representations effectively
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'left' }}>
                        <Typography variant="body5" align="left" style={{ color: '#D0BDF4', textTransform: 'none', paddingLeft: '15%' }}>
                            Omni Interactions,{'\u00A0'}
                        </Typography>
                        <Typography variant="body5" align="left" style={{ color: '#E5EAF5', textTransform: 'none'}}>
                            Denver, CO
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'left' }}>
                        <Typography variant="body5" align="left" style={{ color: '#D0BDF4', textTransform: 'none', paddingLeft: '15%' }}>
                            Software Engineering Intern
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                        <Typography variant="body5" align="left" style={{ color: '#E5EAF5', textTransform: 'none', paddingLeft: '17.5%', paddingRight: '17.5%' }}>
                            • Processed flows including UX interactions to identify bottlenecks and further optimize the product
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                        <Typography variant="body5" align="left" style={{ color: '#E5EAF5', textTransform: 'none', paddingLeft: '17.5%', paddingRight: '17.5%' }}>
                            • Presented analytics and potential solutions to management in a clear digestible manner
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                        <Typography variant="body5" align="left" style={{ color: '#E5EAF5', textTransform: 'none', paddingLeft: '17.5%', paddingRight: '17.5%' }}>
                            • Focused on ease of use, clarity, and a streamlined experience for applicants to increase yield
                        </Typography>
                    </div>
            </Box>
        </div>
    );
}