"use strict";(self.webpackChunkmui_easy_cascader=self.webpackChunkmui_easy_cascader||[]).push([[543],{"./src/Highlight/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"component/Highlight",component:__webpack_require__("./src/Highlight/index.tsx").y},Default={args:{search:"ab",children:"abcdabcd"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    search: 'ab',\n    children: 'abcdabcd'\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/Highlight/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Highlight});var _mui_material__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/styles/styled.js"),_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/@mui+material@5.14.0_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.8_react-dom@18.2.0_react@18.2.0/node_modules/@mui/material/Box/Box.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/map.js"),rxjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/skipWhile.js"),rxjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js"),rxjs_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/rxjs-hooks@0.8.0-alpha.0_react@18.2.0_rxjs@7.8.1/node_modules/rxjs-hooks/dist/esm/use-observable.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const StyledMark=(0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.ZP)("mark")((({focused})=>({backgroundColor:"#fde79b",...focused&&{color:"#FAAD14"}})));function Highlight(props){const{search:searchProp,focused,children}=props,search=(0,rxjs_hooks__WEBPACK_IMPORTED_MODULE_2__.m)(((_,inputs$)=>inputs$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.U)((([search])=>search||void 0)),(0,rxjs__WEBPACK_IMPORTED_MODULE_4__.n)((search=>void 0===search)),(0,rxjs__WEBPACK_IMPORTED_MODULE_5__.b)(300))),void 0,[searchProp]),stringArray=children.split(new RegExp(`(${search})`,"g"));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Z,{children:stringArray.map(((string,index)=>string===search?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledMark,{focused,children:string},index):string))})}Highlight.displayName="Highlight";try{Highlight.displayName="Highlight",Highlight.__docgenInfo={description:"",displayName:"Highlight",props:{search:{defaultValue:null,description:"",name:"search",required:!0,type:{name:"string | undefined"}},focused:{defaultValue:null,description:"",name:"focused",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Highlight/index.tsx#Highlight"]={docgenInfo:Highlight.__docgenInfo,name:"Highlight",path:"src/Highlight/index.tsx#Highlight"})}catch(__react_docgen_typescript_loader_error){}}}]);