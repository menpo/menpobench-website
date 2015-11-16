import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import * as ac from  '../actionCreators'
import Label from '../components/Label'

export default class App extends Component {

    render() {
        return (
            <div>
                <Label label="Hello world" />
                <Label label={ this.props.methodsUnderTest[0] }  />
            </div>

        )
    }
}

function select(state) {
    return state
}

export default connect(select)(App)
