import{P as A}from"./index.6f4a9d56.js";import{az as h,a as I,cE as B,w as a,v as E,aB as s,o as n,k as y,B as u,p as r,n as i,i as c,l,t as F}from"./index.bbfb8c5d.js";import{C as D,a as k}from"./index.954f6b75.js";import{u as w}from"./upload.3d2578b9.js";import{h as P}from"./header.d801b988.js";import"./index.b7fa4bcc.js";import"./index.8643b1cc.js";import"./useSize.2da926c0.js";import"./eagerComputed.2918d49d.js";import"./useWindowSizeFn.daa22200.js";import"./useContentViewHeight.ce579b14.js";import"./ArrowLeftOutlined.32f822b8.js";import"./index.40637d17.js";import"./transButton.15723253.js";import"./index.dbc537d6.js";import"./useFlexGapSupport.ae09cf13.js";import"./index.d0de3318.js";import"./_baseIteratee.6836a2b9.js";import"./get.476f8b78.js";import"./DeleteOutlined.426a7a56.js";import"./index.21d11494.js";import"./useRefs.c946e576.js";import"./Form.64d057a8.js";import"./Col.bf638c61.js";import"./index.56ac9033.js";import"./FullscreenOutlined.7b1f5985.js";import"./base64Conver.08b9f4ec.js";const $=I({components:{PageWrapper:A,CropperImage:D,CollapseContainer:B,CropperAvatar:k},setup(){var t;const e=a(""),m=a(""),d=a(""),C=a(""),v=E(),g=a(((t=v.getUserInfo)==null?void 0:t.avatar)||"");function _({imgBase64:p,imgInfo:f}){e.value=f,m.value=p}function o({imgBase64:p,imgInfo:f}){d.value=f,C.value=p}return{img:P,info:e,circleInfo:d,cropperImg:m,circleImg:C,handleCropend:_,handleCircleCropend:o,avatar:g,uploadApi:w}}}),N={class:"container p-4"},S={class:"cropper-container mr-10"},V=["src"],W={key:0},U={class:"container p-4"},z={class:"cropper-container mr-10"},b=["src"],j={key:0};function q(e,m,d,C,v,g){const _=s("CropperAvatar"),o=s("CollapseContainer"),t=s("CropperImage"),p=s("PageWrapper");return n(),y(p,{title:"\u56FE\u7247\u88C1\u526A\u793A\u4F8B",content:"\u9700\u8981\u5F00\u542F\u6D4B\u8BD5\u63A5\u53E3\u670D\u52A1\u624D\u80FD\u8FDB\u884C\u4E0A\u4F20\u6D4B\u8BD5\uFF01"},{default:u(()=>[r(o,{title:"\u5934\u50CF\u88C1\u526A"},{default:u(()=>[r(_,{uploadApi:e.uploadApi,value:e.avatar},null,8,["uploadApi","value"])]),_:1}),r(o,{title:"\u77E9\u5F62\u88C1\u526A",class:"my-4"},{default:u(()=>[i("div",N,[i("div",S,[r(t,{ref:"refCropper",src:e.img,onCropend:e.handleCropend,style:{width:"40vw"}},null,8,["src","onCropend"])]),e.cropperImg?(n(),c("img",{key:0,src:e.cropperImg,class:"croppered",alt:""},null,8,V)):l("",!0)]),e.cropperImg?(n(),c("p",W,"\u88C1\u526A\u540E\u56FE\u7247\u4FE1\u606F\uFF1A"+F(e.info),1)):l("",!0)]),_:1}),r(o,{title:"\u5706\u5F62\u88C1\u526A"},{default:u(()=>[i("div",U,[i("div",z,[r(t,{ref:"refCropper",src:e.img,onCropend:e.handleCircleCropend,style:{width:"40vw"},circled:""},null,8,["src","onCropend"])]),e.circleImg?(n(),c("img",{key:0,src:e.circleImg,class:"croppered"},null,8,b)):l("",!0)]),e.circleImg?(n(),c("p",j,"\u88C1\u526A\u540E\u56FE\u7247\u4FE1\u606F\uFF1A"+F(e.circleInfo),1)):l("",!0)]),_:1})]),_:1})}var de=h($,[["render",q],["__scopeId","data-v-9d983438"]]);export{de as default};