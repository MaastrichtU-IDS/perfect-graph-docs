[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / NodeList

# Interface: NodeList

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).NodeList

NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll().

## Indexable

▪ [index: `number`]: [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node)

## Table of contents

### Properties

- [length](components_ClusterNodeContainer._internal_.NodeList.md#length)

### Methods

- [forEach](components_ClusterNodeContainer._internal_.NodeList.md#foreach)
- [item](components_ClusterNodeContainer._internal_.NodeList.md#item)

## Properties

### length

• `Readonly` **length**: `number`

Returns the number of nodes in the collection.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9786

## Methods

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each node in an list.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node), `key`: `number`, `parent`: [`NodeList`](../modules/components_ClusterNodeContainer._internal_.md#nodelist)) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the list. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9794

___

### item

▸ **item**(`index`): ``null`` \| [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node)

Returns the node with index index from the collection. The nodes are sorted in tree order.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9788
