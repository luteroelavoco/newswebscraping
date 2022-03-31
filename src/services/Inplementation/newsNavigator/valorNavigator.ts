import { INavigator } from '../../INavigator';

export class ValorNavigator implements INavigator {

  constructor() {}
  async navigator(page) {
    const response = await page.evaluate(() => {
     
      var linkList = []
   
      function addPrincipalsNews(){
        const principalsLink = document.querySelectorAll(".bstn-dedupe-url:not(.is-subscriber-only)")
        for(var i = 0 ; i < Math.min(10, principalsLink.length); i++)
        linkList.push({ href: (principalsLink[i] as HTMLAnchorElement).href } )
      }
      addPrincipalsNews()

      return {
        linkList,
        source: 'Fonte : Valor Econômico'
      }
    });

    return response;
  }
}
