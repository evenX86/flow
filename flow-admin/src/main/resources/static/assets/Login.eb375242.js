import{_ as e,a as o,b as r,u as s,c as t,d as l,e as n}from"./index.10276049.js";import i from"./LoginForm.95ea4dfc.js";import a from"./ForgetPasswordForm.b0e0bbe2.js";import m from"./RegisterForm.46283d48.js";import p from"./MobileForm.b4b46d79.js";import x from"./QrCodeForm.40b1a980.js";import{k as d,f as c,K as f,o as g,n as u,X as b,q as w,s as h}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./LoginFormTitle.95c9f389.js";import"./CountdownInput.22be6abe.js";import"./StrengthMeter.a88f057e.js";import"./Qrcode.5b294849.js";import"./download.ec87ce83.js";var F=d({name:"Login",components:{AppLogo:e,LoginForm:i,ForgetPasswordForm:a,RegisterForm:m,MobileForm:p,QrCodeForm:x,AppLocalePicker:o,AppDarkModeToggle:r},props:{sessionTimeout:{type:Boolean}},setup(){const e=s(),{prefixCls:o}=t("login"),{t:r}=l(),i=n();return{t:r,prefixCls:o,title:c((()=>{var o;return null!=(o=null==e?void 0:e.title)?o:""})),showLocale:i.getShowPicker}}});const v={class:"-enter-x xl:hidden"},j={class:"container relative h-full py-2 mx-auto sm:px-10"},y={class:"flex h-full"},k={class:"hidden xl:flex xl:flex-col xl:w-6/12 min-h-full mr-4 pl-4"},L={class:"my-auto"},T={class:"mt-10 font-medium text-white -enter-x"},C={class:"mt-4 text-3xl inline-block"},A={class:"mt-5 text-md text-white font-normal dark:text-gray-500 -enter-x"},M={class:"h-full xl:h-auto flex py-5 xl:py-0 xl:my-0 w-full xl:w-6/12"};F.render=function(e,o,r,s,t,l){const n=f("AppLocalePicker"),i=f("AppDarkModeToggle"),a=f("AppLogo"),m=f("LoginForm"),p=f("ForgetPasswordForm"),x=f("RegisterForm"),d=f("MobileForm"),c=f("QrCodeForm");return g(),u("div",{class:[e.prefixCls,"relative w-full h-full px-4"]},[e.sessionTimeout?b("",!0):(g(),u(n,{key:0,class:"absolute top-4 right-4 enter-x text-white xl:text-gray-600",showText:!1})),e.sessionTimeout?b("",!0):(g(),u(i,{key:1,class:"absolute top-3 right-7 enter-x"})),w("span",v,[w(a,{alwaysShowTitle:!0})]),w("div",j,[w("div",y,[w("div",k,[w(a,{class:"-enter-x"}),w("div",L,[w("img",{alt:e.title,src:"/assets/login-box-bg.9027741f.svg",class:"w-1/2 -mt-16 -enter-x"},null,8,["alt"]),w("div",T,[w("span",C,h(e.t("sys.login.signInTitle")),1)]),w("div",A,h(e.t("sys.login.signInDesc")),1)])]),w("div",M,[w("div",{class:[`${e.prefixCls}-form`,"\r\n              my-auto\r\n              mx-auto\r\n              xl:ml-20\r\n              xl:bg-transparent\r\n              px-5\r\n              py-8\r\n              sm:px-8\r\n              xl:p-4\r\n              rounded-md\r\n              shadow-md\r\n              xl:shadow-none\r\n              w-full\r\n              sm:w-3/4\r\n              lg:w-2/4\r\n              xl:w-auto\r\n              enter-x\r\n              relative\r\n            "]},[w(m),w(p),w(x),w(d),w(c)],2)])])])],2)};export default F;