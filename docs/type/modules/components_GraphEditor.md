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

Ƭ **GraphEditorProps**: { `actionBar?`: `Pick`<`ActionBarProps`, ``"renderMoreAction"`` \| ``"isOpen"`` \| ``"recording"`` \| ``"eventRecording"`` \| ``"autoOpen"`` \| ``"theming"``\> ; `config?`: [`GraphEditorConfig`](type.md#grapheditorconfig) ; `dataBar?`: `Pick`<`DataBarProps`, ``"editable"`` \| ``"isOpen"``\> ; `eventHistory?`: [`EventHistory`](type.md#eventhistory) ; `events?`: [`RecordedEvent`](type.md#recordedevent)[] ; `graphConfig?`: [`GraphConfig`](type.md#graphconfig) ; `isFocusMode?`: `boolean` ; `isLoading?`: `boolean` ; `label?`: [`GraphLabelData`](type.md#graphlabeldata) ; `modals?`: { `ElementSettings?`: `ModalComponentProps`  } ; `mode?`: [`EditorMode`](type.md#editormode) ; `networkStatistics?`: [`NetworkStatistics`](type.md#networkstatistics) ; `onEvent?`: [`OnEvent`](type.md#onevent) ; `playlists?`: [`Playlist`](type.md#playlist)[] ; `preferencesModal?`: `PreferencesModalProps` ; `previousDataList?`: { `edges`: [`EdgeData`](type.md#edgedata)[] ; `nodes`: [`NodeData`](type.md#nodedata)[]  }[] ; `renderEdge?`: [`GraphEditorRenderEdge`](type.md#grapheditorrenderedge)<`RenderElementAdditionalInfo`\> ; `renderNode?`: [`GraphEditorRenderNode`](type.md#grapheditorrendernode)<`RenderElementAdditionalInfo`\> ; `selectedElementIds?`: `string`[] \| ``null`` ; `settingsBar?`: `SettingsBarProps` ; `renderMoreAction?`: () => `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>  } & `Omit`<[`GraphProps`](components_Graph.md#graphprops), ``"config"`` \| ``"onPress"`` \| ``"renderNode"`` \| ``"renderEdge"``\>

#### Defined in

[src/components/GraphEditor/index.tsx:44](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/components/GraphEditor/index.tsx#L44)

___

### GraphEditorType

Ƭ **GraphEditorType**: `React.FC`<[`GraphEditorProps`](components_GraphEditor.md#grapheditorprops)\>

#### Defined in

[src/components/GraphEditor/index.tsx:151](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/components/GraphEditor/index.tsx#L151)

## Variables

### GraphEditor

• **GraphEditor**: `FC`<`PropsWithRef`<[`GraphEditorRef`](type.md#grapheditorref), [`GraphEditorProps`](components_GraphEditor.md#grapheditorprops)\>\>

It is a wrapper for Graph with editor components. It has Sidebar, DataBar, ActionBar
to give the power of editing.

#### Defined in

[src/components/GraphEditor/index.tsx:883](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/components/GraphEditor/index.tsx#L883)
