const React = require('react');
const ReactDom = require('react-dom');

const WordRelayClass = require('./WordRelayClass');
const WordRelay = require('./WordRelay');

ReactDom.render(<WordRelay />, document.querySelector('#root'));
