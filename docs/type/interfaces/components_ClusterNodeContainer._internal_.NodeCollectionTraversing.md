[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / NodeCollectionTraversing

# Interface: NodeCollectionTraversing

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).NodeCollectionTraversing

## Hierarchy

- **`NodeCollectionTraversing`**

  ↳ [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

## Table of contents

### Methods

- [connectedEdges](components_ClusterNodeContainer._internal_.NodeCollectionTraversing.md#connectededges)
- [edgesTo](components_ClusterNodeContainer._internal_.NodeCollectionTraversing.md#edgesto)
- [edgesWith](components_ClusterNodeContainer._internal_.NodeCollectionTraversing.md#edgeswith)
- [incomers](components_ClusterNodeContainer._internal_.NodeCollectionTraversing.md#incomers)
- [leaves](components_ClusterNodeContainer._internal_.NodeCollectionTraversing.md#leaves)
- [outgoers](components_ClusterNodeContainer._internal_.NodeCollectionTraversing.md#outgoers)
- [predecessors](components_ClusterNodeContainer._internal_.NodeCollectionTraversing.md#predecessors)
- [roots](components_ClusterNodeContainer._internal_.NodeCollectionTraversing.md#roots)
- [successors](components_ClusterNodeContainer._internal_.NodeCollectionTraversing.md#successors)

## Methods

### connectedEdges

▸ **connectedEdges**(`selector?`): [`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md)

Get the edges connected to the nodes in the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | An optional selector that is used to filter the resultant collection. |

#### Returns

[`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2838

___

### edgesTo

▸ **edgesTo**(`eles`): [`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md)

Get the edges coming from the collection (i.e. the source) going to another collection (i.e. the target).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eles` | `string` \| [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) | The other collection. |

#### Returns

[`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2831

___

### edgesWith

▸ **edgesWith**(`eles`): [`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md)

Get the edges connecting the collection to another collection. Direction of the edges does not matter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eles` | `string` \| [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) | The other collection. |

#### Returns

[`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2823

___

### incomers

▸ **incomers**(`selector?`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get edges (and their sources) coming into the nodes in the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | An optional selector that is used to filter the resultant collection. |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2873

___

### leaves

▸ **leaves**(`selector?`): [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

From the set of calling nodes, get the nodes which are leaves (i.e. no outgoing edges, as in a directed acyclic graph).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | An optional selector that is used to filter the resultant collection. |

#### Returns

[`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2852

___

### outgoers

▸ **outgoers**(`selector?`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get edges (and their targets) coming out of the nodes in the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | An optional selector that is used to filter the resultant collection. |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2859

___

### predecessors

▸ **predecessors**(`selector?`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Recursively get edges (and their sources) coming into the nodes in the collection (i.e. the incomers, the incomers' incomers, ...).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | An optional selector that is used to filter the resultant collection. |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2880

___

### roots

▸ **roots**(`selector?`): [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

From the set of calling nodes, get the nodes which are roots (i.e. no incoming edges, as in a directed acyclic graph).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | An optional selector that is used to filter the resultant collection. |

#### Returns

[`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2845

___

### successors

▸ **successors**(`selector?`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Recursively get edges (and their targets) coming out of the nodes in the collection (i.e. the outgoers, the outgoers' outgoers, ...).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | An optional selector that is used to filter the resultant collection. |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2866
