import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{R as i}from"./index-D4lIrffr.js";import{i as p}from"./isLeafNode-BynM3cPO.js";import{m as d}from"./mock-BA6x8glS.js";import{E as l}from"./EasyFlatList-F0hz_18W.js";import{S as g,C as S}from"./Chip-Clv39w7o.js";import"./EasyHighlight-CeowNmLs.js";const x={title:"component/EasyFlatList",component:l,args:{data:d,getNodeLabel:e=>e.name,search:"",autoFocusItem:!1},argTypes:{data:{table:{category:"common props"}},getNodeLabel:{table:{category:"common props"}},endAdornment:{table:{category:"common props"}},startAdornment:{table:{category:"common props"}},search:{table:{type:{summary:"string | null"}},control:"text"},selectedId:{table:{type:{summary:"string | number | null"}},control:"radio",options:d.map(e=>e.id)},onSelect:{table:{type:{summary:"(node: T | null) => void"}}}}},o={},s={args:{search:"0"}},n={args:{endAdornment:(e,r)=>!e.age||!p(e)?null:a.jsx(S,{color:"success",size:"small",label:e.age}),startAdornment:(e,r)=>r===1?a.jsx(g,{color:"error"}):null}},c={render:e=>{const[r,m]=i.useState(3),u=e.data?.find(t=>t.id===r);return a.jsxs(a.Fragment,{children:["you select: ",u?.name,a.jsx(l,{search:"0",data:e.data||d,getNodeLabel:t=>t.name,selectedId:r,onSelect:t=>{m(t?.id??null)},autoFocusItem:!0})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    search: '0'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    endAdornment: (node, _) => {
      if (!node.age) return null;
      if (!isLeafNode(node)) return null;
      return <Chip color="success" size="small" label={node.age} />;
    },
    startAdornment: (_, depth) => {
      if (depth === 1) return <StarOutline color="error" />;
      return null;
    }
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: Partial<EasyFlatListProps<MockShape>>) => {
    const [selectedId, setSelectedId] = React.useState<EasyId | null>(3);
    const selectedNode = args.data?.find(node => node.id === selectedId);
    return <>
        you select: {selectedNode?.name}
        <EasyFlatList<MockShape> search="0" data={args.data || mockNodes} getNodeLabel={node => node.name} selectedId={selectedId} onSelect={node => {
        setSelectedId(node?.id ?? null);
      }} autoFocusItem />
      </>;
  }
}`,...c.parameters?.docs?.source}}};const A=["Default","Search","Adornment","Select"];export{n as Adornment,o as Default,s as Search,c as Select,A as __namedExportsOrder,x as default};
