---
title: Graph
---

A React component to create a Graph View easily, you can just pass data and render methods.

## Examples

```js live=true
function MyGraph() {
  const [data, setData] = React.useState({
    nodes: [
      { id: 1, position: { x: 10, y: 10 } },
      { id: 2, position: { x: 300, y: 100 } },
    ],
    edges: [{ id: 51, source: 1, target: 2 }],
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

### `children`

| Type | Required |
| ---- | -------- |
| React.ReactNode | No      |

---

### `edges`

The edge item list.

| Type | Required |
| ---- | -------- |
| [EdgeItem](/docs/type#edgeitem)[] | Yes      |

---

### `extraData`

A marker property for telling the list to re-render (since it implements PureComponent). If any of your renderItem, Header, Footer, etc. functions depend on anything outside of the data prop, stick it here and treat it immutably.

| Type | Required |
| ---- | -------- |
| any | No      |

---

### `style`


| Type  | Required |
| ----- | -------- |
| style | No       |

- [ViewStyleProps](https://reactnative.dev/docs/view-style-props)

---

### `nodes`

The node item list.

| Type | Required |
| ---- | -------- |
| [NodeItem](/docs/type#nodeitem)[] | Yes      |

---

### `renderNode`

`(info: RenderNodeInput) => ?React.Element\<any\>`

Takes an item from `data` and renders it into the list

Parameters: [RenderNodeInput](/docs/type#rendernodeinput)

| Type | Required |
| ---- | -------- |
| function | No      |

---

### `renderEdge`

`(info: RenderEdgeInput) => ?React.Element\<any\>`

Takes an item from `data` and renders it into the list

Parameters: [RenderEdgeInput](/docs/type#renderedgeinput)

| Type | Required |
| ---- | -------- |
| function | No      |

---

### `renderClusterNode`

`(info: RenderNodeInput) => ?React.Element\<any\>`

Takes an item from `data` and renders it into the list

Parameters: [RenderNodeInput](/docs/type#rendernodeinput)

| Type | Required |
| ---- | -------- |
| function | No      |

---

### `drawLine`

| Type | Required |
| ---- | -------- |
| [DrawLine](/docs/type#drawline) | No      |

---

### `onPress`

Invoked on press background. 

| Type | Required |
| ---- | -------- |
| function | No      |

---

### `config`

| Type | Required |
| ---- | -------- |
| [GraphConfig](/docs/type#graphconfig) | No      |

---

### `selectedElementIds`

| Type | Required |
| ---- | -------- |
| string[] | No      |

---

### `onBoxSelection`

| Type  | Required |
| ----- | -------- |
| `(params: {
    event: PIXI.InteractionEvent,
    elements: cytoscape.Collection,
    elementIds: string[],
    boundingBox: BoundingBox;
  }) => boolean` | Yes     |

Parameters:  
  - params: {
    element: [NodeElement](#nodeelement);
    event: [PIXI.InteractionEvent](https://pixijs.download/dev/docs/PIXI.InteractionEvent.html);
    elements: [cytoscape.Collection](https://js.cytoscape.org/#collection);
    elementIds: string[];
    boundingBox: [BoundingBox](#boundingbox);
  }

---


## BoundingBox

### `x`

| Type | Required |
| ---- | -------- |
| number | Yes      |

---

### `y`

| Type | Required |
| ---- | -------- |
| number | Yes      |

---

### `width`

| Type | Required |
| ---- | -------- |
| number | Yes      |

---

### `height`

| Type | Required |
| ---- | -------- |
| number | Yes      |

---
