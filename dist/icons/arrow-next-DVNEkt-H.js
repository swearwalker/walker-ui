import { openBlock as t, createElementBlock as l, createElementVNode as r } from "vue";
const o = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none"
};
function n(a, e) {
  return t(), l("svg", o, e[0] || (e[0] = [
    r("path", {
      fill: "currentColor",
      d: "M18.25 3a.75.75 0 0 1 .743.648L19 3.75v16.5a.75.75 0 0 1-1.493.102l-.007-.102V3.75a.75.75 0 0 1 .75-.75m-13.03.22a.75.75 0 0 1 .976-.073l.084.073 8.25 8.25a.75.75 0 0 1 .073.976l-.073.084-8.25 8.25a.75.75 0 0 1-1.133-.976l.073-.084L12.94 12 5.22 4.28a.75.75 0 0 1 0-1.06"
    }, null, -1)
  ]));
}
const d = { render: n };
export {
  d as default,
  n as render
};
