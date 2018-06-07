import React from 'react';

const Modal = (props) => {
  if (!props.show) {
    return null;
  } else {
    return (
      <div className='modal-overlay-div' onClick={() => props.toggleModal(null)}>
        <div className='modal-content-div' >
        <div className="modal-dialog-div" onClick={props.preventClose}>
          {<props.currentModalDisplay/>}
          <button onClick={() => props.toggleModal(null)}>
            Apply
          </button>
        </div>
        </div>
      </div>
    );
  }
}

export default Modal
