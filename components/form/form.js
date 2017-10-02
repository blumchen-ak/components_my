(function() {
  'use strict';

  class Form {
    /**
    * @constructor
    * @param  {Object} opts
    */  	
    constuctor(options) {
      this.el = options.el;
      this.data = options.data;
    }

    render() {

    }

  }
  window.Form = Form;
})(window);
