[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / TextTrack

# Interface: TextTrack

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).TextTrack

This interface also inherits properties from EventTarget.

## Hierarchy

- `EventTarget`

  ↳ **`TextTrack`**

## Table of contents

### Properties

- [activeCues](components_ClusterNodeContainer._internal_.TextTrack.md#activecues)
- [cues](components_ClusterNodeContainer._internal_.TextTrack.md#cues)
- [id](components_ClusterNodeContainer._internal_.TextTrack.md#id)
- [inBandMetadataTrackDispatchType](components_ClusterNodeContainer._internal_.TextTrack.md#inbandmetadatatrackdispatchtype)
- [kind](components_ClusterNodeContainer._internal_.TextTrack.md#kind)
- [label](components_ClusterNodeContainer._internal_.TextTrack.md#label)
- [language](components_ClusterNodeContainer._internal_.TextTrack.md#language)
- [mode](components_ClusterNodeContainer._internal_.TextTrack.md#mode)
- [oncuechange](components_ClusterNodeContainer._internal_.TextTrack.md#oncuechange)

### Methods

- [addCue](components_ClusterNodeContainer._internal_.TextTrack.md#addcue)
- [addEventListener](components_ClusterNodeContainer._internal_.TextTrack.md#addeventlistener)
- [dispatchEvent](components_ClusterNodeContainer._internal_.TextTrack.md#dispatchevent)
- [removeCue](components_ClusterNodeContainer._internal_.TextTrack.md#removecue)
- [removeEventListener](components_ClusterNodeContainer._internal_.TextTrack.md#removeeventlistener)

## Properties

### activeCues

• `Readonly` **activeCues**: ``null`` \| [`TextTrackCueList`](../modules/components_ClusterNodeContainer._internal_.md#texttrackcuelist)

Returns the text track cues from the text track list of cues that are currently active (i.e. that start before the current playback position and end after it), as a TextTrackCueList object.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13567

___

### cues

• `Readonly` **cues**: ``null`` \| [`TextTrackCueList`](../modules/components_ClusterNodeContainer._internal_.md#texttrackcuelist)

Returns the text track list of cues, as a TextTrackCueList object.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13569

___

### id

• `Readonly` **id**: `string`

Returns the ID of the given track.

For in-band tracks, this is the ID that can be used with a fragment if the format supports media fragment syntax, and that can be used with the getTrackById() method.

For TextTrack objects corresponding to track elements, this is the ID of the track element.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13577

___

### inBandMetadataTrackDispatchType

• `Readonly` **inBandMetadataTrackDispatchType**: `string`

Returns the text track in-band metadata track dispatch type string.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13579

___

### kind

• `Readonly` **kind**: [`TextTrackKind`](../modules/components_ClusterNodeContainer._internal_.md#texttrackkind)

Returns the text track kind string.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13581

___

### label

• `Readonly` **label**: `string`

Returns the text track label, if there is one, or the empty string otherwise (indicating that a custom label probably needs to be generated from the other attributes of the object if the object is exposed to the user).

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13583

___

### language

• `Readonly` **language**: `string`

Returns the text track language string.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13585

___

### mode

• **mode**: [`TextTrackMode`](../modules/components_ClusterNodeContainer._internal_.md#texttrackmode)

Returns the text track mode, represented by a string from the following list:

Can be set, to change the mode.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13591

___

### oncuechange

• **oncuechange**: ``null`` \| (`ev`: `Event`) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13592

## Methods

### addCue

▸ **addCue**(`cue`): `void`

Adds the given cue to textTrack's text track list of cues.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cue` | [`TextTrackCue`](../modules/components_ClusterNodeContainer._internal_.md#texttrackcue) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13594

___

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"cuechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`TextTrackEventMap`](components_ClusterNodeContainer._internal_.TextTrackEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](components_ClusterNodeContainer._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13597

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

node_modules/typescript/lib/lib.dom.d.ts:13598

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

### removeCue

▸ **removeCue**(`cue`): `void`

Removes the given cue from textTrack's text track list of cues.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cue` | [`TextTrackCue`](../modules/components_ClusterNodeContainer._internal_.md#texttrackcue) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13596

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"cuechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`ev`: [`TextTrackEventMap`](components_ClusterNodeContainer._internal_.TextTrackEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](components_ClusterNodeContainer._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13599

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

node_modules/typescript/lib/lib.dom.d.ts:13600
