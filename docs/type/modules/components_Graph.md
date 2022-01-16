[perfect-graph](../README.md) / [Modules](../modules.md) / components/Graph

# Module: components/Graph

## Table of contents

### References

- [DefaultRenderClusterNode](components_Graph.md#defaultrenderclusternode)
- [DefaultRenderEdge](components_Graph.md#defaultrenderedge)
- [DefaultRenderNode](components_Graph.md#defaultrendernode)

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
| `children?` | `React.ReactNode` | - |
| `config?` | `GraphConfig` | All graph config for nodes and edges |
| `drawLine?` | `DrawLine` | The function to draw line for edge connection vectors |
| `edges` | `EdgeData`[] | Edge data list to render |
| `extraData?` | `any` | To rerender the graph when the extra data changes |
| `nodes` | `NodeData`[] | Node data list to render |
| `onBoxSelection?` | `OnBoxSelection` | Event handler for box selection event. It gives the selected nodes |
| `onPress?` | [`ViewportOnPress`](components_Viewport.md#viewportonpress) | Event handler for graph canvas background |
| `renderClusterNode?` | `RenderClusterNode` | It returns a PIXI.DisplayObject instance as React.Node for the cluster node |
| `renderEdge?` | `RenderEdge` | It returns a PIXI.DisplayObject instance as React.Node for the edge |
| `renderNode?` | `RenderNode` | It returns a PIXI.DisplayObject instance as React.Node for the node |
| `selectedElementIds?` | `string`[] | It gives the selected nodes. It is used for selected node highlighting and DataBar |
| `style?` | `ViewProps`[``"style"``] | Style for graph container view |

#### Defined in

[components/Graph/index.tsx:34](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/components/Graph/index.tsx#L34)

## Variables

### Graph

• **Graph**: `FC`<`PropsWithRef`<`GraphRef`, [`GraphProps`](components_Graph.md#graphprops)\>\>

The stage creator for the network graph. It handles rendering operations of nodes and edges.

#### Defined in

[components/Graph/index.tsx:409](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/components/Graph/index.tsx#L409)
