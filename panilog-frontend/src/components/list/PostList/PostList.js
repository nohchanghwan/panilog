import React from 'react';
import styles from './PostList.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';


//List화면 데이터렌더링
import moment from 'moment';
import removeMd from 'remove-markdown';

//폰트어썸추가
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons'
library.add(faTags)



const cx = classNames.bind(styles);
// 데이터
// title 
// body 
// tags 
// created_at 

const PostItem = ({title, body, created_at, tags, id}) => {
  
  const tagList = tags.map(
    tag => 
      <Link key={tag} to={`/tag/${tag}`}>#{tag}</Link>

  );
  
  return (
    <div className={cx('post-item')}>
      <h2><Link to={`/post/${id}`}>{title}</Link></h2>
      <div className={cx('date')}>{moment(created_at).format('ll')}</div>
      <p>{removeMd(body)}</p>
      <div className={cx('tags')}>
        <FontAwesomeIcon icon={'tags'} />&nbsp;        
        {tagList}
      </div>
    </div>
  )
}

const PostList = ({posts}) => {
  const postList = posts.map(
    (post) => {
      const { id, title, body, created_at, tags } = post.toJS();
      return (
        <PostItem
          title={title}
          body={body}
          publishedDate={created_at}
          tags={tags}
          key={id}
          id={id}
        />
      )
    }
  );
  return(
    <div className = {cx('post-list')}>
      {postList}
    </div>
  )
}
// const PostList = () => (
//   <div className={cx('post-list')}>
//     <PostItem/>
//   </div>
// );

export default PostList;


