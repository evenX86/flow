import{_ as e}from"./BasicForm.49b9f6b2.js";import{ag as i,h as s}from"./index.0bb7f928.js";import{M as t}from"./index.325684af.js";import{P as o}from"./index.9f071deb.js";import{j as r,a1 as a,K as n,o as d,m,Q as p,n as l}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.b52b2976.js";/* empty css              *//* empty css              *//* empty css              */import"./index.b444bbac.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.e39a543f.js";import"./base64Conver.bb012c73.js";import"./index.19c34870.js";import"./useContentViewHeight.099c9658.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";const f=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:e,field:i})=>a(t,{value:e[i],onChange:s=>{e[i]=s}})}];var c=r({components:{BasicForm:e,CollapseContainer:i,PageWrapper:o},setup(){const{createMessage:e}=s();return{schemas:f,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});c.render=function(e,i,s,t,o,r){const a=n("BasicForm"),f=n("CollapseContainer"),c=n("PageWrapper");return d(),m(c,{title:"MarkDown组件嵌入Form示例"},{default:p((()=>[l(f,{title:"MarkDown表单"},{default:p((()=>[l(a,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default c;