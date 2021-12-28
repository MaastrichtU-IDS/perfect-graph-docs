[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / CollectionComparision

# Interface: CollectionComparision

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).CollectionComparision

http://js.cytoscape.org/#collection/comparison

## Hierarchy

- **`CollectionComparision`**

  ↳ [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)

## Table of contents

### Methods

- [allAre](components_ClusterNodeContainer._internal_.CollectionComparision.md#allare)
- [allAreNeighbors](components_ClusterNodeContainer._internal_.CollectionComparision.md#allareneighbors)
- [allAreNeighbours](components_ClusterNodeContainer._internal_.CollectionComparision.md#allareneighbours)
- [anySame](components_ClusterNodeContainer._internal_.CollectionComparision.md#anysame)
- [contains](components_ClusterNodeContainer._internal_.CollectionComparision.md#contains)
- [every](components_ClusterNodeContainer._internal_.CollectionComparision.md#every)
- [has](components_ClusterNodeContainer._internal_.CollectionComparision.md#has)
- [is](components_ClusterNodeContainer._internal_.CollectionComparision.md#is)
- [same](components_ClusterNodeContainer._internal_.CollectionComparision.md#same)
- [some](components_ClusterNodeContainer._internal_.CollectionComparision.md#some)

## Methods

### allAre

▸ **allAre**(`selector`): `boolean`

Determine whether all elements in the collection match a selector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `string` | The selector to match against. |

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2268

___

### allAreNeighbors

▸ **allAreNeighbors**(`eles`): `boolean`

Determine whether all elements in the specified collection are in the neighbourhood of the calling collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eles` | [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) | The other elements to compare to. |

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2249

___

### allAreNeighbours

▸ **allAreNeighbours**(`eles`): `boolean`

Determine whether all elements in the specified collection are in the neighbourhood of the calling collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eles` | [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) | The other elements to compare to. |

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2255

___

### anySame

▸ **anySame**(`eles`): `boolean`

Determine whether this collection contains any of the same elements as another collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eles` | [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) | The other elements to compare to. |

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2233

___

### contains

▸ **contains**(`eles`): `boolean`

Determine whether this collection contains all of the elements of another collection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eles` | [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2238

___

### every

▸ **every**(`test`, `thisArg?`): `boolean`

Determine whether all elements in this collection satisfy the specified test function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `test` | (`ele`: [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument), `i`: `number`, `eles`: [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument)) => `boolean` | The test function that returns truthy values for elements that satisfy the test and falsey values for elements that do not satisfy the test. ele - The current element. i - The index of the current element. eles - The collection of elements being tested. |
| `thisArg?` | `any` | The value for this within the test function. |

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2290

___

### has

▸ **has**(`eles`): `boolean`

Determine whether this collection contains all of the elements of another collection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eles` | [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2242

___

### is

▸ **is**(`selector`): `boolean`

Determine whether any element in this collection matches a selector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `string` | The selector to match against. |

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2262

___

### same

▸ **same**(`eles`): `boolean`

Determine whether this collection contains exactly the same elements as another collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eles` | [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument) | The other elements to compare to. |

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2226

___

### some

▸ **some**(`test`, `thisArg?`): `boolean`

Determine whether any element in this collection satisfies the specified test function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `test` | (`ele`: [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument), `i`: `number`, `eles`: [`CollectionArgument`](../modules/components_ClusterNodeContainer._internal_.md#collectionargument)) => `boolean` | The test function that returns truthy values for elements that satisfy the test and falsey values for elements that do not satisfy the test. ele - The current element. i - The index of the current element. eles - The collection of elements being tested. |
| `thisArg?` | `any` | The value for this within the test function. |

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2279
