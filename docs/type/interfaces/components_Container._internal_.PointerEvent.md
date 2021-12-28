[perfect-graph](../README.md) / [Modules](../modules.md) / [components/Container](../modules/components_Container.md) / [<internal\>](../modules/components_Container._internal_.md) / PointerEvent

# Interface: PointerEvent<T\>

[components/Container](../modules/components_Container.md).[<internal>](../modules/components_Container._internal_.md).PointerEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Element` |

## Hierarchy

- [`MouseEvent`](components_Container._internal_.MouseEvent.md)<`T`, [`NativePointerEvent`](../modules/components_Container._internal_.md#nativepointerevent)\>

  ↳ **`PointerEvent`**

## Table of contents

### Properties

- [altKey](components_Container._internal_.PointerEvent.md#altkey)
- [bubbles](components_Container._internal_.PointerEvent.md#bubbles)
- [button](components_Container._internal_.PointerEvent.md#button)
- [buttons](components_Container._internal_.PointerEvent.md#buttons)
- [cancelable](components_Container._internal_.PointerEvent.md#cancelable)
- [clientX](components_Container._internal_.PointerEvent.md#clientx)
- [clientY](components_Container._internal_.PointerEvent.md#clienty)
- [ctrlKey](components_Container._internal_.PointerEvent.md#ctrlkey)
- [currentTarget](components_Container._internal_.PointerEvent.md#currenttarget)
- [defaultPrevented](components_Container._internal_.PointerEvent.md#defaultprevented)
- [detail](components_Container._internal_.PointerEvent.md#detail)
- [eventPhase](components_Container._internal_.PointerEvent.md#eventphase)
- [height](components_Container._internal_.PointerEvent.md#height)
- [isPrimary](components_Container._internal_.PointerEvent.md#isprimary)
- [isTrusted](components_Container._internal_.PointerEvent.md#istrusted)
- [metaKey](components_Container._internal_.PointerEvent.md#metakey)
- [movementX](components_Container._internal_.PointerEvent.md#movementx)
- [movementY](components_Container._internal_.PointerEvent.md#movementy)
- [nativeEvent](components_Container._internal_.PointerEvent.md#nativeevent)
- [pageX](components_Container._internal_.PointerEvent.md#pagex)
- [pageY](components_Container._internal_.PointerEvent.md#pagey)
- [pointerId](components_Container._internal_.PointerEvent.md#pointerid)
- [pointerType](components_Container._internal_.PointerEvent.md#pointertype)
- [pressure](components_Container._internal_.PointerEvent.md#pressure)
- [relatedTarget](components_Container._internal_.PointerEvent.md#relatedtarget)
- [screenX](components_Container._internal_.PointerEvent.md#screenx)
- [screenY](components_Container._internal_.PointerEvent.md#screeny)
- [shiftKey](components_Container._internal_.PointerEvent.md#shiftkey)
- [tangentialPressure](components_Container._internal_.PointerEvent.md#tangentialpressure)
- [target](components_Container._internal_.PointerEvent.md#target)
- [tiltX](components_Container._internal_.PointerEvent.md#tiltx)
- [tiltY](components_Container._internal_.PointerEvent.md#tilty)
- [timeStamp](components_Container._internal_.PointerEvent.md#timestamp)
- [twist](components_Container._internal_.PointerEvent.md#twist)
- [type](components_Container._internal_.PointerEvent.md#type)
- [view](components_Container._internal_.PointerEvent.md#view)
- [width](components_Container._internal_.PointerEvent.md#width)

### Methods

- [getModifierState](components_Container._internal_.PointerEvent.md#getmodifierstate)
- [isDefaultPrevented](components_Container._internal_.PointerEvent.md#isdefaultprevented)
- [isPropagationStopped](components_Container._internal_.PointerEvent.md#ispropagationstopped)
- [persist](components_Container._internal_.PointerEvent.md#persist)
- [preventDefault](components_Container._internal_.PointerEvent.md#preventdefault)
- [stopPropagation](components_Container._internal_.PointerEvent.md#stoppropagation)

## Properties

### altKey

• **altKey**: `boolean`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[altKey](components_Container._internal_.MouseEvent.md#altkey)

#### Defined in

node_modules/@types/react/index.d.ts:1244

___

### bubbles

• **bubbles**: `boolean`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[bubbles](components_Container._internal_.MouseEvent.md#bubbles)

#### Defined in

node_modules/@types/react/index.d.ts:1154

___

### button

• **button**: `number`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[button](components_Container._internal_.MouseEvent.md#button)

#### Defined in

node_modules/@types/react/index.d.ts:1245

___

### buttons

• **buttons**: `number`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[buttons](components_Container._internal_.MouseEvent.md#buttons)

#### Defined in

node_modules/@types/react/index.d.ts:1246

___

### cancelable

• **cancelable**: `boolean`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[cancelable](components_Container._internal_.MouseEvent.md#cancelable)

#### Defined in

node_modules/@types/react/index.d.ts:1155

___

### clientX

• **clientX**: `number`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[clientX](components_Container._internal_.MouseEvent.md#clientx)

#### Defined in

node_modules/@types/react/index.d.ts:1247

___

### clientY

• **clientY**: `number`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[clientY](components_Container._internal_.MouseEvent.md#clienty)

#### Defined in

node_modules/@types/react/index.d.ts:1248

___

### ctrlKey

• **ctrlKey**: `boolean`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[ctrlKey](components_Container._internal_.MouseEvent.md#ctrlkey)

#### Defined in

node_modules/@types/react/index.d.ts:1249

___

### currentTarget

• **currentTarget**: `EventTarget` & `T`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[currentTarget](components_Container._internal_.MouseEvent.md#currenttarget)

#### Defined in

node_modules/@types/react/index.d.ts:1152

___

### defaultPrevented

• **defaultPrevented**: `boolean`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[defaultPrevented](components_Container._internal_.MouseEvent.md#defaultprevented)

#### Defined in

node_modules/@types/react/index.d.ts:1156

___

### detail

• **detail**: `number`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[detail](components_Container._internal_.MouseEvent.md#detail)

#### Defined in

node_modules/@types/react/index.d.ts:1280

___

### eventPhase

• **eventPhase**: `number`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[eventPhase](components_Container._internal_.MouseEvent.md#eventphase)

#### Defined in

node_modules/@types/react/index.d.ts:1157

___

### height

• **height**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1197

___

### isPrimary

• **isPrimary**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1199

___

### isTrusted

• **isTrusted**: `boolean`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[isTrusted](components_Container._internal_.MouseEvent.md#istrusted)

#### Defined in

node_modules/@types/react/index.d.ts:1158

___

### metaKey

• **metaKey**: `boolean`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[metaKey](components_Container._internal_.MouseEvent.md#metakey)

#### Defined in

node_modules/@types/react/index.d.ts:1254

___

### movementX

• **movementX**: `number`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[movementX](components_Container._internal_.MouseEvent.md#movementx)

#### Defined in

node_modules/@types/react/index.d.ts:1255

___

### movementY

• **movementY**: `number`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[movementY](components_Container._internal_.MouseEvent.md#movementy)

#### Defined in

node_modules/@types/react/index.d.ts:1256

___

### nativeEvent

• **nativeEvent**: `PointerEvent`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[nativeEvent](components_Container._internal_.MouseEvent.md#nativeevent)

#### Defined in

node_modules/@types/react/index.d.ts:1151

___

### pageX

• **pageX**: `number`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[pageX](components_Container._internal_.MouseEvent.md#pagex)

#### Defined in

node_modules/@types/react/index.d.ts:1257

___

### pageY

• **pageY**: `number`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[pageY](components_Container._internal_.MouseEvent.md#pagey)

#### Defined in

node_modules/@types/react/index.d.ts:1258

___

### pointerId

• **pointerId**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1190

___

### pointerType

• **pointerType**: ``"touch"`` \| ``"mouse"`` \| ``"pen"``

#### Defined in

node_modules/@types/react/index.d.ts:1198

___

### pressure

• **pressure**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1191

___

### relatedTarget

• **relatedTarget**: ``null`` \| `EventTarget`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[relatedTarget](components_Container._internal_.MouseEvent.md#relatedtarget)

#### Defined in

node_modules/@types/react/index.d.ts:1259

___

### screenX

• **screenX**: `number`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[screenX](components_Container._internal_.MouseEvent.md#screenx)

#### Defined in

node_modules/@types/react/index.d.ts:1260

___

### screenY

• **screenY**: `number`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[screenY](components_Container._internal_.MouseEvent.md#screeny)

#### Defined in

node_modules/@types/react/index.d.ts:1261

___

### shiftKey

• **shiftKey**: `boolean`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[shiftKey](components_Container._internal_.MouseEvent.md#shiftkey)

#### Defined in

node_modules/@types/react/index.d.ts:1262

___

### tangentialPressure

• **tangentialPressure**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1192

___

### target

• **target**: `EventTarget`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[target](components_Container._internal_.MouseEvent.md#target)

#### Defined in

node_modules/@types/react/index.d.ts:1153

___

### tiltX

• **tiltX**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1193

___

### tiltY

• **tiltY**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1194

___

### timeStamp

• **timeStamp**: `number`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[timeStamp](components_Container._internal_.MouseEvent.md#timestamp)

#### Defined in

node_modules/@types/react/index.d.ts:1164

___

### twist

• **twist**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1195

___

### type

• **type**: `string`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[type](components_Container._internal_.MouseEvent.md#type)

#### Defined in

node_modules/@types/react/index.d.ts:1165

___

### view

• **view**: [`AbstractView`](components_Container._internal_.AbstractView.md)

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[view](components_Container._internal_.MouseEvent.md#view)

#### Defined in

node_modules/@types/react/index.d.ts:1281

___

### width

• **width**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1196

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

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[getModifierState](components_Container._internal_.MouseEvent.md#getmodifierstate)

#### Defined in

node_modules/@types/react/index.d.ts:1253

___

### isDefaultPrevented

▸ **isDefaultPrevented**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[isDefaultPrevented](components_Container._internal_.MouseEvent.md#isdefaultprevented)

#### Defined in

node_modules/@types/react/index.d.ts:1160

___

### isPropagationStopped

▸ **isPropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[isPropagationStopped](components_Container._internal_.MouseEvent.md#ispropagationstopped)

#### Defined in

node_modules/@types/react/index.d.ts:1162

___

### persist

▸ **persist**(): `void`

#### Returns

`void`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[persist](components_Container._internal_.MouseEvent.md#persist)

#### Defined in

node_modules/@types/react/index.d.ts:1163

___

### preventDefault

▸ **preventDefault**(): `void`

#### Returns

`void`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[preventDefault](components_Container._internal_.MouseEvent.md#preventdefault)

#### Defined in

node_modules/@types/react/index.d.ts:1159

___

### stopPropagation

▸ **stopPropagation**(): `void`

#### Returns

`void`

#### Inherited from

[MouseEvent](components_Container._internal_.MouseEvent.md).[stopPropagation](components_Container._internal_.MouseEvent.md#stoppropagation)

#### Defined in

node_modules/@types/react/index.d.ts:1161
