"use strict";(self.webpackChunkneutrino_ui_kit=self.webpackChunkneutrino_ui_kit||[]).push([[155],{"./node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function Bars3Icon({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(Bars3Icon)},"./stories/pages/NotFound.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Story:()=>Story,__namedExportsOrder:()=>__namedExportsOrder,default:()=>NotFound_stories});var react=__webpack_require__("./node_modules/react/index.js"),dialog=__webpack_require__("./node_modules/@headlessui/react/dist/components/dialog/dialog.js"),Bars3Icon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js"),XMarkIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js");const navigation=[{name:"Product",href:"#"},{name:"Features",href:"#"},{name:"Marketplace",href:"#"},{name:"Company",href:"#"}],footer={solutions:[{name:"Marketing",href:"#"},{name:"Analytics",href:"#"},{name:"Commerce",href:"#"},{name:"Insights",href:"#"}],support:[{name:"Pricing",href:"#"},{name:"Documentation",href:"#"},{name:"Guides",href:"#"},{name:"API Status",href:"#"}],company:[{name:"About",href:"#"},{name:"Blog",href:"#"},{name:"Jobs",href:"#"},{name:"Press",href:"#"},{name:"Partners",href:"#"}],legal:[{name:"Claim",href:"#"},{name:"Privacy",href:"#"},{name:"Terms",href:"#"}]};function NotFound(){const[mobileMenuOpen,setMobileMenuOpen]=(0,react.useState)(!1);return react.createElement(react.Fragment,null,react.createElement("div",{className:"flex flex-col min-h-full"},react.createElement("header",{className:"mx-auto px-6 lg:px-8 pt-6 w-full max-w-7xl"},react.createElement("nav",{"aria-label":"Global",className:"flex justify-between items-center"},react.createElement("div",{className:"flex lg:flex-1"},react.createElement("a",{href:"#",className:"-m-1.5 p-1.5"},react.createElement("span",{className:"sr-only"},"Your Company"),react.createElement("img",{alt:"",src:"https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600",className:"h-8"}))),react.createElement("div",{className:"flex lg:hidden"},react.createElement("button",{type:"button",onClick:()=>setMobileMenuOpen(!0),className:"inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md text-gray-700"},react.createElement("span",{className:"sr-only"},"Open main menu"),react.createElement(Bars3Icon.A,{"aria-hidden":"true",className:"w-6 h-6"}))),react.createElement("div",{className:"lg:flex lg:gap-x-12 hidden"},navigation.map((item=>react.createElement("a",{key:item.name,href:item.href,className:"font-semibold text-gray-900 text-sm/6"},item.name)))),react.createElement("div",{className:"lg:flex lg:flex-1 lg:justify-end hidden"},react.createElement("a",{href:"#",className:"font-semibold text-gray-900 text-sm/6"},"Log in ",react.createElement("span",{"aria-hidden":"true"},"→")))),react.createElement(dialog.lG,{open:mobileMenuOpen,onClose:setMobileMenuOpen},react.createElement(dialog.Lj,{className:"z-10 fixed inset-0 lg:hidden bg-white px-6 py-6 overflow-y-auto"},react.createElement("div",{className:"flex justify-between items-center"},react.createElement("a",{href:"#",className:"-m-1.5 p-1.5"},react.createElement("span",{className:"sr-only"},"Your Company"),react.createElement("img",{alt:"",src:"https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600",className:"h-8"})),react.createElement("button",{type:"button",onClick:()=>setMobileMenuOpen(!1),className:"-m-2.5 p-2.5 rounded-md text-gray-700"},react.createElement("span",{className:"sr-only"},"Close menu"),react.createElement(XMarkIcon.A,{"aria-hidden":"true",className:"w-6 h-6"}))),react.createElement("div",{className:"mt-6 flow-root"},react.createElement("div",{className:"-my-6 divide-y divide-gray-500/10"},react.createElement("div",{className:"space-y-2 py-6"},navigation.map((item=>react.createElement("a",{key:item.name,href:item.href,className:"block hover:bg-gray-400/10 -mx-3 px-3 py-2 rounded-lg font-semibold text-base/7 text-gray-900"},item.name)))),react.createElement("div",{className:"py-6"},react.createElement("a",{href:"#",className:"block hover:bg-gray-400/10 -mx-3 px-3 py-2.5 rounded-lg font-semibold text-base text-gray-900"},"Log in"))))))),react.createElement("main",{className:"flex flex-col flex-auto justify-center mx-auto px-6 lg:px-8 py-24 sm:py-64 w-full max-w-7xl"},react.createElement("p",{className:"font-semibold text-base/8 text-indigo-600"},"404"),react.createElement("h1",{className:"mt-4 font-semibold text-5xl text-gray-900 text-pretty sm:text-6xl tracking-tight"},"Page not found"),react.createElement("p",{className:"mt-6 font-medium text-gray-500 text-lg text-pretty sm:text-xl/8"},"Sorry, we couldn’t find the page you’re looking for."),react.createElement("div",{className:"mt-10"},react.createElement("a",{href:"#",className:"font-semibold text-indigo-600 text-sm/7"},react.createElement("span",{"aria-hidden":"true"},"←")," Back to home"))),react.createElement("footer",{"aria-labelledby":"footer-heading",className:"border-gray-200 border-t"},react.createElement("h2",{id:"footer-heading",className:"sr-only"},"Footer"),react.createElement("div",{className:"mx-auto px-6 lg:px-8 py-16 sm:py-24 lg:py-32 max-w-7xl"},react.createElement("div",{className:"xl:gap-8 xl:grid xl:grid-cols-3"},react.createElement("img",{alt:"Company name",src:"https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600",className:"h-7"}),react.createElement("div",{className:"gap-8 grid grid-cols-2 xl:col-span-2 mt-16 xl:mt-0"},react.createElement("div",{className:"md:gap-8 md:grid md:grid-cols-2"},react.createElement("div",null,react.createElement("h3",{className:"font-semibold text-gray-900 text-sm/6"},"Solutions"),react.createElement("ul",{role:"list",className:"space-y-4 mt-6"},footer.solutions.map((item=>react.createElement("li",{key:item.name},react.createElement("a",{href:item.href,className:"text-gray-600 text-sm/6 hover:text-gray-900"},item.name)))))),react.createElement("div",{className:"mt-10 md:mt-0"},react.createElement("h3",{className:"font-semibold text-gray-900 text-sm/6"},"Support"),react.createElement("ul",{role:"list",className:"space-y-4 mt-6"},footer.support.map((item=>react.createElement("li",{key:item.name},react.createElement("a",{href:item.href,className:"text-gray-600 text-sm/6 hover:text-gray-900"},item.name))))))),react.createElement("div",{className:"md:gap-8 md:grid md:grid-cols-2"},react.createElement("div",null,react.createElement("h3",{className:"font-semibold text-gray-900 text-sm/6"},"Company"),react.createElement("ul",{role:"list",className:"space-y-4 mt-6"},footer.company.map((item=>react.createElement("li",{key:item.name},react.createElement("a",{href:item.href,className:"text-gray-600 text-sm/6 hover:text-gray-900"},item.name)))))),react.createElement("div",{className:"mt-10 md:mt-0"},react.createElement("h3",{className:"font-semibold text-gray-900 text-sm/6"},"Legal"),react.createElement("ul",{role:"list",className:"space-y-4 mt-6"},footer.legal.map((item=>react.createElement("li",{key:item.name},react.createElement("a",{href:item.href,className:"text-gray-600 text-sm/6 hover:text-gray-900"},item.name)))))))))))))}NotFound.__docgenInfo={description:"",methods:[],displayName:"NotFound"};const NotFound_stories={title:"Example/PageNotFound",component:NotFound,args:{}},Story=(args=>react.createElement(NotFound,args)).bind({});Story.args={};const __namedExportsOrder=["Story"];Story.parameters={...Story.parameters,docs:{...Story.parameters?.docs,source:{originalSource:"args => <NotFound {...args} />",...Story.parameters?.docs?.source}}}}}]);