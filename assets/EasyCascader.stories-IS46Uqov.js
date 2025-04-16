import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{R as u}from"./index-D4lIrffr.js";import{i}from"./isLeafNode-BynM3cPO.js";import{m as s}from"./mock-BA6x8glS.js";import{E as l}from"./EasyCascader-hxv4uOks.js";import{S as p,C as I}from"./Chip-Clv39w7o.js";import"./getRootIds-BDZTszT8.js";import"./useTheme-C1eaTmxe.js";import"./Paper-Cm1zrjdt.js";const j={title:"Cascader/EasyCascader",component:l,args:{data:s,getNodeLabel:t=>t.name,autoFocusItem:!1},argTypes:{data:{table:{category:"common props"}},getNodeLabel:{table:{category:"common props"}},endAdornment:{table:{category:"common props"}},startAdornment:{table:{category:"common props"}},selectedId:{table:{type:{summary:"string | number | null"}},control:"radio",options:s.map(t=>t.id)},onSelect:{table:{type:{summary:"(node: T | null) => void"}}}}},n={render:t=>{const[d,a]=u.useState(s[2].id),c=s.find(e=>e.id===d);return o.jsxs(o.Fragment,{children:["you select: ",c?.name,o.jsx(l,{...t,data:s,selectedId:t.selectedId??d,onSelect:e=>{a(e?.id??null)},autoFocusItem:!0,endAdornment:(e,m)=>!e.age||!i(e)?null:o.jsx(I,{color:"success",size:"small",label:e.age}),startAdornment:(e,m)=>m===1?o.jsx(p,{color:"error"}):null})]})}},r={render:t=>{const[d,a]=u.useState(null),c=s.find(e=>e.id===d);return o.jsxs(o.Fragment,{children:["you select: ",c?.name,o.jsx(l,{...t,data:s,selectedId:t.selectedId??d,onSelect:e=>{a(e?.id??null)},autoFocusItem:!0})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedId, setSelectedId] = React.useState<EasyId | null>(mockNodes[2].id);
    const selectedNode = mockNodes.find(node => node.id === selectedId);
    return <>
        you select: {selectedNode?.name}
        <EasyCascader<MockShape> {...args} data={mockNodes} selectedId={args.selectedId ?? selectedId} onSelect={node => {
        setSelectedId(node?.id ?? null);
      }} autoFocusItem endAdornment={(node, _) => {
        if (!node.age) return null;
        if (!isLeafNode(node)) return null;
        return <Chip color="success" size="small" label={node.age} />;
      }} startAdornment={(_, depth) => {
        if (depth === 1) return <StarOutline color="error" />;
        return null;
      }} />
      </>;
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedId, setSelectedId] = React.useState<EasyId | null>(null);
    const selectedNode = mockNodes.find(node => node.id === selectedId);
    return <>
        you select: {selectedNode?.name}
        <EasyCascader<MockShape> {...args} data={mockNodes} selectedId={args.selectedId ?? selectedId} onSelect={node => {
        setSelectedId(node?.id ?? null);
      }} autoFocusItem />
      </>;
  }
}`,...r.parameters?.docs?.source}}};const k=["Default","KeyboardEvent"];export{n as Default,r as KeyboardEvent,k as __namedExportsOrder,j as default};
