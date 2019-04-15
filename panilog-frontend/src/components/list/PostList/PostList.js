import React from 'react';
import styles from './PostList.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

//폰트어썸추가
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons'
library.add(faTags)


const cx = classNames.bind(styles);

const PostItem = () => {
  return (
    <div className={cx('post-item')}>
      <h2><a>이글은 첫번째 포스트입니다</a></h2>
      <div className={cx('date')}>2017-10-24</div>
      <p>내용</p>
      <div className={cx('tags')}>
        <FontAwesomeIcon icon={'tags'} color='#2B1B17'/> 
        <a>#태그</a>
        <a>#태그</a>
        <a>#태그</a>
      </div>
    </div>
  )
}
const PostList = () => (
  <div className={cx('post-list')}>
    <PostItem/>
    <PostItem/>
    <PostItem/>
    <PostItem/>
    <PostItem/>
    <PostItem/>
    <PostItem/>
  </div>
);

export default PostList;
