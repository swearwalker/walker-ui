import { openBlock as t, createElementBlock as r, createElementVNode as n } from "vue";
const o = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none"
};
function l(c, e) {
  return t(), r("svg", o, e[0] || (e[0] = [
    n("path", {
      fill: "currentColor",
      d: "M11.073 18.839c-.808.707-2.073.133-2.073-.94V6.101c0-1.074 1.265-1.648 2.073-.94l6.31 5.521a1.75 1.75 0 0 1 0 2.634zm-.573-1.492 5.896-5.159a.25.25 0 0 0 0-.376L10.5 6.653z"
    }, null, -1)
  ]));
}
const a = { render: l };
export {
  a as default,
  l as render
};
