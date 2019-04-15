import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';
 
class Disqus extends React.Component {
  handleNewComment(comment) {
    console.log(comment.text);
  }
 
  render() {
    return (
      <ReactDisqusComments
        shortname="panilog"
        identifier="something-unique-12345"
        title="Example Thread"
        url="http://9eb8c4a6.ngrok.io"
        category_id="89"
        onNewComment={this.handleNewComment}/>
    );
  }
}
 
export default Disqus;