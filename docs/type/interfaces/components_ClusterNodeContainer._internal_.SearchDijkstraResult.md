[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SearchDijkstraResult

# Interface: SearchDijkstraResult

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SearchDijkstraResult

http://js.cytoscape.org/#eles.dijkstra

## Table of contents

### Methods

- [distanceTo](components_ClusterNodeContainer._internal_.SearchDijkstraResult.md#distanceto)
- [pathTo](components_ClusterNodeContainer._internal_.SearchDijkstraResult.md#pathto)

## Methods

### distanceTo

▸ **distanceTo**(`node`): `number`

Returns the distance from the source node to node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeSingular` |

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2964

___

### pathTo

▸ **pathTo**(`node`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Returns a collection containing the shortest path from the source node to node.
The path starts with the source node and includes the edges between the nodes in the path such that if pathTo(node)[i] is an edge,
then pathTo(node)[i-1] is the previous node in the path and pathTo(node)[i+1] is the next node in the path.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeSingular` |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2971
