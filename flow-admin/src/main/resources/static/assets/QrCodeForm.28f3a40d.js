import{_ as e,u as s,L as a}from"./LoginFormTitle.35aa6ba8.js";import{j as n,aL as t,aV as o,i as r,u as i,K as l,o as d,m as c,n as m,Q as f,Y as g,q as u,V as x,X as p}from"./vendor.686fd1d4.js";/* empty css              */import{Q as j}from"./index.c90b0ad7.js";import{e as v}from"./index.f769efd5.js";import"./download.d628f07d.js";import"./base64Conver.bb012c73.js";var b=n({name:"QrCodeForm",components:{Button:t,QrCode:j,Divider:o,LoginFormTitle:e},setup(){const{t:e}=v(),{handleBackLogin:n,getLoginState:t}=s();return{t:e,handleBackLogin:n,qrCodeUrl:"https://vvbin.cn/next/login",getShow:r((()=>i(t)===a.QR_CODE))}}});const C={class:"enter-x min-w-64 min-h-64"};b.render=function(e,s,a,n,t,o){const r=l("LoginFormTitle"),i=l("QrCode"),j=l("Divider"),v=l("Button");return e.getShow?(d(),c(x,{key:0},[m(r,{class:"enter-x"}),m("div",C,[m(i,{value:e.qrCodeUrl,class:"enter-x flex justify-center xl:justify-start",width:280},null,8,["value"]),m(j,{class:"enter-x"},{default:f((()=>[g(u(e.t("sys.login.scanSign")),1)])),_:1}),m(v,{size:"large",block:"",class:"mt-4 enter-x",onClick:e.handleBackLogin},{default:f((()=>[g(u(e.t("sys.login.backSignIn")),1)])),_:1},8,["onClick"])])],64)):p("",!0)};export default b;