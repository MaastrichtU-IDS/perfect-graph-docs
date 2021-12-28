[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / HTMLCollectionOf

# Interface: HTMLCollectionOf<T\>

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).HTMLCollectionOf

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Element` |

## Hierarchy

- [`HTMLCollectionBase`](components_ClusterNodeContainer._internal_.HTMLCollectionBase.md)

  ↳ **`HTMLCollectionOf`**

## Indexable

▪ [index: `number`]: `T`

## Table of contents

### Properties

- [length](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md#length)

### Methods

- [item](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md#item)
- [namedItem](components_ClusterNodeContainer._internal_.HTMLCollectionOf.md#nameditem)

## Properties

### length

• `Readonly` **length**: `number`

Sets or retrieves the number of objects in a collection.

#### Inherited from

[HTMLCollectionBase](components_ClusterNodeContainer._internal_.HTMLCollectionBase.md).[length](components_ClusterNodeContainer._internal_.HTMLCollectionBase.md#length)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5993

## Methods

### item

▸ **item**(`index`): ``null`` \| `T`

Retrieves an object from various collections.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| `T`

#### Overrides

[HTMLCollectionBase](components_ClusterNodeContainer._internal_.HTMLCollectionBase.md).[item](components_ClusterNodeContainer._internal_.HTMLCollectionBase.md#item)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6010

___

### namedItem

▸ **namedItem**(`name`): ``null`` \| `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| `T`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6011
