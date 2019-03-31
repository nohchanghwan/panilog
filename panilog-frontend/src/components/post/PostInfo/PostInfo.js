import React from 'react';
import styles from './PostInfo.scss';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
import moment from 'moment';

const cx = classNames.bind(styles);

// const PostInfo = () => (
//   <div className={cx('post-info')}>
//     <div className={cx('info')}>
//       <h1>타이틀</h1>
//       <div className={cx('tags')}>
//         <a>#태그</a> <a>#태그</a> <a>#태그</a>
//       </div>
//       <div className={cx('date')}>Oct 29, 2017</div>
//     </div>
//   </div>
// );

const PostInfo = ({created_at, title, tags}) => (
  <div className={cx('post-info')}>
    <div className={cx('info')}>
      <h1>{title}</h1>
      <div className={cx('tags')}>
        {
          //태그존재할때만 map 실행
          tags && tags.map(
            tag => <Link key={tag} to={'/tag/${tag}'}>#{tag}</Link>
          )
        }
      </div>
      <div className={cx('date')}>{moment(created_at).format('ll')}</div>
    </div>
  </div>
);
export default PostInfo;
