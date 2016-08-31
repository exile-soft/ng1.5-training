class NavigationController { 

  constructor(menuService) {
    "ngInject";

    this.service = menuService;
  	
    this.name = 'E X I L E Trainings';

    this.menuItems = [];

  }

  $onInit() {
    // onInit lifecycle hook, executes after the constructor
    this.setMenuItems();
  };

  setMenuItems() {
    this.service.browse().then((response) => {
      this.menuItems = response.data;
    });    
  }

}

export default NavigationController;