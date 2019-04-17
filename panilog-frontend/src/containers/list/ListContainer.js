import React , {Component} from 'react';
import PostList from 'components/list/PostList';
import Pagination from 'components/list/Pagination';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listActions from 'store/modules/list';

class ListContainer extends Component {
    //api 호출하고 데이터를 PostList 와 Pagination에 넣어줌


    getPostList = () => {
        const {tag, page, ListActions} = this.props;
        //부모컨테이너(ListPage)로부터 인자값을 받아옴 
        ListActions.getPostList({
            page,tag
        });
    }


    componentDidMount(){
        this.getPostList();
    }


    //페이지값이 변하면 리스트를 새로불러오도록
    componentDidUpdate(prevProps, prevState){
        if(prevProps.page !== this.props.page || prevProps.tag !== this.props.tag) {
            //만약 이전상태와값들과 지금상태값이다르다면
            document.documentElement.scrollTop = 0;
            // 화면맨위로
        }
    }
    
    
    render() {
      const { loading, tag, posts, page, lastPage } = this.props;
      if(loading) return null;
      return(
          <div>
              <PostList posts={posts}/>
              <Pagination page={page} lastPage={lastPage} tag={tag} />
          </div>
      );
    }
}

  
  export default connect(
    (state) => ({
      lastPage: state.list.get('latePage'),
      posts: state.list.get('posts'),
      loading: state.pender.pending['list/GET_POST_LIST']
    }),
    (dispatch) => ({
        ListActions: bindActionCreators(listActions, dispatch)
    })
  )(ListContainer);
  
