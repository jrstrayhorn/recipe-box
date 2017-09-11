import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import storeFactory from './store'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootswatch/cosmo/bootstrap.min.css'

const store = storeFactory()

window.React = React

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-container')
)