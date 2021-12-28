---
title: Graph
---

A React component to create a Graph View easily, you can just pass data and render methods.

## Examples

```js live=true
function MyGraph() {
  const [data, setData] = React.useState({
    nodes: [
      { id: '1', position: { x: 10, y: 10 } },
      { id: '2', position: { x: 300, y: 100 } },
    ],
    edges: [{ id: 'edge:1', source: '1', target: '2' }],
  });
  return (
    <Graph
      style={{ width: "100%", height: 250 }}
      onPress={({ position }) => {
        setData({
          nodes: [
            ...data.nodes,
            { id: "" + (Math.random() * 1000).toFixed(0), position },
          ],
          edges: data.edges,
        });
      }}
      nodes={data.nodes}
      edges={data.edges}
    />
  );
}
```

---

# Reference

## Props

| Name | Type | Description |
| :------ | :------ | :------ |
| `children?` | [`ReactNode`](../type/modules/components_ClusterNodeContainer._internal_.md#reactnode) | - |
| `config?` | [`GraphConfig`](../type/modules/components_Graph._internal_.md#graphconfig) | All graph config for nodes and edges |
| `drawLine?` | [`DrawLine`](../type/modules/components_EdgeContainer._internal_.md#drawline) | The function to draw line for edge connection vectors |
| `edges` | [`EdgeData`](../type/modules/components_ClusterNodeContainer._internal_.md#edgedata)[] | Edge data list to render |
| `extraData?` | `any` | To rerender the graph when the extra data changes |
| `nodes` | [`NodeData`](../type/modules/components_ClusterNodeContainer._internal_.md#nodedata)[] | Node data list to render |
| `onBoxSelection?` | [`OnBoxSelection`](../type/modules/components_Graph._internal_.md#onboxselection) | Event handler for box selection event. It gives the selected nodes |
| `onPress?` | [`ViewportOnPress`](../type/modules/components_Viewport.md#viewportonpress) | Event handler for graph canvas background |
| `renderClusterNode?` | [`RenderClusterNode`](../type/modules/components_ClusterNodeContainer._internal_.md#renderclusternode) | It returns a PIXI.DisplayObject instance as React.Node for the cluster node |
| `renderEdge?` | [`RenderEdge`](../type/modules/components_EdgeContainer._internal_.md#renderedge) | It returns a PIXI.DisplayObject instance as React.Node for the edge |
| `renderNode?` | [`RenderNode`](../type/modules/components_Graph._internal_.md#rendernode) | It returns a PIXI.DisplayObject instance as React.Node for the node |
| `selectedElementIds?` | `string`[] | It gives the selected nodes. It is used for selected node highlighting and DataBar |
| `style?` | [`ViewProps`](../type/modules/components_Graph._internal_.md#viewprops)[``"style"``] | Style for graph container view |