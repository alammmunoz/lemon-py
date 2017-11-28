'use strict'
class LemonPy {
  constructor(pyObject) {
    this.pyObject = String(pyObject)
  }

  /**
   * return the pyObject in String
   */
  str() { return this.pyObject }

  /**
   * to uppercase. Arrowfunction its not work...
   */
  upper() { return this.pyObject.toUpperCase() }

  /**
   * to lowercase.
   */
  lower() { return this.pyObject.toLowerCase() }

  /**
   * count the number of strings is in this object.
   */
  count(str) {
    str = String(str)
    let count = 0
    let pyText = this.pyObject
    let validation = true

    while(validation) {
      validation = pyText.search(str) > -1? true : false
      if(validation) {
        pyText = pyText.replace(str)
        count++
      } 
    }

    return count
  }

  /**
   * find the position in the object of a particular str
   */
  find(str, index = 0) { return this.pyObject.indexOf(str, index) }

  /**
   * return length of object
   */
  len() { return this.pyObject.length }
}

module.exports = LemonPy