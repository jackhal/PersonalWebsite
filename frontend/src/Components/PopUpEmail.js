import ReactModal from 'react-modal';
import React from 'react';
import Button from '@mui/material/Button';
 
function PopUpEmail({ isOpen, setIsOpen }) {

    const closeModal = () => {
        setIsOpen(false);
    };

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
      <div>
        <ReactModal width="40vw" isOpen={ isOpen } style={ modalStyle } contentLabel="Example Modal">
          This is the content of the modal.
            <Button onClick={ closeModal }>Close</Button>
        </ReactModal>
      </div>
    );
}
 
export default PopUpEmail;