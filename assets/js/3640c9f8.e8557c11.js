(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(177)),i=["components"],c={},l={unversionedId:"type/README",id:"type/README",isDocsHomePage:!1,title:"README",description:"perfect-graph / Modules",source:"@site/docs/type/README.md",slug:"/type/README",permalink:"/perfect-graph-docs/docs/type/README",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/type/README.md",version:"current"},s=[{value:"Motivation",id:"motivation",children:[]},{value:"Usage",id:"usage",children:[]}],p={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"perfect-graph / ",Object(o.b)("a",{parentName:"p",href:"/perfect-graph-docs/docs/type/modules"},"Modules")),Object(o.b)("h1",{id:"perfectgraph"},"PerfectGraph"),Object(o.b)("h2",{id:"motivation"},"Motivation"),Object(o.b)("p",null,"We want to build a collaborative Knowledge Graph Editor. To achive that goal we need a Graph Visualizer on a web browser and it needs to have a declarative rendering. Because in imperative style we need to call appropriate api functions respect to the data changes like addNode, deleteNode etc. But we just want to change JSON data (node and edge information) and render elements respectively to the changes."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"First, install ",Object(o.b)("a",{href:"https://nodejs.org/en/download/",target:"_blank"},"Nodejs")," and ",Object(o.b)("a",{href:"https://classic.yarnpkg.com/en/docs/install/",target:"_blank"},"Yarn")," to your working environment. Then"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"yarn global add expo-cli\n")),Object(o.b)("p",null,"Then,"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"expo init my-project\ncd my-project\nyarn add perfect-graph colay colay-ui immer\n")),Object(o.b)("p",null,"After you can write this command to the terminal in your project directory"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"yarn web\n")),Object(o.b)("p",null,"So let's start coding"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { Graph } from \"perfect-graph\";\n\nfunction MyGraph() {\n  return (\n    <Graph\n      style={{ width: \"100%\", height: 250 }}\n      nodes={[\n        { id: '1', position: { x: 10, y: 10 } },\n        { id: '2', position: { x: 300, y: 100 } },\n      ]}\n      edges={[{ id: '51', source: '1', target: '2' }]}\n    />\n  );\n}\n")),Object(o.b)("p",null,"To use GraphEditor you need to install material-ui packages. We use the latest version: yarn add @mui/icons-material @mui/material @mui/styles @emotion/react @emotion/styled react-beautiful-dnd @rjsf/core @rjsf/material-ui react-color"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { GraphEditor } from \"perfect-graph\";\nimport { useController } from \"perfect-graph/plugins/controller\";\n\nfunction MyGraphEditor() {\n  const [controllerProps] = useController({\n    nodes: [\n      { id: '1', position: { x: 10, y: 10 } },\n      { id: '2', position: { x: 300, y: 100 } },\n    ],\n    edges: [{ id: '51', source: '1', target: '2' }],\n  });\n  });\n  return (\n    <GraphEditor\n      style={{ width: \"100%\", height: 250 }}\n      {...controllerProps}\n    />\n  );\n}\n")),Object(o.b)("p",null,"To have json editor: yarn add brace jsoneditor jsoneditor-react"),Object(o.b)("p",null,"To use rdf based operation please install the required dependencies: yarn add jsonld jsonld-context-parser n3 rdf-literal rdflib"),Object(o.b)("p",null,"To use layouts, please install the required dependencies:\nyarn add cytoscape-avsdf cytoscape-cise cytoscape-cola cytoscape-d3-force cytoscape-dagre cytoscape-euler cytoscape-fcose cytoscape-klay cytoscape-spread"),Object(o.b)("p",null,"To support material-ui v5 with @rjsf/material-ui, we need to add some special configuration until they have fully support for v5"),Object(o.b)("p",null,"// webpack.config.js\nconst createExpoWebpackConfigAsync = require('@expo/webpack-config');"),Object(o.b)("p",null,"module.exports = async function (env, argv) {\nconst config = await createExpoWebpackConfigAsync({\n...env,\nbabel: {\ndangerouslyAddModulePathsToTranspile: ","['@rjsf/material-ui']","\n}\n}, argv);\nreturn config;\n};"),Object(o.b)("p",null,"// babel.config.js\nmodule.exports = function(api) {\napi.cache(true);\nreturn {\npresets: ","['babel-preset-expo']",',\n"plugins": [\n[\n"module-resolver",\n{\n"extensions": ','[\n".js",\n".jsx",\n".es",\n".es6",\n".mjs",\n".ts",\n".tsx",\n]',",\n\"alias\": {\n'@material-ui/core': '@mui/material',\n'@material-ui/icons': '@mui/icons-material',\n'@material-ui/styles': '@mui/styles',\n}\n}\n],\n]\n};\n};"),Object(o.b)("p",null,"If the PIXI.js renderer takes a lot time to render all elements and blocks the UI then consider on:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Decreasing the view resolution and settings quality\nIn example when a huge data chunk imported to perfect-graph, if the view quality is very high ; then PIXI.js will block (to render the elements with high view quality) the UI thread and cause strange issues. Set low view quality settings before importing the data chunk and let Adaptive Performance Optimizer do the rest of the optimization.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If there is an error: Can not set readonly 'x' of '#Object'\nThat could be related with position ; If you use cy.$(id).position() in somewhere and store it that can cause an issue. Use cy.$(id).position().x , cy.$(id).position().y"))),Object(o.b)("p",null,"Furthermore please refer to the Components Section."))}u.isMDXComponent=!0},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);