var b=(s,c,o)=>new Promise((l,a)=>{var u=r=>{try{n(o.next(r))}catch(i){a(i)}},p=r=>{try{n(o.throw(r))}catch(i){a(i)}},n=r=>r.done?l(r.value):Promise.resolve(r.value).then(u,p);n((o=o.apply(s,c)).next())});import{B as E,a as M}from"./index.56ac9033.js";import{B as N}from"./TableImg.3ff4c1b4.js";import{l as W}from"./BasicForm.bc1bc2ec.js";import{u as F}from"./useTable.dffabf3f.js";import{g as L}from"./personal.4873b21f.js";import{P as O}from"./index.6f4a9d56.js";import $ from"./OrgTree.ff667f86.js";import{bU as A,az as D,a as z,w as T,h as V,aB as d,o as g,k as _,B as h,n as K,i as U,F as j,aE as q,C as G,t as H,p as w,aC as J}from"./index.bbfb8c5d.js";import{T as y}from"./index.bd278e5f.js";import"./useWindowSizeFn.daa22200.js";import"./FullscreenOutlined.7b1f5985.js";import"./index.08f5b20b.js";import"./Checkbox.6b0f0619.js";import"./index.932444ce.js";import"./index.424465cb.js";import"./eagerComputed.2918d49d.js";import"./useForm.35a2e1b5.js";import"./index.e860cc21.js";import"./index.ba9876ed.js";import"./uuid.2b29000c.js";import"./index.d0de3318.js";import"./_baseIteratee.6836a2b9.js";import"./get.476f8b78.js";import"./DeleteOutlined.426a7a56.js";import"./index.21d11494.js";import"./useRefs.c946e576.js";import"./Form.64d057a8.js";import"./Col.bf638c61.js";import"./useFlexGapSupport.ae09cf13.js";import"./useSize.2da926c0.js";import"./index.eb776706.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.566a8b2c.js";import"./index.59bf1cba.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.1bc5bfb7.js";import"./index.a824713f.js";/* empty css              *//* empty css               */import"./index.53f3ac38.js";import"./transButton.15723253.js";import"./index.dbc537d6.js";import"./index.1311bc71.js";import"./download.4c3fda74.js";import"./base64Conver.08b9f4ec.js";import"./index.5d0a6eed.js";import"./index.5796c3bd.js";import"./uniqBy.16bfb902.js";import"./index.b7fa4bcc.js";import"./index.8643b1cc.js";import"./useContentViewHeight.ce579b14.js";import"./ArrowLeftOutlined.32f822b8.js";import"./index.40637d17.js";import"./index.6f678a8f.js";import"./useContextMenu.b34fb2fb.js";import"./dept.7ae8ecb4.js";const Q=[{title:"\u59D3\u540D",dataIndex:"name",width:80,align:"left"},{title:"\u5DE5\u53F7",dataIndex:"code",width:80,align:"left"},{title:"\u6027\u522B",dataIndex:"sex",width:50,customRender:({record:s})=>{const o=~~s.sex===1,l=o?"green":"red",a=o?"\u7537":"\u5973";return A(y,{color:l},()=>a)}},{title:"\u516C\u53F8",dataIndex:"companyName",width:120,align:"left"},{title:"\u90E8\u95E8",dataIndex:"deptName",width:120,align:"left"}],B=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",labelWidth:60,colProps:{span:12,lg:{span:12,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}},componentProps:{}}];const X=z({props:{title:{type:String,default:"\u4EBA\u5458\u9009\u62E9"}},name:"PersonalSelector",components:{BasicModal:E,BasicTable:N,PageWrapper:O,OrgTree:$,TableAction:W,Tag:y},setup(s,{emit:c}){const o=T([]),l=T(!1),[a,{setModalProps:u,closeModal:p}]=M(t=>b(this,null,function*(){const{selectorProps:e}=t;e.selectedList,o.value=e.selectedList,l.value=e.multiSelect,m(o.value.map(R=>R.code)),i({rowSelection:{type:e.multiSelect?"checkbox":"radio",columnWidth:30}}),u({wrapClassName:"selector-content"}),r()}));B.forEach(t=>{t&&(t.componentProps.onkeypress=e=>{e.keyCode===13&&r()})});const[n,{reload:r,setProps:i,getSelectRows:f,setSelectedRowKeys:m}]=F({title:"",api:L,columns:Q,immediate:!1,rowSelection:{type:"checkbox",columnWidth:30},formConfig:{labelWidth:60,schemas:B,showResetButton:!1,showAdvancedButton:!1,autoSubmitOnEnter:!0},clickToRowSelect:!0,rowKey:"code",size:"small",canResize:!1,useSearchForm:!0,showTableSetting:!1,showIndexColumn:!1,bordered:!0,scroll:{y:280}}),S=V(()=>"\u9009\u62E9\u4EBA\u5458");function v(){r()}function k(t){o.value.splice(o.value.findIndex(e=>e.code===t),1),m(o.value.map(e=>e.code))}function C({rows:t}){o.value=t.map(e=>({id:e.id,code:e.code,name:e.name}))}function P(){C({rows:f()})}function I(){const t=f();c("success",t),p()}function x(t){let e={};t&&t.sourceType==="1"?e={companyId:t.id}:t&&t.sourceType==="2"&&(e={deptId:t.id}),r({searchInfo:e})}return{registerTable:n,registerModal:a,getTitle:S,selectedList:o,removeSelectedItem:k,rowClick:P,selectionChanged:C,handleSubmit:I,handleSuccess:v,handleSelect:x}}}),Y={class:"selected-items"};function Z(s,c,o,l,a,u){const p=d("Tag"),n=d("OrgTree"),r=d("BasicTable"),i=d("PageWrapper"),f=d("BasicModal");return g(),_(f,J({wrapClassName:"selector-body"},s.$attrs,{onRegister:s.registerModal,title:s.getTitle,onOk:s.handleSubmit}),{default:h(()=>[K("div",Y,[(g(!0),U(j,null,q(s.selectedList,m=>(g(),_(p,{color:"processing",closable:"",onClose:S=>s.removeSelectedItem(m.code)},{default:h(()=>[G(H(m.name),1)]),_:2},1032,["onClose"]))),256))]),w(i,{dense:"",contentClass:"flex"},{default:h(()=>[w(n,{class:"w-1/4 xl:w-3/10",onSelect:s.handleSelect},null,8,["onSelect"]),w(r,{onRegister:s.registerTable,onSelectionChange:s.selectionChanged,onRowClick:s.rowClick,class:"w-3/4 xl:w-7/10"},null,8,["onRegister","onSelectionChange","onRowClick"])]),_:1})]),_:1},16,["onRegister","title","onOk"])}var st=D(X,[["render",Z]]);export{st as default};