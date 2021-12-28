[perfect-graph](../README.md) / [Modules](../modules.md) / utils/useTimeoutManager

# Module: utils/useTimeoutManager

## Table of contents

### Functions

- [useTimeoutManager](utils_useTimeoutManager.md#usetimeoutmanager)

## Functions

### useTimeoutManager

▸ `Const` **useTimeoutManager**<`T`\>(`timers`, `callback`, `options?`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Timer`](utils_TimeoutManager.md#timer)<`Record`<`string`, `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `timers` | `T`[] |
| `callback` | (`timer`: `T`, `index`: `number`, `timeout`: [`TimeoutInstance`](../interfaces/utils_TimeoutManager.TimeoutInstance.md)) => `void` |
| `options` | `Options` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `clear` | () => `void` |
| `currentIndex` | `number` |
| `duration` | `number` |
| `durationCounter` | ``null`` \| [`Timeout`](../classes/utils_TimeoutManager.Timeout.md) |
| `finished` | `boolean` |
| `pause` | () => `void` |
| `paused` | `boolean` |
| `start` | () => `void` |
| `timeoutInstances` | [`TimeoutInstance`](../interfaces/utils_TimeoutManager.TimeoutInstance.md)[] |
| `timers` | `T`[] |
| `totalDuration` | `number` |

#### Defined in

[src/utils/useTimeoutManager.tsx:17](https://github.com/MaastrichtU-IDS/perfect-graph/blob/451d41e/src/utils/useTimeoutManager.tsx#L17)
