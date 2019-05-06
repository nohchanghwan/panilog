import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from 'components/common/Button';
// import Hamburgerbar from 'components/common/Hamburgerbar';
// import { scaleRotate as Menu } from 'react-burger-menu'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft , faChevronRight} from '@fortawesome/free-solid-svg-icons'
library.add(faChevronLeft,faChevronRight)


const cx = classNames.bind(styles);

const Header = ({postId,onRemove}) => (
  
  <header className={cx('header')}>
    <div className={cx('header-content')}>

      <Button theme="newpost" to="/editor"> 새 글작성</Button>
      <FontAwesomeIcon icon={'chevron-left'} />

    </div>
 
    <div className={cx('header-content')}>
      { postId && 
              <Button key="edit" theme="newpost" to={`/editor?id=${postId}`}>글 수정하기</Button>
        } 
    </div>
    <div className={cx('header-content')}>
      { postId && 
              <Button key="remove" theme="newpost" onClick={onRemove}>글 삭제하기</Button>
        } 
    </div>
  </header>
);

export default Header;
