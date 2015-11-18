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
        const { dispatch, selectedMethods, availableMethods, availableDatasets, selectedDataset } = this.props
        return (
            <div>
                <Label label="M E N P O B E N C H" />
                <div style={styles.flexrow}>
                    <CED errors={this.props.errors}/>
                    <div style={styles.flexcol}>
                        <Select
                            multi
                            placeholder="Choose methods..."
                            value={selectedMethods}
                            options={availableMethods}
                            onChange={v => dispatch(ac.setSelectedMethods((v === null) ? [] : v.map(m => m.value)))}
                        />
                        <Select
                            placeholder="Choose dataset..."
                            value={this.props.selectedDataset}
                            options={availableDatasets}
                            onChange={v => dispatch(ac.setSelectedDataset((v === null) ? null : v.value))}
                        />
                        <Select
                            placeholder="Choose error metric..."
                            value={this.props.selectedErrorMetric}
                            options={this.props.availableErrorMetrics}
                            onChange={v => dispatch(ac.setSelectedErrorMetric((v === null) ? null : v.value))}
                        />
                        <Select
                            placeholder="Choose landmark scheme..."
                            value={this.props.selectedLmScheme}
                            options={this.props.availableLmSchemes}
                            onChange={v => dispatch(ac.setSelectedLmScheme((v === null) ? null : v.value))}
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

function methodErrorsForCED(state, methods) {
    return methodMetadataValueLabel(state, methods).map(vl => {
        return {
            label: vl.label,
            errors: state.errors[vl.value],
            method: vl.value
        }
    }).filter(e => e.errors !== undefined)
}

function datasetMetadataValueLabel(state, datasets) {
    return datasets.map(d => {
        const metadata = state.metadata.dataset[d]
        return {
            value: d,
            label: metadata === undefined ? d : metadata.label
        }
    })
}

function errorMetricMetadataValueLabel(state, errorMetrics) {
    return errorMetrics.map(x => {
        const metadata = state.metadata.errorMetric[x]
        return {
            value: x,
            label: metadata === undefined ? x : metadata.label
        }
    })
}

function lmSchemeMetadataValueLabel(state, lmSchemes) {
    return lmSchemes.map(x => {
        const metadata = state.metadata.lmScheme[x]
        return {
            value: x,
            label: metadata === undefined ? x : metadata.label
        }
    })
}

function select(state) {
    console.log(datasetMetadataValueLabel(state, [state.selectedDataset]))

    return {
        availableMethods:  methodMetadataValueLabel(state, state.availableMethods),
        availableDatasets:  datasetMetadataValueLabel(state, state.availableDatasets),
        availableErrorMetrics:  errorMetricMetadataValueLabel(state, state.availableErrorMetrics),
        availableLmSchemes:  lmSchemeMetadataValueLabel(state, state.availableLmSchemes),

        selectedMethods: methodMetadataValueLabel(state, state.selectedMethods),
        selectedDataset:  state.selectedDataset !== null ? datasetMetadataValueLabel(state,  [state.selectedDataset])[0] : undefined,
        selectedErrorMetric:  state.selectedErrorMetric !== null ? errorMetricMetadataValueLabel(state,  [state.selectedErrorMetric])[0] : undefined,
        selectedLmScheme:  state.selectedLmScheme !== null ? lmSchemeMetadataValueLabel(state,  [state.selectedLmScheme])[0] : undefined,

        errors: methodErrorsForCED(state, state.selectedMethods)
    }
}

export default connect(select)(App)
