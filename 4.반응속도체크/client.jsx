import React from "react";
import ReactDom from "react-dom";

import RenderTest from "./RenderTest.jsx";
import ResponseCheckHooks from "./ResponseCheckHooks.jsx";
import ResponseCheckClass from "./ResponseCheckClass.jsx";

ReactDom.render(<ResponseCheckHooks />, document.querySelector("#root"));
