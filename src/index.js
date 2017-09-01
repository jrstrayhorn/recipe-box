import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootswatch/cosmo/bootstrap.min.css'

window.React = React

render(
    <App />,
    document.getElementById('react-container')
)