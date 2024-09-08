import { openBlock as t, createElementBlock as n, createElementVNode as o } from "vue";
const l = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none"
};
function r(c, e) {
  return t(), n("svg", l, e[0] || (e[0] = [
    o("path", {
      fill: "currentColor",
      d: "M12 4C9.236 4 7 6.236 7 9a.75.75 0 0 0 1.5 0c0-1.936 1.564-3.5 3.5-3.5s3.5 1.564 3.5 3.5c0 .852-.222 1.42-.529 1.86-.324.463-.767.823-1.302 1.232l-.138.105c-1.01.768-2.281 1.734-2.281 3.803v.25a.75.75 0 0 0 1.5 0V16c0-1.317.714-1.863 1.785-2.682l.046-.035c.527-.403 1.147-.887 1.62-1.564.49-.701.799-1.57.799-2.719 0-2.764-2.236-5-5-5m0 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    }, null, -1)
  ]));
}
const i = { render: r };
export {
  i as default,
  r as render
};
