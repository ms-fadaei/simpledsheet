import{u as $,a as S,r as _,w as C,c as L,d as h,o as s,b as r,e as c,f,t as w,g as v,h as D,v as E,F as y,i as g,j as b,k as F,V as M}from"./vendor.1f471f89.js";const N=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};N();const x=$(),V=S(x);let k;function A(u,n){k=_(Array(u).fill([...Array(n).fill("")]))}function B(u,n,o){return k.value[u-1][n-1]=o.value,C(o,e=>k.value[u-1][n-1]=e),{value:L(()=>{const e=o.value;return e.startsWith("=")?new Function("return "+e.slice(1))():e})}}const O={"text-xl":"","mt-6":"","inline-flex":"","gap-2":""},j={key:0,"i-carbon-moon":""},H={key:1,"i-carbon-sun":""},I=c("a",{class:"icon-btn","i-carbon-logo-github":"",rel:"noreferrer",href:"https://github.com/ms-fadaei/wordlemple",target:"_blank",title:"GitHub"},null,-1),P=h({setup(u){return(n,o)=>(s(),r("nav",O,[c("button",{class:"icon-btn !outline-none",onClick:o[0]||(o[0]=l=>f(V)())},[f(x)?(s(),r("div",j)):(s(),r("div",H))]),I]))}}),T=h({props:{row:null,col:null},setup(u){const n=u,{row:o,col:l}=w(n),e=_("show"),t=_(""),{value:d}=B(o.value,l.value,t);function a({el:p}){p.focus()}return(p,i)=>e.value==="show"?(s(),r("span",{key:0,class:"flex items-center p-1 w-24 h-10",onClick:i[0]||(i[0]=m=>e.value="edit")},v(f(d)),1)):D((s(),r("input",{key:1,"onUpdate:modelValue":i[1]||(i[1]=m=>t.value=m),class:"flex items-center p-1 w-24 h-10",onVnodeMounted:a,onBlur:i[2]||(i[2]=m=>e.value="show"),onKeydown:i[3]||(i[3]=m=>m.keyCode===13&&(e.value="show"))},null,544)),[[E,t.value]])}}),G={"un-border":"collapse 1"},K=c("th",null,null,-1),q={"un-border":"1",class:"w-24 h-10"},R=h({props:{rows:null,cols:null},setup(u){const n=u,{rows:o,cols:l}=w(n);return A(o.value,l.value),(e,t)=>{const d=T;return s(),r("table",G,[c("thead",null,[c("tr",null,[K,(s(!0),r(y,null,g(f(l),a=>(s(),r("th",{key:a,"un-border":"1",class:"w-24 h-10"},v(String.fromCharCode(64+a)),1))),128))])]),c("tbody",null,[(s(!0),r(y,null,g(f(o),a=>(s(),r("tr",{key:a},[c("th",q,v(a),1),(s(!0),r(y,null,g(f(l),p=>(s(),r("td",{key:p,"un-border":"1"},[b(d,{row:a,col:p},null,8,["row","col"])]))),128))]))),128))])])}}}),U={"font-sans":"",class:"flex flex-col h-screen justify-center items-center","un-bg":"gray-50 dark:gray-900","un-text":"gray-700 dark:gray-200"},W=c("h1",{class:"mb-3 text-cool-gray-600 dark:text-cool-gray-400 text-xl"},"SIMPLEDSHEET",-1),z=h({setup(u){return F({title:"Simpledsheet",meta:[{name:"description",content:"A simple implementation of the standard spreadsheet."}]}),(n,o)=>{const l=R,e=P;return s(),r("main",U,[W,b(l,{rows:5,cols:5}),b(e)])}}});M(z);
