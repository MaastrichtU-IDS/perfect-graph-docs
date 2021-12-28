[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / NodeCollectionMetadata

# Interface: NodeCollectionMetadata

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).NodeCollectionMetadata

http://js.cytoscape.org/#collection/metadata

## Hierarchy

- **`NodeCollectionMetadata`**

  ↳ [`NodeCollection`](components_ClusterNodeContainer._internal_.NodeCollection.md)

## Table of contents

### Methods

- [maxDegree](components_ClusterNodeContainer._internal_.NodeCollectionMetadata.md#maxdegree)
- [maxIndegree](components_ClusterNodeContainer._internal_.NodeCollectionMetadata.md#maxindegree)
- [maxOutdegree](components_ClusterNodeContainer._internal_.NodeCollectionMetadata.md#maxoutdegree)
- [minDegree](components_ClusterNodeContainer._internal_.NodeCollectionMetadata.md#mindegree)
- [minIndegree](components_ClusterNodeContainer._internal_.NodeCollectionMetadata.md#minindegree)
- [minOutdegree](components_ClusterNodeContainer._internal_.NodeCollectionMetadata.md#minoutdegree)
- [totalDegree](components_ClusterNodeContainer._internal_.NodeCollectionMetadata.md#totaldegree)

## Methods

### maxDegree

▸ **maxDegree**(`includeLoops`): `number`

Get the maximum degree of the nodes in the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `includeLoops` | `boolean` | A boolean, indicating whether loops are to be included in degree calculations. |

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1564

___

### maxIndegree

▸ **maxIndegree**(`includeLoops`): `number`

Get the maximum indegree of the nodes in the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `includeLoops` | `boolean` | A boolean, indicating whether loops are to be included in degree calculations. |

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1576

___

### maxOutdegree

▸ **maxOutdegree**(`includeLoops`): `number`

Get the maximum outdegree of the nodes in the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `includeLoops` | `boolean` | A boolean, indicating whether loops are to be included in degree calculations. |

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1588

___

### minDegree

▸ **minDegree**(`includeLoops`): `number`

Get the minimum degree of the nodes in the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `includeLoops` | `boolean` | A boolean, indicating whether loops are to be included in degree calculations. |

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1558

___

### minIndegree

▸ **minIndegree**(`includeLoops`): `number`

Get the minimum indegree of the nodes in the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `includeLoops` | `boolean` | A boolean, indicating whether loops are to be included in degree calculations. |

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1570

___

### minOutdegree

▸ **minOutdegree**(`includeLoops`): `number`

Get the minimum outdegree of the nodes in the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `includeLoops` | `boolean` | A boolean, indicating whether loops are to be included in degree calculations. |

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1582

___

### totalDegree

▸ **totalDegree**(`includeLoops`): `number`

Get the total degree of a collection of nodes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `includeLoops` | `boolean` | A boolean, indicating whether loops are to be included in degree calculations. |

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1552
