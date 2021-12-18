import {SET_TITLE} from './actions'

const intialState =[
    {
        id: 1,
        title: "React Native",
        body: "React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.",
        likes:0
    }
]

userReducer = (state = intialState, action) =>{
    switch (action.type) {
        case SET_TITLE:
            return [...state, {id: action.payloadID, title: action.payloadTitle, body: action.payloadBody, likes: action.payloadLikes}];
        default:
            return state;
    }
}

export default userReducer;
