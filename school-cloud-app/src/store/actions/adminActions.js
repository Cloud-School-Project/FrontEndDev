import axios from 'axios'

export const fetchClasses = () => {
    //don't forget to add in login token from localStorage
    return (dispatch) => {
        dispatch({type: "FETCH_CLASSES_START"})

        axios
            .get("https://lambdacloud.herokuapp.com/classes/class")
            .then((res) =>{
                
                dispatch({type: "FETCH_CLASSES_SUCCESS", payload: res.data})
            })
            .catch((err)=> {
                dispatch({type: "FETCH_CLASSES_FAILURE", payload: err})
            })
    }
}

export const addClass = (newClass) => {
    return (dispatch) => {
        // dispatch({type: "FETCH_CLASSES_START"})
        
        axios
            .post("https://lambdacloud.herokuapp.com/classes/class", newClass)
            .then((res) =>{
                dispatch({type: "FETCH_CLASSES_SUCCESS", payload: res.data})
            })
            .catch((err)=> {
                dispatch({type: "FETCH_CLASSES_FAILURE", payload: err})
            })
    }
}


//discuss with backend on edit or delete have them return the full list of classes.
export const editClass = (selectedClass) => {
    return (dispatch) => {
        dispatch({type: "FETCH_CLASSES_START"})

        axios
            .put("https://lambdacloud.herokuapp.com/classes/class", selectedClass) //backticks needed
            .then((res) =>{
                dispatch({type: "FETCH_CLASSES_SUCCESS", payload: res.data})
            })
            .catch((err)=> {
                dispatch({type: "FETCH_CLASSES_FAILURE", payload: err})
            })
    }
}

export const deleteClass = (selectedClass) => {
    return (dispatch) => {
        
        axios
            .delete("https://lambdacloud.herokuapp.com/classes/class", {data: {subject: selectedClass}})
            .then((res) =>{
                dispatch({type: "FETCH_CLASSES_SUCCESS", payload: res.data})
            })
            .catch((err)=> {
                dispatch({type: "FETCH_CLASSES_FAILURE", payload: err})
            })
    }
}