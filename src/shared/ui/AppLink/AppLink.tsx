import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/className/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string,
  theme?: AppLinkTheme,
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { 
    children, 
    to, 
    className,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps 
  } = props;

  return (
    <Link 
      to={to} 
      className={classNames(cls.AppLink, {[cls[theme]]: true}, [className])} 
      {...otherProps}
    >
      {children}
    </Link>
  )
};
