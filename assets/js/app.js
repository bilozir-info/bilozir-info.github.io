import { Publications } from "./oop/Publications.js";
import { SidebarController } from "./SidebarController.js";

const router = new Router();

const headerMap = {
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
              class: 'header__navbar__menu__item',
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
              class: 'header__navbar__menu__item',
              child: {

                link: {
                  tag: 'a',
                  class: 'header__navbar__menu__item__link',
                  text: 'Публікації',
                  attribute: {
                    'href': '#/publications'
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

const homePage = {
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

const publicationsPage = {
  asideL: {
    tag: 'aside',
    class: 'aside-left'
  },

  main: {
    tag: 'main',
    class: 'main',
    attribute: {
      'data-child-page': 'new-publication',
    },
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
    attribute: {
      'data-sidebar-controller': 'publications',
    },
    child: {

      nav: {
      tag: 'navbar',
      class: 'aside-right__navbar',
      child: {

        menu: {
          tag: 'ul',
          class: 'aside-right__navbar__menu',
          
        }
      }
      }
    }
  },
}

const newPublication = {
  new_publication: {
    tag: 'div',
    class: 'new-publication',
    child: {

      title:{
        tag: 'h2',
        class: 'new-publication__title',
        text: 'Розміщення публікацій',
      },

      hr1: {
        tag: 'hr',
      },

      text: {
        tag: 'p',
        class: 'new-publication__text',
        text: 'Для розміщення публікації на сайті потрібно заповнити форму.'
      },

      link: {
        tag: 'a',
        class: 'new-publication__link btn',
        text: 'Заповнити форму',
        attribute: {
          href: 'https://forms.gle/Xg3u6VHwtSpDnB9F9'
        }
      },

      
    }
  }
}

new DOMContentBuilder('#wrapped-header' ,headerMap);



router.add('', ()=> {
  pageLoad('#wrapped-main' ,homePage);
})

router.add('#/home', ()=> pageLoad('#wrapped-main', homePage))

router.add('#/publications', ()=> {
  pageLoad('#wrapped-main', publicationsPage)
  new Publications()
})

router.add('#/publications/new-publication', ()=> {
  pageLoad('#wrapped-main', publicationsPage)
  pageLoad('[data-child-page="new-publication"]', newPublication)
})

router.add('#/publications/buy-sell', ()=> {
  pageLoad('#wrapped-main', publicationsPage)
  // pageLoad('[data-child-page="buy-sell"]', newPublication)
})

function pageLoad(fatherBlock, page) {
  new DOMContentBuilder(fatherBlock ,page);

  document.querySelectorAll('.js--navbar-item').forEach(elem => {
    elem.classList.remove('active');
  })
  
  new SidebarController()
  
  for (const key in [...document.querySelectorAll('a[href]')]) {
    [...document.querySelectorAll('a[href]')][key].parentNode.classList.remove('active')
  }

  for (const key in [...document.querySelectorAll(`a[href='${window.location.hash}'`)]) {
    [...document.querySelectorAll(`a[href='${window.location.hash}'`)][key].parentNode.classList.add('active');
  }

  if (window.location.hash === '') {
    document.querySelector('a[href="#/home"]').parentNode.classList.add('active');
  }

  if (/\#\/publications/.test(window.location.hash)) {
    document.querySelector('a[href="#/publications"]').parentNode.classList.add('active');
  }

}

