import{B as e,a as i}from"./index.5f372b37.js";import{_ as s}from"./BasicForm.ae4250e1.js";import{u as o}from"./useForm.213a5276.js";import{z as r,Z as t,D as a,F as n,a3 as d,w as m,a0 as p}from"./vendor.11d66826.js";import"./index.514e05b1.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.6b57f630.js";/* empty css              *//* empty css              *//* empty css              */import"./index.5b995397.js";import"./useWindowSizeFn.9fecf134.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.0adfd0af.js";import"./base64Conver.bb012c73.js";import"./index.ceaa815e.js";const f=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var c=r({components:{BasicDrawer:e,BasicForm:s},setup(){const[e,{setFieldsValue:s}]=o({labelWidth:120,schemas:f,showActionButtonGroup:!1,actionColOptions:{span:24}}),[r]=i((e=>{s({field2:e.data,field1:e.info})}));return{register:r,schemas:f,registerForm:e}}});c.render=function(e,i,s,o,r,f){const c=t("BasicForm"),l=t("BasicDrawer");return a(),n(l,p(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:d((()=>[m("div",null,[m(c,{onRegister:e.registerForm},null,8,["onRegister"])])])),_:1},16,["onRegister"])};export default c;