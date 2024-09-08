import { openBlock as t, createElementBlock as r, createElementVNode as l } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none"
};
function o(c, e) {
  return t(), r("svg", n, e[0] || (e[0] = [
    l("path", {
      fill: "currentColor",
      d: "M5.161 14.908c-.707.809-.133 2.073.941 2.073h11.796c1.074 0 1.648-1.265.941-2.073l-5.522-6.31a1.75 1.75 0 0 0-2.634 0zm1.492.573 5.159-5.896a.25.25 0 0 1 .376 0l5.16 5.896z"
    }, null, -1)
  ]));
}
const d = { render: o };
export {
  d as default,
  o as render
};
