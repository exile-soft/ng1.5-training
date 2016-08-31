import angular from 'angular';
import Navigation from './navigation/navigation';

let commonModule = angular.module('app.common', [
  Navigation
])
  
.name;

export default commonModule;