[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SearchBetweennessOptions

# Interface: SearchBetweennessOptions

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SearchBetweennessOptions

http://js.cytoscape.org/#eles.betweennessCentrality

## Table of contents

### Properties

- [directed](components_ClusterNodeContainer._internal_.SearchBetweennessOptions.md#directed)

### Methods

- [weight](components_ClusterNodeContainer._internal_.SearchBetweennessOptions.md#weight)

## Properties

### directed

• `Optional` **directed**: `boolean`

A boolean indicating whether the directed indegree and outdegree centrality is calculated (true) or
whether the undirected centrality is calculated (false, default).

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3213

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

node_modules/@types/cytoscape/index.d.ts:3207
