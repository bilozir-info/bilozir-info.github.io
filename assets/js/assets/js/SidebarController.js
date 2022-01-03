import { dbSidebars } from "./database/dbSidebars.js";

export class SidebarController {
  constructor() {
    this.fatherBlock;
    this.init()
  }

  // Finde sidebar controlle in HTML
  findeController() {
    this.fatherBlock = document.querySelector('[data-sidebar-controller]');
    this.fatherBlock.innerHTML = '';

    return dbSidebars[this.fatherBlock.dataset.sidebarController]; 
  }

  // Initialization
  init() {
    const obj = this.findeController();
    const menu = document.createElement('nav');
    
    menu.classList.add('aside-right__navbar')
    this.fatherBlock.append(menu);

    for (const key in obj) {
      // Create all elements
      const header = document.createElement('h3');
      const list = document.createElement('ul');
      
      header.classList.add('aside-right__navbar__header')
      header.textContent = obj[key].header;


      menu.append(header);

      for (const item in obj[key]) {
        // Create all elements
        if (obj[key][item] !== obj[key].header) {

        const listItem = document.createElement('li');
        const listItemLink = document.createElement('a');
        const listItemLinkIcon = document.createElement('i');
      

        list.classList.add('aside-right__navbar__menu')
        listItem.classList.add('aside-right__navbar__menu__item');
        listItemLink.classList.add('aside-right__navbar__menu__item__link');
        listItemLinkIcon.classList.add('aside-right__navbar__menu__item__link__icon');
        listItemLinkIcon.classList.add(obj[key][item].icons);

        // Add info to elements
        listItemLink.textContent = obj[key][item].title;
        listItemLink.href = obj[key][item].link;
        
        if (obj[key][item].target !== undefined && obj[key][item].target !== '') {
          console.log(obj[key][item].target);
          listItemLink.target = obj[key][item].target;

        }
        
        // Push to HTML
        listItemLink.prepend(listItemLinkIcon);
        listItem.append(listItemLink);
        list.append(listItem);
        menu.append(list);
        }
      }
    }
  }
}