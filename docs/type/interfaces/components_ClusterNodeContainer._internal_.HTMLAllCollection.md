[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / HTMLAllCollection

# Interface: HTMLAllCollection

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).HTMLAllCollection

## Indexable

▪ [index: `number`]: `Element`

## Table of contents

### Properties

- [length](components_ClusterNodeContainer._internal_.HTMLAllCollection.md#length)

### Methods

- [item](components_ClusterNodeContainer._internal_.HTMLAllCollection.md#item)
- [namedItem](components_ClusterNodeContainer._internal_.HTMLAllCollection.md#nameditem)

## Properties

### length

• `Readonly` **length**: `number`

Returns the number of elements in the collection.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5730

## Methods

### item

▸ **item**(`nameOrIndex?`): ``null`` \| `Element` \| [`HTMLCollection`](../modules/components_ClusterNodeContainer._internal_.md#htmlcollection)

Returns the item with index index from the collection (determined by tree order).

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrIndex?` | `string` |

#### Returns

``null`` \| `Element` \| [`HTMLCollection`](../modules/components_ClusterNodeContainer._internal_.md#htmlcollection)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5732

___

### namedItem

▸ **namedItem**(`name`): ``null`` \| `Element` \| [`HTMLCollection`](../modules/components_ClusterNodeContainer._internal_.md#htmlcollection)

Returns the item with ID or name name from the collection.

If there are multiple matching items, then an HTMLCollection object containing all those elements is returned.

Only button, form, iframe, input, map, meta, object, select, and textarea elements can have a name for the purpose of this method; their name is given by the value of their name attribute.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| `Element` \| [`HTMLCollection`](../modules/components_ClusterNodeContainer._internal_.md#htmlcollection)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5740
