import{j as m,r as s,F as v,a as x,R as y,b as f,l as F,f as w,c as b,d as N,B as j}from"./vendor.2a6bb775.js";const D=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&c(t)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}};D();var u=[{fileName:"isFunction",jsDoc:{category:{tag:"@category",value:"Type Of",raw:"@category Type Of"},description:{tag:"@description",value:"Will determine if `value` is classified as a `Function` object. *",raw:"@description Will determine if `value` is classified as a `Function` object. *"},example:[{tag:"@example",value:`console.log ( isFunction(/asdf/) ) // false\r
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
console.log ( isFunction(Math.random) ) // true`}],name:{tag:"@name",value:"isFunction",raw:"@name isFunction"},param:[{tag:"@param",type:"*",name:"value",description:"The value to check.",optional:!1,raw:"@param {*} value The value to check."}],returns:{tag:"@returns",type:"boolean",description:"Returns `true` if `value` is a function, else `false`.",raw:"@returns {boolean} Returns `true` if `value` is a function, else `false`."}}}];const e=m.exports.jsx,l=m.exports.jsxs,p=s.exports.createContext(null),{Provider:R}=p;console.log(u);function S({children:a}){const o=s.exports.useRef(new v(u,{includeScore:!0,includeMatches:!0,keys:["fileName","jsDoc.description.value","jsDoc.category.value"]})),i=s.exports.useCallback((n="")=>o.current.search(n),[]),c=s.exports.useMemo(()=>[...new Set(u.map(n=>n.jsDoc.category.value))],[]);return e(R,{value:{data:u,categories:c,searchData:i},children:a})}function M(){return s.exports.useContext(p)}function C({children:a}){return e("div",{className:"banner d-flex flex-grow-1 flex-row p-3",children:e("div",{className:"d-flex flex-column flex-grow-1 justify-content-center align-items-center",children:a})})}function g({style:a={}}){const{searchData:o}=M(),[i,c]=s.exports.useState([]);return l("form",{className:"search-form",target:"none",onSubmit:t=>{t.preventDefault();const d=t==null?void 0:t.target[0].value;console.log(d,t)},style:a,children:[e("input",{className:"search",placeholder:"Search the docs...",onChange:t=>{var h;t.preventDefault();const d=(h=t==null?void 0:t.target)==null?void 0:h.value;c(o(d))}}),e("div",{className:"search-icon",children:e(x,{icon:"search"})})]})}function k(){return e(C,{children:e(g,{})})}function L(){return e("div",{className:"homebanner d-flex flex-shrink-0 flex-row p-3",children:e("h1",{children:"Woah! What happened?"})})}function O(){return e(s.exports.Suspense,{fallback:"Loading...",children:l(y,{children:[e(f,{path:"/",element:e(k,{})}),e(f,{path:"/error",element:e(L,{})}),e(f,{path:"/docs/:id",element:e("h1",{children:"Docs"}),children:e("h1",{children:"Hello"})})]})})}F.add(w);const W=new URL("/fnrepeats/assets/600x600.c5cd1498.png",self.location).href,B=()=>e(S,{children:l("div",{className:"vh-100 d-flex flex-column overflow-hidden",children:[l("div",{className:"d-flex flex-shrink-0 flex-row p-3 align-items-center justify-content-between",children:[l("div",{className:"d-flex",children:[e("img",{src:W,className:"me-3",style:{height:40,width:40}}),e("h2",{className:"pt-1",children:"Fn Repeats"})]}),e("div",{className:"d-flex",children:location.pathname==="/fnrepeats/"&&e(g,{style:{minWidth:200,maxWidth:200}})})]}),e("div",{className:"d-flex flex-row",children:e(O,{})})]})});b.render(e(N.StrictMode,{children:e(j,{basename:"/fnrepeats",children:e(B,{})})}),document.getElementById("app"));
