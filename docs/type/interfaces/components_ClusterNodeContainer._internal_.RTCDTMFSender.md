[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / RTCDTMFSender

# Interface: RTCDTMFSender

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).RTCDTMFSender

## Hierarchy

- `EventTarget`

  ↳ **`RTCDTMFSender`**

## Table of contents

### Properties

- [canInsertDTMF](components_ClusterNodeContainer._internal_.RTCDTMFSender.md#caninsertdtmf)
- [ontonechange](components_ClusterNodeContainer._internal_.RTCDTMFSender.md#ontonechange)
- [toneBuffer](components_ClusterNodeContainer._internal_.RTCDTMFSender.md#tonebuffer)

### Methods

- [addEventListener](components_ClusterNodeContainer._internal_.RTCDTMFSender.md#addeventlistener)
- [dispatchEvent](components_ClusterNodeContainer._internal_.RTCDTMFSender.md#dispatchevent)
- [insertDTMF](components_ClusterNodeContainer._internal_.RTCDTMFSender.md#insertdtmf)
- [removeEventListener](components_ClusterNodeContainer._internal_.RTCDTMFSender.md#removeeventlistener)

## Properties

### canInsertDTMF

• `Readonly` **canInsertDTMF**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10638

___

### ontonechange

• **ontonechange**: ``null`` \| (`ev`: [`RTCDTMFToneChangeEvent`](../modules/components_ClusterNodeContainer._internal_.md#rtcdtmftonechangeevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10639

___

### toneBuffer

• `Readonly` **toneBuffer**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10640

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"tonechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`RTCDTMFSenderEventMap`](components_ClusterNodeContainer._internal_.RTCDTMFSenderEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](components_ClusterNodeContainer._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10642

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

node_modules/typescript/lib/lib.dom.d.ts:10643

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

### insertDTMF

▸ **insertDTMF**(`tones`, `duration?`, `interToneGap?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tones` | `string` |
| `duration?` | `number` |
| `interToneGap?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10641

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"tonechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`RTCDTMFSenderEventMap`](components_ClusterNodeContainer._internal_.RTCDTMFSenderEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](components_ClusterNodeContainer._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10644

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

node_modules/typescript/lib/lib.dom.d.ts:10645
