[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / MediaStreamTrack

# Interface: MediaStreamTrack

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).MediaStreamTrack

A single media track within a stream; typically, these are audio or video tracks, but other track types may exist as well.

## Hierarchy

- `EventTarget`

  ↳ **`MediaStreamTrack`**

## Table of contents

### Properties

- [contentHint](components_ClusterNodeContainer._internal_.MediaStreamTrack.md#contenthint)
- [enabled](components_ClusterNodeContainer._internal_.MediaStreamTrack.md#enabled)
- [id](components_ClusterNodeContainer._internal_.MediaStreamTrack.md#id)
- [kind](components_ClusterNodeContainer._internal_.MediaStreamTrack.md#kind)
- [label](components_ClusterNodeContainer._internal_.MediaStreamTrack.md#label)
- [muted](components_ClusterNodeContainer._internal_.MediaStreamTrack.md#muted)
- [onended](components_ClusterNodeContainer._internal_.MediaStreamTrack.md#onended)
- [onmute](components_ClusterNodeContainer._internal_.MediaStreamTrack.md#onmute)
- [onunmute](components_ClusterNodeContainer._internal_.MediaStreamTrack.md#onunmute)
- [readyState](components_ClusterNodeContainer._internal_.MediaStreamTrack.md#readystate)

### Methods

- [addEventListener](components_ClusterNodeContainer._internal_.MediaStreamTrack.md#addeventlistener)
- [applyConstraints](components_ClusterNodeContainer._internal_.MediaStreamTrack.md#applyconstraints)
- [clone](components_ClusterNodeContainer._internal_.MediaStreamTrack.md#clone)
- [dispatchEvent](components_ClusterNodeContainer._internal_.MediaStreamTrack.md#dispatchevent)
- [getCapabilities](components_ClusterNodeContainer._internal_.MediaStreamTrack.md#getcapabilities)
- [getConstraints](components_ClusterNodeContainer._internal_.MediaStreamTrack.md#getconstraints)
- [getSettings](components_ClusterNodeContainer._internal_.MediaStreamTrack.md#getsettings)
- [removeEventListener](components_ClusterNodeContainer._internal_.MediaStreamTrack.md#removeeventlistener)
- [stop](components_ClusterNodeContainer._internal_.MediaStreamTrack.md#stop)

## Properties

### contentHint

• **contentHint**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9261

___

### enabled

• **enabled**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9262

___

### id

• `Readonly` **id**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9263

___

### kind

• `Readonly` **kind**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9264

___

### label

• `Readonly` **label**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9265

___

### muted

• `Readonly` **muted**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9266

___

### onended

• **onended**: ``null`` \| (`ev`: `Event`) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9267

___

### onmute

• **onmute**: ``null`` \| (`ev`: `Event`) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9268

___

### onunmute

• **onunmute**: ``null`` \| (`ev`: `Event`) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9269

___

### readyState

• `Readonly` **readyState**: [`MediaStreamTrackState`](../modules/components_ClusterNodeContainer._internal_.md#mediastreamtrackstate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9270

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MediaStreamTrackEventMap`](components_ClusterNodeContainer._internal_.MediaStreamTrackEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`MediaStreamTrackEventMap`](components_ClusterNodeContainer._internal_.MediaStreamTrackEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](components_ClusterNodeContainer._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9277

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

node_modules/typescript/lib/lib.dom.d.ts:9278

___

### applyConstraints

▸ **applyConstraints**(`constraints?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraints?` | [`MediaTrackConstraints`](components_ClusterNodeContainer._internal_.MediaTrackConstraints.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9271

___

### clone

▸ **clone**(): [`MediaStreamTrack`](../modules/components_ClusterNodeContainer._internal_.md#mediastreamtrack)

#### Returns

[`MediaStreamTrack`](../modules/components_ClusterNodeContainer._internal_.md#mediastreamtrack)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9272

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

### getCapabilities

▸ **getCapabilities**(): [`MediaTrackCapabilities`](components_ClusterNodeContainer._internal_.MediaTrackCapabilities.md)

#### Returns

[`MediaTrackCapabilities`](components_ClusterNodeContainer._internal_.MediaTrackCapabilities.md)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9273

___

### getConstraints

▸ **getConstraints**(): [`MediaTrackConstraints`](components_ClusterNodeContainer._internal_.MediaTrackConstraints.md)

#### Returns

[`MediaTrackConstraints`](components_ClusterNodeContainer._internal_.MediaTrackConstraints.md)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9274

___

### getSettings

▸ **getSettings**(): [`MediaTrackSettings`](components_ClusterNodeContainer._internal_.MediaTrackSettings.md)

#### Returns

[`MediaTrackSettings`](components_ClusterNodeContainer._internal_.MediaTrackSettings.md)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9275

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MediaStreamTrackEventMap`](components_ClusterNodeContainer._internal_.MediaStreamTrackEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`MediaStreamTrackEventMap`](components_ClusterNodeContainer._internal_.MediaStreamTrackEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](components_ClusterNodeContainer._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9279

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

node_modules/typescript/lib/lib.dom.d.ts:9280

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9276
