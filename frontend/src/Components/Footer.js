import React, { useState } from "react";
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

export default function Footer() {

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
    <div style={{ position: "absolute", bottom: 0, width: '100%' }}>
      <Box display="flex" justifyContent="space-between">
        <div className='left'>
          <Button variant="outlined" sx={{ borderColor: '#D0BDF4' }} onClick={() => openURL('https://github.com/jackhal/PersonalWebsite')}>
              <Typography variant="button" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                  This site on{'\u00A0'}
              </Typography>
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
        <div className='right'>
          <Button variant="outlined" sx={{ borderColor: '#D0BDF4' }} onClick={() => routeChange('/PersonalWebsite/other')}>
              <Typography variant="button" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                  Other fun things
              </Typography>
          </Button>
        </div>
      </Box>
    </div>
  );
}