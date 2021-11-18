"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2302],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return y}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(r),y=a,m=f["".concat(c,".").concat(y)]||f[y]||s[y]||o;return r?n.createElement(m,p(p({ref:t},u),{},{components:r})):n.createElement(m,p({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4182:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),p=["components"],i={id:"toArray"},c=void 0,l={unversionedId:"toArray",id:"toArray",isDocsHomePage:!1,title:"toArray",description:"toArray() function",source:"@site/docs/toArray.md",sourceDirName:".",slug:"/toArray",permalink:"/docs/toArray",tags:[],version:"current",frontMatter:{id:"toArray"},sidebar:"docs",previous:{title:"tap",permalink:"/docs/tap"}},u=[{value:"toArray() function",id:"toarray-function",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],s={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"toarray-function"},"toArray() function"),(0,o.kt)("p",null,"Take item from Iterable/AsyncIterable and returns an array It is recommended to use ",(0,o.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/pipe"},"pipe")," together"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function toArray<A extends Iterable<unknown> | AsyncIterable<unknown>>(iter: A): ReturnArrayType<A>;\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"pipe(\n [1, 2, 3, 4, 5],\n map(a => a + 10),\n filter(a => a % 2 === 0),\n toArray,\n); // [12, 14]\n\nawait pipe(\n Promise.resolve([1, 2, 3, 4, 5])\n map(a => a + 10),\n filter(a => a % 2 === 0),\n toArray,\n); // [12, 14]\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/fxts-toarray-fy84i"},"Try It")),(0,o.kt)("p",null,"see ",(0,o.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/pipe"},"pipe"),", ",(0,o.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/toAsync"},"toAsync"),", ",(0,o.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/map"},"map"),", ",(0,o.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/filter"},"filter")))}f.isMDXComponent=!0}}]);