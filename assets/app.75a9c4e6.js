import{u as w,a as S,r as k,d as m,o as s,c as l,b as i,e as a,t as C,f as g,F as h,g as y,h as v,i as V,V as L}from"./vendor.12135067.js";const E=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}};E();const $=w(),A=S($);let b;function D(u,r){b=k(Array(u).fill("").map(()=>Array(r).fill("")))}function F(){return b}function x(u,r){const t=b.value[u-1][r-1];if(!t.startsWith("="))return t;const n=t.substring(1).replace(/([a-zA-Z]+)([0-9]+)/g,'useCellValue($2, "$1".toLowerCase().charCodeAt(0) - 96)');try{return new Function("useCellValue",`return ${n}`)(x)}catch(e){return`Error: ${e.message}`}}const M={"text-xl":"","mt-6":"","inline-flex":"","gap-2":""},N={key:0,"i-carbon-moon":""},B={key:1,"i-carbon-sun":""},O=i("a",{class:"icon-btn","i-carbon-logo-github":"",rel:"noreferrer",href:"https://github.com/ms-fadaei/wordlemple",target:"_blank",title:"GitHub"},null,-1),H=m({setup(u){return(r,t)=>(s(),l("nav",M,[i("button",{class:"icon-btn !outline-none",onClick:t[0]||(t[0]=n=>a(A)())},[a($)?(s(),l("div",N)):(s(),l("div",B))]),O]))}}),I=["value"],P=m({props:{row:null,col:null},setup(u){const r=u,{row:t,col:n}=C(r),e=k(!1),o=F();function f({el:p}){p.focus()}function c(p){const{value:d}=p.target;o.value[t.value-1][n.value-1]=d.toString().trim()}return(p,d)=>e.value?(s(),l("input",{key:0,value:a(o)[a(t)-1][a(n)-1],class:"cell-input",onVnodeMounted:f,onChange:c,onBlur:d[0]||(d[0]=_=>e.value=!1),onKeydown:d[1]||(d[1]=_=>_.keyCode===13&&(e.value=!1))},null,40,I)):(s(),l("span",{key:1,class:"flex items-center p-1 w-24 h-10 cursor-text",onClick:d[2]||(d[2]=_=>e.value=!0)},g(a(x)(a(t),a(n))),1))}}),j={"un-border":"collapse 1"},G=i("th",null,null,-1),K={"un-border":"1",class:"w-24 h-10"},T=m({props:{rows:null,cols:null},setup(u){const r=u,{rows:t,cols:n}=C(r);return D(t.value,n.value),(e,o)=>{const f=P;return s(),l("div",null,[i("table",j,[i("thead",null,[i("tr",null,[G,(s(!0),l(h,null,y(a(n),c=>(s(),l("th",{key:c,"un-border":"1",class:"w-24 h-10"},g(String.fromCharCode(64+c)),1))),128))])]),i("tbody",null,[(s(!0),l(h,null,y(a(t),c=>(s(),l("tr",{key:c},[i("th",K,g(c),1),(s(!0),l(h,null,y(a(n),p=>(s(),l("td",{key:p,"un-border":"1"},[v(f,{row:c,col:p},null,8,["row","col"])]))),128))]))),128))])])])}}}),q={"font-sans":"",class:"flex flex-col h-screen justify-center items-center","un-bg":"gray-50 dark:gray-900","un-text":"gray-700 dark:gray-200"},z=i("h1",{class:"mb-3 text-cool-gray-600 dark:text-cool-gray-400 text-xl"},"SIMPLEDSHEET",-1),R=m({setup(u){return V({title:"Simpledsheet",meta:[{name:"description",content:"A simple implementation of the standard spreadsheet."}]}),(r,t)=>{const n=T,e=H;return s(),l("main",q,[z,v(n,{rows:5,cols:5,class:"p-4 rounded-2","un-bg":"gray-100 dark:gray-800"}),v(e)])}}});L(R);
