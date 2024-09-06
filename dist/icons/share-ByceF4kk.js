import { openBlock as e, createElementBlock as t, createElementVNode as a } from "vue";
const r = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none"
};
function n(o, l) {
  return e(), t("svg", r, l[0] || (l[0] = [
    a("path", {
      fill: "currentColor",
      d: "M19.754 11a.75.75 0 0 1 .743.648l.007.102v7a3.25 3.25 0 0 1-3.065 3.246l-.185.005h-11a3.25 3.25 0 0 1-3.245-3.066l-.005-.184V11.75a.75.75 0 0 1 1.493-.102l.007.102v7a1.75 1.75 0 0 0 1.607 1.745l.143.006h11a1.75 1.75 0 0 0 1.744-1.607l.006-.143V11.75a.75.75 0 0 1 .75-.75M6.22 7.216l4.996-4.996a.75.75 0 0 1 .976-.073l.084.072 5.005 4.997a.75.75 0 0 1-.976 1.134l-.084-.073-3.723-3.716.001 11.694a.75.75 0 0 1-.648.743l-.102.007a.75.75 0 0 1-.743-.648l-.007-.102V4.558L7.28 8.277a.75.75 0 0 1-.976.073l-.084-.073a.75.75 0 0 1-.073-.977zl4.996-4.996z"
    }, null, -1)
  ]));
}
const s = { render: n };
export {
  s as default,
  n as render
};
