const React = require("react");
const ReactDom = require("react-dom");

const NumberBaseball = require("./NumberBaseball.jsx");
const NumberBaseballClass = require("./NumberBaseballClass.jsx");

ReactDom.render(<NumberBaseballClass />, document.querySelector("#root"));
