"use strict";(self.webpackChunkmui_easy_cascader=self.webpackChunkmui_easy_cascader||[]).push([[432],{"./src/EasyCascaderColumn/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Defalut:()=>Defalut,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),src_mock__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/mock.ts"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/EasyCascaderColumn/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"component/EasyCascaderColumn",component:___WEBPACK_IMPORTED_MODULE_2__.u},Defalut=()=>{const[activedId,setActivedId]=react__WEBPACK_IMPORTED_MODULE_0__.useState(src_mock__WEBPACK_IMPORTED_MODULE_1__.$?.[0]?.id);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.u,{ids:[0,1],activedId,onNodeClick:node=>{setActivedId(node.id)},getNodeLabel:node=>node.name,data:src_mock__WEBPACK_IMPORTED_MODULE_1__.$})};Defalut.displayName="Defalut",Defalut.parameters={...Defalut.parameters,docs:{...Defalut.parameters?.docs,source:{originalSource:"() => {\n  const [activedId, setActivedId] = React.useState<MockObject['id']>(mockObjectNodes?.[0]?.id);\n  return <EasyCascaderColumn<MockObject> ids={[0, 1]} activedId={activedId} onNodeClick={node => {\n    setActivedId(node.id);\n  }} getNodeLabel={node => node.name} data={mockObjectNodes} />;\n}",...Defalut.parameters?.docs?.source}}};const __namedExportsOrder=["Defalut"]},"./src/EasyCascaderColumn/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>EasyCascaderColumn});var _mui_icons_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/@mui+icons-material@5.14.0_@mui+material@5.14.0_@types+react@18.2.8_react@18.2.0/node_modules/@mui/icons-material/esm/KeyboardArrowRight.js"),_mui_material__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Paper/Paper.js"),_mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/MenuList/MenuList.js"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/MenuItem/MenuItem.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/ListItemText/ListItemText.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function EasyCascaderColumn({ids,data,onNodeClick,activedId,endAdornment,startAdornment,getNodeLabel}){const currentNodes=data.filter((node=>ids.includes(node.id)));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z,{children:currentNodes.map((node=>{const selected=activedId===node.id;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,{selected,onClick:()=>{onNodeClick(node,selected)},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z,{sx:{"& span":{fontWeight:selected?"bold":"normal"}},children:[startAdornment?.(node),getNodeLabel(node),endAdornment?.(node)]}),node.childrenId&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__.Z,{color:selected?"primary":"disabled"})]},node.id)}))})})}EasyCascaderColumn.displayName="EasyCascaderColumn";try{EasyCascaderColumn.displayName="EasyCascaderColumn",EasyCascaderColumn.__docgenInfo={description:"",displayName:"EasyCascaderColumn",props:{ids:{defaultValue:null,description:"",name:"ids",required:!0,type:{name:"Id[]"}},activedId:{defaultValue:null,description:"",name:"activedId",required:!1,type:{name:"Id | null"}},onNodeClick:{defaultValue:null,description:"",name:"onNodeClick",required:!0,type:{name:"(node: T, selected: boolean) => void"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},getNodeLabel:{defaultValue:null,description:"",name:"getNodeLabel",required:!0,type:{name:"(node: T) => string"}},startAdornment:{defaultValue:null,description:"",name:"startAdornment",required:!1,type:{name:"((node: T) => ReactNode)"}},endAdornment:{defaultValue:null,description:"",name:"endAdornment",required:!1,type:{name:"((node: T) => ReactNode)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/EasyCascaderColumn/index.tsx#EasyCascaderColumn"]={docgenInfo:EasyCascaderColumn.__docgenInfo,name:"EasyCascaderColumn",path:"src/EasyCascaderColumn/index.tsx#EasyCascaderColumn"})}catch(__react_docgen_typescript_loader_error){}},"./src/mock.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>mockObjectNodes});const mockObjectNodes=[{id:0,name:"parent-0",age:100,childrenId:[1,2]},{id:1,name:"childre-0",pathId:[0]},{id:2,name:"children-1",pathId:[0],age:10},{id:3,name:"parent-1"}]}}]);