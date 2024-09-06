import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
const r = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none"
};
function l(i, e) {
  return t(), n("svg", r, e[0] || (e[0] = [
    o("path", {
      fill: "currentColor",
      d: "M3.755 12.5h16.492a.75.75 0 0 0 0-1.5H3.755a.75.75 0 0 0 0 1.5"
    }, null, -1)
  ]));
}
const c = { render: l };
export {
  c as default,
  l as render
};
