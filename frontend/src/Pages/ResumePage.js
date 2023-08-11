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
            <p class="resume-header">My Resume</p>
            <a href="/downloads/JackHale_Resume.pdf" download>
                <button class="button-85" role="button">Download</button>
            </a>
            <PDFViewer url={process.env.PUBLIC_URL + '/downloads/JackHale_Resume.pdf'} />
        </div>
    );
}