import{_ as e}from"./TableImg.5bb7b2c3.js";import{g as o}from"./BasicForm.3145f6c6.js";import{u as t}from"./useTable.4693838b.js";import{g as i,d as n}from"./category.e5871169.js";import{_ as a,c as r,s}from"./CategoryModal.ef9bc992.js";import{h as d}from"./index.8bbed969.js";import{b as c}from"./index.dcc0b3b8.js";import{y as l,Z as p,B as m,F as b,v as f,a2 as u,a9 as j}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.f6c4fcf0.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.9bed7e43.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.a0306c89.js";/* empty css              *//* empty css              *//* empty css              */import"./download.92b34d7b.js";import"./base64Conver.bb012c73.js";import"./index.adea3535.js";import"./company.dc24e742.js";const{createMessage:g}=d();var h=l({name:"Category",components:{BasicTable:e,TableAction:o,CategoryModal:a},setup(){const[e,{openModal:o,setModalProps:a}]=c(),[d,{reload:l}]=t({title:"列表",api:i,columns:r,formConfig:{labelWidth:120,schemas:s,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,canColDrag:!0,pagination:!1,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:d,registerModal:e,handleCreate:function(e){a({title:"新增流程分类"}),o(!0,{isUpdate:!1})},handleEdit:function(e,t){t.stopPropagation(),a({title:"修改流程分类"}),o(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e,t){t.stopPropagation(),a({title:"新增【"+e.name+"】的子分类"}),e={pid:e.id},o(!0,{record:e,isUpdate:!0})},handleDelete:function(e,o){o.stopPropagation(),e.children&&e.children.length>0?g.warning("有子节点，不能删除！"):n([e.id]).then((e=>{l()}))},handleSuccess:function(){l()},doSearch:function(){l()}}}});const x=j(" 新增 ");h.render=function(e,o,t,i,n,a){const r=p("a-button"),s=p("TableAction"),d=p("BasicTable"),c=p("CategoryModal");return m(),b("div",null,[f(d,{onRegister:e.registerTable},{toolbar:u((()=>[f(r,{type:"primary",onClick:e.handleCreate},{default:u((()=>[x])),_:1},8,["onClick"])])),action:u((({record:o})=>[f(s,{actions:[{tooltip:"添加子分类",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,o)},{tooltip:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{tooltip:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),f(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default h;