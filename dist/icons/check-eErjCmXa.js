import { openBlock as t, createElementBlock as l, createElementVNode as n } from "vue";
const o = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none"
};
function r(c, e) {
  return t(), l("svg", o, e[0] || (e[0] = [
    n("path", {
      fill: "currentColor",
      d: "M4.53 12.97a.75.75 0 0 0-1.06 1.06l4.5 4.5a.75.75 0 0 0 1.06 0l11-11a.75.75 0 0 0-1.06-1.06L8.5 16.94z"
    }, null, -1)
  ]));
}
const d = { render: r };
export {
  d as default,
  r as render
};
