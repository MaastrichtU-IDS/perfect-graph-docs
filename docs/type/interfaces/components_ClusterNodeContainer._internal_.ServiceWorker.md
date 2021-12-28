[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / ServiceWorker

# Interface: ServiceWorker

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).ServiceWorker

This ServiceWorker API interface provides a reference to a service worker. Multiple browsing contexts (e.g. pages, workers, etc.) can be associated with the same service worker, each through a unique ServiceWorker object.
Available only in secure contexts.

## Hierarchy

- `EventTarget`

- [`AbstractWorker`](components_ClusterNodeContainer._internal_.AbstractWorker.md)

  ↳ **`ServiceWorker`**

## Table of contents

### Properties

- [onerror](components_ClusterNodeContainer._internal_.ServiceWorker.md#onerror)
- [onstatechange](components_ClusterNodeContainer._internal_.ServiceWorker.md#onstatechange)
- [scriptURL](components_ClusterNodeContainer._internal_.ServiceWorker.md#scripturl)
- [state](components_ClusterNodeContainer._internal_.ServiceWorker.md#state)

### Methods

- [addEventListener](components_ClusterNodeContainer._internal_.ServiceWorker.md#addeventlistener)
- [dispatchEvent](components_ClusterNodeContainer._internal_.ServiceWorker.md#dispatchevent)
- [postMessage](components_ClusterNodeContainer._internal_.ServiceWorker.md#postmessage)
- [removeEventListener](components_ClusterNodeContainer._internal_.ServiceWorker.md#removeeventlistener)

## Properties

### onerror

• **onerror**: ``null`` \| (`ev`: [`ErrorEvent`](../modules/components_ClusterNodeContainer._internal_.md#errorevent)) => `any`

#### Inherited from

[AbstractWorker](components_ClusterNodeContainer._internal_.AbstractWorker.md).[onerror](components_ClusterNodeContainer._internal_.AbstractWorker.md#onerror)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1922

___

### onstatechange

• **onstatechange**: ``null`` \| (`ev`: `Event`) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12998

___

### scriptURL

• `Readonly` **scriptURL**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12999

___

### state

• `Readonly` **state**: [`ServiceWorkerState`](../modules/components_ClusterNodeContainer._internal_.md#serviceworkerstate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13000

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`ServiceWorkerEventMap`](components_ClusterNodeContainer._internal_.ServiceWorkerEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`ServiceWorkerEventMap`](components_ClusterNodeContainer._internal_.ServiceWorkerEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](components_ClusterNodeContainer._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

[AbstractWorker](components_ClusterNodeContainer._internal_.AbstractWorker.md).[addEventListener](components_ClusterNodeContainer._internal_.AbstractWorker.md#addeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13003

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

[AbstractWorker](components_ClusterNodeContainer._internal_.AbstractWorker.md).[addEventListener](components_ClusterNodeContainer._internal_.AbstractWorker.md#addeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13004

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `transfer` | [`Transferable`](../modules/components_ClusterNodeContainer._internal_.md#transferable)[] |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13001

▸ **postMessage**(`message`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `options?` | [`StructuredSerializeOptions`](components_ClusterNodeContainer._internal_.StructuredSerializeOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13002

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`ServiceWorkerEventMap`](components_ClusterNodeContainer._internal_.ServiceWorkerEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`ServiceWorkerEventMap`](components_ClusterNodeContainer._internal_.ServiceWorkerEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](components_ClusterNodeContainer._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

[AbstractWorker](components_ClusterNodeContainer._internal_.AbstractWorker.md).[removeEventListener](components_ClusterNodeContainer._internal_.AbstractWorker.md#removeeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13005

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

[AbstractWorker](components_ClusterNodeContainer._internal_.AbstractWorker.md).[removeEventListener](components_ClusterNodeContainer._internal_.AbstractWorker.md#removeeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13006
