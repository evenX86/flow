import{dO as o}from"./index.bbfb8c5d.js";const g=e=>{const r=e&&{pageNum:e.pageNum,pageSize:e.pageSize};let l=e;const t=e.personalId;l&&(delete l.pageNum,delete l.pageSize,delete l.personalId);const s=t?`/flow/org/role/getPagerModelByPersonalId?personalId=${t}`:"/flow/org/role/getPagerModel",a={query:r,entity:l};return o.post({url:s,params:a})},p=e=>o.post({url:"/flow/org/role/getPersonalsByRole/"+e.roleId,params:e.personal}),d=e=>o.post({url:"/flow/org/role/saveOrUpdate",params:e}),c=e=>o.post({url:"/flow/org/personalRole/allocationPersonals/"+e.roleId,params:e.personalList}),i=e=>o.post({url:"/flow/org/role/delete",params:e}),u=e=>o.post({url:"/flow/org/role/checkEntityExist",params:e});export{p as a,c as b,u as c,i as d,g,d as s};