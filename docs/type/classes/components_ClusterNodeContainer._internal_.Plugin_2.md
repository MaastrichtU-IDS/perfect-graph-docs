[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Plugin\_2

# Class: Plugin\_2

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Plugin_2

## Hierarchy

- **`Plugin_2`**

  ↳ [`Animate`](components_ClusterNodeContainer._internal_.Animate.md)

  ↳ [`Bounce`](components_ClusterNodeContainer._internal_.Bounce.md)

  ↳ [`Clamp`](components_ClusterNodeContainer._internal_.Clamp.md)

  ↳ [`ClampZoom`](components_ClusterNodeContainer._internal_.ClampZoom.md)

  ↳ [`Decelerate`](components_ClusterNodeContainer._internal_.Decelerate.md)

  ↳ [`Drag`](components_ClusterNodeContainer._internal_.Drag.md)

  ↳ [`Follow`](components_ClusterNodeContainer._internal_.Follow.md)

  ↳ [`MouseEdges`](components_ClusterNodeContainer._internal_.MouseEdges.md)

  ↳ [`Pinch`](components_ClusterNodeContainer._internal_.Pinch.md)

  ↳ [`Snap`](components_ClusterNodeContainer._internal_.Snap.md)

  ↳ [`SnapZoom`](components_ClusterNodeContainer._internal_.SnapZoom.md)

  ↳ [`Wheel`](components_ClusterNodeContainer._internal_.Wheel.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Plugin_2.md#constructor)

### Properties

- [parent](components_ClusterNodeContainer._internal_.Plugin_2.md#parent)
- [paused](components_ClusterNodeContainer._internal_.Plugin_2.md#paused)

### Methods

- [destroy](components_ClusterNodeContainer._internal_.Plugin_2.md#destroy)
- [down](components_ClusterNodeContainer._internal_.Plugin_2.md#down)
- [move](components_ClusterNodeContainer._internal_.Plugin_2.md#move)
- [pause](components_ClusterNodeContainer._internal_.Plugin_2.md#pause)
- [reset](components_ClusterNodeContainer._internal_.Plugin_2.md#reset)
- [resize](components_ClusterNodeContainer._internal_.Plugin_2.md#resize)
- [resume](components_ClusterNodeContainer._internal_.Plugin_2.md#resume)
- [up](components_ClusterNodeContainer._internal_.Plugin_2.md#up)
- [update](components_ClusterNodeContainer._internal_.Plugin_2.md#update)
- [wheel](components_ClusterNodeContainer._internal_.Plugin_2.md#wheel)

## Constructors

### constructor

• **new Plugin_2**(`parent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`Viewport`](components_ClusterNodeContainer._internal_.Viewport.md) |

#### Defined in

node_modules/pixi-viewport/index.d.ts:391

## Properties

### parent

• `Readonly` **parent**: [`Viewport`](components_ClusterNodeContainer._internal_.Viewport.md)

#### Defined in

node_modules/pixi-viewport/index.d.ts:389

___

### paused

• **paused**: `boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:390

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:392

___

### down

▸ **down**(`_e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_e` | [`InteractionEvent`](components_ClusterNodeContainer._internal_.InteractionEvent.md) |

#### Returns

`boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:393

___

### move

▸ **move**(`_e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_e` | [`InteractionEvent`](components_ClusterNodeContainer._internal_.InteractionEvent.md) |

#### Returns

`boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:394

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:400

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:399

___

### resize

▸ **resize**(): `void`

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:398

___

### resume

▸ **resume**(): `void`

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:401

___

### up

▸ **up**(`_e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_e` | [`InteractionEvent`](components_ClusterNodeContainer._internal_.InteractionEvent.md) |

#### Returns

`boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:395

___

### update

▸ **update**(`_delta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_delta` | `number` |

#### Returns

`void`

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

#### Defined in

node_modules/pixi-viewport/index.d.ts:396
