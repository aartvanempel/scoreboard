export const addPlayer = player => ({
    type: 'ADD_PLAYER',
    player
})

export const incrementScore = (id, value) => ({
    type: 'INCREMENT_SCORE',
    id,
    value
})

export const decrementScore = (id, value) => ({
    type: 'DECREMENT_SCORE',
    id,
    value
})