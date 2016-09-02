// trainning.repository.js
export default class TrainingsRepository {

  constructor($http) {
  	"ngInject";
  	this.$http = $http;
  }

  browse() {
  	return this.$http({
  		method: 'GET',
  		url: 'http://localhost:3004/training'
  	});
  }
  
}