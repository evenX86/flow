import g from"./index.8d78405e.js";import{u as h}from"./useFrameKeepAlive.663e26f5.js";import{az as B,a as F,bg as l,k as c,x as i,bP as _,o as b,h as x,aB as P,i as v,j as I,q as A}from"./index.ef013507.js";import{a as E}from"./modelInfo.d01b2d1f.js";import"./useWindowSizeFn.37be93ea.js";import"./useContentViewHeight.d02bb685.js";import"./uniqBy.4bac5850.js";import"./_baseIteratee.39b06e56.js";import"./get.fbc063d7.js";const M=F({name:"BpmnDesigner",components:{FramePage:g},setup(){const{currentRoute:r}=l(),{query:{modelId:o}}=c(r),a=i(""),n=i({}),m=_(),s=l(),e=m.getTabList.find(t=>t.fullPath===s.currentRoute.value.fullPath);b(()=>{e.meta.title.indexOf("\u8BBE\u8BA1\u6D41\u7A0B-")!==0&&E(o).then(t=>{e.meta.title&&e.meta.title.indexOf("-"+t.name)===-1&&(e.meta.title=e.meta.title+"-"+t.name)}).catch(()=>{console.error("\u901A\u8FC7ModelId\u67E5\u8BE2modelInfo\u5931\u8D25\uFF01")})}),a.value="/flow-bpmn/index.html/#/bpmn/designer?modelId="+o;const{getFramePages:u,hasRenderFrame:p,showIframe:d}=h(),f=x(()=>c(u).length>0);return{getFramePages:u,hasRenderFrame:p,showIframe:d,showFrame:f,url:a,frame:n}}});function R(r,o,a,n,m,s){const e=P("FramePage");return v(),I("div",null,[A(e,{frameSrc:r.url},null,8,["frameSrc"])])}var O=B(M,[["render",R]]);export{O as default};