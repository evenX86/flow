import{B as s}from"./TableImg.b4edebb6.js";import{l as d}from"./BasicForm.d977d74c.js";import{u as c}from"./useTable.2d6a625d.js";import{d as F}from"./table.7fbc2fd7.js";import{az as h,a as b,aB as a,o as r,i as f,p as B,B as A,k as C,l as w}from"./index.7ea10544.js";import"./index.e5a472bb.js";import"./Checkbox.fc744a85.js";import"./index.f8eff8ab.js";import"./index.60e2cd93.js";import"./eagerComputed.087e7096.js";import"./useForm.d5452096.js";import"./index.0b8e7721.js";import"./index.b58cbcfd.js";import"./index.a5ac6dd4.js";import"./useSize.b4cfb06d.js";import"./useWindowSizeFn.3dc14e02.js";import"./useContentViewHeight.6992291a.js";import"./ArrowLeftOutlined.89ac5398.js";import"./index.9d34ef87.js";import"./transButton.331b5127.js";import"./index.cca6a300.js";import"./index.c247c1b6.js";import"./index.6954dcaa.js";import"./uuid.2b29000c.js";import"./index.c5147852.js";import"./_baseIteratee.31b374d5.js";import"./get.4066932b.js";import"./DeleteOutlined.f1932d42.js";import"./index.e40c323f.js";import"./useRefs.08da6c2b.js";import"./Form.6886a72a.js";import"./Col.a6a2600f.js";import"./useFlexGapSupport.5af5008f.js";import"./index.61c914e7.js";import"./FullscreenOutlined.8864dded.js";import"./index.5d6fdc93.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.495d4eff.js";import"./index.32756aa0.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.17e7a4de.js";import"./index.056b642d.js";/* empty css              *//* empty css               */import"./index.c6794bd1.js";import"./index.a8777167.js";import"./index.d3af8cb2.js";import"./download.bfb09172.js";import"./base64Conver.08b9f4ec.js";import"./index.245189e1.js";import"./index.2f8b90c5.js";import"./uniqBy.fea10226.js";const I=[{title:"\u7F16\u53F7",dataIndex:"no",width:100},{title:"\u59D3\u540D",dataIndex:"name",width:200,auth:"test"},{title:"\u72B6\u6001",dataIndex:"status"},{title:"\u72B6\u60011",dataIndex:"status1"},{title:"\u72B6\u60012",dataIndex:"status2"},{title:"\u72B6\u60013",dataIndex:"status3"},{title:"\u72B6\u60014",dataIndex:"status4"},{title:"\u72B6\u60015",dataIndex:"status5"},{title:"\u5730\u5740",dataIndex:"address",auth:"super",ifShow:t=>!0},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200}],T=b({components:{BasicTable:s,TableAction:d},setup(){const[t]=c({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:F,columns:I,bordered:!0,rowKey:"id",rowSelection:{type:"checkbox"},actionColumn:{width:250,title:"Action",dataIndex:"action"}});function i(e){}function u(e){}function n(e){}return{registerTable:t,handleEdit:i,handleDelete:u,handleOpen:n}}}),x={class:"p-4"};function _(t,i,u,n,e,E){const l=a("TableAction"),p=a("BasicTable");return r(),f("div",x,[B(p,{onRegister:t.registerTable},{bodyCell:A(({column:m,record:o})=>[m.key==="action"?(r(),C(l,{key:0,actions:[{label:"\u7F16\u8F91",onClick:t.handleEdit.bind(null,o),auth:"other"},{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,o),auth:"super"}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:t.handleOpen.bind(null,o)},ifShow:k=>o.status!=="enable"},{label:"\u7981\u7528",popConfirm:{title:"\u662F\u5426\u7981\u7528\uFF1F",confirm:t.handleOpen.bind(null,o)},ifShow:()=>o.status==="enable"},{label:"\u540C\u65F6\u63A7\u5236",popConfirm:{title:"\u662F\u5426\u52A8\u6001\u663E\u793A\uFF1F",confirm:t.handleOpen.bind(null,o)},auth:"super",ifShow:()=>!0}]},null,8,["actions","dropDownActions"])):w("",!0)]),_:1},8,["onRegister"])])}var Et=h(T,[["render",_]]);export{Et as default};