[perfect-graph](../README.md) / [Modules](../modules.md) / [utils/TimeoutManager/smart-timer](../modules/utils_TimeoutManager_smart_timer.md) / TimeoutInstance

# Interface: TimeoutInstance

[utils/TimeoutManager/smart-timer](../modules/utils_TimeoutManager_smart_timer.md).TimeoutInstance

## Table of contents

### Methods

- [clear](utils_TimeoutManager_smart_timer.TimeoutInstance#clear)
- [executed](utils_TimeoutManager_smart_timer.TimeoutInstance#executed)
- [exists](utils_TimeoutManager_smart_timer.TimeoutInstance#exists)
- [lastExecuted](utils_TimeoutManager_smart_timer.TimeoutInstance#lastexecuted)
- [pause](utils_TimeoutManager_smart_timer.TimeoutInstance#pause)
- [paused](utils_TimeoutManager_smart_timer.TimeoutInstance#paused)
- [pending](utils_TimeoutManager_smart_timer.TimeoutInstance#pending)
- [remaining](utils_TimeoutManager_smart_timer.TimeoutInstance#remaining)
- [restart](utils_TimeoutManager_smart_timer.TimeoutInstance#restart)
- [resume](utils_TimeoutManager_smart_timer.TimeoutInstance#resume)
- [set](utils_TimeoutManager_smart_timer.TimeoutInstance#set)

## Methods

### clear

▸ **clear**(`erase?`): `void`

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `erase?` | `boolean` |

#### Returns

`void`

#### Defined in

[utils/TimeoutManager/smart-timer.ts:37](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/utils/TimeoutManager/smart-timer.ts#L37)

---

### executed

▸ **executed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[utils/TimeoutManager/smart-timer.ts:38](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/utils/TimeoutManager/smart-timer.ts#L38)

---

### exists

▸ **exists**(): `boolean`

#### Returns

`boolean`

#### Defined in

[utils/TimeoutManager/smart-timer.ts:39](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/utils/TimeoutManager/smart-timer.ts#L39)

---

### lastExecuted

▸ **lastExecuted**(): `Date`

#### Returns

`Date`

#### Defined in

[utils/TimeoutManager/smart-timer.ts:40](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/utils/TimeoutManager/smart-timer.ts#L40)

---

### pause

▸ **pause**(): `number` \| `boolean`

#### Returns

`number` \| `boolean`

#### Defined in

[utils/TimeoutManager/smart-timer.ts:41](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/utils/TimeoutManager/smart-timer.ts#L41)

---

### paused

▸ **paused**(): `boolean`

#### Returns

`boolean`

#### Defined in

[utils/TimeoutManager/smart-timer.ts:42](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/utils/TimeoutManager/smart-timer.ts#L42)

---

### pending

▸ **pending**(): `boolean`

#### Returns

`boolean`

#### Defined in

[utils/TimeoutManager/smart-timer.ts:43](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/utils/TimeoutManager/smart-timer.ts#L43)

---

### remaining

▸ **remaining**(): `number`

#### Returns

`number`

#### Defined in

[utils/TimeoutManager/smart-timer.ts:44](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/utils/TimeoutManager/smart-timer.ts#L44)

---

### restart

▸ **restart**(): `boolean` \| [`Checker`](../modules/utils_TimeoutManager_smart_timer._internal_#checker)

#### Returns

`boolean` \| [`Checker`](../modules/utils_TimeoutManager_smart_timer._internal_#checker)

#### Defined in

[utils/TimeoutManager/smart-timer.ts:45](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/utils/TimeoutManager/smart-timer.ts#L45)

---

### resume

▸ **resume**(): `boolean` \| [`Checker`](../modules/utils_TimeoutManager_smart_timer._internal_#checker)

#### Returns

`boolean` \| [`Checker`](../modules/utils_TimeoutManager_smart_timer._internal_#checker)

#### Defined in

[utils/TimeoutManager/smart-timer.ts:46](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/utils/TimeoutManager/smart-timer.ts#L46)

---

### set

▸ **set**(`newCallback`, `newMs?`, ...`newParams`): [`Checker`](../modules/utils_TimeoutManager_smart_timer._internal_#checker)

#### Parameters

| Name           | Type                                                                          |
| :------------- | :---------------------------------------------------------------------------- |
| `newCallback`  | [`Callback`](../modules/utils_TimeoutManager_smart_timer._internal_#callback) |
| `newMs?`       | `number`                                                                      |
| `...newParams` | `any`[]                                                                       |

#### Returns

[`Checker`](../modules/utils_TimeoutManager_smart_timer._internal_#checker)

#### Defined in

[utils/TimeoutManager/smart-timer.ts:47](https://github.com/MaastrichtU-IDS/perfect-graph/blob/7784cd6/src/utils/TimeoutManager/smart-timer.ts#L47)
