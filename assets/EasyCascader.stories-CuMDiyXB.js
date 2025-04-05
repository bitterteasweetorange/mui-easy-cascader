import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{R as m}from"./index-D4lIrffr.js";import{m as s,S as p,C as I}from"./mock-CxIDIuoM.js";import{E as l}from"./EasyCascader-C8slUKny.js";import"./EasyFlatList-Be-2E8m8.js";const b={title:"Component/EasyCascader",component:l,args:{data:s,getNodeLabel:t=>t.name,autoFocusItem:!1},argTypes:{data:{table:{category:"common props"}},getNodeLabel:{table:{category:"common props"}},endAdornment:{table:{category:"common props"}},startAdornment:{table:{category:"common props"}},selectedId:{table:{type:{summary:"string | number | null"}},control:"radio",options:s.map(t=>t.id)},onSelect:{table:{type:{summary:"(node: T | null) => void"}}}}},o={render:t=>{const[d,a]=m.useState(s[2].id),c=s.find(e=>e.id===d);return n.jsxs(n.Fragment,{children:["you select: ",c?.name,n.jsx(l,{...t,data:s,selectedId:t.selectedId??d,onSelect:e=>{a(e?.id??null)},autoFocusItem:!0,endAdornment:(e,u,i)=>!e.age||!i?null:n.jsx(I,{color:"success",size:"small",label:e.age}),startAdornment:(e,u)=>u===1?n.jsx(p,{color:"error"}):null})]})}},r={render:t=>{const[d,a]=m.useState(null),c=s.find(e=>e.id===d);return n.jsxs(n.Fragment,{children:["you select: ",c?.name,n.jsx(l,{...t,data:s,selectedId:t.selectedId??d,onSelect:e=>{a(e?.id??null)},autoFocusItem:!0})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selectedId, setSelectedId] = React.useState<EasyId | null>(mockNodes[2].id);
    const selectedNode = mockNodes.find(node => node.id === selectedId);
    return <>
        you select: {selectedNode?.name}
        <EasyCascader<MockShape> {...args} data={mockNodes} selectedId={args.selectedId ?? selectedId} onSelect={node => {
        setSelectedId(node?.id ?? null);
      }} autoFocusItem endAdornment={(node, _, isLeaf) => {
        if (!node.age) return null;
        if (!isLeaf) return null;
        return <Chip color="success" size="small" label={node.age} />;
      }} startAdornment={(_, depth) => {
        if (depth === 1) return <StarOutline color="error" />;
        return null;
      }} />
      </>;
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const E=["Default","KeyboardEvent"];export{o as Default,r as KeyboardEvent,E as __namedExportsOrder,b as default};
