(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,d=u["".concat(o,".").concat(f)]||u[f]||b[f]||c;return n?a.a.createElement(d,i(i({ref:t},s),{},{components:n})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),c=(n(0),n(115)),o={title:"Design Principles"},i={unversionedId:"perfect-graph/design-principles",id:"perfect-graph/design-principles",isDocsHomePage:!1,title:"Design Principles",description:"Declarative Rendering: We can get benefit React for declarative UIs. You can design views with JSX code. It is way more easier than imperative style. Think about we have a button and we want to attach some properties.",source:"@site/docs/perfect-graph/design-principles.md",slug:"/perfect-graph/design-principles",permalink:"/perfect-graph-docs/docs/perfect-graph/design-principles",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/perfect-graph/design-principles.md",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/perfect-graph-docs/docs/"},next:{title:"Contributing",permalink:"/perfect-graph-docs/docs/perfect-graph/contributing"}},p=[],s={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Declarative Rendering: We can get benefit React for declarative UIs. You can design views with JSX code. It is way more easier than imperative style. Think about we have a button and we want to attach some properties."),Object(c.b)("p",null,"Imperative Way:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"button.onclick = function(event) {\n  ...\n};\nbutton.style.height = 100\nbutton.style.width = 100\n")),Object(c.b)("p",null,"Declarative Way:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"<button\n  onClick={function(event) {\n    ...\n  }}\n  style={{\n    width: 100,\n    height: 100\n  }}\n/>\n")),Object(c.b)("p",null,"Component-Based: Decouple the different issues between components. We can create encapsulated components that manage their own state or use prebuilt components. It is simplifying the complex apps. We have couple of primitive components: "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/components/view"},"View")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/components/text"},"Text")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/components/image"},"Image"))))}l.isMDXComponent=!0}}]);