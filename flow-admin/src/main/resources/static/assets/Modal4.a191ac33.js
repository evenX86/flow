import{B as e,a as o}from"./index.f287750a.js";import{_ as i}from"./BasicForm.a98eb535.js";import{u as s}from"./useForm.7ff3fa79.js";import{j as r,r as t,K as d,o as n,m as a,Q as m,n as f,N as p}from"./vendor.686fd1d4.js";import"./index.7fecfddd.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.099c2235.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.c870abce.js";import"./base64Conver.bb012c73.js";import"./index.d2ff26f2.js";const l=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var c=r({components:{BasicModal:e,BasicForm:i},setup(){const e=t({}),[i,{}]=s({labelWidth:120,schemas:l,showActionButtonGroup:!1,actionColOptions:{span:24}}),[r]=o((o=>{e.value={field2:o.data,field1:o.info}}));return{register:r,schemas:l,registerForm:i,model:e}}});c.render=function(e,o,i,s,r,t){const l=d("BasicForm"),c=d("BasicModal");return n(),a(c,p(e.$attrs,{onRegister:e.register,title:"Modal Title"}),{default:m((()=>[f(l,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])),_:1},16,["onRegister"])};export default c;