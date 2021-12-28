[perfect-graph](../README.md) / [Modules](../modules.md) / [components/Container](../modules/components_Container.md) / [<internal\>](../modules/components_Container._internal_.md) / BaseSyntheticEvent

# Interface: BaseSyntheticEvent<E, C, T\>

[components/Container](../modules/components_Container.md).[<internal>](../modules/components_Container._internal_.md).BaseSyntheticEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | `object` |
| `C` | `any` |
| `T` | `any` |

## Hierarchy

- **`BaseSyntheticEvent`**

  ↳ [`SyntheticEvent`](components_Container._internal_.SyntheticEvent.md)

## Table of contents

### Properties

- [bubbles](components_Container._internal_.BaseSyntheticEvent.md#bubbles)
- [cancelable](components_Container._internal_.BaseSyntheticEvent.md#cancelable)
- [currentTarget](components_Container._internal_.BaseSyntheticEvent.md#currenttarget)
- [defaultPrevented](components_Container._internal_.BaseSyntheticEvent.md#defaultprevented)
- [eventPhase](components_Container._internal_.BaseSyntheticEvent.md#eventphase)
- [isTrusted](components_Container._internal_.BaseSyntheticEvent.md#istrusted)
- [nativeEvent](components_Container._internal_.BaseSyntheticEvent.md#nativeevent)
- [target](components_Container._internal_.BaseSyntheticEvent.md#target)
- [timeStamp](components_Container._internal_.BaseSyntheticEvent.md#timestamp)
- [type](components_Container._internal_.BaseSyntheticEvent.md#type)

### Methods

- [isDefaultPrevented](components_Container._internal_.BaseSyntheticEvent.md#isdefaultprevented)
- [isPropagationStopped](components_Container._internal_.BaseSyntheticEvent.md#ispropagationstopped)
- [persist](components_Container._internal_.BaseSyntheticEvent.md#persist)
- [preventDefault](components_Container._internal_.BaseSyntheticEvent.md#preventdefault)
- [stopPropagation](components_Container._internal_.BaseSyntheticEvent.md#stoppropagation)

## Properties

### bubbles

• **bubbles**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1154

___

### cancelable

• **cancelable**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1155

___

### currentTarget

• **currentTarget**: `C`

#### Defined in

node_modules/@types/react/index.d.ts:1152

___

### defaultPrevented

• **defaultPrevented**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1156

___

### eventPhase

• **eventPhase**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1157

___

### isTrusted

• **isTrusted**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1158

___

### nativeEvent

• **nativeEvent**: `E`

#### Defined in

node_modules/@types/react/index.d.ts:1151

___

### target

• **target**: `T`

#### Defined in

node_modules/@types/react/index.d.ts:1153

___

### timeStamp

• **timeStamp**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1164

___

### type

• **type**: `string`

#### Defined in

node_modules/@types/react/index.d.ts:1165

## Methods

### isDefaultPrevented

▸ **isDefaultPrevented**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1160

___

### isPropagationStopped

▸ **isPropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1162

___

### persist

▸ **persist**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/react/index.d.ts:1163

___

### preventDefault

▸ **preventDefault**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/react/index.d.ts:1159

___

### stopPropagation

▸ **stopPropagation**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/react/index.d.ts:1161
