import{B as P}from"./TableImg.1bea0f75.js";import"./useForm.ae5f8d75.js";import{u as x}from"./useTable.d3f6569e.js";import{P as C}from"./index.f8f7d8f4.js";import{L as D,a as I,b_ as S,aF as r,o as a,i as u,z as e,m as i,l as s,B as g,t as n,j as c,f as h,F,aI as $,aH as w}from"./index.c5d747fc.js";import{T as p}from"./index.296ee04a.js";import{T as E}from"./index.b45865a4.js";import{launchedTableSchema as N,searchFormSchema as L}from"./data.29eebc86.js";import R from"./ProcessHeader.746b0ace.js";import V from"./LaunchButton.1be76308.js";import{q as W,n as K}from"./process.fa055655.js";import"./index.65bb1df1.js";import"./index.228765a6.js";import"./index.04b8fb78.js";import"./get.5c495707.js";import"./useWindowSizeFn.86d1b816.js";import"./index.7e116144.js";import"./FullscreenOutlined.1623eefe.js";import"./index.96abfac9.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.aebff335.js";import"./eagerComputed.10c3fbd5.js";import"./scrollTo.21a54609.js";import"./index.eca2a50c.js";import"./index.9d0ea388.js";import"./index.57253b57.js";import"./useFlexGapSupport.6f7d1d35.js";import"./_baseIteratee.d68cd3da.js";import"./useSize.cc8786ae.js";import"./index.4d452538.js";import"./transButton.4255c41b.js";import"./index.f9690192.js";import"./useRefs.42a2da00.js";import"./download.cab93e10.js";import"./index.cbf6895d.js";import"./ClockCircleOutlined.22ebb599.js";import"./index.4287c510.js";import"./uniqBy.0bace2ed.js";import"./index.3ad95a08.js";import"./index.efb43125.js";import"./useContentViewHeight.2f7e7c9f.js";import"./ArrowLeftOutlined.871d1f86.js";import"./index.6c8974ca.js";import"./PlusOutlined.20270b2a.js";const z=I({components:{BasicTable:P,ProcessHeader:R,LaunchButton:V,PageWrapper:C,[p.name]:p,[p.TabPane.name]:p.TabPane,Tag:E,Popover:S},setup(){const[m,{getForm:l}]=x({api:W,title:"",columns:N,formConfig:{labelWidth:120,schemas:L,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},useSearchForm:!0,pagination:!0,showIndexColumn:!0,canResize:!1});return K().then(d=>{const{updateSchema:_}=l();_({field:"appSn",componentProps:{options:d}})}),{registerLaunchedTable:m}}}),H={class:"mt-2 desc-wrap process"};function M(m,l,d,_,j,q){const b=r("launch-button"),y=r("process-header"),v=r("router-link"),B=r("Tag"),T=r("Popover"),k=r("BasicTable"),A=r("PageWrapper");return a(),u(A,{title:"\u6D41\u7A0B\u4E2D\u5FC3",class:"!mt-4 process-list-container"},{extra:e(()=>[i(b)]),footer:e(()=>[i(y,{current:"launched"})]),default:e(()=>[s("div",H,[i(k,{onRegister:m.registerLaunchedTable},{bodyCell:e(({column:f,record:t})=>[f.key==="formName"?(a(),u(v,{key:0,to:`/process/view/${t.processDefinitionKey}?taskId=${t.taskId||""}&procInstId=${t.processInstanceId}&businessKey=${t.businessKey}`},{default:e(()=>[g(n(t.formName),1)]),_:2},1032,["to"])):c("",!0),f.key==="currentAssignees"?(a(),h(F,{key:1},[t.currentAssignees&&t.currentAssignees.length>0?(a(!0),h(F,{key:0},$(t.currentAssignees,o=>(a(),u(T,{title:o.type==="user"?"\u4EBA\u5458\u4FE1\u606F":"\u89D2\u8272\u4FE1\u606F"},w({default:e(()=>[i(B,{color:"warning"},{default:e(()=>[g(n(o.name),1)]),_:2},1024)]),_:2},[o.type==="user"?{name:"content",fn:e(()=>[s("div",null,"\u59D3\u540D\uFF1A"+n(o.name),1),s("div",null,"\u5DE5\u53F7\uFF1A"+n(o.code),1),s("div",null,"\u624B\u673A\uFF1A"+n(o.mobile),1)]),key:"0"}:{name:"content",fn:e(()=>[s("div",null,"\u540D\u79F0\uFF1A"+n(o.name),1),s("div",null,"\u6807\u8BC6\uFF1A"+n(o.code),1)]),key:"1"}]),1032,["title"]))),256)):c("",!0)],64)):c("",!0)]),_:1},8,["onRegister"])])]),_:1})}var Le=D(z,[["render",M]]);export{Le as default};