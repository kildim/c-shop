import {ReactNode} from 'react';

type ModalOverlayProps = {
  handleClosePopup?: () => void | null,
  children: ReactNode,
}

export type {ModalOverlayProps}
