import CONST from './constants'

export function changeName(name){
    return(dispatch) =>{
        dispatch({
            type: CONST.TEST_ACTION,
            payload: name
        })

    }

}