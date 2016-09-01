import ngMaterial from 'angular-material';

class AppController {

  constructor($mdSidenav) {
  	"ngInject";
  	// debugger;
  	this.$mdSidenav = $mdSidenav;
  	this.name = 'app';
  }

  toggleList() {
    this.$mdSidenav('left').toggle();
  }
}

export default AppController;