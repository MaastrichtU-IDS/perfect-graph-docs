[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / NodeIterator

# Interface: NodeIterator

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).NodeIterator

An iterator over the members of a list of the nodes in a subtree of the DOM. The nodes will be returned in document order.

## Table of contents

### Properties

- [filter](components_ClusterNodeContainer._internal_.NodeIterator.md#filter)
- [pointerBeforeReferenceNode](components_ClusterNodeContainer._internal_.NodeIterator.md#pointerbeforereferencenode)
- [referenceNode](components_ClusterNodeContainer._internal_.NodeIterator.md#referencenode)
- [root](components_ClusterNodeContainer._internal_.NodeIterator.md#root)
- [whatToShow](components_ClusterNodeContainer._internal_.NodeIterator.md#whattoshow)

### Methods

- [detach](components_ClusterNodeContainer._internal_.NodeIterator.md#detach)
- [nextNode](components_ClusterNodeContainer._internal_.NodeIterator.md#nextnode)
- [previousNode](components_ClusterNodeContainer._internal_.NodeIterator.md#previousnode)

## Properties

### filter

• `Readonly` **filter**: ``null`` \| [`NodeFilter`](../modules/components_ClusterNodeContainer._internal_.md#nodefilter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9767

___

### pointerBeforeReferenceNode

• `Readonly` **pointerBeforeReferenceNode**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9768

___

### referenceNode

• `Readonly` **referenceNode**: [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9769

___

### root

• `Readonly` **root**: [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9770

___

### whatToShow

• `Readonly` **whatToShow**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9771

## Methods

### detach

▸ **detach**(): `void`

**`deprecated`**

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9773

___

### nextNode

▸ **nextNode**(): ``null`` \| [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node)

#### Returns

``null`` \| [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9774

___

### previousNode

▸ **previousNode**(): ``null`` \| [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node)

#### Returns

``null`` \| [`Node`](../modules/components_ClusterNodeContainer._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9775
