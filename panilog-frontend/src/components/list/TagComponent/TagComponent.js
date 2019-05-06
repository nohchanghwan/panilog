import React from 'react';
import styles from './TagComponent.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const TagComponent = ({tag}) => {
  
  if(!tag) return null;
  //메인페이지에서는 태그값이 없으니까 null로 태그컴포넌트 숨기기
  return (
    <div className={cx('design')}>
      <div className={cx('font')}>
      '{tag}' 
      </div>
      <div>
        에 해당하는 글들
      </div>
    </div>
  );
}


export default TagComponent;