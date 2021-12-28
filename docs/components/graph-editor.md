---
title: GraphEditor
---

A React component to create a Graph Editor easily, you can just pass data and render methods.

## Examples

```js live=true
function MyGraphEditor() {
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
| `actionBar?` | `Pick`<`ActionBarProps`, ``"renderMoreAction"`` \| ``"isOpen"`` \| ``"recording"`` \| ``"eventRecording"`` \| ``"autoOpen"`` \| ``"theming"``\> | Config for ActionBar |
| `children?` | `React.ReactNode` | - |
| `config?` | [`GraphEditorConfig`](../type/modules/type.md#grapheditorconfig) | GraphEditor config data for all operations. |
| `dataBar?` | `Pick`<`DataBarProps`, ``"editable"`` \| ``"isOpen"``\> | Config for DataBar |
| `drawLine?` | [`DrawLine`](../type/modules/type.md#drawline) | The function to draw line for edge connection vectors |
| `edges` | [`EdgeData`](../type/modules/type.md#edgedata)[] | Edge data list to render |
| `eventHistory?` | [`EventHistory`](../type/modules/type.md#eventhistory) | Event history will be displayed on SettingsBar |
| `events?` | [`RecordedEvent`](../type/modules/type.md#recordedevent)[] | Recorded events will be displayed on SettingsBar |
| `extraData?` | `any` | To rerender the graph when the extra data changes |
| `graphConfig?` | [`GraphConfig`](../type/modules/type.md#graphconfig) | All graph config data for nodes and edges. It will supply the config data for the graph. |
| `isFocusMode?` | `boolean` | Focus mode for chunk stacked nodes |
| `isLoading?` | `boolean` | Display loading indicator |
| `label?` | [`GraphLabelData`](../type/modules/type.md#graphlabeldata) | Config for labels of nodes and edges |
| `modals?` | `Object` | Modal components for displaying modal dialogs |
| `modals.ElementSettings?` | `ModalComponentProps` | - |
| `mode?` | [`EditorMode`](../type/modules/type.md#editormode) | Editor mode for changing actions and mouse icon |
| `networkStatistics?` | [`NetworkStatistics`](../type/modules/type.md#networkstatistics) | Calculated network statistics will be displayed on SettingsBar |
| `nodes` | [`NodeData`](../type/modules/type.md#nodedata)[] | Node data list to render |
| `onEvent?` | [`OnEvent`](../type/modules/type.md#onevent) | Event handler for all events that are emitted by the graph editor. |
| `playlists?` | [`Playlist`](../type/modules/type.md#playlist)[] | Events playlist will be displayed on SettingsBar |
| `preferencesModal?` | `PreferencesModalProps` | Config for PreferencesModal |
| `previousDataList?` | { `edges`: [`EdgeData`](../type/modules/type.md#edgedata)[] ; `nodes`: [`NodeData`](../type/modules/type.md#nodedata)[]  }[] | Focus mode stack |
| `renderClusterNode?` | [`RenderClusterNode`](../type/modules/type.md#renderclusternode) | It returns a PIXI.DisplayObject instance as React.Node for the cluster node |
| `renderEdge?` | [`GraphEditorRenderEdge`](../type/modules/type.md#grapheditorrenderedge)<`RenderElementAdditionalInfo`\> | It returns a PIXI.DisplayObject instance as React.Node for the edge |
| `renderNode?` | [`GraphEditorRenderNode`](../type/modules/type.md#grapheditorrendernode)<`RenderElementAdditionalInfo`\> | It returns a PIXI.DisplayObject instance as React.Node for the node |
| `selectedElementIds?` | `string`[] | It gives the selected nodes. It is used for selected node highlighting and DataBar |
| `settingsBar?` | `SettingsBarProps` | Config for SettingsBar |
| `style?` | `ViewProps`[``"style"``] | Style for graph container view |
| `onBoxSelection?` | (`c`: { `boundingBox`: [`BoundingBox`](../type/modules/type.md#boundingbox) ; `elements`: `cytoscape.Collection` ; `event`: `PIXI.InteractionEvent` ; `itemIds`: `string`[]  }) => `void` | - |
| `renderMoreAction?` | () => `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\> | - |