[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / IMaskTarget

# Interface: IMaskTarget

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).IMaskTarget

## Hierarchy

- [`IFilterTarget`](components_ClusterNodeContainer._internal_.IFilterTarget.md)

  ↳ **`IMaskTarget`**

  ↳↳ [`ISpriteMaskTarget`](components_ClusterNodeContainer._internal_.ISpriteMaskTarget.md)

  ↳↳ [`ISpriteMaskTarget`](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.ISpriteMaskTarget.md)

## Table of contents

### Properties

- [filterArea](components_ClusterNodeContainer._internal_.IMaskTarget.md#filterarea)
- [isSprite](components_ClusterNodeContainer._internal_.IMaskTarget.md#issprite)
- [renderable](components_ClusterNodeContainer._internal_.IMaskTarget.md#renderable)
- [worldTransform](components_ClusterNodeContainer._internal_.IMaskTarget.md#worldtransform)

### Methods

- [getBounds](components_ClusterNodeContainer._internal_.IMaskTarget.md#getbounds)
- [isFastRect](components_ClusterNodeContainer._internal_.IMaskTarget.md#isfastrect)
- [render](components_ClusterNodeContainer._internal_.IMaskTarget.md#render)

## Properties

### filterArea

• **filterArea**: [`Rectangle`](../classes/components_ClusterNodeContainer._internal_.Rectangle.md)

#### Inherited from

[IFilterTarget](components_ClusterNodeContainer._internal_.IFilterTarget.md).[filterArea](components_ClusterNodeContainer._internal_.IFilterTarget.md#filterarea)

#### Defined in

node_modules/@pixi/core/index.d.ts:2740

___

### isSprite

• `Optional` **isSprite**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:2853

___

### renderable

• **renderable**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:2852

___

### worldTransform

• **worldTransform**: [`Matrix`](../classes/components_ClusterNodeContainer._internal_.Matrix.md)

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

#### Overrides

[IFilterTarget](components_ClusterNodeContainer._internal_.IFilterTarget.md).[getBounds](components_ClusterNodeContainer._internal_.IFilterTarget.md#getbounds)

#### Defined in

node_modules/@pixi/core/index.d.ts:2856

___

### isFastRect

▸ `Optional` **isFastRect**(): `boolean`

#### Returns

`boolean`

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

#### Defined in

node_modules/@pixi/core/index.d.ts:2857