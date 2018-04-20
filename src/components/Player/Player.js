import React from 'react'
import { connect } from 'react-redux'
import { incrementScore, decrementScore } from "../../actions/index"
import './player.css'

const mapDispatchToProps = dispatch => ({
    incrementScore: id => dispatch(incrementScore(id)),
    decrementScore: id => dispatch(decrementScore(id))
})

const Player = ({id, name, score, incrementScore, decrementScore}) => (
    <li className="player">
        <h2>{name}</h2>
        <button onClick={() => decrementScore(id)}>
            -
        </button>
        <span>{score}</span>
        <button onClick={() => incrementScore(id)}>
            +
        </button>
    </li>
)

export default connect(
    null,
    mapDispatchToProps
)(Player)