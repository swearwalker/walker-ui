import { openBlock as t, createElementBlock as r, createElementVNode as n } from "vue";
const o = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none"
};
function l(a, e) {
  return t(), r("svg", o, e[0] || (e[0] = [
    n("path", {
      fill: "currentColor",
      d: "M17.754 14a2.25 2.25 0 0 1 2.25 2.249v.575c0 .894-.32 1.76-.902 2.438-1.57 1.834-3.957 2.739-7.102 2.739s-5.532-.905-7.098-2.74a3.75 3.75 0 0 1-.898-2.435v-.577a2.25 2.25 0 0 1 2.249-2.25h11.501Zm0 1.5H6.253a.75.75 0 0 0-.75.749v.577c0 .536.192 1.054.54 1.461 1.253 1.468 3.219 2.214 5.957 2.214s4.706-.746 5.962-2.214a2.25 2.25 0 0 0 .541-1.463v-.575a.75.75 0 0 0-.749-.75ZM12 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"
    }, null, -1)
  ]));
}
const c = { render: l };
export {
  c as default,
  l as render
};
