import{L as r,a as i,v as n,K as l,aF as s,o as d,i as m,z as u,l as f,b0 as p}from"./index.c5d747fc.js";import{C as h}from"./index.88e0a121.js";import"./index.296ee04a.js";import"./index.57253b57.js";import{u as c}from"./useECharts.bdf81571.js";import"./index.d8a8c0df.js";import"./index.4287c510.js";import"./useRefs.42a2da00.js";import"./PlusOutlined.20270b2a.js";import"./useFlexGapSupport.6f7d1d35.js";const b=i({components:{Card:h},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const a=n(null),{setOptions:t}=c(a);return l(()=>e.loading,()=>{e.loading||t({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{show:!0,orient:"vertical",left:"right",data:["S","A","B","C","D","E"]},series:[{color:["#00eebb","#ffeebb","#ff6600","#b6a2de","#fbb000","#00c7c9"],name:"\u4E2A\u4EBA\u7EE9\u6548",type:"pie",avoidLabelOverlap:!1,itemStyle:{borderRadius:4,borderColor:"#fff",borderWidth:2},label:{show:!0,position:"left"},emphasis:{label:{show:!0,fontSize:"12",fontWeight:"bold"},shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"},labelLine:{show:!1},data:[{value:1048,name:"S"},{value:735,name:"A"},{value:580,name:"B"},{value:484,name:"C"},{value:334,name:"D"},{value:484,name:"E"}],animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*100}}]})},{immediate:!0}),{chartRef:a}}});function g(e,a,t,v,w,C){const o=s("Card");return d(),m(o,{title:"\u4E2A\u4EBA\u7EE9\u6548",loading:e.loading},{default:u(()=>[f("div",{ref:"chartRef",style:p({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"])}var z=r(b,[["render",g]]);export{z as default};