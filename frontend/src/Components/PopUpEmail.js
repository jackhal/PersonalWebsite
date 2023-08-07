import ReactModal from 'react-modal';
import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import IconButton from '@mui/material/IconButton';
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

    return (
      <ReactModal width="40vw" isOpen={ isOpen } style={ modalStyle }>
        <div className="composeHeader">
          <p className="popUpText">{'\u00A0'}Compose Email</p>
          <IconButton disableRipple='true' sx={{"&:hover": {backgroundColor: "transparent", }}} onClick={ closeModal }>
            <CloseIcon style={{ color: '#D0BDF4' }} fontSize="small" />
          </IconButton>
        </div>

        <input type="text" class="subject-input" placeholder="Subject" />
        <textarea type="text" class="content-input" placeholder="Content" />
        <button className="rounded-button">Send</button>
      </ReactModal>
    );
}
 
export default PopUpEmail;