[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SearchClosenessCentralityNormalizedOptions

# Interface: SearchClosenessCentralityNormalizedOptions

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SearchClosenessCentralityNormalizedOptions

http://js.cytoscape.org/#eles.closenessCentralityNormalized

## Table of contents

### Properties

- [directed](components_ClusterNodeContainer._internal_.SearchClosenessCentralityNormalizedOptions.md#directed)
- [harmonic](components_ClusterNodeContainer._internal_.SearchClosenessCentralityNormalizedOptions.md#harmonic)

### Methods

- [weight](components_ClusterNodeContainer._internal_.SearchClosenessCentralityNormalizedOptions.md#weight)

## Properties

### directed

• `Optional` **directed**: `boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3189

___

### harmonic

• `Optional` **harmonic**: `boolean`

A boolean indicating whether the algorithm calculates the
harmonic mean (true, default) or the arithmetic mean (false) of distances.
The harmonic mean is very useful for graphs that are not strongly connected.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3195

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

node_modules/@types/cytoscape/index.d.ts:3188

▸ `Optional` **weight**(`edge`): `number`

A function that returns the weight for the edge.

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | `EdgeSingular` |

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3232
