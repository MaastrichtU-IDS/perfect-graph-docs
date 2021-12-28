[perfect-graph](../README.md) / [Modules](../modules.md) / components/Graph

# Module: components/Graph

## Table of contents

### Type aliases

- [GraphProps](components_Graph.md#graphprops)

### Variables

- [Graph](components_Graph.md#graph)

### Functions

- [DefaultRenderClusterNode](components_Graph.md#defaultrenderclusternode)
- [DefaultRenderEdge](components_Graph.md#defaultrenderedge)
- [DefaultRenderNode](components_Graph.md#defaultrendernode)

## Type aliases

### GraphProps

Ƭ **GraphProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `children?` | `React.ReactNode` | - |
| `config?` | [`GraphConfig`](type.md#graphconfig) | All graph config for nodes and edges |
| `drawLine?` | [`DrawLine`](type.md#drawline) | The function to draw line for edge connection vectors |
| `edges` | [`EdgeData`](type.md#edgedata)[] | Edge data list to render |
| `extraData?` | `any` | To rerender the graph when the extra data changes |
| `nodes` | [`NodeData`](type.md#nodedata)[] | Node data list to render |
| `onPress?` | [`ViewportProps`](components_Viewport.md#viewportprops)[``"onPress"``] | Event handler for graph canvas background |
| `renderClusterNode?` | [`RenderClusterNode`](type.md#renderclusternode) | It returns a PIXI.DisplayObject instance as React.Node for the cluster node |
| `renderEdge?` | [`RenderEdge`](type.md#renderedge) | It returns a PIXI.DisplayObject instance as React.Node for the edge |
| `renderNode?` | [`RenderNode`](type.md#rendernode) | It returns a PIXI.DisplayObject instance as React.Node for the node |
| `selectedElementIds?` | `string`[] | It gives the selected nodes. It is used for selected node highlighting and DataBar |
| `style?` | `ViewProps`[``"style"``] | Style for graph container view |
| `onBoxSelection?` | (`c`: { `boundingBox`: `BoundingBox` ; `elements`: `cytoscape.Collection` ; `event`: `PIXI.InteractionEvent` ; `itemIds`: `string`[]  }) => `void` | - |

#### Defined in

[src/components/Graph/index.tsx:38](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/components/Graph/index.tsx#L38)

## Variables

### Graph

• **Graph**: `FC`<`PropsWithRef`<[`GraphRef`](type.md#graphref), [`GraphProps`](components_Graph.md#graphprops)\>\>

The stage creator for the network graph. It handles rendering operations of nodes and edges.

#### Defined in

[src/components/Graph/index.tsx:413](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/components/Graph/index.tsx#L413)

## Functions

### DefaultRenderClusterNode

▸ `Const` **DefaultRenderClusterNode**(`c`): `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Default render cluster node component. If renderClusterNode is not suplied, it will render.

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | { `config`: [`NodeConfig`](type.md#nodeconfig) ; `context`: [`NodeContext`](type.md#nodecontext) ; `element`: `NodeSingular` ; `item`: [`NodeData`](type.md#nodedata)  } & `RenderElementParams` |

#### Returns

`ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

[src/components/Graph/DefaultRenderClusterNode.tsx:10](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/components/Graph/DefaultRenderClusterNode.tsx#L10)

___

### DefaultRenderEdge

▸ `Const` **DefaultRenderEdge**(`c`): `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Default render edge component. If renderEdge is not suplied, it will render.

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | { `config`: [`EdgeConfig`](type.md#edgeconfig) ; `context`: [`EdgeContext`](type.md#edgecontext) ; `count`: `number` ; `element`: `EdgeSingular` ; `from`: `Position` ; `index`: `number` ; `item`: [`EdgeData`](type.md#edgedata) ; `sortedIndex`: `number` ; `sourceElement`: `NodeSingular` ; `targetElement`: `NodeSingular` ; `to`: `Position`  } & `RenderElementParams` |

#### Returns

`ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

[src/components/Graph/DefaultRenderEdge.tsx:10](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/components/Graph/DefaultRenderEdge.tsx#L10)

___

### DefaultRenderNode

▸ `Const` **DefaultRenderNode**(`c`): `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Default render node component. If renderNode is not suplied, it will render.

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | { `config`: [`NodeConfig`](type.md#nodeconfig) ; `context`: [`NodeContext`](type.md#nodecontext) ; `element`: `NodeSingular` ; `item`: [`NodeData`](type.md#nodedata)  } & `RenderElementParams` |

#### Returns

`ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

[src/components/Graph/DefaultRenderNode.tsx:10](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/components/Graph/DefaultRenderNode.tsx#L10)
