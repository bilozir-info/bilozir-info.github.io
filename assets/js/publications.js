import { SidebarController } from "./sidebarController/SidebarController.js";
import { Publications } from "./oop/Publications.js";
import { dbPublications } from "./database/dbPublications.js";

document.addEventListener('DOMContentLoaded', () => {
  const publicationList = document.querySelector('.js--publication-list');
  new Publications(publicationList, dbPublications);
  new SidebarController();
});
