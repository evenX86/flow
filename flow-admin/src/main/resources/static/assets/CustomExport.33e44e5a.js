import{_ as e}from"./TableImg.28dd5cba.js";import"./BasicForm.4961b69c.js";import{E as o}from"./index.cc70e39f.js";import{c as t,d as s,j as a}from"./data.5c93df9e.js";import{b as r}from"./useModal.c70d8b8c.js";import{_ as i}from"./PageWrapper.5df89cd8.js";import{k as n,K as d,o as p,n as c,Q as m,q as f,Y as j}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.4f4a10e2.js";import"./index.f36f9bca.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.be92848d.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.0ef22e66.js";/* empty css              *//* empty css              */import"./download.0867ab48.js";import"./StrengthMeter.b0b10a34.js";import"./createAsyncComponent.f4288151.js";import"./usePageContext.c12a9fc6.js";/* empty css              *//* empty css              */var l=n({components:{BasicTable:e,ExpExcelModel:o,PageWrapper:i},setup(){const[e,{openModal:o}]=r();return{defaultHeader:function({filename:e,bookType:o}){a({data:s,filename:e,write2excelOpts:{bookType:o}})},columns:t,data:s,register:e,openModal:o}}});const u=j(" 导出 ");l.render=function(e,o,t,s,a,r){const i=d("a-button"),n=d("BasicTable"),j=d("ExpExcelModel"),l=d("PageWrapper");return p(),c(l,{title:"导出示例",content:"可以选择导出格式"},{default:m((()=>[f(n,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:m((()=>[f(i,{onClick:e.openModal},{default:m((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"]),f(j,{onRegister:e.register,onSuccess:e.defaultHeader},null,8,["onRegister","onSuccess"])])),_:1})};export default l;