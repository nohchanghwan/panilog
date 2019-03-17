import React from 'react';
import styles from './Pagination.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const Pagination = () => (
  <div className={cx('pagination')}>
    <Button disabled>
    이전페이지
    </Button>
    <div className={cx('number')}>
    페이지1
    </div>
    <Button>
    다음페이지  
    </Button>
  </div>
);

export default Pagination;