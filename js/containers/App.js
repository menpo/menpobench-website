import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import * as ac from  '../actionCreators'
import Label from '../components/Label'
import Select from 'react-select';


export default class App extends Component {

    render() {
        // Injected by connect() call:
        const { dispatch, selectedMethods, availableMethods } = this.props
        return (
            <div>
                <Label label="M E N P O B E N C H" />
                <Select
                    multi
                    placeholder="Choose methods..."
                    value={selectedMethods}
                    options={availableMethods}
                    onChange={v => dispatch(ac.setSelectedMethods((v === null) ? [] : v))}
                />
            </div>

        )
    }
}

function select(state) {
    return {
        selectedMethods: [...state.selectedMethods],
        availableMethods: [...state.availableMethods]
    }
}

export default connect(select)(App)
