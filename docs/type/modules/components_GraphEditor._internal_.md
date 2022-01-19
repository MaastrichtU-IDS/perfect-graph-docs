[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor](components_GraphEditor.md) / <internal\>

# Namespace: <internal\>

[components/GraphEditor](components_GraphEditor.md).<internal/>

## Table of contents

### Type aliases

- [EditorMode](components_GraphEditor._internal_#editormode)
- [Element](components_GraphEditor._internal_#element)
- [EventHistory](components_GraphEditor._internal_#eventhistory)
- [ExtendParams](components_GraphEditor._internal_#extendparams)
- [GraphEditorConfig](components_GraphEditor._internal_#grapheditorconfig)
- [GraphEditorContextType](components_GraphEditor._internal_#grapheditorcontexttype)
- [GraphEditorRef](components_GraphEditor._internal_#grapheditorref)
- [GraphEditorRenderEdge](components_GraphEditor._internal_#grapheditorrenderedge)
- [GraphEditorRenderElementExtraParams](components_GraphEditor._internal_#grapheditorrenderelementextraparams)
- [GraphEditorRenderNode](components_GraphEditor._internal_#grapheditorrendernode)
- [GraphLabelData](components_GraphEditor._internal_#graphlabeldata)
- [NetworkStatistics](components_GraphEditor._internal_#networkstatistics)
- [OnEvent](components_GraphEditor._internal_#onevent)
- [Playlist](components_GraphEditor._internal_#playlist)
- [PreviousData](components_GraphEditor._internal_#previousdata)
- [RecordedEvent](components_GraphEditor._internal_#recordedevent)
- [RenderElementAdditionalInfo](components_GraphEditor._internal_#renderelementadditionalinfo)

### Variables

- [EDITOR_MODE](components_GraphEditor._internal_#editor_mode)

## Type aliases

### EditorMode

Ƭ **EditorMode**: keyof typeof [`EDITOR_MODE`](components_GraphEditor._internal_#editor_mode)

GraphEditor mode

#### Defined in

[type/index.ts:157](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L157)

---

### Element

Ƭ **Element**: [`EdgeElement`](components_ClusterNodeContainer._internal_#edgeelement) \| [`NodeElement`](components_ClusterNodeContainer._internal_#nodeelement)

#### Defined in

[type/index.ts:176](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L176)

---

### EventHistory

Ƭ **EventHistory**: `Object`

#### Type declaration

| Name           | Type                                                                    | Description     |
| :------------- | :---------------------------------------------------------------------- | :-------------- |
| `currentIndex` | `number`                                                                | -               |
| `events`       | [`EventInfo`](components_GraphEditor_DataEditor._internal_#eventinfo)[] | Recorded events |
| `undoEvents`   | [`EventInfo`](components_GraphEditor_DataEditor._internal_#eventinfo)[] | To undo events  |

#### Defined in

[type/index.ts:740](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L740)

---

### ExtendParams

Ƭ **ExtendParams**<`T`, `E`\>: (`c`: `Parameters`<`T`\>[``0``] & `E`) => `ReturnType`<`T`\>

#### Type parameters

| Name | Type                          |
| :--- | :---------------------------- |
| `T`  | extends (`a`: `any`) => `any` |
| `E`  | `E`                           |

#### Type declaration

▸ (`c`): `ReturnType`<`T`\>

##### Parameters

| Name | Type                            |
| :--- | :------------------------------ |
| `c`  | `Parameters`<`T`\>[``0``] & `E` |

##### Returns

`ReturnType`<`T`\>

#### Defined in

[type/index.ts:245](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L245)

---

### GraphEditorConfig

Ƭ **GraphEditorConfig**: `Object`

#### Type declaration

| Name                       | Type      |
| :------------------------- | :-------- |
| `enableNetworkStatistics?` | `boolean` |

#### Defined in

[type/index.ts:781](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L781)

---

### GraphEditorContextType

Ƭ **GraphEditorContextType**: `Object`

#### Type declaration

| Name                  | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Description                                                                              |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- |
| `config?`             | [`GraphEditorConfig`](components_GraphEditor._internal_#grapheditorconfig)                                                                                                                                                                                                                                                                                                                                                                                                 | GraphEditor config data for all operations.                                              |
| `edges`               | [`EdgeData`](components_ClusterNodeContainer._internal_#edgedata)[]                                                                                                                                                                                                                                                                                                                                                                                                        | Edge data list                                                                           |
| `eventHistory?`       | [`EventHistory`](components_GraphEditor._internal_#eventhistory)                                                                                                                                                                                                                                                                                                                                                                                                           | Event history will be displayed on SettingsBar                                           |
| `events?`             | [`RecordedEvent`](components_GraphEditor._internal_#recordedevent)[]                                                                                                                                                                                                                                                                                                                                                                                                       | Recorded events will be displayed on SettingsBar                                         |
| `graphConfig?`        | [`GraphConfig`](components_Graph._internal_#graphconfig)                                                                                                                                                                                                                                                                                                                                                                                                                   | All graph config data for nodes and edges. It will supply the config data for the graph. |
| `graphEditorRef`      | `React.RefObject`<[`GraphEditorRef`](components_GraphEditor._internal_#grapheditorref)\>                                                                                                                                                                                                                                                                                                                                                                                   | GraphEditor instance ref                                                                 |
| `label?`              | [`GraphLabelData`](components_GraphEditor._internal_#graphlabeldata)                                                                                                                                                                                                                                                                                                                                                                                                       | Config for labels of nodes and edges                                                     |
| `localDataRef`        | `React.RefObject`<{ `contextMenu`: { `itemIds`: `string`[] } ; `initialized`: `boolean` ; `issuedClusterId`: `string` \| `null` ; `networkStatistics?`: [`NetworkStatistics`](components_GraphEditor._internal_#networkstatistics) ; `newClusterBoxSelection`: { `elementIds`: `string`[] } ; `props`: [`GraphEditorProps`](components_GraphEditor#grapheditorprops) ; `targetNode`: [`NodeElement`](components_ClusterNodeContainer._internal_#nodeelement) \| `null` }\> | Locally used state for GraphEditor                                                       |
| `mode?`               | [`EditorMode`](components_GraphEditor._internal_#editormode)                                                                                                                                                                                                                                                                                                                                                                                                               | Editor mode for changing actions and mouse icon                                          |
| `networkStatistics?`  | [`NetworkStatistics`](components_GraphEditor._internal_#networkstatistics)                                                                                                                                                                                                                                                                                                                                                                                                 | Calculated network statistics will be displayed on SettingsBar                           |
| `nodes`               | [`NodeData`](components_ClusterNodeContainer._internal_#nodedata)[]                                                                                                                                                                                                                                                                                                                                                                                                        | Node data list                                                                           |
| `onEvent`             | [`OnEventLite`](components_GraphEditor_DataEditor._internal_#oneventlite)                                                                                                                                                                                                                                                                                                                                                                                                  | Event handler for all events that are emitted by the graph editor.                       |
| `playlists?`          | [`Playlist`](components_GraphEditor._internal_#playlist)[]                                                                                                                                                                                                                                                                                                                                                                                                                 | Events playlist will be displayed on SettingsBar                                         |
| `selectedElement?`    | [`Element`](components_GraphEditor._internal_#element) \| `null`                                                                                                                                                                                                                                                                                                                                                                                                           | Selected Element to view data                                                            |
| `selectedElementIds?` | `string`[] \| `null`                                                                                                                                                                                                                                                                                                                                                                                                                                                       | It gives the selected nodes. It is used for selected node highlighting and DataBar       |
| `selectedItem?`       | [`ElementData`](components_GraphEditor_DataEditor._internal_#elementdata) \| `null`                                                                                                                                                                                                                                                                                                                                                                                        | Selected Item to view data                                                               |

#### Defined in

[type/index.ts:801](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L801)

---

### GraphEditorRef

Ƭ **GraphEditorRef**: [`GraphRef`](components_ClusterNodeContainer._internal_#graphref) & { `context`: [`GraphEditorContextType`](components_GraphEditor._internal_#grapheditorcontexttype) }

#### Defined in

[type/index.ts:731](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L731)

---

### GraphEditorRenderEdge

Ƭ **GraphEditorRenderEdge**<`Additional`\>: [`ExtendParams`](components_GraphEditor._internal_#extendparams)<[`RenderEdge`](components_EdgeContainer._internal_#renderedge), [`GraphEditorRenderElementExtraParams`](components_GraphEditor._internal_#grapheditorrenderelementextraparams) & `Additional`\>

GraphEditor Edge render element function

#### Type parameters

| Name         | Type                                    |
| :----------- | :-------------------------------------- |
| `Additional` | extends `Record`<`string`, `any`\> = {} |

#### Defined in

[type/index.ts:335](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L335)

---

### GraphEditorRenderElementExtraParams

Ƭ **GraphEditorRenderElementExtraParams**: `Object`

#### Type declaration

| Name        | Type       | Description           |
| :---------- | :--------- | :-------------------- |
| `label`     | `string`   | Element default label |
| `labelPath` | `string`[] | Selected label path   |

#### Defined in

[type/index.ts:234](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L234)

---

### GraphEditorRenderNode

Ƭ **GraphEditorRenderNode**<`Additional`\>: [`ExtendParams`](components_GraphEditor._internal_#extendparams)<[`RenderNode`](components_Graph._internal_#rendernode), [`GraphEditorRenderElementExtraParams`](components_GraphEditor._internal_#grapheditorrenderelementextraparams) & `Additional`\>

GraphEditor Node render element function

#### Type parameters

| Name         | Type                                    |
| :----------- | :-------------------------------------- |
| `Additional` | extends `Record`<`string`, `any`\> = {} |

#### Defined in

[type/index.ts:344](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L344)

---

### GraphLabelData

Ƭ **GraphLabelData**: `Object`

#### Type declaration

| Name                  | Type                            | Description                                                                                    |
| :-------------------- | :------------------------------ | :--------------------------------------------------------------------------------------------- |
| `edges`               | `Record`<`string`, `string`[]\> | To override global label path for specific edges (id as key)                                   |
| `global`              | `Object`                        | To set label path for all nodes and edges ; will be overridden by set node and edge label path |
| `global.edges`        | `string`[]                      | -                                                                                              |
| `global.nodes`        | `string`[]                      | -                                                                                              |
| `isGlobalFirst?`      | `Object`                        | Is global label path override                                                                  |
| `isGlobalFirst.edges` | `boolean`                       | -                                                                                              |
| `isGlobalFirst.nodes` | `boolean`                       | -                                                                                              |
| `nodes`               | `Record`<`string`, `string`[]\> | To override global label path for specific nodes (id as key)                                   |

#### Defined in

[type/index.ts:563](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L563)

---

### NetworkStatistics

Ƭ **NetworkStatistics**: `Object`

#### Type declaration

| Name      | Type  | Description                                            |
| :-------- | :---- | :----------------------------------------------------- |
| `global?` | `any` | Global network statistics calculated for whole graph   |
| `local?`  | `any` | Local network statistics calculated for imported graph |
| `sort?`   | `any` | Sort function for network statistics fields            |

#### Defined in

[type/index.ts:786](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L786)

---

### OnEvent

Ƭ **OnEvent**: (`eventInfo`: [`EventInfo`](components_GraphEditor_DataEditor._internal_#eventinfo)) => `void`

#### Type declaration

▸ (`eventInfo`): `void`

GraphEditor Event handler

##### Parameters

| Name        | Type                                                                  |
| :---------- | :-------------------------------------------------------------------- |
| `eventInfo` | [`EventInfo`](components_GraphEditor_DataEditor._internal_#eventinfo) |

##### Returns

`void`

#### Defined in

[type/index.ts:666](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L666)

---

### Playlist

Ƭ **Playlist**: `Object`

#### Type declaration

| Name     | Type                                                                    | Description     |
| :------- | :---------------------------------------------------------------------- | :-------------- |
| `events` | [`EventInfo`](components_GraphEditor_DataEditor._internal_#eventinfo)[] | Recorded events |
| `id`     | `string`                                                                | -               |
| `name`   | `string`                                                                | -               |

#### Defined in

[type/index.ts:752](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L752)

---

### PreviousData

Ƭ **PreviousData**: `Object`

#### Type declaration

| Name    | Type                                                                |
| :------ | :------------------------------------------------------------------ |
| `edges` | [`EdgeData`](components_ClusterNodeContainer._internal_#edgedata)[] |
| `nodes` | [`NodeData`](components_ClusterNodeContainer._internal_#nodedata)[] |

#### Defined in

[type/index.ts:906](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L906)

---

### RecordedEvent

Ƭ **RecordedEvent**: [`EventInfo`](components_GraphEditor_DataEditor._internal_#eventinfo)

#### Defined in

[type/index.ts:738](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L738)

---

### RenderElementAdditionalInfo

Ƭ **RenderElementAdditionalInfo**: `Object`

#### Defined in

[components/GraphEditor/index.tsx:45](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/GraphEditor/index.tsx#L45)

## Variables

### EDITOR_MODE

• **EDITOR_MODE**: `Object`

#### Type declaration

| Name                  | Type                    |
| :-------------------- | :---------------------- |
| `ADD`                 | `"ADD"`                 |
| `ADD_CLUSTER_ELEMENT` | `"ADD_CLUSTER_ELEMENT"` |
| `CONTINUES_ADD`       | `"CONTINUES_ADD"`       |
| `CONTINUES_DELETE`    | `"CONTINUES_DELETE"`    |
| `DEFAULT`             | `"DEFAULT"`             |
| `DELETE`              | `"DELETE"`              |

#### Defined in

[constants/index.tsx:110](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/constants/index.tsx#L110)
