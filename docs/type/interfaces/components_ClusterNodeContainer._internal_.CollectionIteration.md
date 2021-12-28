[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / CollectionIteration

# Interface: CollectionIteration<TOut, TIn\>

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).CollectionIteration

http://js.cytoscape.org/#collection/iteration

## Type parameters

| Name |
| :------ |
| `TOut` |
| `TIn` |

## Hierarchy

- **`CollectionIteration`**

  ↳ [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)

## Indexable

▪ [index: `number`]: `TOut`

Get an element at a particular index in the collection.

**`param`** The index of the element to get.

## Table of contents

### Properties

- [length](components_ClusterNodeContainer._internal_.CollectionIteration.md#length)

### Methods

- [each](components_ClusterNodeContainer._internal_.CollectionIteration.md#each)
- [empty](components_ClusterNodeContainer._internal_.CollectionIteration.md#empty)
- [eq](components_ClusterNodeContainer._internal_.CollectionIteration.md#eq)
- [first](components_ClusterNodeContainer._internal_.CollectionIteration.md#first)
- [forEach](components_ClusterNodeContainer._internal_.CollectionIteration.md#foreach)
- [last](components_ClusterNodeContainer._internal_.CollectionIteration.md#last)
- [nonempty](components_ClusterNodeContainer._internal_.CollectionIteration.md#nonempty)
- [size](components_ClusterNodeContainer._internal_.CollectionIteration.md#size)
- [slice](components_ClusterNodeContainer._internal_.CollectionIteration.md#slice)
- [toArray](components_ClusterNodeContainer._internal_.CollectionIteration.md#toarray)

## Properties

### length

• **length**: `number`

Get the number of elements in the collection.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2304

## Methods

### each

▸ **each**(`each`, `thisArg?`): [`CollectionIteration`](components_ClusterNodeContainer._internal_.CollectionIteration.md)<`TOut`, `TIn`\>

Iterate over the elements in the collection using an implementation like the native array function namesake.

This function behaves like Array.prototype.forEach() with minor changes for convenience:
You can exit the iteration early by returning false in the iterating function.
The Array.prototype.forEach() implementation does not support this, but it is included anyway on account of its utility.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `each` | (`ele`: `TIn`, `i`: `number`, `eles`: [`CollectionIteration`](components_ClusterNodeContainer._internal_.CollectionIteration.md)<`TOut`, `TIn`\>) => `boolean` \| `void` | The function executed each iteration. ele - The current element. i - The index of the current element. eles - The collection of elements being iterated. |
| `thisArg?` | `any` | The value for this within the iterating function. |

#### Returns

[`CollectionIteration`](components_ClusterNodeContainer._internal_.CollectionIteration.md)<`TOut`, `TIn`\>

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2328

___

### empty

▸ **empty**(): `boolean`

Get whether the collection is empty, meaning it has no elements.

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2309

___

### eq

▸ **eq**(`index`): `TOut`

Get an element at a particular index in the collection.

You may use eles[i] in place of eles.eq(i) as a more performant alternative.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index of the element to get. |

#### Returns

`TOut`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2338

___

### first

▸ **first**(): `TOut`

Get the first element in the collection.

#### Returns

`TOut`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2348

___

### forEach

▸ **forEach**(`each`, `thisArg?`): [`CollectionIteration`](components_ClusterNodeContainer._internal_.CollectionIteration.md)<`TOut`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `each` | (`ele`: `TIn`, `i`: `number`, `eles`: [`CollectionIteration`](components_ClusterNodeContainer._internal_.CollectionIteration.md)<`TOut`, `TIn`\>) => `boolean` \| `void` |
| `thisArg?` | `any` |

#### Returns

[`CollectionIteration`](components_ClusterNodeContainer._internal_.CollectionIteration.md)<`TOut`, `TIn`\>

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2329

___

### last

▸ **last**(): `TOut`

Get the last element in the collection.

#### Returns

`TOut`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2352

___

### nonempty

▸ **nonempty**(): `boolean`

Get whether the collection is nonempty, meaning it has elements.

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2313

___

### size

▸ **size**(): `number`

Get the number of elements in the collection.

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2300

___

### slice

▸ **slice**(`start?`, `end?`): [`CollectionIteration`](components_ClusterNodeContainer._internal_.CollectionIteration.md)<`TOut`, `TIn`\>

Get a subset of the elements in the collection based on specified indices.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | An integer that specifies where to start the selection.              The first element has an index of 0.              Use negative numbers to select from the end of an array. |
| `end?` | `number` | An integer that specifies where to end the selection.            If omitted, all elements from the start position and to the end of the array will be selected.            Use negative numbers to select from the end of an array. |

#### Returns

[`CollectionIteration`](components_ClusterNodeContainer._internal_.CollectionIteration.md)<`TOut`, `TIn`\>

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2364

___

### toArray

▸ **toArray**(): `TOut`[]

Get the collection as an array, maintaining the order of the elements.

#### Returns

`TOut`[]

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2369
