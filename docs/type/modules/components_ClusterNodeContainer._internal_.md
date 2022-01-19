[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](components_ClusterNodeContainer.md) / <internal\>

# Namespace: <internal\>

[components/ClusterNodeContainer](components_ClusterNodeContainer.md).<internal/>

## Table of contents

### Type aliases

- [BoundingBox](components_ClusterNodeContainer._internal_#boundingbox)
- [Cluster](components_ClusterNodeContainer._internal_#cluster)
- [CytoscapeEvent](components_ClusterNodeContainer._internal_#cytoscapeevent)
- [EdgeData](components_ClusterNodeContainer._internal_#edgedata)
- [EdgeElement](components_ClusterNodeContainer._internal_#edgeelement)
- [EdgeElementSettings](components_ClusterNodeContainer._internal_#edgeelementsettings)
- [ElementConfig](components_ClusterNodeContainer._internal_#elementconfig)
- [ElementContext](components_ClusterNodeContainer._internal_#elementcontext)
- [ElementFilterOption](components_ClusterNodeContainer._internal_#elementfilteroption)
- [GraphRef](components_ClusterNodeContainer._internal_#graphref)
- [NodeConfig](components_ClusterNodeContainer._internal_#nodeconfig)
- [NodeContext](components_ClusterNodeContainer._internal_#nodecontext)
- [NodeData](components_ClusterNodeContainer._internal_#nodedata)
- [NodeElement](components_ClusterNodeContainer._internal_#nodeelement)
- [NodeElementSettings](components_ClusterNodeContainer._internal_#nodeelementsettings)
- [RenderClusterNode](components_ClusterNodeContainer._internal_#renderclusternode)
- [RenderElementParams](components_ClusterNodeContainer._internal_#renderelementparams)
- [ViewportRef](components_ClusterNodeContainer._internal_#viewportref)
- [ViewportType](components_ClusterNodeContainer._internal_#viewporttype)

### Variables

- [CYTOSCAPE_EVENT](components_ClusterNodeContainer._internal_#cytoscape_event)

## Type aliases

### BoundingBox

Ƭ **BoundingBox**: `Object`

#### Type declaration

| Name     | Type     |
| :------- | :------- |
| `height` | `number` |
| `width`  | `number` |
| `x`      | `number` |
| `y`      | `number` |

#### Defined in

[type/index.ts:87](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L87)

---

### Cluster

Ƭ **Cluster**: `Object`

#### Type declaration

| Name              | Type       | Description              |
| :---------------- | :--------- | :----------------------- |
| `childClusterIds` | `string`[] | Member child cluster ids |
| `id`              | `string`   | -                        |
| `ids`             | `string`[] | Member node ids          |
| `name`            | `string`   | Cluster name or label    |
| `position?`       | `Position` | Cluster node position    |
| `visible?`        | `boolean`  | -                        |

#### Defined in

[type/index.ts:450](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L450)

---

### CytoscapeEvent

Ƭ **CytoscapeEvent**: keyof typeof [`CYTOSCAPE_EVENT`](components_ClusterNodeContainer._internal_#cytoscape_event)

#### Defined in

[type/index.ts:382](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L382)

---

### EdgeData

Ƭ **EdgeData**: `Object`

#### Type declaration

| Name     | Type     | Description                  |
| :------- | :------- | :--------------------------- |
| `data?`  | `any`    | Edge data                    |
| `id`     | `string` | Edge id for cytoscape        |
| `source` | `string` | Edge source id for cytoscape |
| `target` | `string` | Edge target id for cytoscape |

#### Defined in

[type/index.ts:195](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L195)

---

### EdgeElement

Ƭ **EdgeElement**: `EdgeSingular`

#### Defined in

[type/index.ts:173](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L173)

---

### EdgeElementSettings

Ƭ **EdgeElementSettings**: `Object`

#### Type declaration

| Name                     | Type      | Description                               |
| :----------------------- | :-------- | :---------------------------------------- |
| `filtered`               | `boolean` | Edge is filtered by given filter function |
| `hovered`                | `boolean` | Hovered state                             |
| `nodeFiltered`           | `boolean` | Edge's source or target node is filtered  |
| `visibility`             | `Object`  | Visibility tracking object                |
| `visibility.nodeVisible` | `boolean` | -                                         |

#### Defined in

[type/index.ts:95](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L95)

---

### ElementConfig

Ƭ **ElementConfig**<`T`\>: `Object`

#### Type parameters

| Name | Type                                                                                                                                               |
| :--- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| `T`  | [`NodeElement`](components_ClusterNodeContainer._internal_#nodeelement) \| [`EdgeElement`](components_ClusterNodeContainer._internal_#edgeelement) |

#### Type declaration

| Name           | Type                                                                                          | Description                                                |
| :------------- | :-------------------------------------------------------------------------------------------- | :--------------------------------------------------------- |
| `filter`       | [`ElementFilterOption`](components_ClusterNodeContainer._internal_#elementfilteroption)<`T`\> | Filter config data                                         |
| `renderEvents` | [`CytoscapeEvent`](components_ClusterNodeContainer._internal_#cytoscapeevent)[]               | When events are triggered, the element will be rerendered. |

#### Defined in

[type/index.ts:398](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L398)

---

### ElementContext

Ƭ **ElementContext**<`T`\>: `Object`

Cytoscape element context

#### Type parameters

| Name | Type                                                                                                                                                                               |
| :--- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `T`  | [`NodeElementSettings`](components_ClusterNodeContainer._internal_#nodeelementsettings) \| [`EdgeElementSettings`](components_ClusterNodeContainer._internal_#edgeelementsettings) |

#### Type declaration

| Name               | Type                                  |
| :----------------- | :------------------------------------ |
| `settings`         | `T`                                   |
| `onPositionChange` | () => `void`                          |
| `render`           | (`callback?`: () => `void`) => `void` |

#### Defined in

[type/index.ts:81](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L81)

---

### ElementFilterOption

Ƭ **ElementFilterOption**<`E`\>: `Object`

#### Type parameters

| Name |
| :--- |
| `E`  |

#### Type declaration

| Name               | Type                                                                                                                                                                                         | Description                    |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------- |
| `settings`         | `Object`                                                                                                                                                                                     | Settings for filtered elements |
| `settings.opacity` | `number`                                                                                                                                                                                     | -                              |
| `test?`            | (`params`: { `element`: `E` ; `item`: [`NodeData`](components_ClusterNodeContainer._internal_#nodedata) \| [`EdgeData`](components_ClusterNodeContainer._internal_#edgedata) }) => `boolean` | -                              |

#### Defined in

[type/index.ts:384](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L384)

---

### GraphRef

Ƭ **GraphRef**: `Object`

#### Type declaration

| Name       | Type                                                                    | Description            |
| :--------- | :---------------------------------------------------------------------- | :--------------------- |
| `app`      | `PIXI.Application`                                                      | PIXI instance          |
| `cy`       | `Core`                                                                  | Cytoscape instance     |
| `viewport` | [`ViewportRef`](components_ClusterNodeContainer._internal_#viewportref) | PIXI Viewport instance |

#### Defined in

[type/index.ts:716](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L716)

---

### NodeConfig

Ƭ **NodeConfig**: { `position?`: `Position` ; `view`: { `fill`: { `default`: `number` ; `edgeSelected`: `number` ; `hovered`: `number` ; `selected`: `number` } ; `height`: `number` ; `labelVisible`: `boolean` ; `radius`: `number` ; `width`: `number` } } & [`ElementConfig`](components_ClusterNodeContainer._internal_#elementconfig)<[`NodeElement`](components_ClusterNodeContainer._internal_#nodeelement)\>

#### Defined in

[type/index.ts:408](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L408)

---

### NodeContext

Ƭ **NodeContext**: [`ElementContext`](components_ClusterNodeContainer._internal_#elementcontext)<[`NodeElementSettings`](components_ClusterNodeContainer._internal_#nodeelementsettings)\> & { `boundingBox`: [`BoundingBox`](components_ClusterNodeContainer._internal_#boundingbox) ; `element`: [`NodeElement`](components_ClusterNodeContainer._internal_#nodeelement) }

#### Defined in

[type/index.ts:132](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L132)

---

### NodeData

Ƭ **NodeData**: `Object`

#### Type declaration

| Name        | Type       | Description           |
| :---------- | :--------- | :-------------------- |
| `data?`     | `any`      | Node data             |
| `id`        | `string`   | Node id for cytoscape |
| `position?` | `Position` | Node initial position |

#### Defined in

[type/index.ts:180](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L180)

---

### NodeElement

Ƭ **NodeElement**: `NodeSingular`

#### Defined in

[type/index.ts:174](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L174)

---

### NodeElementSettings

Ƭ **NodeElementSettings**: `Object`

#### Type declaration

| Name                 | Type      | Description                               |
| :------------------- | :-------- | :---------------------------------------- |
| `filtered`           | `boolean` | Node is filtered by given filter function |
| `hovered`            | `boolean` | Hovered state                             |
| `visibility`         | `Object`  | Visibility tracking object                |
| `visibility.cluster` | `boolean` | -                                         |

#### Defined in

[type/index.ts:115](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L115)

---

### RenderClusterNode

Ƭ **RenderClusterNode**<`Additional`\>: (`c`: { `config`: [`NodeConfig`](components_ClusterNodeContainer._internal_#nodeconfig) ; `context`: [`NodeContext`](components_ClusterNodeContainer._internal_#nodecontext) ; `element`: [`NodeElement`](components_ClusterNodeContainer._internal_#nodeelement) ; `item`: [`Cluster`](components_ClusterNodeContainer._internal_#cluster) } & [`RenderElementParams`](components_ClusterNodeContainer._internal_#renderelementparams) & `Additional`) => `React.ReactElement`

#### Type parameters

| Name         | Type                                    |
| :----------- | :-------------------------------------- |
| `Additional` | extends `Record`<`string`, `any`\> = {} |

#### Type declaration

▸ (`c`): `React.ReactElement`

##### Parameters

| Name | Type                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :--- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `c`  | { `config`: [`NodeConfig`](components_ClusterNodeContainer._internal_#nodeconfig) ; `context`: [`NodeContext`](components_ClusterNodeContainer._internal_#nodecontext) ; `element`: [`NodeElement`](components_ClusterNodeContainer._internal_#nodeelement) ; `item`: [`Cluster`](components_ClusterNodeContainer._internal_#cluster) } & [`RenderElementParams`](components_ClusterNodeContainer._internal_#renderelementparams) & `Additional` |

##### Returns

`React.ReactElement`

#### Defined in

[type/index.ts:313](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L313)

---

### RenderElementParams

Ƭ **RenderElementParams**: `Object`

Edge or Node render element function

#### Type declaration

| Name       | Type                                                                                  | Description                |
| :--------- | :------------------------------------------------------------------------------------ | :------------------------- |
| `cy`       | `Core`                                                                                | Related cytoscape instance |
| `graphRef` | `React.RefObject`<[`GraphRef`](components_ClusterNodeContainer._internal_#graphref)\> | Related graph instance ref |
| `theme`    | [`Theme`](core_theme#theme)                                                           | -                          |

#### Defined in

[type/index.ts:222](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L222)

---

### ViewportRef

Ƭ **ViewportRef**: [`ViewportType`](components_ClusterNodeContainer._internal_#viewporttype)

#### Defined in

[type/index.ts:714](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L714)

---

### ViewportType

Ƭ **ViewportType**: `PIXI.DisplayObject` & `ViewportNative` & { `clickEvent`: `any` ; `hitArea`: [`BoundingBox`](components_ClusterNodeContainer._internal_#boundingbox) ; `isClick`: `boolean` ; `oldQualityLevel`: `number` ; `qualityLevel`: `number` }

#### Defined in

[type/index.ts:692](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L692)

## Variables

### CYTOSCAPE_EVENT

• **CYTOSCAPE_EVENT**: `Object`

#### Type declaration

| Name           | Type             |
| :------------- | :--------------- |
| `data`         | `"data"`         |
| `mouseout`     | `"mouseout"`     |
| `mouseover`    | `"mouseover"`    |
| `position`     | `"position"`     |
| `select`       | `"select"`       |
| `selectEdge`   | `"selectEdge"`   |
| `selectNode`   | `"selectNode"`   |
| `unselect`     | `"unselect"`     |
| `unselectEdge` | `"unselectEdge"` |
| `unselectNode` | `"unselectNode"` |

#### Defined in

[constants/index.tsx:170](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/constants/index.tsx#L170)
