import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
const r = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none"
};
function l(a, e) {
  return t(), n("svg", r, e[0] || (e[0] = [
    o("path", {
      fill: "currentColor",
      d: "M4.22 8.47a.75.75 0 0 1 1.06 0L12 15.19l6.72-6.72a.75.75 0 1 1 1.06 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L4.22 9.53a.75.75 0 0 1 0-1.06"
    }, null, -1)
  ]));
}
const d = { render: l };
export {
  d as default,
  l as render
};
