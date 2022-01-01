class Router {
  constructor() {
    this.routes = [];
    this.init();
  }

  add = (path, func) => {
    this.routes.push({path, func});
  }

  locationResolver = () => {
    this.routes.forEach(elem => {
      if (elem.path === window.location.hash) {
        elem.func();
      }
    })
  }

  init(){
    window.addEventListener('load', this.locationResolver)
    window.addEventListener('hashchange', this.locationResolver)
  }

};