import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import JackHale_Resume from "../Files/JackHale_Resume.pdf"
import Button from '@mui/material/Button';
import { HeaderContext } from "../Contexts/HeaderContext.js";
import { FooterContext } from "../Contexts/FooterContext.js";
import './ResumePage.css';

export default function ResumePage() {
    
    const { headerHeight } = useContext(HeaderContext);
    const { footerHeight } = useContext(FooterContext);
    
    const resumePageContent = {
        overflowY: 'auto',
        position: 'fixed',
        top: headerHeight,
        bottom: footerHeight,
        width: '100%',
        height: `calc(100svh - ${headerHeight}px - ${footerHeight}px - 10px)`,
    };

    return (
        <div style={ resumePageContent }>
            <Typography variant="h2" align="center" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                My Resume
            </Typography>

            <a href={JackHale_Resume} download="JackHale_Resume.pdf" target='_blank'>
                <Button>Download</Button>
            </a>
        </div>
    );
}