[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SnapZoom

# Class: SnapZoom

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SnapZoom

## Hierarchy

- [`Plugin_2`](components_ClusterNodeContainer._internal_.Plugin_2.md)

  ↳ **`SnapZoom`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.SnapZoom.md#constructor)

### Properties

- [createSnapping](components_ClusterNodeContainer._internal_.SnapZoom.md#createsnapping)
- [ease](components_ClusterNodeContainer._internal_.SnapZoom.md#ease)
- [options](components_ClusterNodeContainer._internal_.SnapZoom.md#options)
- [parent](components_ClusterNodeContainer._internal_.SnapZoom.md#parent)
- [paused](components_ClusterNodeContainer._internal_.SnapZoom.md#paused)
- [snapping](components_ClusterNodeContainer._internal_.SnapZoom.md#snapping)
- [xIndependent](components_ClusterNodeContainer._internal_.SnapZoom.md#xindependent)
- [xScale](components_ClusterNodeContainer._internal_.SnapZoom.md#xscale)
- [yIndependent](components_ClusterNodeContainer._internal_.SnapZoom.md#yindependent)
- [yScale](components_ClusterNodeContainer._internal_.SnapZoom.md#yscale)

### Methods

- [destroy](components_ClusterNodeContainer._internal_.SnapZoom.md#destroy)
- [down](components_ClusterNodeContainer._internal_.SnapZoom.md#down)
- [move](components_ClusterNodeContainer._internal_.SnapZoom.md#move)
- [pause](components_ClusterNodeContainer._internal_.SnapZoom.md#pause)
- [reset](components_ClusterNodeContainer._internal_.SnapZoom.md#reset)
- [resize](components_ClusterNodeContainer._internal_.SnapZoom.md#resize)
- [resume](components_ClusterNodeContainer._internal_.SnapZoom.md#resume)
- [up](components_ClusterNodeContainer._internal_.SnapZoom.md#up)
- [update](components_ClusterNodeContainer._internal_.SnapZoom.md#update)
- [wheel](components_ClusterNodeContainer._internal_.SnapZoom.md#wheel)

## Constructors

### constructor

• **new SnapZoom**(`parent`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`Viewport`](components_ClusterNodeContainer._internal_.Viewport.md) |
| `options?` | [`ISnapZoomOptions`](../interfaces/components_ClusterNodeContainer._internal_.ISnapZoomOptions.md) |

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[constructor](components_ClusterNodeContainer._internal_.Plugin_2.md#constructor)

#### Defined in

node_modules/pixi-viewport/index.d.ts:473

## Properties

### createSnapping

• `Private` **createSnapping**: `any`

#### Defined in

node_modules/pixi-viewport/index.d.ts:474

___

### ease

• `Protected` **ease**: `any`

#### Defined in

node_modules/pixi-viewport/index.d.ts:461

___

### options

• `Readonly` **options**: [`Required`](../modules/components_ClusterNodeContainer._internal_.md#required)<[`ISnapZoomOptions`](../interfaces/components_ClusterNodeContainer._internal_.ISnapZoomOptions.md)\>

#### Defined in

node_modules/pixi-viewport/index.d.ts:460

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

### snapping

• `Protected` `Optional` **snapping**: ``null`` \| { `deltaX`: `number` ; `deltaY`: `number` ; `startX`: `number` ; `startY`: `number` ; `time`: `number`  }

#### Defined in

node_modules/pixi-viewport/index.d.ts:466

___

### xIndependent

• `Protected` **xIndependent**: `boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:464

___

### xScale

• `Protected` **xScale**: `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:462

___

### yIndependent

• `Protected` **yIndependent**: `boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:465

___

### yScale

• `Protected` **yScale**: `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:463

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

node_modules/pixi-viewport/index.d.ts:477

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

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[resize](components_ClusterNodeContainer._internal_.Plugin_2.md#resize)

#### Defined in

node_modules/pixi-viewport/index.d.ts:475

___

### resume

▸ **resume**(): `void`

#### Returns

`void`

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[resume](components_ClusterNodeContainer._internal_.Plugin_2.md#resume)

#### Defined in

node_modules/pixi-viewport/index.d.ts:479

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

node_modules/pixi-viewport/index.d.ts:478

___

### wheel

▸ **wheel**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[wheel](components_ClusterNodeContainer._internal_.Plugin_2.md#wheel)

#### Defined in

node_modules/pixi-viewport/index.d.ts:476
