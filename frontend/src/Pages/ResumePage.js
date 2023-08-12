import React, { useContext, useEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { HeaderContext } from "../Contexts/HeaderContext.js";
import { FooterContext } from "../Contexts/FooterContext.js";
import PDFViewer from "../Components/PDFViewer.js";
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
        height: `calc(100vh - ${headerHeight}px - ${footerHeight}px - 10px)`,
    };

    return (
        <div style={resumePageContent}>
            <div class="header-button-container">
                <span class="spacer"></span>
                <span class="resume-header">Resume</span>
                <a href="/downloads/JackHale_Resume.pdf" download class="download-button">
                    <Button variant="outlined" sx={{ borderColor: '#D0BDF4' }} >
                        <p class="footer-button-text">Download</p>
                    </Button>
                </a>
            </div>
            <div class="embed-parent">
                <embed class="embed-content" src={process.env.PUBLIC_URL + '/images/JackHale_Resume.jpg'} type="image/jpg" />
            </div>
        </div>
    );
}