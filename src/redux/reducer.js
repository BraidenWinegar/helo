const initialState = {
    username: 'false',
    picture: '',
    userId: 0
}

const UPDATE_USER = 'UPDATE_USER';
const CLEAR_USER ='CLEAR_USER';

export function updateUser(userObj) {
    return{
        type: UPDATE_USER,
        payload: userObj
    }
}

export function clearUser() {
    console.log('hit clearUser')
    return{
        type: CLEAR_USER,
        payload: {
            username: '',
            picture: '',
            userId: 0
        }
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    console.log('switch', type)
    switch (type) {
        case UPDATE_USER:
            return { ...state, 
                    username: payload.username,
                    picture: payload.picture,
                    userId: payload.userId
                    }
        case CLEAR_USER:
            console.log('slap')
            return { ...state, 
                username: payload.username,
                picture: payload.picture,
                userId: payload.userId
                }
        default: 
            console.log('hit defalt')
            return state
    }
}