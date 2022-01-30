import{u as L,a as D,r as _,d as y,o as s,c as u,b as p,e as i,t as $,w as x,f as w,F as b,g as S,h as k,i as E,V as M}from"./vendor.66305c2a.js";const B=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}};B();const A=L(),F=D(A);let C;function K(c,l){C=_(Array(c).fill("").map(()=>Array(l).fill("")))}function I(){return C}function N(c,l){const n=C.value[c-1][l-1];if(!n.startsWith("=")){const e=Number(n);return n===""||Number.isNaN(e)?n:e}const o=n.substring(1).replace(/([a-zA-Z]+)([0-9]+)/g,'useCellValue($2, "$1".toLowerCase().charCodeAt(0) - 96)');try{return new Function("useCellValue",`return ${o}`)(N)}catch(e){return`Error: ${e.message}`}}const O={"text-xl":"","mt-6":"","inline-flex":"","gap-2":""},H={key:0,"i-carbon-moon":""},P={key:1,"i-carbon-sun":""},R=p("a",{class:"icon-btn","i-carbon-logo-github":"",rel:"noreferrer",href:"https://github.com/ms-fadaei/wordlemple",target:"_blank",title:"GitHub"},null,-1),T=y({setup(c){return(l,n)=>(s(),u("nav",O,[p("button",{class:"icon-btn !outline-none",onClick:n[0]||(n[0]=o=>i(F)())},[i(A)?(s(),u("div",H)):(s(),u("div",P))]),R]))}}),j=["value"],G=y({props:{row:null,col:null,isActive:{type:Boolean}},emits:["select","move"],setup(c,{emit:l}){const n=c,{row:o,col:e,isActive:r}=$(n),a=_(!1),v=I();function h({el:t}){t.focus()}x(a,t=>{t&&l("select",{row:o.value,col:e.value})}),x(r,t=>{t&&(a.value=!0)});const f={Tab:{rowShift:0,colShift:1},Enter:{rowShift:1,colShift:0},ArrowUp:{rowShift:-1,colShift:0},ArrowDown:{rowShift:1,colShift:0},ArrowLeft:{rowShift:0,colShift:-1},ArrowRight:{rowShift:0,colShift:1}};function g(t){f[t.key]&&(t.preventDefault(),a.value=!1,t.shiftKey&&!t.key.includes("Arrow")&&(f[t.key].rowShift*=-1,f[t.key].colShift*=-1),l("move",f[t.key]))}function d(t){const{value:m}=t.target;v.value[o.value-1][e.value-1]=m.trim()}return(t,m)=>a.value?(s(),u("input",{key:0,value:i(v)[i(o)-1][i(e)-1],class:"cell-input",onVnodeMounted:h,onChange:d,onBlur:m[0]||(m[0]=V=>a.value=!1),onKeydown:g},null,40,j)):(s(),u("span",{key:1,class:"flex items-center p-1 w-24 h-10 cursor-text",onClick:m[1]||(m[1]=V=>a.value=!0)},w(i(N)(i(o),i(e))),1))}}),q={"un-border":"collapse 1"},z=p("th",null,null,-1),U={"un-border":"1",class:"w-24 h-10"},W=y({props:{rows:null,cols:null},setup(c){const l=c,{rows:n,cols:o}=$(l),e=_(-1),r=_(-1);K(n.value,o.value);function a({row:h,col:f}){e.value=h-1,r.value=f-1}function v({rowShift:h,colShift:f}){e.value=(e.value+h+n.value)%n.value,r.value=(r.value+f+o.value)%o.value}return(h,f)=>{const g=G;return s(),u("div",null,[p("table",q,[p("thead",null,[p("tr",null,[z,(s(!0),u(b,null,S(i(o),d=>(s(),u("th",{key:d,"un-border":"1",class:"w-24 h-10"},w(String.fromCharCode(64+d)),1))),128))])]),p("tbody",null,[(s(!0),u(b,null,S(i(n),d=>(s(),u("tr",{key:d},[p("th",U,w(d),1),(s(!0),u(b,null,S(i(o),t=>(s(),u("td",{key:t,"un-border":"1"},[k(g,{row:d,col:t,"is-active":d===e.value+1&&t===r.value+1,onSelect:a,onMove:v},null,8,["row","col","is-active"])]))),128))]))),128))])])])}}}),Z={"font-sans":"",class:"flex flex-col h-screen justify-center items-center","un-bg":"gray-50 dark:gray-900","un-text":"gray-700 dark:gray-200"},J=p("h1",{class:"mb-3 text-cool-gray-600 dark:text-cool-gray-400 text-xl"},"SIMPLEDSHEET",-1),Q=y({setup(c){return E({title:"Simpledsheet",meta:[{name:"description",content:"A simple implementation of the standard spreadsheet."}]}),(l,n)=>{const o=W,e=T;return s(),u("main",Z,[J,k(o,{rows:5,cols:5,class:"p-4 rounded-2","un-bg":"gray-100 dark:gray-800"}),k(e)])}}});M(Q);