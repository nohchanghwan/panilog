import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);


const Div = ({children, ...rest}) => <div {...rest}>{children}</div>


const Button = ({
  children, to, onClick, disabled, theme = 'default',
}) => {
  // to 값이 존재하면 Link사용, 그렇지 않으면 div사용
  // 비활성화되어 있는 버튼 ==  div사용
    const Element = (to && !disabled) ? Link : Div;

  // 비활성화되면 onClick은 실행X
  // disabled 값이 true가 되면 className에 disabled가 추가
  return (
    <Element 
      to={to} 
      className={cx('button', theme, { disabled })} 
      onClick={disabled ? () => null : onClick}>
      {children}
    </Element>
  )
}

export default Button;