import React from 'react';
import Disqus from 'disqus-react';
// Alternatively, import specific members:
//import { DiscussionEmbed, CommentCount } from 'disqus-react';

class Disqus2 extends React.Component {
    

    render() {
        const disqusShortname = 'test-blog-tziqqjqcfx';
        const disqusConfig = {
            url: 'http://217cfc6f.ngrok.io/post/'+ this.props.disqusid,
            //URL은 의미가없는건가
            //아니다 의미가있다. 위 유알엘이랑 매핑이되야함 그니까 url + post/id 랑 
            //identifier이랑 매핑이되야하는거같은데..
            identifier: this.props.disqusid
            
        };

        return (
            <div className="article">
                
                <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
                </Disqus.CommentCount> 개의 댓글이 달렸습니다           
                <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div>
        );
    }
}
export default Disqus2;