[perfect-graph](../README.md) / [Modules](../modules.md) / [components/GraphEditor](components_GraphEditor.md) / <internal\>

# Namespace: <internal\>

[components/GraphEditor](components_GraphEditor.md).<internal>

## Table of contents

### Type aliases

- [EditorMode](components_GraphEditor._internal_.md#editormode)
- [Element](components_GraphEditor._internal_.md#element)
- [EventHistory](components_GraphEditor._internal_.md#eventhistory)
- [ExtendParams](components_GraphEditor._internal_.md#extendparams)
- [GraphEditorConfig](components_GraphEditor._internal_.md#grapheditorconfig)
- [GraphEditorContextType](components_GraphEditor._internal_.md#grapheditorcontexttype)
- [GraphEditorRef](components_GraphEditor._internal_.md#grapheditorref)
- [GraphEditorRenderEdge](components_GraphEditor._internal_.md#grapheditorrenderedge)
- [GraphEditorRenderElementExtraParams](components_GraphEditor._internal_.md#grapheditorrenderelementextraparams)
- [GraphEditorRenderNode](components_GraphEditor._internal_.md#grapheditorrendernode)
- [GraphLabelData](components_GraphEditor._internal_.md#graphlabeldata)
- [NetworkStatistics](components_GraphEditor._internal_.md#networkstatistics)
- [OnEvent](components_GraphEditor._internal_.md#onevent)
- [Playlist](components_GraphEditor._internal_.md#playlist)
- [PreviousData](components_GraphEditor._internal_.md#previousdata)
- [RecordedEvent](components_GraphEditor._internal_.md#recordedevent)
- [RenderElementAdditionalInfo](components_GraphEditor._internal_.md#renderelementadditionalinfo)
- [ReturnType](components_GraphEditor._internal_.md#returntype)

### Variables

- [EDITOR\_MODE](components_GraphEditor._internal_.md#editor_mode)

## Type aliases

### EditorMode

Ƭ **EditorMode**: keyof typeof [`EDITOR_MODE`](components_GraphEditor._internal_.md#editor_mode)

GraphEditor mode

#### Defined in

[src/type/index.ts:157](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L157)

___

### Element

Ƭ **Element**: [`EdgeElement`](components_ClusterNodeContainer._internal_.md#edgeelement) \| [`NodeElement`](components_ClusterNodeContainer._internal_.md#nodeelement)

#### Defined in

[src/type/index.ts:176](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L176)

___

### EventHistory

Ƭ **EventHistory**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `currentIndex` | `number` | - |
| `events` | [`EventInfo`](components_GraphEditor_DataEditor._internal_.md#eventinfo)[] | Recorded events |
| `undoEvents` | [`EventInfo`](components_GraphEditor_DataEditor._internal_.md#eventinfo)[] | To undo events |

#### Defined in

[src/type/index.ts:736](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L736)

___

### ExtendParams

Ƭ **ExtendParams**<`T`, `E`\>: (`c`: [`Parameters`](components_EdgeContainer._internal_.md#parameters)<`T`\>[``0``] & `E`) => [`ReturnType`](components_GraphEditor._internal_.md#returntype)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (`a`: `any`) => `any` |
| `E` | `E` |

#### Type declaration

▸ (`c`): [`ReturnType`](components_GraphEditor._internal_.md#returntype)<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Parameters`](components_EdgeContainer._internal_.md#parameters)<`T`\>[``0``] & `E` |

##### Returns

[`ReturnType`](components_GraphEditor._internal_.md#returntype)<`T`\>

#### Defined in

[src/type/index.ts:245](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L245)

___

### GraphEditorConfig

Ƭ **GraphEditorConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `enableNetworkStatistics?` | `boolean` |

#### Defined in

[src/type/index.ts:776](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L776)

___

### GraphEditorContextType

Ƭ **GraphEditorContextType**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | [`GraphEditorConfig`](components_GraphEditor._internal_.md#grapheditorconfig) | GraphEditor config data for all operations. |
| `edges` | [`EdgeData`](components_ClusterNodeContainer._internal_.md#edgedata)[] | Edge data list |
| `eventHistory?` | [`EventHistory`](components_GraphEditor._internal_.md#eventhistory) | Event history will be displayed on SettingsBar |
| `events?` | [`RecordedEvent`](components_GraphEditor._internal_.md#recordedevent)[] | Recorded events will be displayed on SettingsBar |
| `graphConfig?` | [`GraphConfig`](components_Graph._internal_.md#graphconfig) | All graph config data for nodes and edges. It will supply the config data for the graph. |
| `graphEditorRef` | [`RefObject`](../interfaces/components_ClusterNodeContainer._internal_.RefObject.md)<[`GraphEditorRef`](components_GraphEditor._internal_.md#grapheditorref)\> | GraphEditor instance ref |
| `label?` | [`GraphLabelData`](components_GraphEditor._internal_.md#graphlabeldata) | Config for labels of nodes and edges |
| `localDataRef` | [`RefObject`](../interfaces/components_ClusterNodeContainer._internal_.RefObject.md)<{ `contextMenu`: { `itemIds`: `string`[]  } ; `initialized`: `boolean` ; `issuedClusterId`: `string` \| ``null`` ; `networkStatistics?`: [`NetworkStatistics`](components_GraphEditor._internal_.md#networkstatistics) ; `newClusterBoxSelection`: { `elementIds`: `string`[]  } ; `props`: [`GraphEditorProps`](components_GraphEditor.md#grapheditorprops) ; `targetNode`: [`NodeElement`](components_ClusterNodeContainer._internal_.md#nodeelement) \| ``null``  }\> | Locally used state for GraphEditor |
| `mode?` | [`EditorMode`](components_GraphEditor._internal_.md#editormode) | Editor mode for changing actions and mouse icon |
| `networkStatistics?` | [`NetworkStatistics`](components_GraphEditor._internal_.md#networkstatistics) | Calculated network statistics will be displayed on SettingsBar |
| `nodes` | [`NodeData`](components_ClusterNodeContainer._internal_.md#nodedata)[] | Node data list |
| `onEvent` | [`OnEventLite`](components_GraphEditor_DataEditor._internal_.md#oneventlite) | Event handler for all events that are emitted by the graph editor. |
| `playlists?` | [`Playlist`](components_GraphEditor._internal_.md#playlist)[] | Events playlist will be displayed on SettingsBar |
| `selectedElement?` | [`Element`](components_GraphEditor._internal_.md#element) \| ``null`` | Selected Element to view data |
| `selectedElementIds?` | `string`[] \| ``null`` | It gives the selected nodes. It is used for selected node highlighting and DataBar |
| `selectedItem?` | [`ElementData`](components_GraphEditor_DataEditor._internal_.md#elementdata) \| ``null`` | Selected Item to view data |

#### Defined in

[src/type/index.ts:796](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L796)

___

### GraphEditorRef

Ƭ **GraphEditorRef**: [`GraphRef`](components_ClusterNodeContainer._internal_.md#graphref) & { `context`: [`GraphEditorContextType`](components_GraphEditor._internal_.md#grapheditorcontexttype)  }

#### Defined in

[src/type/index.ts:727](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L727)

___

### GraphEditorRenderEdge

Ƭ **GraphEditorRenderEdge**<`Additional`\>: [`ExtendParams`](components_GraphEditor._internal_.md#extendparams)<[`RenderEdge`](components_EdgeContainer._internal_.md#renderedge), [`GraphEditorRenderElementExtraParams`](components_GraphEditor._internal_.md#grapheditorrenderelementextraparams) & `Additional`\>

GraphEditor Edge render element function

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Additional` | extends [`Record`](components_ClusterNodeContainer._internal_.md#record)<`string`, `any`\> = {} |

#### Defined in

[src/type/index.ts:335](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L335)

___

### GraphEditorRenderElementExtraParams

Ƭ **GraphEditorRenderElementExtraParams**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` | Element default label |
| `labelPath` | `string`[] | Selected label path |

#### Defined in

[src/type/index.ts:234](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L234)

___

### GraphEditorRenderNode

Ƭ **GraphEditorRenderNode**<`Additional`\>: [`ExtendParams`](components_GraphEditor._internal_.md#extendparams)<[`RenderNode`](components_Graph._internal_.md#rendernode), [`GraphEditorRenderElementExtraParams`](components_GraphEditor._internal_.md#grapheditorrenderelementextraparams) & `Additional`\>

GraphEditor Node render element function

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Additional` | extends [`Record`](components_ClusterNodeContainer._internal_.md#record)<`string`, `any`\> = {} |

#### Defined in

[src/type/index.ts:344](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L344)

___

### GraphLabelData

Ƭ **GraphLabelData**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `edges` | [`Record`](components_ClusterNodeContainer._internal_.md#record)<`string`, `string`[]\> | To override global label path for specific edges (id as key) |
| `global` | `Object` | To set label path for all nodes and edges ; will be overridden by set node and edge label path |
| `global.edges` | `string`[] | - |
| `global.nodes` | `string`[] | - |
| `isGlobalFirst?` | `Object` | Is global label path override |
| `isGlobalFirst.edges` | `boolean` | - |
| `isGlobalFirst.nodes` | `boolean` | - |
| `nodes` | [`Record`](components_ClusterNodeContainer._internal_.md#record)<`string`, `string`[]\> | To override global label path for specific nodes (id as key) |

#### Defined in

[src/type/index.ts:559](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L559)

___

### NetworkStatistics

Ƭ **NetworkStatistics**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `global?` | `any` | Global network statistics calculated for whole graph |
| `local?` | `any` | Local network statistics calculated for imported graph |
| `sort?` | `any` | Sort function for network statistics fields |

#### Defined in

[src/type/index.ts:781](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L781)

___

### OnEvent

Ƭ **OnEvent**: (`eventInfo`: [`EventInfo`](components_GraphEditor_DataEditor._internal_.md#eventinfo)) => `void`

#### Type declaration

▸ (`eventInfo`): `void`

GraphEditor Event handler

##### Parameters

| Name | Type |
| :------ | :------ |
| `eventInfo` | [`EventInfo`](components_GraphEditor_DataEditor._internal_.md#eventinfo) |

##### Returns

`void`

#### Defined in

[src/type/index.ts:662](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L662)

___

### Playlist

Ƭ **Playlist**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | [`EventInfo`](components_GraphEditor_DataEditor._internal_.md#eventinfo)[] | Recorded events |
| `id` | `string` | - |
| `name` | `string` | - |

#### Defined in

[src/type/index.ts:748](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L748)

___

### PreviousData

Ƭ **PreviousData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `edges` | [`EdgeData`](components_ClusterNodeContainer._internal_.md#edgedata)[] |
| `nodes` | [`NodeData`](components_ClusterNodeContainer._internal_.md#nodedata)[] |

#### Defined in

[src/type/index.ts:899](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L899)

___

### RecordedEvent

Ƭ **RecordedEvent**: [`EventInfo`](components_GraphEditor_DataEditor._internal_.md#eventinfo)

#### Defined in

[src/type/index.ts:734](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/type/index.ts#L734)

___

### RenderElementAdditionalInfo

Ƭ **RenderElementAdditionalInfo**: `Object`

#### Defined in

[src/components/GraphEditor/index.tsx:44](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/GraphEditor/index.tsx#L44)

___

### ReturnType

Ƭ **ReturnType**<`T`\>: `T` extends (...`args`: `any`) => infer R ? `R` : `any`

Obtain the return type of a function type

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`) => `any` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1596

## Variables

### EDITOR\_MODE

• **EDITOR\_MODE**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ADD` | ``"ADD"`` |
| `ADD_CLUSTER_ELEMENT` | ``"ADD_CLUSTER_ELEMENT"`` |
| `CONTINUES_ADD` | ``"CONTINUES_ADD"`` |
| `CONTINUES_DELETE` | ``"CONTINUES_DELETE"`` |
| `DEFAULT` | ``"DEFAULT"`` |
| `DELETE` | ``"DELETE"`` |

#### Defined in

[src/constants/index.tsx:105](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/constants/index.tsx#L105)
