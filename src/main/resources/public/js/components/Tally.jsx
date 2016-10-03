import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Tally extends React.Component {
    constructor(props) {
        super(props);
        // Example of how to use Pure Render Mixin with ES6 React components
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return <div className="tally">
            {this.getPair().map(entry =>
                <div key={entry} className="entry">
                    <h1>{entry}</h1>
                    <div className="voteCount">
                        {this.getVotes(entry)}
                    </div>
                </div>
            )}
        </div>

    }
    getPair() {
        return this.props.pair || [];
    }
    getVotes(entry) {
        if (this.props.tally && this.props.tally.has(entry)) {
            return this.props.tally.get(entry);
        }
        return 0;
    }
};
