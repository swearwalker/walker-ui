import { openBlock as t, createElementBlock as o, createElementVNode as r } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none"
};
function l(a, e) {
  return t(), o("svg", n, e[0] || (e[0] = [
    r("path", {
      fill: "currentColor",
      d: "M7.75 12a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0m6 0a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0M18 13.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"
    }, null, -1)
  ]));
}
const c = { render: l };
export {
  c as default,
  l as render
};
