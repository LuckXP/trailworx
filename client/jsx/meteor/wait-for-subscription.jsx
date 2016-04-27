import {default as React, PropTypes} from 'react'
import {createContainer} from 'meteor/react-meteor-data'

const mapMeteorToProps = ({subscription, params}) => {
  params = params || [];
  const handle = Meteor.subscribe(subscription, ...params);
  return {
    ready: handle.ready()
  }
};

const WaitForSubscription = ({ready, children, subscription, params, ...props}) => {
  if (!ready) return null;

  children = Array.isArray(children) ? children : [children];
  const newChildren = children.map((child, idx) => React.cloneElement(child, {key: idx, ...props}));
  return ready ? (
    <div id={'wait-for-subscription-' + subscription}>
      {newChildren}
    </div>
  ) : null;
};

WaitForSubscription.propTypes = {
  ready: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default createContainer(mapMeteorToProps, WaitForSubscription);