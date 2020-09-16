import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <h1>Cellular Atomaton: Conway's Game of Life</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))