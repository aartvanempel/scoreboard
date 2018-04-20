import React from 'react'
import { connect } from 'react-redux'
import Player from '../../components/Player/Player'
import './player-list.css'

const mapStateToProps = state => ({
    players: state.players
})

const PlayerList = ({players}) => (
    <ul className="player-list">
        { players.map(player => {
            const props = player
            return <Player key={props.id} {...props} />
        }) }
    </ul>
)

export default connect(
    mapStateToProps,
    null
)(PlayerList)