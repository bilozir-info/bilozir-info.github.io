class DOMContentBuilder {
  constructor(objSiteMap) {
      this.objSiteMap = objSiteMap;
      this.fatherBlock = document.querySelector('#wrapped-app');
      
      this.render(this.fatherBlock, this.objSiteMap);
  }

  render(fatherBlock, objSiteMap) {
    for (const key in objSiteMap) {
      const childElement = document.createElement(objSiteMap[key].tag)

      if (objSiteMap[key].class !== undefined || objSiteMap[key].class !== '') {
        childElement.className = objSiteMap[key].class;
      }

      if (objSiteMap[key].text !== undefined || objSiteMap[key].text !== '') {
        childElement.textContent = objSiteMap[key].text; 
      }

      if (objSiteMap[key].attribute !== undefined || objSiteMap[key].attribute !== '') {
        for (const attribute in objSiteMap[key].attribute) {
          childElement.setAttribute(attribute, objSiteMap[key].attribute[attribute])
        }
      }

      fatherBlock.append(childElement)

      if (objSiteMap[key].child !== undefined || objSiteMap[key].child !== '') {
        this.render(childElement, objSiteMap[key].child)
      }

    }
  }
}

