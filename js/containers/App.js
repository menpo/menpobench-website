import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import * as ac from  '../actionCreators'
import Label from '../components/Label'
import Select from 'react-select';

var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

function logChange(val) {
    console.log("Selected: " + val);
}


export default class App extends Component {

    render() {
        return (
            <div>
                <Label label="Hello world" />
                <Select
                    name="form-field-name"
                    value="one"
                    options={options}
                    onChange={logChange}
                />
            </div>

        )
    }
}

function select(state) {
    return state
}

export default connect(select)(App)
