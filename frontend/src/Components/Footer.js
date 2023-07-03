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

  const openGitHub = () => {
    const url = 'https://github.com/jackhal/PersonalWebsite';
    window.open(url, '_blank');
  }

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
      setIsOpen(true);
  };
  
  return (
    <Box height="5vh" minHeight="35px" display="flex" justifyContent="space-between">
      <div className='left'>
        <Button variant="outlined" sx={{ borderColor: '#D0BDF4' }} onClick={() => openGitHub()}>
            <Typography variant="button" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                This site on{'\u00A0'}
            </Typography>
            <GitHubIcon style={{ color: '#D0BDF4'}}/>
        </Button>
      </div>
      <div className='middle'>
          <IconButton onClick={openModal}>
              <MailOutlineIcon style={{ color: '#D0BDF4' }} fontSize="large" />
          </IconButton>
          <IconButton>
              <LinkedInIcon style={{ color: '#D0BDF4' }} fontSize="large" />
          </IconButton>
          <IconButton>
              <GitHubIcon style={{ color: '#D0BDF4' }} fontSize="large" />
          </IconButton>
          <PopUpEmail isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className='right'>
        <Button variant="outlined" sx={{ borderColor: '#D0BDF4' }} onClick={() => routeChange('/other')}>
            <Typography variant="button" style={{ color: '#D0BDF4', textTransform: 'none' }}>
                Other fun things
            </Typography>
        </Button>
      </div>
    </Box>
  );
}