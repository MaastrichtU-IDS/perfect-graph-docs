[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / ISpriteMaskTarget

# Interface: ISpriteMaskTarget

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).ISpriteMaskTarget

## Hierarchy

- [`IMaskTarget`](components_ClusterNodeContainer._internal_.IMaskTarget.md)

  ↳ **`ISpriteMaskTarget`**

## Table of contents

### Properties

- [\_texture](components_ClusterNodeContainer._internal_.ISpriteMaskTarget.md#_texture)
- [anchor](components_ClusterNodeContainer._internal_.ISpriteMaskTarget.md#anchor)
- [filterArea](components_ClusterNodeContainer._internal_.ISpriteMaskTarget.md#filterarea)
- [isSprite](components_ClusterNodeContainer._internal_.ISpriteMaskTarget.md#issprite)
- [renderable](components_ClusterNodeContainer._internal_.ISpriteMaskTarget.md#renderable)
- [worldAlpha](components_ClusterNodeContainer._internal_.ISpriteMaskTarget.md#worldalpha)
- [worldTransform](components_ClusterNodeContainer._internal_.ISpriteMaskTarget.md#worldtransform)

### Methods

- [getBounds](components_ClusterNodeContainer._internal_.ISpriteMaskTarget.md#getbounds)
- [isFastRect](components_ClusterNodeContainer._internal_.ISpriteMaskTarget.md#isfastrect)
- [render](components_ClusterNodeContainer._internal_.ISpriteMaskTarget.md#render)

## Properties

### \_texture

• **\_texture**: [`Texture`](../classes/components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](../classes/components_ClusterNodeContainer._internal_.Resource.md)\>

#### Defined in

node_modules/@pixi/core/index.d.ts:2985

___

### anchor

• **anchor**: [`Point`](../classes/components_ClusterNodeContainer._internal_.Point.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2987

___

### filterArea

• **filterArea**: [`Rectangle`](../classes/components_ClusterNodeContainer._internal_.Rectangle.md)

#### Inherited from

[IMaskTarget](components_ClusterNodeContainer._internal_.IMaskTarget.md).[filterArea](components_ClusterNodeContainer._internal_.IMaskTarget.md#filterarea)

#### Defined in

node_modules/@pixi/core/index.d.ts:2740

___

### isSprite

• `Optional` **isSprite**: `boolean`

#### Inherited from

[IMaskTarget](components_ClusterNodeContainer._internal_.IMaskTarget.md).[isSprite](components_ClusterNodeContainer._internal_.IMaskTarget.md#issprite)

#### Defined in

node_modules/@pixi/core/index.d.ts:2853

___

### renderable

• **renderable**: `boolean`

#### Inherited from

[IMaskTarget](components_ClusterNodeContainer._internal_.IMaskTarget.md).[renderable](components_ClusterNodeContainer._internal_.IMaskTarget.md#renderable)

#### Defined in

node_modules/@pixi/core/index.d.ts:2852

___

### worldAlpha

• **worldAlpha**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:2986

___

### worldTransform

• **worldTransform**: [`Matrix`](../classes/components_ClusterNodeContainer._internal_.Matrix.md)

#### Inherited from

[IMaskTarget](components_ClusterNodeContainer._internal_.IMaskTarget.md).[worldTransform](components_ClusterNodeContainer._internal_.IMaskTarget.md#worldtransform)

#### Defined in

node_modules/@pixi/core/index.d.ts:2854

## Methods

### getBounds

▸ **getBounds**(`skipUpdate?`): [`Rectangle`](../classes/components_ClusterNodeContainer._internal_.Rectangle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipUpdate?` | `boolean` |

#### Returns

[`Rectangle`](../classes/components_ClusterNodeContainer._internal_.Rectangle.md)

#### Inherited from

[IMaskTarget](components_ClusterNodeContainer._internal_.IMaskTarget.md).[getBounds](components_ClusterNodeContainer._internal_.IMaskTarget.md#getbounds)

#### Defined in

node_modules/@pixi/core/index.d.ts:2856

___

### isFastRect

▸ `Optional` **isFastRect**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[IMaskTarget](components_ClusterNodeContainer._internal_.IMaskTarget.md).[isFastRect](components_ClusterNodeContainer._internal_.IMaskTarget.md#isfastrect)

#### Defined in

node_modules/@pixi/core/index.d.ts:2855

___

### render

▸ **render**(`renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | [`Renderer`](../classes/components_ClusterNodeContainer._internal_.Renderer.md) |

#### Returns

`void`

#### Inherited from

[IMaskTarget](components_ClusterNodeContainer._internal_.IMaskTarget.md).[render](components_ClusterNodeContainer._internal_.IMaskTarget.md#render)

#### Defined in

node_modules/@pixi/core/index.d.ts:2857
