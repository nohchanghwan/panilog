import React, { Component } from 'react';
import styles from './Preview.scss';
import classNames from 'classnames/bind';
import MarkdownRender from 'components/common/MarkdownRender';

const cx = classNames.bind(styles);

class Preview extends Component {
  
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  
  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }
  
  render() {
    const { markdown, title } = this.props;
 
    return (
       
  <div className={cx('preview-pane')}>
    <h1 className={cx('title')}>
      {title}
    </h1>
    <div>
      <MarkdownRender markdown={markdown}/>
      <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
    </div>
  </div>
    );
  }
}

export default Preview;