import {ReactNode} from 'react';

type ModalOverlayProps = {
  onClosePopup?: () => void | null,
  children: ReactNode,
}

export type {ModalOverlayProps}
