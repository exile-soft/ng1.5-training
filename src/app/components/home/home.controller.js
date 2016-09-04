import UserActions from '../../actions/user.actions';
import TrainingActions from '../../actions/training.actions';

class HomeController {

	constructor($ngRedux, trainningRepository) { // $ngRedux		
		"ngInject";
		this.$ngRedux = $ngRedux;
		this.trainningRepository = trainningRepository;

		this.user = {};		
		this.name = 'home';
		// this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis)(this);
		this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis, UserActions)(this); // this functions will be shadowed by the user actions
		// this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis, TrainingActions)(this);

		this.$ngRedux.subscribe(() => {
		    let state = $ngRedux.getState();
		})

	}

	$onDestroy(){
		this.unsubscribe(); // important!
	}
	$onInit() {
		this.getAllTrainings();
	}

	mapStateToThis(state) {
		return {
			user: state.user
		};
	}

	changeName(name) {
		//this.changeUserName(name);
		this.testUser(this.$ngRedux, name);
	}

	getAllTrainings() {
		this.trainningRepository.browse().then(response=> this.allTrainings = response.data);
	}

}

// HomeController.$inject = ["$ngRedux"]; 

export default HomeController;