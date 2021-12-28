[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / ClampZoom

# Class: ClampZoom

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).ClampZoom

## Hierarchy

- [`Plugin_2`](components_ClusterNodeContainer._internal_.Plugin_2.md)

  ↳ **`ClampZoom`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.ClampZoom.md#constructor)

### Properties

- [options](components_ClusterNodeContainer._internal_.ClampZoom.md#options)
- [parent](components_ClusterNodeContainer._internal_.ClampZoom.md#parent)
- [paused](components_ClusterNodeContainer._internal_.ClampZoom.md#paused)

### Methods

- [clamp](components_ClusterNodeContainer._internal_.ClampZoom.md#clamp)
- [destroy](components_ClusterNodeContainer._internal_.ClampZoom.md#destroy)
- [down](components_ClusterNodeContainer._internal_.ClampZoom.md#down)
- [move](components_ClusterNodeContainer._internal_.ClampZoom.md#move)
- [pause](components_ClusterNodeContainer._internal_.ClampZoom.md#pause)
- [reset](components_ClusterNodeContainer._internal_.ClampZoom.md#reset)
- [resize](components_ClusterNodeContainer._internal_.ClampZoom.md#resize)
- [resume](components_ClusterNodeContainer._internal_.ClampZoom.md#resume)
- [up](components_ClusterNodeContainer._internal_.ClampZoom.md#up)
- [update](components_ClusterNodeContainer._internal_.ClampZoom.md#update)
- [wheel](components_ClusterNodeContainer._internal_.ClampZoom.md#wheel)

## Constructors

### constructor

• **new ClampZoom**(`parent`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`Viewport`](components_ClusterNodeContainer._internal_.Viewport.md) |
| `options?` | `Object` |

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[constructor](components_ClusterNodeContainer._internal_.Plugin_2.md#constructor)

#### Defined in

node_modules/pixi-viewport/index.d.ts:80

## Properties

### options

• `Readonly` **options**: [`Required`](../modules/components_ClusterNodeContainer._internal_.md#required)<[`IClampZoomOptions`](../interfaces/components_ClusterNodeContainer._internal_.IClampZoomOptions.md)\>

#### Defined in

node_modules/pixi-viewport/index.d.ts:79

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

## Methods

### clamp

▸ **clamp**(): `void`

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:82

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

▸ **down**(`_e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_e` | [`InteractionEvent`](components_ClusterNodeContainer._internal_.InteractionEvent.md) |

#### Returns

`boolean`

#### Inherited from

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[down](components_ClusterNodeContainer._internal_.Plugin_2.md#down)

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

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[reset](components_ClusterNodeContainer._internal_.Plugin_2.md#reset)

#### Defined in

node_modules/pixi-viewport/index.d.ts:83

___

### resize

▸ **resize**(): `void`

#### Returns

`void`

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[resize](components_ClusterNodeContainer._internal_.Plugin_2.md#resize)

#### Defined in

node_modules/pixi-viewport/index.d.ts:81

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
