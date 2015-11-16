import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import Label from './components/Label'
import store from './store'
import App from './containers/App'

document.addEventListener('DOMContentLoaded', ()=> {
    render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    )
})
