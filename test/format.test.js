/**
 * Created by YCXJ-wanglihui on 2015/4/1.
 */
'use strict';

var format = require("../lib/format");
var assert = require("assert");
describe("lib/format.js", function() {

  it("should be ok with format('', [])", function(done) {
    assert.equal(format("", []), "");
    done();
  });

  it("should be ok with format('%s, hello world!', ['wlh'])", function(done) {
    var res = format('%s, hello world!', ['wlh']);
    assert.equal("wlh, hello world!", res);
    done();
  })

  it("should be ok with format('hello, :username', {username: 'wlh'})", function(done) {
    var res = format('hello, :username', {username: 'wlh'});
    assert.equal("hello, wlh", res);
    done();
  })

  it("should be ok with format('hello, :username', {})", function(done) {
    var res = format('hello, :username', {});
    assert.equal("hello, :username", res);
    done();
  })
})