var A=Object.defineProperty,C=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var E=(t,r,e)=>r in t?A(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,h=(t,r)=>{for(var e in r||(r={}))P.call(r,e)&&E(t,e,r[e]);if(B)for(var e of B(r))R.call(r,e)&&E(t,e,r[e]);return t},M=(t,r)=>C(t,D(r));var f=(t,r,e)=>new Promise((p,a)=>{var l=i=>{try{s(e.next(i))}catch(u){a(u)}},m=i=>{try{s(e.throw(i))}catch(u){a(u)}},s=i=>i.done?p(i.value):Promise.resolve(i.value).then(l,m);s((e=e.apply(t,r)).next())});import{B as k,a as N}from"./index.56ac9033.js";import{B as S}from"./BasicForm.bc1bc2ec.js";import{u as V}from"./useForm.35a2e1b5.js";import{f as $}from"./app.data.93e82160.js";import{c as b,s as j}from"./app.a194c828.js";import{F as L}from"./constantEnum.bf6653fb.js";import{az as O,a as U,w as x,j as F,h as T,aB as _,o as q,k as z,B as G,p as I,aC as W}from"./index.bbfb8c5d.js";import"./useWindowSizeFn.daa22200.js";import"./FullscreenOutlined.7b1f5985.js";/* empty css              *//* empty css               */import"./index.eb776706.js";import"./index.08f5b20b.js";import"./Checkbox.6b0f0619.js";import"./index.932444ce.js";import"./index.bd278e5f.js";import"./index.e860cc21.js";import"./index.ba9876ed.js";import"./index.53f3ac38.js";import"./get.476f8b78.js";import"./index.424465cb.js";import"./eagerComputed.2918d49d.js";import"./index.d0de3318.js";import"./_baseIteratee.6836a2b9.js";import"./DeleteOutlined.426a7a56.js";import"./index.21d11494.js";import"./useRefs.c946e576.js";import"./Form.64d057a8.js";import"./Col.bf638c61.js";import"./useFlexGapSupport.ae09cf13.js";import"./useSize.2da926c0.js";import"./transButton.15723253.js";import"./index.dbc537d6.js";import"./index.1311bc71.js";import"./index.59bf1cba.js";import"./uuid.2b29000c.js";import"./download.4c3fda74.js";import"./base64Conver.08b9f4ec.js";import"./index.5d0a6eed.js";import"./index.5796c3bd.js";import"./uniqBy.16bfb902.js";const H=U({name:"AppModal",components:{BasicModal:k,BasicForm:S},emits:["success","register"],setup(t,{emit:r}){const e=x(!0),[p,{resetFields:a,updateSchema:l,setFieldsValue:m,validate:s}]=V({labelWidth:100,schemas:$,showActionButtonGroup:!1}),i=o=>[{trigger:"blur",validator:(n,g)=>g?b({id:o.id,field:o.field,fieldValue:g,fieldName:o.fieldName}).then(d=>d?Promise.resolve():Promise.reject(o.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(d=>Promise.reject(d)):Promise.resolve()}],[u,{setModalProps:c,closeModal:w}]=N(o=>f(this,null,function*(){yield a(),c({confirmLoading:!1}),e.value=!!(o!=null&&o.isUpdate);let n=o.record;yield l([{field:"sn",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp(L.SN),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{max:40,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E40\uFF01"},...i({id:F(e)&&n&&n.id||"",field:"sn",fieldValue:"",fieldName:"\u6807\u8BC6"})]}]),F(e)&&m(M(h({},n),{status:n.status===1}))})),v=T(()=>F(e)?"\u4FEE\u6539":"\u65B0\u589E");function y(){return f(this,null,function*(){try{c({confirmLoading:!0});const o=yield s();o.status=o.status?1:0,yield j(o),w(),r("success")}finally{c({confirmLoading:!1})}})}return{registerModal:u,registerForm:p,getTitle:v,handleSubmit:y}}});function J(t,r,e,p,a,l){const m=_("BasicForm"),s=_("BasicModal");return q(),z(s,W(t.$attrs,{onRegister:t.registerModal,title:t.getTitle,onOk:t.handleSubmit}),{default:G(()=>[I(m,{onRegister:t.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var Le=O(H,[["render",J]]);export{Le as default};