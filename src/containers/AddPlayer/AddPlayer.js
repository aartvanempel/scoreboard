import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPlayer } from '../../actions/index'

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

    onClickHandler = () => {
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
            <div>
                <input
                    value={this.state.value}
                    onChange={this.onChangeHandler}
                />
                <button onClick={() => this.onClickHandler()}>
                    Add player
                </button>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPlayer)