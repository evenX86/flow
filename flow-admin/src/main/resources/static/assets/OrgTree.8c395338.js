var f=(r,c,t)=>new Promise((o,n)=>{var l=e=>{try{a(t.next(e))}catch(s){n(s)}},i=e=>{try{a(t.throw(e))}catch(s){n(s)}},a=e=>e.done?o(e.value):Promise.resolve(e.value).then(l,i);a((t=t.apply(r,c)).next())});import{az as u,a as _,b4 as h,w as d,O as v,aB as g,bS as T,y as B,o as D,i as b,p as S,an as k,j as p,fD as w}from"./index.da587afe.js";import{_ as y}from"./index.df7d8c48.js";import{a as $}from"./dept.d887b272.js";import"./fromPairs.daf93cb7.js";import"./index.a85fa86f.js";import"./eagerComputed.3bbb876f.js";import"./useContextMenu.0239c62a.js";import"./index.a64c8a60.js";import"./get.40c34cfc.js";const C=_({name:"OrgTree",components:{BasicTree:y,Spin:h},emits:["select"],setup(r,{emit:c}){const t=d([]),o=d(!1),n=d(null);function l(){return f(this,null,function*(){o.value=!0,$().then(a=>{t.value=a,k(()=>{var e;p(t).length<10&&((e=p(n))==null||e.filterByLevel(1))})}).finally(()=>{o.value=!1})})}function i(a,e){const s=w(t.value,m=>m.id===a[0],{id:"id",pid:"pid",children:"children"});c("select",s)}return v(()=>{l()}),{treeData:t,treeLoading:o,basicTreeRef:n,handleSelect:i}}}),E={class:"org-tree bg-white m-4 mr-0 overflow-hidden"};function O(r,c,t,o,n,l){const i=g("BasicTree"),a=T("loading");return B((D(),b("div",E,[S(i,{title:"\u7EC4\u7EC7",toolbar:"",search:"",clickRowToExpand:!1,treeData:r.treeData,replaceFields:{key:"id",title:"shortName"},onSelect:r.handleSelect,ref:"basicTreeRef"},null,8,["treeData","onSelect"])])),[[a,r.treeLoading]])}var A=u(C,[["render",O]]);export{A as default};