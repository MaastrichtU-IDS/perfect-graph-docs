[perfect-graph](../README.md) / [Modules](../modules.md) / core/utils/events

# Module: core/utils/events

## Table of contents

### Namespaces

- [&lt;internal\&gt;](core_utils_events._internal_.md)

### Functions

- [dragTrack](core_utils_events.md#dragtrack)

## Functions

### dragTrack

▸ **dragTrack**(`onDrag`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onDrag` | (`pos`: [`Position`](components_ClusterNodeContainer._internal_.md#position)) => `void` \| { `keepDragging?`: `boolean` ; `position?`: [`Position`](components_ClusterNodeContainer._internal_.md#position)  } |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `onDown` | (`position`: [`Position`](components_ClusterNodeContainer._internal_.md#position)) => `void` |
| `onMove` | (`position`: [`Position`](components_ClusterNodeContainer._internal_.md#position)) => `undefined` \| [`OnDragResult`](core_utils_events._internal_.md#ondragresult) |

#### Defined in

[src/core/utils/events.tsx:9](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/core/utils/events.tsx#L9)
