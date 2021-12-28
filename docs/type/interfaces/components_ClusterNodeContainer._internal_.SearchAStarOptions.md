[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SearchAStarOptions

# Interface: SearchAStarOptions

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SearchAStarOptions

http://js.cytoscape.org/#eles.aStar

## Table of contents

### Properties

- [directed](components_ClusterNodeContainer._internal_.SearchAStarOptions.md#directed)
- [goal](components_ClusterNodeContainer._internal_.SearchAStarOptions.md#goal)
- [root](components_ClusterNodeContainer._internal_.SearchAStarOptions.md#root)
- [weight](components_ClusterNodeContainer._internal_.SearchAStarOptions.md#weight)

### Methods

- [heuristic](components_ClusterNodeContainer._internal_.SearchAStarOptions.md#heuristic)

## Properties

### directed

• `Optional` **directed**: `boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2981

___

### goal

• **goal**: `string` \| [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2978

___

### root

• **root**: `string` \| [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2977

___

### weight

• `Optional` **weight**: [`WeightFn`](../modules/components_ClusterNodeContainer._internal_.md#weightfn)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2979

## Methods

### heuristic

▸ `Optional` **heuristic**(`node`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md) |

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2980
