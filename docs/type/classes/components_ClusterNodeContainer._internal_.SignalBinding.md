[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SignalBinding

# Class: SignalBinding<CbType\>

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SignalBinding

**`memberof`** PIXI

## Type parameters

| Name |
| :------ |
| `CbType` |

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.SignalBinding.md#constructor)

### Properties

- [\_fn](components_ClusterNodeContainer._internal_.SignalBinding.md#_fn)
- [\_next](components_ClusterNodeContainer._internal_.SignalBinding.md#_next)
- [\_once](components_ClusterNodeContainer._internal_.SignalBinding.md#_once)
- [\_owner](components_ClusterNodeContainer._internal_.SignalBinding.md#_owner)
- [\_prev](components_ClusterNodeContainer._internal_.SignalBinding.md#_prev)
- [\_thisArg](components_ClusterNodeContainer._internal_.SignalBinding.md#_thisarg)

### Methods

- [detach](components_ClusterNodeContainer._internal_.SignalBinding.md#detach)

## Constructors

### constructor

• **new SignalBinding**<`CbType`\>(`fn`, `once`, `thisArg`)

SignalBinding constructor.

**`constructs`** SignalBinding

**`api`** private

#### Type parameters

| Name |
| :------ |
| `CbType` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `CbType` | Event handler to be called. |
| `once` | `boolean` | - |
| `thisArg` | `any` | - |

#### Defined in

node_modules/@pixi/loaders/index.d.ts:1189

## Properties

### \_fn

• **\_fn**: `any`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:1175

___

### \_next

• **\_next**: [`SignalBinding`](components_ClusterNodeContainer._internal_.SignalBinding.md)<`CbType`\>

#### Defined in

node_modules/@pixi/loaders/index.d.ts:1177

___

### \_once

• **\_once**: `boolean`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:1176

___

### \_owner

• **\_owner**: [`Signal`](components_ClusterNodeContainer._internal_.Signal.md)<`CbType`\>

#### Defined in

node_modules/@pixi/loaders/index.d.ts:1179

___

### \_prev

• **\_prev**: [`SignalBinding`](components_ClusterNodeContainer._internal_.SignalBinding.md)<`CbType`\>

#### Defined in

node_modules/@pixi/loaders/index.d.ts:1178

___

### \_thisArg

• **\_thisArg**: `any`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:1180

## Methods

### detach

▸ **detach**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:1190
