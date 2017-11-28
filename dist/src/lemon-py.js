'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LemonPy = function () {
  function LemonPy(pyObject) {
    _classCallCheck(this, LemonPy);

    this.pyObject = String(pyObject);
  }

  /**
   * return the pyObject in String
   */


  _createClass(LemonPy, [{
    key: 'str',
    value: function str() {
      return this.pyObject;
    }

    /**
     * to uppercase. Arrowfunction its not work...
     */

  }, {
    key: 'upper',
    value: function upper() {
      return this.pyObject.toUpperCase();
    }

    /**
     * to lowercase.
     */

  }, {
    key: 'lower',
    value: function lower() {
      return this.pyObject.toLowerCase();
    }

    /**
     * count the number of strings is in this object.
     */

  }, {
    key: 'count',
    value: function count(str) {
      str = String(str);
      var count = 0;
      var pyText = this.pyObject;
      var validation = true;

      while (validation) {
        validation = pyText.search(str) > -1 ? true : false;
        if (validation) {
          pyText = pyText.replace(str);
          count++;
        }
      }

      return count;
    }

    /**
     * find the position in the object of a particular str
     */

  }, {
    key: 'find',
    value: function find(str) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this.pyObject.indexOf(str, index);
    }

    /**
     * return length of object
     */

  }, {
    key: 'len',
    value: function len() {
      return this.pyObject.length;
    }
  }]);

  return LemonPy;
}();

module.exports = LemonPy;