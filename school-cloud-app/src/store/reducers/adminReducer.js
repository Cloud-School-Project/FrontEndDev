export const initialState = {
    isLoading: false,
    classes: [{
        completed: false, //(true or false)
        subject: "empty", //(name of class)
        morning: null, //(id of the volunteer)
        afternoon: null, //(id of volunteer)
        evening: null //(no volunteer)
    }],
    error: ""
}

export const adminReducer = (state = initialState, action) => {
    switch (action.type){
        case "FETCH_CLASSES_START":
            return{
                ...state,
                isLoading: true,
                error: ""
            }
        case "FETCH_CLASSES_SUCCESS":
            return{
                ...state,
                isLoading: false,
                classes: action.payload
            }
        case "FETCH_CLASSES_FAILURE":
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}