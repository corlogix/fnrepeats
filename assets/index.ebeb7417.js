import{j as d,r as a,F as m,R as h,a as g,B as x,b as v}from"./vendor.cd49c266.js";const y=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};y();var i=[{fileName:"isFunction",jsDoc:{category:{tag:"@category",value:"Type Of",raw:"@category Type Of"},description:{tag:"@description",value:"Will determine if `value` is classified as a `Function` object. *",raw:"@description Will determine if `value` is classified as a `Function` object. *"},example:[{tag:"@example",value:`console.log ( isFunction(/asdf/) ) // false\r
\r
console.log( isFunction(class MyClass{}) ) // true\r
\r
console.log ( isFunction(function * MyFunc() {}) ) // true\r
\r
console.log ( isFunction(() => {}) ) // true\r
\r
console.log ( isFunction(async () => {}) ) // true\r
\r
console.log ( isFunction(Math.random) ) // true`,raw:`@example\r
\r
console.log ( isFunction(/asdf/) ) // false\r
\r
console.log( isFunction(class MyClass{}) ) // true\r
\r
console.log ( isFunction(function * MyFunc() {}) ) // true\r
\r
console.log ( isFunction(() => {}) ) // true\r
\r
console.log ( isFunction(async () => {}) ) // true\r
\r
console.log ( isFunction(Math.random) ) // true`}],name:{tag:"@name",value:"isFunction",raw:"@name isFunction"},param:[{tag:"@param",type:"*",name:"value",description:"The value to check.",optional:!1,raw:"@param {*} value The value to check."}],returns:{tag:"@returns",type:"boolean",description:"Returns `true` if `value` is a function, else `false`.",raw:"@returns {boolean} Returns `true` if `value` is a function, else `false`."}}}];const n=d.exports.jsx,u=d.exports.jsxs,f=a.exports.createContext(null),{Provider:F}=f;console.log(i);function w({children:s}){const r=a.exports.useRef(new m(i,{includeScore:!0,includeMatches:!0,keys:["fileName","jsDoc.description.value","jsDoc.category.value"]})),c=a.exports.useCallback((e="")=>r.current.search(e),[]),l=a.exports.useMemo(()=>[...new Set(i.map(e=>e.jsDoc.category.value))],[]);return n(F,{value:{data:i,categories:l,searchData:c},children:s})}function p(){return a.exports.useContext(f)}function j(){const{categories:s}=p();return n("div",{className:"d-flex flex-column p-3",style:{overflowY:"scroll",minWidth:300},children:s.map(r=>n("h4",{children:r}))})}function N(){const{searchData:s}=p(),[r,c]=a.exports.useState([]);return n("input",{className:"search",onChange:e=>{var o;const t=(o=e==null?void 0:e.target)==null?void 0:o.value;c(s(t))}})}const b=new URL("/fnrepeats/assets/600x600.c5cd1498.png",self.location).href,M=()=>n(w,{children:u("div",{className:"vh-100 d-flex flex-column overflow-hidden",children:[u("div",{className:"d-flex flex-shrink-0 flex-row p-3 align-items-center",children:[n("img",{src:b,className:"me-3",style:{height:40,width:40}}),n("h2",{className:"pt-1",children:"Fn Repeats"})]}),n("div",{className:"homebanner d-flex flex-shrink-0 flex-row p-3",children:n(N,{})}),u("div",{className:"d-flex flex-shrink-0 flex-row p-3",children:[n(j,{}),n("p",{children:"Hello!"}),n(v,{})]})]})});h.render(n(g.StrictMode,{children:n(x,{basename:"/fnrepeats",children:n(M,{})})}),document.getElementById("app"));
