[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / RTCDataChannel

# Interface: RTCDataChannel

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).RTCDataChannel

## Hierarchy

- `EventTarget`

  ↳ **`RTCDataChannel`**

## Table of contents

### Properties

- [binaryType](components_ClusterNodeContainer._internal_.RTCDataChannel.md#binarytype)
- [bufferedAmount](components_ClusterNodeContainer._internal_.RTCDataChannel.md#bufferedamount)
- [bufferedAmountLowThreshold](components_ClusterNodeContainer._internal_.RTCDataChannel.md#bufferedamountlowthreshold)
- [id](components_ClusterNodeContainer._internal_.RTCDataChannel.md#id)
- [label](components_ClusterNodeContainer._internal_.RTCDataChannel.md#label)
- [maxPacketLifeTime](components_ClusterNodeContainer._internal_.RTCDataChannel.md#maxpacketlifetime)
- [maxRetransmits](components_ClusterNodeContainer._internal_.RTCDataChannel.md#maxretransmits)
- [negotiated](components_ClusterNodeContainer._internal_.RTCDataChannel.md#negotiated)
- [onbufferedamountlow](components_ClusterNodeContainer._internal_.RTCDataChannel.md#onbufferedamountlow)
- [onclose](components_ClusterNodeContainer._internal_.RTCDataChannel.md#onclose)
- [onerror](components_ClusterNodeContainer._internal_.RTCDataChannel.md#onerror)
- [onmessage](components_ClusterNodeContainer._internal_.RTCDataChannel.md#onmessage)
- [onopen](components_ClusterNodeContainer._internal_.RTCDataChannel.md#onopen)
- [ordered](components_ClusterNodeContainer._internal_.RTCDataChannel.md#ordered)
- [protocol](components_ClusterNodeContainer._internal_.RTCDataChannel.md#protocol)
- [readyState](components_ClusterNodeContainer._internal_.RTCDataChannel.md#readystate)

### Methods

- [addEventListener](components_ClusterNodeContainer._internal_.RTCDataChannel.md#addeventlistener)
- [close](components_ClusterNodeContainer._internal_.RTCDataChannel.md#close)
- [dispatchEvent](components_ClusterNodeContainer._internal_.RTCDataChannel.md#dispatchevent)
- [removeEventListener](components_ClusterNodeContainer._internal_.RTCDataChannel.md#removeeventlistener)
- [send](components_ClusterNodeContainer._internal_.RTCDataChannel.md#send)

## Properties

### binaryType

• **binaryType**: [`BinaryType`](../modules/components_ClusterNodeContainer._internal_.md#binarytype)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10672

___

### bufferedAmount

• `Readonly` **bufferedAmount**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10673

___

### bufferedAmountLowThreshold

• **bufferedAmountLowThreshold**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10674

___

### id

• `Readonly` **id**: ``null`` \| `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10675

___

### label

• `Readonly` **label**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10676

___

### maxPacketLifeTime

• `Readonly` **maxPacketLifeTime**: ``null`` \| `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10677

___

### maxRetransmits

• `Readonly` **maxRetransmits**: ``null`` \| `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10678

___

### negotiated

• `Readonly` **negotiated**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10679

___

### onbufferedamountlow

• **onbufferedamountlow**: ``null`` \| (`ev`: `Event`) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10680

___

### onclose

• **onclose**: ``null`` \| (`ev`: `Event`) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10681

___

### onerror

• **onerror**: ``null`` \| (`ev`: `Event`) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10682

___

### onmessage

• **onmessage**: ``null`` \| (`ev`: [`MessageEvent`](../modules/components_ClusterNodeContainer._internal_.md#messageevent)<`any`\>) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10683

___

### onopen

• **onopen**: ``null`` \| (`ev`: `Event`) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10684

___

### ordered

• `Readonly` **ordered**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10685

___

### protocol

• `Readonly` **protocol**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10686

___

### readyState

• `Readonly` **readyState**: [`RTCDataChannelState`](../modules/components_ClusterNodeContainer._internal_.md#rtcdatachannelstate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10687

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`RTCDataChannelEventMap`](components_ClusterNodeContainer._internal_.RTCDataChannelEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`RTCDataChannelEventMap`](components_ClusterNodeContainer._internal_.RTCDataChannelEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](components_ClusterNodeContainer._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10693

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

node_modules/typescript/lib/lib.dom.d.ts:10694

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10688

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

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`RTCDataChannelEventMap`](components_ClusterNodeContainer._internal_.RTCDataChannelEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`RTCDataChannelEventMap`](components_ClusterNodeContainer._internal_.RTCDataChannelEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](components_ClusterNodeContainer._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10695

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

node_modules/typescript/lib/lib.dom.d.ts:10696

___

### send

▸ **send**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10689

▸ **send**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Blob` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10690

▸ **send**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ArrayBuffer` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10691

▸ **send**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ArrayBufferView`](components_ClusterNodeContainer._internal_.ArrayBufferView.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10692
