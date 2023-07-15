import Typography from '@mui/material/Typography';
import React,  { useContext } from 'react';
import { HeaderContext } from "../Contexts/HeaderContext.js";
import { FooterContext } from "../Contexts/FooterContext.js";
import './ExperiencePage.css';

export default function ExperiencePage() {
    
    const { headerHeight } = useContext(HeaderContext);
    const { footerHeight } = useContext(FooterContext);
    
    const experiencePageContent = {
        overflowY: 'auto',
        position: 'fixed',
        top: headerHeight,
        bottom: footerHeight,
        width: '100%',
        height: `calc(100svh - ${headerHeight}px - ${footerHeight}px - 10px)`,
    };
    
    return (
        <div style={experiencePageContent}>
            <Typography variant="h2" align="center" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                Experience
            </Typography>
            
            <div className="container">
                <p className="company">Baylor University,{'\u00A0'}</p>
                <p className="location">Waco, TX</p>
            </div>
            <p className="jobTitle">Undergraduate Research Assistant</p>
            <p className="text">● Created language-agnostic microservice intermediate representations with a team at Oracle by using GraalVM, Graal, Native Image, and Graal-Prophet</p>
            <p className="text">● Implemented static bytecode analysis to allow for anti-pattern detection and cyclic dependency discovery within microservice intermediate representations</p>
            <p className="text">● Developed a visualization tool to effectively showcase service dependency graphs and system context insights derived from the language-agnostic microservice intermediate representations</p>
            <p className="text">● Wrote SAR for Microservice Systems Using GraalVM Native Image which was submitted to ASE 2023</p>
            
            <div className="container">
                <p className="company">Omni Interactions,{'\u00A0'}</p>
                <p className="location">Denver, CO</p>
            </div>
            <p className="jobTitle">Software Engineering Intern</p>
            <p className="text">● Processed flows including UX interactions to identify bottlenecks and further optimize the product</p>
            <p className="text">● Presented analytics and potential solutions to management in a clear digestible manner</p>
            <p className="text">● Focused on ease of use, clarity, and a streamlined experience for applicants to increase yield</p>

            <div className="container">
                <p className="company">Everlane,{'\u00A0'}</p>
                <p className="location">Menlo Park, CA</p>
            </div>
            <p className="jobTitle">Associate</p>
            <p className="text">● Received manager and customer praise for friendly service and clear communication, managed inventory, and exceeded sales targets</p>
            <p className="text">● Assisted a change in management by supervising and training new hires</p>

            <div className="container">
                <p className="company">In-N-Out Burger,{'\u00A0'}</p>
                <p className="location">San Carlos, CA</p>
            </div>
            <p className="jobTitle">Level 6 Associate</p>
            <p className="text">● Promoted from Level 1 to Level 6 Associate fastest under current management</p>
            <p className="text">● Recipient of the In-N-Out Award for Exemplary Customer Service</p>
            <p className="text">● Provided excellent customer service as a cashier, exceeding expectations and standards</p>
        </div>
    );
}