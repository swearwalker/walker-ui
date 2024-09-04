(function(t,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t["walker-ui"]={},t.Vue))})(this,function(t,e){"use strict";const m=(l,d)=>{const s=l.__vccOpts||l;for(const[r,i]of d)s[r]=i;return s},k={},E={class:"w-btn"},T=e.createElementVNode("div",{class:"w-btn__prefix-icon"},null,-1),y=e.createElementVNode("div",{class:"w-btn__suffix-icon"},null,-1);function B(l,d){return e.openBlock(),e.createElementBlock("button",E,[T,e.renderSlot(l.$slots,"prefix"),e.renderSlot(l.$slots,"default"),e.renderSlot(l.$slots,"suffix"),y])}const V=m(k,[["render",B]]);var g=(l=>(l.DEFAULT="default",l.SMOOTH="smooth",l.CLEAR="clear",l.TEXT="text",l))(g||{}),_=(l=>(l.XS="xs",l.SM="sm",l.MD="md",l.LG="lg",l))(_||{}),c=(l=>(l.PRIMARY="primary",l.SECONDARY="secondary",l.SUCCESS="success",l.INFO="info",l.WARNING="warning",l.DANGER="danger",l))(c||{}),f=(l=>(l.VERTICAL="vertical",l.HORIZONTAL="horizontal",l))(f||{}),u=(l=>(l.LEFT="left",l.RIGHT="right",l))(u||{}),p=(l=>(l.SM="sm",l.MD="md",l.LG="lg",l))(p||{}),b=(l=>(l.LEFT="left",l.RIGHT="right",l))(b||{});const M=["onClick"],R={key:1,class:"w-tabs__label"},N=e.defineComponent({__name:"WTabs",props:e.mergeModels({tabs:{},direction:{default:f.HORIZONTAL},color:{default:c.PRIMARY},position:{default:u.LEFT},tabLabel:{default:"label"},tabValue:{default:"value"},compact:{type:Boolean,default:!1},flexible:{type:Boolean,default:!1}},{modelValue:{type:[String,Number],required:!0},modelModifiers:{}}),emits:e.mergeModels(["update:modelValue"],["update:modelValue"]),setup(l,{emit:d}){const s=e.useModel(l,"modelValue"),r=d,i=(o,a)=>{a||r("update:modelValue",o)};return(o,a)=>(e.openBlock(),e.createElementBlock("ul",{class:e.normalizeClass(["w-tabs",[{vertical:o.direction==="vertical",compact:o.compact},o.position]])},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.tabs,n=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:n.value},[n.hidden?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("li",{key:0,class:e.normalizeClass(["w-tabs__item",[{"w-tabs__item-active":s.value===String(n[o.tabValue]),disabled:!!n.disabled,"flex-1 text-center":o.flexible},o.color]]),onClick:L=>i(n[o.tabValue],!!n.disabled)},[o.$slots.tab?e.renderSlot(o.$slots,"tab",{key:0,tab:n},void 0,!0):(e.openBlock(),e.createElementBlock("span",R,e.toDisplayString(n[o.tabLabel]),1))],10,M))],64))),128))],2))}}),h=m(N,[["__scopeId","data-v-56391542"]]),w={key:0,class:"w-toggle__label"},C=e.defineComponent({__name:"WToggle",props:e.mergeModels({color:{default:c.PRIMARY},disabled:{type:Boolean,default:!1},label:{default:""},smallRound:{type:Boolean,default:!1},size:{default:p.MD},labelPosition:{default:b.RIGHT}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:e.mergeModels(["update:modelValue"],["update:modelValue"]),setup(l,{emit:d}){const s=e.useModel(l,"modelValue"),r=l,i=d,o=()=>{r.disabled||i("update:modelValue",!s.value)};return(a,n)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([[{disabled:a.disabled},a.size,a.labelPosition],"w-toggle"]),onClick:o},[e.createElementVNode("div",{class:e.normalizeClass([[{"small-round":a.smallRound,active:s.value},a.color],"w-toggle__container"])},[e.createElementVNode("div",{class:e.normalizeClass([{active:s.value},"w-toggle__slider"])},null,2)],2),e.renderSlot(a.$slots,"default",{},void 0,!0),a.label&&!a.$slots.default?(e.openBlock(),e.createElementBlock("span",w,e.toDisplayString(a.label),1)):e.createCommentVNode("",!0)],2))}}),I=m(C,[["__scopeId","data-v-45c3d17c"]]);t.ButtonSize=_,t.ButtonVariant=g,t.ColorScheme=c,t.Direction=f,t.TabsPosition=u,t.ToggleLabelPosition=b,t.ToggleSize=p,t.WBtn=V,t.WTabs=h,t.WToggle=I,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});
