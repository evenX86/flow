import{_ as e}from"./TableImg.96b6e2f6.js";import{f as o}from"./BasicForm.99631a91.js";import{u as i}from"./useTable.ee2b6f63.js";import{c as t}from"./system.656162d2.js";import{u as n}from"./index.1db0f76a.js";import{_ as r,c as s,s as a}from"./RoleDrawer.0ed107f4.js";import{j as d,K as c,o as m,m as l,n as f,Q as p,Y as u}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.29bf2c0c.js";import"./index.ffeb6485.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.08cdb95c.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.e687761f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f6d89420.js";/* empty css              *//* empty css              *//* empty css              */import"./download.a58b74c3.js";import"./base64Conver.bb012c73.js";import"./index.dc4f899a.js";/* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.a6f2d871.js";import"./useContextMenu.9fd55a1d.js";var b=d({name:"RoleManagement",components:{BasicTable:e,RoleDrawer:r,TableAction:o},setup(){const[e,{openDrawer:o}]=n(),[r,{reload:d}]=i({title:"角色列表",api:t,columns:s,formConfig:{labelWidth:120,schemas:a},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});return{registerTable:r,registerDrawer:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function(){d()}}}});const j=u(" 新增角色 ");b.render=function(e,o,i,t,n,r){const s=c("a-button"),a=c("TableAction"),d=c("BasicTable"),u=c("RoleDrawer");return m(),l("div",null,[f(d,{onRegister:e.registerTable},{toolbar:p((()=>[f(s,{type:"primary",onClick:e.handleCreate},{default:p((()=>[j])),_:1},8,["onClick"])])),action:p((({record:o})=>[f(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),f(u,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default b;