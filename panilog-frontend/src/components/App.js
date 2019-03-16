import React from 'react';
//아래 스위치 컴포넌트는 설정된 라우트중 일치하느 라우트만보여줌
import { Switch, Route } from 'react-router-dom';
import { ListPage, PostPage, EditorPage, NotFoundPage } from 'pages';

//NotFoundPage 는 패스를 지정하지않았기에 어떤경우에도 렌더링
const App = () => {
  return(
        <div>
            <Switch>
                <Route exact path = "/" component = {ListPage}/>
                <Route exact path = "/page/:page" component = {ListPage}/>
                <Route exact path = "/tag/:tag/:page?" component = {ListPage}/>
                <Route exact path = "/post/:id" component = {PostPage}/>
                <Route exact path = "/editor" component = {EditorPage}/>
                <Route component = {NotFoundPage}/>
            </Switch>
        </div>
    );  
};


export default App;