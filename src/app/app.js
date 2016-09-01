import angular from 'angular';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import { RootReducer } from './reducers';
import Common from './common/common';
import Services from './services/services';
import Components from './components/components';
import AppComponent from './components/app.component';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css'

angular.module('app', [
    ngMaterial,
    uiRouter,
    ngRedux,
    Common,
    Components,
    Services
  ])

  .config(($locationProvider, $ngReduxProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
    $ngReduxProvider.createStoreWith(RootReducer);
  })

  .component('app', AppComponent);