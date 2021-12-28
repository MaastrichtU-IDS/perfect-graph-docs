[perfect-graph](../README.md) / [Modules](../modules.md) / [utils/TimeoutManager/smart-timer](../modules/utils_TimeoutManager_smart_timer.md) / Timeout

# Class: Timeout

[utils/TimeoutManager/smart-timer](../modules/utils_TimeoutManager_smart_timer.md).Timeout

## Table of contents

### Constructors

- [constructor](utils_TimeoutManager_smart_timer.Timeout.md#constructor)

### Properties

- [keyId](utils_TimeoutManager_smart_timer.Timeout.md#keyid)
- [metadata](utils_TimeoutManager_smart_timer.Timeout.md#metadata)
- [originalMs](utils_TimeoutManager_smart_timer.Timeout.md#originalms)

### Methods

- [clear](utils_TimeoutManager_smart_timer.Timeout.md#clear)
- [create](utils_TimeoutManager_smart_timer.Timeout.md#create)
- [executed](utils_TimeoutManager_smart_timer.Timeout.md#executed)
- [exists](utils_TimeoutManager_smart_timer.Timeout.md#exists)
- [instantiate](utils_TimeoutManager_smart_timer.Timeout.md#instantiate)
- [lastExecuted](utils_TimeoutManager_smart_timer.Timeout.md#lastexecuted)
- [pause](utils_TimeoutManager_smart_timer.Timeout.md#pause)
- [paused](utils_TimeoutManager_smart_timer.Timeout.md#paused)
- [pending](utils_TimeoutManager_smart_timer.Timeout.md#pending)
- [remaining](utils_TimeoutManager_smart_timer.Timeout.md#remaining)
- [restart](utils_TimeoutManager_smart_timer.Timeout.md#restart)
- [resume](utils_TimeoutManager_smart_timer.Timeout.md#resume)
- [set](utils_TimeoutManager_smart_timer.Timeout.md#set)

## Constructors

### constructor

• **new Timeout**()

## Properties

### keyId

▪ `Static` `Private` **keyId**: [`KeyId`](../interfaces/utils_TimeoutManager_smart_timer._internal_.KeyId.md) = `{}`

#### Defined in

[src/utils/TimeoutManager/smart-timer.ts:51](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/TimeoutManager/smart-timer.ts#L51)

___

### metadata

▪ `Static` `Private` **metadata**: [`Metadata`](../interfaces/utils_TimeoutManager_smart_timer._internal_.Metadata.md) = `{}`

#### Defined in

[src/utils/TimeoutManager/smart-timer.ts:55](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/TimeoutManager/smart-timer.ts#L55)

___

### originalMs

▪ `Static` `Private` **originalMs**: [`OriginalMs`](../interfaces/utils_TimeoutManager_smart_timer._internal_.OriginalMs.md) = `{}`

#### Defined in

[src/utils/TimeoutManager/smart-timer.ts:53](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/TimeoutManager/smart-timer.ts#L53)

## Methods

### clear

▸ `Static` **clear**(`key`, `erase?`): `void`

clear timeout and optionally erase all knowledge of its existence

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `erase` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[src/utils/TimeoutManager/smart-timer.ts:62](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/TimeoutManager/smart-timer.ts#L62)

___

### create

▸ `Static` **create**(`key`, `callback`, `ms`, ...`params`): `boolean` \| [`Checker`](../modules/utils_TimeoutManager_smart_timer._internal_.md#checker)

same as set() except returns false if timeout already exists

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `callback` | [`Callback`](../modules/utils_TimeoutManager_smart_timer._internal_.md#callback) |
| `ms` | `number` |
| `...params` | `any`[] |

#### Returns

`boolean` \| [`Checker`](../modules/utils_TimeoutManager_smart_timer._internal_.md#checker)

#### Defined in

[src/utils/TimeoutManager/smart-timer.ts:136](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/TimeoutManager/smart-timer.ts#L136)

▸ `Static` **create**(`callback`, `ms`, ...`params`): `boolean` \| [`Checker`](../modules/utils_TimeoutManager_smart_timer._internal_.md#checker)

same as set() except returns false if timeout already exists

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`Callback`](../modules/utils_TimeoutManager_smart_timer._internal_.md#callback) |
| `ms` | `number` |
| `...params` | `any`[] |

#### Returns

`boolean` \| [`Checker`](../modules/utils_TimeoutManager_smart_timer._internal_.md#checker)

#### Defined in

[src/utils/TimeoutManager/smart-timer.ts:143](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/TimeoutManager/smart-timer.ts#L143)

___

### executed

▸ `Static` **executed**(`key`): `boolean`

test if a timeout has run

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/TimeoutManager/smart-timer.ts:173](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/TimeoutManager/smart-timer.ts#L173)

___

### exists

▸ `Static` **exists**(`key`): `boolean`

timeout has been created

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/TimeoutManager/smart-timer.ts:165](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/TimeoutManager/smart-timer.ts#L165)

___

### instantiate

▸ `Static` **instantiate**(`callback`, `ms?`, ...`params`): [`TimeoutInstance`](../interfaces/utils_TimeoutManager_smart_timer.TimeoutInstance.md)

instantiate timeout to handle as object

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `callback` | [`Callback`](../modules/utils_TimeoutManager_smart_timer._internal_.md#callback) | `undefined` |
| `ms` | `number` | `0` |
| `...params` | `any`[] | `undefined` |

#### Returns

[`TimeoutInstance`](../interfaces/utils_TimeoutManager_smart_timer.TimeoutInstance.md)

#### Defined in

[src/utils/TimeoutManager/smart-timer.ts:281](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/TimeoutManager/smart-timer.ts#L281)

___

### lastExecuted

▸ `Static` **lastExecuted**(`key`): `Date`

when timeout was last executed

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Date`

#### Defined in

[src/utils/TimeoutManager/smart-timer.ts:181](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/TimeoutManager/smart-timer.ts#L181)

___

### pause

▸ `Static` **pause**(`key`): `number` \| `boolean`

pause our execution countdown until we're ready for it to resume

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`number` \| `boolean`

#### Defined in

[src/utils/TimeoutManager/smart-timer.ts:241](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/TimeoutManager/smart-timer.ts#L241)

___

### paused

▸ `Static` **paused**(`key`): `boolean`

timeout does exist, but will not execute because it is paused

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/TimeoutManager/smart-timer.ts:199](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/TimeoutManager/smart-timer.ts#L199)

___

### pending

▸ `Static` **pending**(`key`): `boolean`

timeout does exist, but has not yet run

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/TimeoutManager/smart-timer.ts:191](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/TimeoutManager/smart-timer.ts#L191)

___

### remaining

▸ `Static` **remaining**(`key`): `number`

remaining time until timeout will occur

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`number`

#### Defined in

[src/utils/TimeoutManager/smart-timer.ts:209](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/TimeoutManager/smart-timer.ts#L209)

___

### restart

▸ `Static` **restart**(`key`): `boolean` \| [`Checker`](../modules/utils_TimeoutManager_smart_timer._internal_.md#checker)

restart timeout with original time

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean` \| [`Checker`](../modules/utils_TimeoutManager_smart_timer._internal_.md#checker)

#### Defined in

[src/utils/TimeoutManager/smart-timer.ts:223](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/TimeoutManager/smart-timer.ts#L223)

___

### resume

▸ `Static` **resume**(`key`): `boolean` \| [`Checker`](../modules/utils_TimeoutManager_smart_timer._internal_.md#checker)

resume paused Timeout with the remaining time

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean` \| [`Checker`](../modules/utils_TimeoutManager_smart_timer._internal_.md#checker)

#### Defined in

[src/utils/TimeoutManager/smart-timer.ts:258](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/TimeoutManager/smart-timer.ts#L258)

___

### set

▸ `Static` **set**(`key`, `callback`, `ms`, ...`params`): [`Checker`](../modules/utils_TimeoutManager_smart_timer._internal_.md#checker)

returns a function allowing you to test if it has executed

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `callback` | [`Callback`](../modules/utils_TimeoutManager_smart_timer._internal_.md#callback) |
| `ms` | `number` |
| `...params` | `any`[] |

#### Returns

[`Checker`](../modules/utils_TimeoutManager_smart_timer._internal_.md#checker)

#### Defined in

[src/utils/TimeoutManager/smart-timer.ts:79](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/TimeoutManager/smart-timer.ts#L79)

▸ `Static` **set**(`callback`, `ms`, ...`params`): [`Checker`](../modules/utils_TimeoutManager_smart_timer._internal_.md#checker)

returns a function allowing you to test if it has executed

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`Callback`](../modules/utils_TimeoutManager_smart_timer._internal_.md#callback) |
| `ms` | `number` |
| `...params` | `any`[] |

#### Returns

[`Checker`](../modules/utils_TimeoutManager_smart_timer._internal_.md#checker)

#### Defined in

[src/utils/TimeoutManager/smart-timer.ts:86](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/TimeoutManager/smart-timer.ts#L86)

▸ `Static` **set**(...`args`): [`Checker`](../modules/utils_TimeoutManager_smart_timer._internal_.md#checker)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

[`Checker`](../modules/utils_TimeoutManager_smart_timer._internal_.md#checker)

#### Defined in

[src/utils/TimeoutManager/smart-timer.ts:87](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/TimeoutManager/smart-timer.ts#L87)
