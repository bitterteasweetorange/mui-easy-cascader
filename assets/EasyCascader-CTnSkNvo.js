import{j as h}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-D4lIrffr.js";import{c as v,j as q,u as H,L as $,s as O,T as I,e as B,o as W,p as N,t as C,i as _,q as U,P as Z,M as z,v as j,w as D}from"./EasyFlatList-D15szM-x.js";function G(e){return typeof e=="string"}function K(e,t,n){return e===void 0||G(e)?t:{...t,ownerState:{...t.ownerState,...n}}}function J(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(s=>s.match(/^on[A-Z]/)&&typeof e[s]=="function"&&!t.includes(s)).forEach(s=>{n[s]=e[s]}),n}function R(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function Q(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:s,externalForwardedProps:o,className:a}=e;if(!t){const x=v(n?.className,a,o?.className,s?.className),T={...n?.style,...o?.style,...s?.style},p={...n,...o,...s};return x.length>0&&(p.className=x),Object.keys(T).length>0&&(p.style=T),{props:p,internalRef:void 0}}const c=J({...o,...s}),g=R(s),y=R(o),m=t(c),i=v(m?.className,n?.className,a,o?.className,s?.className),l={...m?.style,...n?.style,...o?.style,...s?.style},d={...m,...n,...y,...g};return i.length>0&&(d.className=i),Object.keys(l).length>0&&(d.style=l),{props:d,internalRef:m.ref}}function V(e,t,n){return typeof e=="function"?e(t,n):e}function S(e,t){const{className:n,elementType:s,ownerState:o,externalForwardedProps:a,internalForwardedProps:c,shouldForwardComponentProp:g=!1,...y}=t,{component:m,slots:i={[e]:void 0},slotProps:l={[e]:void 0},...d}=a,x=i[e]||s,T=V(l[e],o),{props:{component:p,...f},internalRef:r}=Q({className:n,...y,externalForwardedProps:e==="root"?d:void 0,externalSlotProps:T}),P=q(r,T?.ref,t.ref),u=e==="root"?p||m:p,w=K(x,{...e==="root"&&!m&&!i[e]&&c,...e!=="root"&&!i[e]&&c,...f,...u&&!g&&{as:u},...u&&g&&{component:u},ref:P},o);return[x,w]}const X=e=>{const{classes:t,inset:n,primary:s,secondary:o,dense:a}=e;return B({root:["root",n&&"inset",a&&"dense",s&&o&&"multiline"],primary:["primary"],secondary:["secondary"]},W,t)},Y=O("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${N.primary}`]:t.primary},{[`& .${N.secondary}`]:t.secondary},t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4,[`.${C.root}:where(& .${N.primary})`]:{display:"block"},[`.${C.root}:where(& .${N.secondary})`]:{display:"block"},variants:[{props:({ownerState:e})=>e.primary&&e.secondary,style:{marginTop:6,marginBottom:6}},{props:({ownerState:e})=>e.inset,style:{paddingLeft:56}}]}),ee=b.forwardRef(function(t,n){const s=H({props:t,name:"MuiListItemText"}),{children:o,className:a,disableTypography:c=!1,inset:g=!1,primary:y,primaryTypographyProps:m,secondary:i,secondaryTypographyProps:l,slots:d={},slotProps:x={},...T}=s,{dense:p}=b.useContext($);let f=y??o,r=i;const P={...s,disableTypography:c,inset:g,primary:!!f,secondary:!!r,dense:p},u=X(P),w={slots:d,slotProps:{primary:m,secondary:l,...x}},[E,F]=S("root",{className:v(u.root,a),elementType:Y,externalForwardedProps:{...w,...T},ownerState:P,ref:n}),[k,L]=S("primary",{className:u.primary,elementType:I,externalForwardedProps:w,ownerState:P}),[A,M]=S("secondary",{className:u.secondary,elementType:I,externalForwardedProps:w,ownerState:P});return f!=null&&f.type!==I&&!c&&(f=h.jsx(k,{variant:p?"body2":"body1",component:L?.variant?void 0:"span",...L,children:f})),r!=null&&r.type!==I&&!c&&(r=h.jsx(A,{variant:"body2",color:"textSecondary",...M,children:r})),h.jsxs(E,{...F,children:[f,r]})}),te=_(h.jsx("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"}));function ne(e){const{data:t,getNodeLabel:n,startAdornment:s,endAdornment:o,selectedId:a,onSelect:c,autoFocusItem:g}=e,y=b.useMemo(()=>{if(a==null)return[];const i=t.find(d=>d.id===a);if(!i)return[];const l=i.pathId;return!l||l.length===0?[a]:[...l,a]},[a,t]),m=t.filter(i=>!i.pathId||i.pathId.length===0).map(i=>i.id);return h.jsx(U,{display:"flex",children:new Array((y?.length||0)+1).fill(null).map((i,l)=>{const d=y?.[l],x=t.find(r=>r.id===y?.[l-1]),T=l===0?m:x?.childrenId||[],p=t.filter(r=>T.includes(r.id)),f=se(d,g,t);return h.jsx(Z,{children:h.jsx(z,{autoFocusItem:g,variant:f,children:p.map(r=>{const P=d===r.id,u=j(r);return h.jsxs(D,{selected:P,onClick:()=>{c?.(r)},sx:{display:"flex",alignItems:"center",gap:1,flexGrow:1},children:[s?.(r,l,u),h.jsx(ee,{children:n(r)}),o?.(r,l,u),r.childrenId&&r.childrenId.length!==0&&h.jsx(te,{color:P?"primary":"disabled"})]},r.id)})})},l)})})}function se(e,t,n){if(!t)return"selectedMenu";const s=n.find(a=>a.id===e);return s&&j(s)?"selectedMenu":"menu"}ne.__docgenInfo={description:"",methods:[],displayName:"EasyCascader",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"all nodes data"},getNodeLabel:{required:!0,tsType:{name:"signature",type:"function",raw:"(node: T) => string",signature:{arguments:[{type:{name:"T"},name:"node"}],return:{name:"string"}}},description:"text to be displayed in the list"},startAdornment:{required:!1,tsType:{name:"signature",type:"function",raw:"(node: T, depth: number, isLeaf: boolean) => ReactNode",signature:{arguments:[{type:{name:"T"},name:"node"},{type:{name:"number"},name:"depth"},{type:{name:"boolean"},name:"isLeaf"}],return:{name:"ReactNode"}}},description:`start input adornment for the list
@param:
depth starts from 0
isLeaf is true if the node is a leaf node`},endAdornment:{required:!1,tsType:{name:"signature",type:"function",raw:"(node: T, depth: number, isLeaf: boolean) => ReactNode",signature:{arguments:[{type:{name:"T"},name:"node"},{type:{name:"number"},name:"depth"},{type:{name:"boolean"},name:"isLeaf"}],return:{name:"ReactNode"}}},description:`end input adornment for the list
@param:
depth starts from 0
isLeaf is true if the node is a leaf node`},selectedId:{required:!0,tsType:{name:"union",raw:"EasyId | null",elements:[{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},{name:"null"}]},description:"all nodes can be selected"},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(node: T | null) => void",signature:{arguments:[{type:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},name:"node"}],return:{name:"void"}}},description:"callback when select a node"},autoFocusItem:{required:!1,tsType:{name:"boolean"},description:"if true, will focus the selected item to enable keyboard navigation"}}};export{ne as E,K as a,J as e,Q as m,V as r,S as u};
