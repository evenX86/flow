import{B as C}from"./TableImg.00c4ed04.js";import{l as I}from"./BasicForm.51e3eb56.js";import{u as T}from"./useTable.412b054f.js";import{a as v,i as E,b as D,e as k}from"./dictionary.496d4946.js";import{P as w}from"./index.c0d22213.js";import{az as M,a as F,w as S,aB as a,o as d,i as A,p as h,B as f,k as B,C as P,l as _,G as R}from"./index.da587afe.js";import{b as $}from"./index.e8eb4b57.js";import N from"./DictionaryItemModal.d1ede58c.js";import"./index.492229cd.js";import"./Checkbox.9d75a86f.js";import"./index.5aab84c4.js";import"./index.a85fa86f.js";import"./eagerComputed.3bbb876f.js";import"./useForm.d201bd46.js";import"./index.447b3242.js";import"./index.d7c8b760.js";import"./index.9d0fc194.js";import"./uuid.2b29000c.js";import"./index.3c9c3a6f.js";import"./_baseIteratee.78d8c020.js";import"./get.40c34cfc.js";import"./DeleteOutlined.690086a4.js";import"./index.d1cda802.js";import"./useRefs.1aead304.js";import"./Form.f8b72655.js";import"./Col.4ac749bb.js";import"./useFlexGapSupport.caa26b6d.js";import"./useSize.dbee3c08.js";import"./useWindowSizeFn.3fdab581.js";import"./index.a64c8a60.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.46184af0.js";import"./FullscreenOutlined.3d903e0f.js";import"./index.813f510f.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.37d32e36.js";import"./index.176a852f.js";/* empty css              *//* empty css               */import"./index.b3a5d1df.js";import"./transButton.1d3b575b.js";import"./index.5d1da0c4.js";import"./index.72d53e09.js";import"./download.75f04d3f.js";import"./base64Conver.08b9f4ec.js";import"./index.9912aa68.js";import"./index.36675b6e.js";import"./uniqBy.f906dabc.js";import"./index.a0d7e8a1.js";import"./index.6d85aa5b.js";import"./useContentViewHeight.f2db75e2.js";import"./ArrowLeftOutlined.8a04d10c.js";import"./index.25a87437.js";import"./constantEnum.bf6653fb.js";const{createMessage:V}=R(),U=F({name:"DictionaryItemTable",components:{BasicTable:C,DictionaryItemModal:N,PageWrapper:w,TableAction:I},setup(){const[e,{openModal:n,setModalProps:m}]=$(),t=S(""),[b,{reload:i,setProps:s,setTableData:l}]=T({title:"\u5B57\u5178\u9879\u5217\u8868",api:v,columns:E,formConfig:{labelWidth:120,schemas:D,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},immediate:!1,useSearchForm:!0,showIndexColumn:!1,showTableSetting:!1,bordered:!0,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action"}});function u(){if(t.value===""){V.warning("\u8BF7\u9009\u62E9\u6570\u636E\u5B57\u5178\uFF01",2);return}m({title:"\u65B0\u589E\u5B57\u5178\u9879"}),n(!0,{record:{mainId:t.value},isUpdate:!1})}function p(o){t.value=o,s({searchInfo:{mainId:t.value}}),i({page:1})}function c(){l([]),t.value=""}function r(o){m({title:"\u4FEE\u6539\u5B57\u5178\u9879"}),n(!0,{record:o,isUpdate:!0})}function y(o){k(o.id).then(()=>{i()})}function g(){setTimeout(()=>{i()},200)}return{dictId:t,registerTable:b,registerModal:e,cleanTableData:c,handleCreate:u,handleEdit:r,filterByDict:p,handleDelete:y,handleSuccess:g}}}),W={class:"bg-white overflow-hidden dictionary"};function x(e,n,m,t,b,i){const s=a("a-button"),l=a("TableAction"),u=a("BasicTable"),p=a("DictionaryItemModal");return d(),A("div",W,[h(u,{onRegister:e.registerTable},{toolbar:f(()=>[e.dictId!==""?(d(),B(s,{key:0,type:"primary",onClick:e.handleCreate},{default:f(()=>[P("\u65B0\u589E")]),_:1},8,["onClick"])):_("",!0)]),bodyCell:f(({column:c,record:r})=>[c.key==="action"?(d(),B(l,{key:0,actions:[{tooltip:"\u4FEE\u6539\u5B57\u5178\u9879",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,r)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,r),placement:"left"}}]},null,8,["actions"])):_("",!0)]),_:1},8,["onRegister"]),h(p,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var ze=M(U,[["render",x]]);export{ze as default};