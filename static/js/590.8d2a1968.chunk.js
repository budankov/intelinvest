"use strict";(self.webpackChunkintelinvest=self.webpackChunkintelinvest||[]).push([[590],{3590:function(e,t,n){n.r(t),n.d(t,{default:function(){return ye}});var r=n(2791),o=n(9434),i=n(4116),a=n(8913),c=n(4164);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var l,u,d="undefined"!==typeof window?r.useLayoutEffect:r.useEffect,f={popupContent:{tooltip:{position:"absolute",zIndex:999},modal:{position:"relative",margin:"auto"}},popupArrow:{height:"8px",width:"16px",position:"absolute",background:"transparent",color:"#FFF",zIndex:-1},overlay:{tooltip:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",zIndex:999},modal:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",display:"flex",zIndex:999}}},p=["top left","top center","top right","right top","right center","right bottom","bottom left","bottom center","bottom right","left top","left center","left bottom"],v=function(e,t,n,r,o){var i=o.offsetX,a=o.offsetY,c=r?8:0,s=n.split(" "),l=e.top+e.height/2,u=e.left+e.width/2,d=t.height,f=t.width,p=l-d/2,v=u-f/2,h="",m="0%",b="0%";switch(s[0]){case"top":p-=d/2+e.height/2+c,h="rotate(180deg)  translateX(50%)",m="100%",b="50%";break;case"bottom":p+=d/2+e.height/2+c,h="rotate(0deg) translateY(-100%) translateX(-50%)",b="50%";break;case"left":v-=f/2+e.width/2+c,h=" rotate(90deg)  translateY(50%) translateX(-25%)",b="100%",m="50%";break;case"right":v+=f/2+e.width/2+c,h="rotate(-90deg)  translateY(-150%) translateX(25%)",m="50%"}switch(s[1]){case"top":p=e.top,m=e.height/2+"px";break;case"bottom":p=e.top-d+e.height,m=d-e.height/2+"px";break;case"left":v=e.left,b=e.width/2+"px";break;case"right":v=e.left-f+e.width,b=f-e.width/2+"px"}return{top:p="top"===s[0]?p-a:p+a,left:v="left"===s[0]?v-i:v+i,transform:h,arrowLeft:b,arrowTop:m}},h=function(e,t,n,r,o,i){var a=o.offsetX,c=o.offsetY,s={arrowLeft:"0%",arrowTop:"0%",left:0,top:0,transform:"rotate(135deg)"},l=0,u=function(e){var t={top:0,left:0,width:window.innerWidth,height:window.innerHeight};if("string"===typeof e){var n=document.querySelector(e);null!==n&&(t=n.getBoundingClientRect())}return t}(i),d=Array.isArray(n)?n:[n];for((i||Array.isArray(n))&&(d=[].concat(d,p));l<d.length;){var f={top:(s=v(e,t,d[l],r,{offsetX:a,offsetY:c})).top,left:s.left,width:t.width,height:t.height};if(!(f.top<=u.top||f.left<=u.left||f.top+f.height>=u.top+u.height||f.left+f.width>=u.left+u.width))break;l++}return s},m=0,b=(0,r.forwardRef)((function(e,t){var n=e.trigger,o=void 0===n?null:n,i=e.onOpen,a=void 0===i?function(){}:i,l=e.onClose,u=void 0===l?function(){}:l,p=e.defaultOpen,v=void 0!==p&&p,b=e.open,g=void 0===b?void 0:b,x=e.disabled,y=void 0!==x&&x,j=e.nested,k=void 0!==j&&j,w=e.closeOnDocumentClick,_=void 0===w||w,E=e.repositionOnResize,O=void 0===E||E,N=e.closeOnEscape,Z=void 0===N||N,S=e.on,C=void 0===S?["click"]:S,I=e.contentStyle,T=void 0===I?{}:I,L=e.arrowStyle,P=void 0===L?{}:L,F=e.overlayStyle,B=void 0===F?{}:F,D=e.className,R=void 0===D?"":D,A=e.position,M=void 0===A?"bottom center":A,z=e.modal,q=void 0!==z&&z,Y=e.lockScroll,U=void 0!==Y&&Y,H=e.arrow,X=void 0===H||H,V=e.offsetX,W=void 0===V?0:V,G=e.offsetY,J=void 0===G?0:G,K=e.mouseEnterDelay,$=void 0===K?100:K,Q=e.mouseLeaveDelay,ee=void 0===Q?100:Q,te=e.keepTooltipInside,ne=void 0!==te&&te,re=e.children,oe=(0,r.useState)(g||v),ie=oe[0],ae=oe[1],ce=(0,r.useRef)(null),se=(0,r.useRef)(null),le=(0,r.useRef)(null),ue=(0,r.useRef)(null),de=(0,r.useRef)("popup-"+ ++m),fe=!!q||!o,pe=(0,r.useRef)(0);d((function(){return ie?(ue.current=document.activeElement,Ee(),ke(),ye()):je(),function(){clearTimeout(pe.current)}}),[ie]),(0,r.useEffect)((function(){"boolean"===typeof g&&(g?ve():he())}),[g,y]);var ve=function(e){ie||y||(ae(!0),setTimeout((function(){return a(e)}),0))},he=function(e){var t;ie&&!y&&(ae(!1),fe&&(null===(t=ue.current)||void 0===t||t.focus()),setTimeout((function(){return u(e)}),0))},me=function(e){null===e||void 0===e||e.stopPropagation(),ie?he(e):ve(e)},be=function(e){clearTimeout(pe.current),pe.current=setTimeout((function(){return ve(e)}),$)},ge=function(e){null===e||void 0===e||e.preventDefault(),me()},xe=function(e){clearTimeout(pe.current),pe.current=setTimeout((function(){return he(e)}),ee)},ye=function(){fe&&U&&(document.getElementsByTagName("body")[0].style.overflow="hidden")},je=function(){fe&&U&&(document.getElementsByTagName("body")[0].style.overflow="auto")},ke=function(){var e,t=null===se||void 0===se||null===(e=se.current)||void 0===e?void 0:e.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),n=Array.prototype.slice.call(t)[0];null===n||void 0===n||n.focus()};(0,r.useImperativeHandle)(t,(function(){return{open:function(){ve()},close:function(){he()},toggle:function(){me()}}}));var we,_e,Ee=function(){if(!fe&&ie&&(null===ce||void 0===ce?void 0:ce.current)&&(null===ce||void 0===ce?void 0:ce.current)&&(null===se||void 0===se?void 0:se.current)){var e,t,n=ce.current.getBoundingClientRect(),r=se.current.getBoundingClientRect(),o=h(n,r,M,X,{offsetX:W,offsetY:J},ne);if(se.current.style.top=o.top+window.scrollY+"px",se.current.style.left=o.left+window.scrollX+"px",X&&le.current)le.current.style.transform=o.transform,le.current.style.setProperty("-ms-transform",o.transform),le.current.style.setProperty("-webkit-transform",o.transform),le.current.style.top=(null===(e=P.top)||void 0===e?void 0:e.toString())||o.arrowTop,le.current.style.left=(null===(t=P.left)||void 0===t?void 0:t.toString())||o.arrowLeft}};we=he,void 0===(_e=Z)&&(_e=!0),(0,r.useEffect)((function(){if(_e){var e=function(e){"Escape"===e.key&&we(e)};return document.addEventListener("keyup",e),function(){_e&&document.removeEventListener("keyup",e)}}}),[we,_e]),function(e,t){void 0===t&&(t=!0),(0,r.useEffect)((function(){if(t){var n=function(t){if(9===t.keyCode){var n,r=null===e||void 0===e||null===(n=e.current)||void 0===n?void 0:n.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),o=Array.prototype.slice.call(r);if(1===o.length)return void t.preventDefault();var i=o[0],a=o[o.length-1];t.shiftKey&&document.activeElement===i?(t.preventDefault(),a.focus()):document.activeElement===a&&(t.preventDefault(),i.focus())}};return document.addEventListener("keydown",n),function(){t&&document.removeEventListener("keydown",n)}}}),[e,t])}(se,ie&&fe),function(e,t){void 0===t&&(t=!0),(0,r.useEffect)((function(){if(t){var n=function(){e()};return window.addEventListener("resize",n),function(){t&&window.removeEventListener("resize",n)}}}),[e,t])}(Ee,O),function(e,t,n){void 0===n&&(n=!0),(0,r.useEffect)((function(){if(n){var r=function(n){var r=Array.isArray(e)?e:[e],o=!1;r.forEach((function(e){e.current&&!e.current.contains(n.target)||(o=!0)})),n.stopPropagation(),o||t(n)};return document.addEventListener("mousedown",r),document.addEventListener("touchstart",r),function(){n&&(document.removeEventListener("mousedown",r),document.removeEventListener("touchstart",r))}}}),[e,t,n])}(o?[se,ce]:[se],he,_&&!k);var Oe=function(){return r.createElement("div",Object.assign({},function(){var e=fe?f.popupContent.modal:f.popupContent.tooltip,t={className:"popup-content "+(""!==R?R.split(" ").map((function(e){return e+"-content"})).join(" "):""),style:s({},e,T,{pointerEvents:"auto"}),ref:se,onClick:function(e){e.stopPropagation()}};return!q&&C.indexOf("hover")>=0&&(t.onMouseEnter=be,t.onMouseLeave=xe),t}(),{key:"C",role:fe?"dialog":"tooltip",id:de.current}),X&&!fe&&r.createElement("div",{ref:le,style:f.popupArrow},r.createElement("svg",{"data-testid":"arrow",className:"popup-arrow "+(""!==R?R.split(" ").map((function(e){return e+"-arrow"})).join(" "):""),viewBox:"0 0 32 16",style:s({position:"absolute"},P)},r.createElement("path",{d:"M16 0l16 16H0z",fill:"currentcolor"}))),re&&"function"===typeof re?re(he,ie):re)},Ne=!(C.indexOf("hover")>=0),Ze=fe?f.overlay.modal:f.overlay.tooltip,Se=[Ne&&r.createElement("div",{key:"O","data-testid":"overlay","data-popup":fe?"modal":"tooltip",className:"popup-overlay "+(""!==R?R.split(" ").map((function(e){return e+"-overlay"})).join(" "):""),style:s({},Ze,B,{pointerEvents:_&&k||fe?"auto":"none"}),onClick:_&&k?he:void 0,tabIndex:-1},fe&&Oe()),!fe&&Oe()];return r.createElement(r.Fragment,null,function(){for(var e={key:"T",ref:ce,"aria-describedby":de.current},t=Array.isArray(C)?C:[C],n=0,i=t.length;n<i;n++)switch(t[n]){case"click":e.onClick=me;break;case"right-click":e.onContextMenu=ge;break;case"hover":e.onMouseEnter=be,e.onMouseLeave=xe;break;case"focus":e.onFocus=be,e.onBlur=xe}if("function"===typeof o){var a=o(ie);return!!o&&r.cloneElement(a,e)}return!!o&&r.cloneElement(o,e)}(),ie&&c.createPortal(Se,function(){var e=document.getElementById("popup-root");return null===e&&((e=document.createElement("div")).setAttribute("id","popup-root"),document.body.appendChild(e)),e}()))})),g=["title","titleId"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function j(e,t){var n=e.title,o=e.titleId,i=y(e,g);return r.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",ref:t,"aria-labelledby":o},i),n?r.createElement("title",{id:o},n):null,l||(l=r.createElement("g",{id:"icomoon-ignore"})),u||(u=r.createElement("path",{d:"M512 0c282.77 0 512 229.23 512 512s-229.23 512-512 512-512-229.23-512-512 229.23-512 512-512zM631.358 377.145c-15.217-15.766-36.174-21.303-58.254-21.043-29.453 0.35-60.905 11.021-83.403 21.501-53.836 25.079-95.144 69.491-129.548 116.966-6.195 8.547-9.428 18.638 1.472 26.505 9.295 6.709 15.988 0.706 21.595-5.278l0.368-0.395c0.427-0.46 0.849-0.917 1.264-1.368 6.291-6.812 12.37-13.866 18.45-20.926l3.041-3.53c18.257-21.166 36.83-42.029 61.41-56.184 14.613-8.415 25.142 4.582 22.886 19.18-1.352 8.754-5.955 16.999-9.173 25.463-11.435 30.060-23.038 60.057-34.593 90.074-12.661 32.907-25.283 65.827-37.561 98.879l-2.132 5.736c-10.832 29.141-21.503 58.065-28.562 88.478-5.64 24.316-13.233 53.817-2.324 77.705 6.283 13.76 19.611 23.217 34.436 25.369 20.22 2.935 42.083 3.271 61.868-1.231 10.249-2.33 20.331-5.371 30.171-9.069 30.211-11.359 57.721-28.878 82.497-49.469 25.205-21.005 47.423-45.852 67.683-71.622 6.512-8.283 14.402-17.442 16.62-28.051 2.084-9.95-6.798-24.161-18.307-18.386-6.077 3.050-10.629 10.596-15.057 15.611-5.557 6.292-11.223 12.492-16.953 18.624-11.46 12.26-23.207 24.247-35.005 36.177-7.221 7.302-16.197 13.474-25.42 18.007-11.515 5.658-20.685-0.617-19.439-13.367 1.143-11.709 4.008-23.544 8.025-34.627 16.163-44.627 32.635-89.139 48.978-133.699 10.217-27.847 20.382-55.713 30.399-83.635 9.362-26.095 17.341-51.98 20.711-79.627 2.324-19.045-2.613-38.745-16.143-52.766zM665.342 163.013c-48.716-18.954-106.79 13.393-116.573 64.937-7.067 37.218 7.113 69.989 36.266 83.816 56.408 26.752 123.885-15.975 123.888-78.445 0.003-34.665-15.26-59.288-43.581-70.308z"})))}var k,w=r.forwardRef(j),_=(n.p,["title","titleId"]);function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function N(e,t){var n=e.title,o=e.titleId,i=O(e,_);return r.createElement("svg",E({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},i),n?r.createElement("title",{id:o},n):null,k||(k=r.createElement("path",{d:"M1.41421 16.4322L0 15.018L7.07107 7.94693L13.435 14.3109L17.6777 10.0682L15.9353 8.32587L22.6274 6.53271L20.8343 13.2248L19.0919 11.4825L13.435 17.1393L7.07107 10.7754L1.41421 16.4322Z",fill:"#10B981"})))}var Z,S=r.forwardRef(N),C=(n.p,["title","titleId"]);function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function L(e,t){var n=e.title,o=e.titleId,i=T(e,C);return r.createElement("svg",I({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},i),n?r.createElement("title",{id:o},n):null,Z||(Z=r.createElement("path",{d:"M1.85123 8.10628L0.437012 9.52049L7.50808 16.5916L13.872 10.2276L18.1147 14.4702L16.3723 16.2126L23.0644 18.0058L21.2713 11.3136L19.5289 13.056L13.872 7.39917L7.50808 13.7631L1.85123 8.10628Z",fill:"#EF4444"})))}var P=r.forwardRef(L),F=(n.p,"Dashboard_dashboard__wrapper__j3b4n"),B="Dashboard_dashboard__title__knNf3",D="Dashboard_dashboard__item__dlYkT",R="Dashboard_border__PA2SB",A="Dashboard_dashboard__value__g-luJ",M="Dashboard_dashboard__dashConteiner__ruFNI",z="Dashboard_dashboard__dashIcon__Ls76Y",q="Dashboard_greenText__vp+qg",Y="Dashboard_redText__4qvhY",U="Dashboard_tooltipIcon__t-Q3z",H="Dashboard_tooltipContent__W0D37",X=n(3329),V=function(){var e=(0,o.v9)(a.mh),t=(0,o.v9)(i.uf),n=(0,o.v9)(i.x6),c=(0,o.v9)(i._z),s=(0,o.v9)(i.iJ),l=(0,o.v9)((function(e){return e.selectedCurrency.value})),u=l||"USD",d=(0,r.useMemo)((function(){return{USD:"$",EUR:"\u20ac",GBP:"\xa3",UAH:"\u20b4"}}),[]);return(0,X.jsxs)("div",{className:F,children:[(0,X.jsxs)("div",{className:D,children:[(0,X.jsxs)("p",{className:B,children:["\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044c",(0,X.jsx)(b,{trigger:(0,X.jsx)(w,{className:U}),position:"bottom center",on:"hover",children:(0,X.jsx)("div",{className:H,children:"\u0426\u0435 \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u043f\u043e\u0442\u043e\u0447\u043d\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044c \u0432\u0441\u0456\u0445 \u0430\u043a\u0442\u0438\u0432\u0456\u0432 \u0432 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u0456."})})]}),(0,X.jsxs)("div",{className:M,children:[(0,X.jsxs)("p",{className:A,children:[(t*e).toFixed(2),d[u]]}),t>=0?(0,X.jsx)(S,{className:z}):(0,X.jsx)(P,{className:z})]})]}),(0,X.jsxs)("div",{className:"".concat(D," ").concat(R),children:[(0,X.jsxs)("p",{className:B,children:["\u0421\u0443\u043c\u0430\u0440\u043d\u0438\u0439 \u043f\u0440\u0438\u0431\u0443\u0442\u043e\u043a",(0,X.jsx)(b,{trigger:(0,X.jsx)(w,{className:U}),position:"bottom center",on:"hover",children:(0,X.jsx)("div",{className:H,children:"\u0426\u0435 \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u043f\u0440\u0438\u0431\u0443\u0442\u043e\u043a \u0437 \u0432\u0441\u0456\u0445 \u0430\u043a\u0442\u0438\u0432\u0456\u0432 \u0432 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u0456. \u0412\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0430\u0454 \u043d\u0430 \u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0432\u0430\u0448 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044c \u0432 \u043f\u043b\u044e\u0441\u0456/\u043c\u0456\u043d\u0443\u0441\u0456 \u0432\u0456\u0434 \u0432\u043a\u043b\u0430\u0434\u0435\u043d\u0438\u0445 \u043a\u043e\u0448\u0442\u0456\u0432."})})]}),(0,X.jsxs)("div",{className:M,children:[(0,X.jsxs)("p",{className:A,children:[(n*e).toFixed(2),d[u]]}),n>=0?(0,X.jsx)(S,{className:z}):(0,X.jsx)(P,{className:z})]})]}),(0,X.jsxs)("div",{className:"".concat(D," ").concat(R),children:[(0,X.jsxs)("p",{className:B,children:["\u0414\u043e\u0445\u0456\u0434\u043d\u0456\u0441\u0442\u044c",(0,X.jsx)(b,{trigger:(0,X.jsx)(w,{className:U}),position:"bottom center",on:"hover",children:(0,X.jsx)("div",{className:H,children:"\u041f\u0440\u0438\u0431\u0443\u0442\u043e\u043a \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044e \u043f\u043e \u0432\u0456\u0434\u043d\u043e\u0448\u0435\u043d\u044e \u0434\u043e \u0432\u043a\u043b\u0430\u0434\u0435\u043d\u0438\u0445 \u043a\u043e\u0448\u0442\u0456\u0432."})})]}),(0,X.jsx)("p",{className:A,children:(0,X.jsxs)("span",{className:c>=0?q:Y,children:[c,"%"]})})]}),(0,X.jsxs)("div",{className:"".concat(D," ").concat(R),children:[(0,X.jsxs)("p",{className:B,children:["\u041a\u0440\u0430\u0449\u0438\u0439 \u0430\u043a\u0442\u0438\u0432",(0,X.jsx)(b,{trigger:(0,X.jsx)(w,{className:U}),position:"bottom center",on:"hover",children:(0,X.jsx)("div",{className:H,children:"\u0412\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0430\u0454 \u043d\u0430\u0439\u043a\u0440\u0430\u0449\u0438\u0439 \u043f\u0440\u0438\u0431\u0443\u0442\u043a\u043e\u0432\u0438\u0439 \u0430\u043a\u0442\u0438\u0432 \u0437 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044e, \u0439\u043e\u0433\u043e \u043d\u0430\u0437\u0432\u0443 \u0456 \u0432\u0456\u0434\u0441\u043e\u0442\u043e\u043a."})})]}),(0,X.jsxs)("p",{className:A,children:[s.name,": ",(0,X.jsxs)("span",{className:s.percentage>=0?q:Y,children:[s.percentage,"%"]})]})]})]})},W=n(4165),G=n(5861),J=n(4942),K=n(1413),$=n(9439),Q=n(7462),ee=n(5817),te=n(8003),ne=n(4925),re=n(4303),oe=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];n(1672);var ie,ae,ce=(0,r.forwardRef)((function(e,t){var n=function(e){var t=e.defaultOptions,n=void 0!==t&&t,o=e.cacheOptions,i=void 0!==o&&o,a=e.loadOptions;e.options;var c=e.isLoading,s=void 0!==c&&c,l=e.onInputChange,u=e.filterOption,d=void 0===u?null:u,f=(0,ne.Z)(e,oe),p=f.inputValue,v=(0,r.useRef)(void 0),h=(0,r.useRef)(!1),m=(0,r.useState)(Array.isArray(n)?n:void 0),b=(0,$.Z)(m,2),g=b[0],x=b[1],y=(0,r.useState)("undefined"!==typeof p?p:""),j=(0,$.Z)(y,2),k=j[0],w=j[1],_=(0,r.useState)(!0===n),E=(0,$.Z)(_,2),O=E[0],N=E[1],Z=(0,r.useState)(void 0),S=(0,$.Z)(Z,2),C=S[0],I=S[1],T=(0,r.useState)([]),L=(0,$.Z)(T,2),P=L[0],F=L[1],B=(0,r.useState)(!1),D=(0,$.Z)(B,2),R=D[0],A=D[1],M=(0,r.useState)({}),z=(0,$.Z)(M,2),q=z[0],Y=z[1],U=(0,r.useState)(void 0),H=(0,$.Z)(U,2),X=H[0],V=H[1],W=(0,r.useState)(void 0),G=(0,$.Z)(W,2),Q=G[0],ee=G[1];i!==Q&&(Y({}),ee(i)),n!==X&&(x(Array.isArray(n)?n:void 0),V(n)),(0,r.useEffect)((function(){return h.current=!0,function(){h.current=!1}}),[]);var te=(0,r.useCallback)((function(e,t){if(!a)return t();var n=a(e,t);n&&"function"===typeof n.then&&n.then(t,(function(){return t()}))}),[a]);(0,r.useEffect)((function(){!0===n&&te(k,(function(e){h.current&&(x(e||[]),N(!!v.current))}))}),[]);var ie=(0,r.useCallback)((function(e,t){var n=(0,re.L)(e,t,l);if(!n)return v.current=void 0,w(""),I(""),F([]),N(!1),void A(!1);if(i&&q[n])w(n),I(n),F(q[n]),N(!1),A(!1);else{var r=v.current={};w(n),N(!0),A(!C),te(n,(function(e){h&&r===v.current&&(v.current=void 0,N(!1),I(n),F(e||[]),A(!1),Y(e?(0,K.Z)((0,K.Z)({},q),{},(0,J.Z)({},n,e)):q))}))}}),[i,te,C,q,l]),ae=R?[]:k&&C?P:g||[];return(0,K.Z)((0,K.Z)({},f),{},{options:ae,isLoading:O||s,onInputChange:ie,filterOption:d})}(e),o=(0,te.u)(n);return r.createElement(ee.S,(0,Q.Z)({ref:t},o))})),se=n(5264),le=n(2972),ue=n(488),de={stocksHeader:"Stocks_stocksHeader__pe-df",stocksTitle:"Stocks_stocksTitle__TOUu0",stocksInputWrapper:"Stocks_stocksInputWrapper__YMoNM",stocksInput:"Stocks_stocksInput__9W4tU",stocksInputBtn:"Stocks_stocksInputBtn__pYKvB",stocksInputBtnDisabled:"Stocks_stocksInputBtnDisabled__QswHo",stocksTable:"Stocks_stocksTable__IZz48",stocksTableThead:"Stocks_stocksTableThead__K9G5m",stocksTableTbody:"Stocks_stocksTableTbody__8mJkr",greenText:"Stocks_greenText__bKcnt",redText:"Stocks_redText__O82k8",trashBtn:"Stocks_trashBtn__Ug1tZ",trashIcon:"Stocks_trashIcon__xxPgN",tooltipIcon:"Stocks_tooltipIcon__P8JnL",tooltipContent:"Stocks_tooltipContent__smH4f"},fe={input:function(e){return(0,K.Z)((0,K.Z)({},e),{},{color:"#fff"})},placeholder:function(e){return(0,K.Z)((0,K.Z)({},e),{},{color:"#fff"})},control:function(e,t){return(0,K.Z)((0,K.Z)({},e),{},{width:"600px",fontSize:"16px",color:"#fff",borderRadius:"8px",backgroundColor:"#444c5e",borderColor:t.isFocused?"#757b8c":"#444c5e",boxShadow:t.isFocused?"0 0 0 1px #757b8c":"none",cursor:"pointer","&:hover":{borderColor:"#757b8c"}})},option:function(e,t){return(0,K.Z)((0,K.Z)({},e),{},{backgroundColor:t.isSelected?"#757b8c":"#444c5e",color:"#fff",cursor:"pointer",borderRadius:"3px","&:hover":{backgroundColor:"#757b8c"}})},menu:function(e){return(0,K.Z)((0,K.Z)({},e),{},{width:"600px",backgroundColor:"#444c5e",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"})},menuList:function(e){return(0,K.Z)((0,K.Z)({},e),{},{"&::-webkit-scrollbar":{width:"7px",backgroundColor:"#444c5e"},"&::-webkit-scrollbar-thumb":{backgroundColor:"#c1c1c1",borderRadius:"5px"}})},singleValue:function(e){return(0,K.Z)((0,K.Z)({},e),{},{color:"#fff"})},clearIndicator:function(e){return(0,K.Z)((0,K.Z)({},e),{},{"& svg":{fill:"#fff",transition:"fill 0.3s"},"&:hover svg, &:active svg":{fill:"#2c3040"}})},dropdownIndicator:function(e){return(0,K.Z)((0,K.Z)({},e),{},{"& svg":{fill:"#fff",transition:"fill 0.3s"},"&:hover svg, &:active svg":{fill:"#2c3040"}})}},pe=["title","titleId"];function ve(){return ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ve.apply(this,arguments)}function he(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function me(e,t){var n=e.title,o=e.titleId,i=he(e,pe);return r.createElement("svg",ve({xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",ref:t,"aria-labelledby":o},i),void 0===n?r.createElement("title",{id:o},"trash-svgrepo-com"):n?r.createElement("title",{id:o},n):null,ie||(ie=r.createElement("g",{id:"icomoon-ignore"})),ae||(ae=r.createElement("path",{d:"M832 256h-640c-17.664 0-32-14.304-32-32 0-17.664 14.336-32 32-32h640c17.664 0 32 14.336 32 32 0 17.696-14.336 32-32 32v0zM800 896c0 35.328-28.672 64-64 64h-448c-35.328 0-64-28.672-64-64v-576h576v576zM416 96c0-17.696 14.336-32 32-32h128c17.664 0 32 14.304 32 32v32h-192v-32zM864 128h-192v-64c0-35.328-28.672-64-64-64h-192c-35.328 0-64 28.672-64 64v64h-192c-35.328 0-64 28.672-64 64v64c0 35.328 28.672 64 64 64v576c0 70.688 57.312 128 128 128h448c70.688 0 128-57.312 128-128v-576c35.328 0 64-28.672 64-64v-64c0-35.328-28.672-64-64-64v0zM512 896c17.664 0 32-14.304 32-32v-384c0-17.664-14.336-32-32-32s-32 14.336-32 32v384c0 17.696 14.336 32 32 32v0zM352 896c17.664 0 32-14.304 32-32v-384c0-17.664-14.336-32-32-32s-32 14.336-32 32v384c0 17.696 14.336 32 32 32v0zM672 896c17.664 0 32-14.304 32-32v-384c0-17.664-14.336-32-32-32s-32 14.336-32 32v384c0 17.696 14.336 32 32 32v0z"})))}var be=r.forwardRef(me),ge=(n.p,function(){var e=(0,r.useState)(null),t=(0,$.Z)(e,2),n=t[0],c=t[1],s=(0,r.useState)(!1),l=(0,$.Z)(s,2),u=l[0],d=l[1],f=(0,r.useState)(0),p=(0,$.Z)(f,2),v=p[0],h=p[1],m=(0,r.useState)({}),g=(0,$.Z)(m,2),x=g[0],y=g[1],j=(0,r.useState)({name:"",price:"",quantity:""}),k=(0,$.Z)(j,2),_=k[0],E=k[1],O=(0,o.I0)(),N=(0,o.v9)((function(e){return e.stocks.stocks})),Z=(0,o.v9)(a.mh),S=(0,o.v9)((function(e){return e.selectedCurrency.value})),C=S||"USD",I=(0,r.useMemo)((function(){return{USD:"$",EUR:"\u20ac",GBP:"\xa3",UAH:"\u20b4"}}),[]);(0,r.useEffect)((function(){null!==n&&""!==_.price&&""!==_.quantity?d(!0):d(!1)}),[n,_.price,_.quantity]);var T=function(e){var t=e.target,n=t.name,r=t.value,o=r;if("price"===n||"quantity"===n){var i=parseFloat(r);(isNaN(i)||i<=0)&&(o="")}E((0,K.Z)((0,K.Z)({},_),{},(0,J.Z)({},n,o)))},L=function(){var e=(0,G.Z)((0,W.Z)().mark((function e(){var t;return(0,W.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={name:n.value,price:_.price,quantity:_.quantity},e.next=4,O((0,le.fg)(t));case 4:se.Notify.success("\u0410\u043a\u0446\u0456\u044f ".concat(n.value," \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0434\u043e\u0434\u0430\u043d\u0430 \u0434\u043e \u0432\u0430\u0448\u043e\u0433\u043e \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044e!")),E({name:"",price:"",quantity:""}),h((function(e){return e+1})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),se.Notify.info("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u0456 \u0430\u043a\u0446\u0456\u0457:",e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),P=(0,r.useCallback)(function(){var e=(0,G.Z)((0,W.Z)().mark((function e(t){return(0,W.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O((0,le.Tt)(t));case 3:se.Notify.success("\u0410\u043a\u0446\u0456\u044f \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u0430 \u0437 \u0432\u0430\u0448\u043e\u0433\u043e \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044e!"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),se.Notify.info("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u0456 \u0430\u043a\u0446\u0456\u0457:",e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),[O]),F=function(){var e=(0,G.Z)((0,W.Z)().mark((function e(t,n){var r,o,i;return(0,W.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.trim()){e.next=3;break}return n([]),e.abrupt("return");case 3:return e.prev=3,e.next=6,O((0,ue.b)(t));case 6:r=e.sent,o=r.payload,i=o.map((function(e){return{value:e.symbol,label:"".concat(e.symbol," - ").concat(e.description)}})),n(i),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.log("Error fetching stock options:",e.t0.message),n([]);case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t,n){return e.apply(this,arguments)}}(),B=(0,r.useCallback)((function(e,t,n){var r=(n*t).toFixed(2),o=void 0!==x[e]?x[e]:0,i=(n*o).toFixed(2),a=(i-r).toFixed(2);return{totalPositionValue:r,currentStockPrice:o,currentTotalPositionValue:i,profitability:a,profitabilityPercentage:(a/r*100).toFixed(2)}}),[x]),D=(0,r.useCallback)((function(){var e=0,t=0,n=0,r={name:"",percentage:0};N.forEach((function(o){var i=o.name,a=o.price,c=o.quantity,s=B(i,a,c),l=s.totalPositionValue,u=s.currentTotalPositionValue,d=s.profitability,f=s.profitabilityPercentage;e+=parseFloat(u),t+=parseFloat(d),n+=parseFloat(l),parseFloat(f)>r.percentage&&(r={name:i,percentage:parseFloat(f)})}));var o=(t/n*100).toFixed(2);O((0,i.TF)(e)),O((0,i.ic)(t)),O((0,i.lE)(o)),O((0,i.w)(r))}),[N,B,O]);(0,r.useEffect)((function(){D()}),[N,D]);var R=(0,r.useMemo)((function(){return(0,X.jsxs)("table",{className:de.stocksTable,children:[(0,X.jsx)("thead",{className:de.stocksTableThead,children:(0,X.jsxs)("tr",{children:[(0,X.jsx)("th",{children:"\u0410\u043a\u0442\u0438\u0432"}),(0,X.jsx)("th",{children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c, \u0448\u0442"}),(0,X.jsxs)("th",{children:["\u0426\u0456\u043d\u0430 \u043a\u0443\u043f\u0456\u0432\u043b\u0456, ",I[C]]}),(0,X.jsxs)("th",{children:["\u0422\u0435\u043f\u0435\u0440. \u0446\u0456\u043d\u0430, ",I[C],(0,X.jsx)(b,{trigger:(0,X.jsx)(w,{className:de.tooltipIcon}),position:"bottom center",on:"hover",children:(0,X.jsx)("div",{className:de.tooltipContent,children:"\u041f\u043e\u0442\u043e\u0447\u043d\u0430 \u0431\u0456\u0440\u0436\u043e\u0432\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044c \u0430\u043a\u0446\u0456\u0457. \u042f\u043a\u0449\u043e \u0442\u043e\u0440\u0433\u0438 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043b\u0438\u0441\u044f, \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0430\u0454\u0442\u044c\u0441\u044f \u0446\u0456\u043d\u0430 \u0437\u0430\u043a\u0440\u0438\u0442\u0442\u044f. *\u0414\u0430\u043d\u0456 \u043e\u043d\u043e\u0432\u043b\u044e\u044e\u0442\u0441\u044f \u043f\u0440\u0438 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u0456 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0438, \u0430\u0431\u043e \u0437\u043c\u0456\u043d\u0430\u0445 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0456. \u0414\u043b\u044f \u0430\u0440\u0445\u0456\u0432\u043d\u0438\u0445 (\u043d\u0435 \u0442\u043e\u0440\u0433\u043e\u0432\u0430\u043d\u0438\u0445) \u0430\u043a\u0446\u0456\u0439 \u043f\u043e\u0442\u043e\u0447\u043d\u0430 \u0446\u0456\u043d\u0430 \u0437\u0430\u0432\u0436\u0434\u0438 \u0431\u0443\u0434\u0435 0."})})]}),(0,X.jsxs)("th",{children:["\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0441\u0443\u043c\u0430 \u043f\u043e\u0437\u0438\u0446\u0456\u0439, ",I[C],(0,X.jsx)(b,{trigger:(0,X.jsx)(w,{className:de.tooltipIcon}),position:"bottom center",on:"hover",children:(0,X.jsx)("div",{className:de.tooltipContent,children:"\u0426\u0435 \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0441\u0443\u043c\u043c\u0430 (\u043a\u0456\u043b\u044c\u043a\u0456\u0442\u044c * \u043d\u0430 \u0446\u0456\u043d\u0443 \u043a\u0443\u043f\u0456\u0432\u043b\u0456) \u0432\u0430\u0440\u0442\u043e\u0441\u0442\u0456 \u0430\u043a\u0446\u0456\u0439. \u0412\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0430\u0454 \u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0437\u0430\u0433\u0430\u043b\u043e\u043c \u0431\u0443\u043b\u043e \u0432\u0438\u0442\u0440\u0430\u0447\u0435\u043d\u043d\u043e \u043d\u0430 \u043a\u0443\u043f\u0456\u0432\u043b\u044e \u0430\u043a\u0446\u0456\u0457."})})]}),(0,X.jsxs)("th",{children:["\u041f\u043e\u0442\u043e\u0447\u043d\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044c \u043f\u043e\u0437\u0438\u0446\u0456\u0457, ",I[C],(0,X.jsx)(b,{trigger:(0,X.jsx)(w,{className:de.tooltipIcon}),position:"bottom center",on:"hover",children:(0,X.jsx)("div",{className:de.tooltipContent,children:"\u0426\u0435 \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0441\u0443\u043c\u043c\u0430 (\u043a\u0456\u043b\u044c\u043a\u0456\u0442\u044c * \u043d\u0430 \u043f\u043e\u0442\u043e\u0447\u043d\u0443 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044c) \u0430\u043a\u0446\u0456\u0439. \u0412\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0430\u0454 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0443 \u0446\u0456\u043d\u0443 \u043d\u0430 \u0434\u0430\u043d\u0438\u0439 \u043c\u043e\u043c\u0435\u043d\u0442."})})]}),(0,X.jsxs)("th",{children:["\u0414\u043e\u0445\u0456\u0434\u043d\u0456\u0441\u0442\u044c, ",I[C],(0,X.jsx)(b,{trigger:(0,X.jsx)(w,{className:de.tooltipIcon}),position:"bottom center",on:"hover",children:(0,X.jsx)("div",{className:de.tooltipContent,children:"\u0412\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0430\u0454 \u0441\u0443\u043c\u043c\u0443 \u043f\u0440\u0438\u0431\u0443\u0442\u043a\u0443/\u0437\u0431\u0438\u0442\u043a\u0443. \u0420\u043e\u0437\u0440\u0430\u0445\u043e\u0432\u0443\u0454\u0442\u0441\u044f \u0441\u0443\u043c\u0430\u0440\u043d\u0430 \u043f\u043e\u0442\u043e\u0447\u043d\u0430 \u0446\u0456\u043d\u0430 \u0432\u0456\u0434 \u0441\u0443\u043c\u0430\u0440\u043d\u043e\u0457 \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u043e\u0457 \u0446\u0456\u043d\u0438."})})]}),(0,X.jsxs)("th",{children:["\u0414\u043e\u0445\u0456\u0434\u043d\u0456\u0441\u0442\u044c, %",(0,X.jsx)(b,{trigger:(0,X.jsx)(w,{className:de.tooltipIcon}),position:"bottom center",on:"hover",children:(0,X.jsx)("div",{className:de.tooltipContent,children:"\u0412\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0430\u0454 \u0432\u0456\u0434\u0441\u043e\u0442\u043e\u043a \u043f\u0440\u0438\u0431\u0443\u0442\u043a\u0443/\u0437\u0431\u0438\u0442\u043a\u0443. \u0420\u043e\u0437\u0440\u0430\u0445\u043e\u0432\u0443\u0454\u0442\u0441\u044f \u0441\u0443\u043c\u0430\u0440\u043d\u0430 \u043f\u043e\u0442\u043e\u0447\u043d\u0430 \u0446\u0456\u043d\u0430 \u043f\u043e\u0434\u0456\u043b\u0435\u043d\u0430 \u043d\u0430 \u0441\u0443\u043c\u0430\u0440\u043d\u0443 \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0443 \u0446\u0456\u043d\u0438 \u0456 \u043f\u043e\u043c\u043d\u043e\u0436\u0435\u043d\u0430 \u043d\u0430 100%."})})]}),(0,X.jsxs)("th",{children:["\u0427\u0430\u0441\u0442\u043a\u0430 \u0432\u0456\u0434 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044e, %",(0,X.jsx)(b,{trigger:(0,X.jsx)(w,{className:de.tooltipIcon}),position:"bottom center",on:"hover",children:(0,X.jsx)("div",{className:de.tooltipContent,children:"\u0427\u0430\u0441\u0442\u043a\u0430 \u043f\u0430\u043f\u0435\u0440\u0443 \u043f\u043e\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0430 \u0434\u043e \u0441\u0443\u043c\u0430\u0440\u043d\u043e\u0457 \u0432\u0430\u0440\u0442\u043e\u0441\u0442\u0456 \u0430\u043a\u0442\u0438\u0432\u0456\u0432, \u0434\u043e \u044f\u043a\u043e\u0457 \u043d\u0430\u043b\u0435\u0436\u0438\u0442\u044c \u043f\u0430\u043f\u0456\u0440. \u0412\u0406\u0434\u043e\u0431\u0440\u0430\u0436\u0430\u0454 \u0434\u043e\u043b\u044e \u043f\u0430\u043f\u0435\u0440\u0443 \u0432\u0456\u0434 \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u044e \u0443 %."})})]}),(0,X.jsx)("th",{children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]})}),(0,X.jsx)("tbody",{className:de.stocksTableTbody,children:N.map((function(e){var t=e.id,n=e.name,r=e.price,o=e.quantity,i=B(n,r,o),a=i.totalPositionValue,c=i.currentStockPrice,s=i.currentTotalPositionValue,l=i.profitabilityPercentage,u=N.reduce((function(e,t){return e+t.price*t.quantity}),0);return(0,X.jsxs)("tr",{children:[(0,X.jsx)("td",{children:n}),(0,X.jsx)("td",{children:o}),(0,X.jsx)("td",{children:(r*Z).toFixed(2)}),(0,X.jsx)("td",{children:c.toFixed(2)}),(0,X.jsx)("td",{children:(a*Z).toFixed(2)}),(0,X.jsx)("td",{children:(s*Z).toFixed(2)}),(0,X.jsx)("td",{className:(s-a)*Z>=0?de.greenText:de.redText,children:((s-a)*Z).toFixed(2)}),(0,X.jsxs)("td",{className:l>=0?de.greenText:de.redText,children:[l,"%"]}),(0,X.jsxs)("td",{children:[(a/u*100).toFixed(2),"%"]}),(0,X.jsx)("td",{children:(0,X.jsx)("button",{className:de.trashBtn,onClick:function(){return P(t)},children:(0,X.jsx)(be,{className:de.trashIcon})})})]},t)}))})]})}),[N,Z,I,C,B,P]),A=(0,r.useCallback)(function(){var e=(0,G.Z)((0,W.Z)().mark((function e(t){var n,r;return(0,W.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O((0,ue.S)(t));case 3:n=e.sent,null!==(r=n.payload)&&y((function(e){return(0,K.Z)((0,K.Z)({},e),{},(0,J.Z)({},t,r))})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error getting stock price for ".concat(t,":"),e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),[O,y]);return(0,r.useEffect)((function(){N.forEach((function(e){var t=e.name;A(t)}))}),[N,A]),(0,r.useEffect)((function(){O((0,le.AL)())}),[O]),(0,X.jsxs)("div",{className:de.stocksWrapper,children:[(0,X.jsx)("div",{className:de.stocksHeader,children:(0,X.jsx)("h2",{className:de.stocksTitle,children:"\u0410\u043a\u0446\u0456\u0457"})}),(0,X.jsxs)("div",{className:de.stocksInputWrapper,children:[(0,X.jsx)(ce,{cacheOptions:!0,styles:fe,isClearable:!0,loadOptions:F,placeholder:"\u041d\u0430\u0437\u0432\u0430 \u0430\u043a\u0446\u0456\u0457",onChange:function(e){return c(e)}},v),(0,X.jsx)("input",{type:"number",name:"price",value:_.price,onChange:T,placeholder:"\u0426\u0456\u043d\u0430, $",autoComplete:"off",className:de.stocksInput}),(0,X.jsx)("input",{type:"number",name:"quantity",value:_.quantity,onChange:T,placeholder:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c, \u0448\u0442",autoComplete:"off",className:de.stocksInput}),(0,X.jsx)("button",{onClick:L,className:"".concat(de.stocksInputBtn," ").concat(u?"":de.stocksInputBtnDisabled),disabled:!u,children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0430\u043a\u0446\u0456\u044e"})]}),R]})}),xe="Portfolio_portfolioWrapper__dGpx9",ye=function(){return(0,X.jsxs)("div",{className:xe,children:[(0,X.jsx)(V,{}),(0,X.jsx)(ge,{})]})}}}]);
//# sourceMappingURL=590.8d2a1968.chunk.js.map