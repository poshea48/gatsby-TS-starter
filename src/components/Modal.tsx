import React, { useEffect, useRef, FunctionComponent } from 'react';
import { createPortal } from 'react-dom';
import styled from '../styles/customStyled';

// set z-index to 100 to cover everything
// NavMenus and Auth forms will be set to 105
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.black.light};
  width: 100%;
  height: 100%;
  z-index: 100;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;
type ModalProps = {
  close: () => void;
  mode: string;
};

let modalRoot: HTMLElement | null;

const Modal: FunctionComponent<ModalProps> = ({ close }) => {
  const elRef = useRef(document.createElement('div'));

  if (!elRef.current) {
    const div = document.createElement('div');
    elRef.current = div;
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      modalRoot = document.getElementById('modal');
    }
    if (!modalRoot) return;

    modalRoot.appendChild(elRef.current);
    return () => {
      modalRoot && modalRoot.removeChild(elRef.current);
    };
  }, []);

  return createPortal(
    <ModalWrapper role="dialog" onClick={() => close()} />,
    elRef.current
  );
};

export default Modal;
