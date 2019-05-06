import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

//폰트어썸추가
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(faStroopwafel,fab)

const cx = classNames.bind(styles);

const Footer = () => (
  <footer className={cx('footer')}>
      <il className={cx('inline')}>
        <div  className={cx('icon')}>
          <FontAwesomeIcon icon={['fab', 'trello']} />        
          Trello &nbsp;
        </div>
        <div className={cx('icon2')}>
          <FontAwesomeIcon icon={['fab', 'slack']} />       
          Slack
        </div>
      </il>
    {/* <Link to="/" className={cx('brand')}>tech.blog</Link> */}
    <div className={cx('admin-login')}>관리자 로그인</div>
    <div className={cx('admin-login')}>Copyright ©KB Corp. All Rights Reserved.</div>

  </footer>
);

export default Footer;
