[perfect-graph](../README.md) / [Modules](../modules.md) / [components/Container](../modules/components_Container.md) / [<internal\>](../modules/components_Container._internal_.md) / SyntheticEvent

# Interface: SyntheticEvent<T, E\>

[components/Container](../modules/components_Container.md).[<internal>](../modules/components_Container._internal_.md).SyntheticEvent

currentTarget - a reference to the element on which the event listener is registered.

target - a reference to the element from which the event was originally dispatched.
This might be a child element to the element on which the event listener is registered.
If you thought this should be `EventTarget & T`, see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Element` |
| `E` | `Event` |

## Hierarchy

- [`BaseSyntheticEvent`](components_Container._internal_.BaseSyntheticEvent.md)<`E`, `EventTarget` & `T`, `EventTarget`\>

  ↳ **`SyntheticEvent`**

  ↳↳ [`ClipboardEvent`](components_Container._internal_.ClipboardEvent.md)

  ↳↳ [`CompositionEvent`](components_Container._internal_.CompositionEvent.md)

  ↳↳ [`FocusEvent`](components_Container._internal_.FocusEvent.md)

  ↳↳ [`FormEvent`](components_Container._internal_.FormEvent.md)

  ↳↳ [`UIEvent`](components_Container._internal_.UIEvent.md)

  ↳↳ [`AnimationEvent`](components_Container._internal_.AnimationEvent.md)

  ↳↳ [`TransitionEvent`](components_Container._internal_.TransitionEvent.md)

  ↳↳ [`ChangeEvent`](components_Container._internal_.ChangeEvent.md)

## Table of contents

### Properties

- [bubbles](components_Container._internal_.SyntheticEvent.md#bubbles)
- [cancelable](components_Container._internal_.SyntheticEvent.md#cancelable)
- [currentTarget](components_Container._internal_.SyntheticEvent.md#currenttarget)
- [defaultPrevented](components_Container._internal_.SyntheticEvent.md#defaultprevented)
- [eventPhase](components_Container._internal_.SyntheticEvent.md#eventphase)
- [isTrusted](components_Container._internal_.SyntheticEvent.md#istrusted)
- [nativeEvent](components_Container._internal_.SyntheticEvent.md#nativeevent)
- [target](components_Container._internal_.SyntheticEvent.md#target)
- [timeStamp](components_Container._internal_.SyntheticEvent.md#timestamp)
- [type](components_Container._internal_.SyntheticEvent.md#type)

### Methods

- [isDefaultPrevented](components_Container._internal_.SyntheticEvent.md#isdefaultprevented)
- [isPropagationStopped](components_Container._internal_.SyntheticEvent.md#ispropagationstopped)
- [persist](components_Container._internal_.SyntheticEvent.md#persist)
- [preventDefault](components_Container._internal_.SyntheticEvent.md#preventdefault)
- [stopPropagation](components_Container._internal_.SyntheticEvent.md#stoppropagation)

## Properties

### bubbles

• **bubbles**: `boolean`

#### Inherited from

[BaseSyntheticEvent](components_Container._internal_.BaseSyntheticEvent.md).[bubbles](components_Container._internal_.BaseSyntheticEvent.md#bubbles)

#### Defined in

node_modules/@types/react/index.d.ts:1154

___

### cancelable

• **cancelable**: `boolean`

#### Inherited from

[BaseSyntheticEvent](components_Container._internal_.BaseSyntheticEvent.md).[cancelable](components_Container._internal_.BaseSyntheticEvent.md#cancelable)

#### Defined in

node_modules/@types/react/index.d.ts:1155

___

### currentTarget

• **currentTarget**: `EventTarget` & `T`

#### Inherited from

[BaseSyntheticEvent](components_Container._internal_.BaseSyntheticEvent.md).[currentTarget](components_Container._internal_.BaseSyntheticEvent.md#currenttarget)

#### Defined in

node_modules/@types/react/index.d.ts:1152

___

### defaultPrevented

• **defaultPrevented**: `boolean`

#### Inherited from

[BaseSyntheticEvent](components_Container._internal_.BaseSyntheticEvent.md).[defaultPrevented](components_Container._internal_.BaseSyntheticEvent.md#defaultprevented)

#### Defined in

node_modules/@types/react/index.d.ts:1156

___

### eventPhase

• **eventPhase**: `number`

#### Inherited from

[BaseSyntheticEvent](components_Container._internal_.BaseSyntheticEvent.md).[eventPhase](components_Container._internal_.BaseSyntheticEvent.md#eventphase)

#### Defined in

node_modules/@types/react/index.d.ts:1157

___

### isTrusted

• **isTrusted**: `boolean`

#### Inherited from

[BaseSyntheticEvent](components_Container._internal_.BaseSyntheticEvent.md).[isTrusted](components_Container._internal_.BaseSyntheticEvent.md#istrusted)

#### Defined in

node_modules/@types/react/index.d.ts:1158

___

### nativeEvent

• **nativeEvent**: `E`

#### Inherited from

[BaseSyntheticEvent](components_Container._internal_.BaseSyntheticEvent.md).[nativeEvent](components_Container._internal_.BaseSyntheticEvent.md#nativeevent)

#### Defined in

node_modules/@types/react/index.d.ts:1151

___

### target

• **target**: `EventTarget`

#### Inherited from

[BaseSyntheticEvent](components_Container._internal_.BaseSyntheticEvent.md).[target](components_Container._internal_.BaseSyntheticEvent.md#target)

#### Defined in

node_modules/@types/react/index.d.ts:1153

___

### timeStamp

• **timeStamp**: `number`

#### Inherited from

[BaseSyntheticEvent](components_Container._internal_.BaseSyntheticEvent.md).[timeStamp](components_Container._internal_.BaseSyntheticEvent.md#timestamp)

#### Defined in

node_modules/@types/react/index.d.ts:1164

___

### type

• **type**: `string`

#### Inherited from

[BaseSyntheticEvent](components_Container._internal_.BaseSyntheticEvent.md).[type](components_Container._internal_.BaseSyntheticEvent.md#type)

#### Defined in

node_modules/@types/react/index.d.ts:1165

## Methods

### isDefaultPrevented

▸ **isDefaultPrevented**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[BaseSyntheticEvent](components_Container._internal_.BaseSyntheticEvent.md).[isDefaultPrevented](components_Container._internal_.BaseSyntheticEvent.md#isdefaultprevented)

#### Defined in

node_modules/@types/react/index.d.ts:1160

___

### isPropagationStopped

▸ **isPropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[BaseSyntheticEvent](components_Container._internal_.BaseSyntheticEvent.md).[isPropagationStopped](components_Container._internal_.BaseSyntheticEvent.md#ispropagationstopped)

#### Defined in

node_modules/@types/react/index.d.ts:1162

___

### persist

▸ **persist**(): `void`

#### Returns

`void`

#### Inherited from

[BaseSyntheticEvent](components_Container._internal_.BaseSyntheticEvent.md).[persist](components_Container._internal_.BaseSyntheticEvent.md#persist)

#### Defined in

node_modules/@types/react/index.d.ts:1163

___

### preventDefault

▸ **preventDefault**(): `void`

#### Returns

`void`

#### Inherited from

[BaseSyntheticEvent](components_Container._internal_.BaseSyntheticEvent.md).[preventDefault](components_Container._internal_.BaseSyntheticEvent.md#preventdefault)

#### Defined in

node_modules/@types/react/index.d.ts:1159

___

### stopPropagation

▸ **stopPropagation**(): `void`

#### Returns

`void`

#### Inherited from

[BaseSyntheticEvent](components_Container._internal_.BaseSyntheticEvent.md).[stopPropagation](components_Container._internal_.BaseSyntheticEvent.md#stoppropagation)

#### Defined in

node_modules/@types/react/index.d.ts:1161
