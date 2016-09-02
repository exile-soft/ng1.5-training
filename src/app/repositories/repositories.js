import angular from 'angular';
import trainningRepository from './trainning.repository.js';


let repositoryModule = angular.module('app.repositories', [])

  .service({

    trainningRepository

  })
  
  .name;

export default repositoryModule;