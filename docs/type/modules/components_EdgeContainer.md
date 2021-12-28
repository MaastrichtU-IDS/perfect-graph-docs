[perfect-graph](../README.md) / [Modules](../modules.md) / components/EdgeContainer

# Module: components/EdgeContainer

## Table of contents

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
| `children` | `RenderEdge` | - |
| `config` | `EdgeConfig` | Edge config data |
| `drawLine?` | `DrawLine` | Draw line function for edge connection vector |
| `graphID` | `string` | Related graph id |
| `graphRef` | `React.RefObject`<`GraphRef`\> | Related graph instance ref |
| `item` | `any` | Edge data |

#### Defined in

[components/EdgeContainer/index.tsx:21](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/components/EdgeContainer/index.tsx#L21)

___

### EdgeContainerType

Ƭ **EdgeContainerType**: `React.FC`<[`EdgeContainerProps`](components_EdgeContainer.md#edgecontainerprops)\>

#### Defined in

[components/EdgeContainer/index.tsx:45](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/components/EdgeContainer/index.tsx#L45)

## Variables

### EdgeContainer

• **EdgeContainer**: `FC`<[`EdgeContainerProps`](components_EdgeContainer.md#edgecontainerprops)\>

The container for Edge Elements. It facilitates drawLine, visibility, and other
operations.

#### Defined in

[components/EdgeContainer/index.tsx:321](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/components/EdgeContainer/index.tsx#L321)

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

[components/EdgeContainer/index.tsx:52](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/components/EdgeContainer/index.tsx#L52)

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
| `distanceVector` | `Victor` |
| `fromPosition` | `Victor` |
| `midpointPosition` | `Victor` |
| `normVector` | `Victor` |
| `toPosition` | `Victor` |
| `undirectedNormVector` | `Victor` |
| `undirectedUnitVector` | `Victor` |
| `unitVector` | `Victor` |

#### Defined in

[components/EdgeContainer/index.tsx:84](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/components/EdgeContainer/index.tsx#L84)
