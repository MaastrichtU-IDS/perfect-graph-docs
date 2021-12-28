[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SearchDegreeCentralityOptions

# Interface: SearchDegreeCentralityOptions

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SearchDegreeCentralityOptions

http://js.cytoscape.org/#eles.degreeCentrality

## Table of contents

### Properties

- [alpha](components_ClusterNodeContainer._internal_.SearchDegreeCentralityOptions.md#alpha)
- [directed](components_ClusterNodeContainer._internal_.SearchDegreeCentralityOptions.md#directed)
- [root](components_ClusterNodeContainer._internal_.SearchDegreeCentralityOptions.md#root)

### Methods

- [weight](components_ClusterNodeContainer._internal_.SearchDegreeCentralityOptions.md#weight)

## Properties

### alpha

• `Optional` **alpha**: `number`

The alpha value for the centrality calculation, ranging on [0, 1].
With value 0 (default), disregards edge weights and solely uses
number of edges in the centrality calculation. With value 1,
disregards number of edges and solely uses the edge weights
in the centrality calculation.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3100

___

### directed

• `Optional` **directed**: `boolean`

Whether the directed indegree and outdegree centrality is calculated (true) or
whether the undirected centrality is calculated (false, default).

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3105

___

### root

• **root**: `string` \| `NodeSingular`

The root node (selector or collection) for which the
centrality calculation is made.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3090

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

node_modules/@types/cytoscape/index.d.ts:3092
