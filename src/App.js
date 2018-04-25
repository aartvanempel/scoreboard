import React from 'react'
import AddPlayer from './containers/AddPlayer/AddPlayer'
import PlayerList from './containers/PlayerList/PlayerList'
import './index.css'

// test

const App = () => (
    <div className="app-container">
        <header>
            <h1>👏🏻 scoreboard 👏🏻</h1>
            <AddPlayer/>
        </header>
        <PlayerList/>
    </div>
)

export default App
