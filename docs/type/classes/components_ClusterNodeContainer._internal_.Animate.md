[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Animate

# Class: Animate

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Animate

## Hierarchy

- [`Plugin_2`](components_ClusterNodeContainer._internal_.Plugin_2.md)

  ↳ **`Animate`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Animate.md#constructor)

### Properties

- [deltaHeight](components_ClusterNodeContainer._internal_.Animate.md#deltaheight)
- [deltaWidth](components_ClusterNodeContainer._internal_.Animate.md#deltawidth)
- [deltaX](components_ClusterNodeContainer._internal_.Animate.md#deltax)
- [deltaY](components_ClusterNodeContainer._internal_.Animate.md#deltay)
- [height](components_ClusterNodeContainer._internal_.Animate.md#height)
- [keepCenter](components_ClusterNodeContainer._internal_.Animate.md#keepcenter)
- [options](components_ClusterNodeContainer._internal_.Animate.md#options)
- [parent](components_ClusterNodeContainer._internal_.Animate.md#parent)
- [paused](components_ClusterNodeContainer._internal_.Animate.md#paused)
- [startHeight](components_ClusterNodeContainer._internal_.Animate.md#startheight)
- [startWidth](components_ClusterNodeContainer._internal_.Animate.md#startwidth)
- [startX](components_ClusterNodeContainer._internal_.Animate.md#startx)
- [startY](components_ClusterNodeContainer._internal_.Animate.md#starty)
- [time](components_ClusterNodeContainer._internal_.Animate.md#time)
- [width](components_ClusterNodeContainer._internal_.Animate.md#width)

### Methods

- [complete](components_ClusterNodeContainer._internal_.Animate.md#complete)
- [destroy](components_ClusterNodeContainer._internal_.Animate.md#destroy)
- [down](components_ClusterNodeContainer._internal_.Animate.md#down)
- [move](components_ClusterNodeContainer._internal_.Animate.md#move)
- [pause](components_ClusterNodeContainer._internal_.Animate.md#pause)
- [reset](components_ClusterNodeContainer._internal_.Animate.md#reset)
- [resize](components_ClusterNodeContainer._internal_.Animate.md#resize)
- [resume](components_ClusterNodeContainer._internal_.Animate.md#resume)
- [setupPosition](components_ClusterNodeContainer._internal_.Animate.md#setupposition)
- [setupZoom](components_ClusterNodeContainer._internal_.Animate.md#setupzoom)
- [up](components_ClusterNodeContainer._internal_.Animate.md#up)
- [update](components_ClusterNodeContainer._internal_.Animate.md#update)
- [wheel](components_ClusterNodeContainer._internal_.Animate.md#wheel)

## Constructors

### constructor

• **new Animate**(`parent`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`Viewport`](components_ClusterNodeContainer._internal_.Viewport.md) |
| `options?` | [`IAnimateOptions`](../interfaces/components_ClusterNodeContainer._internal_.IAnimateOptions.md) |

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[constructor](components_ClusterNodeContainer._internal_.Plugin_2.md#constructor)

#### Defined in

node_modules/pixi-viewport/index.d.ts:29

## Properties

### deltaHeight

• `Protected` **deltaHeight**: ``null`` \| `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:25

___

### deltaWidth

• `Protected` **deltaWidth**: ``null`` \| `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:24

___

### deltaX

• `Protected` `Optional` **deltaX**: `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:19

___

### deltaY

• `Protected` `Optional` **deltaY**: `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:20

___

### height

• `Protected` **height**: ``null`` \| `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:27

___

### keepCenter

• `Protected` **keepCenter**: `boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:21

___

### options

• `Readonly` **options**: [`IAnimateOptions`](../interfaces/components_ClusterNodeContainer._internal_.IAnimateOptions.md) & { `ease`: `any` ; `time`: `number`  }

#### Defined in

node_modules/pixi-viewport/index.d.ts:13

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

### startHeight

• `Protected` **startHeight**: ``null`` \| `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:23

___

### startWidth

• `Protected` **startWidth**: ``null`` \| `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:22

___

### startX

• `Protected` `Optional` **startX**: `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:17

___

### startY

• `Protected` `Optional` **startY**: `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:18

___

### time

• `Protected` **time**: `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:28

___

### width

• `Protected` **width**: ``null`` \| `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:26

## Methods

### complete

▸ **complete**(): `void`

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:33

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

▸ **down**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[down](components_ClusterNodeContainer._internal_.Plugin_2.md#down)

#### Defined in

node_modules/pixi-viewport/index.d.ts:32

___

### move

▸ **move**(`_e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_e` | [`InteractionEvent`](components_ClusterNodeContainer._internal_.InteractionEvent.md) |

#### Returns

`boolean`

#### Inherited from

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[move](components_ClusterNodeContainer._internal_.Plugin_2.md#move)

#### Defined in

node_modules/pixi-viewport/index.d.ts:394

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

#### Inherited from

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[resume](components_ClusterNodeContainer._internal_.Plugin_2.md#resume)

#### Defined in

node_modules/pixi-viewport/index.d.ts:401

___

### setupPosition

▸ `Protected` **setupPosition**(): `void`

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:30

___

### setupZoom

▸ `Protected` **setupZoom**(): `void`

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:31

___

### up

▸ **up**(`_e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_e` | [`InteractionEvent`](components_ClusterNodeContainer._internal_.InteractionEvent.md) |

#### Returns

`boolean`

#### Inherited from

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[up](components_ClusterNodeContainer._internal_.Plugin_2.md#up)

#### Defined in

node_modules/pixi-viewport/index.d.ts:395

___

### update

▸ **update**(`elapsed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `elapsed` | `number` |

#### Returns

`void`

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[update](components_ClusterNodeContainer._internal_.Plugin_2.md#update)

#### Defined in

node_modules/pixi-viewport/index.d.ts:34

___

### wheel

▸ **wheel**(`_e`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_e` | `WheelEvent` |

#### Returns

`undefined` \| `boolean`

#### Inherited from

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[wheel](components_ClusterNodeContainer._internal_.Plugin_2.md#wheel)

#### Defined in

node_modules/pixi-viewport/index.d.ts:396
