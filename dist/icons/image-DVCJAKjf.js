import { openBlock as t, createElementBlock as l, createElementVNode as n } from "vue";
const o = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none"
};
function r(a, e) {
  return t(), l("svg", o, e[0] || (e[0] = [
    n("path", {
      fill: "currentColor",
      d: "M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm.58 16.401-5.805-5.686a.75.75 0 0 0-.966-.071l-.084.07-5.807 5.687q.274.098.582.099h11.5c.203 0 .399-.035.58-.099l-5.805-5.686L18.33 19.4ZM17.75 4.5H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5q.001.313.103.594l5.823-5.701a2.25 2.25 0 0 1 3.02-.116l.128.116 5.822 5.702q.102-.28.104-.595V6.25a1.75 1.75 0 0 0-1.75-1.75m-2.498 2a2.252 2.252 0 1 1 0 4.504 2.252 2.252 0 0 1 0-4.504m0 1.5a.752.752 0 1 0 0 1.504.752.752 0 0 0 0-1.504"
    }, null, -1)
  ]));
}
const c = { render: r };
export {
  c as default,
  r as render
};
