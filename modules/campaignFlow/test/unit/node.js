'use strict';

/* jasmine specs for directive node go here */

describe('directives', function () {
  beforeEach(module('campaignFlow'));

  describe('node', function () {
    it('should print current version', function () {
      module(function ($provide) {
        $provide.value('version', 'TEST_VER');
      });
      inject(function ($compile, $rootScope) {
        var element = $compile('<span node></span>')($rootScope);
        expect(element.text()).toEqual('TEST_VER');
      });
    });
  });
});