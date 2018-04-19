import React from 'react'
import AddPlayer from './containers/AddPlayer/AddPlayer'
import PlayerList from './containers/PlayerList/PlayerList'

const App = () => (
    <div>
        <h1>Scoreboard</h1>
        <AddPlayer/>
        <PlayerList/>
    </div>
)

export default App