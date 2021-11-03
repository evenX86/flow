import{B as e,a as t}from"./index.dcc0b3b8.js";import{_ as o}from"./TableImg.5bb7b2c3.js";import{g as s}from"./BasicForm.3145f6c6.js";import{u as n}from"./useTable.4693838b.js";import{g as a}from"./personal.c5d18b6f.js";import{P as i}from"./index.22ff4fb2.js";import r from"./OrgTree.5fff3a18.js";import{af as l,b5 as c,y as d,r as m,j as p,Z as f,B as u,F as b,a2 as x,v as j,a7 as g,ao as h,a9 as w,J as S,a0 as v}from"./vendor.880b4c6c.js";/* empty css              */import"./index.8bbed969.js";import"./useWindowSizeFn.564cf32e.js";/* empty css              *//* empty css              */import"./useForm.f6c4fcf0.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.9bed7e43.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.a0306c89.js";/* empty css              *//* empty css              *//* empty css              */import"./download.92b34d7b.js";import"./base64Conver.bb012c73.js";import"./index.adea3535.js";/* empty css              *//* empty css              */import"./useContentViewHeight.c0fc876b.js";import"./Tree.vue_vue&type=style&index=0&lang.f01fe83c.js";import"./useContextMenu.d77d7c90.js";import"./dept.1c2b400c.js";const y=[{title:"姓名",dataIndex:"name",width:80,align:"left"},{title:"工号",dataIndex:"code",width:80,align:"left"},{title:"性别",dataIndex:"sex",width:50,customRender:({record:e})=>{const t=1==~~e.sex,o=t?"男":"女";return l(c,{color:t?"green":"red"},(()=>o))}},{title:"公司",dataIndex:"companyName",width:120,align:"left"},{title:"部门",dataIndex:"deptName",width:120,align:"left"}],C=[{field:"keyword",label:"关键字",component:"Input",labelWidth:60,colProps:{span:12,lg:{span:12,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}},componentProps:{}}];var T=d({props:{title:{type:String,default:"人员选择"}},name:"PersonalSelector",components:{BasicModal:e,BasicTable:o,PageWrapper:i,OrgTree:r,TableAction:s,Tag:c},setup(e,{emit:o}){const s=m([]),i=m(!1),[r,{setModalProps:l,closeModal:c}]=t((e=>{return t=this,o=null,n=function*(){const{selectorProps:t}=e;s.value=t.selectedList,i.value=t.multiSelect,x(s.value.map((e=>e.code))),u({rowSelection:{type:t.multiSelect?"checkbox":"radio",columnWidth:30}}),l({wrapClassName:"selector-content"}),f()},new Promise(((e,s)=>{var a=e=>{try{r(n.next(e))}catch(t){s(t)}},i=e=>{try{r(n.throw(e))}catch(t){s(t)}},r=t=>t.done?e(t.value):Promise.resolve(t.value).then(a,i);r((n=n.apply(t,o)).next())}));var t,o,n}));C.forEach((e=>{e&&(e.componentProps.onkeypress=e=>{13===e.keyCode&&f()})}));const[d,{reload:f,setProps:u,getSelectRows:b,setSelectedRowKeys:x}]=n({title:"",api:a,columns:y,immediate:!1,rowSelection:{type:"checkbox",columnWidth:30},formConfig:{labelWidth:60,schemas:C,showResetButton:!1,showAdvancedButton:!1,autoSubmitOnEnter:!0},clickToRowSelect:!0,rowKey:"code",size:"small",canResize:!1,useSearchForm:!0,showTableSetting:!1,showIndexColumn:!1,bordered:!0,scroll:{y:280}});function j({rows:e}){s.value=e.map((e=>({id:e.id,code:e.code,name:e.name})))}return{registerTable:d,registerModal:r,getTitle:p((()=>"选择人员")),selectedList:s,removeSelectedItem:function(e){s.value.splice(s.value.findIndex((t=>t.code===e)),1),x(s.value.map((e=>e.code)))},rowClick:function(){j({rows:b()})},selectionChanged:j,handleSubmit:function(){const e=b();o("success",e),c()},handleSuccess:function(){f()},handleSelect:function(e){let t={};e&&"1"===e.sourceType?t={companyId:e.id}:e&&"2"===e.sourceType&&(t={deptId:e.id}),f({searchInfo:t})}}}});const I={class:"selected-items"};T.render=function(e,t,o,s,n,a){const i=f("Tag"),r=f("OrgTree"),l=f("BasicTable"),c=f("PageWrapper"),d=f("BasicModal");return u(),b(d,v({wrapClassName:"selector-body"},e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:x((()=>[j("div",I,[(u(!0),b(g,null,h(e.selectedList,(t=>(u(),b(i,{color:"processing",closable:"",onClose:o=>e.removeSelectedItem(t.code)},{default:x((()=>[w(S(t.name),1)])),_:2},1032,["onClose"])))),256))]),j(c,{dense:"",contentClass:"flex"},{default:x((()=>[j(r,{class:"w-1/4 xl:w-3/10",onSelect:e.handleSelect},null,8,["onSelect"]),j(l,{onRegister:e.registerTable,onSelectionChange:e.selectionChanged,onRowClick:e.rowClick,class:"w-3/4 xl:w-7/10"},null,8,["onRegister","onSelectionChange","onRowClick"])])),_:1})])),_:1},16,["onRegister","title","onOk"])};export default T;