const React = require('react');
const ReactDom = require('react-dom');

const WordRelayClass = require('./WordRelayClass');
const WordRelay = require('./WordRelay');

ReactDom.render(<WordRelayClass />, document.querySelector('#root'));
