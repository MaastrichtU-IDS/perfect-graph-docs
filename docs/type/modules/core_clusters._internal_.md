[perfect-graph](../README.md) / [Modules](../modules.md) / [core/clusters](core_clusters.md) / <internal\>

# Namespace: <internal\>

[core/clusters](core_clusters.md).<internal>

## Table of contents

### Type aliases

- [ClusterAlgorithm](core_clusters._internal_.md#clusteralgorithm)

## Type aliases

### ClusterAlgorithm

Ƭ **ClusterAlgorithm**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `configForm` | `any` |
| `configSchema` | `any` |
| `get` | (`arg`: { `attributes`: `string` ; `cy`: [`Core`](../interfaces/components_ClusterNodeContainer._internal_.Core.md)  }) => [`Collection`](../interfaces/components_ClusterNodeContainer._internal_.Collection.md)<[`SingularElementReturnValue`](components_ClusterNodeContainer._internal_.md#singularelementreturnvalue), [`SingularElementArgument`](components_ClusterNodeContainer._internal_.md#singularelementargument)\>[] |
| `getByItem` | (`arg`: { `attributes`: `string` ; `cy`: [`Core`](../interfaces/components_ClusterNodeContainer._internal_.Core.md) ; `edges`: `EdgeSingular`[] ; `nodes`: `NodeSingular`[]  }) => [`Collection`](../interfaces/components_ClusterNodeContainer._internal_.Collection.md)<[`SingularElementReturnValue`](components_ClusterNodeContainer._internal_.md#singularelementreturnvalue), [`SingularElementArgument`](components_ClusterNodeContainer._internal_.md#singularelementargument)\>[] |

#### Defined in

[src/core/clusters/index.ts:33](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/core/clusters/index.ts#L33)
