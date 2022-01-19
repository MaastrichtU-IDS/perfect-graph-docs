[perfect-graph](../README.md) / [Modules](../modules.md) / [components/EdgeContainer](components_EdgeContainer.md) / <internal\>

# Namespace: <internal\>

[components/EdgeContainer](components_EdgeContainer.md).<internal/>

## Table of contents

### Type aliases

- [DrawLine](components_EdgeContainer._internal_#drawline)
- [EdgeConfig](components_EdgeContainer._internal_#edgeconfig)
- [EdgeContext](components_EdgeContainer._internal_#edgecontext)
- [EdgeLineType](components_EdgeContainer._internal_#edgelinetype)
- [RenderEdge](components_EdgeContainer._internal_#renderedge)

## Type aliases

### DrawLine

Ƭ **DrawLine**: (`arg`: `Parameters`<[`RenderEdge`](components_EdgeContainer._internal_#renderedge)\>[``0``] & { `from`: `Position` ; `graphics`: `PIXI.Graphics` ; `to`: `Position` }) => `void`

#### Type declaration

▸ (`arg`): `void`

Graph drawLine function for edge vectors

##### Parameters

| Name  | Type                                                                                                                                                           |
| :---- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `arg` | `Parameters`<[`RenderEdge`](components_EdgeContainer._internal_#renderedge)\>[``0``] & { `from`: `Position` ; `graphics`: `PIXI.Graphics` ; `to`: `Position` } |

##### Returns

`void`

#### Defined in

[type/index.ts:676](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L676)

---

### EdgeConfig

Ƭ **EdgeConfig**: { `view`: { `alpha`: `number` ; `fill`: { `default`: `number` ; `hovered`: `number` ; `nodeSelected`: `number` ; `selected`: `number` } ; `labelVisible`: `boolean` ; `lineType`: [`EdgeLineType`](components_EdgeContainer._internal_#edgelinetype) ; `width`: `number` } } & [`ElementConfig`](components_ClusterNodeContainer._internal_#elementconfig)<[`EdgeElement`](components_ClusterNodeContainer._internal_#edgeelement)\>

#### Defined in

[type/index.ts:432](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L432)

---

### EdgeContext

Ƭ **EdgeContext**: [`ElementContext`](components_ClusterNodeContainer._internal_#elementcontext)<[`EdgeElementSettings`](components_ClusterNodeContainer._internal_#edgeelementsettings)\> & { `element`: [`EdgeElement`](components_ClusterNodeContainer._internal_#edgeelement) }

#### Defined in

[type/index.ts:143](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L143)

---

### EdgeLineType

Ƭ **EdgeLineType**: `"bezier"` \| `"segments"` \| `"line"`

#### Defined in

[type/index.ts:430](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L430)

---

### RenderEdge

Ƭ **RenderEdge**<`Additional`\>: (`c`: { `config`: [`EdgeConfig`](components_EdgeContainer._internal_#edgeconfig) ; `context`: [`EdgeContext`](components_EdgeContainer._internal_#edgecontext) ; `count`: `number` ; `element`: [`EdgeElement`](components_ClusterNodeContainer._internal_#edgeelement) ; `from`: `Position` ; `index`: `number` ; `item`: [`EdgeData`](components_ClusterNodeContainer._internal_#edgedata) ; `sortedIndex`: `number` ; `sourceElement`: [`NodeElement`](components_ClusterNodeContainer._internal_#nodeelement) ; `targetElement`: [`NodeElement`](components_ClusterNodeContainer._internal_#nodeelement) ; `to`: `Position` } & [`RenderElementParams`](components_ClusterNodeContainer._internal_#renderelementparams) & `Additional`) => `React.ReactElement`

#### Type parameters

| Name         | Type                                    |
| :----------- | :-------------------------------------- |
| `Additional` | extends `Record`<`string`, `any`\> = {} |

#### Type declaration

▸ (`c`): `React.ReactElement`

##### Parameters

| Name | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :--- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `c`  | { `config`: [`EdgeConfig`](components_EdgeContainer._internal_#edgeconfig) ; `context`: [`EdgeContext`](components_EdgeContainer._internal_#edgecontext) ; `count`: `number` ; `element`: [`EdgeElement`](components_ClusterNodeContainer._internal_#edgeelement) ; `from`: `Position` ; `index`: `number` ; `item`: [`EdgeData`](components_ClusterNodeContainer._internal_#edgedata) ; `sortedIndex`: `number` ; `sourceElement`: [`NodeElement`](components_ClusterNodeContainer._internal_#nodeelement) ; `targetElement`: [`NodeElement`](components_ClusterNodeContainer._internal_#nodeelement) ; `to`: `Position` } & [`RenderElementParams`](components_ClusterNodeContainer._internal_#renderelementparams) & `Additional` |

##### Returns

`React.ReactElement`

#### Defined in

[type/index.ts:247](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/type/index.ts#L247)
