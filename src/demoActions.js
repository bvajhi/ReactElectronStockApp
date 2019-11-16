import CONST from './constants'

export function changeName(name){
    return(dispatch) =>{
        console.log("Here");
        dispatch({
            type: CONST.TEST_ACTION,
            payload: name
        })

    }

}