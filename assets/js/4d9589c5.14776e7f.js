(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{110:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(176)),c=["components"],i={title:"Plugins"},u={unversionedId:"advanced-guides/plugins",id:"advanced-guides/plugins",isDocsHomePage:!1,title:"Plugins",description:"PerfectGraph is built with the most needed feaatures. But sometimes we may want to add more features. To do that, we have team built plugins and we know the community will create more plugins to add more feature.",source:"@site/docs/advanced-guides/plugins.md",slug:"/advanced-guides/plugins",permalink:"/perfect-graph-docs/docs/advanced-guides/plugins",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/advanced-guides/plugins.md",version:"current",sidebar:"docs",previous:{title:"Text",permalink:"/perfect-graph-docs/docs/components/text"},next:{title:"modules",permalink:"/perfect-graph-docs/docs/type/modules"}},l=[],s={toc:l};function p(e){var t=e.components,r=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"PerfectGraph is built with the most needed feaatures. But sometimes we may want to add more features. To do that, we have team built plugins and we know the community will create more plugins to add more feature."),Object(a.b)("p",null,"You can check plugins under /plugins folder in perfect-graph. For now we have 2 plugins:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"controller: to facilitate the minumum requirements for a graph editor, we created this React hook."),Object(a.b)("li",{parentName:"ul"},"data-converter: Because we want to support multiple data type, we created the converter tool.")))}p.isMDXComponent=!0},176:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?o.a.createElement(f,i(i({ref:t},l),{},{components:r})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);