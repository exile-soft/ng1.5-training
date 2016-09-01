export default class MenuService {

  constructor($http) {
  	"ngInject";
  	this.$http = $http;
  }

  browse() {
    // debugger;
  	return this.$http({
  		method: 'GET',
  		url: 'http://localhost:3004/main-menu-items'
  	});
  }
  
}