[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Pinch

# Class: Pinch

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Pinch

## Hierarchy

- [`Plugin_2`](components_ClusterNodeContainer._internal_.Plugin_2.md)

  ↳ **`Pinch`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Pinch.md#constructor)

### Properties

- [active](components_ClusterNodeContainer._internal_.Pinch.md#active)
- [lastCenter](components_ClusterNodeContainer._internal_.Pinch.md#lastcenter)
- [moved](components_ClusterNodeContainer._internal_.Pinch.md#moved)
- [options](components_ClusterNodeContainer._internal_.Pinch.md#options)
- [parent](components_ClusterNodeContainer._internal_.Pinch.md#parent)
- [paused](components_ClusterNodeContainer._internal_.Pinch.md#paused)
- [pinching](components_ClusterNodeContainer._internal_.Pinch.md#pinching)

### Methods

- [destroy](components_ClusterNodeContainer._internal_.Pinch.md#destroy)
- [down](components_ClusterNodeContainer._internal_.Pinch.md#down)
- [isAxisX](components_ClusterNodeContainer._internal_.Pinch.md#isaxisx)
- [isAxisY](components_ClusterNodeContainer._internal_.Pinch.md#isaxisy)
- [move](components_ClusterNodeContainer._internal_.Pinch.md#move)
- [pause](components_ClusterNodeContainer._internal_.Pinch.md#pause)
- [reset](components_ClusterNodeContainer._internal_.Pinch.md#reset)
- [resize](components_ClusterNodeContainer._internal_.Pinch.md#resize)
- [resume](components_ClusterNodeContainer._internal_.Pinch.md#resume)
- [up](components_ClusterNodeContainer._internal_.Pinch.md#up)
- [update](components_ClusterNodeContainer._internal_.Pinch.md#update)
- [wheel](components_ClusterNodeContainer._internal_.Pinch.md#wheel)

## Constructors

### constructor

• **new Pinch**(`parent`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`Viewport`](components_ClusterNodeContainer._internal_.Viewport.md) |
| `options?` | [`IPinchOptions`](../interfaces/components_ClusterNodeContainer._internal_.IPinchOptions.md) |

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[constructor](components_ClusterNodeContainer._internal_.Plugin_2.md#constructor)

#### Defined in

node_modules/pixi-viewport/index.d.ts:380

## Properties

### active

• **active**: `boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:376

___

### lastCenter

• `Protected` `Optional` **lastCenter**: ``null`` \| [`IPointData`](../interfaces/components_ClusterNodeContainer._internal_.IPointData.md)

#### Defined in

node_modules/pixi-viewport/index.d.ts:379

___

### moved

• `Protected` **moved**: `boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:378

___

### options

• `Readonly` **options**: [`Required`](../modules/components_ClusterNodeContainer._internal_.md#required)<[`IPinchOptions`](../interfaces/components_ClusterNodeContainer._internal_.IPinchOptions.md)\>

#### Defined in

node_modules/pixi-viewport/index.d.ts:375

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

### pinching

• **pinching**: `boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:377

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

node_modules/pixi-viewport/index.d.ts:381

___

### isAxisX

▸ **isAxisX**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:382

___

### isAxisY

▸ **isAxisY**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:383

___

### move

▸ **move**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`InteractionEvent`](components_ClusterNodeContainer._internal_.InteractionEvent.md) |

#### Returns

`boolean`

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[move](components_ClusterNodeContainer._internal_.Plugin_2.md#move)

#### Defined in

node_modules/pixi-viewport/index.d.ts:384

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

### up

▸ **up**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[up](components_ClusterNodeContainer._internal_.Plugin_2.md#up)

#### Defined in

node_modules/pixi-viewport/index.d.ts:385

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
