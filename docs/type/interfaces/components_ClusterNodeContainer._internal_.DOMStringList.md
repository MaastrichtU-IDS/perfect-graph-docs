[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / DOMStringList

# Interface: DOMStringList

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).DOMStringList

A type returned by some APIs which contains a list of DOMString (strings).

## Indexable

▪ [index: `number`]: `string`

## Table of contents

### Properties

- [length](components_ClusterNodeContainer._internal_.DOMStringList.md#length)

### Methods

- [contains](components_ClusterNodeContainer._internal_.DOMStringList.md#contains)
- [item](components_ClusterNodeContainer._internal_.DOMStringList.md#item)

## Properties

### length

• `Readonly` **length**: `number`

Returns the number of strings in strings.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3948

## Methods

### contains

▸ **contains**(`string`): `boolean`

Returns true if strings contains string, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3950

___

### item

▸ **item**(`index`): ``null`` \| `string`

Returns the string with index index from strings.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3952
