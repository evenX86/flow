import{_ as e}from"./TableImg.4a8df6f9.js";import"./BasicForm.1c70ff64.js";import"./index.96944955.js";import{c as i,d as t,j as a}from"./data.394956cb.js";import{P as o}from"./index.daa15fb0.js";import{y as s,Z as d,B as r,F as n,a2 as m,v as c,a9 as p}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.24ec6471.js";import"./index.e4d4c34e.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./index.003114f2.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.98760b03.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.6f4ea15e.js";/* empty css              *//* empty css              *//* empty css              */import"./download.3cef252b.js";import"./base64Conver.bb012c73.js";import"./index.78bdb162.js";/* empty css              *//* empty css              */import"./useContentViewHeight.0c12a40d.js";var f=s({components:{BasicTable:e,PageWrapper:o},setup:()=>({defaultHeader:function(){a({data:t,filename:"使用key作为默认头部.xlsx"})},customHeader:function(){a({data:t,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})},columns:i,data:t})});const j=p(" 导出：默认头部 "),u=p(" 导出：自定义头部 ");f.render=function(e,i,t,a,o,s){const p=d("a-button"),f=d("BasicTable"),b=d("PageWrapper");return r(),n(b,{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:m((()=>[c(f,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:m((()=>[c(p,{onClick:e.defaultHeader},{default:m((()=>[j])),_:1},8,["onClick"]),c(p,{onClick:e.customHeader},{default:m((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default f;