'use strict';

/* jasmine specs for directive workspace go here */

describe('directives', function () {
  beforeEach(module('campaignFlow'));

  describe('workspace', function () {
    it('should print current version', function () {
      module(function ($provide) {
        $provide.value('version', 'TEST_VER');
      });
      inject(function ($compile, $rootScope) {
        var element = $compile('<span workspace></span>')($rootScope);
        expect(element.text()).toEqual('TEST_VER');
      });
    });
  });
});