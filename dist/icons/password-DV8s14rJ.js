import { openBlock as t, createElementBlock as r, createElementVNode as e } from "vue";
const a = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none"
};
function o(n, l) {
  return t(), r("svg", a, l[0] || (l[0] = [
    e("path", {
      fill: "currentColor",
      d: "M11.78 10.22a.75.75 0 0 0-1.06 1.06l.72.72-.72.72a.75.75 0 1 0 1.06 1.06l.72-.72.72.72a.75.75 0 0 0 1.06-1.062L13.561 12l.72-.72a.75.75 0 1 0-1.061-1.06l-.72.72zm-6.56 0a.75.75 0 0 1 1.06 0l.72.72.72-.72a.75.75 0 1 1 1.06 1.06l-.719.72.72.718A.75.75 0 1 1 7.72 13.78L7 13.06l-.72.72a.75.75 0 0 1-1.06-1.06l.72-.72-.72-.72a.75.75 0 0 1 0-1.06M16.5 13.5a.75.75 0 0 0 0 1.5h1.75a.75.75 0 0 0 0-1.5z"
    }, null, -1),
    e("path", {
      fill: "currentColor",
      d: "M5.25 5A3.25 3.25 0 0 0 2 8.25v7.5A3.25 3.25 0 0 0 5.25 19h13.5A3.25 3.25 0 0 0 22 15.75v-7.5A3.25 3.25 0 0 0 18.75 5zM3.5 8.25c0-.967.783-1.75 1.75-1.75h13.5c.967 0 1.75.783 1.75 1.75v7.5a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75z"
    }, null, -1)
  ]));
}
const d = { render: o };
export {
  d as default,
  o as render
};
