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
            <p class="about-header">About Me</p>
            <div class="about-content">
                <p class="section-heading">Career Profile</p>
                <p class="pure-paragraph"> Software engineer and accomplished leader, experienced in solving complex 
                    problems collaboratively. Strong foundation in algorithms, data structures, and software design 
                    with a track record of consistently meeting challenging project deadlines in fast-paced, agile 
                    environments. Committed to delivering excellent results, while working to create an inclusive, 
                    growth-oriented atmosphere.
                </p>
                <div class="tech-line">
                    <div class="tech-left">
                        <p class="tech-type">Language Fluency:{'\u00A0'}</p>
                        <p class="tech-list">JavaScript, HTML/CSS, Java, Python, C, C++, Bash</p>
                    </div>
                    <div class="tech-right">
                        <p class="tech-type">Other Technologies:{'\u00A0'}</p>
                        <p class="tech-list">Git, React, REST, Spring</p>
                    </div>
                </div>
                <div class="tech-line">
                    <div class="tech-left">
                        <p class="tech-type">Databases:{'\u00A0'}</p>
                        <p class="tech-list">MySQL, MariaDB</p>
                    </div>
                    <div class="tech-right">
                        <p class="tech-type">Operating Systems:{'\u00A0'}</p>
                        <p class="tech-list">Linux, macOS, Windows</p>
                    </div>
                </div>
                <p class="section-heading">Education</p>
                <div class="school-group">
                    <div class="school-info">
                        <p class="school-name">Baylor University,{'\u00A0'}</p>
                        <p class="school-location">Waco, TX - Bachelor of Science in Computer Science</p>
                    </div>
                    <p class="date">August 2019 - May 2023</p>
                </div>
                <p class="indent-paragraph">● Experience leading multiple development teams in academia using agile methodologies</p>
                <p class="indent-paragraph">● Relevant Coursework: Data Structures and Algorithms, Database Design, Data Communications, 
                    Operating Systems, Computer Architecture, and Cybersecurity
                </p>
                <p class="section-heading">Additional Information</p>
                <p class="indent-paragraph">● Enjoys community service, story-based video games, Labradoodles, traveling, and hiking</p>
            </div>
        </div>
    );
}