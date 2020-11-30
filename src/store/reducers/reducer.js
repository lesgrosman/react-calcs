const initialState = {
    numOfCalcs: 0,
    correctAnswers: 0,
    finishedCalcs: 0,
    path: null
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_NUMBER_OF_CALCS':
            return {
                ...state,
                numOfCalcs: action.numOfCalcs              
            }
        case 'COUNT_CORRECT_ANSWERS':
            return {
                ...state,
                correctAnswers: state.correctAnswers + 1
            }
        case 'COUNT_FINISHED_CALCS':
            return {
                ...state,
                finishedCalcs: state.finishedCalcs + 1
            }
        case 'CLEAR_PREV_QUIZ':
            return {
                ...state,
                finishedCalcs: 0,
                correctAnswers: 0
            }
        case 'GET_PATH_NAME':
            return {
                ...state,
                path: action.path
            }
        default:
            return state
    }
}

export default reducer