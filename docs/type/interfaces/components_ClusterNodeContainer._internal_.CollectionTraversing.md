[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / CollectionTraversing

# Interface: CollectionTraversing

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).CollectionTraversing

## Hierarchy

- **`CollectionTraversing`**

  ↳ [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)

## Table of contents

### Methods

- [closedNeighborhood](components_ClusterNodeContainer._internal_.CollectionTraversing.md#closedneighborhood)
- [components](components_ClusterNodeContainer._internal_.CollectionTraversing.md#components)
- [neighborhood](components_ClusterNodeContainer._internal_.CollectionTraversing.md#neighborhood)
- [openNeighborhood](components_ClusterNodeContainer._internal_.CollectionTraversing.md#openneighborhood)

## Methods

### closedNeighborhood

▸ **closedNeighborhood**(`selector?`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get the closed neighbourhood of the elements.

The neighbourhood returned by this function is a bit different than the traditional definition of a "neighbourhood":
This returned neighbourhood includes the edges connecting the collection to the neighbourhood. This gives you more flexibility.
A closed neighbourhood is one that does include the original set of elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | An optional selector that is used to filter the resultant collection. |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2697

___

### components

▸ **components**(): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)[]

Get the connected components, considering only the elements in the calling collection.
An array of collections is returned, with each collection representing a component.

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)[]

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2703

___

### neighborhood

▸ **neighborhood**(`selector?`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get the open neighbourhood of the elements.

The neighbourhood returned by this function is a bit different than the traditional definition of a "neighbourhood":
This returned neighbourhood includes the edges connecting the collection to the neighbourhood. This gives you more flexibility.
An open neighbourhood is one that does not include the original set of elements. If unspecified, a neighbourhood is open by default.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | An optional selector that is used to filter the resultant collection. |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2676

___

### openNeighborhood

▸ **openNeighborhood**(`selector?`): [`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

Get the open neighbourhood of the elements.

The neighbourhood returned by this function is a bit different than the traditional definition of a "neighbourhood":
This returned neighbourhood includes the edges connecting the collection to the neighbourhood. This gives you more flexibility.
An open neighbourhood is one that does not include the original set of elements. If unspecified, a neighbourhood is open by default.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector?` | `string` | An optional selector that is used to filter the resultant collection. |

#### Returns

[`CollectionReturnValue`](../modules/components_ClusterNodeContainer._internal_.md#collectionreturnvalue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2687
