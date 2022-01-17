const stateReducer = (initialState, action) => {
    switch (action.type) {
        case "setDarkmode":
            return {...initialState, darkMode: action.value }
        case "addCategory":
            return {
                ...initialState, 
                categories: [...initialState.categories, action.value]}
        default:
            return initialState
    }
}

export default stateReducer