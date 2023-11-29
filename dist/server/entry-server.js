import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import React from "react";
import ReactDOMServer from "react-dom/server";
const BannerSmall = ({
  color,
  title,
  text
}) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `bg-${color} flex flex-col justify-center items-center height:20`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "text-md font-bold", children: title }),
        /* @__PURE__ */ jsx("div", { className: "text-sm", children: text })
      ]
    }
  );
};
function App() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    BannerSmall,
    {
      title: "Black friday",
      text: "Up to 60% black discounts",
      color: "red-500"
    }
  ) });
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
