[perfect-graph](../README.md) / [Modules](../modules.md) / components/EdgeContainer

# Module: components/EdgeContainer

## Table of contents

### Namespaces

- [&lt;internal\&gt;](components_EdgeContainer._internal_.md)

### Type aliases

- [EdgeContainerProps](components_EdgeContainer#edgecontainerprops)
- [EdgeContainerType](components_EdgeContainer#edgecontainertype)

### Variables

- [EdgeContainer](components_EdgeContainer#edgecontainer)

### Functions

- [calculateEdgeGroupInfo](components_EdgeContainer#calculateedgegroupinfo)
- [calculateVectorInfo](components_EdgeContainer#calculatevectorinfo)

## Type aliases

### EdgeContainerProps

Ƭ **EdgeContainerProps**: `Object`

#### Type declaration

| Name        | Type                                                                                  | Description                                   |
| :---------- | :------------------------------------------------------------------------------------ | :-------------------------------------------- |
| `children`  | [`RenderEdge`](components_EdgeContainer._internal_#renderedge)                        | -                                             |
| `config`    | [`EdgeConfig`](components_EdgeContainer._internal_#edgeconfig)                        | Edge config data                              |
| `drawLine?` | [`DrawLine`](components_EdgeContainer._internal_#drawline)                            | Draw line function for edge connection vector |
| `graphID`   | `string`                                                                              | Related graph id                              |
| `graphRef`  | `React.RefObject`<[`GraphRef`](components_ClusterNodeContainer._internal_#graphref)\> | Related graph instance ref                    |
| `item`      | `any`                                                                                 | Edge data                                     |

#### Defined in

[components/EdgeContainer/index.tsx:21](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/EdgeContainer/index.tsx#L21)

---

### EdgeContainerType

Ƭ **EdgeContainerType**: `React.FC`<[`EdgeContainerProps`](components_EdgeContainer#edgecontainerprops)\>

#### Defined in

[components/EdgeContainer/index.tsx:45](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/EdgeContainer/index.tsx#L45)

## Variables

### EdgeContainer

• **EdgeContainer**: `FC`<[`EdgeContainerProps`](components_EdgeContainer#edgecontainerprops)\>

The container for Edge Elements. It facilitates drawLine, visibility, and other
operations.

#### Defined in

[components/EdgeContainer/index.tsx:321](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/EdgeContainer/index.tsx#L321)

## Functions

### calculateEdgeGroupInfo

▸ `Const` **calculateEdgeGroupInfo**(`edge`): `Object`

The calculator for the edges connection info.

#### Parameters

| Name   | Type           |
| :----- | :------------- |
| `edge` | `EdgeSingular` |

#### Returns

`Object`

| Name          | Type     |
| :------------ | :------- |
| `count`       | `number` |
| `index`       | `number` |
| `sortedIndex` | `number` |

#### Defined in

[components/EdgeContainer/index.tsx:52](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/EdgeContainer/index.tsx#L52)

---

### calculateVectorInfo

▸ `Const` **calculateVectorInfo**(`source`, `to`): `Object`

The calculator for the edge connection vector.

#### Parameters

| Name     | Type           |
| :------- | :------------- |
| `source` | `NodeSingular` |
| `to`     | `NodeSingular` |

#### Returns

`Object`

| Name                   | Type     |
| :--------------------- | :------- |
| `distanceVector`       | `Victor` |
| `fromPosition`         | `Victor` |
| `midpointPosition`     | `Victor` |
| `normVector`           | `Victor` |
| `toPosition`           | `Victor` |
| `undirectedNormVector` | `Victor` |
| `undirectedUnitVector` | `Victor` |
| `unitVector`           | `Victor` |

#### Defined in

[components/EdgeContainer/index.tsx:84](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/components/EdgeContainer/index.tsx#L84)
