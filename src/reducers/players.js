const players = (state = [], action) => {

    switch (action.type) {
        case 'ADD_PLAYER':
            return [...state, action.player]

        case 'INCREMENT_SCORE':
            return state.map(player => {
                if (player.id === action.id) player.score = player.score + action.value;
                return player
            })

        case 'DECREMENT_SCORE':
            return state.map(player => {
                if (player.id === action.id) player.score = player.score - action.value;
                return player
            })

        default:
            return []
    }

}

export default players
