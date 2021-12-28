[perfect-graph](../README.md) / [Modules](../modules.md) / type

# Module: type

## Table of contents

### References

- [GraphEditorProps](type.md#grapheditorprops)
- [Theme](type.md#theme)

### Type aliases

- [AdditionalDataItem](type.md#additionaldataitem)
- [BoundingBox](type.md#boundingbox)
- [Cluster](type.md#cluster)
- [ClustersByChildClusterId](type.md#clustersbychildclusterid)
- [ClustersByNodeId](type.md#clustersbynodeid)
- [ControllerState](type.md#controllerstate)
- [CytoscapeEvent](type.md#cytoscapeevent)
- [DataItem](type.md#dataitem)
- [DisplayObjectWithYoga](type.md#displayobjectwithyoga)
- [DrawLine](type.md#drawline)
- [EdgeConfig](type.md#edgeconfig)
- [EdgeContext](type.md#edgecontext)
- [EdgeData](type.md#edgedata)
- [EdgeElement](type.md#edgeelement)
- [EdgeElementSettings](type.md#edgeelementsettings)
- [EdgeLineType](type.md#edgelinetype)
- [EditorMode](type.md#editormode)
- [Element](type.md#element)
- [ElementConfig](type.md#elementconfig)
- [ElementContext](type.md#elementcontext)
- [ElementData](type.md#elementdata)
- [ElementFilterOption](type.md#elementfilteroption)
- [ElementType](type.md#elementtype)
- [EventHistory](type.md#eventhistory)
- [EventInfo](type.md#eventinfo)
- [EventType](type.md#eventtype)
- [FormProps](type.md#formprops)
- [GraphConfig](type.md#graphconfig)
- [GraphData](type.md#graphdata)
- [GraphEdgesConfig](type.md#graphedgesconfig)
- [GraphEditorConfig](type.md#grapheditorconfig)
- [GraphEditorContextType](type.md#grapheditorcontexttype)
- [GraphEditorRef](type.md#grapheditorref)
- [GraphEditorRenderClusterNode](type.md#grapheditorrenderclusternode)
- [GraphEditorRenderEdge](type.md#grapheditorrenderedge)
- [GraphEditorRenderNode](type.md#grapheditorrendernode)
- [GraphLabelData](type.md#graphlabeldata)
- [GraphNodesConfig](type.md#graphnodesconfig)
- [GraphRef](type.md#graphref)
- [LiteEventInfo](type.md#liteeventinfo)
- [NetworkStatistics](type.md#networkstatistics)
- [NodeConfig](type.md#nodeconfig)
- [NodeContext](type.md#nodecontext)
- [NodeData](type.md#nodedata)
- [NodeElement](type.md#nodeelement)
- [NodeElementSettings](type.md#nodeelementsettings)
- [OnEvent](type.md#onevent)
- [OnEventLite](type.md#oneventlite)
- [PIXIBasicProps](type.md#pixibasicprops)
- [PIXIDisplayObjectProps](type.md#pixidisplayobjectprops)
- [Playlist](type.md#playlist)
- [RDFType](type.md#rdftype)
- [RDFValue](type.md#rdfvalue)
- [RecordedEvent](type.md#recordedevent)
- [Ref](type.md#ref)
- [RenderClusterNode](type.md#renderclusternode)
- [RenderEdge](type.md#renderedge)
- [RenderNode](type.md#rendernode)
- [Style](type.md#style)
- [ViewportRef](type.md#viewportref)
- [ViewportType](type.md#viewporttype)

## References

### GraphEditorProps

Re-exports [GraphEditorProps](components_GraphEditor.md#grapheditorprops)

___

### Theme

Re-exports [Theme](core_theme.md#theme)

## Type aliases

### AdditionalDataItem

Ƭ **AdditionalDataItem**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `type` | [`RDFType`](type.md#rdftype) |
| `value` | `string`[] |

#### Defined in

[src/type/index.ts:159](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L159)

___

### BoundingBox

Ƭ **BoundingBox**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[src/type/index.ts:87](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L87)

___

### Cluster

Ƭ **Cluster**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `childClusterIds` | `string`[] | Member child cluster ids |
| `id` | `string` | - |
| `ids` | `string`[] | Member node ids |
| `name` | `string` | Cluster name or label |
| `position?` | `Position` | Cluster node position |
| `visible?` | `boolean` | - |

#### Defined in

[src/type/index.ts:450](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L450)

___

### ClustersByChildClusterId

Ƭ **ClustersByChildClusterId**: `Record`<`string`, [`Cluster`](type.md#cluster)[]\>

#### Defined in

[src/type/index.ts:473](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L473)

___

### ClustersByNodeId

Ƭ **ClustersByNodeId**: `Record`<`string`, [`Cluster`](type.md#cluster)[]\>

#### Defined in

[src/type/index.ts:471](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L471)

___

### ControllerState

Ƭ **ControllerState**: { `onEvent`: (`eventInfo`: [`EventInfo`](type.md#eventinfo) & { `graphEditor`: [`GraphEditorRef`](type.md#grapheditorref)  }, `draft`: [`ControllerState`](type.md#controllerstate)) => `boolean` \| `void`  } & `Pick`<[`GraphEditorProps`](components_GraphEditor.md#grapheditorprops), ``"nodes"`` \| ``"edges"`` \| ``"mode"`` \| ``"selectedElementIds"`` \| ``"actionBar"`` \| ``"dataBar"`` \| ``"settingsBar"`` \| ``"graphConfig"`` \| ``"playlists"`` \| ``"isLoading"`` \| ``"modals"`` \| ``"events"`` \| ``"preferencesModal"`` \| ``"isFocusMode"`` \| ``"previousDataList"`` \| ``"label"``\>

#### Defined in

[src/type/index.ts:757](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L757)

___

### CytoscapeEvent

Ƭ **CytoscapeEvent**: keyof typeof [`CYTOSCAPE_EVENT`](constants.md#cytoscape_event)

#### Defined in

[src/type/index.ts:382](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L382)

___

### DataItem

Ƭ **DataItem**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `additional?` | [`AdditionalDataItem`](type.md#additionaldataitem)[] |
| `name` | `string` |
| `type` | [`RDFType`](type.md#rdftype) |
| `value` | `string`[] |

#### Defined in

[src/type/index.ts:165](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L165)

___

### DisplayObjectWithYoga

Ƭ **DisplayObjectWithYoga**: `PIXI.DisplayObject` & { `flex`: `boolean` ; `yoga`: `YogaLayout`  }

#### Defined in

[src/type/index.ts:541](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L541)

___

### DrawLine

Ƭ **DrawLine**: (`arg`: `Parameters`<[`RenderEdge`](type.md#renderedge)\>[``0``] & { `from`: `Position` ; `graphics`: `PIXI.Graphics` ; `to`: `Position`  }) => `void`

#### Type declaration

▸ (`arg`): `void`

Graph drawLine function for edge vectors

##### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Parameters`<[`RenderEdge`](type.md#renderedge)\>[``0``] & { `from`: `Position` ; `graphics`: `PIXI.Graphics` ; `to`: `Position`  } |

##### Returns

`void`

#### Defined in

[src/type/index.ts:672](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L672)

___

### EdgeConfig

Ƭ **EdgeConfig**: { `view`: { `alpha`: `number` ; `fill`: { `default`: `number` ; `hovered`: `number` ; `nodeSelected`: `number` ; `selected`: `number`  } ; `labelVisible`: `boolean` ; `lineType`: [`EdgeLineType`](type.md#edgelinetype) ; `width`: `number`  }  } & [`ElementConfig`](type.md#elementconfig)<[`EdgeElement`](type.md#edgeelement)\>

#### Defined in

[src/type/index.ts:432](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L432)

___

### EdgeContext

Ƭ **EdgeContext**: [`ElementContext`](type.md#elementcontext)<[`EdgeElementSettings`](type.md#edgeelementsettings)\> & { `element`: [`EdgeElement`](type.md#edgeelement)  }

#### Defined in

[src/type/index.ts:143](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L143)

___

### EdgeData

Ƭ **EdgeData**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `data?` | `any` | Edge data |
| `id` | `string` | Edge id for cytoscape |
| `source` | `string` | Edge source id for cytoscape |
| `target` | `string` | Edge target id for cytoscape |

#### Defined in

[src/type/index.ts:195](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L195)

___

### EdgeElement

Ƭ **EdgeElement**: `EdgeSingular`

#### Defined in

[src/type/index.ts:173](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L173)

___

### EdgeElementSettings

Ƭ **EdgeElementSettings**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `filtered` | `boolean` | Edge is filtered by given filter function |
| `hovered` | `boolean` | Hovered state |
| `nodeFiltered` | `boolean` | Edge's source or target node is filtered |
| `visibility` | `Object` | Visibility tracking object |
| `visibility.nodeVisible` | `boolean` | - |

#### Defined in

[src/type/index.ts:95](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L95)

___

### EdgeLineType

Ƭ **EdgeLineType**: ``"bezier"`` \| ``"segments"`` \| ``"line"``

#### Defined in

[src/type/index.ts:430](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L430)

___

### EditorMode

Ƭ **EditorMode**: keyof typeof [`EDITOR_MODE`](constants.md#editor_mode)

GraphEditor mode

#### Defined in

[src/type/index.ts:157](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L157)

___

### Element

Ƭ **Element**: [`EdgeElement`](type.md#edgeelement) \| [`NodeElement`](type.md#nodeelement)

#### Defined in

[src/type/index.ts:176](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L176)

___

### ElementConfig

Ƭ **ElementConfig**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`NodeElement`](type.md#nodeelement) \| [`EdgeElement`](type.md#edgeelement) |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter` | [`ElementFilterOption`](type.md#elementfilteroption)<`T`\> | Filter config data |
| `renderEvents` | [`CytoscapeEvent`](type.md#cytoscapeevent)[] | When events are triggered, the element will be rerendered. |

#### Defined in

[src/type/index.ts:398](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L398)

___

### ElementContext

Ƭ **ElementContext**<`T`\>: `Object`

Cytoscape element context

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`NodeElementSettings`](type.md#nodeelementsettings) \| [`EdgeElementSettings`](type.md#edgeelementsettings) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `settings` | `T` |
| `onPositionChange` | () => `void` |
| `render` | (`callback?`: () => `void`) => `void` |

#### Defined in

[src/type/index.ts:81](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L81)

___

### ElementData

Ƭ **ElementData**: [`NodeData`](type.md#nodedata) \| [`EdgeData`](type.md#edgedata)

#### Defined in

[src/type/index.ts:178](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L178)

___

### ElementFilterOption

Ƭ **ElementFilterOption**<`E`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `E` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | `Object` | Settings for filtered elements |
| `settings.opacity` | `number` | - |
| `test?` | (`params`: { `element`: `E` ; `item`: [`NodeData`](type.md#nodedata) \| [`EdgeData`](type.md#edgedata)  }) => `boolean` | - |

#### Defined in

[src/type/index.ts:384](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L384)

___

### ElementType

Ƭ **ElementType**: keyof typeof [`ELEMENT_TYPE`](constants.md#element_type)

#### Defined in

[src/type/index.ts:360](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L360)

___

### EventHistory

Ƭ **EventHistory**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `currentIndex` | `number` | - |
| `events` | [`EventInfo`](type.md#eventinfo)[] | Recorded events |
| `undoEvents` | [`EventInfo`](type.md#eventinfo)[] | To undo events |

#### Defined in

[src/type/index.ts:736](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L736)

___

### EventInfo

Ƭ **EventInfo**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `avoidEventRecording?` | `boolean` | To avoid events being recorded by event recorder |
| `avoidHistoryRecording?` | `boolean` | To avoid events being recorded by history recorder |
| `dataItem?` | [`DataItem`](type.md#dataitem) | Event dataItem ; deprecated |
| `date` | `string` | Event date |
| `elementId?` | `string` | Event target element id |
| `event?` | `Partial`<`PIXI.InteractionEvent`\> | Original event |
| `id` | `string` | Unique event id |
| `index?` | `number` | Event index ; deprecated |
| `item?` | [`ElementData`](type.md#elementdata) | Event target element data |
| `payload?` | `any` | Event payload |
| `type` | [`EventType`](type.md#eventtype) | - |

#### Defined in

[src/type/index.ts:579](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L579)

___

### EventType

Ƭ **EventType**: keyof typeof [`EVENT`](constants.md#event)

GraphEditor Event Types

#### Defined in

[src/type/index.ts:153](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L153)

___

### FormProps

Ƭ **FormProps**: `React.ComponentPropsWithRef`<typeof `Form`\>

#### Defined in

[src/type/index.ts:876](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L876)

___

### GraphConfig

Ƭ **GraphConfig**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `backgroundColor?` | `number` | Viewport background color |
| `clusters?` | [`Cluster`](type.md#cluster)[] | Cluster config data |
| `edges?` | [`GraphEdgesConfig`](type.md#graphedgesconfig) | Graph edge data list |
| `graphId?` | `string` | Related graph id, if not set, it will be generated |
| `layout?` | typeof [`default`](core_layouts.md#default)[``"cose"``] & { `expansion?`: `number`  } | Calculate the layout of the graph and set the node positions. |
| `nodes?` | [`GraphNodesConfig`](type.md#graphnodesconfig) | Graph node data list |
| `theme?` | [`Theme`](core_theme.md#theme) | Theme for graph stage and elements |
| `transform?` | `Object` | Viewport transform data |
| `transform.pivotX?` | `number` | - |
| `transform.pivotY?` | `number` | - |
| `transform.rotation?` | `number` | - |
| `transform.scaleX?` | `number` | - |
| `transform.scaleY?` | `number` | - |
| `transform.skewX?` | `number` | - |
| `transform.skewY?` | `number` | - |
| `transform.x?` | `number` | - |
| `transform.y?` | `number` | - |
| `zoom?` | `number` | Viewport zoom level |

#### Defined in

[src/type/index.ts:487](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L487)

___

### GraphData

Ƭ **GraphData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `edges` | [`EdgeData`](type.md#edgedata)[] |
| `nodes` | [`NodeData`](type.md#nodedata)[] |

#### Defined in

[src/type/index.ts:214](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L214)

___

### GraphEdgesConfig

Ƭ **GraphEdgesConfig**: [`EdgeConfig`](type.md#edgeconfig) & { `ids?`: { [id: string]: [`EdgeConfig`](type.md#edgeconfig);  }  }

#### Defined in

[src/type/index.ts:481](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L481)

___

### GraphEditorConfig

Ƭ **GraphEditorConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `enableNetworkStatistics?` | `boolean` |

#### Defined in

[src/type/index.ts:776](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L776)

___

### GraphEditorContextType

Ƭ **GraphEditorContextType**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | [`GraphEditorConfig`](type.md#grapheditorconfig) | GraphEditor config data for all operations. |
| `edges` | [`EdgeData`](type.md#edgedata)[] | Edge data list |
| `eventHistory?` | [`EventHistory`](type.md#eventhistory) | Event history will be displayed on SettingsBar |
| `events?` | [`RecordedEvent`](type.md#recordedevent)[] | Recorded events will be displayed on SettingsBar |
| `graphConfig?` | [`GraphConfig`](type.md#graphconfig) | All graph config data for nodes and edges. It will supply the config data for the graph. |
| `graphEditorRef` | `React.RefObject`<[`GraphEditorRef`](type.md#grapheditorref)\> | GraphEditor instance ref |
| `label?` | [`GraphLabelData`](type.md#graphlabeldata) | Config for labels of nodes and edges |
| `localDataRef` | `React.RefObject`<{ `contextMenu`: { `itemIds`: `string`[]  } ; `initialized`: `boolean` ; `issuedClusterId`: `string` \| ``null`` ; `networkStatistics?`: [`NetworkStatistics`](type.md#networkstatistics) ; `newClusterBoxSelection`: { `elementIds`: `string`[]  } ; `props`: [`GraphEditorProps`](components_GraphEditor.md#grapheditorprops) ; `targetNode`: [`NodeElement`](type.md#nodeelement) \| ``null``  }\> | Locally used state for GraphEditor |
| `mode?` | [`EditorMode`](type.md#editormode) | Editor mode for changing actions and mouse icon |
| `networkStatistics?` | [`NetworkStatistics`](type.md#networkstatistics) | Calculated network statistics will be displayed on SettingsBar |
| `nodes` | [`NodeData`](type.md#nodedata)[] | Node data list |
| `onEvent` | [`OnEventLite`](type.md#oneventlite) | Event handler for all events that are emitted by the graph editor. |
| `playlists?` | [`Playlist`](type.md#playlist)[] | Events playlist will be displayed on SettingsBar |
| `selectedElement?` | [`Element`](type.md#element) \| ``null`` | Selected Element to view data |
| `selectedElementIds?` | `string`[] \| ``null`` | It gives the selected nodes. It is used for selected node highlighting and DataBar |
| `selectedItem?` | [`ElementData`](type.md#elementdata) \| ``null`` | Selected Item to view data |

#### Defined in

[src/type/index.ts:796](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L796)

___

### GraphEditorRef

Ƭ **GraphEditorRef**: [`GraphRef`](type.md#graphref) & { `context`: [`GraphEditorContextType`](type.md#grapheditorcontexttype)  }

#### Defined in

[src/type/index.ts:727](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L727)

___

### GraphEditorRenderClusterNode

Ƭ **GraphEditorRenderClusterNode**<`Additional`\>: `ExtendParams`<[`RenderNode`](type.md#rendernode), `GraphEditorRenderElementExtraParams` & `Additional`\>

GraphEditor Cluster Node render element function

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Additional` | extends `Record`<`string`, `any`\> = {} |

#### Defined in

[src/type/index.ts:353](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L353)

___

### GraphEditorRenderEdge

Ƭ **GraphEditorRenderEdge**<`Additional`\>: `ExtendParams`<[`RenderEdge`](type.md#renderedge), `GraphEditorRenderElementExtraParams` & `Additional`\>

GraphEditor Edge render element function

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Additional` | extends `Record`<`string`, `any`\> = {} |

#### Defined in

[src/type/index.ts:335](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L335)

___

### GraphEditorRenderNode

Ƭ **GraphEditorRenderNode**<`Additional`\>: `ExtendParams`<[`RenderNode`](type.md#rendernode), `GraphEditorRenderElementExtraParams` & `Additional`\>

GraphEditor Node render element function

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Additional` | extends `Record`<`string`, `any`\> = {} |

#### Defined in

[src/type/index.ts:344](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L344)

___

### GraphLabelData

Ƭ **GraphLabelData**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `edges` | `Record`<`string`, `string`[]\> | To override global label path for specific edges (id as key) |
| `global` | `Object` | To set label path for all nodes and edges ; will be overridden by set node and edge label path |
| `global.edges` | `string`[] | - |
| `global.nodes` | `string`[] | - |
| `isGlobalFirst?` | `Object` | Is global label path override |
| `isGlobalFirst.edges` | `boolean` | - |
| `isGlobalFirst.nodes` | `boolean` | - |
| `nodes` | `Record`<`string`, `string`[]\> | To override global label path for specific nodes (id as key) |

#### Defined in

[src/type/index.ts:559](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L559)

___

### GraphNodesConfig

Ƭ **GraphNodesConfig**: [`NodeConfig`](type.md#nodeconfig) & { `ids?`: { [id: string]: [`NodeConfig`](type.md#nodeconfig);  }  }

#### Defined in

[src/type/index.ts:475](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L475)

___

### GraphRef

Ƭ **GraphRef**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `app` | `PIXI.Application` | PIXI instance |
| `cy` | `Core` | Cytoscape instance |
| `viewport` | [`ViewportRef`](type.md#viewportref) | PIXI Viewport instance |

#### Defined in

[src/type/index.ts:712](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L712)

___

### LiteEventInfo

Ƭ **LiteEventInfo**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `avoidEventRecording?` | `boolean` | To avoid events being recorded by event recorder |
| `avoidHistoryRecording?` | `boolean` | To avoid events being recorded by history recorder |
| `dataItem?` | [`DataItem`](type.md#dataitem) | Event dataItem ; deprecated |
| `elementId?` | `string` | Event target element id |
| `event?` | `Partial`<`PIXI.InteractionEvent`\> | Original event |
| `index?` | `number` | Event index ; deprecated |
| `item?` | [`ElementData`](type.md#elementdata) | Event target element data |
| `payload?` | `any` | Event payload |
| `type` | [`EventType`](type.md#eventtype) | - |

#### Defined in

[src/type/index.ts:623](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L623)

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

[src/type/index.ts:781](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L781)

___

### NodeConfig

Ƭ **NodeConfig**: { `position?`: `Position` ; `view`: { `fill`: { `default`: `number` ; `edgeSelected`: `number` ; `hovered`: `number` ; `selected`: `number`  } ; `height`: `number` ; `labelVisible`: `boolean` ; `radius`: `number` ; `width`: `number`  }  } & [`ElementConfig`](type.md#elementconfig)<[`NodeElement`](type.md#nodeelement)\>

#### Defined in

[src/type/index.ts:408](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L408)

___

### NodeContext

Ƭ **NodeContext**: [`ElementContext`](type.md#elementcontext)<[`NodeElementSettings`](type.md#nodeelementsettings)\> & { `boundingBox`: [`BoundingBox`](type.md#boundingbox) ; `element`: [`NodeElement`](type.md#nodeelement)  }

#### Defined in

[src/type/index.ts:132](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L132)

___

### NodeData

Ƭ **NodeData**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `data?` | `any` | Node data |
| `id` | `string` | Node id for cytoscape |
| `position?` | `Position` | Node initial position |

#### Defined in

[src/type/index.ts:180](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L180)

___

### NodeElement

Ƭ **NodeElement**: `NodeSingular`

#### Defined in

[src/type/index.ts:174](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L174)

___

### NodeElementSettings

Ƭ **NodeElementSettings**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `filtered` | `boolean` | Node is filtered by given filter function |
| `hovered` | `boolean` | Hovered state |
| `visibility` | `Object` | Visibility tracking object |
| `visibility.cluster` | `boolean` | - |

#### Defined in

[src/type/index.ts:115](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L115)

___

### OnEvent

Ƭ **OnEvent**: (`eventInfo`: [`EventInfo`](type.md#eventinfo)) => `void`

#### Type declaration

▸ (`eventInfo`): `void`

GraphEditor Event handler

##### Parameters

| Name | Type |
| :------ | :------ |
| `eventInfo` | [`EventInfo`](type.md#eventinfo) |

##### Returns

`void`

#### Defined in

[src/type/index.ts:662](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L662)

___

### OnEventLite

Ƭ **OnEventLite**: (`eventInfo`: `Omit`<[`EventInfo`](type.md#eventinfo), ``"id"`` \| ``"date"``\>) => `void`

#### Type declaration

▸ (`eventInfo`): `void`

GraphEditor Lite Event handler

##### Parameters

| Name | Type |
| :------ | :------ |
| `eventInfo` | `Omit`<[`EventInfo`](type.md#eventinfo), ``"id"`` \| ``"date"``\> |

##### Returns

`void`

#### Defined in

[src/type/index.ts:667](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L667)

___

### PIXIBasicProps

Ƭ **PIXIBasicProps**: { `buttonMode?`: `boolean` ; `interactive?`: `boolean`  } & { [k in InteractionEventTypes]?: Function }

#### Defined in

[src/type/index.ts:368](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L368)

___

### PIXIDisplayObjectProps

Ƭ **PIXIDisplayObjectProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `buttonMode?` | `boolean` | To make object clickable |
| `interactive?` | `boolean` | To make object interactive |

#### Defined in

[src/type/index.ts:548](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L548)

___

### Playlist

Ƭ **Playlist**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | [`EventInfo`](type.md#eventinfo)[] | Recorded events |
| `id` | `string` | - |
| `name` | `string` | - |

#### Defined in

[src/type/index.ts:748](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L748)

___

### RDFType

Ƭ **RDFType**: keyof typeof [`DATA_TYPE`](constants.md#data_type)

#### Defined in

[src/type/index.ts:364](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L364)

___

### RDFValue

Ƭ **RDFValue**: `Enumerable`<`string` \| `number`\>

#### Defined in

[src/type/index.ts:362](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L362)

___

### RecordedEvent

Ƭ **RecordedEvent**: [`EventInfo`](type.md#eventinfo)

#### Defined in

[src/type/index.ts:734](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L734)

___

### Ref

Ƭ **Ref**<`T`\>: `React.Ref`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/type/index.ts:172](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L172)

___

### RenderClusterNode

Ƭ **RenderClusterNode**<`Additional`\>: (`c`: { `config`: [`NodeConfig`](type.md#nodeconfig) ; `context`: [`NodeContext`](type.md#nodecontext) ; `element`: [`NodeElement`](type.md#nodeelement) ; `item`: [`Cluster`](type.md#cluster)  } & `RenderElementParams` & `Additional`) => `React.ReactElement`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Additional` | extends `Record`<`string`, `any`\> = {} |

#### Type declaration

▸ (`c`): `React.ReactElement`

##### Parameters

| Name | Type |
| :------ | :------ |
| `c` | { `config`: [`NodeConfig`](type.md#nodeconfig) ; `context`: [`NodeContext`](type.md#nodecontext) ; `element`: [`NodeElement`](type.md#nodeelement) ; `item`: [`Cluster`](type.md#cluster)  } & `RenderElementParams` & `Additional` |

##### Returns

`React.ReactElement`

#### Defined in

[src/type/index.ts:313](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L313)

___

### RenderEdge

Ƭ **RenderEdge**<`Additional`\>: (`c`: { `config`: [`EdgeConfig`](type.md#edgeconfig) ; `context`: [`EdgeContext`](type.md#edgecontext) ; `count`: `number` ; `element`: [`EdgeElement`](type.md#edgeelement) ; `from`: `Position` ; `index`: `number` ; `item`: [`EdgeData`](type.md#edgedata) ; `sortedIndex`: `number` ; `sourceElement`: [`NodeElement`](type.md#nodeelement) ; `targetElement`: [`NodeElement`](type.md#nodeelement) ; `to`: `Position`  } & `RenderElementParams` & `Additional`) => `React.ReactElement`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Additional` | extends `Record`<`string`, `any`\> = {} |

#### Type declaration

▸ (`c`): `React.ReactElement`

##### Parameters

| Name | Type |
| :------ | :------ |
| `c` | { `config`: [`EdgeConfig`](type.md#edgeconfig) ; `context`: [`EdgeContext`](type.md#edgecontext) ; `count`: `number` ; `element`: [`EdgeElement`](type.md#edgeelement) ; `from`: `Position` ; `index`: `number` ; `item`: [`EdgeData`](type.md#edgedata) ; `sortedIndex`: `number` ; `sourceElement`: [`NodeElement`](type.md#nodeelement) ; `targetElement`: [`NodeElement`](type.md#nodeelement) ; `to`: `Position`  } & `RenderElementParams` & `Additional` |

##### Returns

`React.ReactElement`

#### Defined in

[src/type/index.ts:247](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L247)

___

### RenderNode

Ƭ **RenderNode**<`Additional`\>: (`c`: { `config`: [`NodeConfig`](type.md#nodeconfig) ; `context`: [`NodeContext`](type.md#nodecontext) ; `element`: [`NodeElement`](type.md#nodeelement) ; `item`: [`NodeData`](type.md#nodedata)  } & `RenderElementParams` & `Additional`) => `React.ReactElement`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Additional` | extends `Record`<`string`, `any`\> = {} |

#### Type declaration

▸ (`c`): `React.ReactElement`

##### Parameters

| Name | Type |
| :------ | :------ |
| `c` | { `config`: [`NodeConfig`](type.md#nodeconfig) ; `context`: [`NodeContext`](type.md#nodecontext) ; `element`: [`NodeElement`](type.md#nodeelement) ; `item`: [`NodeData`](type.md#nodedata)  } & `RenderElementParams` & `Additional` |

##### Returns

`React.ReactElement`

#### Defined in

[src/type/index.ts:294](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L294)

___

### Style

Ƭ **Style**: `Object`

Style for view components

#### Index signature

▪ [k: `string`]: `any`

#### Defined in

[src/type/index.ts:76](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L76)

___

### ViewportRef

Ƭ **ViewportRef**: [`ViewportType`](type.md#viewporttype)

#### Defined in

[src/type/index.ts:710](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L710)

___

### ViewportType

Ƭ **ViewportType**: `PIXI.DisplayObject` & `ViewportNative` & { `clickEvent`: `any` ; `hitArea`: [`BoundingBox`](type.md#boundingbox) ; `isClick`: `boolean` ; `oldQualityLevel`: `number` ; `qualityLevel`: `number`  }

#### Defined in

[src/type/index.ts:688](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/type/index.ts#L688)
