import ReactModal from 'react-modal';
import React from 'react';
import Button from '@mui/material/Button';
 
function PopUp({ isOpen, setIsOpen }) {

    const closeModal = () => {
        setIsOpen(false);
    };

    const modalStyle = {
        content: {
          width: '40vw',
          height: '40vh',
          margin: 'auto',
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
 
export default PopUp;