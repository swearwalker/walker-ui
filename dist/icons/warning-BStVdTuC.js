import { openBlock as e, createElementBlock as t, createElementVNode as n } from "vue";
const a = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none"
};
function r(o, l) {
  return e(), t("svg", a, l[0] || (l[0] = [
    n("path", {
      fill: "currentColor",
      d: "M10.91 2.782a2.25 2.25 0 0 1 2.975.74l.083.138 7.759 14.009a2.25 2.25 0 0 1-1.814 3.334l-.154.006H4.243a2.25 2.25 0 0 1-2.041-3.197l.072-.143L10.031 3.66a2.25 2.25 0 0 1 .878-.878Zm9.505 15.613-7.76-14.008a.75.75 0 0 0-1.254-.088l-.057.088-7.757 14.008a.75.75 0 0 0 .561 1.108l.095.006h15.516a.75.75 0 0 0 .696-1.028zl-7.76-14.008zM12 16.002a.999.999 0 1 1 0 1.997.999.999 0 0 1 0-1.997M11.995 8.5a.75.75 0 0 1 .744.647l.007.102.004 4.502a.75.75 0 0 1-1.494.103l-.006-.102-.004-4.502a.75.75 0 0 1 .75-.75Z"
    }, null, -1)
  ]));
}
const c = { render: r };
export {
  c as default,
  r as render
};
