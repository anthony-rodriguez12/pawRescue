import { SnackBarDesign, SnackBarType } from '../interfaces';

export const snackBar: Record<SnackBarType, SnackBarDesign> = {
  sucess: {
    background: {
      color: 'bg-teal-100',
      border: 'border-t-4 border-teal-500',
      text: 'text-teal-900',
    },
    icon: {
      color: 'text-teal-500',
      size: 'fs-text',
      name: 'i bi-check-circle',
    },
    close: {
      icon: 'bi bi-x-square',
      size: 'fs-text',
      color: 'text-teal-600',
    },
  },
  warning: {
    background: {
      color: 'bg-yellow-100',
      border: 'border-t-4 border-yellow-500',
      text: 'text-yellow-900',
    },
    icon: {
      color: 'text-yellow-600',
      size: 'fs-text',
      name: 'bi bi-exclamation-diamond',
    },
    close: {
      icon: 'bi bi-x-square',
      size: 'fs-text',
      color: 'text-yellow-600',
    },
  },
  danger: {
    background: {
      color: 'bg-red-100',
      border: 'border-t-4 border-red-500',
      text: 'text-red-900',
    },
    icon: {
      color: 'text-red-600',
      size: 'fs-text',
      name: 'bi bi-x-circle',
    },
    close: {
      icon: 'bi bi-x-square',
      size: 'fs-text',
      color: 'text-red-600',
    },
  },
};
