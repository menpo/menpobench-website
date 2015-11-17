import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import * as ac from  '../actionCreators'
import Label from '../components/Label'
import CED from '../components/CED'
import Select from 'react-select';
import * as data from  '../data'
import { ced_data } from '../math'

const styles = {
    flexrow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "space-around"
    },
    flexcol: {
        width: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
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
                    <CED errors={this.props.selectedMethods}/>
                    <div style={styles.flexcol}>
                        <Select
                            multi
                            placeholder="Choose methods..."
                            value={selectedMethods}
                            options={availableMethods}
                            onChange={v => dispatch(ac.setSelectedMethods((v === null) ? [] : v.map(m => m.value)))}
                        />
                        <Select
                            multi
                            placeholder="Choose dataset..."
                            value={selectedMethods}
                            options={availableMethods}
                            onChange={v => dispatch(ac.setSelectedMethods((v === null) ? [] : v.map(m => m.value)))}
                        />
                        <Select
                            multi
                            placeholder="Choose landmark configuration..."
                            value={selectedMethods}
                            options={availableMethods}
                            onChange={v => dispatch(ac.setSelectedMethods((v === null) ? [] : v.map(m => m.value)))}
                        />
                        <Select
                            multi
                            placeholder="Choose error metric..."
                            value={selectedMethods}
                            options={availableMethods}
                            onChange={v => dispatch(ac.setSelectedMethods((v === null) ? [] : v.map(m => m.value)))}
                        />
                    </div>
                </div>
            </div>

        )
    }
}

function methodMetadataValueLabel(state, methods) {
    return methods.map(m => {
        const metadata = state.metadata.method[m]
        return {
            value: m,
            label: metadata === undefined ? m : metadata.label
        }
    })
}

function select(state) {
    return {
        selectedMethods: methodMetadataValueLabel(state, state.selectedMethods),
        availableMethods:  methodMetadataValueLabel(state, state.availableMethods)
    }
}

export default connect(select)(App)
