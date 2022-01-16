[perfect-graph](../README.md) / [Modules](../modules.md) / components/GraphEditor

# Module: components/GraphEditor

## Table of contents

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
| `children?` | `React.ReactNode` | - |
| `config?` | `GraphEditorConfig` | GraphEditor config data for all operations. |
| `dataBar?` | [`DataBarProps`](components_GraphEditor_DataBar.md#databarprops) | Config for DataBar |
| `drawLine?` | `DrawLine` | The function to draw line for edge connection vectors |
| `edges` | `EdgeData`[] | Edge data list to render |
| `eventHistory?` | `EventHistory` | Event history will be displayed on SettingsBar |
| `events?` | `RecordedEvent`[] | Recorded events will be displayed on SettingsBar |
| `extraData?` | `any` | To rerender the graph when the extra data changes |
| `graphConfig?` | `GraphConfig` | All graph config data for nodes and edges. It will supply the config data for the graph. |
| `isFocusMode?` | `boolean` | Focus mode for chunk stacked nodes |
| `isLoading?` | `boolean` | Display loading indicator |
| `label?` | `GraphLabelData` | Config for labels of nodes and edges |
| `modals?` | `Object` | Modal components for displaying modal dialogs |
| `modals.ElementSettings?` | [`ModalComponentProps`](components_GraphEditor_ModalComponent.md#modalcomponentprops) | - |
| `mode?` | `EditorMode` | Editor mode for changing actions and mouse icon |
| `networkStatistics?` | `NetworkStatistics` | Calculated network statistics will be displayed on SettingsBar |
| `nodes` | `NodeData`[] | Node data list to render |
| `onBoxSelection?` | `OnBoxSelection` | Event handler for box selection event. It gives the selected nodes |
| `onEvent?` | `OnEvent` | Event handler for all events that are emitted by the graph editor. |
| `playlists?` | `Playlist`[] | Events playlist will be displayed on SettingsBar |
| `preferencesModal?` | [`PreferencesModalProps`](components_GraphEditor_PreferencesModal.md#preferencesmodalprops) | Config for PreferencesModal |
| `previousDataList?` | `PreviousData`[] | Focus mode stack |
| `renderClusterNode?` | `RenderClusterNode` | It returns a PIXI.DisplayObject instance as React.Node for the cluster node |
| `renderEdge?` | `GraphEditorRenderEdge`<`RenderElementAdditionalInfo`\> | It returns a PIXI.DisplayObject instance as React.Node for the edge |
| `renderNode?` | `GraphEditorRenderNode`<`RenderElementAdditionalInfo`\> | It returns a PIXI.DisplayObject instance as React.Node for the node |
| `selectedElementIds?` | `string`[] | It gives the selected nodes. It is used for selected node highlighting and DataBar |
| `settingsBar?` | [`SettingsBarProps`](components_GraphEditor_SettingsBar.md#settingsbarprops) | Config for SettingsBar |
| `style?` | `ViewProps`[``"style"``] | Style for graph container view |
| `renderMoreAction?` | () => `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\> | - |

#### Defined in

[components/GraphEditor/index.tsx:49](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/components/GraphEditor/index.tsx#L49)

___

### GraphEditorType

Ƭ **GraphEditorType**: `React.FC`<[`GraphEditorProps`](components_GraphEditor.md#grapheditorprops)\>

#### Defined in

[components/GraphEditor/index.tsx:179](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/components/GraphEditor/index.tsx#L179)

## Variables

### GraphEditor

• **GraphEditor**: `FC`<`PropsWithRef`<`GraphEditorRef`, [`GraphEditorProps`](components_GraphEditor.md#grapheditorprops)\>\>

It is a wrapper for Graph with editor components. It has Sidebar, DataBar, ActionBar
to give the power of editing.

#### Defined in

[components/GraphEditor/index.tsx:929](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/components/GraphEditor/index.tsx#L929)
