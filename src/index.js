import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import store from './store'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootswatch/cosmo/bootstrap.min.css'

window.React = React

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-container')
)