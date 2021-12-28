[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / TextTrackCueList

# Interface: TextTrackCueList

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).TextTrackCueList

## Indexable

▪ [index: `number`]: [`TextTrackCue`](../modules/components_ClusterNodeContainer._internal_.md#texttrackcue)

## Table of contents

### Properties

- [length](components_ClusterNodeContainer._internal_.TextTrackCueList.md#length)

### Methods

- [getCueById](components_ClusterNodeContainer._internal_.TextTrackCueList.md#getcuebyid)

## Properties

### length

• `Readonly` **length**: `number`

Returns the number of cues in the list.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13656

## Methods

### getCueById

▸ **getCueById**(`id`): ``null`` \| [`TextTrackCue`](../modules/components_ClusterNodeContainer._internal_.md#texttrackcue)

Returns the first text track cue (in text track cue order) with text track cue identifier id.

Returns null if none of the cues have the given identifier or if the argument is the empty string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

``null`` \| [`TextTrackCue`](../modules/components_ClusterNodeContainer._internal_.md#texttrackcue)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13662
