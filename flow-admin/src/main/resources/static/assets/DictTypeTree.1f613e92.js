import{_ as e}from"./Tree.vue_vue&type=style&index=0&lang.4dde5251.js";import{g as t}from"./dicType.e69de413.js";import{z as r,r as a,X as n,Z as s,D as o,F as i,w as c}from"./vendor.11d66826.js";import"./index.514e05b1.js";import"./useContextMenu.cc93e9bb.js";/* empty css              */var l=r({name:"DictTypeTree",components:{BasicTree:e},emits:["select"],setup(e,{emit:r}){const s=a([]);function o(){return e=this,r=null,a=function*(){s.value=yield t()},new Promise(((t,n)=>{var s=e=>{try{i(a.next(e))}catch(t){n(t)}},o=e=>{try{i(a.throw(e))}catch(t){n(t)}},i=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,o);i((a=a.apply(e,r)).next())}));var e,r,a}return n((()=>{o()})),{treeData:s,handleSelect:function(e,t){r("select",e[0])}}}});const d={class:"bg-white m-4 mr-0 overflow-hidden"};l.render=function(e,t,r,a,n,l){const m=s("BasicTree");return o(),i("div",d,[c(m,{title:"数据分类",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"name"},onSelect:e.handleSelect},null,8,["treeData","onSelect"])])};export default l;