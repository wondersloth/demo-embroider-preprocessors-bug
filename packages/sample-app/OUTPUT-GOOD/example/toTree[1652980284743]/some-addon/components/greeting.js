/*path@some-addon/components/greeting.js*/
define("some-addon/components/greeting", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div local-class="greeting-container">
    <span local-class="greeting-message">
      Hello Jane!
    </span>
  </div>
  
  */
  {
    "id": "sFovH8Zn",
    "block": "[[[10,0],[14,\"local-class\",\"greeting-container\"],[12],[1,\"\\n  \"],[10,1],[14,\"local-class\",\"greeting-message\"],[12],[1,\"\\n    Hello Jane!\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "some-addon/components/greeting.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());

  _exports.default = _default;
});