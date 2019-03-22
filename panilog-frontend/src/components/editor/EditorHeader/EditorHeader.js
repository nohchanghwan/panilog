import React from 'react';
import styles from './EditorHeader.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const EditorHeader = ({onGoBack, onSubmit}) => {
  return (
    <div className={cx('editor-header')}>
      <div className={cx('back')}>
        <Button theme="custom"  to="/" onClick={onGoBack} >뒤로가기</Button>
      </div>
      <div className={cx('submit')}>
        <Button theme="custom" onClick={onSubmit} >작성하기</Button>
      </div>
    </div>
  );
};

export default EditorHeader;
