import React, { Component, PropTypes } from 'react'

const styles = {
    ced: {
        "width": 300,
        "height": 300,
        "background": "red"
    }
}

export default class CED extends Component {

    render() {
        let errors = this.props.errors.join(',')
        console.log(errors)
        return <div style={styles.ced}>CED curve for {errors}</div>
    }

}
