import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import style from './StylesModalOverlay.module.css';
import styleModalBtn from '../Button/StylesModalBtnClose.module.css';
import Button from '../Button/Button';
import { ReactComponent as IconCross } from '../../images/icons/icon-cross.svg';

const modalRoot = document.getElementById('modal-root');

export default function Modal({ children, toggleModal, className, ...props }) {
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
      <div className={className} {...props}>
        <Button
          className={styleModalBtn.modalBtnClose}
          type="button"
          onClick={toggleModal}
        >
          <IconCross />
        </Button>
        {children}
      </div>
    </div>,
    modalRoot
  );
}

Modal.defaultProps = {
  children: null,
  toggleModal: () => {},
};
