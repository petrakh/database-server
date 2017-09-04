'use strict';

var expect = require('Chai').expect;

var server = require('../lib/server.js');

var request = require('request');

describe('server response', function() {
  before(function () {
    server.listen(4000);
  });

  after(function () {
    server.close();
  });

  it('should return 200', function (done) {
    request.get('http://localhost:4000', function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.equal('/');
      done();
    });
  });
});
