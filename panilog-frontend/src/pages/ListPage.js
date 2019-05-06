import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
// import PostList from 'components/list/PostList';
// import Pagination from 'components/list/Pagination';
import ListContainer from 'containers/list/ListContainer';
import TagComponent from 'components/list/TagComponent';

const ListPage = ({match}) => {

  const { page = 1, tag } = match.params; 

  return (
    
    <PageTemplate tag={tag}>
      {/* <TagComponent tag={tag}/> */}
      <ListWrapper>
          <ListContainer 
          page = {parseInt(page,10)}
          tag = {tag}
          />
       
        </ListWrapper>
    </PageTemplate>
  );

  
};

export default ListPage;
