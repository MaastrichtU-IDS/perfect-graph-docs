[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / TextTrackCue

# Interface: TextTrackCue

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).TextTrackCue

TextTrackCues represent a string of text that will be displayed for some duration of time on a TextTrack. This includes the start and end times that the cue will be displayed. A TextTrackCue cannot be used directly, instead one of the derived types (e.g. VTTCue) must be used.

## Hierarchy

- `EventTarget`

  ↳ **`TextTrackCue`**

## Table of contents

### Properties

- [endTime](components_ClusterNodeContainer._internal_.TextTrackCue.md#endtime)
- [id](components_ClusterNodeContainer._internal_.TextTrackCue.md#id)
- [onenter](components_ClusterNodeContainer._internal_.TextTrackCue.md#onenter)
- [onexit](components_ClusterNodeContainer._internal_.TextTrackCue.md#onexit)
- [pauseOnExit](components_ClusterNodeContainer._internal_.TextTrackCue.md#pauseonexit)
- [startTime](components_ClusterNodeContainer._internal_.TextTrackCue.md#starttime)
- [track](components_ClusterNodeContainer._internal_.TextTrackCue.md#track)

### Methods

- [addEventListener](components_ClusterNodeContainer._internal_.TextTrackCue.md#addeventlistener)
- [dispatchEvent](components_ClusterNodeContainer._internal_.TextTrackCue.md#dispatchevent)
- [removeEventListener](components_ClusterNodeContainer._internal_.TextTrackCue.md#removeeventlistener)

## Properties

### endTime

• **endTime**: `number`

Returns the text track cue end time, in seconds.

Can be set.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13620

___

### id

• **id**: `string`

Returns the text track cue identifier.

Can be set.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13626

___

### onenter

• **onenter**: ``null`` \| (`ev`: `Event`) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13627

___

### onexit

• **onexit**: ``null`` \| (`ev`: `Event`) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13628

___

### pauseOnExit

• **pauseOnExit**: `boolean`

Returns true if the text track cue pause-on-exit flag is set, false otherwise.

Can be set.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13634

___

### startTime

• **startTime**: `number`

Returns the text track cue start time, in seconds.

Can be set.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13640

___

### track

• `Readonly` **track**: ``null`` \| [`TextTrack`](../modules/components_ClusterNodeContainer._internal_.md#texttrack)

Returns the TextTrack object to which this text track cue belongs, if any, or null otherwise.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13642

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`TextTrackCueEventMap`](components_ClusterNodeContainer._internal_.TextTrackCueEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`TextTrackCueEventMap`](components_ClusterNodeContainer._internal_.TextTrackCueEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](components_ClusterNodeContainer._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13643

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

node_modules/typescript/lib/lib.dom.d.ts:13644

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
| `K` | extends keyof [`TextTrackCueEventMap`](components_ClusterNodeContainer._internal_.TextTrackCueEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`TextTrackCueEventMap`](components_ClusterNodeContainer._internal_.TextTrackCueEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](components_ClusterNodeContainer._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13645

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

node_modules/typescript/lib/lib.dom.d.ts:13646
