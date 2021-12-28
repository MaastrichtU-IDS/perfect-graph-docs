[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / EdgeCollectionTraversing

# Interface: EdgeCollectionTraversing

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).EdgeCollectionTraversing

## Hierarchy

- **`EdgeCollectionTraversing`**

  ↳ [`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md)

## Table of contents

### Methods

- [codirectedEdges](components_ClusterNodeContainer._internal_.EdgeCollectionTraversing.md#codirectededges)
- [connectedNodes](components_ClusterNodeContainer._internal_.EdgeCollectionTraversing.md#connectednodes)
- [parallelEdges](components_ClusterNodeContainer._internal_.EdgeCollectionTraversing.md#paralleledges)
- [sources](components_ClusterNodeContainer._internal_.EdgeCollectionTraversing.md#sources)
- [targets](components_ClusterNodeContainer._internal_.EdgeCollectionTraversing.md#targets)

## Methods

### codirectedEdges

▸ **codirectedEdges**(`selector?`): [`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md)

Get edges codirected to those in the collection.

Two edges are said to be codirected if they connect the same two nodes in the same direction: The edges have the same source and target.
That is:
- edge1.source().id() === edge2.source().id()
  && edge1.target().id() === edge2.target().id()

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | An optional selector that is used to filter the resultant collection. |

#### Returns

[`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2812

___

### connectedNodes

▸ **connectedNodes**(`selector?`): [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

Get the nodes connected to the edges in the collection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | An optional selector that is used to filter the resultant collection. |

#### Returns

[`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2769

___

### parallelEdges

▸ **parallelEdges**(`selector?`): [`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md)

Get edges parallel to those in the collection.

Two edges are said to be parallel if they connect the same two nodes.
Any two parallel edges may connect nodes in the same direction, in which case the edges share the same source and target.
They may alternatively connect nodes in the opposite direction, in which case the source and target are reversed in the second edge.
That is:
- edge1.source().id() === edge2.source().id()
  && edge1.target().id() === edge2.target().id()
OR
- edge1.source().id() === edge2.target().id()
  && edge1.target().id() === edge2.source().id()

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | An optional selector that is used to filter the resultant collection. |

#### Returns

[`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2800

___

### sources

▸ **sources**(`selector?`): [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

Get source nodes connected to the edges in the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | An optional selector that is used to filter the resultant collection. |

#### Returns

[`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2776

___

### targets

▸ **targets**(`selector?`): [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

Get target nodes connected to the edges in the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | An optional selector that is used to filter the resultant collection. |

#### Returns

[`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2783
