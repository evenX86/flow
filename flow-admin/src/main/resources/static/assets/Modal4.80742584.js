import{B as l,a as c}from"./index.a492e5cd.js";import{B as d}from"./BasicForm.027cbf67.js";import{u}from"./useForm.81406efc.js";import{a as f,x as B,az as g,an as h,aB as p,i as C,l as _,C as b,p as R,q as V,aC as v}from"./index.e61ad282.js";import"./useWindowSizeFn.27de1b1b.js";import"./FullscreenOutlined.3a424424.js";/* empty css              *//* empty css               */import"./index.9f50e000.js";import"./index.ce1ab63a.js";import"./Checkbox.bb68ead3.js";import"./index.99ef178c.js";import"./index.6e0a0264.js";import"./index.8f86dec4.js";import"./index.9f299dd3.js";import"./index.9233793b.js";import"./get.bca7403a.js";import"./index.d92fc3ac.js";import"./eagerComputed.d3c262c3.js";import"./index.6749d186.js";import"./_baseIteratee.7ece590b.js";import"./DeleteOutlined.3b47e95d.js";import"./index.114515de.js";import"./useRefs.0c428178.js";import"./Form.8b25370b.js";import"./Col.f72eb8d0.js";import"./useFlexGapSupport.ed2a5fc1.js";import"./useSize.5a37866d.js";import"./transButton.2c723edc.js";import"./index.8ba0bfed.js";import"./index.dbdde179.js";import"./index.e8295ad9.js";import"./uuid.2b29000c.js";import"./download.810571da.js";import"./base64Conver.08b9f4ec.js";import"./index.ebd81f61.js";import"./index.6d7de824.js";import"./uniqBy.8c214189.js";const n=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:24},defaultValue:"111"},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:24}}],F=f({components:{BasicModal:l,BasicForm:d},props:{userData:{type:Object}},setup(e){const t=B({}),[i,{}]=u({labelWidth:120,schemas:n,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=c(o=>{o&&r(o)});function r(o){t.value={field2:o.data,field1:o.info}}function a(o){o&&e.userData&&h(()=>r(e.userData))}return{register:s,schemas:n,registerForm:i,model:t,handleVisibleChange:a}}}),M={class:"pt-3px pr-3px"};function D(e,t,i,s,r,a){const o=p("BasicForm"),m=p("BasicModal");return C(),_(m,v(e.$attrs,{onRegister:e.register,title:"Modal Title",onVisibleChange:e.handleVisibleChange}),{default:b(()=>[R("div",M,[V(o,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])]),_:1},16,["onRegister","onVisibleChange"])}var co=g(F,[["render",D]]);export{co as default};