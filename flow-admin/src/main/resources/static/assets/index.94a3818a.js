import{_ as e}from"./TableImg.aff6a356.js";import{g as o}from"./BasicForm.8a33b99c.js";import{u as i}from"./useTable.b9ab9434.js";import{b as t}from"./index.0795d69f.js";import{_ as a,c as n,s as r}from"./JobGradeTypeModal.85ee475a.js";import{a as s,d}from"./jobGradeType.3ec4916a.js";import{y as c,Z as l,B as m,F as p,v as b,a2 as f,a9 as u}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.64c4ba7e.js";import"./index.4926e6da.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.4052c204.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.115ee23a.js";/* empty css              *//* empty css              *//* empty css              */import"./download.c775db55.js";import"./base64Conver.bb012c73.js";import"./index.7ca90fad.js";var j=c({name:"JobGradeType",components:{BasicTable:e,TableAction:o,JobGradeTypeModal:a},setup(){const[e,{openModal:o}]=t(),[a,{reload:c}]=i({title:"列表",api:s,columns:n,formConfig:{labelWidth:120,schemas:r,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,pagination:!1,showIndexColumn:!1,isTreeTable:!0,actionColumn:{width:100,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:a,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){d(e.id).then((()=>{c()}))},handleSuccess:function(){c()}}}});const x=u(" 新增 ");j.render=function(e,o,i,t,a,n){const r=l("a-button"),s=l("TableAction"),d=l("BasicTable"),c=l("JobGradeTypeModal");return m(),p("div",null,[b(d,{onRegister:e.registerTable},{toolbar:f((()=>[b(r,{type:"primary",onClick:e.handleCreate},{default:f((()=>[x])),_:1},8,["onClick"])])),action:f((({record:o})=>[b(s,{actions:[{tooltip:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{tooltip:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),b(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default j;