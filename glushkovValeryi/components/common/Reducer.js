const defaultState = {
    points: 0,
    isLoggedIn: false 
}

const Reducer = (state = defaultState, aciton) => {
    switch(aciton.type) {
        case "ADD_POINTS":
            return {...state, points: state.points + aciton.newPoints}
        case "GET_POINTS":
            return {...state, points: state.points - aciton.newPoints}
        case "SET_LOGGED":
            return {...state, isLoggedIn: aciton.loggedIn}
        default:
            return state
    }
}

export default Reducer;
