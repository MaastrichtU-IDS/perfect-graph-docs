[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Signal

# Class: Signal<CbType\>

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Signal

**`memberof`** PIXI

## Type parameters

| Name | Type |
| :------ | :------ |
| `CbType` | (...`args`: `any`) => `void` |

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Signal.md#constructor)

### Properties

- [\_head](components_ClusterNodeContainer._internal_.Signal.md#_head)
- [\_tail](components_ClusterNodeContainer._internal_.Signal.md#_tail)

### Methods

- [add](components_ClusterNodeContainer._internal_.Signal.md#add)
- [detach](components_ClusterNodeContainer._internal_.Signal.md#detach)
- [detachAll](components_ClusterNodeContainer._internal_.Signal.md#detachall)
- [dispatch](components_ClusterNodeContainer._internal_.Signal.md#dispatch)
- [handlers](components_ClusterNodeContainer._internal_.Signal.md#handlers)
- [has](components_ClusterNodeContainer._internal_.Signal.md#has)
- [once](components_ClusterNodeContainer._internal_.Signal.md#once)

## Constructors

### constructor

• **new Signal**<`CbType`\>()

MiniSignal constructor.

**`example`**
let mySignal = new Signal();
let binding = mySignal.add(onSignal);
mySignal.dispatch('foo', 'bar');
mySignal.detach(binding);

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CbType` | (...`args`: `any`) => `void` |

#### Defined in

node_modules/@pixi/loaders/index.d.ts:1118

## Properties

### \_head

• **\_head**: [`SignalBinding`](components_ClusterNodeContainer._internal_.SignalBinding.md)<`CbType`\>

#### Defined in

node_modules/@pixi/loaders/index.d.ts:1108

___

### \_tail

• **\_tail**: [`SignalBinding`](components_ClusterNodeContainer._internal_.SignalBinding.md)<`CbType`\>

#### Defined in

node_modules/@pixi/loaders/index.d.ts:1109

## Methods

### add

▸ **add**(`fn`, `thisArg?`): [`SignalBinding`](components_ClusterNodeContainer._internal_.SignalBinding.md)<`CbType`\>

Register a new listener.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `CbType` | Callback function. |
| `thisArg?` | `any` | - |

#### Returns

[`SignalBinding`](components_ClusterNodeContainer._internal_.SignalBinding.md)<`CbType`\>

The SignalBinding node that was added.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:1147

___

### detach

▸ **detach**(`node`): [`Signal`](components_ClusterNodeContainer._internal_.Signal.md)<`CbType`\>

Remove binding object.

**`api`** public

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`SignalBinding`](components_ClusterNodeContainer._internal_.SignalBinding.md)<`CbType`\> | The binding node that will be removed. |

#### Returns

[`Signal`](components_ClusterNodeContainer._internal_.Signal.md)<`CbType`\>

The instance on which this method was called.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:1162

___

### detachAll

▸ **detachAll**(): [`Signal`](components_ClusterNodeContainer._internal_.Signal.md)<`CbType`\>

Detach all listeners.

#### Returns

[`Signal`](components_ClusterNodeContainer._internal_.Signal.md)<`CbType`\>

The instance on which this method was called.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:1168

___

### dispatch

▸ **dispatch**(...`args`): `boolean`

Dispaches a signal to all registered listeners.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`boolean`

Indication if we've emitted an event.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:1139

___

### handlers

▸ **handlers**(`exists?`): `boolean` \| [`SignalBinding`](components_ClusterNodeContainer._internal_.SignalBinding.md)<`CbType`\>[]

Return an array of attached SignalBinding.

**`api`** public

#### Parameters

| Name | Type |
| :------ | :------ |
| `exists?` | `boolean` |

#### Returns

`boolean` \| [`SignalBinding`](components_ClusterNodeContainer._internal_.SignalBinding.md)<`CbType`\>[]

Array of attached SignalBinding or Boolean if called with exists = true

#### Defined in

node_modules/@pixi/loaders/index.d.ts:1126

___

### has

▸ **has**(`node`): `boolean`

Return true if node is a SignalBinding attached to this MiniSignal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`SignalBinding`](components_ClusterNodeContainer._internal_.SignalBinding.md)<`CbType`\> | Node to check. |

#### Returns

`boolean`

True if node is attache to mini-signal

#### Defined in

node_modules/@pixi/loaders/index.d.ts:1133

___

### once

▸ **once**(`fn`, `thisArg?`): [`SignalBinding`](components_ClusterNodeContainer._internal_.SignalBinding.md)<`CbType`\>

Register a new listener that will be executed only once.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `CbType` | Callback function. |
| `thisArg?` | `any` | - |

#### Returns

[`SignalBinding`](components_ClusterNodeContainer._internal_.SignalBinding.md)<`CbType`\>

The SignalBinding node that was added.

#### Defined in

node_modules/@pixi/loaders/index.d.ts:1155
