import React from 'react'
import {connect} from 'react-redux'
import {incrementScore, decrementScore} from '../../actions/index'
import './player.css'

const mapDispatchToProps = dispatch => ({
    incrementScore: (id, value) => dispatch(incrementScore(id, value)),
    decrementScore: (id, value) => dispatch(decrementScore(id, value))
})

const Player = ({id, name, score, incrementScore, decrementScore}) => (
    <li className='player'>
        <div className='player-info-container'>
            <div>
                <h2>{name}</h2>
            </div>
            <div className='score'>
                <span>{score}</span>
            </div>
        </div>
        <div className='buttons-container'>
            <div>
                <button onClick={() => decrementScore(id, 1)}>
                    -1
                </button>
            </div>
            <div>
                <button onClick={() => decrementScore(id, 10)}>
                    -10
                </button>
            </div>
            <div>
                <button onClick={() => incrementScore(id, 10)}>
                    +10
                </button>
            </div>
            <div>
                <button onClick={() => incrementScore(id, 1)}>
                    +1
                </button>
            </div>
        </div>
    </li>
)

export default connect(
    null,
    mapDispatchToProps
)(Player)