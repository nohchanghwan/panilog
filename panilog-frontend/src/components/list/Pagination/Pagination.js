import React from 'react';
import styles from './Pagination.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

//폰트어썸추가
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft , faChevronRight} from '@fortawesome/free-solid-svg-icons'
library.add(faChevronLeft,faChevronRight)

const cx = classNames.bind(styles);
// 컨테이너에서 <Pagination page={page} lastPage={lastPage} tag={tag} /> 로 데이터받음

const Pagination = ({page,lastPage,tag}) => {

  const createPagePath = (page) => {
    return tag ? `/tag/${tag}/${page}` : `/page/${page}`;
  }
  return (
    <div className={cx('pagination')}>

      <Button disabled={page === 1} to ={createPagePath(page - 1)}>
        <FontAwesomeIcon icon={'chevron-left'} />
      </Button>
      <div className={cx('number')}>
        페이지 {page}
      </div>
      <Button disabled={page === lastPage} to ={createPagePath(page + 1)}>
        <FontAwesomeIcon icon={'chevron-right'} />
      </Button>
    </div>
  );
};
export default Pagination;


