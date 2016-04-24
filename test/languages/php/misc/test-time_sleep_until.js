XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var time_sleep_until = require('/Users/kvz/code/phpjs/src/php/misc/time_sleep_until.js')

describe('php.misc.time_sleep_until.js', function () {
  it('should pass example 1', function (done) {
    time_sleep_until(1233146501) // delays until the time indicated by the given timestamp is reached
    var expected = true
    var result = time_sleep_until(1233146501) // delays until the time indicated by the given timestamp is reached
    expect(result).to.deep.equal(expected)
    done()
  })
})