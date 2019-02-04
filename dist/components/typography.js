'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.H4 = exports.H3 = exports.H2 = exports.H1 = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    font-size: 30px;\n    color: red;\n'], ['\n    font-size: 30px;\n    color: red;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    font-size: 24px;\n'], ['\n    font-size: 24px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    font-size: 15px;\n    color: green;\n'], ['\n    font-size: 15px;\n    color: green;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var H1 = exports.H1 = _styledComponents2.default.h1(_templateObject);
var H2 = exports.H2 = (0, _styledComponents2.default)(H1)(_templateObject2);
var H3 = exports.H3 = (0, _styledComponents2.default)(H1)(_templateObject2);
var H4 = exports.H4 = (0, _styledComponents2.default)(H1)(_templateObject3);