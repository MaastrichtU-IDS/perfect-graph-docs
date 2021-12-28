[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Snap

# Class: Snap

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Snap

## Hierarchy

- [`Plugin_2`](components_ClusterNodeContainer._internal_.Plugin_2.md)

  ↳ **`Snap`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Snap.md#constructor)

### Properties

- [deltaX](components_ClusterNodeContainer._internal_.Snap.md#deltax)
- [deltaY](components_ClusterNodeContainer._internal_.Snap.md#deltay)
- [ease](components_ClusterNodeContainer._internal_.Snap.md#ease)
- [options](components_ClusterNodeContainer._internal_.Snap.md#options)
- [parent](components_ClusterNodeContainer._internal_.Snap.md#parent)
- [paused](components_ClusterNodeContainer._internal_.Snap.md#paused)
- [percent](components_ClusterNodeContainer._internal_.Snap.md#percent)
- [snapping](components_ClusterNodeContainer._internal_.Snap.md#snapping)
- [startX](components_ClusterNodeContainer._internal_.Snap.md#startx)
- [startY](components_ClusterNodeContainer._internal_.Snap.md#starty)
- [x](components_ClusterNodeContainer._internal_.Snap.md#x)
- [y](components_ClusterNodeContainer._internal_.Snap.md#y)

### Methods

- [destroy](components_ClusterNodeContainer._internal_.Snap.md#destroy)
- [down](components_ClusterNodeContainer._internal_.Snap.md#down)
- [move](components_ClusterNodeContainer._internal_.Snap.md#move)
- [pause](components_ClusterNodeContainer._internal_.Snap.md#pause)
- [reset](components_ClusterNodeContainer._internal_.Snap.md#reset)
- [resize](components_ClusterNodeContainer._internal_.Snap.md#resize)
- [resume](components_ClusterNodeContainer._internal_.Snap.md#resume)
- [snapStart](components_ClusterNodeContainer._internal_.Snap.md#snapstart)
- [up](components_ClusterNodeContainer._internal_.Snap.md#up)
- [update](components_ClusterNodeContainer._internal_.Snap.md#update)
- [wheel](components_ClusterNodeContainer._internal_.Snap.md#wheel)

## Constructors

### constructor

• **new Snap**(`parent`, `x`, `y`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`Viewport`](components_ClusterNodeContainer._internal_.Viewport.md) |
| `x` | `number` |
| `y` | `number` |
| `options?` | [`ISnapOptions`](../interfaces/components_ClusterNodeContainer._internal_.ISnapOptions.md) |

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[constructor](components_ClusterNodeContainer._internal_.Plugin_2.md#constructor)

#### Defined in

node_modules/pixi-viewport/index.d.ts:451

## Properties

### deltaX

• `Protected` `Optional` **deltaX**: `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:447

___

### deltaY

• `Protected` `Optional` **deltaY**: `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:448

___

### ease

• `Optional` **ease**: `any`

#### Defined in

node_modules/pixi-viewport/index.d.ts:440

___

### options

• `Readonly` **options**: [`Required`](../modules/components_ClusterNodeContainer._internal_.md#required)<[`ISnapOptions`](../interfaces/components_ClusterNodeContainer._internal_.ISnapOptions.md)\>

#### Defined in

node_modules/pixi-viewport/index.d.ts:439

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

### percent

• `Protected` `Optional` **percent**: `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:443

___

### snapping

• `Protected` `Optional` **snapping**: ``null`` \| { `time`: `number`  }

#### Defined in

node_modules/pixi-viewport/index.d.ts:444

___

### startX

• `Protected` `Optional` **startX**: `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:449

___

### startY

• `Protected` `Optional` **startY**: `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:450

___

### x

• **x**: `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:441

___

### y

• **y**: `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:442

## Methods

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

node_modules/pixi-viewport/index.d.ts:454

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

### snapStart

▸ **snapStart**(): `void`

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:452

___

### up

▸ **up**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[up](components_ClusterNodeContainer._internal_.Plugin_2.md#up)

#### Defined in

node_modules/pixi-viewport/index.d.ts:455

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

node_modules/pixi-viewport/index.d.ts:456

___

### wheel

▸ **wheel**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[wheel](components_ClusterNodeContainer._internal_.Plugin_2.md#wheel)

#### Defined in

node_modules/pixi-viewport/index.d.ts:453
