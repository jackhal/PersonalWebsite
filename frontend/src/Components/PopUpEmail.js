import ReactModal from 'react-modal';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckIcon from '@mui/icons-material/Check';
import ListItemIcon from '@mui/material/ListItemIcon';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import './PopUpEmail.css';
 
function PopUpEmail({ isOpen, setIsOpen }) {

    const closeModal = () => {
        setIsOpen(false);
    };

    const openGmailDraft = (emailAddress) => {
      const encodedEmailAddress = encodeURIComponent(emailAddress);
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${encodedEmailAddress}`;
    
      window.open(gmailUrl, '_blank');
    }

    function openOutlookDraft(emailAddress) {
      const encodedEmailAddress = encodeURIComponent(emailAddress);
      const outlookUrl = `https://outlook.office.com/mail/deeplink/compose?to=${encodedEmailAddress}`;
    
      window.open(outlookUrl, '_blank');
    }

    const modalStyle = {
      content: {
        width: '50vw',
        height: '50vh',
        margin: 'auto',
        backgroundColor: '#494D5F',
        border: '1px solid #D0BDF4',
      },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const [gmail, setGmail] = useState(true)
    const [selectedOption, setSelectedOption] = useState('Gmail');
    const open = Boolean(anchorEl);

    const openDropDown = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = (option) => {
      setSelectedOption(option);
      closeDropDown();
    };

    const closeDropDown = () => {
      setAnchorEl(null);
    };

    return (
      <ReactModal width="40vw" isOpen={ isOpen } style={ modalStyle }>
        <div class="composeHeader">
          <p class="popUpText">{'\u00A0'}Compose Email</p>
          <IconButton disableRipple='true' sx={{"&:hover": {backgroundColor: "transparent", }}} onClick={ closeModal }>
            <CloseIcon style={{ color: '#D0BDF4' }} fontSize="small" />
          </IconButton>
        </div>

        <input type="text" class="subject-input" placeholder="Subject" />
        <textarea type="text" class="content-input" placeholder="Content" />
        <div class="oval-button-container">
          <button class="rounded-button">Send</button>
          <IconButton disableRipple='true' class="small-rounded-button" onClick={openDropDown}>
            <PlayArrowIcon style={{ transform: 'rotate(90deg)', marginTop: '2px'}} fontSize="small" />
          </IconButton>


          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={closeDropDown}
            onClick={closeDropDown}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={() => { handleMenuClick('Gmail') }}>
              Gmail
              {selectedOption === 'Gmail' && (
                <ListItemIcon>
                  <CheckIcon fontSize="small" />
                </ListItemIcon>
              )}
            </MenuItem>
            <MenuItem onClick={() => { handleMenuClick('Outlook') }}>
              Outlook
              {selectedOption === 'Outlook' && (
                <ListItemIcon>
                  <CheckIcon fontSize="small" />
                </ListItemIcon>
              )}
            </MenuItem>
          </Menu>
        </div>
      </ReactModal>
    );
}
 
export default PopUpEmail;