import { dbSidebars } from "../database/dbSidebars.js";

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

    this.findeController().forEach(elem => {
      // Create all elements
      const listItem = document.createElement('li');
      const listItemLink = document.createElement('a');
      const listItemLinkIcon = document.createElement('i');

      // Add CSS to elements
      listItem.classList.add('aside-right__navbar__menu__item');
      listItemLink.classList.add('aside-right__navbar__menu__item__link');
      listItemLinkIcon.classList.add('aside-right__navbar__menu__item__link__icon');
      listItemLinkIcon.classList.add(elem.icon);

      // Add info to elements
      listItemLink.textContent = elem.title;
      listItemLink.href = elem.link;

      if (elem.target !== undefined || elem.target !== '') {
        listItemLink.target = elem.target;
      }

      // Push to HTML
      listItemLink.prepend(listItemLinkIcon);
      listItem.append(listItemLink);
      this.fatherBlock.append(listItem);
    });
  }
}