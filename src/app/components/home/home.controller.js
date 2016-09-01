import UserActions from '../../actions/user.actions';

class HomeController {

	constructor($ngRedux) { // $ngRedux		
		"ngInject";
		this.$ngRedux = $ngRedux;

		this.user = {};		
		this.name = 'home';
		// this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis)(this);
		this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis, UserActions)(this); // this functions will be shadowed by the user actions
	}

	$onDestroy(){
		this.unsubscribe();
	}

	mapStateToThis(state) {
		return {
			user: state.users
		};
	}

	changeName(name) {
		this.changeUserName(name);
	}

}

// HomeController.$inject = ["$ngRedux"]; 

export default HomeController;