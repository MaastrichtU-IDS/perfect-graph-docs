[perfect-graph](../README.md) / [Modules](../modules.md) / components/GraphEditor

# Module: components/GraphEditor

## Table of contents

### Namespaces

- [&lt;internal\&gt;](components_GraphEditor._internal_.md)

### Type aliases

- [GraphEditorProps](components_GraphEditor#grapheditorprops)
- [GraphEditorType](components_GraphEditor#grapheditortype)

### Variables

- [GraphEditor](components_GraphEditor#grapheditor)

## Type aliases

### GraphEditorProps

Ƭ **GraphEditorProps**: `Object`

#### Type declaration

| Name                      | Type                                                                                                                                                                                | Description                                                                              |
| :------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- |
| `actionBar?`              | [`ActionBarConfig`](components_GraphEditor_ActionBar#actionbarconfig)                                                                                                               | Config for ActionBar                                                                     |
| `children?`               | `React.ReactNode`                                                                                                                                                                   | -                                                                                        |
| `config?`                 | [`GraphEditorConfig`](components_GraphEditor._internal_#grapheditorconfig)                                                                                                          | GraphEditor config data for all operations.                                              |
| `dataBar?`                | [`DataBarProps`](components_GraphEditor_DataBar#databarprops)                                                                                                                       | Config for DataBar                                                                       |
| `drawLine?`               | [`DrawLine`](components_EdgeContainer._internal_#drawline)                                                                                                                          | The function to draw line for edge connection vectors                                    |
| `edges`                   | [`EdgeData`](components_ClusterNodeContainer._internal_#edgedata)[]                                                                                                                 | Edge data list to render                                                                 |
| `eventHistory?`           | [`EventHistory`](components_GraphEditor._internal_#eventhistory)                                                                                                                    | Event history will be displayed on SettingsBar                                           |
| `events?`                 | [`RecordedEvent`](components_GraphEditor._internal_#recordedevent)[]                                                                                                                | Recorded events will be displayed on SettingsBar                                         |
| `extraData?`              | `any`                                                                                                                                                                               | To rerender the graph when the extra data changes                                        |
| `graphConfig?`            | [`GraphConfig`](components_Graph._internal_#graphconfig)                                                                                                                            | All graph config data for nodes and edges. It will supply the config data for the graph. |
| `isFocusMode?`            | `boolean`                                                                                                                                                                           | Focus mode for chunk stacked nodes                                                       |
| `isLoading?`              | `boolean`                                                                                                                                                                           | Display loading indicator                                                                |
| `label?`                  | [`GraphLabelData`](components_GraphEditor._internal_#graphlabeldata)                                                                                                                | Config for labels of nodes and edges                                                     |
| `modals?`                 | `Object`                                                                                                                                                                            | Modal components for displaying modal dialogs                                            |
| `modals.ElementSettings?` | [`ModalComponentProps`](components_GraphEditor_ModalComponent#modalcomponentprops)                                                                                                  | -                                                                                        |
| `mode?`                   | [`EditorMode`](components_GraphEditor._internal_#editormode)                                                                                                                        | Editor mode for changing actions and mouse icon                                          |
| `networkStatistics?`      | [`NetworkStatistics`](components_GraphEditor._internal_#networkstatistics)                                                                                                          | Calculated network statistics will be displayed on SettingsBar                           |
| `nodes`                   | [`NodeData`](components_ClusterNodeContainer._internal_#nodedata)[]                                                                                                                 | Node data list to render                                                                 |
| `onBoxSelection?`         | [`OnBoxSelection`](components_Graph._internal_#onboxselection)                                                                                                                      | Event handler for box selection event. It gives the selected nodes                       |
| `onEvent?`                | [`OnEvent`](components_GraphEditor._internal_#onevent)                                                                                                                              | Event handler for all events that are emitted by the graph editor.                       |
| `playlists?`              | [`Playlist`](components_GraphEditor._internal_#playlist)[]                                                                                                                          | Events playlist will be displayed on SettingsBar                                         |
| `preferencesModal?`       | [`PreferencesModalProps`](components_GraphEditor_PreferencesModal#preferencesmodalprops)                                                                                            | Config for PreferencesModal                                                              |
| `previousDataList?`       | [`PreviousData`](components_GraphEditor._internal_#previousdata)[]                                                                                                                  | Focus mode stack                                                                         |
| `renderClusterNode?`      | [`RenderClusterNode`](components_ClusterNodeContainer._internal_#renderclusternode)                                                                                                 | It returns a PIXI.DisplayObject instance as React.Node for the cluster node              |
| `renderEdge?`             | [`GraphEditorRenderEdge`](components_GraphEditor._internal_#grapheditorrenderedge)<[`RenderElementAdditionalInfo`](components_GraphEditor._internal_#renderelementadditionalinfo)\> | It returns a PIXI.DisplayObject instance as React.Node for the edge                      |
| `renderNode?`             | [`GraphEditorRenderNode`](components_GraphEditor._internal_#grapheditorrendernode)<[`RenderElementAdditionalInfo`](components_GraphEditor._internal_#renderelementadditionalinfo)\> | It returns a PIXI.DisplayObject instance as React.Node for the node                      |
| `selectedElementIds?`     | `string`[]                                                                                                                                                                          | It gives the selected nodes. It is used for selected node highlighting and DataBar       |
| `settingsBar?`            | [`SettingsBarProps`](components_GraphEditor_SettingsBar#settingsbarprops)                                                                                                           | Config for SettingsBar                                                                   |
| `style?`                  | `ViewProps`[``"style"``]                                                                                                                                                            | Style for graph container view                                                           |
| `renderMoreAction?`       | () => `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>                                                                                                           | -                                                                                        |

#### Defined in

[components/GraphEditor/index.tsx:49](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/GraphEditor/index.tsx#L49)

---

### GraphEditorType

Ƭ **GraphEditorType**: `React.FC`<[`GraphEditorProps`](components_GraphEditor#grapheditorprops)\>

#### Defined in

[components/GraphEditor/index.tsx:179](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/GraphEditor/index.tsx#L179)

## Variables

### GraphEditor

• **GraphEditor**: `FC`<[`PropsWithRef`](components_Container._internal_#propswithref)<[`GraphEditorRef`](components_GraphEditor._internal_#grapheditorref), [`GraphEditorProps`](components_GraphEditor#grapheditorprops)\>\>

It is a wrapper for Graph with editor components. It has Sidebar, DataBar, ActionBar
to give the power of editing.

#### Defined in

[components/GraphEditor/index.tsx:931](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/GraphEditor/index.tsx#L931)
