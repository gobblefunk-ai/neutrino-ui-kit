"use strict";(self.webpackChunkneutrino_ui_kit=self.webpackChunkneutrino_ui_kit||[]).push([[456],{"./node_modules/@heroicons/react/20/solid/esm/CheckIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function CheckIcon({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",clipRule:"evenodd"}))}const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CheckIcon)},"./node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function Bars3Icon({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(Bars3Icon)},"./stories/pages/Pricing.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Story:()=>Story,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Pricing_stories});var react=__webpack_require__("./node_modules/react/index.js"),dialog=__webpack_require__("./node_modules/@headlessui/react/dist/components/dialog/dialog.js"),useFocusRing=__webpack_require__("./node_modules/@react-aria/focus/dist/useFocusRing.mjs"),useHover=__webpack_require__("./node_modules/@react-aria/interactions/dist/useHover.mjs");function use_by_comparator_l(e,r){return null!==e&&null!==r&&"object"==typeof e&&"object"==typeof r&&"id"in e&&"id"in r?e.id===r.id:e===r}var use_event=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-event.js");var use_iso_morphic_effect=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),use_latest_value=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-latest-value.js"),use_sync_refs=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js"),disabled=__webpack_require__("./node_modules/@headlessui/react/dist/internal/disabled.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),use_disposables=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-disposables.js");function form_e(i={},s=null,t=[]){for(let[r,n]of Object.entries(i))form_o(t,f(s,r),n);return t}function f(i,s){return i?i+"["+s+"]":s}function form_o(i,s,t){if(Array.isArray(t))for(let[r,n]of t.entries())form_o(i,f(s,r.toString()),n);else t instanceof Date?i.push([s,t.toISOString()]):"boolean"==typeof t?i.push([s,t?"1":"0"]):"string"==typeof t?i.push([s,t]):"number"==typeof t?i.push([s,`${t}`]):null==t?i.push([s,""]):form_e(t,s,i)}var render=__webpack_require__("./node_modules/@headlessui/react/dist/utils/render.js"),internal_hidden=__webpack_require__("./node_modules/@headlessui/react/dist/internal/hidden.js");let form_fields_f=(0,react.createContext)(null);function c({children:t}){let e=(0,react.useContext)(form_fields_f);if(!e)return react.createElement(react.Fragment,null,t);let{target:r}=e;return r?(0,react_dom.createPortal)(react.createElement(react.Fragment,null,t),r):null}function j({data:t,form:e,disabled:r,onReset:n,overrides:F}){let[i,a]=(0,react.useState)(null),p=(0,use_disposables.L)();return(0,react.useEffect)((()=>{if(n&&i)return p.addEventListener(i,"reset",n)}),[i,e,n]),react.createElement(c,null,react.createElement(C,{setForm:a,formId:e}),form_e(t).map((([s,v])=>react.createElement(internal_hidden.j,{features:internal_hidden.u.Hidden,...(0,render.oE)({key:s,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:e,disabled:r,name:s,value:v,...F})}))))}function C({setForm:t,formId:e}){return(0,react.useEffect)((()=>{if(e){let r=document.getElementById(e);r&&t(r)}}),[t,e]),e?null:react.createElement(internal_hidden.j,{features:internal_hidden.u.Hidden,as:"input",type:"hidden",hidden:!0,readOnly:!0,ref:r=>{if(!r)return;let n=r.closest("form");n&&t(n)}})}var e,id=__webpack_require__("./node_modules/@headlessui/react/dist/internal/id.js"),bugs=__webpack_require__("./node_modules/@headlessui/react/dist/utils/bugs.js"),focus_management=__webpack_require__("./node_modules/@headlessui/react/dist/utils/focus-management.js"),match=__webpack_require__("./node_modules/@headlessui/react/dist/utils/match.js"),owner=__webpack_require__("./node_modules/@headlessui/react/dist/utils/owner.js"),description=__webpack_require__("./node_modules/@headlessui/react/dist/components/description/description.js"),keyboard=__webpack_require__("./node_modules/@headlessui/react/dist/components/keyboard.js"),label=__webpack_require__("./node_modules/@headlessui/react/dist/components/label/label.js"),ke=((e=ke||{})[e.RegisterOption=0]="RegisterOption",e[e.UnregisterOption=1]="UnregisterOption",e);let Fe={0(o,t){let e=[...o.options,{id:t.id,element:t.element,propsRef:t.propsRef}];return{...o,options:(0,focus_management.wl)(e,(a=>a.element.current))}},1(o,t){let e=o.options.slice(),a=o.options.findIndex((g=>g.id===t.id));return-1===a?o:(e.splice(a,1),{...o,options:e})}},J=(0,react.createContext)(null);function X(o){let t=(0,react.useContext)(J);if(null===t){let e=new Error(`<${o} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(e,X),e}return t}J.displayName="RadioGroupDataContext";let z=(0,react.createContext)(null);function q(o){let t=(0,react.useContext)(z);if(null===t){let e=new Error(`<${o} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(e,q),e}return t}function Ie(o,t){return(0,match.Y)(t.type,Fe,o,t)}z.displayName="RadioGroupActionsContext";let We=(0,render.FX)((function Me(o,t){let e=(0,react.useId)(),a=(0,disabled._)(),{id:g=`headlessui-radiogroup-${e}`,value:R,form:O,name:n,onChange:f,by:c,disabled:p=a||!1,defaultValue:I,...m}=o,T=function use_by_comparator_u(e=use_by_comparator_l){return(0,react.useCallback)(((r,t)=>{if("string"==typeof e){let o=e;return(null==r?void 0:r[o])===(null==t?void 0:t[o])}return e(r,t)}),[e])}(c),[P,C]=(0,react.useReducer)(Ie,{options:[]}),i=P.options,[U,h]=(0,label.b0)(),[v,L]=(0,description.rU)(),D=(0,react.useRef)(null),M=(0,use_sync_refs.P)(D,t),l=function use_default_value_l(e){let[t]=(0,react.useState)(e);return t}(I),[s,A]=function use_controllable_T(l,r,c){let[i,s]=(0,react.useState)(c),e=void 0!==l,t=(0,react.useRef)(e),u=(0,react.useRef)(!1),d=(0,react.useRef)(!1);return!e||t.current||u.current?!e&&t.current&&!d.current&&(d.current=!0,t.current=e,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(u.current=!0,t.current=e,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[e?l:i,(0,use_event._)((n=>(e||s(n),null==r?void 0:r(n))))]}(R,f,l),S=(0,react.useMemo)((()=>i.find((r=>!r.propsRef.current.disabled))),[i]),y=(0,react.useMemo)((()=>i.some((r=>T(r.propsRef.current.value,s)))),[i,s]),d=(0,use_event._)((r=>{var u;if(p||T(r,s))return!1;let k=null==(u=i.find((w=>T(w.propsRef.current.value,r))))?void 0:u.propsRef.current;return(null==k||!k.disabled)&&(null==A||A(r),!0)})),_=(0,use_event._)((r=>{let k=D.current;if(!k)return;let u=(0,owner.T)(k),w=i.filter((b=>!1===b.propsRef.current.disabled)).map((b=>b.element.current));switch(r.key){case keyboard.D.Enter:!function form_p(i){var t,r;let s=null!=(t=null==i?void 0:i.form)?t:i.closest("form");if(s){for(let n of s.elements)if(n!==i&&("INPUT"===n.tagName&&"submit"===n.type||"BUTTON"===n.tagName&&"submit"===n.type||"INPUT"===n.nodeName&&"image"===n.type))return void n.click();null==(r=s.requestSubmit)||r.call(s)}}(r.currentTarget);break;case keyboard.D.ArrowLeft:case keyboard.D.ArrowUp:if(r.preventDefault(),r.stopPropagation(),(0,focus_management.CU)(w,focus_management.BD.Previous|focus_management.BD.WrapAround)===focus_management.Me.Success){let E=i.find((W=>W.element.current===(null==u?void 0:u.activeElement)));E&&d(E.propsRef.current.value)}break;case keyboard.D.ArrowRight:case keyboard.D.ArrowDown:if(r.preventDefault(),r.stopPropagation(),(0,focus_management.CU)(w,focus_management.BD.Next|focus_management.BD.WrapAround)===focus_management.Me.Success){let E=i.find((W=>W.element.current===(null==u?void 0:u.activeElement)));E&&d(E.propsRef.current.value)}break;case keyboard.D.Space:{r.preventDefault(),r.stopPropagation();let b=i.find((E=>E.element.current===(null==u?void 0:u.activeElement)));b&&d(b.propsRef.current.value)}}})),Q=(0,use_event._)((r=>(C({type:0,...r}),()=>C({type:1,id:r.id})))),ue=(0,react.useMemo)((()=>({value:s,firstOption:S,containsCheckedOption:y,disabled:p,compare:T,...P})),[s,S,y,p,T,P]),ce=(0,react.useMemo)((()=>({registerOption:Q,change:d})),[Q,d]),fe={ref:M,id:g,role:"radiogroup","aria-labelledby":U,"aria-describedby":v,onKeyDown:_},Te=(0,react.useMemo)((()=>({value:s})),[s]),Re=(0,react.useCallback)((()=>{if(void 0!==l)return d(l)}),[d,l]),me=(0,render.Ci)();return react.createElement(L,{name:"RadioGroup.Description"},react.createElement(h,{name:"RadioGroup.Label"},react.createElement(z.Provider,{value:ce},react.createElement(J.Provider,{value:ue},null!=n&&react.createElement(j,{disabled:p,data:{[n]:s||"on"},overrides:{type:"radio",checked:null!=s},form:O,onReset:Re}),me({ourProps:fe,theirProps:m,slot:Te,defaultTag:"div",name:"RadioGroup"})))))})),Be=(0,render.FX)((function He(o,t){var y;let e=X("RadioGroup.Option"),a=q("RadioGroup.Option"),g=(0,react.useId)(),{id:R=`headlessui-radiogroup-option-${g}`,value:O,disabled:n=e.disabled||!1,autoFocus:f=!1,...c}=o,p=(0,react.useRef)(null),I=(0,use_sync_refs.P)(p,t),[m,T]=(0,label.b0)(),[P,C]=(0,description.rU)(),i=(0,use_latest_value.Y)({value:O,disabled:n});(0,use_iso_morphic_effect.s)((()=>a.registerOption({id:R,element:p,propsRef:i})),[R,a,p,i]);let U=(0,use_event._)((d=>{var _;if((0,bugs.l)(d.currentTarget))return d.preventDefault();a.change(O)&&(null==(_=p.current)||_.focus())})),h=(null==(y=e.firstOption)?void 0:y.id)===R,{isFocusVisible:v,focusProps:L}=(0,useFocusRing.o)({autoFocus:f}),{isHovered:D,hoverProps:M}=(0,useHover.M)({isDisabled:n}),l=e.compare(e.value,O),s=(0,render.v6)({ref:I,id:R,role:"radio","aria-checked":l?"true":"false","aria-labelledby":m,"aria-describedby":P,"aria-disabled":!!n||void 0,tabIndex:n?-1:l||!e.containsCheckedOption&&h?0:-1,onClick:n?void 0:U,autoFocus:f},L,M),A=(0,react.useMemo)((()=>({checked:l,disabled:n,active:v,hover:D,focus:v,autofocus:f})),[l,n,D,v,f]),S=(0,render.Ci)();return react.createElement(C,{name:"RadioGroup.Description"},react.createElement(T,{name:"RadioGroup.Label"},S({ourProps:s,theirProps:c,slot:A,defaultTag:"div",name:"RadioGroup.Option"})))})),Ve=(0,render.FX)((function Ne(o,t){var y;let e=X("Radio"),a=q("Radio"),g=(0,react.useId)(),R=(0,id.q)(),O=(0,disabled._)(),{id:n=R||`headlessui-radio-${g}`,value:f,disabled:c=e.disabled||O||!1,autoFocus:p=!1,...I}=o,m=(0,react.useRef)(null),T=(0,use_sync_refs.P)(m,t),P=(0,label.o2)(),C=(0,description.MM)(),i=(0,use_latest_value.Y)({value:f,disabled:c});(0,use_iso_morphic_effect.s)((()=>a.registerOption({id:n,element:m,propsRef:i})),[n,a,m,i]);let U=(0,use_event._)((d=>{var _;if((0,bugs.l)(d.currentTarget))return d.preventDefault();a.change(f)&&(null==(_=m.current)||_.focus())})),{isFocusVisible:h,focusProps:v}=(0,useFocusRing.o)({autoFocus:p}),{isHovered:L,hoverProps:D}=(0,useHover.M)({isDisabled:c}),M=(null==(y=e.firstOption)?void 0:y.id)===n,l=e.compare(e.value,f),s=(0,render.v6)({ref:T,id:n,role:"radio","aria-checked":l?"true":"false","aria-labelledby":P,"aria-describedby":C,"aria-disabled":!!c||void 0,tabIndex:c?-1:l||!e.containsCheckedOption&&M?0:-1,autoFocus:p,onClick:c?void 0:U},v,D),A=(0,react.useMemo)((()=>({checked:l,disabled:c,hover:L,focus:h,autofocus:p})),[l,c,L,h,p]);return(0,render.Ci)()({ourProps:s,theirProps:I,slot:A,defaultTag:"span",name:"Radio"})})),Ke=label.JU,$e=description.VY,Rt=Object.assign(We,{Option:Be,Radio:Ve,Label:Ke,Description:$e});var Bars3Icon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js"),XMarkIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js"),CheckIcon=__webpack_require__("./node_modules/@heroicons/react/20/solid/esm/CheckIcon.js");const navigation=[{name:"Product",href:"#"},{name:"Features",href:"#"},{name:"Marketplace",href:"#"},{name:"Company",href:"#"}],pricing={frequencies:[{value:"monthly",label:"Monthly",priceSuffix:"/month"},{value:"annually",label:"Annually",priceSuffix:"/year"}],tiers:[{name:"Freelancer",id:"tier-freelancer",href:"#",price:{monthly:"$19",annually:"$199"},description:"The essentials to provide your best work for clients.",features:["5 products","Up to 1,000 subscribers","Basic analytics","48-hour support response time"],mostPopular:!1},{name:"Startup",id:"tier-startup",href:"#",price:{monthly:"$29",annually:"$299"},description:"A plan that scales with your rapidly growing business.",features:["25 products","Up to 10,000 subscribers","Advanced analytics","24-hour support response time","Marketing automations"],mostPopular:!0},{name:"Enterprise",id:"tier-enterprise",href:"#",price:{monthly:"$59",annually:"$599"},description:"Dedicated support and infrastructure for your company.",features:["Unlimited products","Unlimited subscribers","Advanced analytics","1-hour, dedicated support response time","Marketing automations","Custom reporting tools"],mostPopular:!1}]},faqs=[{id:1,question:"What's the best thing about Switzerland?",answer:"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."}],footerNavigation={solutions:[{name:"Marketing",href:"#"},{name:"Analytics",href:"#"},{name:"Automation",href:"#"},{name:"Commerce",href:"#"},{name:"Insights",href:"#"}],support:[{name:"Submit ticket",href:"#"},{name:"Documentation",href:"#"},{name:"Guides",href:"#"}],company:[{name:"About",href:"#"},{name:"Blog",href:"#"},{name:"Jobs",href:"#"},{name:"Press",href:"#"}],legal:[{name:"Terms of service",href:"#"},{name:"Privacy policy",href:"#"},{name:"License",href:"#"}],social:[{name:"Facebook",href:"#",icon:props=>react.createElement("svg",{fill:"currentColor",viewBox:"0 0 24 24",...props},react.createElement("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",clipRule:"evenodd"}))},{name:"Instagram",href:"#",icon:props=>react.createElement("svg",{fill:"currentColor",viewBox:"0 0 24 24",...props},react.createElement("path",{fillRule:"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",clipRule:"evenodd"}))},{name:"X",href:"#",icon:props=>react.createElement("svg",{fill:"currentColor",viewBox:"0 0 24 24",...props},react.createElement("path",{d:"M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"}))},{name:"GitHub",href:"#",icon:props=>react.createElement("svg",{fill:"currentColor",viewBox:"0 0 24 24",...props},react.createElement("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"}))},{name:"YouTube",href:"#",icon:props=>react.createElement("svg",{fill:"currentColor",viewBox:"0 0 24 24",...props},react.createElement("path",{fillRule:"evenodd",d:"M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z",clipRule:"evenodd"}))}]};function classNames(...classes){return classes.filter(Boolean).join(" ")}function Pricing(){const[mobileMenuOpen,setMobileMenuOpen]=(0,react.useState)(!1),[frequency,setFrequency]=(0,react.useState)(pricing.frequencies[0]);return react.createElement("div",{className:"bg-gray-900"},react.createElement("header",null,react.createElement("nav",{"aria-label":"Global",className:"flex justify-between items-center mx-auto lg:px-8 p-6 max-w-7xl"},react.createElement("div",{className:"flex lg:flex-1"},react.createElement("a",{href:"#",className:"-m-1.5 p-1.5"},react.createElement("span",{className:"sr-only"},"Your Company"),react.createElement("img",{alt:"",src:"https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500",className:"w-auto h-8"}))),react.createElement("div",{className:"flex lg:hidden"},react.createElement("button",{type:"button",onClick:()=>setMobileMenuOpen(!0),className:"inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md text-gray-400"},react.createElement("span",{className:"sr-only"},"Open main menu"),react.createElement(Bars3Icon.A,{"aria-hidden":"true",className:"w-6 h-6"}))),react.createElement("div",{className:"lg:flex lg:gap-x-12 hidden"},navigation.map((item=>react.createElement("a",{key:item.name,href:item.href,className:"font-semibold text-sm/6 text-white"},item.name)))),react.createElement("div",{className:"lg:flex lg:flex-1 lg:justify-end hidden"},react.createElement("a",{href:"#",className:"font-semibold text-sm/6 text-white"},"Log in ",react.createElement("span",{"aria-hidden":"true"},"→")))),react.createElement(dialog.lG,{open:mobileMenuOpen,onClose:setMobileMenuOpen,className:"lg:hidden"},react.createElement("div",{className:"z-50 fixed inset-0"}),react.createElement(dialog.Lj,{className:"right-0 z-50 fixed inset-y-0 bg-gray-900 px-6 py-6 sm:ring-1 sm:ring-white/10 w-full sm:max-w-sm overflow-y-auto"},react.createElement("div",{className:"flex justify-between items-center"},react.createElement("a",{href:"#",className:"-m-1.5 p-1.5"},react.createElement("span",{className:"sr-only"},"Your Company"),react.createElement("img",{alt:"",src:"https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500",className:"w-auto h-8"})),react.createElement("button",{type:"button",onClick:()=>setMobileMenuOpen(!1),className:"-m-2.5 p-2.5 rounded-md text-gray-400"},react.createElement("span",{className:"sr-only"},"Close menu"),react.createElement(XMarkIcon.A,{"aria-hidden":"true",className:"w-6 h-6"}))),react.createElement("div",{className:"mt-6 flow-root"},react.createElement("div",{className:"-my-6 divide-y divide-gray-500/25"},react.createElement("div",{className:"space-y-2 py-6"},navigation.map((item=>react.createElement("a",{key:item.name,href:item.href,className:"block hover:bg-gray-800 -mx-3 px-3 py-2 rounded-lg font-semibold text-base/7 text-white"},item.name)))),react.createElement("div",{className:"py-6"},react.createElement("a",{href:"#",className:"block hover:bg-gray-800 -mx-3 px-3 py-2.5 rounded-lg font-semibold text-base/7 text-white"},"Log in"))))))),react.createElement("main",null,react.createElement("div",{className:"mx-auto mt-16 sm:mt-32 px-6 lg:px-8 max-w-7xl"},react.createElement("div",{className:"mx-auto max-w-4xl text-center"},react.createElement("h1",{className:"font-semibold text-base/7 text-indigo-400"},"Pricing"),react.createElement("p",{className:"mt-2 font-semibold text-5xl text-balance text-white sm:text-6xl tracking-tight"},"Pricing that grows with you")),react.createElement("p",{className:"mx-auto mt-6 max-w-2xl font-medium text-center text-gray-400 text-lg text-pretty sm:text-xl/8"},"Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales."),react.createElement("div",{className:"flex justify-center mt-16"},react.createElement("fieldset",{"aria-label":"Payment frequency"},react.createElement(Rt,{value:frequency,onChange:setFrequency,className:"gap-x-1 grid grid-cols-2 bg-white/5 p-1 rounded-full font-semibold text-center text-white text-xs/5"},pricing.frequencies.map((option=>react.createElement(Ve,{key:option.value,value:option,className:"data-[checked]:bg-indigo-500 px-2.5 py-1 rounded-full cursor-pointer"},option.label)))))),react.createElement("div",{className:"gap-8 grid grid-cols-1 lg:grid-cols-3 mx-auto lg:mx-0 mt-10 max-w-md lg:max-w-none isolate"},pricing.tiers.map((tier=>react.createElement("div",{key:tier.id,className:classNames(tier.mostPopular?"bg-white/5 ring-2 ring-indigo-500":"ring-1 ring-white/10","rounded-3xl p-8 xl:p-10")},react.createElement("div",{className:"flex justify-between items-center gap-x-4"},react.createElement("h2",{id:tier.id,className:"font-semibold text-lg/8 text-white"},tier.name),tier.mostPopular?react.createElement("p",{className:"bg-indigo-500 px-2.5 py-1 rounded-full font-semibold text-white text-xs/5"},"Most popular"):null),react.createElement("p",{className:"mt-4 text-gray-300 text-sm/6"},tier.description),react.createElement("p",{className:"flex items-baseline gap-x-1 mt-6"},react.createElement("span",{className:"font-semibold text-4xl text-white tracking-tight"},tier.price[frequency.value]),react.createElement("span",{className:"font-semibold text-gray-300 text-sm/6"},frequency.priceSuffix)),react.createElement("a",{href:tier.href,"aria-describedby":tier.id,className:classNames(tier.mostPopular?"bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500":"bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white","mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2")},"Buy plan"),react.createElement("ul",{role:"list",className:"space-y-3 mt-8 xl:mt-10 text-gray-300 text-sm/6"},tier.features.map((feature=>react.createElement("li",{key:feature,className:"flex gap-x-3"},react.createElement(CheckIcon.A,{"aria-hidden":"true",className:"flex-none w-5 h-6 text-white"}),feature))))))))),react.createElement("div",{className:"mx-auto mt-24 sm:mt-56 px-6 lg:px-8 max-w-7xl"},react.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-2 mx-auto lg:mx-0 max-w-2xl lg:max-w-none"},react.createElement("div",{className:"flex flex-col lg:pr-8 xl:pr-20 pb-10 sm:pb-16 lg:pb-0"},react.createElement("img",{alt:"",src:"https://tailwindui.com/plus/img/logos/tuple-logo-white.svg",className:"h-12 self-start"}),react.createElement("figure",{className:"flex flex-col flex-auto justify-between mt-10"},react.createElement("blockquote",{className:"text-lg/8 text-white"},react.createElement("p",null,"“Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.”")),react.createElement("figcaption",{className:"flex items-center gap-x-6 mt-10"},react.createElement("img",{alt:"",src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"bg-gray-800 rounded-full w-14 h-14"}),react.createElement("div",{className:"text-base"},react.createElement("div",{className:"font-semibold text-white"},"Judith Black"),react.createElement("div",{className:"mt-1 text-gray-400"},"CEO of Tuple"))))),react.createElement("div",{className:"flex flex-col border-white/10 pt-10 sm:pt-16 lg:pt-0 lg:pl-8 xl:pl-20 border-t lg:border-t-0 lg:border-l"},react.createElement("img",{alt:"",src:"https://tailwindui.com/plus/img/logos/reform-logo-white.svg",className:"h-12 self-start"}),react.createElement("figure",{className:"flex flex-col flex-auto justify-between mt-10"},react.createElement("blockquote",{className:"text-lg/8 text-white"},react.createElement("p",null,"“Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis dolore nulla veniam reprehenderit nisi officia voluptate incididunt exercitation exercitation elit. Nostrud veniam sint dolor nisi ullamco.”")),react.createElement("figcaption",{className:"flex items-center gap-x-6 mt-10"},react.createElement("img",{alt:"",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",className:"bg-gray-800 rounded-full w-14 h-14"}),react.createElement("div",{className:"text-base"},react.createElement("div",{className:"font-semibold text-white"},"Joseph Rodriguez"),react.createElement("div",{className:"mt-1 text-gray-400"},"CEO of Reform"))))))),react.createElement("div",{className:"mx-auto mt-24 sm:mt-56 px-6 lg:px-8 max-w-7xl"},react.createElement("h2",{className:"font-semibold text-4xl text-white sm:text-5xl tracking-tight"},"Frequently asked questions"),react.createElement("p",{className:"mt-6 max-w-2xl text-base/7 text-gray-300"},"Have a different question and can’t find the answer you’re looking for? Reach out to our support team by"," ",react.createElement("a",{href:"#",className:"font-semibold text-indigo-400 hover:text-indigo-300"},"sending us an email")," ","and we’ll get back to you as soon as we can."),react.createElement("div",{className:"mt-20"},react.createElement("dl",{className:"sm:gap-x-6 sm:gap-y-16 lg:gap-x-10 space-y-16 sm:space-y-0 sm:grid sm:grid-cols-2"},faqs.map((faq=>react.createElement("div",{key:faq.id},react.createElement("dt",{className:"font-semibold text-base/7 text-white"},faq.question),react.createElement("dd",{className:"mt-2 text-base/7 text-gray-300"},faq.answer)))))))),react.createElement("footer",{className:"mx-auto mt-24 sm:mt-56 px-6 lg:px-8 max-w-7xl"},react.createElement("div",{className:"border-white/10 pt-20 sm:pt-24 pb-8 border-t"},react.createElement("div",{className:"xl:gap-8 xl:grid xl:grid-cols-3"},react.createElement("div",{className:"gap-8 grid grid-cols-2 xl:col-span-2"},react.createElement("div",{className:"md:gap-8 md:grid md:grid-cols-2"},react.createElement("div",null,react.createElement("h3",{className:"font-semibold text-sm/6 text-white"},"Solutions"),react.createElement("ul",{role:"list",className:"space-y-4 mt-6"},footerNavigation.solutions.map((item=>react.createElement("li",{key:item.name},react.createElement("a",{href:item.href,className:"text-gray-400 text-sm/6 hover:text-white"},item.name)))))),react.createElement("div",{className:"mt-10 md:mt-0"},react.createElement("h3",{className:"font-semibold text-sm/6 text-white"},"Support"),react.createElement("ul",{role:"list",className:"space-y-4 mt-6"},footerNavigation.support.map((item=>react.createElement("li",{key:item.name},react.createElement("a",{href:item.href,className:"text-gray-400 text-sm/6 hover:text-white"},item.name))))))),react.createElement("div",{className:"md:gap-8 md:grid md:grid-cols-2"},react.createElement("div",null,react.createElement("h3",{className:"font-semibold text-sm/6 text-white"},"Company"),react.createElement("ul",{role:"list",className:"space-y-4 mt-6"},footerNavigation.company.map((item=>react.createElement("li",{key:item.name},react.createElement("a",{href:item.href,className:"text-gray-400 text-sm/6 hover:text-white"},item.name)))))),react.createElement("div",{className:"mt-10 md:mt-0"},react.createElement("h3",{className:"font-semibold text-sm/6 text-white"},"Legal"),react.createElement("ul",{role:"list",className:"space-y-4 mt-6"},footerNavigation.legal.map((item=>react.createElement("li",{key:item.name},react.createElement("a",{href:item.href,className:"text-gray-400 text-sm/6 hover:text-white"},item.name)))))))),react.createElement("div",{className:"mt-10 xl:mt-0"},react.createElement("h3",{className:"font-semibold text-sm/6 text-white"},"Subscribe to our newsletter"),react.createElement("p",{className:"mt-2 text-gray-300 text-sm/6"},"The latest news, articles, and resources, sent to your inbox weekly."),react.createElement("form",{className:"sm:flex mt-6 sm:max-w-md"},react.createElement("label",{htmlFor:"email-address",className:"sr-only"},"Email address"),react.createElement("input",{id:"email-address",name:"email-address",type:"email",required:!0,placeholder:"Enter your email",autoComplete:"email",className:"border-0 bg-white/5 shadow-sm px-3 py-1.5 rounded-md ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500 ring-inset focus:ring-inset w-full sm:w-64 xl:w-full min-w-0 text-base text-white placeholder:text-gray-500 sm:text-sm/6 appearance-none"}),react.createElement("div",{className:"mt-4 sm:mt-0 sm:ml-4 sm:shrink-0"},react.createElement("button",{type:"submit",className:"flex justify-center items-center bg-indigo-500 hover:bg-indigo-400 shadow-sm px-3 py-2 rounded-md w-full font-semibold text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"},"Subscribe"))))),react.createElement("div",{className:"md:flex md:justify-between md:items-center border-white/10 mt-16 sm:mt-20 lg:mt-24 pt-8 border-t"},react.createElement("div",{className:"flex gap-x-6 md:order-2"},footerNavigation.social.map((item=>react.createElement("a",{key:item.name,href:item.href,className:"text-gray-400 hover:text-gray-300"},react.createElement("span",{className:"sr-only"},item.name),react.createElement(item.icon,{"aria-hidden":"true",className:"w-6 h-6"}))))),react.createElement("p",{className:"md:order-1 mt-8 md:mt-0 text-gray-400 text-sm/6"},"© 2024 Your Company, Inc. All rights reserved.")))))}Pricing.__docgenInfo={description:"",methods:[],displayName:"Pricing"};const Pricing_stories={title:"Example/Pricing",component:Pricing,args:{}},Story=(args=>react.createElement(Pricing,args)).bind({});Story.args={};const __namedExportsOrder=["Story"];Story.parameters={...Story.parameters,docs:{...Story.parameters?.docs,source:{originalSource:"args => <Pricing {...args} />",...Story.parameters?.docs?.source}}}}}]);