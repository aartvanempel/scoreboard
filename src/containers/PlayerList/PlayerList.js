import React from 'react'
import { connect } from 'react-redux'
import Player from '../../components/Player/Player'

const mapStateToProps = state => ({
    players: state.players
})

const PlayerList = ({players}) => (
    <ul>
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