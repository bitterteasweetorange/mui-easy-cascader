"use strict";(self.webpackChunkmui_easy_cascader=self.webpackChunkmui_easy_cascader||[]).push([[955],{"./src/EasyList/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Defalut:()=>Defalut,Keyboard:()=>Keyboard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/TextField/TextField.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Chip/Chip.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/EasyList/index.tsx"),_mock__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/mock.ts"),_keyboardEvent__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/EasyList/keyboardEvent.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"component/EasyList",component:___WEBPACK_IMPORTED_MODULE_1__.r},Defalut=()=>{const[search,setSearch]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("1"),[selectedId,setSelectedId]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{value:search,onChange:e=>{setSearch(e.target.value)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.r,{data:_mock__WEBPACK_IMPORTED_MODULE_2__.$,getNodeLabel:node=>node.name,endAdornment:node=>node.age&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,{size:"small",label:node.age}),search,selectedId,onSelect:id=>{setSelectedId(id)}})]})},Keyboard=()=>{const[selectedId,setSelectedId]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),[hoverId,setHoverId]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const handleKeyPress=e=>{(0,_keyboardEvent__WEBPACK_IMPORTED_MODULE_6__.v)(e,ref.current?.filterData||[],hoverId,setHoverId)};return window.addEventListener("keydown",handleKeyPress),()=>{window.removeEventListener("keydown",handleKeyPress)}}),[hoverId]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:['press keyboard "Up" / "Down" / "Enter"',(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.r,{search:"",ref,hoverId,data:_mock__WEBPACK_IMPORTED_MODULE_2__.$,getNodeLabel:node=>node.name,selectedId,onSelect:id=>{setSelectedId(id),setHoverId(null)}})]})};Defalut.parameters={...Defalut.parameters,docs:{...Defalut.parameters?.docs,source:{originalSource:"() => {\n  const [search, setSearch] = useState('1');\n  const [selectedId, setSelectedId] = useState<EasyId | null>(0);\n  return <>\n      <TextField value={search} onChange={e => {\n      setSearch(e.target.value);\n    }} />\n      <EasyList<MockObject> data={mockObjectNodes} getNodeLabel={node => node.name} endAdornment={node => node.age && <Chip size=\"small\" label={node.age} />} search={search} selectedId={selectedId} onSelect={id => {\n      setSelectedId(id);\n    }} />\n    </>;\n}",...Defalut.parameters?.docs?.source}}},Keyboard.parameters={...Keyboard.parameters,docs:{...Keyboard.parameters?.docs,source:{originalSource:'() => {\n  const [selectedId, setSelectedId] = useState<EasyId | null>(0);\n  const [hoverId, setHoverId] = useState<EasyId | null>(null);\n  const ref = useRef<EasyKeyboardRefObject<MockObject> | null>(null);\n  useEffect(() => {\n    const handleKeyPress = (e: any) => {\n      keyboardEvent(e, ref.current?.filterData || [], hoverId, setHoverId);\n    };\n    window.addEventListener(\'keydown\', handleKeyPress);\n    return () => {\n      window.removeEventListener(\'keydown\', handleKeyPress);\n    };\n  }, [hoverId]);\n  return <>\n      press keyboard "Up" / "Down" / "Enter"\n      <EasyList<MockObject> search="" ref={ref} hoverId={hoverId} data={mockObjectNodes} getNodeLabel={node => node.name} selectedId={selectedId} onSelect={id => {\n      setSelectedId(id);\n      setHoverId(null);\n    }} />\n    </>;\n}',...Keyboard.parameters?.docs?.source}}};const __namedExportsOrder=["Defalut","Keyboard"]},"./src/EasyHighlight/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>EasyHighlight});var _mui_material__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/styled.js"),_mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const StyledMark=(0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.ZP)("mark")((({focused})=>({backgroundColor:"#fde79b",...focused&&{color:"#FAAD14"}})));function EasyHighlight(props){const{search,focused,text}=props,stringArray=search?text.split(new RegExp(`(${search})`,"g")):[text];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z,{children:stringArray.map(((string,index)=>string===search?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledMark,{focused,children:string},index):string))})}EasyHighlight.displayName="EasyHighlight";try{EasyHighlight.displayName="EasyHighlight",EasyHighlight.__docgenInfo={description:"",displayName:"EasyHighlight",props:{search:{defaultValue:null,description:"",name:"search",required:!0,type:{name:"string | undefined"}},focused:{defaultValue:null,description:"",name:"focused",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/EasyHighlight/index.tsx#EasyHighlight"]={docgenInfo:EasyHighlight.__docgenInfo,name:"EasyHighlight",path:"src/EasyHighlight/index.tsx#EasyHighlight"})}catch(__react_docgen_typescript_loader_error){}},"./src/EasyList/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>EasyList});var _mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/useTheme.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Paper/Paper.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/MenuList/MenuList.js"),_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/MenuItem/MenuItem.js"),_mui_material__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js"),_mui_material__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Typography/Typography.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),src_EasyHighlight__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/EasyHighlight/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const EasyList=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(EasyListRaw);function EasyListRaw(props,ref){const{data,endAdornment,startAdornment,search,getNodeLabel,selectedId,onSelect,hoverId}=props,{palette}=(0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z)(),filterData=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>function filterKeywordLastNodes(fullData,getNodeLabel,debouncedSearch){const res=[];return fullData.forEach((node=>{getNodeLabel(node).includes(debouncedSearch)&&(res.push(node),node.pathId?.forEach((parentId=>{const index=res.findIndex((x=>x.id===parentId));index>-1&&res.splice(index,1)})))})),res}(data,getNodeLabel,search)),[data,getNodeLabel,search]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref,(()=>({filterData})),[filterData]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Z,{children:filterData.map((node=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Z,{selected:node.id===selectedId,onClick:()=>{onSelect(node.id)},sx:{background:hoverId===node.id?palette.action.hover:void 0},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Z,{sx:{display:"flex",gap:1},children:[...node.pathId||[],node.id]?.map(((id,index)=>{const pathNode=data.find((x=>x.id===id)),text=pathNode?getNodeLabel(pathNode):"";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[startAdornment?.(node),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(src_EasyHighlight__WEBPACK_IMPORTED_MODULE_1__.X,{text,search}),endAdornment?.(node),index!==(node.pathId?.length||0)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Z,{component:"div",color:"text.disabled",children:"/"})]},id)}))})},node.id)))})})}EasyListRaw.displayName="EasyListRaw";try{EasyList.displayName="EasyList",EasyList.__docgenInfo={description:"",displayName:"EasyList",props:{search:{defaultValue:null,description:"",name:"search",required:!0,type:{name:"string"}},selectedId:{defaultValue:null,description:"",name:"selectedId",required:!0,type:{name:"EasyId | null"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(id: EasyId | null) => void"}},hoverId:{defaultValue:null,description:"",name:"hoverId",required:!1,type:{name:"EasyId | null"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},getNodeLabel:{defaultValue:null,description:"",name:"getNodeLabel",required:!0,type:{name:"(node: T) => string"}},startAdornment:{defaultValue:null,description:"",name:"startAdornment",required:!1,type:{name:"((node: T) => ReactNode)"}},endAdornment:{defaultValue:null,description:"",name:"endAdornment",required:!1,type:{name:"((node: T) => ReactNode)"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"ForwardedRef<EasyKeyboardRefObject<T>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/EasyList/index.tsx#EasyList"]={docgenInfo:EasyList.__docgenInfo,name:"EasyList",path:"src/EasyList/index.tsx#EasyList"})}catch(__react_docgen_typescript_loader_error){}},"./src/EasyList/keyboardEvent.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function keyboardEvent(e,filterData,hoverId,setHoverId){const index=filterData.findIndex((node=>node.id===hoverId));switch(e.key){case"Enter":return hoverId;case"ArrowDown":return setHoverId(filterData[index+1]?.id??filterData[0]?.id),null;case"ArrowUp":return setHoverId(filterData[index-1]?.id??filterData[filterData.length-1]?.id),null;default:return null}}__webpack_require__.d(__webpack_exports__,{v:()=>keyboardEvent})},"./src/mock.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>mockObjectNodes});const mockObjectNodes=[{id:0,name:"parent-0",age:100,childrenId:[1,2,4]},{id:1,name:"children-0",pathId:[0],childrenId:[5]},{id:2,name:"children-1",pathId:[0],age:10},{id:4,name:"children-2",pathId:[0]},{id:3,name:"parent-1"},{id:5,name:"leaf",pathId:[0,1]}]}}]);