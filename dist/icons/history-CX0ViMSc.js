import { openBlock as t, createElementBlock as l, createElementVNode as o } from "vue";
const r = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none"
};
function n(a, e) {
  return t(), l("svg", r, e[0] || (e[0] = [
    o("path", {
      fill: "currentColor",
      d: "M12 3a9 9 0 1 1-8.963 8.182.75.75 0 1 1 1.494.135 7.46 7.46 0 0 0 2.166 5.986A7.46 7.46 0 0 0 12 19.5 7.5 7.5 0 1 0 5.997 7.502h2.756a.75.75 0 0 1 .102 1.493l-.102.007H4.25a.75.75 0 0 1-.743-.648L3.5 8.252v-4.5a.75.75 0 0 1 1.493-.102L5 3.752l-.001 2.591A8.99 8.99 0 0 1 12 3m-.75 4a.75.75 0 0 1 .743.648L12 7.75V12h2.25a.75.75 0 0 1 .102 1.493l-.102.007h-3a.75.75 0 0 1-.743-.648l-.007-.102v-5a.75.75 0 0 1 .75-.75"
    }, null, -1)
  ]));
}
const i = { render: n };
export {
  i as default,
  n as render
};
