import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
//import Header from 'components/common/Header';
import HeaderContainer from 'containers/common/HeaderContainer'
import HeaderContainer2 from 'containers/common/HeaderContainer2'

import Footer from 'components/common/Footer';
import Title from 'components/common/Title';

// import { push as Menu } from 'react-burger-menu'
import Hamburgerbar from "components/common/Hamburgerbar";
import "./style.css";

const cx = classNames.bind(styles);

const PageTemplate = ({children, tag,id,title,tags}) => {

  if(id)
  return(
    <div className={cx('page-template')}>
    <HeaderContainer/>
    <main>
      {children}
    </main>
    <Footer/>
  </div> 
  )

  if(!id)
  return(
  <div> 
      {/* <div className={cx('bm-burger-bars')} id="outer-container">
        <Menu className={cx('bm-menu')} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } right>
          <a id="home" className="menu-item" href="/">Home</a>
          <HeaderContainer/>
        </Menu> */} 
      <div id="sidebar">
      <Hamburgerbar pageWrapId={ "page-wrap" } outerContainerId={ "sidebar" } />
      <div className={cx('page-template')}>
        <main className={cx('main-view')} id="page-wrap">
          {/* <HeaderContainer/> */}
          <Title tag={tag} id={id} title={title} tags={tags}/>
        </main>  
      </div>
      </div>
      <div className={cx('page-template')}>
          <main>
            {children}
          </main>
          <Footer/>
      </div>
  </div>
  )
};


export default PageTemplate;
