import UserActions from '../../actions/user.actions';

class HomeController {

	constructor($ngRedux, trainningRepository) { // $ngRedux		
		"ngInject";
		this.$ngRedux = $ngRedux;
		this.trainningRepository = trainningRepository;

		this.user = {};		
		this.name = 'home';
		// this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis)(this);
		this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis, UserActions)(this); // this functions will be shadowed by the user actions
	}

	$onDestroy(){
		this.unsubscribe();
	}
	$onInit() {
		this.getAllTrainings();
	}

	mapStateToThis(state) {
		return {
			user: state.users
		};
	}

	changeName(name) {
		this.changeUserName(name);
	}

	getAllTrainings() {
		this.trainningRepository.browse().then(response=> this.allTrainings = response.data);
	}

}

// HomeController.$inject = ["$ngRedux"]; 

export default HomeController;