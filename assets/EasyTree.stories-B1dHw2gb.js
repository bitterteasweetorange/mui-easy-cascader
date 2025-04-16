import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as l,R as S}from"./index-D4lIrffr.js";import{B as E,i as g}from"./isLeafNode-BynM3cPO.js";import{m as o}from"./mock-BA6x8glS.js";import{E as c}from"./EasyTree-GIv8hmAR.js";import{S as y,C as f}from"./Chip-Clv39w7o.js";import{I as h}from"./index.module-DrHIWsir.js";import{E as N}from"./EditOutlined-DDEh9wMM.js";import"./getRootIds-BDZTszT8.js";import"./useTheme-C1eaTmxe.js";import"./EasyHighlight-CeowNmLs.js";import"./utils-V0gmEr-R.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./CircularProgress-_geyx4et.js";const P={title:"Tree/EasyTree",component:c,decorators:e=>t.jsx(E,{sx:{width:300},children:t.jsx(e,{})}),args:{data:o,getNodeLabel:e=>e.name,selectMode:"noSelect",search:""},argTypes:{data:{table:{category:"common props"}},getNodeLabel:{table:{category:"common props"}},endAdornment:{table:{category:"common props"}},startAdornment:{table:{category:"common props"}},selectedId:{table:{type:{summary:"string | number | null"}},control:"radio",options:o.map(e=>e.id)},expandedId:{table:{type:{summary:"string[] | number[]"},defaultValue:{summary:"[]"}},control:!1},selectMode:{table:{type:{summary:"leafOnly | noSelect | all"},defaultValue:{summary:"noSelect"}}}}},p={render:e=>{const[d,s]=l.useState([0]);return t.jsx(c,{...e,expandedId:d,setExpandedId:s,endAdornment:(n,a)=>!n.age||!g(n)?null:t.jsx(f,{color:"success",size:"small",label:n.age}),startAdornment:(n,a)=>a===1?t.jsx(y,{color:"error"}):null})}},u={args:{selectMode:"leafOnly"},render:e=>{const[d,s]=S.useState(o[2].id),n=o.find(r=>r.id===d),[a,x]=l.useState([0]);return t.jsxs(t.Fragment,{children:["you select: ",n?.name,t.jsx(c,{...e,expandedId:a,setExpandedId:x,selectedId:d,onSelect:r=>{s(r?.id??null)}})]})}},m={args:{selectMode:"all"},render:e=>{const[d,s]=S.useState(o[2].id),n=o.find(r=>r.id===d),[a,x]=l.useState([0]);return t.jsxs(t.Fragment,{children:["you select: ",n?.name,t.jsx(c,{...e,expandedId:a,setExpandedId:x,selectedId:d,onSelect:r=>{s(r?.id??null)}})]})}},i={render:e=>{const[d,s]=l.useState([0]);return t.jsx(c,{...e,expandedId:d,setExpandedId:s,actionButtons:()=>t.jsx(h,{size:"small",color:"error",onClick:n=>{n.stopPropagation(),alert("click action button")},children:t.jsx(N,{})})})}},I={args:{search:"1"},render:e=>{const[d,s]=l.useState([0]);return t.jsx(c,{...e,expandedId:d,setExpandedId:s})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [expandedId, setExpandedId] = useState<EasyId[]>([0]);
    return <EasyTree<MockShape> {...args} expandedId={expandedId} setExpandedId={setExpandedId} endAdornment={(node, _) => {
      if (!node.age) return null;
      if (!isLeafNode(node)) return null;
      return <Chip color="success" size="small" label={node.age} />;
    }} startAdornment={(_, depth) => {
      if (depth === 1) return <StarOutline color="error" />;
      return null;
    }} />;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    selectMode: 'leafOnly'
  },
  render: args => {
    const [selectedId, setSelectedId] = React.useState<EasyId | null>(mockNodes[2].id);
    const selectedNode = mockNodes.find(node => node.id === selectedId);
    const [expandedId, setExpandedId] = useState<EasyId[]>([0]);
    return <>
        you select: {selectedNode?.name}
        <EasyTree<MockShape> {...args} expandedId={expandedId} setExpandedId={setExpandedId} selectedId={selectedId} onSelect={node => {
        setSelectedId(node?.id ?? null);
      }} />
      </>;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    selectMode: 'all'
  },
  render: args => {
    const [selectedId, setSelectedId] = React.useState<EasyId | null>(mockNodes[2].id);
    const selectedNode = mockNodes.find(node => node.id === selectedId);
    const [expandedId, setExpandedId] = useState<EasyId[]>([0]);
    return <>
        you select: {selectedNode?.name}
        <EasyTree<MockShape> {...args} expandedId={expandedId} setExpandedId={setExpandedId} selectedId={selectedId} onSelect={node => {
        setSelectedId(node?.id ?? null);
      }} />
      </>;
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [expandedId, setExpandedId] = useState<EasyId[]>([0]);
    return <EasyTree<MockShape> {...args} expandedId={expandedId} setExpandedId={setExpandedId} actionButtons={() => <IconButton size="small" color="error" onClick={e => {
      e.stopPropagation();
      alert('click action button');
    }}>
            <EditOutlined />
          </IconButton>} />;
  }
}`,...i.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    search: '1'
  },
  render: args => {
    const [expandedId, setExpandedId] = useState<EasyId[]>([0]);
    return <EasyTree<MockShape> {...args} expandedId={expandedId} setExpandedId={setExpandedId} />;
  }
}`,...I.parameters?.docs?.source}}};const V=["Default","SelectLeafOnly","SelectAllNodes","ActionButtons","Search"];export{i as ActionButtons,p as Default,I as Search,m as SelectAllNodes,u as SelectLeafOnly,V as __namedExportsOrder,P as default};
