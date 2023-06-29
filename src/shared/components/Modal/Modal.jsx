import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

import { ReactComponent as CrossIcon } from 'images/icons/cross-small.svg';
import styles from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  const handleClose = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleClose);

    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  }, [handleClose]);

  return createPortal(
    <div className={styles.backdrop} onClick={handleClose}>
      <div className={styles.modal}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="close"
        >
          <CrossIcon className={styles.closeIcon} width={24} height={24} />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
