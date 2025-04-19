import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-D4lIrffr.js";import{m as y}from"./mock-BA6x8glS.js";import{E as I}from"./EasyTree-GIv8hmAR.js";import{u as T,A as g}from"./useEasyTree-C4Z4AhJ_.js";import{B as x}from"./isLeafNode-BynM3cPO.js";import{I as E}from"./index.module-DrHIWsir.js";import"./getRootIds-BDZTszT8.js";import"./useTheme-C1eaTmxe.js";import"./EasyHighlight-CeowNmLs.js";import"./utils-V0gmEr-R.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./CircularProgress-_geyx4et.js";const i=s.createContext(null),u=n=>{const{children:r,...a}=n;return e.jsx(i.Provider,{value:a,children:r})},f=()=>s.useContext(i);u.__docgenInfo={description:"",methods:[],displayName:"EasyTreeProvider",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},selectedId:{required:!0,tsType:{name:"union",raw:"EasyId | null",elements:[{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},{name:"null"}]},description:""},setSelectedId:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: EasyId | null) => void",signature:{arguments:[{type:{name:"union",raw:"EasyId | null",elements:[{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},{name:"null"}]},name:"id"}],return:{name:"void"}}},description:""},setData:{required:!0,tsType:{name:"Updater",elements:[{name:"Array",elements:[{name:"T"}],raw:"T[]"}],raw:"Updater<T[]>"},description:""},createNode:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  parentId: EasyId | null,
  newNode: Draft<Omit<T, 'childrenId' | 'pathId'>>,
) => void`,signature:{arguments:[{type:{name:"union",raw:"EasyId | null",elements:[{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},{name:"null"}]},name:"parentId"},{type:{name:"Draft",elements:[{name:"Omit",elements:[{name:"T"},{name:"union",raw:"'childrenId' | 'pathId'",elements:[{name:"literal",value:"'childrenId'"},{name:"literal",value:"'pathId'"}]}],raw:"Omit<T, 'childrenId' | 'pathId'>"}],raw:"Draft<Omit<T, 'childrenId' | 'pathId'>>"},name:"newNode"}],return:{name:"void"}}},description:""},updateNode:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: EasyId, node: Draft<T>) => void",signature:{arguments:[{type:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},name:"id"},{type:{name:"Draft",elements:[{name:"T"}],raw:"Draft<T>"},name:"node"}],return:{name:"void"}}},description:""},deleteNode:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: EasyId) => void",signature:{arguments:[{type:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},name:"id"}],return:{name:"void"}}},description:""},expandedIds:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]}],raw:"EasyId[]"},description:""},setExpandedId:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: EasyId[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]}],raw:"EasyId[]"},name:"id"}],return:{name:"void"}}},description:""}}};const M={title:"Tree/EasyTreeProvider",decorators:n=>e.jsx(x,{sx:{width:400},children:e.jsx(n,{})})},d={render:()=>{const n=T(),{expandedIds:r,setExpandedId:a,selectedId:o,setSelectedId:l,data:m,setData:c}=n;s.useEffect(()=>{c(y)},[]);const p=m.find(t=>t.id===o);return e.jsxs(u,{...n,children:["you select: ",p?.name,e.jsx("br",{}),e.jsx(I,{data:m,getNodeLabel:t=>t.name,expandedId:r,setExpandedId:a,selectedId:o,onSelect:t=>{l(t?.id??null)},selectMode:"all",actionButtons:t=>e.jsx(w,{node:t})})]})}};function w({node:n}){const{createNode:r}=f();return e.jsx(E,{color:"success",onClick:()=>{const a=n.id;r(a,{id:new Date().getTime(),name:new Date().getTime()+""})},children:e.jsx(g,{})})}d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const methods = useEasyTree<MockShape>();
    const {
      expandedIds: expandedId,
      setExpandedId,
      selectedId,
      setSelectedId,
      data,
      setData
    } = methods;
    useEffect(() => {
      setData(mockNodes);
    }, []);
    const selectedNode = data.find(node => node.id === selectedId);
    return <EasyTreeProvider {...methods}>
        you select: {selectedNode?.name}
        <br />
        <EasyTree<MockShape> data={data} getNodeLabel={node => node.name} expandedId={expandedId} setExpandedId={setExpandedId} selectedId={selectedId} onSelect={node => {
        setSelectedId(node?.id ?? null);
      }} selectMode="all" actionButtons={node => <CreateTreeNode node={node} />} />
      </EasyTreeProvider>;
  }
}`,...d.parameters?.docs?.source}}};const _=["Default"];export{d as Default,_ as __namedExportsOrder,M as default};
