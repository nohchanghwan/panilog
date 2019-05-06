import React from "react";
import { scaleRotate as Menu } from "react-burger-menu";
import styles from './Hamburgerbar.scss';
import classNames from 'classnames/bind';
import HeaderContainer2 from 'containers/common/HeaderContainer2';


const cx = classNames.bind(styles);

export default props => {
  return (
    // Pass on our props

    <Menu {...props} className={cx('menu-custom')} right  >
    <div  className={cx('test')}>
      .
    </div>
      <a className={cx('title')} href="/">
        기술블로그
      </a>
      <HeaderContainer2/>
      <a className="menu-item" href="/">
        메인으로
      </a>

      <a className={cx('subtitle')} >
        Category
      </a>

      <a className="menu-item" href="/desserts">
      </a>
      
    </Menu>

  );
};
