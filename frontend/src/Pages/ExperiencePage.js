import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import React from 'react';
import './ExperiencePage.css';

export default function ExperiencePage() {
    return (
        <div className="experienceContent">
            <Box minHeight='calc(85vh - 64px)' sx={{ flexGrow: 1 }}>
                <Typography variant="h2" align="center" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                    Experience
                </Typography>
                <div className="container">
                    <p className="company">Baylor University,{'\u00A0'}</p>
                    <p className="location">Waco, TX</p>
                </div>
                <div className="container">
                        <p className="jobTitle">Undergraduate Research Assistant</p>
                </div>
                <div className="container">
                        <p className="text">● Created language-agnostic microservice intermediate representations with a team at Oracle by using GraalVM, Graal, Native Image, and Graal-Prophet</p>
                </div>
                <div className="container">
                        <p className="text">● Implemented static bytecode analysis to allow for anti-pattern detection and cyclic dependency discovery within microservice intermediate representations</p>
                </div>
                <div className="container">
                        <p className="text">● Developed a visualization tool to effectively showcase service dependency graphs and system context insights derived from the language-agnostic microservice intermediate representations</p>
                </div>
                <div className="container">
                        <p className="text">● Wrote SAR for Microservice Systems Using GraalVM Native Image which was submitted to ASE 2023</p>
                </div>
                <div className="container">
                    <p className="company">Omni Interactions,{'\u00A0'}</p>
                    <p className="location">Denver, CO</p>
                </div>
                <div className="container">
                        <p className="jobTitle">Software Engineering Intern</p>
                </div>
                <div className="container">
                    <p className="text">● Processed flows including UX interactions to identify bottlenecks and further optimize the product</p>
                </div>
                <div className="container">
                    <p className="text">● Presented analytics and potential solutions to management in a clear digestible manner</p>
                </div>
                <div className="container">
                    <p className="text">● Focused on ease of use, clarity, and a streamlined experience for applicants to increase yield</p>
                </div>
            </Box>
        </div>
    );
}