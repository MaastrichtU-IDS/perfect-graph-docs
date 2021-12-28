[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / MessagePort

# Interface: MessagePort

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).MessagePort

This Channel Messaging API interface represents one of the two ports of a MessageChannel, allowing messages to be sent from one port and listening out for them arriving at the other.

## Hierarchy

- `EventTarget`

  ↳ **`MessagePort`**

## Table of contents

### Properties

- [onmessage](components_ClusterNodeContainer._internal_.MessagePort.md#onmessage)
- [onmessageerror](components_ClusterNodeContainer._internal_.MessagePort.md#onmessageerror)

### Methods

- [addEventListener](components_ClusterNodeContainer._internal_.MessagePort.md#addeventlistener)
- [close](components_ClusterNodeContainer._internal_.MessagePort.md#close)
- [dispatchEvent](components_ClusterNodeContainer._internal_.MessagePort.md#dispatchevent)
- [postMessage](components_ClusterNodeContainer._internal_.MessagePort.md#postmessage)
- [removeEventListener](components_ClusterNodeContainer._internal_.MessagePort.md#removeeventlistener)
- [start](components_ClusterNodeContainer._internal_.MessagePort.md#start)

## Properties

### onmessage

• **onmessage**: ``null`` \| (`ev`: [`MessageEvent`](../modules/components_ClusterNodeContainer._internal_.md#messageevent)<`any`\>) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9339

___

### onmessageerror

• **onmessageerror**: ``null`` \| (`ev`: [`MessageEvent`](../modules/components_ClusterNodeContainer._internal_.md#messageevent)<`any`\>) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9340

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MessagePortEventMap`](components_ClusterNodeContainer._internal_.MessagePortEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`MessagePortEventMap`](components_ClusterNodeContainer._internal_.MessagePortEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](components_ClusterNodeContainer._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9352

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/components_ClusterNodeContainer._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](components_ClusterNodeContainer._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9353

___

### close

▸ **close**(): `void`

Disconnects the port, so that it is no longer active.

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9342

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`boolean`

#### Inherited from

EventTarget.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4983

___

### postMessage

▸ **postMessage**(`message`, `transfer`): `void`

Posts a message through the channel. Objects listed in transfer are transferred, not just cloned, meaning that they are no longer usable on the sending side.

Throws a "DataCloneError" DOMException if transfer contains duplicate objects or port, or if message could not be cloned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `transfer` | [`Transferable`](../modules/components_ClusterNodeContainer._internal_.md#transferable)[] |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9348

▸ **postMessage**(`message`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `options?` | [`StructuredSerializeOptions`](components_ClusterNodeContainer._internal_.StructuredSerializeOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9349

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MessagePortEventMap`](components_ClusterNodeContainer._internal_.MessagePortEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`MessagePortEventMap`](components_ClusterNodeContainer._internal_.MessagePortEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](components_ClusterNodeContainer._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9354

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/components_ClusterNodeContainer._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](components_ClusterNodeContainer._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9355

___

### start

▸ **start**(): `void`

Begins dispatching messages received on the port.

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9351
