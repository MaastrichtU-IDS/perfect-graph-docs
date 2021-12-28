[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SearchClosenessCentralityOptions

# Interface: SearchClosenessCentralityOptions

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SearchClosenessCentralityOptions

http://js.cytoscape.org/#eles.closenessCentrality

## Table of contents

### Properties

- [directed](components_ClusterNodeContainer._internal_.SearchClosenessCentralityOptions.md#directed)
- [harmonic](components_ClusterNodeContainer._internal_.SearchClosenessCentralityOptions.md#harmonic)
- [root](components_ClusterNodeContainer._internal_.SearchClosenessCentralityOptions.md#root)

### Methods

- [weight](components_ClusterNodeContainer._internal_.SearchClosenessCentralityOptions.md#weight)

## Properties

### directed

• `Optional` **directed**: `boolean`

A boolean indicating whether the directed indegree and outdegree centrality is calculated (true) or
whether the undirected centrality is calculated (false, default).

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3170

___

### harmonic

• `Optional` **harmonic**: `boolean`

A boolean indicating whether the algorithm calculates the
harmonic mean (true, default) or the arithmetic mean (false) of distances.
The harmonic mean is very useful for graphs that are not strongly connected.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3176

___

### root

• **root**: `string` \| `NodeSingular`

The root node (selector or collection) for which the
centrality calculation is made.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3162

## Methods

### weight

▸ `Optional` **weight**(`edge`): `number`

A function that returns the weight for the edge.

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | `EdgeSingular` |

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3164
