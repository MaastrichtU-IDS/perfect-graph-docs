[perfect-graph](../README.md) / [Modules](../modules.md) / components/GraphEditor

# Module: components/GraphEditor

## Table of contents

### Namespaces

- [&lt;internal\&gt;](components_GraphEditor._internal_.md)

### Type aliases

- [GraphEditorProps](components_GraphEditor.md#grapheditorprops)
- [GraphEditorType](components_GraphEditor.md#grapheditortype)

### Variables

- [GraphEditor](components_GraphEditor.md#grapheditor)

## Type aliases

### GraphEditorProps

Ƭ **GraphEditorProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `actionBar?` | [`ActionBarConfig`](components_GraphEditor_ActionBar.md#actionbarconfig) | Config for ActionBar |
| `children?` | [`ReactNode`](components_ClusterNodeContainer._internal_.md#reactnode) | - |
| `config?` | [`GraphEditorConfig`](components_GraphEditor._internal_.md#grapheditorconfig) | GraphEditor config data for all operations. |
| `dataBar?` | [`DataBarProps`](components_GraphEditor_DataBar.md#databarprops) | Config for DataBar |
| `drawLine?` | [`DrawLine`](components_EdgeContainer._internal_.md#drawline) | The function to draw line for edge connection vectors |
| `edges` | [`EdgeData`](components_ClusterNodeContainer._internal_.md#edgedata)[] | Edge data list to render |
| `eventHistory?` | [`EventHistory`](components_GraphEditor._internal_.md#eventhistory) | Event history will be displayed on SettingsBar |
| `events?` | [`RecordedEvent`](components_GraphEditor._internal_.md#recordedevent)[] | Recorded events will be displayed on SettingsBar |
| `extraData?` | `any` | To rerender the graph when the extra data changes |
| `graphConfig?` | [`GraphConfig`](components_Graph._internal_.md#graphconfig) | All graph config data for nodes and edges. It will supply the config data for the graph. |
| `isFocusMode?` | `boolean` | Focus mode for chunk stacked nodes |
| `isLoading?` | `boolean` | Display loading indicator |
| `label?` | [`GraphLabelData`](components_GraphEditor._internal_.md#graphlabeldata) | Config for labels of nodes and edges |
| `modals?` | `Object` | Modal components for displaying modal dialogs |
| `modals.ElementSettings?` | [`ModalComponentProps`](components_GraphEditor_ModalComponent.md#modalcomponentprops) | - |
| `mode?` | [`EditorMode`](components_GraphEditor._internal_.md#editormode) | Editor mode for changing actions and mouse icon |
| `networkStatistics?` | [`NetworkStatistics`](components_GraphEditor._internal_.md#networkstatistics) | Calculated network statistics will be displayed on SettingsBar |
| `nodes` | [`NodeData`](components_ClusterNodeContainer._internal_.md#nodedata)[] | Node data list to render |
| `onBoxSelection?` | [`OnBoxSelection`](components_Graph._internal_.md#onboxselection) | Event handler for box selection event. It gives the selected nodes |
| `onEvent?` | [`OnEvent`](components_GraphEditor._internal_.md#onevent) | Event handler for all events that are emitted by the graph editor. |
| `playlists?` | [`Playlist`](components_GraphEditor._internal_.md#playlist)[] | Events playlist will be displayed on SettingsBar |
| `preferencesModal?` | [`PreferencesModalProps`](components_GraphEditor_PreferencesModal.md#preferencesmodalprops) | Config for PreferencesModal |
| `previousDataList?` | [`PreviousData`](components_GraphEditor._internal_.md#previousdata)[] | Focus mode stack |
| `renderClusterNode?` | [`RenderClusterNode`](components_ClusterNodeContainer._internal_.md#renderclusternode) | It returns a PIXI.DisplayObject instance as React.Node for the cluster node |
| `renderEdge?` | [`GraphEditorRenderEdge`](components_GraphEditor._internal_.md#grapheditorrenderedge)<[`RenderElementAdditionalInfo`](components_GraphEditor._internal_.md#renderelementadditionalinfo)\> | It returns a PIXI.DisplayObject instance as React.Node for the edge |
| `renderNode?` | [`GraphEditorRenderNode`](components_GraphEditor._internal_.md#grapheditorrendernode)<[`RenderElementAdditionalInfo`](components_GraphEditor._internal_.md#renderelementadditionalinfo)\> | It returns a PIXI.DisplayObject instance as React.Node for the node |
| `selectedElementIds?` | `string`[] | It gives the selected nodes. It is used for selected node highlighting and DataBar |
| `settingsBar?` | [`SettingsBarProps`](components_GraphEditor_SettingsBar.md#settingsbarprops) | Config for SettingsBar |
| `style?` | [`ViewProps`](components_Graph._internal_.md#viewprops)[``"style"``] | Style for graph container view |
| `renderMoreAction?` | () => [`ReactElement`](../interfaces/components_ClusterNodeContainer._internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](components_ClusterNodeContainer._internal_.md#jsxelementconstructor)<`any`\>\> | - |

#### Defined in

[src/components/GraphEditor/index.tsx:48](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/GraphEditor/index.tsx#L48)

___

### GraphEditorType

Ƭ **GraphEditorType**: [`FC`](components_ClusterNodeContainer._internal_.md#fc)<[`GraphEditorProps`](components_GraphEditor.md#grapheditorprops)\>

#### Defined in

[src/components/GraphEditor/index.tsx:178](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/GraphEditor/index.tsx#L178)

## Variables

### GraphEditor

• **GraphEditor**: [`FC`](components_ClusterNodeContainer._internal_.md#fc)<[`PropsWithRef`](components_Container._internal_.md#propswithref)<[`GraphEditorRef`](components_GraphEditor._internal_.md#grapheditorref), [`GraphEditorProps`](components_GraphEditor.md#grapheditorprops)\>\>

It is a wrapper for Graph with editor components. It has Sidebar, DataBar, ActionBar
to give the power of editing.

#### Defined in

[src/components/GraphEditor/index.tsx:910](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/GraphEditor/index.tsx#L910)
