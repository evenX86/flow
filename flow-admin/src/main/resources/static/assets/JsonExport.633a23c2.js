import{_ as e}from"./TableImg.a57718a0.js";import"./BasicForm.437ea19e.js";import"./index.b964329b.js";import{c as i,d as a,j as o}from"./data.a9009431.js";import{P as t}from"./index.eb6697bf.js";import{j as d,K as s,o as r,m as n,Q as m,n as p,Y as c}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.8fc55deb.js";import"./index.081912a1.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.08be5da6.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.a0cc3f55.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.3784ba30.js";/* empty css              *//* empty css              *//* empty css              */import"./download.456194d0.js";import"./base64Conver.bb012c73.js";import"./index.5abcd6f5.js";import"./useContentViewHeight.95769b80.js";/* empty css              *//* empty css              */var f=d({components:{BasicTable:e,PageWrapper:t},setup:()=>({defaultHeader:function(){o({data:a,filename:"使用key作为默认头部.xlsx"})},customHeader:function(){o({data:a,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})},columns:i,data:a})});const j=c(" 导出：默认头部 "),b=c(" 导出：自定义头部 ");f.render=function(e,i,a,o,t,d){const c=s("a-button"),f=s("BasicTable"),u=s("PageWrapper");return r(),n(u,{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:m((()=>[p(f,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:m((()=>[p(c,{onClick:e.defaultHeader},{default:m((()=>[j])),_:1},8,["onClick"]),p(c,{onClick:e.customHeader},{default:m((()=>[b])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default f;