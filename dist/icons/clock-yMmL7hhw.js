import { openBlock as t, createElementBlock as l, createElementVNode as o } from "vue";
const n = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none"
};
function r(c, e) {
  return t(), l("svg", n, e[0] || (e[0] = [
    o("path", {
      fill: "currentColor",
      d: "M12 2c5.523 0 10 4.478 10 10s-4.477 10-10 10S2 17.522 2 12 6.477 2 12 2m0 1.667c-4.595 0-8.333 3.738-8.333 8.333S7.405 20.333 12 20.333s8.333-3.738 8.333-8.333S16.595 3.667 12 3.667M11.25 6a.75.75 0 0 1 .743.648L12 6.75V12h3.25a.75.75 0 0 1 .102 1.493l-.102.007h-4a.75.75 0 0 1-.743-.648l-.007-.102v-6a.75.75 0 0 1 .75-.75"
    }, null, -1)
  ]));
}
const a = { render: r };
export {
  a as default,
  r as render
};
