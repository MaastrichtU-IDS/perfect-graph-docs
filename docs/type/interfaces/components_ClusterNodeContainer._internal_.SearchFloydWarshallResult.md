[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SearchFloydWarshallResult

# Interface: SearchFloydWarshallResult

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SearchFloydWarshallResult

http://js.cytoscape.org/#eles.floydWarshall

## Table of contents

### Methods

- [distance](components_ClusterNodeContainer._internal_.SearchFloydWarshallResult.md#distance)
- [path](components_ClusterNodeContainer._internal_.SearchFloydWarshallResult.md#path)

## Methods

### distance

▸ **distance**(`fromNode`, `toNode`): `number`

Returns the distance from the source node to node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromNode` | `NodeSingular` \| [`CollectionSelection`](components_ClusterNodeContainer._internal_.CollectionSelection.md) |
| `toNode` | `string` \| `NodeSingular` |

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3007

___

### path

▸ **path**(`fromNode`, `toNode`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Returns a collection containing the shortest path from the source node to node.
The path starts with the source node and includes the edges
between the nodes in the path such that if pathTo(node)[i] is an edge,
then pathTo(node)[i-1] is the previous node in the path and pathTo(node)[i+1]
is the next node in the path.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromNode` | `NodeSingular` \| [`CollectionSelection`](components_ClusterNodeContainer._internal_.CollectionSelection.md) |
| `toNode` | `string` \| `NodeSingular` |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3016
