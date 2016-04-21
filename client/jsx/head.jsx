import React from 'react'
import Helmet from "react-helmet";

const StatelessFunction = (props) => {
  return (
    <Helmet
      defaultTitle="TrailWorx"
      meta={[
        {name: 'description', content: 'TrailWorx application'},
        {name: 'viewport', content: 'user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0'}
      ]}
    />
  )
};

export default StatelessFunction;