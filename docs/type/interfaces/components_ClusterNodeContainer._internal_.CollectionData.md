[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / CollectionData

# Interface: CollectionData

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).CollectionData

http://js.cytoscape.org/#collection/data

The following fields are immutable:
id: The id field is used to uniquely identify an element in the graph.
source & target : These fields define an edge's relationship to nodes, and this relationship can not be changed after creation.
parent: The parent field defines the parent (compound) node.

## Hierarchy

- **`CollectionData`**

  ↳ [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)

## Table of contents

### Methods

- [jsons](components_ClusterNodeContainer._internal_.CollectionData.md#jsons)
- [removeAttr](components_ClusterNodeContainer._internal_.CollectionData.md#removeattr)
- [removeData](components_ClusterNodeContainer._internal_.CollectionData.md#removedata)

## Methods

### jsons

▸ **jsons**(): `string`[]

Get an array of the plain JavaScript object
representation of all elements in the collection.

#### Returns

`string`[]

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1407

___

### removeAttr

▸ **removeAttr**(`names?`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `names?` | `string` |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1401

___

### removeData

▸ **removeData**(`names?`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Remove developer-defined data associated with the elements.
http://js.cytoscape.org/#eles.removeData

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `names?` | `string` | A space-separated list of fields to delete. |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1400
