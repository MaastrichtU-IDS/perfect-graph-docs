[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / AsyncIterableIterator

# Interface: AsyncIterableIterator<T\>

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).AsyncIterableIterator

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AsyncIterator`](components_ClusterNodeContainer._internal_.AsyncIterator.md)<`T`\>

  ↳ **`AsyncIterableIterator`**

## Table of contents

### Methods

- [[asyncIterator]](components_ClusterNodeContainer._internal_.AsyncIterableIterator.md#[asynciterator])
- [next](components_ClusterNodeContainer._internal_.AsyncIterableIterator.md#next)
- [return](components_ClusterNodeContainer._internal_.AsyncIterableIterator.md#return)
- [throw](components_ClusterNodeContainer._internal_.AsyncIterableIterator.md#throw)

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): [`AsyncIterableIterator`](components_ClusterNodeContainer._internal_.AsyncIterableIterator.md)<`T`\>

#### Returns

[`AsyncIterableIterator`](components_ClusterNodeContainer._internal_.AsyncIterableIterator.md)<`T`\>

#### Defined in

node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:44

___

### next

▸ **next**(...`args`): `Promise`<[`IteratorResult`](../modules/components_ClusterNodeContainer._internal_.md#iteratorresult)<`T`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] \| [`undefined`] |

#### Returns

`Promise`<[`IteratorResult`](../modules/components_ClusterNodeContainer._internal_.md#iteratorresult)<`T`, `any`\>\>

#### Inherited from

[AsyncIterator](components_ClusterNodeContainer._internal_.AsyncIterator.md).[next](components_ClusterNodeContainer._internal_.AsyncIterator.md#next)

#### Defined in

node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:34

___

### return

▸ `Optional` **return**(`value?`): `Promise`<[`IteratorResult`](../modules/components_ClusterNodeContainer._internal_.md#iteratorresult)<`T`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `any` |

#### Returns

`Promise`<[`IteratorResult`](../modules/components_ClusterNodeContainer._internal_.md#iteratorresult)<`T`, `any`\>\>

#### Inherited from

[AsyncIterator](components_ClusterNodeContainer._internal_.AsyncIterator.md).[return](components_ClusterNodeContainer._internal_.AsyncIterator.md#return)

#### Defined in

node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:35

___

### throw

▸ `Optional` **throw**(`e?`): `Promise`<[`IteratorResult`](../modules/components_ClusterNodeContainer._internal_.md#iteratorresult)<`T`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`Promise`<[`IteratorResult`](../modules/components_ClusterNodeContainer._internal_.md#iteratorresult)<`T`, `any`\>\>

#### Inherited from

[AsyncIterator](components_ClusterNodeContainer._internal_.AsyncIterator.md).[throw](components_ClusterNodeContainer._internal_.AsyncIterator.md#throw)

#### Defined in

node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:36
