[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / AbstractWorker

# Interface: AbstractWorker

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).AbstractWorker

## Hierarchy

- **`AbstractWorker`**

  ↳ [`ServiceWorker`](components_ClusterNodeContainer._internal_.ServiceWorker.md)

## Table of contents

### Properties

- [onerror](components_ClusterNodeContainer._internal_.AbstractWorker.md#onerror)

### Methods

- [addEventListener](components_ClusterNodeContainer._internal_.AbstractWorker.md#addeventlistener)
- [removeEventListener](components_ClusterNodeContainer._internal_.AbstractWorker.md#removeeventlistener)

## Properties

### onerror

• **onerror**: ``null`` \| (`ev`: [`ErrorEvent`](../modules/components_ClusterNodeContainer._internal_.md#errorevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1922

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"error"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`AbstractWorkerEventMap`](components_ClusterNodeContainer._internal_.AbstractWorkerEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](components_ClusterNodeContainer._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1923

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/components_ClusterNodeContainer._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](components_ClusterNodeContainer._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1924

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"error"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`AbstractWorkerEventMap`](components_ClusterNodeContainer._internal_.AbstractWorkerEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](components_ClusterNodeContainer._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1925

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/components_ClusterNodeContainer._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](components_ClusterNodeContainer._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1926
