import React, { Component } from 'react';
import styles from './LoadingSpinner.scss';
import classNames from 'classnames/bind';

import { css } from '@emotion/core';
// First way to import
import { HashLoader } from 'react-spinners';
// Another way to import
 

const cx = classNames.bind(styles);

const override = css`
    display: block;
    margin-right:auto;
    margin-left:auto;
    width: center;
`;

class LoadingSpinner extends Component {
  
  constructor(props) {
    super(props);
    this.state = {loading: true}
  }

          // setTimeout(()=> {
        //     this.setState({loading: false});
        // },5000)

  render() {
    return (
      <div>
        <div className={cx('padding')}>
        </div>
        <div className={cx('image')}>
        <HashLoader

          css={override}
          sizeUnit={"px"}
          size={120}
          margin={10}
          color={'#FFBF00'}
          loading={this.state.loading}

        />
        </div>
        <div className={cx('loading')}>
          loading...
        </div>
      </div>
    )
  }
}

export default LoadingSpinner;