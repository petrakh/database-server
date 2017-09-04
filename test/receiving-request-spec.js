'use strict';

var expect = require('chai').expect;

describe('SimpleServer', function() {
  it('should exist', function() {
    var SimpleServer = require('./receiving-request.js');
    expect(SimpleServer).to.not.be.undefined;
  });
});
