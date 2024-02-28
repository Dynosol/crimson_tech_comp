import { useState } from 'react';
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('modal')

export default function Modal() {
  // access modal root element with
  // this is where the modal should be rendered and destroyed

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      {
        // TODO: handle button click to change state
      }
      <button onClick={toggleModal}>Click Me!</button>

      {
        // TODO: conditionally show this based on open state
      }
      
      {isOpen && createPortal(
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '20rem',
            height: '20rem',
            padding: '1rem',
            border: '1px solid',
          }}
        >
          Modal content
          <button onClick={toggleModal}>Close</button>
        </div>,
        modalRoot as Element,
      )}
    </>
  )
}
