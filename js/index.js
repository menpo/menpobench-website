import React from 'react'
import { render } from 'react-dom'
import Label from './components/Label'

document.addEventListener('DOMContentLoaded', ()=> {
    render(
        //<Provider store={store}>
        //    <Sidebar />
        //</Provider>,
        <Label label="Menpobench" />,
        <Provider store={store}>
            <Sidebar />
        </Provider>,
        document.getElementById('root')
    )
})
