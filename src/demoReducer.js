import CONST from './constants'

export default function demo (state={}, action) {
    switch (action.type) {
        case CONST.TEST_ACTION:
            return {...state, name: action.payload.name};
        default: 
            return state;

    }

}