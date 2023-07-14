import ReactModal from 'react-modal';
import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
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
        width: '40vw',
        height: '40vh',
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
        
        <Typography variant="button" style={{ color: '#D0BDF4', textTransform: 'none' }}>
          Use the buttons below to start a draft on either service which will be forwarded to my personal email.
        </Typography>
        
        <div>
          <Button onClick= { () => openGmailDraft("test@gmail.com") }>
            <Typography variant="button" style={{ color: '#D0BDF4', textTransform: 'none' }}>
              Gmail
            </Typography>
          </Button>
          <Button onClick= { () => openOutlookDraft("test@gmail.com") }>
            <Typography variant="button" style={{ color: '#D0BDF4', textTransform: 'none' }}>
              Outlook
            </Typography>
          </Button>
        </div>


        <div>
          <MailOutlineIcon style={{ color: '#D0BDF4' }} fontSize="large" />
          <MailOutlineIcon style={{ color: '#D0BDF4' }} fontSize="large" />
        </div>

        <div className="closeButton">
          <Button onClick={ closeModal }>
            <Typography variant="button" style={{ color: '#D0BDF4', textTransform: 'none' }}>
              Close
            </Typography>
          </Button>
        </div>
      </ReactModal>
    );
}
 
export default PopUpEmail;