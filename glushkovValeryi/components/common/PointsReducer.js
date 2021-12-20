const defaultState = {
    points: 0,
}

const PointsReducer = (state = defaultState, aciton) => {
    switch(aciton.type) {
        case "ADD_POINTS":
            return {...state, points: state.points + aciton.newPoints}
        case "GET_POINTS":
            return {...state, points: state.points - aciton.newPoints}
        default:
            return state
    }
}

export default PointsReducer;
