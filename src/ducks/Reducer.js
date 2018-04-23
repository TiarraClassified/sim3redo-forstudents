var initialState = {
    username: 'test-the most common name', 
    id: 0,
    picture: 'someshittypicture'
}

const WHATEVER = 'WHATEVER';
export function someverbing(id, username, picture){
    console.log(id, picture, username)
    return{
        type: WHATEVER, 
        payload: {id, username, picture}
    }
}

export default function reducer (state=initialState, action){
    switch(action.type){
        case WHATEVER:
            return Object.assign({}, state, action.payload)
        default: return state;
    }
}