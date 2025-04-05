import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{R as i}from"./index-D4lIrffr.js";import{m as l,S as p,C as g}from"./mock-CxIDIuoM.js";import{E as m}from"./EasyFlatList-Be-2E8m8.js";const b={title:"component/EasyFlatList",component:m,args:{data:l,getNodeLabel:e=>e.name,search:"",autoFocusItem:!1},argTypes:{data:{table:{category:"common props"}},getNodeLabel:{table:{category:"common props"}},endAdornment:{table:{category:"common props"}},startAdornment:{table:{category:"common props"}},search:{table:{type:{summary:"string | null"}},control:"text"},selectedId:{table:{type:{summary:"string | number | null"}},control:"radio",options:l.map(e=>e.id)},onSelect:{table:{type:{summary:"(node: T | null) => void"}}}}},s={},o={args:{search:"0"}},n={args:{endAdornment:(e,t,d)=>!e.age||!d?null:a.jsx(g,{color:"success",size:"small",label:e.age}),startAdornment:(e,t)=>t===1?a.jsx(p,{color:"error"}):null}},c={render:e=>{const[t,d]=i.useState(3),u=e.data?.find(r=>r.id===t);return a.jsxs(a.Fragment,{children:["you select: ",u?.name,a.jsx(m,{search:"0",data:e.data||l,getNodeLabel:r=>r.name,selectedId:t,onSelect:r=>{d(r?.id??null)},autoFocusItem:!0})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    search: '0'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    endAdornment: (node, _, isLeaf) => {
      if (!node.age) return null;
      if (!isLeaf) return null;
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
}`,...c.parameters?.docs?.source}}};const I=["Default","Search","Adornment","Select"];export{n as Adornment,s as Default,o as Search,c as Select,I as __namedExportsOrder,b as default};
