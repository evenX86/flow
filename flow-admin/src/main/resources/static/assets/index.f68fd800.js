import{B as T}from"./TableImg.8ad498cd.js";import"./BasicForm.027cbf67.js";import{u as h}from"./useTable.7536e350.js";import{P as g}from"./index.c79f76d5.js";import{az as y,a as v,ej as k,aB as o,i as x,l as P,C as t,q as u,D as e,p as r}from"./index.e61ad282.js";import{D as c}from"./index.9f50e000.js";import{C as f}from"./index.c938a7eb.js";import{T as p}from"./index.f066cc44.js";/* empty css               */import{D as n}from"./index.37043159.js";import{S as s}from"./index.2328c07a.js";import"./index.114515de.js";import{refundTimeTableSchema as S,refundTimeTableData as X}from"./data.c7896651.js";import"./index.8e210a09.js";import"./index.ce1ab63a.js";import"./Checkbox.bb68ead3.js";import"./index.99ef178c.js";import"./index.d92fc3ac.js";import"./eagerComputed.d3c262c3.js";import"./useForm.81406efc.js";import"./index.8f86dec4.js";import"./index.9f299dd3.js";import"./index.6e0a0264.js";import"./uuid.2b29000c.js";import"./index.6749d186.js";import"./_baseIteratee.7ece590b.js";import"./get.bca7403a.js";import"./DeleteOutlined.3b47e95d.js";import"./Form.8b25370b.js";import"./Col.f72eb8d0.js";import"./useFlexGapSupport.ed2a5fc1.js";import"./useSize.5a37866d.js";import"./useWindowSizeFn.27de1b1b.js";import"./index.a492e5cd.js";import"./FullscreenOutlined.3a424424.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.5bbc1139.js";import"./index.e8295ad9.js";import"./fromPairs.84aabb58.js";import"./scrollTo.e9bc7999.js";import"./index.ba1457ae.js";/* empty css              */import"./index.9233793b.js";import"./transButton.2c723edc.js";import"./index.8ba0bfed.js";import"./index.dbdde179.js";import"./download.810571da.js";import"./base64Conver.08b9f4ec.js";import"./index.ebd81f61.js";import"./useRefs.0c428178.js";import"./index.6d7de824.js";import"./uniqBy.8c214189.js";import"./index.769e0bcb.js";import"./index.f6c9d1b9.js";import"./useContentViewHeight.34702d2a.js";import"./ArrowLeftOutlined.0e95a5b3.js";import"./index.5621adef.js";import"./PlusOutlined.e602ccf2.js";const N=v({components:{BasicTable:T,PageWrapper:g,[c.name]:c,[f.name]:f,Empty:k,[n.name]:n,[n.Item.name]:n.Item,[s.name]:s,[s.Step.name]:s.Step,[p.name]:p,[p.TabPane.name]:p.TabPane},setup(){const[F]=h({title:"\u9000\u8D27\u8FDB\u5EA6",columns:S,pagination:!1,dataSource:X,showIndexColumn:!1,scroll:{y:300}});return{registerTimeTable:F}}}),V={class:"pt-4 m-4 desc-wrap"},$=r("a",null,"12421",-1),w=r("div",null,"Vben",-1),z=r("p",null,"2016-12-12 12:32",-1),I=r("p",null,"Chad",-1),W=r("h4",null,"\u4FE1\u606F\u7EC4",-1);function R(F,Y,j,q,M,G){const _=o("a-button"),d=o("a-tab-pane"),D=o("a-tabs"),a=o("a-descriptions-item"),l=o("a-descriptions"),i=o("a-step"),C=o("a-steps"),m=o("a-card"),E=o("a-divider"),b=o("Empty"),B=o("BasicTable"),A=o("PageWrapper");return x(),P(A,{title:"\u5355\u53F7\uFF1A234231029431",contentBackground:""},{extra:t(()=>[u(_,null,{default:t(()=>[e(" \u64CD\u4F5C\u4E00 ")]),_:1}),u(_,null,{default:t(()=>[e(" \u64CD\u4F5C\u4E8C ")]),_:1}),u(_,{type:"primary"},{default:t(()=>[e(" \u4E3B\u64CD\u4F5C ")]),_:1})]),footer:t(()=>[u(D,{"default-active-key":"1"},{default:t(()=>[u(d,{key:"1",tab:"\u8BE6\u60C5"}),u(d,{key:"2",tab:"\u89C4\u5219"})]),_:1})]),default:t(()=>[r("div",V,[u(l,{size:"small",column:2},{default:t(()=>[u(a,{label:"\u521B\u5EFA\u4EBA"},{default:t(()=>[e(" \u66F2\u4E3D\u4E3D ")]),_:1}),u(a,{label:"\u8BA2\u8D2D\u4EA7\u54C1"},{default:t(()=>[e(" XX \u670D\u52A1 ")]),_:1}),u(a,{label:"\u521B\u5EFA\u65F6\u95F4"},{default:t(()=>[e(" 2017-01-10 ")]),_:1}),u(a,{label:"\u5173\u8054\u5355\u636E"},{default:t(()=>[$]),_:1}),u(a,{label:"\u751F\u6548\u65E5\u671F"},{default:t(()=>[e(" 2017-07-07 ~ 2017-08-08 ")]),_:1}),u(a,{label:"\u5907\u6CE8"},{default:t(()=>[e(" \u8BF7\u4E8E\u4E24\u4E2A\u5DE5\u4F5C\u65E5\u5185\u786E\u8BA4 ")]),_:1})]),_:1}),u(m,{title:"\u6D41\u7A0B\u8FDB\u5EA6",bordered:!1},{default:t(()=>[u(C,{current:1,"progress-dot":"",size:"small"},{default:t(()=>[u(i,{title:"\u521B\u5EFA\u9879\u76EE"},{description:t(()=>[w,z]),_:1}),u(i,{title:"\u90E8\u95E8\u521D\u5BA1"},{description:t(()=>[I]),_:1}),u(i,{title:"\u8D22\u52A1\u590D\u6838"}),u(i,{title:"\u5B8C\u6210"})]),_:1})]),_:1}),u(m,{title:"\u7528\u6237\u4FE1\u606F",bordered:!1,class:"mt-5"},{default:t(()=>[u(l,{column:3},{default:t(()=>[u(a,{label:"\u7528\u6237\u59D3\u540D"},{default:t(()=>[e(" \u4ED8\u5C0F\u5C0F ")]),_:1}),u(a,{label:"\u4F1A\u5458\u5361\u53F7"},{default:t(()=>[e(" XX 32943898021309809423 ")]),_:1}),u(a,{label:"\u8EAB\u4EFD\u8BC1"},{default:t(()=>[e(" 3321944288191034921 ")]),_:1}),u(a,{label:"\u8054\u7CFB\u65B9\u5F0F"},{default:t(()=>[e(" 18112345678 ")]),_:1}),u(a,{label:"\u8054\u7CFB\u5730\u5740",span:2},{default:t(()=>[e(" \u66F2\u4E3D\u4E3D 18100000000 \u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A\u9EC4\u59D1\u5C71\u8DEF\u5DE5\u4E13\u8DEF\u4EA4\u53C9\u8DEF\u53E3 ")]),_:1})]),_:1}),u(l,{title:"\u4FE1\u606F\u7EC4",column:3},{default:t(()=>[u(a,{label:"\u67D0\u67D0\u6570\u636E"},{default:t(()=>[e(" 111 ")]),_:1}),u(a,{label:"\u8BE5\u6570\u636E\u66F4\u65B0\u65F6\u95F4"},{default:t(()=>[e(" 2017-08-08 ")]),_:1}),u(a,{label:"\u67D0\u67D0\u6570\u636E"},{default:t(()=>[e(" 725 ")]),_:1}),u(a,{label:"\u8BE5\u6570\u636E\u66F4\u65B0\u65F6\u95F4"},{default:t(()=>[e(" 2017-08-08 ")]),_:1})]),_:1}),W,u(m,{title:"\u591A\u5C42\u7EA7\u4FE1\u606F\u7EC4"},{default:t(()=>[u(l,{title:"\u7EC4\u540D\u79F0",column:3},{default:t(()=>[u(a,{label:"\u8D1F\u8D23\u4EBA"},{default:t(()=>[e(" \u6797\u4E1C\u4E1C ")]),_:1}),u(a,{label:"\u89D2\u8272\u7801"},{default:t(()=>[e(" 1234567 ")]),_:1}),u(a,{label:"\u6240\u5C5E\u90E8\u95E8"},{default:t(()=>[e(" XX\u516C\u53F8 - YY\u90E8 ")]),_:1}),u(a,{label:"\u8FC7\u671F\u65F6\u95F4"},{default:t(()=>[e(" 2017-08-08 ")]),_:1}),u(a,{label:"\u63CF\u8FF0",span:2},{default:t(()=>[e(" \u8FD9\u6BB5\u63CF\u8FF0\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F... ")]),_:1})]),_:1}),u(E),u(l,{title:"\u7EC4\u540D\u79F0",column:1},{default:t(()=>[u(a,{label:"\u5B66\u540D"},{default:t(()=>[e(" Citrullus lanatus (Thunb.) Matsum. et Nakai\u4E00\u5E74\u751F\u8513\u751F\u85E4\u672C\uFF1B\u830E\u3001\u679D\u7C97\u58EE\uFF0C\u5177\u660E\u663E\u7684\u68F1\u3002\u5377\u987B\u8F83\u7C97.. ")]),_:1})]),_:1}),u(E),u(l,{title:"\u7EC4\u540D\u79F0",column:1},{default:t(()=>[u(a,{label:"\u8D1F\u8D23\u4EBA"},{default:t(()=>[e(" \u4ED8\u5C0F\u5C0F ")]),_:1}),u(a,{label:"\u89D2\u8272\u7801"},{default:t(()=>[e(" 1234568 ")]),_:1})]),_:1})]),_:1})]),_:1}),u(m,{title:"\u7528\u6237\u8FD1\u534A\u5E74\u6765\u7535\u8BB0\u5F55",class:"my-5"},{default:t(()=>[u(b)]),_:1}),u(B,{onRegister:F.registerTimeTable},null,8,["onRegister"])])]),_:1})}var Ou=y(N,[["render",R]]);export{Ou as default};