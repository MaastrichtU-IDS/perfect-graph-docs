[perfect-graph](../README.md) / [Modules](../modules.md) / [core/clusters](core_clusters.md) / <internal\>

# Namespace: <internal\>

[core/clusters](core_clusters.md).<internal/>

## Table of contents

### Type aliases

- [ClusterAlgorithm](core_clusters._internal_#clusteralgorithm)

## Type aliases

### ClusterAlgorithm

Ƭ **ClusterAlgorithm**: `Object`

#### Type declaration

| Name           | Type                                                                                                                                                                                   |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `configForm`   | `any`                                                                                                                                                                                  |
| `configSchema` | `any`                                                                                                                                                                                  |
| `get`          | (`arg`: { `attributes`: `string` ; `cy`: `cytoscape.Core` }) => `Collection`<`SingularElementReturnValue`, `SingularElementArgument`\>[]                                               |
| `getByItem`    | (`arg`: { `attributes`: `string` ; `cy`: `Core` ; `edges`: `EdgeSingular`[] ; `nodes`: `NodeSingular`[] }) => `Collection`<`SingularElementReturnValue`, `SingularElementArgument`\>[] |

#### Defined in

[core/clusters/index.ts:33](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/core/clusters/index.ts#L33)
