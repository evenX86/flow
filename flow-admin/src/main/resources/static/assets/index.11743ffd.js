import{_ as e}from"./TableImg.5256107f.js";import{f as o}from"./BasicForm.9118d7fd.js";import{u as t}from"./useTable.46ace9df.js";import{g as i,d as n}from"./appPrivilegeValue.49affcc0.js";import{P as a}from"./perEnum.9a5ef72f.js";import{_ as r,c as s}from"./AppPrivilegeValueModal.05eadbed.js";import{b as d}from"./useModal.ddd2c5cc.js";import{_ as l}from"./Authority.vue_vue&type=script&lang.c16ef1bb.js";import{k as c,K as m,o as p,n as u,q as f,Q as b,Y as j}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              */import"./useForm.7b000bd0.js";import"./index.bfbdc958.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.97fe3b93.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.a238b96b.js";/* empty css              *//* empty css              */import"./download.c3ab6d96.js";import"./StrengthMeter.ab008fc6.js";var h=c({name:"AppPrivilegeValue",components:{BasicTable:e,TableAction:o,AppModal:r,Authority:l},setup(){const[e,{openModal:o}]=d(),[r,{reload:l}]=t({title:"列表",api:i,columns:s,canColDrag:!0,useSearchForm:!1,pagination:!1,bordered:!0,showIndexColumn:!0,actionColumn:{width:100,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{PerEnum:a,registerTable:r,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){n([e.id]).then((e=>{l()}))},handleSuccess:function(){l()}}}});const g=j(" 新增 ");h.render=function(e,o,t,i,n,a){const r=m("a-button"),s=m("Authority"),d=m("TableAction"),l=m("BasicTable"),c=m("AppModal");return p(),u("div",null,[f(l,{onRegister:e.registerTable},{toolbar:b((()=>[f(s,{value:this.$options.name+":"+e.PerEnum.ADD},{default:b((()=>[f(r,{type:"primary",onClick:e.handleCreate},{default:b((()=>[g])),_:1},8,["onClick"])])),_:1},8,["value"])])),action:b((({record:o})=>[f(d,{actions:[{auth:this.$options.name+":"+e.PerEnum.UPDATE,title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{auth:this.$options.name+":"+e.PerEnum.DELETE,title:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),f(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default h;