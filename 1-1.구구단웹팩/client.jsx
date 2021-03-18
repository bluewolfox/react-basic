const React = require('react');
const ReactDom = require('react-dom');

const GuGuDan = require("./GuGuDan")
const GuGuDanHooks = require("./GuGuDan")

ReactDom.render(<GuGuDanHooks />, document.querySelector('#root'));
