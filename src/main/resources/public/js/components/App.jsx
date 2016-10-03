import React from 'react';
import {List, Map} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

/*
 This component does nothing except render its child components,
 expected to be given in as the children prop.
 This is something that the react-router package does for us.
 It plugs in the component(s) defined for whatever the current route happens to be.
 */

/*
  This component does not use the PureRenderMixin.
  The reason is that it would cause route changes not to fire,
  because of an implementation issue between the router and React itself.
  This situation may well change in the near future.
 */
export default class App extends React.Component {
    render() {
        return this.props.children;
    }
};
