import {ImgHTMLAttributes} from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
  }

//Aplicar bordar por default para retirar a borda colocar hasBorder={false} 
export function Avatar({ hasBorder = true,...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
} 