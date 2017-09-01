import { Component } from 'react'
import Header from './ui/Header'
import Footer from './ui/Footer'

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header title="Recipe Box" />
                <Footer />
            </div>
        )
    }
}

export default App