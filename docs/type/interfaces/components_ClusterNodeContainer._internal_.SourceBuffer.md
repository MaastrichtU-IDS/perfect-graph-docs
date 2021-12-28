[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SourceBuffer

# Interface: SourceBuffer

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SourceBuffer

A chunk of media to be passed into an HTMLMediaElement and played, via a MediaSource object. This can be made up of one or several media segments.

## Hierarchy

- `EventTarget`

  ↳ **`SourceBuffer`**

## Table of contents

### Properties

- [appendWindowEnd](components_ClusterNodeContainer._internal_.SourceBuffer.md#appendwindowend)
- [appendWindowStart](components_ClusterNodeContainer._internal_.SourceBuffer.md#appendwindowstart)
- [buffered](components_ClusterNodeContainer._internal_.SourceBuffer.md#buffered)
- [mode](components_ClusterNodeContainer._internal_.SourceBuffer.md#mode)
- [onabort](components_ClusterNodeContainer._internal_.SourceBuffer.md#onabort)
- [onerror](components_ClusterNodeContainer._internal_.SourceBuffer.md#onerror)
- [onupdate](components_ClusterNodeContainer._internal_.SourceBuffer.md#onupdate)
- [onupdateend](components_ClusterNodeContainer._internal_.SourceBuffer.md#onupdateend)
- [onupdatestart](components_ClusterNodeContainer._internal_.SourceBuffer.md#onupdatestart)
- [timestampOffset](components_ClusterNodeContainer._internal_.SourceBuffer.md#timestampoffset)
- [updating](components_ClusterNodeContainer._internal_.SourceBuffer.md#updating)

### Methods

- [abort](components_ClusterNodeContainer._internal_.SourceBuffer.md#abort)
- [addEventListener](components_ClusterNodeContainer._internal_.SourceBuffer.md#addeventlistener)
- [appendBuffer](components_ClusterNodeContainer._internal_.SourceBuffer.md#appendbuffer)
- [changeType](components_ClusterNodeContainer._internal_.SourceBuffer.md#changetype)
- [dispatchEvent](components_ClusterNodeContainer._internal_.SourceBuffer.md#dispatchevent)
- [remove](components_ClusterNodeContainer._internal_.SourceBuffer.md#remove)
- [removeEventListener](components_ClusterNodeContainer._internal_.SourceBuffer.md#removeeventlistener)

## Properties

### appendWindowEnd

• **appendWindowEnd**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13116

___

### appendWindowStart

• **appendWindowStart**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13117

___

### buffered

• `Readonly` **buffered**: [`TimeRanges`](../modules/components_ClusterNodeContainer._internal_.md#timeranges)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13118

___

### mode

• **mode**: [`AppendMode`](../modules/components_ClusterNodeContainer._internal_.md#appendmode)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13119

___

### onabort

• **onabort**: ``null`` \| (`ev`: `Event`) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13120

___

### onerror

• **onerror**: ``null`` \| (`ev`: `Event`) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13121

___

### onupdate

• **onupdate**: ``null`` \| (`ev`: `Event`) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13122

___

### onupdateend

• **onupdateend**: ``null`` \| (`ev`: `Event`) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13123

___

### onupdatestart

• **onupdatestart**: ``null`` \| (`ev`: `Event`) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13124

___

### timestampOffset

• **timestampOffset**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13125

___

### updating

• `Readonly` **updating**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13126

## Methods

### abort

▸ **abort**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13127

___

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SourceBufferEventMap`](components_ClusterNodeContainer._internal_.SourceBufferEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`SourceBufferEventMap`](components_ClusterNodeContainer._internal_.SourceBufferEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](components_ClusterNodeContainer._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13131

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

node_modules/typescript/lib/lib.dom.d.ts:13132

___

### appendBuffer

▸ **appendBuffer**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`BufferSource`](../modules/components_ClusterNodeContainer._internal_.md#buffersource) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13128

___

### changeType

▸ **changeType**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13129

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

### remove

▸ **remove**(`start`, `end`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13130

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SourceBufferEventMap`](components_ClusterNodeContainer._internal_.SourceBufferEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`SourceBufferEventMap`](components_ClusterNodeContainer._internal_.SourceBufferEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](components_ClusterNodeContainer._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13133

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

node_modules/typescript/lib/lib.dom.d.ts:13134
