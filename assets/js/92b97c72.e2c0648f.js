(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{130:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return d})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a(3),r=a(7),o=(a(0),a(177)),b=["components"],d={title:"GraphEditor"},i={unversionedId:"components/graph-editor",id:"components/graph-editor",isDocsHomePage:!1,title:"GraphEditor",description:"A React component to create a Graph Editor easily, you can just pass data and render methods.",source:"@site/docs/components/graph-editor.md",slug:"/components/graph-editor",permalink:"/perfect-graph-docs/docs/components/graph-editor",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/components/graph-editor.md",version:"current",sidebar:"docs",previous:{title:"Installation",permalink:"/perfect-graph-docs/docs/getting-started/installation"},next:{title:"Graph",permalink:"/perfect-graph-docs/docs/components/graph"}},l=[{value:"Examples",id:"examples",children:[]},{value:"Props",id:"props",children:[]}],p={toc:l};function c(e){var t=e.components,a=Object(r.a)(e,b);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A React component to create a Graph Editor easily, you can just pass data and render methods."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:"live=true",live:"true"},'function MyGraphEditor() {\n  const [data, setData] = React.useState({\n    nodes: [\n      { id: "1", position: { x: 10, y: 10 } },\n      { id: "2", position: { x: 300, y: 100 } },\n    ],\n    edges: [{ id: "edge:1", source: "1", target: "2" }],\n  });\n  return (\n    <Graph\n      style={{ width: "100%", height: 250 }}\n      nodes={data.nodes}\n      edges={data.edges}\n    />\n  );\n}\n')),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"),Object(o.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"actionBar?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"../type/modules/components_GraphEditor_ActionBar#actionbarconfig"},Object(o.b)("inlineCode",{parentName:"a"},"ActionBarConfig"))),Object(o.b)("td",{parentName:"tr",align:"left"},"Config for ActionBar")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"children?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"../type/modules/components_ClusterNodeContainer._internal_#reactnode"},Object(o.b)("inlineCode",{parentName:"a"},"ReactNode"))),Object(o.b)("td",{parentName:"tr",align:"left"},"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"config?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"../type/modules/components_GraphEditor._internal_#grapheditorconfig"},Object(o.b)("inlineCode",{parentName:"a"},"GraphEditorConfig"))),Object(o.b)("td",{parentName:"tr",align:"left"},"GraphEditor config data for all operations.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"dataBar?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"../type/modules/components_GraphEditor_DataBar#databarprops"},Object(o.b)("inlineCode",{parentName:"a"},"DataBarProps"))),Object(o.b)("td",{parentName:"tr",align:"left"},"Config for DataBar")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"drawLine?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"../type/modules/components_EdgeContainer._internal_#drawline"},Object(o.b)("inlineCode",{parentName:"a"},"DrawLine"))),Object(o.b)("td",{parentName:"tr",align:"left"},"The function to draw line for edge connection vectors")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"edges")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"../type/modules/components_ClusterNodeContainer._internal_#edgedata"},Object(o.b)("inlineCode",{parentName:"a"},"EdgeData")),"[]"),Object(o.b)("td",{parentName:"tr",align:"left"},"Edge data list to render")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"eventHistory?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"../type/modules/components_GraphEditor._internal_#eventhistory"},Object(o.b)("inlineCode",{parentName:"a"},"EventHistory"))),Object(o.b)("td",{parentName:"tr",align:"left"},"Event history will be displayed on SettingsBar")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"events?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"../type/modules/components_GraphEditor._internal_#recordedevent"},Object(o.b)("inlineCode",{parentName:"a"},"RecordedEvent")),"[]"),Object(o.b)("td",{parentName:"tr",align:"left"},"Recorded events will be displayed on SettingsBar")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"extraData?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"any")),Object(o.b)("td",{parentName:"tr",align:"left"},"To rerender the graph when the extra data changes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"graphConfig?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"../type/modules/components_Graph._internal_#graphconfig"},Object(o.b)("inlineCode",{parentName:"a"},"GraphConfig"))),Object(o.b)("td",{parentName:"tr",align:"left"},"All graph config data for nodes and edges. It will supply the config data for the graph.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"isFocusMode?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"boolean")),Object(o.b)("td",{parentName:"tr",align:"left"},"Focus mode for chunk stacked nodes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"isLoading?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"boolean")),Object(o.b)("td",{parentName:"tr",align:"left"},"Display loading indicator")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"label?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"../type/modules/components_GraphEditor._internal_#graphlabeldata"},Object(o.b)("inlineCode",{parentName:"a"},"GraphLabelData"))),Object(o.b)("td",{parentName:"tr",align:"left"},"Config for labels of nodes and edges")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"modals?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"Object")),Object(o.b)("td",{parentName:"tr",align:"left"},"Modal components for displaying modal dialogs")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"modals.ElementSettings?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"../type/modules/components_GraphEditor_ModalComponent#modalcomponentprops"},Object(o.b)("inlineCode",{parentName:"a"},"ModalComponentProps"))),Object(o.b)("td",{parentName:"tr",align:"left"},"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"mode?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"../type/modules/components_GraphEditor._internal_#editormode"},Object(o.b)("inlineCode",{parentName:"a"},"EditorMode"))),Object(o.b)("td",{parentName:"tr",align:"left"},"Editor mode for changing actions and mouse icon")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"networkStatistics?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"../type/modules/components_GraphEditor._internal_#networkstatistics"},Object(o.b)("inlineCode",{parentName:"a"},"NetworkStatistics"))),Object(o.b)("td",{parentName:"tr",align:"left"},"Calculated network statistics will be displayed on SettingsBar")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"nodes")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"../type/modules/components_ClusterNodeContainer._internal_#nodedata"},Object(o.b)("inlineCode",{parentName:"a"},"NodeData")),"[]"),Object(o.b)("td",{parentName:"tr",align:"left"},"Node data list to render")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"onBoxSelection?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"../type/modules/components_Graph._internal_#onboxselection"},Object(o.b)("inlineCode",{parentName:"a"},"OnBoxSelection"))),Object(o.b)("td",{parentName:"tr",align:"left"},"Event handler for box selection event. It gives the selected nodes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"onEvent?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"../type/modules/components_GraphEditor._internal_#onevent"},Object(o.b)("inlineCode",{parentName:"a"},"OnEvent"))),Object(o.b)("td",{parentName:"tr",align:"left"},"Event handler for all events that are emitted by the graph editor.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"playlists?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"../type/modules/components_GraphEditor._internal_#playlist"},Object(o.b)("inlineCode",{parentName:"a"},"Playlist")),"[]"),Object(o.b)("td",{parentName:"tr",align:"left"},"Events playlist will be displayed on SettingsBar")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"preferencesModal?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"../type/modules/components_GraphEditor_PreferencesModal#preferencesmodalprops"},Object(o.b)("inlineCode",{parentName:"a"},"PreferencesModalProps"))),Object(o.b)("td",{parentName:"tr",align:"left"},"Config for PreferencesModal")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"previousDataList?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"../type/modules/components_GraphEditor._internal_#previousdata"},Object(o.b)("inlineCode",{parentName:"a"},"PreviousData")),"[]"),Object(o.b)("td",{parentName:"tr",align:"left"},"Focus mode stack")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"renderClusterNode?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"../type/modules/components_ClusterNodeContainer._internal_#renderclusternode"},Object(o.b)("inlineCode",{parentName:"a"},"RenderClusterNode"))),Object(o.b)("td",{parentName:"tr",align:"left"},"It returns a PIXI.DisplayObject instance as React.Node for the cluster node")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"renderEdge?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"../type/modules/components_GraphEditor._internal_#grapheditorrenderedge"},Object(o.b)("inlineCode",{parentName:"a"},"GraphEditorRenderEdge")),"<",Object(o.b)("a",{parentName:"td",href:"../type/modules/components_GraphEditor._internal_#renderelementadditionalinfo"},Object(o.b)("inlineCode",{parentName:"a"},"RenderElementAdditionalInfo")),">"),Object(o.b)("td",{parentName:"tr",align:"left"},"It returns a PIXI.DisplayObject instance as React.Node for the edge")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"renderNode?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"../type/modules/components_GraphEditor._internal_#grapheditorrendernode"},Object(o.b)("inlineCode",{parentName:"a"},"GraphEditorRenderNode")),"<",Object(o.b)("a",{parentName:"td",href:"../type/modules/components_GraphEditor._internal_#renderelementadditionalinfo"},Object(o.b)("inlineCode",{parentName:"a"},"RenderElementAdditionalInfo")),">"),Object(o.b)("td",{parentName:"tr",align:"left"},"It returns a PIXI.DisplayObject instance as React.Node for the node")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"selectedElementIds?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"string"),"[]"),Object(o.b)("td",{parentName:"tr",align:"left"},"It gives the selected nodes. It is used for selected node highlighting and DataBar")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"settingsBar?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"../type/modules/components_GraphEditor_SettingsBar#settingsbarprops"},Object(o.b)("inlineCode",{parentName:"a"},"SettingsBarProps"))),Object(o.b)("td",{parentName:"tr",align:"left"},"Config for SettingsBar")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"style?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"../type/modules/components_Graph._internal_#viewprops"},Object(o.b)("inlineCode",{parentName:"a"},"ViewProps")),"[",Object(o.b)("inlineCode",{parentName:"td"},'"style"'),"]"),Object(o.b)("td",{parentName:"tr",align:"left"},"Style for graph container view")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"renderMoreAction?")),Object(o.b)("td",{parentName:"tr",align:"left"},"() => ","[",Object(o.b)("inlineCode",{parentName:"td"},"ReactElement"),"]","<",Object(o.b)("inlineCode",{parentName:"td"},"any"),", ",Object(o.b)("inlineCode",{parentName:"td"},"string")," ","|"," ",Object(o.b)("a",{parentName:"td",href:"../type/modules/components_ClusterNodeContainer._internal_#jsxelementconstructor"},Object(o.b)("inlineCode",{parentName:"a"},"JSXElementConstructor")),"<",Object(o.b)("inlineCode",{parentName:"td"},"any"),">",">"),Object(o.b)("td",{parentName:"tr",align:"left"},"-")))))}c.isMDXComponent=!0},177:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},c=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,b=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=p(a),s=n,O=c["".concat(b,".").concat(s)]||c[s]||m[s]||o;return a?r.a.createElement(O,d(d({ref:t},l),{},{components:a})):r.a.createElement(O,d({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,b=new Array(o);b[0]=s;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:n,b[1]=d;for(var l=2;l<o;l++)b[l]=a[l];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);