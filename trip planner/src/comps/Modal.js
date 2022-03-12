import React from 'react';

const Modal = ({ setSelectedImg, selectedImg }) => {

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  }

  return (
    <div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
    >
      <img src={selectedImg} alt="enlarged pic" 
        initial={{ y: "-100vh" }}
      />
    </div>
  )
}

export default Modal;