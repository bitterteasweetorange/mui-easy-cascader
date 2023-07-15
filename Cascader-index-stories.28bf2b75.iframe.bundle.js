"use strict";(self.webpackChunkmui_easy_cascader=self.webpackChunkmui_easy_cascader||[]).push([[627],{"./src/Cascader/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Defalut:()=>Defalut,GetNodeLabel:()=>GetNodeLabel,ObjectNode:()=>ObjectNode,RenderNode:()=>RenderNode,Search:()=>Search,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var TextField=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/TextField/TextField.js"),Box=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js"),Chip=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Chip/Chip.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function createCascaderNodes(depth,prefix=""){return new Array(3).fill(null).map(((_,index)=>({value:`${prefix}${index}`,children:depth>1?createCascaderNodes(depth-1,`${prefix}${index}-`):void 0})))}var Cascader=__webpack_require__("./src/Cascader/index.tsx"),mock=__webpack_require__("./src/mock.ts"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const index_stories={title:"Cascader",component:Cascader.v},Defalut=()=>{const[select,setSelected]=(0,react.useState)("0-1-2-0"),mockNodes=createCascaderNodes(6);return(0,jsx_runtime.jsx)(Cascader.v,{nodes:mockNodes,selected:select,onSelect:setSelected})};Defalut.displayName="Defalut";const Search=()=>{const[select,setSelected]=(0,react.useState)("1"),[search,setSearch]=(0,react.useState)(""),mockNodes=createCascaderNodes(2);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(TextField.Z,{label:"search",value:search,onChange:e=>{setSearch(e.target.value)}}),(0,jsx_runtime.jsx)(Cascader.v,{nodes:mockNodes,selected:select,onSelect:setSelected,search})]})},ObjectNode=()=>{const[select,setSelected]=(0,react.useState)({id:2,label:"children-1",age:10});return(0,jsx_runtime.jsx)(Cascader.v,{nodes:mock.$,selected:select,onSelect:setSelected,isEqual:(a,b)=>a.id===b.id})};ObjectNode.displayName="ObjectNode";const GetNodeLabel=()=>{const[select,setSelected]=(0,react.useState)(null),[search,setSearch]=(0,react.useState)("");return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(TextField.Z,{label:"search",value:search,onChange:e=>{setSearch(e.target.value)}}),(0,jsx_runtime.jsx)(Cascader.v,{search,nodes:mock.$,selected:select,onSelect:setSelected,isEqual:(a,b)=>a.id===b.id,getNodeLabel:node=>`${node.label}${node.age?"("+node.age+")":""}`})]})},RenderNode=()=>{const[select,setSelected]=(0,react.useState)(null);return(0,jsx_runtime.jsx)(Cascader.v,{nodes:mock.$,selected:select,onSelect:setSelected,isEqual:(a,b)=>a.id===b.id,renderNode:(Label,{value})=>(0,jsx_runtime.jsxs)(Box.Z,{sx:{justifyContent:"center",display:"flex",gap:1},children:[Label,value.age&&(0,jsx_runtime.jsx)(Chip.Z,{variant:"outlined",size:"small",label:value.age,color:value.age>18?"success":"error"})]})})};RenderNode.displayName="RenderNode",Defalut.parameters={...Defalut.parameters,docs:{...Defalut.parameters?.docs,source:{originalSource:"() => {\n  const [select, setSelected] = useState<string | null>('0-1-2-0');\n  const mockNodes = createCascaderNodes(6);\n  return <Cascader<string> nodes={mockNodes} selected={select} onSelect={setSelected} />;\n}",...Defalut.parameters?.docs?.source}}},Search.parameters={...Search.parameters,docs:{...Search.parameters?.docs,source:{originalSource:"() => {\n  const [select, setSelected] = useState<string | null>('1');\n  const [search, setSearch] = useState<string>('');\n  const mockNodes = createCascaderNodes(2);\n  return <>\n      <TextField label=\"search\" value={search} onChange={e => {\n      setSearch(e.target.value);\n    }} />\n      <Cascader<string> nodes={mockNodes} selected={select} onSelect={setSelected} search={search} />\n    </>;\n}",...Search.parameters?.docs?.source}}},ObjectNode.parameters={...ObjectNode.parameters,docs:{...ObjectNode.parameters?.docs,source:{originalSource:"() => {\n  const [select, setSelected] = useState<MockObject | null>({\n    id: 2,\n    label: 'children-1',\n    age: 10\n  });\n  return <Cascader<MockObject> nodes={mockObjectNodes} selected={select} onSelect={setSelected} isEqual={(a, b) => a.id === b.id} />;\n}",...ObjectNode.parameters?.docs?.source}}},GetNodeLabel.parameters={...GetNodeLabel.parameters,docs:{...GetNodeLabel.parameters?.docs,source:{originalSource:"() => {\n  const [select, setSelected] = useState<MockObject | null>(null);\n  const [search, setSearch] = useState<string>('');\n  return <>\n      <TextField label=\"search\" value={search} onChange={e => {\n      setSearch(e.target.value);\n    }} />\n      <Cascader<MockObject> search={search} nodes={mockObjectNodes} selected={select} onSelect={setSelected} isEqual={(a, b) => a.id === b.id} getNodeLabel={node => `${node.label}${node.age ? '(' + node.age + ')' : ''}`} />\n    </>;\n}",...GetNodeLabel.parameters?.docs?.source}}},RenderNode.parameters={...RenderNode.parameters,docs:{...RenderNode.parameters?.docs,source:{originalSource:"() => {\n  const [select, setSelected] = useState<MockObject | null>(null);\n  return <Cascader<MockObject> nodes={mockObjectNodes} selected={select} onSelect={setSelected} isEqual={(a, b) => a.id === b.id} renderNode={(Label, {\n    value\n  }) => <Box sx={{\n    justifyContent: 'center',\n    display: 'flex',\n    gap: 1\n  }}>\n          {Label}\n          {value.age && <Chip variant=\"outlined\" size=\"small\" label={value.age} color={value.age > 18 ? 'success' : 'error'} />}\n        </Box>} />;\n}",...RenderNode.parameters?.docs?.source}}};const __namedExportsOrder=["Defalut","Search","ObjectNode","GetNodeLabel","RenderNode"]},"./src/Cascader/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Cascader});var KeyboardArrowRight=__webpack_require__("./node_modules/.pnpm/@mui+icons-material@5.14.0_@mui+material@5.14.0_@types+react@18.2.8_react@18.2.0/node_modules/@mui/icons-material/esm/KeyboardArrowRight.js"),Paper=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Paper/Paper.js"),MenuList=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/MenuList/MenuList.js"),MenuItem=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/MenuItem/MenuItem.js"),Box=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js"),Typography=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Typography/Typography.js"),ListItemText=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/ListItemText/ListItemText.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),Highlight=__webpack_require__("./src/Highlight/index.tsx"),utils_getNodeLabel=__webpack_require__("./src/utils/getNodeLabel.ts");function flatNodes(nodes,pathLabel,getNodeLabel){return nodes.reduce(((acc,node)=>{const currentNodeLabel=(0,utils_getNodeLabel.i)(node.value,getNodeLabel),nextPathLabel=[...pathLabel,currentNodeLabel],{value}=node;return node.children?[...acc,{value,pathLabel:nextPathLabel,isLeaf:!1},...flatNodes(node.children,nextPathLabel,getNodeLabel)]:[...acc,{value,pathLabel:nextPathLabel,isLeaf:!0}]}),[])}var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function Cascader({onSelect:onChange,isEqual,nodes,selected:value,renderNode:render,search,getNodeLabel}){const path=(0,react.useMemo)((()=>getPath({nodes,selected:value,isEqual})),[nodes,value,isEqual]),[searchText,setSearchText]=(0,react.useState)(search);if((0,react.useEffect)((()=>{setSearchText(search)}),[search]),searchText){const listData=flatNodes(nodes,[],getNodeLabel);return(0,jsx_runtime.jsx)(Paper.Z,{children:(0,jsx_runtime.jsx)(MenuList.Z,{children:listData.filter((item=>item.isLeaf)).filter((item=>!!item.pathLabel.find((label=>label.includes(searchText))))).map(((item,index)=>(0,jsx_runtime.jsx)(MenuItem.Z,{onClick:()=>{onChange(item.value,item.isLeaf),setSearchText("")},children:(0,jsx_runtime.jsx)(Box.Z,{sx:{display:"flex",gap:1},children:item.pathLabel.map(((label,index)=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(Highlight.y,{search,children:label}),index!==item.pathLabel.length-1&&(0,jsx_runtime.jsx)(Typography.Z,{component:"div",color:"text.disabled",children:"/"})]},index)))})},index)))})})}return(0,jsx_runtime.jsx)(Box.Z,{display:"flex",children:new Array(path.length+1).fill(null).map(((_,depth)=>(0,jsx_runtime.jsx)(Column,{depth,currentDepthNodes:0===depth?nodes:path[depth-1].children||[],path,onSelect:onChange,renderNode:render,getNodeLabel},depth)))})}function Column({currentDepthNodes,depth,path,onSelect,renderNode:render,getNodeLabel}){return(0,jsx_runtime.jsx)(Paper.Z,{children:currentDepthNodes.map(((node,index)=>{const selected=path[depth]===node;return(0,jsx_runtime.jsx)(MenuList.Z,{children:(0,jsx_runtime.jsxs)(MenuItem.Z,{selected,onClick:()=>{onSelect(node.value,!node.children)},children:[render?render?.((0,utils_getNodeLabel.i)(node.value,getNodeLabel),{depth,children:node.children,value:node.value}):(0,jsx_runtime.jsx)(ListItemText.Z,{children:(0,utils_getNodeLabel.i)(node.value,getNodeLabel)}),node.children&&(0,jsx_runtime.jsx)(KeyboardArrowRight.Z,{color:selected?"primary":"disabled"})]})},index)}))})}function getPath({nodes,selected,isEqual}){if(null===selected)return[];const res=[];return nodes.forEach((node=>{if(isEqual?isEqual(node.value,selected):node.value===selected)res.push(node);else if(node.children){const childPath=getPath({nodes:node.children,selected,isEqual});childPath.length>0&&res.push(node,...childPath)}})),res}Cascader.displayName="Cascader",Column.displayName="Column";try{Cascader.displayName="Cascader",Cascader.__docgenInfo={description:"",displayName:"Cascader",props:{nodes:{defaultValue:null,description:"",name:"nodes",required:!0,type:{name:"CascaderNode<T>[]"}},selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"T | null"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(value: T | null, isLeaf: boolean) => void"}},search:{defaultValue:null,description:"filter / hightlight the nodes by search text",name:"search",required:!1,type:{name:"string"}},isEqual:{defaultValue:null,description:"compare function to check if two values are equal",name:"isEqual",required:!1,type:{name:"((a: T, b: T) => boolean)"}},renderNode:{defaultValue:null,description:"render function to customize the node\nLabel is Higlight component",name:"renderNode",required:!1,type:{name:"((Label: ReactNode, props: { value: T; depth: number; children?: CascaderNode<T>[]; }) => ReactNode)"}},getNodeLabel:{defaultValue:null,description:"get the label of the node for hightlight and filter",name:"getNodeLabel",required:!1,type:{name:"((value: T) => string)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Cascader/index.tsx#Cascader"]={docgenInfo:Cascader.__docgenInfo,name:"Cascader",path:"src/Cascader/index.tsx#Cascader"})}catch(__react_docgen_typescript_loader_error){}},"./src/Highlight/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Highlight});var _mui_material__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/styled.js"),_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/map.js"),rxjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/skipWhile.js"),rxjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js"),rxjs_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/rxjs-hooks@0.8.0-alpha.0_react@18.2.0_rxjs@7.8.1/node_modules/rxjs-hooks/dist/esm/use-observable.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const StyledMark=(0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.ZP)("mark")((({focused})=>({backgroundColor:"#fde79b",...focused&&{color:"#FAAD14"}})));function Highlight(props){const{search:searchProp,focused,children}=props,search=(0,rxjs_hooks__WEBPACK_IMPORTED_MODULE_2__.m)(((_,inputs$)=>inputs$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.U)((([search])=>search||void 0)),(0,rxjs__WEBPACK_IMPORTED_MODULE_4__.n)((search=>void 0===search)),(0,rxjs__WEBPACK_IMPORTED_MODULE_5__.b)(300))),void 0,[searchProp]),stringArray=children.split(new RegExp(`(${search})`,"g"));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Z,{children:stringArray.map(((string,index)=>string===search?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledMark,{focused,children:string},index):string))})}Highlight.displayName="Highlight";try{Highlight.displayName="Highlight",Highlight.__docgenInfo={description:"",displayName:"Highlight",props:{search:{defaultValue:null,description:"",name:"search",required:!0,type:{name:"string | undefined"}},focused:{defaultValue:null,description:"",name:"focused",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Highlight/index.tsx#Highlight"]={docgenInfo:Highlight.__docgenInfo,name:"Highlight",path:"src/Highlight/index.tsx#Highlight"})}catch(__react_docgen_typescript_loader_error){}},"./src/mock.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>mockObjectNodes});const mockObjectNodes=[{value:{id:0,label:"parent-0",age:100},children:[{value:{id:1,label:"children-0"}},{value:{id:2,label:"children-1",age:10}}]},{value:{id:3,label:"parent-1"}}]},"./src/utils/getNodeLabel.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getLabel(value,getNodeLabel){return getNodeLabel?getNodeLabel(value):"object"!=typeof value&&"function"!=typeof value?String(value):value?.label||""}__webpack_require__.d(__webpack_exports__,{i:()=>getLabel})}}]);