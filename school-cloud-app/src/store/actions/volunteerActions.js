import axios from 'axios'

export const fetchVolunteers = () => {
    //don't forget to add in login token from localStorage
    return (dispatch) => {
        dispatch({type: "FETCH_VOLUNTEERS_START"})

        axios
            .get("https://lambdacloud.herokuapp.com/volunteer/")
            .then((res) =>{
                dispatch({type: "FETCH_VOLUNTEERS_SUCCESS", payload: res.data})
            })
            .catch((err)=> {
                dispatch({type: "FETCH_VOLUNTEERS_FAILURE", payload: err})
            })
    }
}