/* eslint-env mocha */
'use strict';
var plugin = require('..');

var expect = require('chai').expect;
var fs = require('fs');
var path = require('path');

var rules = fs.readdirSync(path.resolve(__dirname, '../lib/rules/'))
  .map(function(f) {
    return path.basename(f, '.js');
  });

describe('all rule files should be exported by the plugin', function() {
    rules.forEach(function(ruleName) {
        it('should export ' + ruleName, function() {
            expect(plugin.rules[ruleName]).to.equal(require(path.join('../lib/rules', ruleName)));
        });
    });
});

describe('configurations', function() {
    it('should export a \'recommended\' configuration', function() {
        expect(plugin.configs.recommended).to.be.ok;
    });
});
