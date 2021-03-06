/* eslint-env qunit */
import * as Fn from '../../../src/js/utils/fn.js';

QUnit.module('fn');

QUnit.test('should add context to a function', function() {
  const newContext = { test: 'obj'};
  const asdf = function() {
    QUnit.ok(this === newContext);
  };
  const fdsa = Fn.bind(newContext, asdf);

  fdsa();
});
