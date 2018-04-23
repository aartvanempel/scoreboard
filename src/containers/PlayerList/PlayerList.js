import React from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Player from '../../components/Player/Player'
import './player-list.css'

const mapStateToProps = state => ({
    players: state.players
})

const PlayerList = ({players}) => (
    <ul className="player-list">
        <ReactCSSTransitionGroup
            transitionName='player-transition'
            transitionEnterTimeout={350}
            transitionLeaveTimeout={350}
        >
            {players.map(player => {
                const props = player
                return <Player key={props.id} {...props} />
            })}
        </ReactCSSTransitionGroup>
    </ul>
)

export default connect(
    mapStateToProps,
    null
)(PlayerList)