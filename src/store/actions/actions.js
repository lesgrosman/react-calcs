const setNumberOfCalcs = (numOfCalcs) => {
    return {
        type: 'SET_NUMBER_OF_CALCS',
        numOfCalcs
    }
}

const countCorrectAnswers = (quiz) => {
    const correctAnswers = quiz.filter((item) => item.status === "success").length;
    return {
        type: 'COUNT_CORRECT_ANSWERS',
        correctAnswers
    }
}

const countFinishedCalcs = () => {
    return {
        type: 'COUNT_FINISHED_CALCS'
    }
}

const clearFinishedAnswers = () => {
    return {
        type: 'CLEAR_FINISHED_ANSWERS'
    }
}

export {
    setNumberOfCalcs,
    countCorrectAnswers,
    countFinishedCalcs,
    clearFinishedAnswers
}