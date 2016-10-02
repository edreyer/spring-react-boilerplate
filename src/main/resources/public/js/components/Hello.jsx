import React from 'react';

export default class Hello extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div><h1>Hello, {this.props.name}!</h1></div>
    }
}
