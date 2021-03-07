(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1072:function(module,exports,__webpack_require__){"use strict";var _addons=__webpack_require__(160),_constants=__webpack_require__(471),_components=__webpack_require__(1073);_addons.addons.register(_constants.ADDON_ID,(function(){_addons.addons.add(_constants.TOOL_ID,{type:_addons.types.TOOL,title:"Storybook Component Status",match:function match(_ref){var viewMode=_ref.viewMode;return!(!viewMode||!viewMode.match(/^(story|docs)$/))},render:_components.Badge})}))},1073:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Badge",{enumerable:!0,get:function get(){return _Badge.default}});var _Badge=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(1074))},1074:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _templateObject,_react=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(0)),_api=__webpack_require__(38),_components=__webpack_require__(32),_theming=__webpack_require__(5),_constants=__webpack_require__(471),_merge=__webpack_require__(1075);var BADGES_MAP={beta:{title:"beta",color:"#0965DF",background:"#0965DC1A"},stable:{title:"stable",color:"#0bbd00",background:"#dcffd6"},review:{title:"in review",color:"#BD4700",background:"#FFF2D6"},deprecated:{title:"deprecated",color:"#BD0000",background:"#FFD6D6"}},Badge=(0,_theming.styled)(_components.Badge)((function baseStyles(_ref){var badges=_ref.badges,status=_ref.status,COLORS=(0,_merge.merge)(BADGES_MAP,badges);return(0,_theming.css)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n    label: badge;\n\n    color: ",";\n    text-transform: uppercase;\n\n    user-select: none;\n    background: ",";\n  "])),COLORS[status].color,COLORS[status].background)}));var _default=function Status(){var story=(0,_api.useStorybookApi)().getCurrentStoryData();if(story){var _story$parameters=story.parameters,status=_story$parameters.status,badges=_story$parameters.badges;if(status)return _react.default.createElement(Badge,{key:_constants.TOOL_ID,badges:badges,status:status},(0,_merge.merge)(BADGES_MAP,badges)[status].title)}return null};exports.default=_default},1075:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.merge=void 0;exports.merge=function merge(target,source){return Object.assign({},target,source)}},1076:function(module,exports,__webpack_require__){"use strict";__webpack_require__(160).addons.setConfig({refs:{}})},471:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TOOL_ID=exports.ADDON_ID=void 0;exports.ADDON_ID="storybook-addon-status";var TOOL_ID="".concat("storybook-addon-status","/tool");exports.TOOL_ID=TOOL_ID},482:function(module,exports,__webpack_require__){__webpack_require__(483),__webpack_require__(639),__webpack_require__(1072),module.exports=__webpack_require__(1076)},550:function(module,exports){}},[[482,1,2]]]);