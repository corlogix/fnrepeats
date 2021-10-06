import{j as i,R as c,a}from"./vendor.505821bd.js";const u=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=l(e);fetch(e.href,n)}};u();var f=[{fileName:"isFunction",jsDoc:{category:{tag:"@category",value:"Type Of",raw:"@category Type Of"},description:{tag:"@description",value:"Will determine if `value` is classified as a `Function` object. *",raw:"@description Will determine if `value` is classified as a `Function` object. *"},example:[{tag:"@example",value:`console.log ( isFunction(/asdf/) ) // false\r
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
console.log ( isFunction(Math.random) ) // true`}],name:{tag:"@name",value:"isFunction",raw:"@name isFunction"},param:[{tag:"@param",type:"*",name:"value",description:"The value to check.",optional:!1,raw:"@param {*} value The value to check."}],returns:{tag:"@returns",type:"boolean",description:"Returns `true` if `value` is a function, else `false`.",raw:"@returns {boolean} Returns `true` if `value` is a function, else `false`."}}}];const o=i.exports.jsx,d=i.exports.jsxs;console.log(f);const p=new URL("/fnrepeats/assets/600x600.c5cd1498.png",self.location).href,g=()=>d("div",{children:[o("img",{src:p}),o("p",{children:"Hello!"})]});c.render(o(a.StrictMode,{children:o(g,{})}),document.getElementById("app"));
