[perfect-graph](../README.md) / [Modules](../modules.md) / hooks/useGraph

# Module: hooks/useGraph

## Table of contents

### Type aliases

- [Props](hooks_useGraph.md#props)

### Variables

- [mutableGraphMap](hooks_useGraph.md#mutablegraphmap)

### Functions

- [useGraph](hooks_useGraph.md#usegraph)

## Type aliases

### Props

Ƭ **Props**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `clusters?` | [`Cluster`](type.md#cluster)[] | Clusters list |
| `id` | `string` | If there is no graph with the id, it will be generated |

#### Defined in

[src/hooks/useGraph.ts:11](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/hooks/useGraph.ts#L11)

## Variables

### mutableGraphMap

• **mutableGraphMap**: `Record`<`string`, { `clustersByChildClusterId`: [`ClustersByChildClusterId`](type.md#clustersbychildclusterid) ; `clustersByNodeId`: [`ClustersByNodeId`](type.md#clustersbynodeid) ; `cy`: `Core`  }\> = `{}`

#### Defined in

[src/hooks/useGraph.ts:5](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/hooks/useGraph.ts#L5)

## Functions

### useGraph

▸ `Const` **useGraph**(`props`): `Object`

To create new graph or use existing graph via hooks.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`Props`](hooks_useGraph.md#props) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `clustersByChildClusterId` | [`ClustersByChildClusterId`](type.md#clustersbychildclusterid) |
| `clustersByNodeId` | [`ClustersByNodeId`](type.md#clustersbynodeid) |
| `cy` | `Core` |

#### Defined in

[src/hooks/useGraph.ts:25](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/hooks/useGraph.ts#L25)
