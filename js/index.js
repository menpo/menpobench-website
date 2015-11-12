import React from 'react'
import { render } from 'react-dom'
import Label from './components/Label'

console.log('hello world')

document.addEventListener('DOMContentLoaded', ()=> {
    render(
        //<Provider store={store}>
        //    <Sidebar />
        //</Provider>,
        <Label label="hello world" />,
        document.getElementById('root')
    )
})
