import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-D4lIrffr.js";import{c as j,m as N}from"./mock-BA6x8glS.js";import{E as g}from"./EasyTree-GIv8hmAR.js";import{u as S,A as B}from"./useEasyTree-BNdF2b9_.js";import{B as l}from"./isLeafNode-BynM3cPO.js";import{T}from"./TextField-CfsmE4kW.js";import{I as a}from"./index.module-DrHIWsir.js";import{E as D}from"./EditOutlined-DDEh9wMM.js";import"./getRootIds-BDZTszT8.js";import"./useTheme-C1eaTmxe.js";import"./EasyHighlight-CeowNmLs.js";import"./utils-V0gmEr-R.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./CircularProgress-_geyx4et.js";import"./Grow-DCIzZode.js";import"./Paper-Cm1zrjdt.js";const k=j(e.jsx("path",{d:"M14.12 10.47 12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8z"})),K={title:"Tree/useEasyTree",decorators:d=>e.jsx(l,{sx:{width:400},children:e.jsx(d,{})})},o={render:()=>{const{expandedId:d,setExpandedId:i,selectedId:r,setSelectedId:m,data:s,setData:u,createNode:p,updateNode:x,deleteNode:I}=S();c.useEffect(()=>{u(N)},[]);const h=s.find(t=>t.id===r),[n,f]=c.useState("");return e.jsxs(e.Fragment,{children:["you select: ",h?.name,e.jsx("br",{}),e.jsx(T,{value:n,onChange:t=>{f(t.target.value||"")}}),e.jsx(g,{data:s,getNodeLabel:t=>t.name,expandedId:d,setExpandedId:i,selectedId:r,onSelect:t=>{m(t?.id??null)},selectMode:"all",search:n,actionButtons:t=>e.jsxs(l,{children:[e.jsx(a,{color:"success",onClick:()=>{const E=t.id;p(E,{id:new Date().getTime(),name:new Date().getTime()+""})},children:e.jsx(B,{})}),e.jsx(a,{color:"warning",onClick:()=>{x(t.id,{...t,name:"new name"})},children:e.jsx(D,{})}),e.jsx(a,{color:"error",onClick:()=>{I(t.id)},children:e.jsx(k,{})})]})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      expandedId,
      setExpandedId,
      selectedId,
      setSelectedId,
      data,
      setData,
      createNode,
      updateNode,
      deleteNode
    } = useEasyTree<MockShape>();
    useEffect(() => {
      setData(mockNodes);
    }, []);
    const selectedNode = data.find(node => node.id === selectedId);
    const [search, setSearch] = useState('');
    return <>
        you select: {selectedNode?.name}
        <br />
        <TextField value={search} onChange={e => {
        setSearch(e.target.value || '');
      }} />
        <EasyTree<MockShape> data={data} getNodeLabel={node => node.name} expandedId={expandedId} setExpandedId={setExpandedId} selectedId={selectedId} onSelect={node => {
        setSelectedId(node?.id ?? null);
      }} selectMode="all" search={search} actionButtons={node => <Box>
              <IconButton color="success" onClick={() => {
          const parentId = node.id;
          createNode(parentId, {
            id: new Date().getTime(),
            name: new Date().getTime() + ''
          });
        }}>
                <AddOutlined />
              </IconButton>
              <IconButton color="warning" onClick={() => {
          updateNode(node.id, {
            ...node,
            name: 'new name'
          });
        }}>
                <EditOutlined />
              </IconButton>
              <IconButton color="error" onClick={() => {
          deleteNode(node.id);
        }}>
                <DeleteForeverOutlined />
              </IconButton>
            </Box>} />
      </>;
  }
}`,...o.parameters?.docs?.source}}};const P=["Default"];export{o as Default,P as __namedExportsOrder,K as default};
