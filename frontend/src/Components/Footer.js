import React, { useState, useRef, useContext, useEffect } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from "@mui/material/IconButton";
import PopUpEmail from '../Components/PopUpEmail';
import { FooterContext } from '../Contexts/FooterContext.js';

export default function Footer() {

  const footerRef = useRef();
  const { setFooterHeight } = useContext(FooterContext);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for(let entry of entries) {
        setFooterHeight(entry.contentRect.height);
      }
    });

    if(footerRef.current) {
      resizeObserver.observe(footerRef.current);
    }

    return () => {
      if(footerRef.current) {
        resizeObserver.unobserve(footerRef.current);
      }
    };
  }, [setFooterHeight]);

  let navigate = useNavigate(); 

  const routeChange = (path) =>{
    navigate(path);
  }

  const openURL = (url) => {
    window.open(url, '_blank');
  }

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
      setIsOpen(true);
  };
  
  return (
    <div className="footerBar" ref={ footerRef }>
      <div className="leftAndMiddle">
      <div className='left'>
        <Button variant="outlined" sx={{ borderColor: '#D0BDF4' }} onClick={() => openURL('https://github.com/jackhal/PersonalWebsite')}>
          <p class="footer-button-text">This site on{'\u00A0'}</p>
          <GitHubIcon style={{ color: '#D0BDF4'}}/>
        </Button>
      </div>
      <div className='middle'>
        <IconButton disableRipple='true' sx={{"&:hover": {backgroundColor: "transparent", }}} onClick={openModal}>
          <MailOutlineIcon style={{ color: '#D0BDF4' }} fontSize="large" />
        </IconButton>
        <IconButton disableRipple='true' sx={{"&:hover": {backgroundColor: "transparent", }}} onClick={ () => openURL('https://www.linkedin.com/in/jackhale23/') }>
          <LinkedInIcon style={{ color: '#D0BDF4' }} fontSize="large" />
        </IconButton>
        <IconButton disableRipple='true' sx={{"&:hover": {backgroundColor: "transparent", }}} onClick={ () => openURL('https://github.com/jackhal') }>
          <GitHubIcon style={{ color: '#D0BDF4' }} fontSize="large" />
        </IconButton>
        <PopUpEmail isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      </div>
      <div className='right'>
        <Button variant="outlined" sx={{ borderColor: '#D0BDF4' }} onClick={() => routeChange('/PersonalWebsite/other')}>
          <p class="footer-button-text">Other fun things</p>
        </Button>
      </div>
    </div>
  );
}