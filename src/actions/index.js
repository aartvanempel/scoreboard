export const addPlayer = player => ({
    type: 'ADD_PLAYER',
    player
})

export const incrementScore = id => ({
    type: 'INCREMENT_SCORE',
    id
})

export const decrementScore = id => ({
    type: 'DECREMENT_SCORE',
    id
})