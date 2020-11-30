const setNumberOfCalcs = (numOfCalcs) => {
    return {
        type: 'SET_NUMBER_OF_CALCS',
        numOfCalcs
    }
}

const countCorrectAnswers = (status) => {
    if (status === 'success') {
        return {
            type: 'COUNT_CORRECT_ANSWERS'
        } 
    }
    return {
        type: ''
    }
 
}

const countFinishedCalcs = () => {
    return {
        type: 'COUNT_FINISHED_CALCS'
    }
}

const clearFinishedAnswers = () => {
    return {
        type: 'CLEAR_PREV_QUIZ'
    }
}

const getPathName = (path) => {
    return {
        type: 'GET_PATH_NAME',
        path
    }
}

export {
    setNumberOfCalcs,
    countCorrectAnswers,
    countFinishedCalcs,
    clearFinishedAnswers,
    getPathName
}