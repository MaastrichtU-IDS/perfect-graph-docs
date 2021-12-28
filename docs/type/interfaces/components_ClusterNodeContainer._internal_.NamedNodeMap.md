[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / NamedNodeMap

# Interface: NamedNodeMap

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).NamedNodeMap

A collection of Attr objects. Objects inside a NamedNodeMap are not in any particular order, unlike NodeList, although they may be accessed by an index as in an array.

## Indexable

▪ [index: `number`]: [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

## Table of contents

### Properties

- [length](components_ClusterNodeContainer._internal_.NamedNodeMap.md#length)

### Methods

- [getNamedItem](components_ClusterNodeContainer._internal_.NamedNodeMap.md#getnameditem)
- [getNamedItemNS](components_ClusterNodeContainer._internal_.NamedNodeMap.md#getnameditemns)
- [item](components_ClusterNodeContainer._internal_.NamedNodeMap.md#item)
- [removeNamedItem](components_ClusterNodeContainer._internal_.NamedNodeMap.md#removenameditem)
- [removeNamedItemNS](components_ClusterNodeContainer._internal_.NamedNodeMap.md#removenameditemns)
- [setNamedItem](components_ClusterNodeContainer._internal_.NamedNodeMap.md#setnameditem)
- [setNamedItemNS](components_ClusterNodeContainer._internal_.NamedNodeMap.md#setnameditemns)

## Properties

### length

• `Readonly` **length**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9526

## Methods

### getNamedItem

▸ **getNamedItem**(`qualifiedName`): ``null`` \| [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

``null`` \| [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9527

___

### getNamedItemNS

▸ **getNamedItemNS**(`namespace`, `localName`): ``null`` \| [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

``null`` \| [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9528

___

### item

▸ **item**(`index`): ``null`` \| [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9529

___

### removeNamedItem

▸ **removeNamedItem**(`qualifiedName`): [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

[`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9530

___

### removeNamedItemNS

▸ **removeNamedItemNS**(`namespace`, `localName`): [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

[`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9531

___

### setNamedItem

▸ **setNamedItem**(`attr`): ``null`` \| [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr) |

#### Returns

``null`` \| [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9532

___

### setNamedItemNS

▸ **setNamedItemNS**(`attr`): ``null`` \| [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr) |

#### Returns

``null`` \| [`Attr`](../modules/components_ClusterNodeContainer._internal_.md#attr)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9533
