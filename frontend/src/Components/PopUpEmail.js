import ReactModal from 'react-modal';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CheckIcon from '@mui/icons-material/Check';
import ListItemIcon from '@mui/material/ListItemIcon';
import './PopUpEmail.css';
 
function PopUpEmail({ isOpen, setIsOpen }) {

    const closeModal = () => {
        setIsOpen(false);
    };

    function openGmailDraft(emailAddress, subject, body) {
      const encodedEmailAddress = encodeURIComponent(emailAddress);
      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(body);

      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedEmailAddress}&su=${encodedSubject}&body=${encodedBody}`;
    
      window.open(gmailUrl, '_blank');
    }

    const openOutlookDraft = (emailAddress, subject, body) => {
      const encodedEmailAddress = encodeURIComponent(emailAddress);
      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(body);
      
      const outlookUrl = `https://outlook.live.com/owa/?path=/mail/action/compose&to=${encodedEmailAddress}&subject=${encodedSubject}&body=${encodedBody}`;
    
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
    const [selectedOption, setSelectedOption] = useState('Gmail');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
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

    const handleSend = () => {
      if(selectedOption == 'Gmail'){
        openGmailDraft('forwardthistojackplease@gmail.com', subject, body);
      }else if(selectedOption == 'Outlook'){
        openOutlookDraft('forwardthistojackplease@gmail.com', subject, body);
      }
    };

    const handleSubject = () => {
      setSubject(document.getElementById("subjectField").value);
    };

    const handleBody = () => {
      setBody(document.getElementById("bodyField").value);
    };

    return (
      <ReactModal width="40vw" isOpen={ isOpen } style={ modalStyle }>
        <div class="composeHeader">
          <p class="popUpText">{'\u00A0'}Compose Email</p>
          <IconButton disableRipple='true' sx={{"&:hover": {backgroundColor: "transparent", }}} onClick={ closeModal }>
            <CloseIcon style={{ color: '#D0BDF4' }} fontSize="small" />
          </IconButton>
        </div>

        <input type="text" class="subject-input" id="subjectField" placeholder="Subject" onChange={() => { handleSubject() }} />
        <textarea type="text" class="content-input" id="bodyField" placeholder="Content" onChange={() => { handleBody() }} />
        <div class="oval-button-container">
          <button class="rounded-button" onClick={() => { handleSend() }}>Send</button>
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