import { INavigator } from '../../INavigator';

export class AngolaNavigator implements INavigator {

  constructor() {}
  async navigator(page) {
    const response = await page.evaluate(() => {
     
      var linkList = []
   
      function addPrincipalsNews(){
        const principalsLink = document.querySelectorAll('div.item-noticia.mb-4  div ~ a')
        for(var i = 0 ; i < Math.min(10, principalsLink.length); i++)
        linkList.push({ href: (principalsLink[i] as HTMLAnchorElement).href } )
      }
      addPrincipalsNews()

      return {
        linkList,
        source: 'Fonte : Jornal de Angola'
      }
    });

    return response;
  }
}
