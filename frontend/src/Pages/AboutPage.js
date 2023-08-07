import Typography from '@mui/material/Typography';
import { HeaderContext } from "../Contexts/HeaderContext.js";
import { FooterContext } from "../Contexts/FooterContext.js";
import React, { useContext } from 'react';
import './AboutPage.css';

export default function AboutPage() {
    
    const { headerHeight } = useContext(HeaderContext);
    const { footerHeight } = useContext(FooterContext);
    
    const aboutPageContent = {
        overflowY: 'auto',
        position: 'fixed',
        top: headerHeight,
        bottom: footerHeight,
        width: '100%',
        height: `calc(100svh - ${headerHeight}px - ${footerHeight}px - 10px)`,
    };

    return (
        <div style={ aboutPageContent }>
            <Typography variant="h2" align="center" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                About Me
            </Typography>
            <p>Career Profile</p>
            <p> Software engineerand accomplished leader, experienced in solving complex problems collaboratively. 
                Strong foundation in algorithms, data structures, and software design with a track record of 
                consistently meeting challenging project deadlines in fast-paced, agile environments. Committed to 
                delivering excellent results, while working to create an inclusive, growth-oriented atmosphere.
            </p>
            <div>
                <div>
                    <p>Language Fluency:</p>
                    <p>JavaScript, HTML/CSS, Java, Python, C, C++, Bash</p>
                </div>
                <div>
                    <p>Other Technologies:</p>
                    <p>Git, React, REST, Spring</p>
                </div>
            </div>
            <div>
                <div>
                    <p>Databases:</p>
                    <p>MySQL, MariaDB</p>
                </div>
                <div>
                    <p>Operating Systems:</p>
                    <p>Linux, macOS, Windows</p>
                </div>
            </div>
            <p>Education</p>
            <div>
                <div>
                    <p>Baylor University,</p>
                    <p>Waco, TX - Bachelor of Science in Computer Science</p>
                </div>
                <p>August 2019 - May 2023</p>
            </div>
            <p>• Experience leading multiple development teams in academia using agile methodologies</p>
            <p>• Relevant Coursework: Data Structures and Algorithms, Database Design, Data Communications, 
                Operating Systems, Computer Architecture, and Cybersecurity
            </p>
            <p>Additional Information</p>
            <p>● Enjoys community service, story-based video games, Labradoodles, traveling, and hiking</p>
        </div>
    );
}