import { jsx, Fragment } from "react/jsx-runtime";
import React from "react";
import ReactDOMServer from "react-dom/server";
function App() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { children: "test" }) });
}
function render() {
  const html = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
  );
  return { html };
}
export {
  render
};
