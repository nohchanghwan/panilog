import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from 'components/common/Button';
// import Hamburgerbar from 'components/common/Hamburgerbar';
// import { scaleRotate as Menu } from 'react-burger-menu'


const cx = classNames.bind(styles);

const Header = ({postId,onRemove}) => (
  
  <header className={cx('header')}>
    <div className={cx('header-content')}>

      <div className={cx('brand')}>
      
        <Link to="/"> 기술블로그</Link>
      </div>
      <div className={cx('right')}>
        {
          // flex를 유지하기 위하여 배열 형태로 렌더링합니다.
          postId && [
            <Button key="edit" theme="custom" to={`/editor?id=${postId}`}>수정</Button>,
            <Button key="remove" theme="custom" onClick={onRemove}>삭제</Button>
          ]
        }
        <Button theme="custom" to="/editor">새 포스트</Button>
      </div> 
    </div>
  </header>
);

export default Header;
