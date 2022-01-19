[perfect-graph](../README.md) / [Modules](../modules.md) / utils/TimeoutManager

# Module: utils/TimeoutManager

## Table of contents

### References

- [Timeout](utils_TimeoutManager#timeout)
- [TimeoutInstance](utils_TimeoutManager#timeoutinstance)

### Type aliases

- [Options](utils_TimeoutManager#options)
- [TimeoutManager](utils_TimeoutManager#timeoutmanager)
- [Timer](utils_TimeoutManager#timer)

### Functions

- [createTimeoutManager](utils_TimeoutManager#createtimeoutmanager)

## References

### Timeout

Re-exports [Timeout](../classes/utils_TimeoutManager_smart_timer.Timeout.md)

---

### TimeoutInstance

Re-exports [TimeoutInstance](../interfaces/utils_TimeoutManager_smart_timer.TimeoutInstance.md)

## Type aliases

### Options

Ƭ **Options**: `Object`

#### Type declaration

| Name             | Type         |
| :--------------- | :----------- |
| `autostart?`     | `boolean`    |
| `onFinish?`      | () => `void` |
| `onPlayChanged?` | () => `void` |

#### Defined in

[utils/TimeoutManager/index.ts:14](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/utils/TimeoutManager/index.ts#L14)

---

### TimeoutManager

Ƭ **TimeoutManager**: `ReturnType`<typeof [`createTimeoutManager`](utils_TimeoutManager#createtimeoutmanager)\>

#### Defined in

[utils/TimeoutManager/index.ts:110](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/utils/TimeoutManager/index.ts#L110)

---

### Timer

Ƭ **Timer**<`T`\>: { `after`: `number` } & `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[utils/TimeoutManager/index.ts:6](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/utils/TimeoutManager/index.ts#L6)

## Functions

### createTimeoutManager

▸ `Const` **createTimeoutManager**<`T`\>(`timers?`, `callback`, `options?`): `Object`

#### Type parameters

| Name | Type                                                                       |
| :--- | :------------------------------------------------------------------------- |
| `T`  | extends [`Timer`](utils_TimeoutManager#timer)<`Record`<`string`, `any`\>\> |

#### Parameters

| Name       | Type                                                                                                                                           | Default value |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------- | :------------ |
| `timers`   | `T`[]                                                                                                                                          | `[]`          |
| `callback` | (`timer`: `T`, `index`: `number`, `timeout`: [`TimeoutInstance`](../interfaces/utils_TimeoutManager_smart_timer.TimeoutInstance.md)) => `void` | `undefined`   |
| `options`  | [`Options`](utils_TimeoutManager#options)                                                                                                      | `{}`          |

#### Returns

`Object`

| Name               | Type                                                                                     |
| :----------------- | :--------------------------------------------------------------------------------------- |
| `clear`            | () => `void`                                                                             |
| `currentIndex`     | `number`                                                                                 |
| `duration`         | `number`                                                                                 |
| `durationCounter`  | `null` \| [`Timeout`](../classes/utils_TimeoutManager_smart_timer.Timeout.md)            |
| `finished`         | `boolean`                                                                                |
| `pause`            | () => `void`                                                                             |
| `paused`           | `boolean`                                                                                |
| `start`            | () => `void`                                                                             |
| `timeoutInstances` | [`TimeoutInstance`](../interfaces/utils_TimeoutManager_smart_timer.TimeoutInstance.md)[] |
| `timers`           | `T`[]                                                                                    |
| `totalDuration`    | `number`                                                                                 |

#### Defined in

[utils/TimeoutManager/index.ts:19](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/utils/TimeoutManager/index.ts#L19)
