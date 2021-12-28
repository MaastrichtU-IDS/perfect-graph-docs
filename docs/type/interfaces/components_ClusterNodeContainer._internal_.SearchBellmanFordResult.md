[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SearchBellmanFordResult

# Interface: SearchBellmanFordResult

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SearchBellmanFordResult

http://js.cytoscape.org/#eles.bellmanFord

## Table of contents

### Properties

- [hasNegativeWeightCycle](components_ClusterNodeContainer._internal_.SearchBellmanFordResult.md#hasnegativeweightcycle)

### Methods

- [distanceTo](components_ClusterNodeContainer._internal_.SearchBellmanFordResult.md#distanceto)
- [pathTo](components_ClusterNodeContainer._internal_.SearchBellmanFordResult.md#pathto)

## Properties

### hasNegativeWeightCycle

• **hasNegativeWeightCycle**: `boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3055

## Methods

### distanceTo

▸ **distanceTo**(`node`): `number`

 function that computes the shortest distance from root node to argument node
(either objects or selector string)

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `string` \| `NodeSingular` |

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3052

___

### pathTo

▸ **pathTo**(`node`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

function that computes the shortest path from root node to the argument node
(either objects or selector string)

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `string` \| `NodeSingular` |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3045
