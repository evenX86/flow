var m=(t,e,n)=>new Promise((s,u)=>{var l=a=>{try{r(n.next(a))}catch(c){u(c)}},o=a=>{try{r(n.throw(a))}catch(c){u(c)}},r=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,o);r((n=n.apply(t,e)).next())});import{w as I,aB as h,X as C,e as S,av as z,ar as F,aq as A,h as d,aC as N,v as f,aD as T,a as g,C as k,L as w,q as D,aE as q,aF as p,o as y,i as _,z as v,B as E,t as L,aG as $,b as O,aH as P,aI as R,aJ as j,aK as V,aL as G,m as H,N as B}from"./index.72db8407.js";function J(t,e="value",n="change",s){const u=N(),l=u==null?void 0:u.emit,o=I({value:t[e]}),r=h(o),a=i=>{o.value=i};return C(()=>{o.value=t[e]}),[S({get(){return o.value},set(i){z(i,r.value)||(o.value=i,F(()=>{l==null||l(n,i,...A(d(s))||[])}))}}),a,r]}function K(t){const e=f(t),n=f(!1);let s;function u(){s&&window.clearInterval(s)}function l(){n.value=!1,u(),s=null}function o(){d(n)||!!s||(n.value=!0,s=setInterval(()=>{d(e)===1?(l(),e.value=t):e.value-=1},1e3))}function r(){e.value=t,l()}function a(){r(),o()}return T(()=>{r()}),{start:o,reset:r,restart:a,clear:u,stop:l,currentCount:e,isStart:n}}const U={value:{type:[Object,Number,String,Array]},count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},X=g({name:"CountButton",components:{Button:k},props:U,setup(t){const e=f(!1),{currentCount:n,isStart:s,start:u,reset:l}=K(t.count),{t:o}=D(),r=S(()=>d(s)?o("component.countdown.sendText",[d(n)]):o("component.countdown.normalText"));C(()=>{t.value===void 0&&l()});function a(){return m(this,null,function*(){const{beforeStartFunc:c}=t;if(c&&q(c)){e.value=!0;try{(yield c())&&u()}finally{e.value=!1}}else u()})}return{handleStart:a,currentCount:n,loading:e,getButtonText:r,isStart:s}}});function M(t,e,n,s,u,l){const o=p("Button");return y(),_(o,$(t.$attrs,{disabled:t.isStart,onClick:t.handleStart,loading:t.loading}),{default:v(()=>[E(L(t.getButtonText),1)]),_:1},16,["disabled","onClick","loading"])}var b=w(X,[["render",M]]);const Q={value:{type:String},size:{type:String,validator:t=>["default","large","small"].includes(t)},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},W=g({name:"CountDownInput",components:{CountButton:b},inheritAttrs:!1,props:Q,setup(t){const{prefixCls:e}=O("countdown-input"),[n]=J(t);return{prefixCls:e,state:n}}});function Y(t,e,n,s,u,l){const o=p("CountButton"),r=p("a-input");return y(),_(r,$(t.$attrs,{class:t.prefixCls,size:t.size,value:t.state}),P({addonAfter:v(()=>[H(o,{size:t.size,count:t.count,value:t.state,beforeStartFunc:t.sendCodeApi},null,8,["size","count","value","beforeStartFunc"])]),_:2},[R(Object.keys(t.$slots).filter(a=>a!=="addonAfter"),a=>({name:a,fn:v(c=>[j(t.$slots,a,V(G(c||{})))])}))]),1040,["class","size","value"])}var Z=w(W,[["render",Y]]);const et=B(Z);B(b);export{et as C,J as u};