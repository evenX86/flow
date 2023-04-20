import{B as v}from"./TableImg.b4edebb6.js";import{l as M}from"./BasicForm.d977d74c.js";import{u as F}from"./useTable.2d6a625d.js";import{j as R,k as I,l as P,m as A}from"./dictionary.da74d644.js";import{P as $}from"./index.0b8e7721.js";import{az as N,a as V,w as W,aB as r,o as f,i as K,p as b,B as h,k as g,C as U,l as C,G as j}from"./index.7ea10544.js";import{b as z}from"./index.61c914e7.js";import G from"./DictionaryModal.b6bfd015.js";import"./index.e5a472bb.js";import"./Checkbox.fc744a85.js";import"./index.f8eff8ab.js";import"./index.60e2cd93.js";import"./eagerComputed.087e7096.js";import"./useForm.d5452096.js";import"./index.cca6a300.js";import"./index.c247c1b6.js";import"./index.6954dcaa.js";import"./uuid.2b29000c.js";import"./index.c5147852.js";import"./_baseIteratee.31b374d5.js";import"./get.4066932b.js";import"./DeleteOutlined.f1932d42.js";import"./index.e40c323f.js";import"./useRefs.08da6c2b.js";import"./Form.6886a72a.js";import"./Col.a6a2600f.js";import"./useFlexGapSupport.5af5008f.js";import"./useSize.b4cfb06d.js";import"./useWindowSizeFn.3dc14e02.js";import"./index.5d6fdc93.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.495d4eff.js";import"./FullscreenOutlined.8864dded.js";import"./index.32756aa0.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.17e7a4de.js";import"./index.056b642d.js";/* empty css              *//* empty css               */import"./index.c6794bd1.js";import"./transButton.331b5127.js";import"./index.a8777167.js";import"./index.d3af8cb2.js";import"./download.bfb09172.js";import"./base64Conver.08b9f4ec.js";import"./index.245189e1.js";import"./index.2f8b90c5.js";import"./uniqBy.fea10226.js";import"./index.b58cbcfd.js";import"./index.a5ac6dd4.js";import"./useContentViewHeight.6992291a.js";import"./ArrowLeftOutlined.89ac5398.js";import"./index.9d34ef87.js";import"./constantEnum.bf6653fb.js";const{createMessage:L}=j(),O=V({name:"DictionaryTable",components:{BasicTable:v,DictionaryModal:G,PageWrapper:$,TableAction:M},setup(e,{emit:l}){const[y,{openModal:s,setModalProps:c}]=z(),i=W(""),[p,{reload:n,setProps:u,setTableData:m,setSelectedRowKeys:d}]=F({title:"\u6570\u636E\u5B57\u5178\u5217\u8868",api:R,columns:I,formConfig:{labelWidth:120,schemas:P,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},immediate:!1,clickToRowSelect:!0,rowSelection:{type:"radio",columnWidth:40},useSearchForm:!0,showIndexColumn:!1,showTableSetting:!1,bordered:!0,pagination:!0,rowKey:"id",actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action"}});function a(){if(i.value===""){L.warning("\u8BF7\u9009\u62E9\u6570\u636E\u7C7B\u578B\uFF01",2);return}c({title:"\u65B0\u589E\u5B57\u5178"}),s(!0,{record:{dicTypeId:i.value},isUpdate:!1})}function T(t){i.value=t,u({searchInfo:{dicTypeId:t}}),n({page:1})}function B(){m([]),i.value=""}function _(t,o){o.stopPropagation(),c({title:"\u4FEE\u6539\u5B57\u5178"}),s(!0,{record:t,isUpdate:!0})}function k(t,o){o.stopPropagation()}function D(t){A(t.id).then(()=>{n()})}function S(){setTimeout(()=>{n()},200)}function w(t){d([t.id]),l("handleSelect",t.id)}function E({keys:t,rows:o}){o&&o.length>0&&l("handleSelect",o[0].id)}return{registerTable:p,registerModal:y,dictTypeId:i,handleDeleteStop:k,clickDictionary:w,changeDictionary:E,filterByDictType:T,cleanTableData:B,handleCreate:a,handleEdit:_,handleDelete:D,handleSuccess:S}}}),q={class:"bg-white overflow-hidden dictionary"};function H(e,l,y,s,c,i){const p=r("a-button"),n=r("TableAction"),u=r("BasicTable"),m=r("DictionaryModal");return f(),K("div",q,[b(u,{onRegister:e.registerTable,onRowClick:e.clickDictionary,onSelectionChange:e.changeDictionary},{toolbar:h(()=>[e.dictTypeId!==""?(f(),g(p,{key:0,type:"primary",onClick:e.handleCreate},{default:h(()=>[U("\u65B0\u589E")]),_:1},8,["onClick"])):C("",!0)]),bodyCell:h(({column:d,record:a})=>[d.key==="action"?(f(),g(n,{key:0,actions:[{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,a)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",onClick:e.handleDeleteStop.bind(null,a),popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,a),placement:"left"}}]},null,8,["actions"])):C("",!0)]),_:1},8,["onRegister","onRowClick","onSelectionChange"]),b(m,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var Je=N(O,[["render",H]]);export{Je as default};