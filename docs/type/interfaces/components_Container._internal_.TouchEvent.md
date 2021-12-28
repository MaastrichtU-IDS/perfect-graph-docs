[perfect-graph](../README.md) / [Modules](../modules.md) / [components/Container](../modules/components_Container.md) / [<internal\>](../modules/components_Container._internal_.md) / TouchEvent

# Interface: TouchEvent<T\>

[components/Container](../modules/components_Container.md).[<internal>](../modules/components_Container._internal_.md).TouchEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Element` |

## Hierarchy

- [`UIEvent`](components_Container._internal_.UIEvent.md)<`T`, [`NativeTouchEvent`](../modules/components_Container._internal_.md#nativetouchevent)\>

  ↳ **`TouchEvent`**

## Table of contents

### Properties

- [altKey](components_Container._internal_.TouchEvent.md#altkey)
- [bubbles](components_Container._internal_.TouchEvent.md#bubbles)
- [cancelable](components_Container._internal_.TouchEvent.md#cancelable)
- [changedTouches](components_Container._internal_.TouchEvent.md#changedtouches)
- [ctrlKey](components_Container._internal_.TouchEvent.md#ctrlkey)
- [currentTarget](components_Container._internal_.TouchEvent.md#currenttarget)
- [defaultPrevented](components_Container._internal_.TouchEvent.md#defaultprevented)
- [detail](components_Container._internal_.TouchEvent.md#detail)
- [eventPhase](components_Container._internal_.TouchEvent.md#eventphase)
- [isTrusted](components_Container._internal_.TouchEvent.md#istrusted)
- [metaKey](components_Container._internal_.TouchEvent.md#metakey)
- [nativeEvent](components_Container._internal_.TouchEvent.md#nativeevent)
- [shiftKey](components_Container._internal_.TouchEvent.md#shiftkey)
- [target](components_Container._internal_.TouchEvent.md#target)
- [targetTouches](components_Container._internal_.TouchEvent.md#targettouches)
- [timeStamp](components_Container._internal_.TouchEvent.md#timestamp)
- [touches](components_Container._internal_.TouchEvent.md#touches)
- [type](components_Container._internal_.TouchEvent.md#type)
- [view](components_Container._internal_.TouchEvent.md#view)

### Methods

- [getModifierState](components_Container._internal_.TouchEvent.md#getmodifierstate)
- [isDefaultPrevented](components_Container._internal_.TouchEvent.md#isdefaultprevented)
- [isPropagationStopped](components_Container._internal_.TouchEvent.md#ispropagationstopped)
- [persist](components_Container._internal_.TouchEvent.md#persist)
- [preventDefault](components_Container._internal_.TouchEvent.md#preventdefault)
- [stopPropagation](components_Container._internal_.TouchEvent.md#stoppropagation)

## Properties

### altKey

• **altKey**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1266

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

### changedTouches

• **changedTouches**: [`TouchList`](components_Container._internal_.TouchList.md)

#### Defined in

node_modules/@types/react/index.d.ts:1267

___

### ctrlKey

• **ctrlKey**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1268

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

### metaKey

• **metaKey**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1273

___

### nativeEvent

• **nativeEvent**: `TouchEvent`

#### Inherited from

[UIEvent](components_Container._internal_.UIEvent.md).[nativeEvent](components_Container._internal_.UIEvent.md#nativeevent)

#### Defined in

node_modules/@types/react/index.d.ts:1151

___

### shiftKey

• **shiftKey**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1274

___

### target

• **target**: `EventTarget`

#### Inherited from

[UIEvent](components_Container._internal_.UIEvent.md).[target](components_Container._internal_.UIEvent.md#target)

#### Defined in

node_modules/@types/react/index.d.ts:1153

___

### targetTouches

• **targetTouches**: [`TouchList`](components_Container._internal_.TouchList.md)

#### Defined in

node_modules/@types/react/index.d.ts:1275

___

### timeStamp

• **timeStamp**: `number`

#### Inherited from

[UIEvent](components_Container._internal_.UIEvent.md).[timeStamp](components_Container._internal_.UIEvent.md#timestamp)

#### Defined in

node_modules/@types/react/index.d.ts:1164

___

### touches

• **touches**: [`TouchList`](components_Container._internal_.TouchList.md)

#### Defined in

node_modules/@types/react/index.d.ts:1276

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

node_modules/@types/react/index.d.ts:1272

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
