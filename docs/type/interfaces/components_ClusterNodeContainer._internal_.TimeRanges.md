[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / TimeRanges

# Interface: TimeRanges

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).TimeRanges

Used to represent a set of time ranges, primarily for the purpose of tracking which portions of media have been buffered when loading it for use by the <audio> and <video> elements.

## Table of contents

### Properties

- [length](components_ClusterNodeContainer._internal_.TimeRanges.md#length)

### Methods

- [end](components_ClusterNodeContainer._internal_.TimeRanges.md#end)
- [start](components_ClusterNodeContainer._internal_.TimeRanges.md#start)

## Properties

### length

• `Readonly` **length**: `number`

Returns the number of ranges in the object.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13698

## Methods

### end

▸ **end**(`index`): `number`

Returns the time for the end of the range with the given index.

Throws an "IndexSizeError" DOMException if the index is out of range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13704

___

### start

▸ **start**(`index`): `number`

Returns the time for the start of the range with the given index.

Throws an "IndexSizeError" DOMException if the index is out of range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13710
