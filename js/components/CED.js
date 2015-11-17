import React, { Component, PropTypes } from 'react'
import rd3 from 'react-d3'
import { errors_to_ced } from '../math'

window.rd3 = rd3
const styles = {
    ced: {
        "width": 300,
        "height": 300,
        "background": "red"
    }
}

export default class CED extends Component {

    render() {
        const lineData = this.props.errors.map(e => {
            return {
                name: e.label,
                values: errors_to_ced(e.errors),
                strokeWidth: 3
            }
        })
        return <rd3.LineChart
                legend={true}
                data={lineData}
                width={400}
                height={400}
                //viewBoxObject={
                //    x: 0,
                //    y: 0,
                //    width: 500,
                //    height: 400
                //}
                title="Cumulative Error Distribution"
                yAxisLabel="Proportion of images"
                xAxisLabel="Error"
                gridHorizontal={true}
                gridVertical={true}

        />

    }
}
