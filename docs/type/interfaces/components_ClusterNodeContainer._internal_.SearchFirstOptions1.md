[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SearchFirstOptions1

# Interface: SearchFirstOptions1

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SearchFirstOptions1

## Hierarchy

- [`SearchFirstOptionsBase`](components_ClusterNodeContainer._internal_.SearchFirstOptionsBase.md)

  ↳ **`SearchFirstOptions1`**

## Table of contents

### Properties

- [directed](components_ClusterNodeContainer._internal_.SearchFirstOptions1.md#directed)
- [root](components_ClusterNodeContainer._internal_.SearchFirstOptions1.md#root)
- [visit](components_ClusterNodeContainer._internal_.SearchFirstOptions1.md#visit)

## Properties

### directed

• `Optional` **directed**: `boolean`

A boolean indicating whether the algorithm should only go along edges from source to target (default false).

#### Inherited from

[SearchFirstOptionsBase](components_ClusterNodeContainer._internal_.SearchFirstOptionsBase.md).[directed](components_ClusterNodeContainer._internal_.SearchFirstOptionsBase.md#directed)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2907

___

### root

• **root**: `string` \| [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument)

The root nodes (selector or collection) to start the search from.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2913

___

### visit

• `Optional` **visit**: [`SearchVisitFunction`](../modules/components_ClusterNodeContainer._internal_.md#searchvisitfunction)

A handler function that is called when a node is visited in the search.

#### Inherited from

[SearchFirstOptionsBase](components_ClusterNodeContainer._internal_.SearchFirstOptionsBase.md).[visit](components_ClusterNodeContainer._internal_.SearchFirstOptionsBase.md#visit)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2903
