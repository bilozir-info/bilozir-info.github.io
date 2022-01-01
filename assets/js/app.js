import { Publications } from "./oop/Publications.js";
import { SidebarController } from "./sidebarController/SidebarController.js";

const router = new Router();

const headerMap = {
  header: {
    tag: 'header',
    class: 'header',
    child: {

      container: {
        tag: 'div',
        class: 'container d-flex',
        child: {

          navbar: {
            tag: 'nav',
            class: 'header__navbar',
            child: {

              menu: {
                tag: 'ul',
                class: 'header__navbar__menu',
                child: {

                  item1: {
                    tag: 'li',
                    class: 'header__navbar__menu__item js--navbar-item',
                    child: {

                      link: {
                        tag: 'a',
                        class: 'header__navbar__menu__item__link',
                        text: 'Головна',
                        attribute: {
                          'href': '#/home'
                        }
                      } 
                    }
                  },

                  item2: {
                    tag: 'li',
                    class: 'header__navbar__menu__item js--navbar-item',
                    child: {

                      link: {
                        tag: 'a',
                        class: 'header__navbar__menu__item__link  ',
                        text: 'Публікації',
                        attribute: {
                          'href': '#/publications/'
                        }
                      } 
                    }
                  }
                }
              }
            }
          },

          setting: {
            tag: 'button',
            class: 'header__setting-btn w-cog',
          }
        }
        
      }
    }
  },
}

const homePage = {
  container: {
    tag: 'div',
    class: 'container d-flex',
    attribute: {
      'data-content-bulder-status': 'page'
    },

    child: {
      asideL: {
        tag: 'aside',
        class: 'aside-left'
      },

      main: {
        tag: 'main',
        class: 'main',
      },

      asideR: {
        tag: 'aside',
        class: 'aside-right',
        child: {

          nav: {
            tag: 'navbar',
            class: 'aside-right__navbar',
            child: {
              
              menu: {
                tag: 'ul',
                class: 'aside-right__navbar__menu',
                attribute: {
                  'data-sidebar-controller': 'home',
                }
              }
            }
          }
        }
      },
    }
  }
}

const publicationsPage = {
  container: {
    tag: 'div',
    class: 'container d-flex',
    attribute: {
      'data-content-bulder-status': 'page'
    },

    child: {
      asideL: {
        tag: 'aside',
        class: 'aside-left'
      },

      main: {
        tag: 'main',
        class: 'main',
        
        child: {
          menu: {
            tag: 'ul',
            class: 'main__publication-list d-flex js--publication-list',
          }
        }
      },

      asideR: {
        tag: 'aside',
        class: 'aside-right',
        child: {

          nav: {
            tag: 'navbar',
            class: 'aside-right__navbar',
            child: {
              
              menu: {
                tag: 'ul',
                class: 'aside-right__navbar__menu',
                attribute: {
                  'data-sidebar-controller': 'publications',
                }
              }
            }
          }
        }
      },
    }
  }
}

new DOMContentBuilder(headerMap);


router.add('#/home', ()=> pageLoad(homePage, 0))
router.add('#/publications/', ()=> {
  pageLoad(publicationsPage, 1)
  new Publications()
})

function pageLoad(page, navbarActive) {
  document.querySelectorAll("[data-content-bulder-status='page']").forEach(elem => {
    elem.remove()
  })

  new DOMContentBuilder(page);

  document.querySelectorAll('.js--navbar-item').forEach(elem => {
    elem.classList.remove('active');
    document.querySelectorAll('.js--navbar-item')[navbarActive].classList.add('active');

    new SidebarController()
  })
}
