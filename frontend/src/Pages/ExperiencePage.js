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
            <div class="experience-content">
                <p class="experience-header">Experience</p>
                <div class="grid-job">
                    <p>
                        <span class="company">Baylor University,{'\u00A0'}</span>
                        <span class="location">Waco, TX</span>
                    </p>
                    <p class="date">January - May 2023</p>
                </div>
                <p class="jobTitle">Undergraduate Research Assistant</p>
                <p class="text">● Created language-agnostic microservice intermediate representations with a team at Oracle by using GraalVM, Graal, Native Image, and Graal-Prophet</p>
                <p class="text">● Implemented static bytecode analysis to allow for anti-pattern detection and cyclic dependency discovery within microservice intermediate representations</p>
                <p class="text">● Developed a visualization tool to effectively showcase service dependency graphs and system context insights derived from the language-agnostic microservice intermediate representations</p>
                <p class="text">● Wrote SAR for Microservice Systems Using GraalVM Native Image which was submitted to ASE 2023</p>
                
                <div class="grid-job">
                    <p>
                        <span class="company">Omni Interactions,{'\u00A0'}</span>
                        <span class="location">Denver, CO</span>
                    </p>
                    <p class="date">May - August 2022</p>
                </div>
                <p class="jobTitle">Software Engineering Intern</p>
                <p class="text">● Processed flows including UX interactions to identify bottlenecks and further optimize the product</p>
                <p class="text">● Presented analytics and potential solutions to management in a clear digestible manner</p>
                <p class="text">● Focused on ease of use, clarity, and a streamlined experience for applicants to increase yield</p>

                <div class="grid-job">
                    <p>
                        <span class="company">Everlane,{'\u00A0'}</span>
                        <span class="location">Menlo Park, CA</span>
                    </p>
                    <p class="date">May - August 2021</p>
                </div>
                <p class="jobTitle">Associate</p>
                <p class="text">● Received manager and customer praise for friendly service and clear communication, managed inventory, and exceeded sales targets</p>
                <p class="text">● Assisted a change in management by supervising and training new hires</p>

                <div class="grid-job">
                    <p>
                        <span class="company">In-N-Out Burger,{'\u00A0'}</span>
                        <span class="location">San Carlos, CA</span>
                    </p>
                    <p class="date">October 2016 - July 2019</p>
                </div>
                <p class="jobTitle">Level 6 Associate</p>
                <p class="text">● Promoted from Level 1 to Level 6 Associate fastest under current management</p>
                <p class="text">● Recipient of the In-N-Out Award for Exemplary Customer Service</p>
                <p class="text">● Provided excellent customer service as a cashier, exceeding expectations and standards</p>
            </div>
        </div>
    );
}