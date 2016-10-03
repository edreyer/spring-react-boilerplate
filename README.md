Based on this project: http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html#the-client-application

React Notes:

* ALL React components should be PURE components
* With pure components, they don't try to do much about actions themselves. They merely invoke callback props.
* If we only use immutable data in component props, and write the component as a pure component, we can have React use a more efficient strategy for detecting changes in the props. This is done by applying the PureRenderMixin that is available as an add-on package. When this mixin is added to a component, it changes the way React checks for changes in the component's props (and state). Instead of a deep compare it does a shallow compare, which is much, much faster.
  

