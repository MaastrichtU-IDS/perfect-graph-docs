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
| `actionBar?` | [`ActionBarConfig`](../type/modules/components_GraphEditor_ActionBar.md#actionbarconfig) | Config for ActionBar |
| `children?` | [`ReactNode`](../type/modules/components_ClusterNodeContainer._internal_.md#reactnode) | - |
| `config?` | [`GraphEditorConfig`](../type/modules/components_GraphEditor._internal_.md#grapheditorconfig) | GraphEditor config data for all operations. |
| `dataBar?` | [`DataBarProps`](../type/modules/components_GraphEditor_DataBar.md#databarprops) | Config for DataBar |
| `drawLine?` | [`DrawLine`](../type/modules/components_EdgeContainer._internal_.md#drawline) | The function to draw line for edge connection vectors |
| `edges` | [`EdgeData`](../type/modules/components_ClusterNodeContainer._internal_.md#edgedata)[] | Edge data list to render |
| `eventHistory?` | [`EventHistory`](../type/modules/components_GraphEditor._internal_.md#eventhistory) | Event history will be displayed on SettingsBar |
| `events?` | [`RecordedEvent`](../type/modules/components_GraphEditor._internal_.md#recordedevent)[] | Recorded events will be displayed on SettingsBar |
| `extraData?` | `any` | To rerender the graph when the extra data changes |
| `graphConfig?` | [`GraphConfig`](../type/modules/components_Graph._internal_.md#graphconfig) | All graph config data for nodes and edges. It will supply the config data for the graph. |
| `isFocusMode?` | `boolean` | Focus mode for chunk stacked nodes |
| `isLoading?` | `boolean` | Display loading indicator |
| `label?` | [`GraphLabelData`](../type/modules/components_GraphEditor._internal_.md#graphlabeldata) | Config for labels of nodes and edges |
| `modals?` | `Object` | Modal components for displaying modal dialogs |
| `modals.ElementSettings?` | [`ModalComponentProps`](../type/modules/components_GraphEditor_ModalComponent.md#modalcomponentprops) | - |
| `mode?` | [`EditorMode`](../type/modules/components_GraphEditor._internal_.md#editormode) | Editor mode for changing actions and mouse icon |
| `networkStatistics?` | [`NetworkStatistics`](../type/modules/components_GraphEditor._internal_.md#networkstatistics) | Calculated network statistics will be displayed on SettingsBar |
| `nodes` | [`NodeData`](../type/modules/components_ClusterNodeContainer._internal_.md#nodedata)[] | Node data list to render |
| `onBoxSelection?` | [`OnBoxSelection`](../type/modules/components_Graph._internal_.md#onboxselection) | Event handler for box selection event. It gives the selected nodes |
| `onEvent?` | [`OnEvent`](../type/modules/components_GraphEditor._internal_.md#onevent) | Event handler for all events that are emitted by the graph editor. |
| `playlists?` | [`Playlist`](../type/modules/components_GraphEditor._internal_.md#playlist)[] | Events playlist will be displayed on SettingsBar |
| `preferencesModal?` | [`PreferencesModalProps`](../type/modules/components_GraphEditor_PreferencesModal.md#preferencesmodalprops) | Config for PreferencesModal |
| `previousDataList?` | [`PreviousData`](../type/modules/components_GraphEditor._internal_.md#previousdata)[] | Focus mode stack |
| `renderClusterNode?` | [`RenderClusterNode`](../type/modules/components_ClusterNodeContainer._internal_.md#renderclusternode) | It returns a PIXI.DisplayObject instance as React.Node for the cluster node |
| `renderEdge?` | [`GraphEditorRenderEdge`](../type/modules/components_GraphEditor._internal_.md#grapheditorrenderedge)<[`RenderElementAdditionalInfo`](../type/modules/components_GraphEditor._internal_.md#renderelementadditionalinfo)\> | It returns a PIXI.DisplayObject instance as React.Node for the edge |
| `renderNode?` | [`GraphEditorRenderNode`](../type/modules/components_GraphEditor._internal_.md#grapheditorrendernode)<[`RenderElementAdditionalInfo`](../type/modules/components_GraphEditor._internal_.md#renderelementadditionalinfo)\> | It returns a PIXI.DisplayObject instance as React.Node for the node |
| `selectedElementIds?` | `string`[] | It gives the selected nodes. It is used for selected node highlighting and DataBar |
| `settingsBar?` | [`SettingsBarProps`](../type/modules/components_GraphEditor_SettingsBar.md#settingsbarprops) | Config for SettingsBar |
| `style?` | [`ViewProps`](../type/modules/components_Graph._internal_.md#viewprops)[``"style"``] | Style for graph container view |
| `renderMoreAction?` | () => [`ReactElement`](../type/modules/../interfaces/components_ClusterNodeContainer._internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](../type/modules/components_ClusterNodeContainer._internal_.md#jsxelementconstructor)<`any`\>\> | - |