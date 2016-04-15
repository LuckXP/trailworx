import React from 'react'
import {Dialog} from 'material-ui'

export default class extends React.Component{

    render() {
        return (
            <Dialog open={this.props.open}/>
        )
    }
}