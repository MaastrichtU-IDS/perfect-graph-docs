---
title: GraphEditor
---

A React component to create a Graph Editor easily, you can just pass data and render methods.

## Examples

```js live=true
function MyGraphEditor() {
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

### `graphConfig`

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
  }) => boolean` | No     |

Parameters:  
  - params: {
    element: [NodeElement](#nodeelement);
    event: [PIXI.InteractionEvent](https://pixijs.download/dev/docs/PIXI.InteractionEvent.html);
    elements: [cytoscape.Collection](https://js.cytoscape.org/#collection);
    elementIds: string[];
    boundingBox: [BoundingBox](#boundingbox);
  }

---

### `onEvent`

| Type  | Required |
| ----- | -------- |
| `(params: EventInfo) => void` | No     |

Parameters:  
  - params: [EventInfo](/docs/type#eventinfo)

---

### `config`

| Type  | Required |
| ----- | -------- |
| [GraphEditorConfig](/docs/type#grapheditorconfig) | No     |

---

### `label`

| Type  | Required |
| ----- | -------- |
| [GraphLabelData](/docs/type#graphlabeldata) | No     |

---

### `settingsBar`

| Type  | Required |
| ----- | -------- |
| [SettingsBarProps](/docs/type#settingsbarprops) | No     |

---

### `dataBar`

| Type  | Required |
| ----- | -------- |
| [DataBarProps](/docs/type#databarprops) | No     |

---

### `actionBar`

| Type  | Required |
| ----- | -------- |
| [ActionBarProps](/docs/type#actionbarprops) | No     |

---

### `selectedElementIds`

| Type  | Required |
| ----- | -------- |
| string[] | No     |

---

### `mode`

| Type  | Required |
| ----- | -------- |
| [EditorMode](/docs/type#editormode) | No     |

---

### `events`

| Type  | Required |
| ----- | -------- |
| [RecordedEvent](/docs/type#recordedevent)[] | No     |

---

### `eventHistory`

| Type  | Required |
| ----- | -------- |
| [EventHistory](/docs/type#eventhistory)[] | No     |

---

### `playlists`

| Type  | Required |
| ----- | -------- |
| [Playlist](/docs/type#playlist)[] | No     |

---

### `globalNetworkStatistics`

| Type  | Required |
| ----- | -------- |
| any | No     |

---

### `loading`

| Type  | Required |
| ----- | -------- |
| boolean | No     |

---

