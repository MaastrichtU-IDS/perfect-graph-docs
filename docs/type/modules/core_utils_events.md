[perfect-graph](../README.md) / [Modules](../modules.md) / core/utils/events

# Module: core/utils/events

## Table of contents

### Namespaces

- [&lt;internal\&gt;](core_utils_events._internal_.md)

### Functions

- [dragTrack](core_utils_events#dragtrack)

## Functions

### dragTrack

▸ **dragTrack**(`onDrag`): `Object`

#### Parameters

| Name     | Type                                                                                      |
| :------- | :---------------------------------------------------------------------------------------- |
| `onDrag` | (`pos`: `Position`) => `void` \| { `keepDragging?`: `boolean` ; `position?`: `Position` } |

#### Returns

`Object`

| Name     | Type                                                                                                   |
| :------- | :----------------------------------------------------------------------------------------------------- |
| `onDown` | (`position`: `Position`) => `void`                                                                     |
| `onMove` | (`position`: `Position`) => `undefined` \| [`OnDragResult`](core_utils_events._internal_#ondragresult) |

#### Defined in

[core/utils/events.tsx:9](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/core/utils/events.tsx#L9)
