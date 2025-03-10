import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Icon({variant = ICONS_BY_VARIANT.notice}) {
    const Icon = ICONS_BY_VARIANT[variant]
    return (
        <>
            <Icon size={24}/>
        </>
    )
}

function Toast({variant, message, setIsVisible}) {
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon variant={variant}/>
      </div>
      <p className={styles.content}>
          {message}
      </p>
      <button className={styles.closeButton}>
        <X size={24} onClick={()=> setIsVisible(false)} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
