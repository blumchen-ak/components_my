(function() {
  'use strict';

  let Menu = window.Menu;
  let Form = window.Form;

  class App {
    /**
    * @constructor
    * @param  {Object} opts
    */  
    constuctor(options) {
      this.el = options.el;

      let menu = new Menu(
        el: document.querySelector('.js-menu'),

      data: {
        title: 'Title',
        items: [
          {
            title: 'Item 1',
            price: 500
          },
          {
            title: 'Item 2',
            price: 300
          },
          {
            title: 'Item 1',
            price: 400
          }
        ]
      }
      )
    }

  }

  // export
  window.App = App;
})();