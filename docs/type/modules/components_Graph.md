[perfect-graph](../README.md) / [Modules](../modules.md) / components/Graph

# Module: components/Graph

## Table of contents

### References

- [DefaultRenderClusterNode](components_Graph.md#defaultrenderclusternode)
- [DefaultRenderEdge](components_Graph.md#defaultrenderedge)
- [DefaultRenderNode](components_Graph.md#defaultrendernode)

### Namespaces

- [&lt;internal\&gt;](components_Graph._internal_.md)

### Type aliases

- [GraphProps](components_Graph.md#graphprops)

### Variables

- [Graph](components_Graph.md#graph)

## References

### DefaultRenderClusterNode

Re-exports [DefaultRenderClusterNode](components_Graph_DefaultRenderClusterNode.md#defaultrenderclusternode)

___

### DefaultRenderEdge

Re-exports [DefaultRenderEdge](components_Graph_DefaultRenderEdge.md#defaultrenderedge)

___

### DefaultRenderNode

Re-exports [DefaultRenderNode](components_Graph_DefaultRenderNode.md#defaultrendernode)

## Type aliases

### GraphProps

Ƭ **GraphProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `children?` | [`ReactNode`](components_ClusterNodeContainer._internal_.md#reactnode) | - |
| `config?` | [`GraphConfig`](components_Graph._internal_.md#graphconfig) | All graph config for nodes and edges |
| `drawLine?` | [`DrawLine`](components_EdgeContainer._internal_.md#drawline) | The function to draw line for edge connection vectors |
| `edges` | [`EdgeData`](components_ClusterNodeContainer._internal_.md#edgedata)[] | Edge data list to render |
| `extraData?` | `any` | To rerender the graph when the extra data changes |
| `nodes` | [`NodeData`](components_ClusterNodeContainer._internal_.md#nodedata)[] | Node data list to render |
| `onBoxSelection?` | [`OnBoxSelection`](components_Graph._internal_.md#onboxselection) | Event handler for box selection event. It gives the selected nodes |
| `onPress?` | [`ViewportOnPress`](components_Viewport.md#viewportonpress) | Event handler for graph canvas background |
| `renderClusterNode?` | [`RenderClusterNode`](components_ClusterNodeContainer._internal_.md#renderclusternode) | It returns a PIXI.DisplayObject instance as React.Node for the cluster node |
| `renderEdge?` | [`RenderEdge`](components_EdgeContainer._internal_.md#renderedge) | It returns a PIXI.DisplayObject instance as React.Node for the edge |
| `renderNode?` | [`RenderNode`](components_Graph._internal_.md#rendernode) | It returns a PIXI.DisplayObject instance as React.Node for the node |
| `selectedElementIds?` | `string`[] | It gives the selected nodes. It is used for selected node highlighting and DataBar |
| `style?` | [`ViewProps`](components_Graph._internal_.md#viewprops)[``"style"``] | Style for graph container view |

#### Defined in

[src/components/Graph/index.tsx:34](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/Graph/index.tsx#L34)

## Variables

### Graph

• **Graph**: [`FC`](components_ClusterNodeContainer._internal_.md#fc)<[`PropsWithRef`](components_Container._internal_.md#propswithref)<[`GraphRef`](components_ClusterNodeContainer._internal_.md#graphref), [`GraphProps`](components_Graph.md#graphprops)\>\>

The stage creator for the network graph. It handles rendering operations of nodes and edges.

#### Defined in

[src/components/Graph/index.tsx:404](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/Graph/index.tsx#L404)
