[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Clamp

# Class: Clamp

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Clamp

## Hierarchy

- [`Plugin_2`](components_ClusterNodeContainer._internal_.Plugin_2.md)

  ↳ **`Clamp`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Clamp.md#constructor)

### Properties

- [last](components_ClusterNodeContainer._internal_.Clamp.md#last)
- [noUnderflow](components_ClusterNodeContainer._internal_.Clamp.md#nounderflow)
- [options](components_ClusterNodeContainer._internal_.Clamp.md#options)
- [parent](components_ClusterNodeContainer._internal_.Clamp.md#parent)
- [parseUnderflow](components_ClusterNodeContainer._internal_.Clamp.md#parseunderflow)
- [paused](components_ClusterNodeContainer._internal_.Clamp.md#paused)
- [underflowX](components_ClusterNodeContainer._internal_.Clamp.md#underflowx)
- [underflowY](components_ClusterNodeContainer._internal_.Clamp.md#underflowy)

### Methods

- [destroy](components_ClusterNodeContainer._internal_.Clamp.md#destroy)
- [down](components_ClusterNodeContainer._internal_.Clamp.md#down)
- [move](components_ClusterNodeContainer._internal_.Clamp.md#move)
- [pause](components_ClusterNodeContainer._internal_.Clamp.md#pause)
- [reset](components_ClusterNodeContainer._internal_.Clamp.md#reset)
- [resize](components_ClusterNodeContainer._internal_.Clamp.md#resize)
- [resume](components_ClusterNodeContainer._internal_.Clamp.md#resume)
- [up](components_ClusterNodeContainer._internal_.Clamp.md#up)
- [update](components_ClusterNodeContainer._internal_.Clamp.md#update)
- [wheel](components_ClusterNodeContainer._internal_.Clamp.md#wheel)

## Constructors

### constructor

• **new Clamp**(`parent`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`Viewport`](components_ClusterNodeContainer._internal_.Viewport.md) |
| `options?` | [`IClampOptions`](../interfaces/components_ClusterNodeContainer._internal_.IClampOptions.md) |

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[constructor](components_ClusterNodeContainer._internal_.Plugin_2.md#constructor)

#### Defined in

node_modules/pixi-viewport/index.d.ts:71

## Properties

### last

• `Protected` **last**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `scaleX` | ``null`` \| `number` |
| `scaleY` | ``null`` \| `number` |
| `x` | ``null`` \| `number` |
| `y` | ``null`` \| `number` |

#### Defined in

node_modules/pixi-viewport/index.d.ts:62

___

### noUnderflow

• `Protected` **noUnderflow**: `boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:68

___

### options

• `Readonly` **options**: [`Required`](../modules/components_ClusterNodeContainer._internal_.md#required)<[`IClampOptions`](../interfaces/components_ClusterNodeContainer._internal_.IClampOptions.md)\>

#### Defined in

node_modules/pixi-viewport/index.d.ts:61

___

### parent

• `Readonly` **parent**: [`Viewport`](components_ClusterNodeContainer._internal_.Viewport.md)

#### Inherited from

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[parent](components_ClusterNodeContainer._internal_.Plugin_2.md#parent)

#### Defined in

node_modules/pixi-viewport/index.d.ts:389

___

### parseUnderflow

• `Private` **parseUnderflow**: `any`

#### Defined in

node_modules/pixi-viewport/index.d.ts:72

___

### paused

• **paused**: `boolean`

#### Inherited from

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[paused](components_ClusterNodeContainer._internal_.Plugin_2.md#paused)

#### Defined in

node_modules/pixi-viewport/index.d.ts:390

___

### underflowX

• `Protected` **underflowX**: ``0`` \| ``1`` \| ``-1``

#### Defined in

node_modules/pixi-viewport/index.d.ts:69

___

### underflowY

• `Protected` **underflowY**: ``0`` \| ``1`` \| ``-1``

#### Defined in

node_modules/pixi-viewport/index.d.ts:70

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

▸ **move**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[move](components_ClusterNodeContainer._internal_.Plugin_2.md#move)

#### Defined in

node_modules/pixi-viewport/index.d.ts:73

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

node_modules/pixi-viewport/index.d.ts:75

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

▸ **update**(): `void`

#### Returns

`void`

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[update](components_ClusterNodeContainer._internal_.Plugin_2.md#update)

#### Defined in

node_modules/pixi-viewport/index.d.ts:74

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
