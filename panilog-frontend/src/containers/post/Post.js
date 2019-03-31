import  React, { Component } from 'react';
import PostInfo from 'components/post/PostInfo';
import PostBody from 'components/post/PostBody';
import * as postActions from 'store/modules/post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


//리덕스 스토어에 있는 데이터를 컴포넌트로 전달
//Didmount발생할때 이니셜라이즈하고 그때 Async Await로 id를 불러옴

class Post extends Component {
  initialize = async () => {
    const { PostActions, id } = this.props;
    try {
      await PostActions.getPost(id);
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    this.initialize();
  }
  
  render() {
    const { loading, post } = this.props;
    
    if(loading) return null; // 로딩 중일 때는 아무것도 보여주지 않음

    const { title, body, tags } = post.toJS();

    return (
      <div>
        <PostInfo title={title} tags={tags}/>
        <PostBody body={body}/>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    post: state.post.get('post'),
    loading: state.pender.pending['post/GET_POST'] // 로딩 상태
  }),
  (dispatch) => ({
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(Post);