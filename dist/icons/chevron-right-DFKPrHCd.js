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
      d: "M8.47 4.22a.75.75 0 0 0 0 1.06L15.19 12l-6.72 6.72a.75.75 0 1 0 1.06 1.06l7.25-7.25a.75.75 0 0 0 0-1.06L9.53 4.22a.75.75 0 0 0-1.06 0"
    }, null, -1)
  ]));
}
const i = { render: l };
export {
  i as default,
  l as render
};
