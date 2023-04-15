import{_ as v}from"./index.6f678a8f.js";import{t as A}from"./data.ec134722.js";import{az as F,a as K,w as N,aB as p,o as S,k as $,B as a,n as c,p as l,C as s,G as h,j as g}from"./index.bbfb8c5d.js";import{P as G}from"./index.6f4a9d56.js";import"./fromPairs.daf93cb7.js";import"./index.424465cb.js";import"./eagerComputed.2918d49d.js";import"./useContextMenu.b34fb2fb.js";import"./index.eb776706.js";import"./get.476f8b78.js";import"./index.b7fa4bcc.js";import"./index.8643b1cc.js";import"./useSize.2da926c0.js";import"./useWindowSizeFn.daa22200.js";import"./useContentViewHeight.ce579b14.js";import"./ArrowLeftOutlined.32f822b8.js";import"./index.40637d17.js";import"./transButton.15723253.js";const T=K({components:{BasicTree:v,PageWrapper:G},setup(){const t=N(null),{createMessage:e}=h();function o(){const u=g(t);if(!u)throw new Error("tree is null!");return u}function f(u){o().filterByLevel(u)}function m(){o().setCheckedKeys(["0-0"])}function B(){const u=o().getCheckedKeys();e.success(JSON.stringify(u))}function n(){o().setSelectedKeys(["0-0"])}function d(){const u=o().getSelectedKeys();e.success(JSON.stringify(u))}function i(){o().setExpandedKeys(["0-0"])}function r(){const u=o().getExpandedKeys();e.success(JSON.stringify(u))}function C(u){o().checkAll(u)}function k(u){o().expandAll(u)}function y(u=null){o().insertNodeByKey({parentKey:u,node:{title:"\u65B0\u589E\u8282\u70B9",key:"2-2-2"},push:"push"})}function E(u){o().deleteNodeByKey(u)}function D(u){o().updateNodeByKey(u,{title:"parent2-new"})}return{treeData:A,treeRef:t,handleLevel:f,handleSetCheckData:m,handleGetCheckData:B,handleSetSelectData:n,handleGetSelectData:d,handleSetExpandData:i,handleGetExpandData:r,appendNodeByKey:y,deleteNodeByKey:E,updateNodeByKey:D,checkAll:C,expandAll:k}}}),b={class:"mb-4"},w={class:"mb-4"},L={class:"mb-4"};function P(t,e,o,f,m,B){const n=p("a-button"),d=p("BasicTree"),i=p("PageWrapper");return S(),$(i,{title:"Tree\u51FD\u6570\u64CD\u4F5C\u793A\u4F8B",contentBackground:"",contentClass:"p-4"},{default:a(()=>[c("div",b,[l(n,{onClick:e[0]||(e[0]=r=>t.expandAll(!0)),class:"mr-2"},{default:a(()=>[s(" \u5C55\u5F00\u5168\u90E8 ")]),_:1}),l(n,{onClick:e[1]||(e[1]=r=>t.expandAll(!1)),class:"mr-2"},{default:a(()=>[s(" \u6298\u53E0\u5168\u90E8 ")]),_:1}),l(n,{onClick:e[2]||(e[2]=r=>t.checkAll(!0)),class:"mr-2"},{default:a(()=>[s(" \u5168\u9009 ")]),_:1}),l(n,{onClick:e[3]||(e[3]=r=>t.checkAll(!1)),class:"mr-2"},{default:a(()=>[s(" \u5168\u4E0D\u9009 ")]),_:1}),l(n,{onClick:e[4]||(e[4]=r=>t.handleLevel(2)),class:"mr-2"},{default:a(()=>[s(" \u663E\u793A\u5230\u7B2C2\u7EA7 ")]),_:1}),l(n,{onClick:e[5]||(e[5]=r=>t.handleLevel(1)),class:"mr-2"},{default:a(()=>[s(" \u663E\u793A\u5230\u7B2C1\u7EA7 ")]),_:1})]),c("div",w,[l(n,{onClick:t.handleSetCheckData,class:"mr-2"},{default:a(()=>[s(" \u8BBE\u7F6E\u52FE\u9009\u6570\u636E ")]),_:1},8,["onClick"]),l(n,{onClick:t.handleGetCheckData,class:"mr-2"},{default:a(()=>[s(" \u83B7\u53D6\u52FE\u9009\u6570\u636E ")]),_:1},8,["onClick"]),l(n,{onClick:t.handleSetSelectData,class:"mr-2"},{default:a(()=>[s(" \u8BBE\u7F6E\u9009\u4E2D\u6570\u636E ")]),_:1},8,["onClick"]),l(n,{onClick:t.handleGetSelectData,class:"mr-2"},{default:a(()=>[s(" \u83B7\u53D6\u9009\u4E2D\u6570\u636E ")]),_:1},8,["onClick"]),l(n,{onClick:t.handleSetExpandData,class:"mr-2"},{default:a(()=>[s(" \u8BBE\u7F6E\u5C55\u5F00\u6570\u636E ")]),_:1},8,["onClick"]),l(n,{onClick:t.handleGetExpandData,class:"mr-2"},{default:a(()=>[s(" \u83B7\u53D6\u5C55\u5F00\u6570\u636E ")]),_:1},8,["onClick"])]),c("div",L,[l(n,{onClick:e[6]||(e[6]=r=>t.appendNodeByKey(null)),class:"mr-2"},{default:a(()=>[s(" \u6DFB\u52A0\u6839\u8282\u70B9 ")]),_:1}),l(n,{onClick:e[7]||(e[7]=r=>t.appendNodeByKey("2-2")),class:"mr-2"},{default:a(()=>[s(" \u6DFB\u52A0\u5728parent3\u5185\u6DFB\u52A0\u8282\u70B9 ")]),_:1}),l(n,{onClick:e[8]||(e[8]=r=>t.deleteNodeByKey("2-2")),class:"mr-2"},{default:a(()=>[s(" \u5220\u9664parent3\u8282\u70B9 ")]),_:1}),l(n,{onClick:e[9]||(e[9]=r=>t.updateNodeByKey("1-1")),class:"mr-2"},{default:a(()=>[s(" \u66F4\u65B0parent2\u8282\u70B9 ")]),_:1})]),l(d,{treeData:t.treeData,title:"\u51FD\u6570\u64CD\u4F5C",ref:"treeRef",checkable:!0},null,8,["treeData"])]),_:1})}var ee=F(T,[["render",P]]);export{ee as default};