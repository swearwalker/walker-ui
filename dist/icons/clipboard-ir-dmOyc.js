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
      d: "M13.75 2a2.25 2.25 0 0 1 2.245 2.096L16 4.25q0-.127-.014-.25h1.764A2.25 2.25 0 0 1 20 6.25v13.5A2.25 2.25 0 0 1 17.75 22H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764q-.01.087-.013.176L8 4.25A2.25 2.25 0 0 1 10.25 2zm0 4.5h-3.5a2.25 2.25 0 0 1-1.892-1.033l.021.033H6.25a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75V6.25a.75.75 0 0 0-.75-.75h-2.129l.021-.033A2.25 2.25 0 0 1 13.75 6.5m0-3h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5"
    }, null, -1)
  ]));
}
const c = { render: n };
export {
  c as default,
  n as render
};
