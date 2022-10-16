import {ReactNode} from 'react';

type ModalOverlayProps = {
  onClosePopup?: () => void,
  children: ReactNode,
  drillProps?: Partial<any>,
}

export type {ModalOverlayProps}
