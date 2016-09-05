// training.actions.js

class TrainingActions {

	constructor($ngRedux, trainningRepository) {
		"ngInject";
		this.$ngRedux = $ngRedux;
		this.trainningRepository = trainningRepository;
	}

	getAllTrainings(){
		this.$ngRedux.dispatch({type: 'FETCHING_TRAININGS'});

		this.trainningRepository.browse()

		.then((response) => {

			setTimeout(() => {
				this.$ngRedux.dispatch({
					type: 'FETCHED_TRAININGS',
					payload: response.data
				});
			}, 2000);		

		}, (response) => {

			this.$ngRedux.dispatch({
				type: 'FETCHING_ERROR',
				payload: response.error
			});

		});

	}

}

// TrainingActions.$inject = ['$ngRedux', 'trainningRepository']; 

export default TrainingActions;