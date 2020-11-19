export const initialState = {
    isLoading: false,
    volunteers: [{
        username: "", 
        email: "",
        id: 0
    }],
    error: ""
}

export const volunteersReducer = (state = initialState, action) => {
    switch (action.type){
        case "FETCH_VOLUNTEERS_START":
            return{
                ...state,
                isLoading: true,
                error: ""
            }
        case "FETCH_VOLUNTEERS_SUCCESS":
            return{
                ...state,
                isLoading: false,
                volunteers: action.payload
            }
        case "FETCH_VOLUNTEERS_FAILURE":
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}