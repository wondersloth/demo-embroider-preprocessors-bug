/*path@sample-app/components/greeting.js*/
define("sample-app/components/greeting", ["exports", "some-addon/components/greeting"], function (_exports, _greeting) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _greeting.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"some-addon/components/greeting"eaimeta@70e063a35619d71f
});