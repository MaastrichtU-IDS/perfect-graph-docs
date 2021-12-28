[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Drag

# Class: Drag

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Drag

## Hierarchy

- [`Plugin_2`](components_ClusterNodeContainer._internal_.Plugin_2.md)

  ↳ **`Drag`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Drag.md#constructor)

### Properties

- [current](components_ClusterNodeContainer._internal_.Drag.md#current)
- [keyIsPressed](components_ClusterNodeContainer._internal_.Drag.md#keyispressed)
- [last](components_ClusterNodeContainer._internal_.Drag.md#last)
- [mouse](components_ClusterNodeContainer._internal_.Drag.md#mouse)
- [moved](components_ClusterNodeContainer._internal_.Drag.md#moved)
- [options](components_ClusterNodeContainer._internal_.Drag.md#options)
- [parent](components_ClusterNodeContainer._internal_.Drag.md#parent)
- [paused](components_ClusterNodeContainer._internal_.Drag.md#paused)
- [reverse](components_ClusterNodeContainer._internal_.Drag.md#reverse)
- [underflowX](components_ClusterNodeContainer._internal_.Drag.md#underflowx)
- [underflowY](components_ClusterNodeContainer._internal_.Drag.md#underflowy)
- [xDirection](components_ClusterNodeContainer._internal_.Drag.md#xdirection)
- [yDirection](components_ClusterNodeContainer._internal_.Drag.md#ydirection)

### Accessors

- [active](components_ClusterNodeContainer._internal_.Drag.md#active)

### Methods

- [checkButtons](components_ClusterNodeContainer._internal_.Drag.md#checkbuttons)
- [checkKeyPress](components_ClusterNodeContainer._internal_.Drag.md#checkkeypress)
- [clamp](components_ClusterNodeContainer._internal_.Drag.md#clamp)
- [destroy](components_ClusterNodeContainer._internal_.Drag.md#destroy)
- [down](components_ClusterNodeContainer._internal_.Drag.md#down)
- [handleKeyPresses](components_ClusterNodeContainer._internal_.Drag.md#handlekeypresses)
- [mouseButtons](components_ClusterNodeContainer._internal_.Drag.md#mousebuttons)
- [move](components_ClusterNodeContainer._internal_.Drag.md#move)
- [parseUnderflow](components_ClusterNodeContainer._internal_.Drag.md#parseunderflow)
- [pause](components_ClusterNodeContainer._internal_.Drag.md#pause)
- [reset](components_ClusterNodeContainer._internal_.Drag.md#reset)
- [resize](components_ClusterNodeContainer._internal_.Drag.md#resize)
- [resume](components_ClusterNodeContainer._internal_.Drag.md#resume)
- [up](components_ClusterNodeContainer._internal_.Drag.md#up)
- [update](components_ClusterNodeContainer._internal_.Drag.md#update)
- [wheel](components_ClusterNodeContainer._internal_.Drag.md#wheel)

## Constructors

### constructor

• **new Drag**(`parent`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`Viewport`](components_ClusterNodeContainer._internal_.Viewport.md) |
| `options?` | `Object` |

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[constructor](components_ClusterNodeContainer._internal_.Plugin_2.md#constructor)

#### Defined in

node_modules/pixi-viewport/index.d.ts:123

## Properties

### current

• `Protected` `Optional` **current**: `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:122

___

### keyIsPressed

• `Protected` **keyIsPressed**: `boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:117

___

### last

• `Protected` `Optional` **last**: ``null`` \| [`IPointData`](../interfaces/components_ClusterNodeContainer._internal_.IPointData.md)

#### Defined in

node_modules/pixi-viewport/index.d.ts:121

___

### mouse

• `Protected` **mouse**: [`boolean`, `boolean`, `boolean`]

#### Defined in

node_modules/pixi-viewport/index.d.ts:118

___

### moved

• `Protected` **moved**: `boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:113

___

### options

• `Readonly` **options**: [`Readonly`](../modules/components_ClusterNodeContainer._internal_.md#readonly)<[`Required`](../modules/components_ClusterNodeContainer._internal_.md#required)<[`IDragOptions`](../interfaces/components_ClusterNodeContainer._internal_.IDragOptions.md)\>\>

#### Defined in

node_modules/pixi-viewport/index.d.ts:112

___

### parent

• `Readonly` **parent**: [`Viewport`](components_ClusterNodeContainer._internal_.Viewport.md)

#### Inherited from

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[parent](components_ClusterNodeContainer._internal_.Plugin_2.md#parent)

#### Defined in

node_modules/pixi-viewport/index.d.ts:389

___

### paused

• **paused**: `boolean`

#### Inherited from

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[paused](components_ClusterNodeContainer._internal_.Plugin_2.md#paused)

#### Defined in

node_modules/pixi-viewport/index.d.ts:390

___

### reverse

• `Protected` **reverse**: ``1`` \| ``-1``

#### Defined in

node_modules/pixi-viewport/index.d.ts:114

___

### underflowX

• `Protected` **underflowX**: ``0`` \| ``1`` \| ``-1``

#### Defined in

node_modules/pixi-viewport/index.d.ts:119

___

### underflowY

• `Protected` **underflowY**: ``0`` \| ``1`` \| ``-1``

#### Defined in

node_modules/pixi-viewport/index.d.ts:120

___

### xDirection

• `Protected` **xDirection**: `boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:115

___

### yDirection

• `Protected` **yDirection**: `boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:116

## Accessors

### active

• `get` **active**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:130

## Methods

### checkButtons

▸ `Protected` **checkButtons**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`InteractionEvent`](components_ClusterNodeContainer._internal_.InteractionEvent.md) |

#### Returns

`boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:127

___

### checkKeyPress

▸ `Protected` **checkKeyPress**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`InteractionEvent`](components_ClusterNodeContainer._internal_.InteractionEvent.md) |

#### Returns

`boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:128

___

### clamp

▸ **clamp**(): `void`

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:135

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[destroy](components_ClusterNodeContainer._internal_.Plugin_2.md#destroy)

#### Defined in

node_modules/pixi-viewport/index.d.ts:392

___

### down

▸ **down**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`InteractionEvent`](components_ClusterNodeContainer._internal_.InteractionEvent.md) |

#### Returns

`boolean`

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[down](components_ClusterNodeContainer._internal_.Plugin_2.md#down)

#### Defined in

node_modules/pixi-viewport/index.d.ts:129

___

### handleKeyPresses

▸ `Protected` **handleKeyPresses**(`codes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `codes` | `string`[] |

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:124

___

### mouseButtons

▸ `Protected` **mouseButtons**(`buttons`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buttons` | `string` |

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:125

___

### move

▸ **move**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`InteractionEvent`](components_ClusterNodeContainer._internal_.InteractionEvent.md) |

#### Returns

`boolean`

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[move](components_ClusterNodeContainer._internal_.Plugin_2.md#move)

#### Defined in

node_modules/pixi-viewport/index.d.ts:131

___

### parseUnderflow

▸ `Protected` **parseUnderflow**(): `void`

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:126

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Inherited from

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[pause](components_ClusterNodeContainer._internal_.Plugin_2.md#pause)

#### Defined in

node_modules/pixi-viewport/index.d.ts:400

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[reset](components_ClusterNodeContainer._internal_.Plugin_2.md#reset)

#### Defined in

node_modules/pixi-viewport/index.d.ts:399

___

### resize

▸ **resize**(): `void`

#### Returns

`void`

#### Inherited from

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[resize](components_ClusterNodeContainer._internal_.Plugin_2.md#resize)

#### Defined in

node_modules/pixi-viewport/index.d.ts:398

___

### resume

▸ **resume**(): `void`

#### Returns

`void`

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[resume](components_ClusterNodeContainer._internal_.Plugin_2.md#resume)

#### Defined in

node_modules/pixi-viewport/index.d.ts:134

___

### up

▸ **up**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`InteractionEvent`](components_ClusterNodeContainer._internal_.InteractionEvent.md) |

#### Returns

`boolean`

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[up](components_ClusterNodeContainer._internal_.Plugin_2.md#up)

#### Defined in

node_modules/pixi-viewport/index.d.ts:132

___

### update

▸ **update**(`_delta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_delta` | `number` |

#### Returns

`void`

#### Inherited from

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[update](components_ClusterNodeContainer._internal_.Plugin_2.md#update)

#### Defined in

node_modules/pixi-viewport/index.d.ts:397

___

### wheel

▸ **wheel**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `WheelEvent` |

#### Returns

`boolean`

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[wheel](components_ClusterNodeContainer._internal_.Plugin_2.md#wheel)

#### Defined in

node_modules/pixi-viewport/index.d.ts:133
