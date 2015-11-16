import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import * as ac from  '../actionCreators'
import Label from '../components/Label'
import { selectLandmarkObjects } from '../selectors'

export default class App extends Component {

    render() {
        // Injected by connect() call:
        const { dispatch, groups, landmarks } = this.props;
        return (
            <LandmarkGroupList
                groups={ groups }
                onClick={ (index) => landmarks[index].isEmpty ? dispatch(ac.setNextInsertion(index)) :
                dispatch(ac.setSelectedLandmarks([index])) } />
        );
    }
}

export default connect(selectLandmarkObjects)(App);
