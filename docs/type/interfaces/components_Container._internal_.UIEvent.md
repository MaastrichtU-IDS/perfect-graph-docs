[perfect-graph](../README.md) / [Modules](../modules.md) / [components/Container](../modules/components_Container.md) / [<internal\>](../modules/components_Container._internal_.md) / UIEvent

# Interface: UIEvent<T, E\>

[components/Container](../modules/components_Container.md).[<internal>](../modules/components_Container._internal_.md).UIEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Element` |
| `E` | [`NativeUIEvent`](../modules/components_Container._internal_.md#nativeuievent) |

## Hierarchy

- [`SyntheticEvent`](components_Container._internal_.SyntheticEvent.md)<`T`, `E`\>

  ↳ **`UIEvent`**

  ↳↳ [`KeyboardEvent`](components_Container._internal_.KeyboardEvent.md)

  ↳↳ [`MouseEvent`](components_Container._internal_.MouseEvent.md)

  ↳↳ [`TouchEvent`](components_Container._internal_.TouchEvent.md)

## Table of contents

### Properties

- [bubbles](components_Container._internal_.UIEvent.md#bubbles)
- [cancelable](components_Container._internal_.UIEvent.md#cancelable)
- [currentTarget](components_Container._internal_.UIEvent.md#currenttarget)
- [defaultPrevented](components_Container._internal_.UIEvent.md#defaultprevented)
- [detail](components_Container._internal_.UIEvent.md#detail)
- [eventPhase](components_Container._internal_.UIEvent.md#eventphase)
- [isTrusted](components_Container._internal_.UIEvent.md#istrusted)
- [nativeEvent](components_Container._internal_.UIEvent.md#nativeevent)
- [target](components_Container._internal_.UIEvent.md#target)
- [timeStamp](components_Container._internal_.UIEvent.md#timestamp)
- [type](components_Container._internal_.UIEvent.md#type)
- [view](components_Container._internal_.UIEvent.md#view)

### Methods

- [isDefaultPrevented](components_Container._internal_.UIEvent.md#isdefaultprevented)
- [isPropagationStopped](components_Container._internal_.UIEvent.md#ispropagationstopped)
- [persist](components_Container._internal_.UIEvent.md#persist)
- [preventDefault](components_Container._internal_.UIEvent.md#preventdefault)
- [stopPropagation](components_Container._internal_.UIEvent.md#stoppropagation)

## Properties

### bubbles

• **bubbles**: `boolean`

#### Inherited from

[SyntheticEvent](components_Container._internal_.SyntheticEvent.md).[bubbles](components_Container._internal_.SyntheticEvent.md#bubbles)

#### Defined in

node_modules/@types/react/index.d.ts:1154

___

### cancelable

• **cancelable**: `boolean`

#### Inherited from

[SyntheticEvent](components_Container._internal_.SyntheticEvent.md).[cancelable](components_Container._internal_.SyntheticEvent.md#cancelable)

#### Defined in

node_modules/@types/react/index.d.ts:1155

___

### currentTarget

• **currentTarget**: `EventTarget` & `T`

#### Inherited from

[SyntheticEvent](components_Container._internal_.SyntheticEvent.md).[currentTarget](components_Container._internal_.SyntheticEvent.md#currenttarget)

#### Defined in

node_modules/@types/react/index.d.ts:1152

___

### defaultPrevented

• **defaultPrevented**: `boolean`

#### Inherited from

[SyntheticEvent](components_Container._internal_.SyntheticEvent.md).[defaultPrevented](components_Container._internal_.SyntheticEvent.md#defaultprevented)

#### Defined in

node_modules/@types/react/index.d.ts:1156

___

### detail

• **detail**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1280

___

### eventPhase

• **eventPhase**: `number`

#### Inherited from

[SyntheticEvent](components_Container._internal_.SyntheticEvent.md).[eventPhase](components_Container._internal_.SyntheticEvent.md#eventphase)

#### Defined in

node_modules/@types/react/index.d.ts:1157

___

### isTrusted

• **isTrusted**: `boolean`

#### Inherited from

[SyntheticEvent](components_Container._internal_.SyntheticEvent.md).[isTrusted](components_Container._internal_.SyntheticEvent.md#istrusted)

#### Defined in

node_modules/@types/react/index.d.ts:1158

___

### nativeEvent

• **nativeEvent**: `E`

#### Inherited from

[SyntheticEvent](components_Container._internal_.SyntheticEvent.md).[nativeEvent](components_Container._internal_.SyntheticEvent.md#nativeevent)

#### Defined in

node_modules/@types/react/index.d.ts:1151

___

### target

• **target**: `EventTarget`

#### Inherited from

[SyntheticEvent](components_Container._internal_.SyntheticEvent.md).[target](components_Container._internal_.SyntheticEvent.md#target)

#### Defined in

node_modules/@types/react/index.d.ts:1153

___

### timeStamp

• **timeStamp**: `number`

#### Inherited from

[SyntheticEvent](components_Container._internal_.SyntheticEvent.md).[timeStamp](components_Container._internal_.SyntheticEvent.md#timestamp)

#### Defined in

node_modules/@types/react/index.d.ts:1164

___

### type

• **type**: `string`

#### Inherited from

[SyntheticEvent](components_Container._internal_.SyntheticEvent.md).[type](components_Container._internal_.SyntheticEvent.md#type)

#### Defined in

node_modules/@types/react/index.d.ts:1165

___

### view

• **view**: [`AbstractView`](components_Container._internal_.AbstractView.md)

#### Defined in

node_modules/@types/react/index.d.ts:1281

## Methods

### isDefaultPrevented

▸ **isDefaultPrevented**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[SyntheticEvent](components_Container._internal_.SyntheticEvent.md).[isDefaultPrevented](components_Container._internal_.SyntheticEvent.md#isdefaultprevented)

#### Defined in

node_modules/@types/react/index.d.ts:1160

___

### isPropagationStopped

▸ **isPropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[SyntheticEvent](components_Container._internal_.SyntheticEvent.md).[isPropagationStopped](components_Container._internal_.SyntheticEvent.md#ispropagationstopped)

#### Defined in

node_modules/@types/react/index.d.ts:1162

___

### persist

▸ **persist**(): `void`

#### Returns

`void`

#### Inherited from

[SyntheticEvent](components_Container._internal_.SyntheticEvent.md).[persist](components_Container._internal_.SyntheticEvent.md#persist)

#### Defined in

node_modules/@types/react/index.d.ts:1163

___

### preventDefault

▸ **preventDefault**(): `void`

#### Returns

`void`

#### Inherited from

[SyntheticEvent](components_Container._internal_.SyntheticEvent.md).[preventDefault](components_Container._internal_.SyntheticEvent.md#preventdefault)

#### Defined in

node_modules/@types/react/index.d.ts:1159

___

### stopPropagation

▸ **stopPropagation**(): `void`

#### Returns

`void`

#### Inherited from

[SyntheticEvent](components_Container._internal_.SyntheticEvent.md).[stopPropagation](components_Container._internal_.SyntheticEvent.md#stoppropagation)

#### Defined in

node_modules/@types/react/index.d.ts:1161
