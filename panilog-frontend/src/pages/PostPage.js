import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
//import PostInfo from 'components/post/PostInfo';
//import PostBody from 'components/post/PostBody';
import Post from 'containers/post/Post'

//이제는 하나의 컨테이너에서 가져오고 가져온값은 match 그중 id 
const PostPage = ({match}) => {
  const { id } = match.params;
  console.log('아래아');
  console.log(id);
  return (
    <PageTemplate>
      <Post id={id}/>
    </PageTemplate>
  );
};

export default PostPage;
