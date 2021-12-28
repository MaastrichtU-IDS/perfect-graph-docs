[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / MediaStream

# Interface: MediaStream

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).MediaStream

A stream of media content. A stream consists of several tracks such as video or audio tracks. Each track is specified as an instance of MediaStreamTrack.

## Hierarchy

- `EventTarget`

  ↳ **`MediaStream`**

## Table of contents

### Properties

- [active](components_ClusterNodeContainer._internal_.MediaStream.md#active)
- [id](components_ClusterNodeContainer._internal_.MediaStream.md#id)
- [onaddtrack](components_ClusterNodeContainer._internal_.MediaStream.md#onaddtrack)
- [onremovetrack](components_ClusterNodeContainer._internal_.MediaStream.md#onremovetrack)

### Methods

- [addEventListener](components_ClusterNodeContainer._internal_.MediaStream.md#addeventlistener)
- [addTrack](components_ClusterNodeContainer._internal_.MediaStream.md#addtrack)
- [clone](components_ClusterNodeContainer._internal_.MediaStream.md#clone)
- [dispatchEvent](components_ClusterNodeContainer._internal_.MediaStream.md#dispatchevent)
- [getAudioTracks](components_ClusterNodeContainer._internal_.MediaStream.md#getaudiotracks)
- [getTrackById](components_ClusterNodeContainer._internal_.MediaStream.md#gettrackbyid)
- [getTracks](components_ClusterNodeContainer._internal_.MediaStream.md#gettracks)
- [getVideoTracks](components_ClusterNodeContainer._internal_.MediaStream.md#getvideotracks)
- [removeEventListener](components_ClusterNodeContainer._internal_.MediaStream.md#removeeventlistener)
- [removeTrack](components_ClusterNodeContainer._internal_.MediaStream.md#removetrack)

## Properties

### active

• `Readonly` **active**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9210

___

### id

• `Readonly` **id**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9211

___

### onaddtrack

• **onaddtrack**: ``null`` \| (`ev`: [`MediaStreamTrackEvent`](../modules/components_ClusterNodeContainer._internal_.md#mediastreamtrackevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9212

___

### onremovetrack

• **onremovetrack**: ``null`` \| (`ev`: [`MediaStreamTrackEvent`](../modules/components_ClusterNodeContainer._internal_.md#mediastreamtrackevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9213

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MediaStreamEventMap`](components_ClusterNodeContainer._internal_.MediaStreamEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`MediaStreamEventMap`](components_ClusterNodeContainer._internal_.MediaStreamEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](components_ClusterNodeContainer._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9221

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

node_modules/typescript/lib/lib.dom.d.ts:9222

___

### addTrack

▸ **addTrack**(`track`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `track` | [`MediaStreamTrack`](../modules/components_ClusterNodeContainer._internal_.md#mediastreamtrack) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9214

___

### clone

▸ **clone**(): [`MediaStream`](../modules/components_ClusterNodeContainer._internal_.md#mediastream)

#### Returns

[`MediaStream`](../modules/components_ClusterNodeContainer._internal_.md#mediastream)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9215

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

### getAudioTracks

▸ **getAudioTracks**(): [`MediaStreamTrack`](../modules/components_ClusterNodeContainer._internal_.md#mediastreamtrack)[]

#### Returns

[`MediaStreamTrack`](../modules/components_ClusterNodeContainer._internal_.md#mediastreamtrack)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9216

___

### getTrackById

▸ **getTrackById**(`trackId`): ``null`` \| [`MediaStreamTrack`](../modules/components_ClusterNodeContainer._internal_.md#mediastreamtrack)

#### Parameters

| Name | Type |
| :------ | :------ |
| `trackId` | `string` |

#### Returns

``null`` \| [`MediaStreamTrack`](../modules/components_ClusterNodeContainer._internal_.md#mediastreamtrack)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9217

___

### getTracks

▸ **getTracks**(): [`MediaStreamTrack`](../modules/components_ClusterNodeContainer._internal_.md#mediastreamtrack)[]

#### Returns

[`MediaStreamTrack`](../modules/components_ClusterNodeContainer._internal_.md#mediastreamtrack)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9218

___

### getVideoTracks

▸ **getVideoTracks**(): [`MediaStreamTrack`](../modules/components_ClusterNodeContainer._internal_.md#mediastreamtrack)[]

#### Returns

[`MediaStreamTrack`](../modules/components_ClusterNodeContainer._internal_.md#mediastreamtrack)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9219

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MediaStreamEventMap`](components_ClusterNodeContainer._internal_.MediaStreamEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`MediaStreamEventMap`](components_ClusterNodeContainer._internal_.MediaStreamEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](components_ClusterNodeContainer._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9223

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

node_modules/typescript/lib/lib.dom.d.ts:9224

___

### removeTrack

▸ **removeTrack**(`track`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `track` | [`MediaStreamTrack`](../modules/components_ClusterNodeContainer._internal_.md#mediastreamtrack) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9220
