XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var array_filter = require('/Users/kvz/code/phpjs/src/php/array/array_filter.js')

describe('php.array.array_filter.js', function () {
  it('should pass example 1', function (done) {
    var odd = function (num) {return (num & 1);}
    array_filter({"a": 1, "b": 2, "c": 3, "d": 4, "e": 5}, odd)
    var expected = {"a": 1, "c": 3, "e": 5}
var odd = function (num) {return (num & 1);}
    var result = array_filter({"a": 1, "b": 2, "c": 3, "d": 4, "e": 5}, odd)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var even = function (num) {return (!(num & 1));}
    array_filter([6, 7, 8, 9, 10, 11, 12], even)
    var expected = [ 6, , 8, , 10, , 12 ]
var even = function (num) {return (!(num & 1));}
    var result = array_filter([6, 7, 8, 9, 10, 11, 12], even)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    array_filter({"a": 1, "b": false, "c": -1, "d": 0, "e": null, "f":'', "g":undefined})
    var expected = {"a":1, "c":-1}
    var result = array_filter({"a": 1, "b": false, "c": -1, "d": 0, "e": null, "f":'', "g":undefined})
    expect(result).to.deep.equal(expected)
    done()
  })
})