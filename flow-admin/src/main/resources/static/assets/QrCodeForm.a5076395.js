import{_ as e,u as s,L as a}from"./LoginFormTitle.77709d12.js";import{y as n,aN as t,aZ as o,j as r,u as i,Z as l,B as c,F as d,v as m,a2 as g,a9 as u,J as f,a7 as x,a8 as p}from"./vendor.880b4c6c.js";/* empty css              */import{Q as v}from"./index.ecde9735.js";import{e as j}from"./index.63ccfb82.js";import"./download.41df5c96.js";import"./base64Conver.bb012c73.js";var C=n({name:"QrCodeForm",components:{Button:t,QrCode:v,Divider:o,LoginFormTitle:e},setup(){const{t:e}=j(),{handleBackLogin:n,getLoginState:t}=s();return{t:e,handleBackLogin:n,qrCodeUrl:"https://vvbin.cn/next/login",getShow:r((()=>i(t)===a.QR_CODE))}}});const b={class:"enter-x min-w-64 min-h-64"};C.render=function(e,s,a,n,t,o){const r=l("LoginFormTitle"),i=l("QrCode"),v=l("Divider"),j=l("Button");return e.getShow?(c(),d(x,{key:0},[m(r,{class:"enter-x"}),m("div",b,[m(i,{value:e.qrCodeUrl,class:"enter-x flex justify-center xl:justify-start",width:280},null,8,["value"]),m(v,{class:"enter-x"},{default:g((()=>[u(f(e.t("sys.login.scanSign")),1)])),_:1}),m(j,{size:"large",block:"",class:"mt-4 enter-x",onClick:e.handleBackLogin},{default:g((()=>[u(f(e.t("sys.login.backSignIn")),1)])),_:1},8,["onClick"])])],64)):p("",!0)};export default C;