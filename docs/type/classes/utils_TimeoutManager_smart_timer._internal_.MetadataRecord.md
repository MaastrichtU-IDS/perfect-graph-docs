[perfect-graph](../README.md) / [Modules](../modules.md) / [utils/TimeoutManager/smart-timer](../modules/utils_TimeoutManager_smart_timer.md) / [<internal\>](../modules/utils_TimeoutManager_smart_timer._internal_.md) / MetadataRecord

# Class: MetadataRecord

[utils/TimeoutManager/smart-timer](../modules/utils_TimeoutManager_smart_timer.md).[<internal>](../modules/utils_TimeoutManager_smart_timer._internal_.md).MetadataRecord

## Table of contents

### Constructors

- [constructor](utils_TimeoutManager_smart_timer._internal_.MetadataRecord.md#constructor)

### Properties

- [callback](utils_TimeoutManager_smart_timer._internal_.MetadataRecord.md#callback)
- [executedTime](utils_TimeoutManager_smart_timer._internal_.MetadataRecord.md#executedtime)
- [key](utils_TimeoutManager_smart_timer._internal_.MetadataRecord.md#key)
- [ms](utils_TimeoutManager_smart_timer._internal_.MetadataRecord.md#ms)
- [params](utils_TimeoutManager_smart_timer._internal_.MetadataRecord.md#params)
- [paused](utils_TimeoutManager_smart_timer._internal_.MetadataRecord.md#paused)
- [startTime](utils_TimeoutManager_smart_timer._internal_.MetadataRecord.md#starttime)
- [timeSpentWaiting](utils_TimeoutManager_smart_timer._internal_.MetadataRecord.md#timespentwaiting)

## Constructors

### constructor

• **new MetadataRecord**(`callback`, `key`, `ms`, `params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`Callback`](../modules/utils_TimeoutManager_smart_timer._internal_.md#callback) |
| `key` | `string` |
| `ms` | `number` |
| `params` | `any`[] |

#### Defined in

[src/utils/TimeoutManager/smart-timer.ts:23](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/TimeoutManager/smart-timer.ts#L23)

## Properties

### callback

• **callback**: [`Callback`](../modules/utils_TimeoutManager_smart_timer._internal_.md#callback)

___

### executedTime

• **executedTime**: `number`

#### Defined in

[src/utils/TimeoutManager/smart-timer.ts:15](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/TimeoutManager/smart-timer.ts#L15)

___

### key

• **key**: `string`

___

### ms

• **ms**: `number`

___

### params

• **params**: `any`[]

___

### paused

• **paused**: `boolean` = `false`

#### Defined in

[src/utils/TimeoutManager/smart-timer.ts:17](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/TimeoutManager/smart-timer.ts#L17)

___

### startTime

• **startTime**: `number`

#### Defined in

[src/utils/TimeoutManager/smart-timer.ts:19](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/TimeoutManager/smart-timer.ts#L19)

___

### timeSpentWaiting

• **timeSpentWaiting**: `number` = `0`

#### Defined in

[src/utils/TimeoutManager/smart-timer.ts:21](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/utils/TimeoutManager/smart-timer.ts#L21)
