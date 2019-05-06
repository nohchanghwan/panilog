import React from 'react';
import styles from './Title.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Title = ({tag,id,title,tags}) => {

  //메인페이지에서는 태그값이 없으니까 null로 태그컴포넌트 숨기기
  

  if(!tag && !id) return (
  <div className={cx('com')} href="/">
    <a className={cx('title')} href="/">
    기술 블로그
    </a>
    <div className={cx('design')}>
        <div className={cx('tag')}>
        메인입니다
        </div>
        <div>
          ㅎㅎㅎㅎ
        </div>
      </div>
  </div>
  )

  if(id) return (
    <div className={cx('com')} href="/">
      <a className={cx('title')} href="/">
        기술 블로그
      </a>
      <div className={cx('design')}>
        <div className={cx('tag')}>
        '{id}','{title}' 
        </div>
        <div>
          에 해당하는글들
        </div>
      </div>
    </div>
    )

    if(tag) return (
    <div className={cx('com')} href="/">
      <a className={cx('title')} href="/">
        기술 블로그
      </a>
      <div className={cx('design')}>
        <div className={cx('tag')}>
        '{tag}' 
        </div>
        <div>
          에 해당하는글들
        </div>
      </div>
    </div>
  )
}

export default Title;