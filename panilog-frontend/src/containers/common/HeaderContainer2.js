import React , {Component} from 'react';
import Header from 'components/common/Header2';
import { withRouter } from 'react-router-dom';

//삭제버튼으로인한 상태변화추가
import * as baseActions from 'store/modules/base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class HeaderContainer extends Component {
    
    handleRemove = () => {
        const { BaseActions } = this.props;
        BaseActions.showModal('remove');
    }

    render() {
        const { handleRemove} = this;
        const { match } = this.props;
        const { id } = match.params;

        return (
            <div>
                <Header postId={id}
                onRemove={handleRemove}
                />
            </div>
        )
    }
}

export default connect(
    (state) => ({
    }),
    (dispatch) => ({
      BaseActions: bindActionCreators(baseActions, dispatch)
    })
  )(withRouter(HeaderContainer));