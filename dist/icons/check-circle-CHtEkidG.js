import { openBlock as t, createElementBlock as l, createElementVNode as r } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none"
};
function o(c, e) {
  return t(), l("svg", n, e[0] || (e[0] = [
    r("path", {
      fill: "currentColor",
      d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17m-1.25 9.94 4.47-4.47a.75.75 0 0 1 1.133.976l-.073.084-5 5a.75.75 0 0 1-.976.073l-.084-.073-2.5-2.5a.75.75 0 0 1 .976-1.133l.084.073zl4.47-4.47z"
    }, null, -1)
  ]));
}
const i = { render: o };
export {
  i as default,
  o as render
};
