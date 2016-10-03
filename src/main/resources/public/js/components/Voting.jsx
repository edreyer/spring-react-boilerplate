import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

import Winner from './Winner';
import Vote from './Vote';

/*
 This pure/dumb component is fully driven by the props it is given.
 It is the component equivalent of a pure function.
 */
export class Voting extends React.Component {
    constructor(props) {
        super(props);
        // Example of how to use Pure Render Mixin with ES6 React components
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                {this.props.winner ?
                    <Winner ref="winner" winner={this.props.winner} /> :
                    <Vote {...this.props} />}
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        pair: state.getIn(['vote', 'pair']),
        winner: state.get('winner')
    };
}

/*
 Thia connected/smart component, wraps the pure version with some logic that will
 keep it in sync with the changing state of the Redux Store.
 That logic is provided by react-redux.
 */
export const VotingContainer = connect(mapStateToProps)(Voting);
