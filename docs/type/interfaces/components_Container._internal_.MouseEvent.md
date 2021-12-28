[perfect-graph](../README.md) / [Modules](../modules.md) / [components/Container](../modules/components_Container.md) / [<internal\>](../modules/components_Container._internal_.md) / MouseEvent

# Interface: MouseEvent<T, E\>

[components/Container](../modules/components_Container.md).[<internal>](../modules/components_Container._internal_.md).MouseEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Element` |
| `E` | [`NativeMouseEvent`](../modules/components_Container._internal_.md#nativemouseevent) |

## Hierarchy

- [`UIEvent`](components_Container._internal_.UIEvent.md)<`T`, `E`\>

  ↳ **`MouseEvent`**

  ↳↳ [`DragEvent`](components_Container._internal_.DragEvent.md)

  ↳↳ [`PointerEvent`](components_Container._internal_.PointerEvent.md)

  ↳↳ [`WheelEvent`](components_Container._internal_.WheelEvent.md)

## Table of contents

### Properties

- [altKey](components_Container._internal_.MouseEvent.md#altkey)
- [bubbles](components_Container._internal_.MouseEvent.md#bubbles)
- [button](components_Container._internal_.MouseEvent.md#button)
- [buttons](components_Container._internal_.MouseEvent.md#buttons)
- [cancelable](components_Container._internal_.MouseEvent.md#cancelable)
- [clientX](components_Container._internal_.MouseEvent.md#clientx)
- [clientY](components_Container._internal_.MouseEvent.md#clienty)
- [ctrlKey](components_Container._internal_.MouseEvent.md#ctrlkey)
- [currentTarget](components_Container._internal_.MouseEvent.md#currenttarget)
- [defaultPrevented](components_Container._internal_.MouseEvent.md#defaultprevented)
- [detail](components_Container._internal_.MouseEvent.md#detail)
- [eventPhase](components_Container._internal_.MouseEvent.md#eventphase)
- [isTrusted](components_Container._internal_.MouseEvent.md#istrusted)
- [metaKey](components_Container._internal_.MouseEvent.md#metakey)
- [movementX](components_Container._internal_.MouseEvent.md#movementx)
- [movementY](components_Container._internal_.MouseEvent.md#movementy)
- [nativeEvent](components_Container._internal_.MouseEvent.md#nativeevent)
- [pageX](components_Container._internal_.MouseEvent.md#pagex)
- [pageY](components_Container._internal_.MouseEvent.md#pagey)
- [relatedTarget](components_Container._internal_.MouseEvent.md#relatedtarget)
- [screenX](components_Container._internal_.MouseEvent.md#screenx)
- [screenY](components_Container._internal_.MouseEvent.md#screeny)
- [shiftKey](components_Container._internal_.MouseEvent.md#shiftkey)
- [target](components_Container._internal_.MouseEvent.md#target)
- [timeStamp](components_Container._internal_.MouseEvent.md#timestamp)
- [type](components_Container._internal_.MouseEvent.md#type)
- [view](components_Container._internal_.MouseEvent.md#view)

### Methods

- [getModifierState](components_Container._internal_.MouseEvent.md#getmodifierstate)
- [isDefaultPrevented](components_Container._internal_.MouseEvent.md#isdefaultprevented)
- [isPropagationStopped](components_Container._internal_.MouseEvent.md#ispropagationstopped)
- [persist](components_Container._internal_.MouseEvent.md#persist)
- [preventDefault](components_Container._internal_.MouseEvent.md#preventdefault)
- [stopPropagation](components_Container._internal_.MouseEvent.md#stoppropagation)

## Properties

### altKey

• **altKey**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1244

___

### bubbles

• **bubbles**: `boolean`

#### Inherited from

[UIEvent](components_Container._internal_.UIEvent.md).[bubbles](components_Container._internal_.UIEvent.md#bubbles)

#### Defined in

node_modules/@types/react/index.d.ts:1154

___

### button

• **button**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1245

___

### buttons

• **buttons**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1246

___

### cancelable

• **cancelable**: `boolean`

#### Inherited from

[UIEvent](components_Container._internal_.UIEvent.md).[cancelable](components_Container._internal_.UIEvent.md#cancelable)

#### Defined in

node_modules/@types/react/index.d.ts:1155

___

### clientX

• **clientX**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1247

___

### clientY

• **clientY**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1248

___

### ctrlKey

• **ctrlKey**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1249

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

node_modules/@types/react/index.d.ts:1254

___

### movementX

• **movementX**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1255

___

### movementY

• **movementY**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1256

___

### nativeEvent

• **nativeEvent**: `E`

#### Inherited from

[UIEvent](components_Container._internal_.UIEvent.md).[nativeEvent](components_Container._internal_.UIEvent.md#nativeevent)

#### Defined in

node_modules/@types/react/index.d.ts:1151

___

### pageX

• **pageX**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1257

___

### pageY

• **pageY**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1258

___

### relatedTarget

• **relatedTarget**: ``null`` \| `EventTarget`

#### Defined in

node_modules/@types/react/index.d.ts:1259

___

### screenX

• **screenX**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1260

___

### screenY

• **screenY**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1261

___

### shiftKey

• **shiftKey**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1262

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

node_modules/@types/react/index.d.ts:1253

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
