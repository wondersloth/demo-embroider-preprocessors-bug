/*path@sample-app/components/salutation.js*/
define("sample-app/components/salutation", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div local-class="salutation-container">
    <span local-class="salutation-message">
      Good Morning!
    </span>
  </div>
  */
  {
    "id": "dcO9rh4n",
    "block": "[[[10,0],[14,\"local-class\",\"salutation-container\"],[12],[1,\"\\n  \"],[10,1],[14,\"local-class\",\"salutation-message\"],[12],[1,\"\\n    Good Morning!\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[]]",
    "moduleName": "sample-app/components/salutation.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());

  _exports.default = _default;
});