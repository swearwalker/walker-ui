import { openBlock as e, createElementBlock as t, createElementVNode as o } from "vue";
const r = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none"
};
function a(n, l) {
  return e(), t("svg", r, l[0] || (l[0] = [
    o("path", {
      fill: "currentColor",
      d: "m17.25 4-.1.007a.75.75 0 0 0-.65.743v12.692l-3.22-3.218-.084-.072a.75.75 0 0 0-.976 1.134l4.504 4.5.084.072a.75.75 0 0 0 .976-.073l4.497-4.5.072-.084a.75.75 0 0 0-.073-.977l-.084-.072a.75.75 0 0 0-.977.073L18 17.446V4.75l-.006-.102A.75.75 0 0 0 17.251 4Zm-11.036.22L1.72 8.715l-.073.084a.75.75 0 0 0 .073.976l.084.073a.75.75 0 0 0 .976-.073l3.217-3.218v12.698l.008.102a.75.75 0 0 0 .743.648l.101-.007a.75.75 0 0 0 .649-.743L7.497 6.559l3.223 3.217.084.072a.75.75 0 0 0 .975-1.134L7.275 4.22l-.085-.072a.75.75 0 0 0-.976.073Z"
    }, null, -1)
  ]));
}
const c = { render: a };
export {
  c as default,
  a as render
};
