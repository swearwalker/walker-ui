import { openBlock as t, createElementBlock as r, createElementVNode as o } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none"
};
function l(a, e) {
  return t(), r("svg", n, e[0] || (e[0] = [
    o("path", {
      fill: "currentColor",
      d: "M12 7.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5m0 6a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5M10.25 18a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0"
    }, null, -1)
  ]));
}
const i = { render: l };
export {
  i as default,
  l as render
};
