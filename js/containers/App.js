import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import * as ac from  '../actionCreators'
import Label from '../components/Label'
import CED from '../components/CED'
import Select from 'react-select';


const styles = {
    flexrow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-around"
    },
    flexcol: {
        width: 350,
        display: "flex",
        flexDirection: "column"
    }
}

export default class App extends Component {

    render() {
        // Injected by connect() call:
        const { dispatch, selectedMethods, availableMethods } = this.props
        return (
            <div>
                <Label label="M E N P O B E N C H" />
                <div style={styles.flexrow}>
                    <CED/>
                    <div style={styles.flexcol}>
                        <Select
                            multi
                            placeholder="Choose methods..."
                            value={selectedMethods}
                            options={availableMethods}
                            onChange={v => dispatch(ac.setSelectedMethods((v === null) ? [] : v))}
                        />
                        <Select
                            multi
                            placeholder="Choose dataset..."
                            value={selectedMethods}
                            options={availableMethods}
                            onChange={v => dispatch(ac.setSelectedMethods((v === null) ? [] : v))}
                        />
                        <Select
                            multi
                            placeholder="Choose landmark configuration..."
                            value={selectedMethods}
                            options={availableMethods}
                            onChange={v => dispatch(ac.setSelectedMethods((v === null) ? [] : v))}
                        />
                        <Select
                            multi
                            placeholder="Choose error metric..."
                            value={selectedMethods}
                            options={availableMethods}
                            onChange={v => dispatch(ac.setSelectedMethods((v === null) ? [] : v))}
                        />
                    </div>
                </div>
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
