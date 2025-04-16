import{j as Y}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./index-D4lIrffr.js";import{P as yt,a as bt,u as wt,g as xt,G as Ot}from"./Grow-DCIzZode.js";import{g as Et,b as Pt,N as se,o as Ae,C as Ye,e as Rt,u as At,s as Ct,H as Tt,B as jt}from"./isLeafNode-BynM3cPO.js";var k="top",H="bottom",W="right",S="left",De="auto",ue=[k,H,W,S],ee="start",pe="end",Dt="clippingParents",nt="viewport",ie="popper",Bt="reference",ze=ue.reduce(function(e,t){return e.concat([t+"-"+ee,t+"-"+pe])},[]),ot=[].concat(ue,[De]).reduce(function(e,t){return e.concat([t,t+"-"+ee,t+"-"+pe])},[]),kt="beforeRead",St="read",Mt="afterRead",$t="beforeMain",Lt="main",Ht="afterMain",Wt="beforeWrite",Nt="write",Vt="afterWrite",qt=[kt,St,Mt,$t,Lt,Ht,Wt,Nt,Vt];function V(e){return e?(e.nodeName||"").toLowerCase():null}function $(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Z(e){var t=$(e).Element;return e instanceof t||e instanceof Element}function L(e){var t=$(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Be(e){if(typeof ShadowRoot>"u")return!1;var t=$(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Ft(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},o=t.attributes[r]||{},i=t.elements[r];!L(i)||!V(i)||(Object.assign(i.style,n),Object.keys(o).forEach(function(f){var a=o[f];a===!1?i.removeAttribute(f):i.setAttribute(f,a===!0?"":a)}))})}function Ut(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var o=t.elements[n],i=t.attributes[n]||{},f=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),a=f.reduce(function(s,p){return s[p]="",s},{});!L(o)||!V(o)||(Object.assign(o.style,a),Object.keys(i).forEach(function(s){o.removeAttribute(s)}))})}}const It={name:"applyStyles",enabled:!0,phase:"write",fn:Ft,effect:Ut,requires:["computeStyles"]};function N(e){return e.split("-")[0]}var Q=Math.max,we=Math.min,te=Math.round;function Ce(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function at(){return!/^((?!chrome|android).)*safari/i.test(Ce())}function re(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),o=1,i=1;t&&L(e)&&(o=e.offsetWidth>0&&te(n.width)/e.offsetWidth||1,i=e.offsetHeight>0&&te(n.height)/e.offsetHeight||1);var f=Z(e)?$(e):window,a=f.visualViewport,s=!at()&&r,p=(n.left+(s&&a?a.offsetLeft:0))/o,c=(n.top+(s&&a?a.offsetTop:0))/i,h=n.width/o,w=n.height/i;return{width:h,height:w,top:c,right:p+h,bottom:c+w,left:p,x:p,y:c}}function ke(e){var t=re(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function it(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Be(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function U(e){return $(e).getComputedStyle(e)}function Xt(e){return["table","td","th"].indexOf(V(e))>=0}function z(e){return((Z(e)?e.ownerDocument:e.document)||window.document).documentElement}function xe(e){return V(e)==="html"?e:e.assignedSlot||e.parentNode||(Be(e)?e.host:null)||z(e)}function Ge(e){return!L(e)||U(e).position==="fixed"?null:e.offsetParent}function Yt(e){var t=/firefox/i.test(Ce()),r=/Trident/i.test(Ce());if(r&&L(e)){var n=U(e);if(n.position==="fixed")return null}var o=xe(e);for(Be(o)&&(o=o.host);L(o)&&["html","body"].indexOf(V(o))<0;){var i=U(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function de(e){for(var t=$(e),r=Ge(e);r&&Xt(r)&&U(r).position==="static";)r=Ge(r);return r&&(V(r)==="html"||V(r)==="body"&&U(r).position==="static")?t:r||Yt(e)||t}function Se(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ce(e,t,r){return Q(e,we(t,r))}function zt(e,t,r){var n=ce(e,t,r);return n>r?r:n}function st(){return{top:0,right:0,bottom:0,left:0}}function ct(e){return Object.assign({},st(),e)}function ft(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var Gt=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,ct(typeof t!="number"?t:ft(t,ue))};function Jt(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,f=r.modifiersData.popperOffsets,a=N(r.placement),s=Se(a),p=[S,W].indexOf(a)>=0,c=p?"height":"width";if(!(!i||!f)){var h=Gt(o.padding,r),w=ke(i),u=s==="y"?k:S,d=s==="y"?H:W,l=r.rects.reference[c]+r.rects.reference[s]-f[s]-r.rects.popper[c],v=f[s]-r.rects.reference[s],g=de(i),E=g?s==="y"?g.clientHeight||0:g.clientWidth||0:0,x=l/2-v/2,m=h[u],y=E-w[c]-h[d],b=E/2-w[c]/2+x,O=ce(m,b,y),A=s;r.modifiersData[n]=(t={},t[A]=O,t.centerOffset=O-b,t)}}function Kt(e){var t=e.state,r=e.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||it(t.elements.popper,o)&&(t.elements.arrow=o))}const Qt={name:"arrow",enabled:!0,phase:"main",fn:Jt,effect:Kt,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ne(e){return e.split("-")[1]}var Zt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function _t(e,t){var r=e.x,n=e.y,o=t.devicePixelRatio||1;return{x:te(r*o)/o||0,y:te(n*o)/o||0}}function Je(e){var t,r=e.popper,n=e.popperRect,o=e.placement,i=e.variation,f=e.offsets,a=e.position,s=e.gpuAcceleration,p=e.adaptive,c=e.roundOffsets,h=e.isFixed,w=f.x,u=w===void 0?0:w,d=f.y,l=d===void 0?0:d,v=typeof c=="function"?c({x:u,y:l}):{x:u,y:l};u=v.x,l=v.y;var g=f.hasOwnProperty("x"),E=f.hasOwnProperty("y"),x=S,m=k,y=window;if(p){var b=de(r),O="clientHeight",A="clientWidth";if(b===$(r)&&(b=z(r),U(b).position!=="static"&&a==="absolute"&&(O="scrollHeight",A="scrollWidth")),b=b,o===k||(o===S||o===W)&&i===pe){m=H;var R=h&&b===y&&y.visualViewport?y.visualViewport.height:b[O];l-=R-n.height,l*=s?1:-1}if(o===S||(o===k||o===H)&&i===pe){x=W;var P=h&&b===y&&y.visualViewport?y.visualViewport.width:b[A];u-=P-n.width,u*=s?1:-1}}var T=Object.assign({position:a},p&&Zt),M=c===!0?_t({x:u,y:l},$(r)):{x:u,y:l};if(u=M.x,l=M.y,s){var D;return Object.assign({},T,(D={},D[m]=E?"0":"",D[x]=g?"0":"",D.transform=(y.devicePixelRatio||1)<=1?"translate("+u+"px, "+l+"px)":"translate3d("+u+"px, "+l+"px, 0)",D))}return Object.assign({},T,(t={},t[m]=E?l+"px":"",t[x]=g?u+"px":"",t.transform="",t))}function er(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,i=r.adaptive,f=i===void 0?!0:i,a=r.roundOffsets,s=a===void 0?!0:a,p={placement:N(t.placement),variation:ne(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Je(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:f,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Je(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const tr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:er,data:{}};var ye={passive:!0};function rr(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=o===void 0?!0:o,f=n.resize,a=f===void 0?!0:f,s=$(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&p.forEach(function(c){c.addEventListener("scroll",r.update,ye)}),a&&s.addEventListener("resize",r.update,ye),function(){i&&p.forEach(function(c){c.removeEventListener("scroll",r.update,ye)}),a&&s.removeEventListener("resize",r.update,ye)}}const nr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:rr,data:{}};var or={left:"right",right:"left",bottom:"top",top:"bottom"};function be(e){return e.replace(/left|right|bottom|top/g,function(t){return or[t]})}var ar={start:"end",end:"start"};function Ke(e){return e.replace(/start|end/g,function(t){return ar[t]})}function Me(e){var t=$(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function $e(e){return re(z(e)).left+Me(e).scrollLeft}function ir(e,t){var r=$(e),n=z(e),o=r.visualViewport,i=n.clientWidth,f=n.clientHeight,a=0,s=0;if(o){i=o.width,f=o.height;var p=at();(p||!p&&t==="fixed")&&(a=o.offsetLeft,s=o.offsetTop)}return{width:i,height:f,x:a+$e(e),y:s}}function sr(e){var t,r=z(e),n=Me(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=Q(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),f=Q(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-n.scrollLeft+$e(e),s=-n.scrollTop;return U(o||r).direction==="rtl"&&(a+=Q(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:f,x:a,y:s}}function Le(e){var t=U(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function pt(e){return["html","body","#document"].indexOf(V(e))>=0?e.ownerDocument.body:L(e)&&Le(e)?e:pt(xe(e))}function fe(e,t){var r;t===void 0&&(t=[]);var n=pt(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),i=$(n),f=o?[i].concat(i.visualViewport||[],Le(n)?n:[]):n,a=t.concat(f);return o?a:a.concat(fe(xe(f)))}function Te(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function cr(e,t){var r=re(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Qe(e,t,r){return t===nt?Te(ir(e,r)):Z(t)?cr(t,r):Te(sr(z(e)))}function fr(e){var t=fe(xe(e)),r=["absolute","fixed"].indexOf(U(e).position)>=0,n=r&&L(e)?de(e):e;return Z(n)?t.filter(function(o){return Z(o)&&it(o,n)&&V(o)!=="body"}):[]}function pr(e,t,r,n){var o=t==="clippingParents"?fr(e):[].concat(t),i=[].concat(o,[r]),f=i[0],a=i.reduce(function(s,p){var c=Qe(e,p,n);return s.top=Q(c.top,s.top),s.right=we(c.right,s.right),s.bottom=we(c.bottom,s.bottom),s.left=Q(c.left,s.left),s},Qe(e,f,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function lt(e){var t=e.reference,r=e.element,n=e.placement,o=n?N(n):null,i=n?ne(n):null,f=t.x+t.width/2-r.width/2,a=t.y+t.height/2-r.height/2,s;switch(o){case k:s={x:f,y:t.y-r.height};break;case H:s={x:f,y:t.y+t.height};break;case W:s={x:t.x+t.width,y:a};break;case S:s={x:t.x-r.width,y:a};break;default:s={x:t.x,y:t.y}}var p=o?Se(o):null;if(p!=null){var c=p==="y"?"height":"width";switch(i){case ee:s[p]=s[p]-(t[c]/2-r[c]/2);break;case pe:s[p]=s[p]+(t[c]/2-r[c]/2);break}}return s}function le(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,i=r.strategy,f=i===void 0?e.strategy:i,a=r.boundary,s=a===void 0?Dt:a,p=r.rootBoundary,c=p===void 0?nt:p,h=r.elementContext,w=h===void 0?ie:h,u=r.altBoundary,d=u===void 0?!1:u,l=r.padding,v=l===void 0?0:l,g=ct(typeof v!="number"?v:ft(v,ue)),E=w===ie?Bt:ie,x=e.rects.popper,m=e.elements[d?E:w],y=pr(Z(m)?m:m.contextElement||z(e.elements.popper),s,c,f),b=re(e.elements.reference),O=lt({reference:b,element:x,placement:o}),A=Te(Object.assign({},x,O)),R=w===ie?A:b,P={top:y.top-R.top+g.top,bottom:R.bottom-y.bottom+g.bottom,left:y.left-R.left+g.left,right:R.right-y.right+g.right},T=e.modifiersData.offset;if(w===ie&&T){var M=T[o];Object.keys(P).forEach(function(D){var q=[W,H].indexOf(D)>=0?1:-1,F=[k,H].indexOf(D)>=0?"y":"x";P[D]+=M[F]*q})}return P}function lr(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,f=r.padding,a=r.flipVariations,s=r.allowedAutoPlacements,p=s===void 0?ot:s,c=ne(n),h=c?a?ze:ze.filter(function(d){return ne(d)===c}):ue,w=h.filter(function(d){return p.indexOf(d)>=0});w.length===0&&(w=h);var u=w.reduce(function(d,l){return d[l]=le(e,{placement:l,boundary:o,rootBoundary:i,padding:f})[N(l)],d},{});return Object.keys(u).sort(function(d,l){return u[d]-u[l]})}function ur(e){if(N(e)===De)return[];var t=be(e);return[Ke(e),t,Ke(t)]}function dr(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=o===void 0?!0:o,f=r.altAxis,a=f===void 0?!0:f,s=r.fallbackPlacements,p=r.padding,c=r.boundary,h=r.rootBoundary,w=r.altBoundary,u=r.flipVariations,d=u===void 0?!0:u,l=r.allowedAutoPlacements,v=t.options.placement,g=N(v),E=g===v,x=s||(E||!d?[be(v)]:ur(v)),m=[v].concat(x).reduce(function(_,X){return _.concat(N(X)===De?lr(t,{placement:X,boundary:c,rootBoundary:h,padding:p,flipVariations:d,allowedAutoPlacements:l}):X)},[]),y=t.rects.reference,b=t.rects.popper,O=new Map,A=!0,R=m[0],P=0;P<m.length;P++){var T=m[P],M=N(T),D=ne(T)===ee,q=[k,H].indexOf(M)>=0,F=q?"width":"height",j=le(t,{placement:T,boundary:c,rootBoundary:h,altBoundary:w,padding:p}),B=q?D?W:S:D?H:k;y[F]>b[F]&&(B=be(B));var I=be(B),G=[];if(i&&G.push(j[M]<=0),a&&G.push(j[B]<=0,j[I]<=0),G.every(function(_){return _})){R=T,A=!1;break}O.set(T,G)}if(A)for(var ve=d?3:1,Oe=function(X){var ae=m.find(function(he){var J=O.get(he);if(J)return J.slice(0,X).every(function(Ee){return Ee})});if(ae)return R=ae,"break"},oe=ve;oe>0;oe--){var me=Oe(oe);if(me==="break")break}t.placement!==R&&(t.modifiersData[n]._skip=!0,t.placement=R,t.reset=!0)}}const vr={name:"flip",enabled:!0,phase:"main",fn:dr,requiresIfExists:["offset"],data:{_skip:!1}};function Ze(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function _e(e){return[k,W,H,S].some(function(t){return e[t]>=0})}function mr(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,f=le(t,{elementContext:"reference"}),a=le(t,{altBoundary:!0}),s=Ze(f,n),p=Ze(a,o,i),c=_e(s),h=_e(p);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:p,isReferenceHidden:c,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":h})}const hr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:mr};function gr(e,t,r){var n=N(e),o=[S,k].indexOf(n)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,f=i[0],a=i[1];return f=f||0,a=(a||0)*o,[S,W].indexOf(n)>=0?{x:a,y:f}:{x:f,y:a}}function yr(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=o===void 0?[0,0]:o,f=ot.reduce(function(c,h){return c[h]=gr(h,t.rects,i),c},{}),a=f[t.placement],s=a.x,p=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=p),t.modifiersData[n]=f}const br={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:yr};function wr(e){var t=e.state,r=e.name;t.modifiersData[r]=lt({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}const xr={name:"popperOffsets",enabled:!0,phase:"read",fn:wr,data:{}};function Or(e){return e==="x"?"y":"x"}function Er(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=o===void 0?!0:o,f=r.altAxis,a=f===void 0?!1:f,s=r.boundary,p=r.rootBoundary,c=r.altBoundary,h=r.padding,w=r.tether,u=w===void 0?!0:w,d=r.tetherOffset,l=d===void 0?0:d,v=le(t,{boundary:s,rootBoundary:p,padding:h,altBoundary:c}),g=N(t.placement),E=ne(t.placement),x=!E,m=Se(g),y=Or(m),b=t.modifiersData.popperOffsets,O=t.rects.reference,A=t.rects.popper,R=typeof l=="function"?l(Object.assign({},t.rects,{placement:t.placement})):l,P=typeof R=="number"?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),T=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,M={x:0,y:0};if(b){if(i){var D,q=m==="y"?k:S,F=m==="y"?H:W,j=m==="y"?"height":"width",B=b[m],I=B+v[q],G=B-v[F],ve=u?-A[j]/2:0,Oe=E===ee?O[j]:A[j],oe=E===ee?-A[j]:-O[j],me=t.elements.arrow,_=u&&me?ke(me):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:st(),ae=X[q],he=X[F],J=ce(0,O[j],_[j]),Ee=x?O[j]/2-ve-J-ae-P.mainAxis:Oe-J-ae-P.mainAxis,ut=x?-O[j]/2+ve+J+he+P.mainAxis:oe+J+he+P.mainAxis,Pe=t.elements.arrow&&de(t.elements.arrow),dt=Pe?m==="y"?Pe.clientTop||0:Pe.clientLeft||0:0,He=(D=T?.[m])!=null?D:0,vt=B+Ee-He-dt,mt=B+ut-He,We=ce(u?we(I,vt):I,B,u?Q(G,mt):G);b[m]=We,M[m]=We-B}if(a){var Ne,ht=m==="x"?k:S,gt=m==="x"?H:W,K=b[y],ge=y==="y"?"height":"width",Ve=K+v[ht],qe=K-v[gt],Re=[k,S].indexOf(g)!==-1,Fe=(Ne=T?.[y])!=null?Ne:0,Ue=Re?Ve:K-O[ge]-A[ge]-Fe+P.altAxis,Ie=Re?K+O[ge]+A[ge]-Fe-P.altAxis:qe,Xe=u&&Re?zt(Ue,K,Ie):ce(u?Ue:Ve,K,u?Ie:qe);b[y]=Xe,M[y]=Xe-K}t.modifiersData[n]=M}}const Pr={name:"preventOverflow",enabled:!0,phase:"main",fn:Er,requiresIfExists:["offset"]};function Rr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Ar(e){return e===$(e)||!L(e)?Me(e):Rr(e)}function Cr(e){var t=e.getBoundingClientRect(),r=te(t.width)/e.offsetWidth||1,n=te(t.height)/e.offsetHeight||1;return r!==1||n!==1}function Tr(e,t,r){r===void 0&&(r=!1);var n=L(t),o=L(t)&&Cr(t),i=z(t),f=re(e,o,r),a={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((V(t)!=="body"||Le(i))&&(a=Ar(t)),L(t)?(s=re(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):i&&(s.x=$e(i))),{x:f.left+a.scrollLeft-s.x,y:f.top+a.scrollTop-s.y,width:f.width,height:f.height}}function jr(e){var t=new Map,r=new Set,n=[];e.forEach(function(i){t.set(i.name,i)});function o(i){r.add(i.name);var f=[].concat(i.requires||[],i.requiresIfExists||[]);f.forEach(function(a){if(!r.has(a)){var s=t.get(a);s&&o(s)}}),n.push(i)}return e.forEach(function(i){r.has(i.name)||o(i)}),n}function Dr(e){var t=jr(e);return qt.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function Br(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function kr(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var et={placement:"bottom",modifiers:[],strategy:"absolute"};function tt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Sr(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,i=o===void 0?et:o;return function(a,s,p){p===void 0&&(p=i);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},et,i),modifiersData:{},elements:{reference:a,popper:s},attributes:{},styles:{}},h=[],w=!1,u={state:c,setOptions:function(g){var E=typeof g=="function"?g(c.options):g;l(),c.options=Object.assign({},i,c.options,E),c.scrollParents={reference:Z(a)?fe(a):a.contextElement?fe(a.contextElement):[],popper:fe(s)};var x=Dr(kr([].concat(n,c.options.modifiers)));return c.orderedModifiers=x.filter(function(m){return m.enabled}),d(),u.update()},forceUpdate:function(){if(!w){var g=c.elements,E=g.reference,x=g.popper;if(tt(E,x)){c.rects={reference:Tr(E,de(x),c.options.strategy==="fixed"),popper:ke(x)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(P){return c.modifiersData[P.name]=Object.assign({},P.data)});for(var m=0;m<c.orderedModifiers.length;m++){if(c.reset===!0){c.reset=!1,m=-1;continue}var y=c.orderedModifiers[m],b=y.fn,O=y.options,A=O===void 0?{}:O,R=y.name;typeof b=="function"&&(c=b({state:c,options:A,name:R,instance:u})||c)}}}},update:Br(function(){return new Promise(function(v){u.forceUpdate(),v(c)})}),destroy:function(){l(),w=!0}};if(!tt(a,s))return u;u.setOptions(p).then(function(v){!w&&p.onFirstUpdate&&p.onFirstUpdate(v)});function d(){c.orderedModifiers.forEach(function(v){var g=v.name,E=v.options,x=E===void 0?{}:E,m=v.effect;if(typeof m=="function"){var y=m({state:c,name:g,instance:u,options:x}),b=function(){};h.push(y||b)}})}function l(){h.forEach(function(v){return v()}),h=[]}return u}}var Mr=[nr,xr,tr,It,br,vr,Pr,Qt,hr],$r=Sr({defaultModifiers:Mr});function Lr(e){return Et("MuiPopper",e)}Pt("MuiPopper",["root"]);function Hr(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function je(e){return typeof e=="function"?e():e}function Wr(e){return e.nodeType!==void 0}const Nr=e=>{const{classes:t}=e;return Rt({root:["root"]},Lr,t)},Vr={},qr=C.forwardRef(function(t,r){const{anchorEl:n,children:o,direction:i,disablePortal:f,modifiers:a,open:s,placement:p,popperOptions:c,popperRef:h,slotProps:w={},slots:u={},TransitionProps:d,ownerState:l,...v}=t,g=C.useRef(null),E=Ae(g,r),x=C.useRef(null),m=Ae(x,h),y=C.useRef(m);Ye(()=>{y.current=m},[m]),C.useImperativeHandle(h,()=>x.current,[]);const b=Hr(p,i),[O,A]=C.useState(b),[R,P]=C.useState(je(n));C.useEffect(()=>{x.current&&x.current.forceUpdate()}),C.useEffect(()=>{n&&P(je(n))},[n]),Ye(()=>{if(!R||!s)return;const F=I=>{A(I.placement)};let j=[{name:"preventOverflow",options:{altBoundary:f}},{name:"flip",options:{altBoundary:f}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:I})=>{F(I)}}];a!=null&&(j=j.concat(a)),c&&c.modifiers!=null&&(j=j.concat(c.modifiers));const B=$r(R,g.current,{placement:b,...c,modifiers:j});return y.current(B),()=>{B.destroy(),y.current(null)}},[R,f,a,s,c,b]);const T={placement:O};d!==null&&(T.TransitionProps=d);const M=Nr(t),D=u.root??"div",q=bt({elementType:D,externalSlotProps:w.root,externalForwardedProps:v,additionalProps:{role:"tooltip",ref:E},ownerState:t,className:M.root});return Y.jsx(D,{...q,children:typeof o=="function"?o(T):o})}),Fr=C.forwardRef(function(t,r){const{anchorEl:n,children:o,container:i,direction:f="ltr",disablePortal:a=!1,keepMounted:s=!1,modifiers:p,open:c,placement:h="bottom",popperOptions:w=Vr,popperRef:u,style:d,transition:l=!1,slotProps:v={},slots:g={},...E}=t,[x,m]=C.useState(!0),y=()=>{m(!1)},b=()=>{m(!0)};if(!s&&!c&&(!l||x))return null;let O;if(i)O=i;else if(n){const P=je(n);O=P&&Wr(P)?se(P).body:se(null).body}const A=!c&&s&&(!l||x)?"none":void 0,R=l?{in:c,onEnter:y,onExited:b}:void 0;return Y.jsx(yt,{disablePortal:a,container:O,children:Y.jsx(qr,{anchorEl:n,direction:f,disablePortal:a,modifiers:p,ref:r,open:l?!x:c,placement:h,popperOptions:w,popperRef:u,slotProps:v,slots:g,...E,style:{position:"fixed",top:0,left:0,display:A,...d},TransitionProps:R,children:o})})}),Ur=Ct(Fr,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Ir=C.forwardRef(function(t,r){const n=wt(),o=At({props:t,name:"MuiPopper"}),{anchorEl:i,component:f,components:a,componentsProps:s,container:p,disablePortal:c,keepMounted:h,modifiers:w,open:u,placement:d,popperOptions:l,popperRef:v,transition:g,slots:E,slotProps:x,...m}=o,y=E?.root??a?.Root,b={anchorEl:i,container:p,disablePortal:c,keepMounted:h,modifiers:w,open:u,placement:d,popperOptions:l,popperRef:v,transition:g,...m};return Y.jsx(Ur,{as:f,direction:n?"rtl":"ltr",slots:{root:y},slotProps:x??s,...b,ref:r})});function rt(e){return e.substring(2).toLowerCase()}function Xr(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}function Yr(e){const{children:t,disableReactTree:r=!1,mouseEvent:n="onClick",onClickAway:o,touchEvent:i="onTouchEnd"}=e,f=C.useRef(!1),a=C.useRef(null),s=C.useRef(!1),p=C.useRef(!1);C.useEffect(()=>(setTimeout(()=>{s.current=!0},0),()=>{s.current=!1}),[]);const c=Ae(xt(t),a),h=Tt(d=>{const l=p.current;p.current=!1;const v=se(a.current);if(!s.current||!a.current||"clientX"in d&&Xr(d,v))return;if(f.current){f.current=!1;return}let g;d.composedPath?g=d.composedPath().includes(a.current):g=!v.documentElement.contains(d.target)||a.current.contains(d.target),!g&&(r||!l)&&o(d)}),w=d=>l=>{p.current=!0;const v=t.props[d];v&&v(l)},u={ref:c};return i!==!1&&(u[i]=w(i)),C.useEffect(()=>{if(i!==!1){const d=rt(i),l=se(a.current),v=()=>{f.current=!0};return l.addEventListener(d,h),l.addEventListener("touchmove",v),()=>{l.removeEventListener(d,h),l.removeEventListener("touchmove",v)}}},[h,i]),n!==!1&&(u[n]=w(n)),C.useEffect(()=>{if(n!==!1){const d=rt(n),l=se(a.current);return l.addEventListener(d,h),()=>{l.removeEventListener(d,h)}}},[h,n]),C.cloneElement(t,u)}function zr({children:e,anchorEl:t,sx:r,onClose:n}){const o=()=>{n()},i=!!t;return Y.jsx(Ir,{sx:{...r,zIndex:2e3},open:i,anchorEl:t,transition:!0,disablePortal:!0,placement:"bottom-start",children:({TransitionProps:f,placement:a})=>Y.jsx(Ot,{...f,style:{transformOrigin:a==="bottom-start"?"left top":"left bottom"},children:Y.jsx(jt,{children:Y.jsx(Yr,{onClickAway:o,children:e})})})})}zr.__docgenInfo={description:"",methods:[],displayName:"EasyPopper",props:{children:{required:!0,tsType:{name:"ReactElement"},description:"popper reference element"},anchorEl:{required:!0,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:"this determines which anchor prop to refer to when setting the position of the popper"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"callback fired when the component requests to be closed"},sx:{required:!1,tsType:{name:"SxProps"},description:""}}};export{zr as E};
