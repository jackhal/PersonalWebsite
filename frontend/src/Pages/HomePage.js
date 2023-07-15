import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useContext } from "react";
import { HeaderContext } from "../Contexts/HeaderContext.js";
import { FooterContext } from "../Contexts/FooterContext.js";
import './HomePage.css';

export default function HomePage() {

    const { headerHeight } = useContext(HeaderContext);
    const { footerHeight } = useContext(FooterContext);

    const contentStyle = {
        overflowY: 'auto',
        position: 'fixed',
        top: headerHeight,
        width: '100%',
        height: `calc(100vh - ${headerHeight}px)`,
    };

    return (
        <div style={contentStyle}>
            <Box height="15vh" />
            <p>footer height is: {footerHeight}px</p>
            <div style={{ display: 'flex', alignItems: 'baseline', marginLeft: 'calc(max(50px, 15vw))' }}>
                <Typography variant="h5"style={{ color: '#A0D2EB', textTransform: 'none' }}>
                    Hi, my name is
                </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', marginLeft: 'calc(max(50px, 15vw))' }}>
                <Typography variant="h1" align="left" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                    Jack Hale.
                </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', marginLeft: 'calc(max(50px, 15vw))' }}>
                <Typography variant="h3" align="left" style={{ color: '#E5EAF5', textTransform: 'none' }}>
                    I like to build things.
                </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', marginLeft: 'calc(max(50px, 15vw))', marginRight: 'calc(max(50px, 25vw))' }}>
                <Typography variant="body1" align="left" style={{ color: '#E5EAF5', textTransform: 'none' }}>
                    I'm a software engineer and accomplished leader, experienced in solving complex problems collaboratively.
                    I'm committed to delivering excellent results, while working to create an inclusive, growth-oriented atmosphere.
                </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', marginLeft: 'calc(max(50px, 15vw))', marginRight: 'calc(max(50px, 25vw))' }}>
                <Typography variant="body1" align="left" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                    If you're a recruiter, fellow developer, or really anyone, feel free to contact me using the methods below and I'll get back to you as soon as I can.
                </Typography>
            </div>
        </div>
    );
}