[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SearchFirstOptionsBase

# Interface: SearchFirstOptionsBase

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SearchFirstOptionsBase

## Hierarchy

- **`SearchFirstOptionsBase`**

  ↳ [`SearchFirstOptions1`](components_ClusterNodeContainer._internal_.SearchFirstOptions1.md)

  ↳ [`SearchFirstOptions2`](components_ClusterNodeContainer._internal_.SearchFirstOptions2.md)

## Table of contents

### Properties

- [directed](components_ClusterNodeContainer._internal_.SearchFirstOptionsBase.md#directed)
- [visit](components_ClusterNodeContainer._internal_.SearchFirstOptionsBase.md#visit)

## Properties

### directed

• `Optional` **directed**: `boolean`

A boolean indicating whether the algorithm should only go along edges from source to target (default false).

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2907

___

### visit

• `Optional` **visit**: [`SearchVisitFunction`](../modules/components_ClusterNodeContainer._internal_.md#searchvisitfunction)

A handler function that is called when a node is visited in the search.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2903
