import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPlayer } from '../../actions/index'
import './add-player.css'

const mapStateToProps = ({players}) => ({
    players
})

const mapDispatchToProps = dispatch => ({
    addPlayer: player => dispatch(addPlayer(player))
})

class AddPlayer extends Component {
    state = {
        value: ''
    }

    onChangeHandler = e => this.setState({value: e.target.value})

    onSubmitHandler = (e) => {
        e.preventDefault()

        if (!this.state.value.length) return

        this.props.addPlayer({
            id: new Date().getTime(),
            name: this.state.value,
            score: 0
        })

        this.setState({value: ''})
    }

    render() {
        return (
            <form
                className='add-player'
                onSubmit={e => this.onSubmitHandler(e)}>
                <input
                    placeholder="Player's name"
                    value={this.state.value}
                    onChange={this.onChangeHandler}
                />
                <button type='submit'>
                    Add player
                </button>
            </form>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPlayer)