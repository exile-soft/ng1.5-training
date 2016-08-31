import angular from 'angular';
import menuService from './menu.service';


let servicesModule = angular.module('app.services', [])
  .service({

    menuService

  })
  
  .name;

export default servicesModule;