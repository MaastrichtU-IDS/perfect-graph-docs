[perfect-graph](../README.md) / [Modules](../modules.md) / components/EdgeContainer

# Module: components/EdgeContainer

## Table of contents

### Namespaces

- [&lt;internal\&gt;](components_EdgeContainer._internal_.md)

### Type aliases

- [EdgeContainerProps](components_EdgeContainer.md#edgecontainerprops)
- [EdgeContainerType](components_EdgeContainer.md#edgecontainertype)

### Variables

- [EdgeContainer](components_EdgeContainer.md#edgecontainer)

### Functions

- [calculateEdgeGroupInfo](components_EdgeContainer.md#calculateedgegroupinfo)
- [calculateVectorInfo](components_EdgeContainer.md#calculatevectorinfo)

## Type aliases

### EdgeContainerProps

Ƭ **EdgeContainerProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `children` | [`RenderEdge`](components_EdgeContainer._internal_.md#renderedge) | - |
| `config` | [`EdgeConfig`](components_EdgeContainer._internal_.md#edgeconfig) | Edge config data |
| `drawLine?` | [`DrawLine`](components_EdgeContainer._internal_.md#drawline) | Draw line function for edge connection vector |
| `graphID` | `string` | Related graph id |
| `graphRef` | [`RefObject`](../interfaces/components_ClusterNodeContainer._internal_.RefObject.md)<[`GraphRef`](components_ClusterNodeContainer._internal_.md#graphref)\> | Related graph instance ref |
| `item` | `any` | Edge data |

#### Defined in

[src/components/EdgeContainer/index.tsx:21](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/EdgeContainer/index.tsx#L21)

___

### EdgeContainerType

Ƭ **EdgeContainerType**: [`FC`](components_ClusterNodeContainer._internal_.md#fc)<[`EdgeContainerProps`](components_EdgeContainer.md#edgecontainerprops)\>

#### Defined in

[src/components/EdgeContainer/index.tsx:45](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/EdgeContainer/index.tsx#L45)

## Variables

### EdgeContainer

• **EdgeContainer**: [`FC`](components_ClusterNodeContainer._internal_.md#fc)<[`EdgeContainerProps`](components_EdgeContainer.md#edgecontainerprops)\>

The container for Edge Elements. It facilitates drawLine, visibility, and other
operations.

#### Defined in

[src/components/EdgeContainer/index.tsx:321](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/EdgeContainer/index.tsx#L321)

## Functions

### calculateEdgeGroupInfo

▸ `Const` **calculateEdgeGroupInfo**(`edge`): `Object`

The calculator for the edges connection info.

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | `EdgeSingular` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `count` | `number` |
| `index` | `number` |
| `sortedIndex` | `number` |

#### Defined in

[src/components/EdgeContainer/index.tsx:52](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/EdgeContainer/index.tsx#L52)

___

### calculateVectorInfo

▸ `Const` **calculateVectorInfo**(`source`, `to`): `Object`

The calculator for the edge connection vector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `NodeSingular` |
| `to` | `NodeSingular` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `distanceVector` | [`Victor`](../classes/components_EdgeContainer._internal_.Victor.md) |
| `fromPosition` | [`Victor`](../classes/components_EdgeContainer._internal_.Victor.md) |
| `midpointPosition` | [`Victor`](../classes/components_EdgeContainer._internal_.Victor.md) |
| `normVector` | [`Victor`](../classes/components_EdgeContainer._internal_.Victor.md) |
| `toPosition` | [`Victor`](../classes/components_EdgeContainer._internal_.Victor.md) |
| `undirectedNormVector` | [`Victor`](../classes/components_EdgeContainer._internal_.Victor.md) |
| `undirectedUnitVector` | [`Victor`](../classes/components_EdgeContainer._internal_.Victor.md) |
| `unitVector` | [`Victor`](../classes/components_EdgeContainer._internal_.Victor.md) |

#### Defined in

[src/components/EdgeContainer/index.tsx:84](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/components/EdgeContainer/index.tsx#L84)
