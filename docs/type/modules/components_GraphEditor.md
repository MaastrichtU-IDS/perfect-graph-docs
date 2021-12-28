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
| `actionBar?` | `Pick`<`ActionBarProps`, ``"renderMoreAction"`` \| ``"isOpen"`` \| ``"recording"`` \| ``"eventRecording"`` \| ``"autoOpen"`` \| ``"theming"``\> | Config for ActionBar |
| `children?` | `React.ReactNode` | - |
| `config?` | [`GraphEditorConfig`](type.md#grapheditorconfig) | GraphEditor config data for all operations. |
| `dataBar?` | `Pick`<`DataBarProps`, ``"editable"`` \| ``"isOpen"``\> | Config for DataBar |
| `drawLine?` | [`DrawLine`](type.md#drawline) | The function to draw line for edge connection vectors |
| `edges` | [`EdgeData`](type.md#edgedata)[] | Edge data list to render |
| `eventHistory?` | [`EventHistory`](type.md#eventhistory) | Event history will be displayed on SettingsBar |
| `events?` | [`RecordedEvent`](type.md#recordedevent)[] | Recorded events will be displayed on SettingsBar |
| `extraData?` | `any` | To rerender the graph when the extra data changes |
| `graphConfig?` | [`GraphConfig`](type.md#graphconfig) | All graph config data for nodes and edges. It will supply the config data for the graph. |
| `isFocusMode?` | `boolean` | Focus mode for chunk stacked nodes |
| `isLoading?` | `boolean` | Display loading indicator |
| `label?` | [`GraphLabelData`](type.md#graphlabeldata) | Config for labels of nodes and edges |
| `modals?` | `Object` | Modal components for displaying modal dialogs |
| `modals.ElementSettings?` | `ModalComponentProps` | - |
| `mode?` | [`EditorMode`](type.md#editormode) | Editor mode for changing actions and mouse icon |
| `networkStatistics?` | [`NetworkStatistics`](type.md#networkstatistics) | Calculated network statistics will be displayed on SettingsBar |
| `nodes` | [`NodeData`](type.md#nodedata)[] | Node data list to render |
| `onEvent?` | [`OnEvent`](type.md#onevent) | Event handler for all events that are emitted by the graph editor. |
| `playlists?` | [`Playlist`](type.md#playlist)[] | Events playlist will be displayed on SettingsBar |
| `preferencesModal?` | `PreferencesModalProps` | Config for PreferencesModal |
| `previousDataList?` | { `edges`: [`EdgeData`](type.md#edgedata)[] ; `nodes`: [`NodeData`](type.md#nodedata)[]  }[] | Focus mode stack |
| `renderClusterNode?` | [`RenderClusterNode`](type.md#renderclusternode) | It returns a PIXI.DisplayObject instance as React.Node for the cluster node |
| `renderEdge?` | [`GraphEditorRenderEdge`](type.md#grapheditorrenderedge)<`RenderElementAdditionalInfo`\> | It returns a PIXI.DisplayObject instance as React.Node for the edge |
| `renderNode?` | [`GraphEditorRenderNode`](type.md#grapheditorrendernode)<`RenderElementAdditionalInfo`\> | It returns a PIXI.DisplayObject instance as React.Node for the node |
| `selectedElementIds?` | `string`[] | It gives the selected nodes. It is used for selected node highlighting and DataBar |
| `settingsBar?` | `SettingsBarProps` | Config for SettingsBar |
| `style?` | `ViewProps`[``"style"``] | Style for graph container view |
| `onBoxSelection?` | (`c`: { `boundingBox`: [`BoundingBox`](type.md#boundingbox) ; `elements`: `cytoscape.Collection` ; `event`: `PIXI.InteractionEvent` ; `itemIds`: `string`[]  }) => `void` | - |
| `renderMoreAction?` | () => `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\> | - |

#### Defined in

[src/components/GraphEditor/index.tsx:48](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/components/GraphEditor/index.tsx#L48)

___

### GraphEditorType

Ƭ **GraphEditorType**: `React.FC`<[`GraphEditorProps`](components_GraphEditor.md#grapheditorprops)\>

#### Defined in

[src/components/GraphEditor/index.tsx:186](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/components/GraphEditor/index.tsx#L186)

## Variables

### GraphEditor

• **GraphEditor**: `FC`<`PropsWithRef`<[`GraphEditorRef`](type.md#grapheditorref), [`GraphEditorProps`](components_GraphEditor.md#grapheditorprops)\>\>

It is a wrapper for Graph with editor components. It has Sidebar, DataBar, ActionBar
to give the power of editing.

#### Defined in

[src/components/GraphEditor/index.tsx:918](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/components/GraphEditor/index.tsx#L918)
