---
title: GraphEditor
---

A React component to create a Graph Editor easily, you can just pass data and render methods.

## Examples

```js live=true
function MyGraphEditor() {
  const [data, setData] = React.useState({
    nodes: [
      { id: "1", position: { x: 10, y: 10 } },
      { id: "2", position: { x: 300, y: 100 } },
    ],
    edges: [{ id: "edge:1", source: "1", target: "2" }],
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

| Name                      | Type                                                                                                                                                                                                                                                      | Description                                                                              |
| :------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- |
| `actionBar?`              | [`ActionBarConfig`](../type/modules/components_GraphEditor_ActionBar#actionbarconfig)                                                                                                                                                                     | Config for ActionBar                                                                     |
| `children?`               | [`ReactNode`](../type/modules/components_ClusterNodeContainer._internal_#reactnode)                                                                                                                                                                       | -                                                                                        |
| `config?`                 | [`GraphEditorConfig`](../type/modules/components_GraphEditor._internal_#grapheditorconfig)                                                                                                                                                                | GraphEditor config data for all operations.                                              |
| `dataBar?`                | [`DataBarProps`](../type/modules/components_GraphEditor_DataBar#databarprops)                                                                                                                                                                             | Config for DataBar                                                                       |
| `drawLine?`               | [`DrawLine`](../type/modules/components_EdgeContainer._internal_#drawline)                                                                                                                                                                                | The function to draw line for edge connection vectors                                    |
| `edges`                   | [`EdgeData`](../type/modules/components_ClusterNodeContainer._internal_#edgedata)[]                                                                                                                                                                       | Edge data list to render                                                                 |
| `eventHistory?`           | [`EventHistory`](../type/modules/components_GraphEditor._internal_#eventhistory)                                                                                                                                                                          | Event history will be displayed on SettingsBar                                           |
| `events?`                 | [`RecordedEvent`](../type/modules/components_GraphEditor._internal_#recordedevent)[]                                                                                                                                                                      | Recorded events will be displayed on SettingsBar                                         |
| `extraData?`              | `any`                                                                                                                                                                                                                                                     | To rerender the graph when the extra data changes                                        |
| `graphConfig?`            | [`GraphConfig`](../type/modules/components_Graph._internal_#graphconfig)                                                                                                                                                                                  | All graph config data for nodes and edges. It will supply the config data for the graph. |
| `isFocusMode?`            | `boolean`                                                                                                                                                                                                                                                 | Focus mode for chunk stacked nodes                                                       |
| `isLoading?`              | `boolean`                                                                                                                                                                                                                                                 | Display loading indicator                                                                |
| `label?`                  | [`GraphLabelData`](../type/modules/components_GraphEditor._internal_#graphlabeldata)                                                                                                                                                                      | Config for labels of nodes and edges                                                     |
| `modals?`                 | `Object`                                                                                                                                                                                                                                                  | Modal components for displaying modal dialogs                                            |
| `modals.ElementSettings?` | [`ModalComponentProps`](../type/modules/components_GraphEditor_ModalComponent#modalcomponentprops)                                                                                                                                                        | -                                                                                        |
| `mode?`                   | [`EditorMode`](../type/modules/components_GraphEditor._internal_#editormode)                                                                                                                                                                              | Editor mode for changing actions and mouse icon                                          |
| `networkStatistics?`      | [`NetworkStatistics`](../type/modules/components_GraphEditor._internal_#networkstatistics)                                                                                                                                                                | Calculated network statistics will be displayed on SettingsBar                           |
| `nodes`                   | [`NodeData`](../type/modules/components_ClusterNodeContainer._internal_#nodedata)[]                                                                                                                                                                       | Node data list to render                                                                 |
| `onBoxSelection?`         | [`OnBoxSelection`](../type/modules/components_Graph._internal_#onboxselection)                                                                                                                                                                            | Event handler for box selection event. It gives the selected nodes                       |
| `onEvent?`                | [`OnEvent`](../type/modules/components_GraphEditor._internal_#onevent)                                                                                                                                                                                    | Event handler for all events that are emitted by the graph editor.                       |
| `playlists?`              | [`Playlist`](../type/modules/components_GraphEditor._internal_#playlist)[]                                                                                                                                                                                | Events playlist will be displayed on SettingsBar                                         |
| `preferencesModal?`       | [`PreferencesModalProps`](../type/modules/components_GraphEditor_PreferencesModal#preferencesmodalprops)                                                                                                                                                  | Config for PreferencesModal                                                              |
| `previousDataList?`       | [`PreviousData`](../type/modules/components_GraphEditor._internal_#previousdata)[]                                                                                                                                                                        | Focus mode stack                                                                         |
| `renderClusterNode?`      | [`RenderClusterNode`](../type/modules/components_ClusterNodeContainer._internal_#renderclusternode)                                                                                                                                                       | It returns a PIXI.DisplayObject instance as React.Node for the cluster node              |
| `renderEdge?`             | [`GraphEditorRenderEdge`](../type/modules/components_GraphEditor._internal_#grapheditorrenderedge)<[`RenderElementAdditionalInfo`](../type/modules/components_GraphEditor._internal_#renderelementadditionalinfo)\>                                       | It returns a PIXI.DisplayObject instance as React.Node for the edge                      |
| `renderNode?`             | [`GraphEditorRenderNode`](../type/modules/components_GraphEditor._internal_#grapheditorrendernode)<[`RenderElementAdditionalInfo`](../type/modules/components_GraphEditor._internal_#renderelementadditionalinfo)\>                                       | It returns a PIXI.DisplayObject instance as React.Node for the node                      |
| `selectedElementIds?`     | `string`[]                                                                                                                                                                                                                                                | It gives the selected nodes. It is used for selected node highlighting and DataBar       |
| `settingsBar?`            | [`SettingsBarProps`](../type/modules/components_GraphEditor_SettingsBar#settingsbarprops)                                                                                                                                                                 | Config for SettingsBar                                                                   |
| `style?`                  | [`ViewProps`](../type/modules/components_Graph._internal_#viewprops)[``"style"``]                                                                                                                                                                         | Style for graph container view                                                           |
| `renderMoreAction?`       | () => [`ReactElement`]<`any`, `string` \| [`JSXElementConstructor`](../type/modules/components_ClusterNodeContainer._internal_#jsxelementconstructor)<`any`\>\> | -                                                                                        |
