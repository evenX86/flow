import{B as x}from"./TableImg.73863b69.js";import{T as g}from"./BasicForm.6afa01de.js";import{u as C}from"./useTable.7c1e4a10.js";import{a as S,d as _}from"./positionInfo.a56f9195.js";import{P as T}from"./index.77f474a0.js";import P from"./PositionSeqTree.a666e774.js";import{b as F}from"./index.30115123.js";import{P as B,c as w,s as E}from"./PositionInfoModal.9ad48e97.js";import{A as I,aE as M,r as v,a0 as n,B as q,a1 as D,a6 as a,w as i,u as j,ae as y}from"./vendor.7bee64cc.js";import{_ as A,h as R}from"./index.9eb02b52.js";/* empty css                *//* empty css              */import"./useForm.1fd322f5.js";/* empty css                *//* empty css                *//* empty css               */import"./uuid.2b29000c.js";import"./useWindowSizeFn.30e15ddc.js";/* empty css               */import"./useSortable.dd731734.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.1445cecb.js";/* empty css                *//* empty css                *//* empty css                */import"./download.78bd314d.js";import"./base64Conver.bb012c73.js";import"./index.83641cbd.js";/* empty css                *//* empty css                */import"./useContentViewHeight.52836077.js";import"./Tree.vue_vue&type=style&index=0&lang.43e63f89.js";import"./useContextMenu.e899090d.js";import"./positionSeq.df87a519.js";const{createMessage:k}=R(),W=I({name:"PositionInfo",components:{BasicTable:x,PageWrapper:T,PositionSeqTree:P,PositionInfoModal:B,TableAction:g,Popconfirm:M},setup(){const[o,{openModal:r,setModalProps:d}]=F(),t=v({}),[b,{reload:l,setProps:u}]=C({title:"\u5217\u8868",api:S,columns:w,formConfig:{labelWidth:120,schemas:E,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:100,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});function c(){if(!j(t).id){k.warning("\u8BF7\u9009\u62E9\u5C97\u4F4D\u5E8F\u5217\uFF01",2);return}d({title:"\u65B0\u589E\u5C97\u4F4D"}),r(!0,{record:{positionSeqId:j(t).id,positionSeqCode:j(t).code},isUpdate:!0})}function p(e){d({title:"\u4FEE\u6539\u5C97\u4F4D"}),r(!0,{record:e,isUpdate:!0})}function m(e){_(e.id).then(()=>{l()})}function f(){s(t.value)}function s(e){t.value=e;let h={positionSeqId:e?e.id:""};u({searchInfo:h}),l({searchInfo:h})}return{registerTable:b,registerModal:o,handleCreate:c,handleEdit:p,handleDelete:m,handleSuccess:f,handleSelect:s}}}),$=y("\u65B0\u589E");function H(o,r,d,t,b,l){const u=n("PositionSeqTree"),c=n("a-button"),p=n("TableAction"),m=n("BasicTable"),f=n("PositionInfoModal"),s=n("PageWrapper");return q(),D(s,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:a(()=>[i(u,{class:"w-1/4 xl:w-1/5",onSelect:o.handleSelect},null,8,["onSelect"]),i(m,{onRegister:o.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:a(()=>[i(c,{type:"primary",onClick:o.handleCreate},{default:a(()=>[$]),_:1},8,["onClick"])]),action:a(({record:e})=>[i(p,{actions:[{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,e)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,e)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),i(f,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var Pe=A(W,[["render",H]]);export{Pe as default};