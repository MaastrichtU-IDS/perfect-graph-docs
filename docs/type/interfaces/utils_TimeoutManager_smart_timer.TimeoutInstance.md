[perfect-graph](../README.md) / [Modules](../modules.md) / [utils/TimeoutManager/smart-timer](../modules/utils_TimeoutManager_smart_timer.md) / TimeoutInstance

# Interface: TimeoutInstance

[utils/TimeoutManager/smart-timer](../modules/utils_TimeoutManager_smart_timer.md).TimeoutInstance

## Table of contents

### Methods

- [clear](utils_TimeoutManager_smart_timer.TimeoutInstance.md#clear)
- [executed](utils_TimeoutManager_smart_timer.TimeoutInstance.md#executed)
- [exists](utils_TimeoutManager_smart_timer.TimeoutInstance.md#exists)
- [lastExecuted](utils_TimeoutManager_smart_timer.TimeoutInstance.md#lastexecuted)
- [pause](utils_TimeoutManager_smart_timer.TimeoutInstance.md#pause)
- [paused](utils_TimeoutManager_smart_timer.TimeoutInstance.md#paused)
- [pending](utils_TimeoutManager_smart_timer.TimeoutInstance.md#pending)
- [remaining](utils_TimeoutManager_smart_timer.TimeoutInstance.md#remaining)
- [restart](utils_TimeoutManager_smart_timer.TimeoutInstance.md#restart)
- [resume](utils_TimeoutManager_smart_timer.TimeoutInstance.md#resume)
- [set](utils_TimeoutManager_smart_timer.TimeoutInstance.md#set)

## Methods

### clear

▸ **clear**(`erase?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `erase?` | `boolean` |

#### Returns

`void`

#### Defined in

[utils/TimeoutManager/smart-timer.ts:37](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/utils/TimeoutManager/smart-timer.ts#L37)

___

### executed

▸ **executed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[utils/TimeoutManager/smart-timer.ts:38](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/utils/TimeoutManager/smart-timer.ts#L38)

___

### exists

▸ **exists**(): `boolean`

#### Returns

`boolean`

#### Defined in

[utils/TimeoutManager/smart-timer.ts:39](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/utils/TimeoutManager/smart-timer.ts#L39)

___

### lastExecuted

▸ **lastExecuted**(): `Date`

#### Returns

`Date`

#### Defined in

[utils/TimeoutManager/smart-timer.ts:40](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/utils/TimeoutManager/smart-timer.ts#L40)

___

### pause

▸ **pause**(): `number` \| `boolean`

#### Returns

`number` \| `boolean`

#### Defined in

[utils/TimeoutManager/smart-timer.ts:41](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/utils/TimeoutManager/smart-timer.ts#L41)

___

### paused

▸ **paused**(): `boolean`

#### Returns

`boolean`

#### Defined in

[utils/TimeoutManager/smart-timer.ts:42](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/utils/TimeoutManager/smart-timer.ts#L42)

___

### pending

▸ **pending**(): `boolean`

#### Returns

`boolean`

#### Defined in

[utils/TimeoutManager/smart-timer.ts:43](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/utils/TimeoutManager/smart-timer.ts#L43)

___

### remaining

▸ **remaining**(): `number`

#### Returns

`number`

#### Defined in

[utils/TimeoutManager/smart-timer.ts:44](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/utils/TimeoutManager/smart-timer.ts#L44)

___

### restart

▸ **restart**(): `boolean` \| `Checker`

#### Returns

`boolean` \| `Checker`

#### Defined in

[utils/TimeoutManager/smart-timer.ts:45](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/utils/TimeoutManager/smart-timer.ts#L45)

___

### resume

▸ **resume**(): `boolean` \| `Checker`

#### Returns

`boolean` \| `Checker`

#### Defined in

[utils/TimeoutManager/smart-timer.ts:46](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/utils/TimeoutManager/smart-timer.ts#L46)

___

### set

▸ **set**(`newCallback`, `newMs?`, ...`newParams`): `Checker`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newCallback` | `Callback` |
| `newMs?` | `number` |
| `...newParams` | `any`[] |

#### Returns

`Checker`

#### Defined in

[utils/TimeoutManager/smart-timer.ts:47](https://github.com/MaastrichtU-IDS/perfect-graph/blob/c07a48d/src/utils/TimeoutManager/smart-timer.ts#L47)
