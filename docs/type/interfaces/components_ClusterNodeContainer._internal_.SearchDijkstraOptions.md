[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SearchDijkstraOptions

# Interface: SearchDijkstraOptions

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SearchDijkstraOptions

http://js.cytoscape.org/#eles.dijkstra

## Table of contents

### Properties

- [directed](components_ClusterNodeContainer._internal_.SearchDijkstraOptions.md#directed)
- [root](components_ClusterNodeContainer._internal_.SearchDijkstraOptions.md#root)
- [weight](components_ClusterNodeContainer._internal_.SearchDijkstraOptions.md#weight)

## Properties

### directed

• `Optional` **directed**: `boolean`

A boolean indicating whether the algorithm should only go along edges from source to target (default false).

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2955

___

### root

• **root**: `string` \| [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument)

The root node (selector or collection) where the algorithm starts.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2943

___

### weight

• `Optional` **weight**: [`WeightFn`](../modules/components_ClusterNodeContainer._internal_.md#weightfn)

A function that returns the positive numeric weight for this edge.

If no weight function is defined, a constant weight of 1 is used for each edge.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2950
