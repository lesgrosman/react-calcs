const initialState = {
    numOfCalcs: 0,
    correctAnswers: 0,
    finishedCalcs: 0
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
                correctAnswers: action.correctAnswers
            }
        case 'COUNT_FINISHED_CALCS':
            return {
                ...state,
                finishedCalcs: state.finishedCalcs + 1
            }
        case 'CLEAR_FINISHED_ANSWERS':
            return {
                ...state,
                finishedCalcs: 0
            }
        default:
            return state
    }
}

export default reducer