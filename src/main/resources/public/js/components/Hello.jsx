import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Hello extends React.Component {
    constructor(props) {
        super(props);
        // Example of how to use Pure Render Mixin with ES6 React components
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return <div><h1>Hello, {this.props.name}!</h1></div>
    }
}
