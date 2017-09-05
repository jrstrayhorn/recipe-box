import { Component } from 'react'
import Header from './ui/Header'
import Footer from './ui/Footer'
import { Recipes } from './containers'

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header title="Recipe Box" />
                <Recipes />
                <Footer />
            </div>
        )
    }
}

export default App