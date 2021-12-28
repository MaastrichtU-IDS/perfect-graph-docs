[perfect-graph](../README.md) / [Modules](../modules.md) / [components/Container](../modules/components_Container.md) / [<internal\>](../modules/components_Container._internal_.md) / KeyboardEvent

# Interface: KeyboardEvent<T\>

[components/Container](../modules/components_Container.md).[<internal>](../modules/components_Container._internal_.md).KeyboardEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Element` |

## Hierarchy

- [`UIEvent`](components_Container._internal_.UIEvent.md)<`T`, [`NativeKeyboardEvent`](../modules/components_Container._internal_.md#nativekeyboardevent)\>

  ↳ **`KeyboardEvent`**

## Table of contents

### Properties

- [altKey](components_Container._internal_.KeyboardEvent.md#altkey)
- [bubbles](components_Container._internal_.KeyboardEvent.md#bubbles)
- [cancelable](components_Container._internal_.KeyboardEvent.md#cancelable)
- [charCode](components_Container._internal_.KeyboardEvent.md#charcode)
- [code](components_Container._internal_.KeyboardEvent.md#code)
- [ctrlKey](components_Container._internal_.KeyboardEvent.md#ctrlkey)
- [currentTarget](components_Container._internal_.KeyboardEvent.md#currenttarget)
- [defaultPrevented](components_Container._internal_.KeyboardEvent.md#defaultprevented)
- [detail](components_Container._internal_.KeyboardEvent.md#detail)
- [eventPhase](components_Container._internal_.KeyboardEvent.md#eventphase)
- [isTrusted](components_Container._internal_.KeyboardEvent.md#istrusted)
- [key](components_Container._internal_.KeyboardEvent.md#key)
- [keyCode](components_Container._internal_.KeyboardEvent.md#keycode)
- [locale](components_Container._internal_.KeyboardEvent.md#locale)
- [location](components_Container._internal_.KeyboardEvent.md#location)
- [metaKey](components_Container._internal_.KeyboardEvent.md#metakey)
- [nativeEvent](components_Container._internal_.KeyboardEvent.md#nativeevent)
- [repeat](components_Container._internal_.KeyboardEvent.md#repeat)
- [shiftKey](components_Container._internal_.KeyboardEvent.md#shiftkey)
- [target](components_Container._internal_.KeyboardEvent.md#target)
- [timeStamp](components_Container._internal_.KeyboardEvent.md#timestamp)
- [type](components_Container._internal_.KeyboardEvent.md#type)
- [view](components_Container._internal_.KeyboardEvent.md#view)
- [which](components_Container._internal_.KeyboardEvent.md#which)

### Methods

- [getModifierState](components_Container._internal_.KeyboardEvent.md#getmodifierstate)
- [isDefaultPrevented](components_Container._internal_.KeyboardEvent.md#isdefaultprevented)
- [isPropagationStopped](components_Container._internal_.KeyboardEvent.md#ispropagationstopped)
- [persist](components_Container._internal_.KeyboardEvent.md#persist)
- [preventDefault](components_Container._internal_.KeyboardEvent.md#preventdefault)
- [stopPropagation](components_Container._internal_.KeyboardEvent.md#stoppropagation)

## Properties

### altKey

• **altKey**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1219

___

### bubbles

• **bubbles**: `boolean`

#### Inherited from

[UIEvent](components_Container._internal_.UIEvent.md).[bubbles](components_Container._internal_.UIEvent.md#bubbles)

#### Defined in

node_modules/@types/react/index.d.ts:1154

___

### cancelable

• **cancelable**: `boolean`

#### Inherited from

[UIEvent](components_Container._internal_.UIEvent.md).[cancelable](components_Container._internal_.UIEvent.md#cancelable)

#### Defined in

node_modules/@types/react/index.d.ts:1155

___

### charCode

• **charCode**: `number`

**`deprecated`**

#### Defined in

node_modules/@types/react/index.d.ts:1221

___

### code

• **code**: `string`

#### Defined in

node_modules/@types/react/index.d.ts:1223

___

### ctrlKey

• **ctrlKey**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1222

___

### currentTarget

• **currentTarget**: `EventTarget` & `T`

#### Inherited from

[UIEvent](components_Container._internal_.UIEvent.md).[currentTarget](components_Container._internal_.UIEvent.md#currenttarget)

#### Defined in

node_modules/@types/react/index.d.ts:1152

___

### defaultPrevented

• **defaultPrevented**: `boolean`

#### Inherited from

[UIEvent](components_Container._internal_.UIEvent.md).[defaultPrevented](components_Container._internal_.UIEvent.md#defaultprevented)

#### Defined in

node_modules/@types/react/index.d.ts:1156

___

### detail

• **detail**: `number`

#### Inherited from

[UIEvent](components_Container._internal_.UIEvent.md).[detail](components_Container._internal_.UIEvent.md#detail)

#### Defined in

node_modules/@types/react/index.d.ts:1280

___

### eventPhase

• **eventPhase**: `number`

#### Inherited from

[UIEvent](components_Container._internal_.UIEvent.md).[eventPhase](components_Container._internal_.UIEvent.md#eventphase)

#### Defined in

node_modules/@types/react/index.d.ts:1157

___

### isTrusted

• **isTrusted**: `boolean`

#### Inherited from

[UIEvent](components_Container._internal_.UIEvent.md).[isTrusted](components_Container._internal_.UIEvent.md#istrusted)

#### Defined in

node_modules/@types/react/index.d.ts:1158

___

### key

• **key**: `string`

See the [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#named-key-attribute-values). for possible values

#### Defined in

node_modules/@types/react/index.d.ts:1231

___

### keyCode

• **keyCode**: `number`

**`deprecated`**

#### Defined in

node_modules/@types/react/index.d.ts:1233

___

### locale

• **locale**: `string`

#### Defined in

node_modules/@types/react/index.d.ts:1234

___

### location

• **location**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1235

___

### metaKey

• **metaKey**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1236

___

### nativeEvent

• **nativeEvent**: `KeyboardEvent`

#### Inherited from

[UIEvent](components_Container._internal_.UIEvent.md).[nativeEvent](components_Container._internal_.UIEvent.md#nativeevent)

#### Defined in

node_modules/@types/react/index.d.ts:1151

___

### repeat

• **repeat**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1237

___

### shiftKey

• **shiftKey**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1238

___

### target

• **target**: `EventTarget`

#### Inherited from

[UIEvent](components_Container._internal_.UIEvent.md).[target](components_Container._internal_.UIEvent.md#target)

#### Defined in

node_modules/@types/react/index.d.ts:1153

___

### timeStamp

• **timeStamp**: `number`

#### Inherited from

[UIEvent](components_Container._internal_.UIEvent.md).[timeStamp](components_Container._internal_.UIEvent.md#timestamp)

#### Defined in

node_modules/@types/react/index.d.ts:1164

___

### type

• **type**: `string`

#### Inherited from

[UIEvent](components_Container._internal_.UIEvent.md).[type](components_Container._internal_.UIEvent.md#type)

#### Defined in

node_modules/@types/react/index.d.ts:1165

___

### view

• **view**: [`AbstractView`](components_Container._internal_.AbstractView.md)

#### Inherited from

[UIEvent](components_Container._internal_.UIEvent.md).[view](components_Container._internal_.UIEvent.md#view)

#### Defined in

node_modules/@types/react/index.d.ts:1281

___

### which

• **which**: `number`

**`deprecated`**

#### Defined in

node_modules/@types/react/index.d.ts:1240

## Methods

### getModifierState

▸ **getModifierState**(`key`): `boolean`

See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1227

___

### isDefaultPrevented

▸ **isDefaultPrevented**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[UIEvent](components_Container._internal_.UIEvent.md).[isDefaultPrevented](components_Container._internal_.UIEvent.md#isdefaultprevented)

#### Defined in

node_modules/@types/react/index.d.ts:1160

___

### isPropagationStopped

▸ **isPropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[UIEvent](components_Container._internal_.UIEvent.md).[isPropagationStopped](components_Container._internal_.UIEvent.md#ispropagationstopped)

#### Defined in

node_modules/@types/react/index.d.ts:1162

___

### persist

▸ **persist**(): `void`

#### Returns

`void`

#### Inherited from

[UIEvent](components_Container._internal_.UIEvent.md).[persist](components_Container._internal_.UIEvent.md#persist)

#### Defined in

node_modules/@types/react/index.d.ts:1163

___

### preventDefault

▸ **preventDefault**(): `void`

#### Returns

`void`

#### Inherited from

[UIEvent](components_Container._internal_.UIEvent.md).[preventDefault](components_Container._internal_.UIEvent.md#preventdefault)

#### Defined in

node_modules/@types/react/index.d.ts:1159

___

### stopPropagation

▸ **stopPropagation**(): `void`

#### Returns

`void`

#### Inherited from

[UIEvent](components_Container._internal_.UIEvent.md).[stopPropagation](components_Container._internal_.UIEvent.md#stoppropagation)

#### Defined in

node_modules/@types/react/index.d.ts:1161
