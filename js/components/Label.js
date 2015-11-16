import React, { Component, PropTypes } from 'react'


export default class Label extends Component {

    render() {
        return <div>{this.props.label}</div>
    }

}
//
//Label.propTypes = {
//    label: PropTypes.string.isRequired
//}
