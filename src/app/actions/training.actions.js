// training.actions.js

function getAllTrainings(trainningRepository){ 
    return {
        type: 'GET_ALL_TRAININGS',
        payload: 'repo'
    }
}

getAllTrainings.$inject = ['trainningRepository'];

export default { getAllTrainings };  