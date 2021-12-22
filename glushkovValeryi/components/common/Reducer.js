const defaultState = {
    points: 0,
    token: ''
}

const Reducer = (state = defaultState, aciton) => {
    switch(aciton.type) {
        case "ADD_POINTS":
            return {...state, points: state.points + aciton.newPoints}
        case "GET_POINTS":
            return {...state, points: state.points - aciton.newPoints}
        case "ADD_TOKEN":
            return {...state, token: aciton.newToken}
        case "GET_TOKEN":
            return {...state, token: state.token}
        default:
            return state
    }
}

export default Reducer;
