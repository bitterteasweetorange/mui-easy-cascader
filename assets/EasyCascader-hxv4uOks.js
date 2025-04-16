import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-D4lIrffr.js";import{g as b,L as w,K as N}from"./getRootIds-BDZTszT8.js";import{B as L,M as j,a as A,i as q}from"./isLeafNode-BynM3cPO.js";import{P as R}from"./Paper-Cm1zrjdt.js";function v(o){const{data:t,getNodeLabel:d,startAdornment:s,endAdornment:u,selectedId:r,onSelect:f,autoFocusItem:c}=o,l=x.useMemo(()=>{if(r==null)return[];const m=t.find(i=>i.id===r);if(!m)return[];const n=m.pathId;return!n||n.length===0?[r]:[...n,r]},[r,t]),y=b(t);return a.jsx(L,{display:"flex",children:new Array((l?.length||0)+1).fill(null).map((m,n)=>{const i=l?.[n],g=t.find(e=>e.id===l?.[n-1]),h=n===0?y:g?.childrenId||[],I=t.filter(e=>h.includes(e.id)),T=E(i,c,t);return a.jsx(R,{children:a.jsx(j,{autoFocusItem:c,variant:T,children:I.map(e=>{const p=i===e.id;return a.jsxs(A,{selected:p,onClick:()=>{f?.(e)},sx:{display:"flex",alignItems:"center",gap:1,flexGrow:1},children:[s?.(e,n),a.jsx(w,{children:d(e)}),u?.(e,n),e.childrenId&&e.childrenId.length!==0&&a.jsx(N,{color:p?"primary":"disabled"})]},e.id)})})},n)})})}function E(o,t,d){if(!t)return"selectedMenu";const s=d.find(r=>r.id===o);return s&&q(s)?"selectedMenu":"menu"}v.__docgenInfo={description:"",methods:[],displayName:"EasyCascader",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"all nodes data"},getNodeLabel:{required:!0,tsType:{name:"signature",type:"function",raw:"(node: T) => string",signature:{arguments:[{type:{name:"T"},name:"node"}],return:{name:"string"}}},description:"text to be displayed in the list"},startAdornment:{required:!1,tsType:{name:"signature",type:"function",raw:"(node: T, depth: number) => ReactNode",signature:{arguments:[{type:{name:"T"},name:"node"},{type:{name:"number"},name:"depth"}],return:{name:"ReactNode"}}},description:`start input adornment for the list
@param:
depth starts from 0
isLeaf is true if the node is a leaf node`},endAdornment:{required:!1,tsType:{name:"signature",type:"function",raw:"(node: T, depth: number) => ReactNode",signature:{arguments:[{type:{name:"T"},name:"node"},{type:{name:"number"},name:"depth"}],return:{name:"ReactNode"}}},description:`end input adornment for the list
@param:
depth starts from 0
isLeaf is true if the node is a leaf node`},selectedId:{required:!1,tsType:{name:"union",raw:"EasyId | null",elements:[{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},{name:"null"}]},description:"all nodes can be selected"},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(node: T | null) => void",signature:{arguments:[{type:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},name:"node"}],return:{name:"void"}}},description:"callback when select a node"},autoFocusItem:{required:!1,tsType:{name:"boolean"},description:"if true, will focus the selected item to enable keyboard navigation"}}};export{v as E};
