[perfect-graph](../README.md) / [Modules](../modules.md) / core/utils/events

# Module: core/utils/events

## Table of contents

### Functions

- [dragTrack](core_utils_events.md#dragtrack)

## Functions

### dragTrack

▸ **dragTrack**(`onDrag`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onDrag` | (`pos`: `Position`) => `void` \| { `keepDragging?`: `boolean` ; `position?`: `Position`  } |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `onDown` | (`position`: `Position`) => `void` |
| `onMove` | (`position`: `Position`) => `undefined` \| `OnDragResult` |

#### Defined in

[core/utils/events.tsx:9](https://github.com/MaastrichtU-IDS/perfect-graph/blob/15648b3/src/core/utils/events.tsx#L9)
