[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SearchFirstOptions2

# Interface: SearchFirstOptions2

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SearchFirstOptions2

## Hierarchy

- [`SearchFirstOptionsBase`](components_ClusterNodeContainer._internal_.SearchFirstOptionsBase.md)

  ↳ **`SearchFirstOptions2`**

## Table of contents

### Properties

- [directed](components_ClusterNodeContainer._internal_.SearchFirstOptions2.md#directed)
- [roots](components_ClusterNodeContainer._internal_.SearchFirstOptions2.md#roots)
- [visit](components_ClusterNodeContainer._internal_.SearchFirstOptions2.md#visit)

## Properties

### directed

• `Optional` **directed**: `boolean`

A boolean indicating whether the algorithm should only go along edges from source to target (default false).

#### Inherited from

[SearchFirstOptionsBase](components_ClusterNodeContainer._internal_.SearchFirstOptionsBase.md).[directed](components_ClusterNodeContainer._internal_.SearchFirstOptionsBase.md#directed)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2907

___

### roots

• **roots**: `string` \| [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument)

The root nodes (selector or collection) to start the search from.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2919

___

### visit

• `Optional` **visit**: [`SearchVisitFunction`](../modules/components_ClusterNodeContainer._internal_.md#searchvisitfunction)

A handler function that is called when a node is visited in the search.

#### Inherited from

[SearchFirstOptionsBase](components_ClusterNodeContainer._internal_.SearchFirstOptionsBase.md).[visit](components_ClusterNodeContainer._internal_.SearchFirstOptionsBase.md#visit)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2903
