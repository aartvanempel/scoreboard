import React from 'react'
import AddPlayer from './containers/AddPlayer/AddPlayer'
import PlayerList from './containers/PlayerList/PlayerList'
import './index.css'

const App = () => (
    <div className="app-container">
        <header>
            <AddPlayer/>
        </header>
        <PlayerList/>
    </div>
)

export default App
