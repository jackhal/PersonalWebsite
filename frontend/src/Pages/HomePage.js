import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useContext } from "react";
import { HeaderContext } from "../Contexts/HeaderContext.js";
import { FooterContext } from "../Contexts/FooterContext.js";
import './HomePage.css';

export default function HomePage() {

    const { headerHeight } = useContext(HeaderContext);
    const { footerHeight } = useContext(FooterContext);

    const homePageContent = {
        overflowY: 'auto',
        position: 'fixed',
        top: headerHeight,
        bottom: footerHeight,
        width: '100%',
        height: `calc(100svh - ${headerHeight}px - ${footerHeight}px - 10px)`,
    };

    return (
        <div style={homePageContent}>
            <Box height="15vh" />
            <p class="introduction">Hi, my name is</p>
            <p class="home-name">Jack Hale.</p>
            <p class="subtitle">I like to build things.</p>
            <p class="mini-bio">
                I'm a software engineer and accomplished leader, experienced in solving complex problems collaboratively.
                I'm committed to delivering excellent results, while working to create an inclusive, growth-oriented 
                atmosphere.
            </p>
            <p class="contact-message">
                If you're a recruiter, fellow developer, or really anyone, feel free to contact me using the methods below 
                and I'll get back to you as soon as I can.
            </p>
        </div>
    );
}