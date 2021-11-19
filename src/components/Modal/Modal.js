import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import style from './StylesModal.module.css';

const modalRoot = document.getElementById('modal-root');

export default function Modal({ children, toggleModal }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [toggleModal]);

  const onBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return createPortal(
    <div className={style.modalOverlay} onClick={onBackdropClick}>
      <div className={style.modalContent}>{children}</div>
    </div>,
    modalRoot
  );
}

Modal.defaultProps = {
  children: null,
  toggleModal: () => {},
};
