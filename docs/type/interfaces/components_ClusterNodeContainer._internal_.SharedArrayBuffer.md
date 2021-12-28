[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SharedArrayBuffer

# Interface: SharedArrayBuffer

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SharedArrayBuffer

## Table of contents

### Properties

- [[species]](components_ClusterNodeContainer._internal_.SharedArrayBuffer.md#[species])
- [[toStringTag]](components_ClusterNodeContainer._internal_.SharedArrayBuffer.md#[tostringtag])
- [byteLength](components_ClusterNodeContainer._internal_.SharedArrayBuffer.md#bytelength)

### Methods

- [slice](components_ClusterNodeContainer._internal_.SharedArrayBuffer.md#slice)

## Properties

### [species]

• `Readonly` **[species]**: [`SharedArrayBuffer`](../modules/components_ClusterNodeContainer._internal_.md#sharedarraybuffer)

#### Defined in

node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts:34

___

### [toStringTag]

• `Readonly` **[toStringTag]**: ``"SharedArrayBuffer"``

#### Defined in

node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts:35

___

### byteLength

• `Readonly` **byteLength**: `number`

Read-only. The length of the ArrayBuffer (in bytes).

#### Defined in

node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts:28

## Methods

### slice

▸ **slice**(`begin`, `end?`): [`SharedArrayBuffer`](../modules/components_ClusterNodeContainer._internal_.md#sharedarraybuffer)

Returns a section of an SharedArrayBuffer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `begin` | `number` |
| `end?` | `number` |

#### Returns

[`SharedArrayBuffer`](../modules/components_ClusterNodeContainer._internal_.md#sharedarraybuffer)

#### Defined in

node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts:33
