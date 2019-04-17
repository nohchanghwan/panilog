import React from 'react';
import styles from './PostBody.scss';
import classNames from 'classnames/bind';

import MarkdownRender from 'components/common/MarkdownRender';
import MyDisqus from 'components/post/Disqus/Disqus';

const cx = classNames.bind(styles);

const PostBody = ({body,id}) => (
  <div className={cx('post-body')}>
    <div className={cx('paper')}>
      <MarkdownRender markdown={body}/>
    </div>
    <div className={cx('comment')}>
      <MyDisqus disqusid={id}/>
    </div>
    
    
  </div>
  
);


export default PostBody;
