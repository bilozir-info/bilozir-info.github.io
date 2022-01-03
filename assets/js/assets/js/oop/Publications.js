import { dbPublications } from "../database/dbPublications.js";

export class Publications {
  constructor(categories = undefined) {
    this.categories = categories;
    this.fatherBlock = document.querySelector('.js--publication-list');
    this.arrayPublications = dbPublications;

    this.pushToHtml(this.categories);
  }

  pushToHtml(categories) {
    this.fatherBlock.innerHTML = '';

    this.arrayPublications.forEach((elem, id) => {

      if (categories === elem.categories || categories === undefined) {
        // Create new elements
        const blockPost = document.createElement('li');
        const blockPostTitle = document.createElement('h3')
        const blockPostHorLine = document.createElement('hr')
        if (elem.img !== undefined) {
          const blockPostImg = document.createElement('img');
          blockPostImg.src = elem.img;
          blockPostImg.classList.add('main__publication-list__item__img');
          blockPost.prepend(blockPostImg);
        };
        const blockPostText = document.createElement('p');


        // Add info to elements
        blockPostTitle.textContent = elem.title;
        blockPostText.innerHTML = elem.text;

        // Add class to elements
        blockPost.id = id;

        // Add class to elements
        blockPost.classList.add('main__publication-list__item');
        blockPostTitle.classList.add('main__publication-list__item__title');
        blockPostText.classList.add('main__publication-list__item__text');

        // Add elements
        blockPost.prepend(blockPostHorLine);
        blockPost.prepend(blockPostTitle);
        blockPost.append(blockPostText);
        this.fatherBlock.prepend(blockPost);
      }

    });
  }
}