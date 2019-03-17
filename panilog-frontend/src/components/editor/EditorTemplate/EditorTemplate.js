import React, { Component } from 'react';
import styles from './EditorTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class EditorTemplate extends Component {
  
  state = {
    leftPercentage: 0.5
  }

  //separator를 클릭후 마우스를 좌우로 움직이기
  handleMouseMove = (e) => {
    this.setState({
      leftPercentage: e.clientX / window.innerWidth
    });
  }

   //separator클릭했을때
   handleSeperatorMouseDown = (e) => {
    document.body.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup',this.handleMouseUp);    
  }

  //separator에서 마우스를 똇을때 이벤트 제거
  handleMouseUp = (e) => {
    document.body.removeEventListener('mousemove',this.handleMouseMove);
    window.removeEventListener('mouseup',this.handleMouseUp);
  }
  
  
  render() {
    
    const { header, editor, preview } = this.props;
    const { leftPercentage } = this.state;
    const { handleSeperatorMouseDown } = this;

    const leftStyle = {
      flex: leftPercentage
    };

    const rightStyle = {
      flex: 1 - leftPercentage
    };

    //separator위치설정
    const separatorStyle = {
      left: `${leftPercentage * 100}%`
    };
    


    return (
      <div className={cx('editor-template')}>
        {header}
          <div className={cx('panes')}>
            <div className={cx('pane', 'editor')} style={leftStyle}>
              {editor}
            </div>
            <div className={cx('pane','preview')} style={rightStyle} >
              {preview}
            </div>
            <div 
            className={cx('separator')}
            style = {separatorStyle}
            onMouseDown={handleSeperatorMouseDown}
            />
          </div>
      </div>
    );
  }
}

export default EditorTemplate;