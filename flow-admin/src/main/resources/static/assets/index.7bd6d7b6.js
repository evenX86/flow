import{M as e}from"./index.085ed5a6.js";import{P as a}from"./index.dfbcae78.js";import{z as n,r as t,u as o,Z as r,D as l,F as i,a3 as s,w as u,a9 as d}from"./vendor.11d66826.js";import"./index.1bc1d740.js";import"./index.037585c2.js";import"./useWindowSizeFn.9fecf134.js";import"./onMountedOrActivated.17f3c81d.js";/* empty css              *//* empty css              */import"./useContentViewHeight.a8198af7.js";var c=n({components:{MarkDown:e,PageWrapper:a},setup(){const e=t(null),a=t("\n# title\n\n# content\n");return{value:a,toggleTheme:function(){const a=o(e);if(!a)return;a.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){a.value=e},clearValue:function(){a.value=""}}}});const f=d(" 黑暗主题 "),m=d(" 清空内容 ");c.render=function(e,a,n,t,o,d){const c=r("a-button"),p=r("MarkDown"),g=r("PageWrapper");return l(),i(g,{title:"MarkDown组件示例"},{default:s((()=>[u(c,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:s((()=>[f])),_:1},8,["onClick"]),u(c,{onClick:e.clearValue,class:"mb-2",type:"default"},{default:s((()=>[m])),_:1},8,["onClick"]),u(p,{value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a),onChange:e.handleChange,ref:"markDownRef",placeholder:"这是占位文本"},null,8,["value","onChange"])])),_:1})};export default c;