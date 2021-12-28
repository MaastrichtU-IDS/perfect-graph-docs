[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SearchBellmanFordOptions

# Interface: SearchBellmanFordOptions

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SearchBellmanFordOptions

http://js.cytoscape.org/#eles.bellmanFord

## Table of contents

### Properties

- [directed](components_ClusterNodeContainer._internal_.SearchBellmanFordOptions.md#directed)
- [root](components_ClusterNodeContainer._internal_.SearchBellmanFordOptions.md#root)
- [weight](components_ClusterNodeContainer._internal_.SearchBellmanFordOptions.md#weight)

## Properties

### directed

• **directed**: `boolean`

Indicating whether the algorithm should only go along
edges from source to target (default false).

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3035

___

### root

• **root**: `any`

The root node (selector or collection) where the search starts.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3026

___

### weight

• `Optional` **weight**: [`WeightFn`](../modules/components_ClusterNodeContainer._internal_.md#weightfn)

A function that returns the positive numeric weight for this edge.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3030
