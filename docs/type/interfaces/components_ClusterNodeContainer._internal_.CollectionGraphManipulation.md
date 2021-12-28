[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / CollectionGraphManipulation

# Interface: CollectionGraphManipulation

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).CollectionGraphManipulation

http://js.cytoscape.org/#collection/graph-manipulation

## Hierarchy

- **`CollectionGraphManipulation`**

  ↳ [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)

## Table of contents

### Methods

- [clone](components_ClusterNodeContainer._internal_.CollectionGraphManipulation.md#clone)
- [copy](components_ClusterNodeContainer._internal_.CollectionGraphManipulation.md#copy)
- [move](components_ClusterNodeContainer._internal_.CollectionGraphManipulation.md#move)
- [remove](components_ClusterNodeContainer._internal_.CollectionGraphManipulation.md#remove)
- [restore](components_ClusterNodeContainer._internal_.CollectionGraphManipulation.md#restore)

## Methods

### clone

▸ **clone**(): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get a new collection containing clones (i.e. copies) of the elements in the calling collection.
http://js.cytoscape.org/#eles.clone

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1288

___

### copy

▸ **copy**(): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get a new collection containing clones (i.e. copies) of the elements in the calling collection.
http://js.cytoscape.org/#eles.clone

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1293

___

### move

▸ **move**(`location`): [`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md)

Effectively move edges to different nodes. The modified (actually new) elements are returned.
http://js.cytoscape.org/#eles.move

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | `Object` |
| `location.source?` | `string` |
| `location.target?` | `string` |

#### Returns

[`EdgeCollection`](components_ClusterNodeContainer._internal_.EdgeCollection.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1299

▸ **move**(`location`): [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

Effectively move nodes to different parent node. The modified (actually new) elements are returned.
http://js.cytoscape.org/#eles.move

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | `Object` |
| `location.parent` | ``null`` \| `string` |

#### Returns

[`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1304

___

### remove

▸ **remove**(): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Remove the elements from the graph.
http://js.cytoscape.org/#eles.remove

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1276

___

### restore

▸ **restore**(): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Put removed elements back into the graph.
http://js.cytoscape.org/#eles.restore

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1282
