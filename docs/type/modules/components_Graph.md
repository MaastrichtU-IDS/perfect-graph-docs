[perfect-graph](../README.md) / [Modules](../modules.md) / components/Graph

# Module: components/Graph

## Table of contents

### References

- [DefaultRenderClusterNode](components_Graph#defaultrenderclusternode)
- [DefaultRenderEdge](components_Graph#defaultrenderedge)
- [DefaultRenderNode](components_Graph#defaultrendernode)

### Namespaces

- [&lt;internal\&gt;](components_Graph._internal_.md)

### Type aliases

- [GraphProps](components_Graph#graphprops)

### Variables

- [Graph](components_Graph#graph)

## References

### DefaultRenderClusterNode

Re-exports [DefaultRenderClusterNode](components_Graph_DefaultRenderClusterNode#defaultrenderclusternode)

---

### DefaultRenderEdge

Re-exports [DefaultRenderEdge](components_Graph_DefaultRenderEdge#defaultrenderedge)

---

### DefaultRenderNode

Re-exports [DefaultRenderNode](components_Graph_DefaultRenderNode#defaultrendernode)

## Type aliases

### GraphProps

Ƭ **GraphProps**: `Object`

#### Type declaration

| Name                  | Type                                                                                | Description                                                                        |
| :-------------------- | :---------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------- |
| `children?`           | `React.ReactNode`                                                                   | -                                                                                  |
| `config?`             | [`GraphConfig`](components_Graph._internal_#graphconfig)                            | All graph config for nodes and edges                                               |
| `drawLine?`           | [`DrawLine`](components_EdgeContainer._internal_#drawline)                          | The function to draw line for edge connection vectors                              |
| `edges`               | [`EdgeData`](components_ClusterNodeContainer._internal_#edgedata)[]                 | Edge data list to render                                                           |
| `extraData?`          | `any`                                                                               | To rerender the graph when the extra data changes                                  |
| `nodes`               | [`NodeData`](components_ClusterNodeContainer._internal_#nodedata)[]                 | Node data list to render                                                           |
| `onBoxSelection?`     | [`OnBoxSelection`](components_Graph._internal_#onboxselection)                      | Event handler for box selection event. It gives the selected nodes                 |
| `onPress?`            | [`ViewportOnPress`](components_Viewport#viewportonpress)                            | Event handler for graph canvas background                                          |
| `renderClusterNode?`  | [`RenderClusterNode`](components_ClusterNodeContainer._internal_#renderclusternode) | It returns a PIXI.DisplayObject instance as React.Node for the cluster node        |
| `renderEdge?`         | [`RenderEdge`](components_EdgeContainer._internal_#renderedge)                      | It returns a PIXI.DisplayObject instance as React.Node for the edge                |
| `renderNode?`         | [`RenderNode`](components_Graph._internal_#rendernode)                              | It returns a PIXI.DisplayObject instance as React.Node for the node                |
| `selectedElementIds?` | `string`[]                                                                          | It gives the selected nodes. It is used for selected node highlighting and DataBar |
| `style?`              | `ViewProps`[``"style"``]                                                            | Style for graph container view                                                     |

#### Defined in

[components/Graph/index.tsx:34](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/Graph/index.tsx#L34)

## Variables

### Graph

• **Graph**: `FC`<[`PropsWithRef`](components_Container._internal_#propswithref)<[`GraphRef`](components_ClusterNodeContainer._internal_#graphref), [`GraphProps`](components_Graph#graphprops)\>\>

The stage creator for the network graph. It handles rendering operations of nodes and edges.

#### Defined in

[components/Graph/index.tsx:409](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/Graph/index.tsx#L409)
