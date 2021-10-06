import{j as l,R as a,a as c}from"./vendor.505821bd.js";const u=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const t of n.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&s(t)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}};u();var d=[{fileName:"isFunction",jsDoc:{category:{tag:"@category",value:"Type Of",raw:"@category Type Of"},description:{tag:"@description",value:"Will determine if `value` is classified as a `Function` object. *",raw:"@description Will determine if `value` is classified as a `Function` object. *"},example:[{tag:"@example",value:`console.log ( isFunction(/asdf/) ) // false\r
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
console.log ( isFunction(Math.random) ) // true`}],name:{tag:"@name",value:"isFunction",raw:"@name isFunction"},param:[{tag:"@param",type:"*",name:"value",description:"The value to check.",optional:!1,raw:"@param {*} value The value to check."}],returns:{tag:"@returns",type:"boolean",description:"Returns `true` if `value` is a function, else `false`.",raw:"@returns {boolean} Returns `true` if `value` is a function, else `false`."}}}];const o=l.exports.jsx;console.log(d);const f=()=>o("div",{children:o("p",{children:"Hello!"})});a.render(o(c.StrictMode,{children:o(f,{})}),document.getElementById("app"));
