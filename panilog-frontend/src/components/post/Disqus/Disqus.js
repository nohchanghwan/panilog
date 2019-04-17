import React from 'react';
import Disqus from 'disqus-react';
//import { DiscussionEmbed, CommentCount } from 'disqus-react';

class DisqusComponent extends React.Component {
    

    render() {
        const disqusShortname = 'test-blog-tziqqjqcfx';
        const disqusConfig = {
            url: 'http://217cfc6f.ngrok.io/post/'+ this.props.disqusid,
            //URL은 의미가 없는건가
            //아니다 의미가있다. 위 유알엘이랑 매핑이되야함 그니까 url + post/id 랑 
            //identifier도 매핑이되야하는거같은데.. 일단 부모컴포넌트로부터 prosp로 id 가져옴
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
export default DisqusComponent;