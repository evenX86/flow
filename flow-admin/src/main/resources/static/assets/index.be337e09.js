var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r;import o from"./Step1.b0e8e59f.js";import p from"./Step2.0e70e787.js";import a from"./Step3.e9ab129a.js";import{P as s}from"./index.e083521e.js";import{j as d,cd as m,r as c,z as f,G as j,k as l,l as b,K as u,o as x,m as S,x as v,n as h,w as P,v as y,X as N}from"./vendor.686fd1d4.js";/* empty css              */import"./BasicForm.5fbfb734.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.eb9d6ed9.js";import"./index.2aa1bf44.js";/* empty css              *//* empty css              *//* empty css              */import"./index.2bb7e54d.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.6cc0299c.js";import"./base64Conver.bb012c73.js";import"./index.cab36059.js";import"./useForm.1ee1a774.js";import"./data.2505cb7f.js";/* empty css              *//* empty css              */import"./useContentViewHeight.2141a994.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var w=d({components:{Step1:o,Step2:p,Step3:a,PageWrapper:s,[m.name]:m,[m.Step.name]:m.Step},setup(){const e=c(0),o=f({initSetp2:!1,initSetp3:!1});return((e,o)=>{for(var p in o||(o={}))n.call(o,p)&&i(e,p,o[p]);if(t)for(var p of t(o))r.call(o,p)&&i(e,p,o[p]);return e})({current:e,handleStep1Next:function(t){e.value++,o.initSetp2=!0},handleStep2Next:function(t){e.value++,o.initSetp3=!0},handleRedo:function(){e.value=0,o.initSetp2=!1,o.initSetp3=!1},handleStepPrev:function(){e.value--}},j(o))}});const O=v();l("data-v-3b1653d3");const g={class:"step-form-form"},k={class:"mt-5"};b();const R=O(((e,t,n,r,i,o)=>{const p=u("a-step"),a=u("a-steps"),s=u("Step1"),d=u("Step2"),m=u("Step3"),c=u("PageWrapper");return x(),S(c,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:O((()=>[h("div",g,[h(a,{current:e.current},{default:O((()=>[h(p,{title:"填写转账信息"}),h(p,{title:"确认转账信息"}),h(p,{title:"完成"})])),_:1},8,["current"])]),h("div",k,[P(h(s,{onNext:e.handleStep1Next},null,8,["onNext"]),[[y,0===e.current]]),e.initSetp2?P((x(),S(d,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[y,1===e.current]]):N("",!0),e.initSetp3?P((x(),S(m,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[y,2===e.current]]):N("",!0)])])),_:1})}));w.render=R,w.__scopeId="data-v-3b1653d3";export default w;