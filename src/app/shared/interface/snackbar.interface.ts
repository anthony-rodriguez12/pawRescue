
export interface SnackBarConfig {
  title: string;
  type: SnackBarType;
}

export type SnackBarType = 'sucess' | 'danger' | 'warning';

export interface SnackBarDesign {
  background: SnackBackground,
  icon: SnackIcon,
  close: SnackClose
}

export interface SnackBackground {
  color: string,
  border: string,
  text: string,
}

export interface SnackIcon {
  color: string,
  size: string,
  name: string,
}

export interface SnackClose {
  icon: string,
  size: string,
  color: string
}