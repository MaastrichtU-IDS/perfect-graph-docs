[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / FilterSystem

# Class: FilterSystem

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).FilterSystem

System plugin to the renderer to manage filters.

## Pipeline

The FilterSystem executes the filtering pipeline by rendering the display-object into a texture, applying its
[filters]{@link PIXI.Filter} in series, and the last filter outputs into the final render-target.

The filter-frame is the rectangle in world space being filtered, and those contents are mapped into
`(0, 0, filterFrame.width, filterFrame.height)` into the filter render-texture. The filter-frame is also called
the source-frame, as it is used to bind the filter render-textures. The last filter outputs to the `filterFrame`
in the final render-target.

## Usage

{@link PIXI.Container#renderAdvanced} is an example of how to use the filter system. It is a 3 step process:

* **push**: Use {@link PIXI.FilterSystem#push} to push the set of filters to be applied on a filter-target.
* **render**: Render the contents to be filtered using the renderer. The filter-system will only capture the contents
     inside the bounds of the filter-target. NOTE: Using {@link PIXI.Renderer#render} is
     illegal during an existing render cycle, and it may reset the filter system.
* **pop**: Use {@link PIXI.FilterSystem#pop} to pop & execute the filters you initially pushed. It will apply them
     serially and output to the bounds of the filter-target.

**`memberof`** PIXI

## Implements

- [`ISystem`](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.FilterSystem.md#constructor)

### Properties

- [activeState](components_ClusterNodeContainer._internal_.FilterSystem.md#activestate)
- [defaultFilterStack](components_ClusterNodeContainer._internal_.FilterSystem.md#defaultfilterstack)
- [forceClear](components_ClusterNodeContainer._internal_.FilterSystem.md#forceclear)
- [globalUniforms](components_ClusterNodeContainer._internal_.FilterSystem.md#globaluniforms)
- [quad](components_ClusterNodeContainer._internal_.FilterSystem.md#quad)
- [quadUv](components_ClusterNodeContainer._internal_.FilterSystem.md#quaduv)
- [renderer](components_ClusterNodeContainer._internal_.FilterSystem.md#renderer)
- [roundFrame](components_ClusterNodeContainer._internal_.FilterSystem.md#roundframe)
- [statePool](components_ClusterNodeContainer._internal_.FilterSystem.md#statepool)
- [tempRect](components_ClusterNodeContainer._internal_.FilterSystem.md#temprect)
- [texturePool](components_ClusterNodeContainer._internal_.FilterSystem.md#texturepool)
- [transformAABB](components_ClusterNodeContainer._internal_.FilterSystem.md#transformaabb)
- [useMaxPadding](components_ClusterNodeContainer._internal_.FilterSystem.md#usemaxpadding)

### Methods

- [applyFilter](components_ClusterNodeContainer._internal_.FilterSystem.md#applyfilter)
- [bindAndClear](components_ClusterNodeContainer._internal_.FilterSystem.md#bindandclear)
- [calculateSpriteMatrix](components_ClusterNodeContainer._internal_.FilterSystem.md#calculatespritematrix)
- [destroy](components_ClusterNodeContainer._internal_.FilterSystem.md#destroy)
- [emptyPool](components_ClusterNodeContainer._internal_.FilterSystem.md#emptypool)
- [getFilterTexture](components_ClusterNodeContainer._internal_.FilterSystem.md#getfiltertexture)
- [getOptimalFilterTexture](components_ClusterNodeContainer._internal_.FilterSystem.md#getoptimalfiltertexture)
- [pop](components_ClusterNodeContainer._internal_.FilterSystem.md#pop)
- [push](components_ClusterNodeContainer._internal_.FilterSystem.md#push)
- [resize](components_ClusterNodeContainer._internal_.FilterSystem.md#resize)
- [returnFilterTexture](components_ClusterNodeContainer._internal_.FilterSystem.md#returnfiltertexture)

## Constructors

### constructor

• **new FilterSystem**(`renderer`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) | The renderer this System works for. |

#### Defined in

node_modules/@pixi/core/index.d.ts:2025

## Properties

### activeState

• `Protected` **activeState**: [`FilterState`](components_ClusterNodeContainer._internal_.FilterState.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2018

___

### defaultFilterStack

• `Readonly` **defaultFilterStack**: [`FilterState`](components_ClusterNodeContainer._internal_.FilterState.md)[]

#### Defined in

node_modules/@pixi/core/index.d.ts:2011

___

### forceClear

• **forceClear**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:2014

___

### globalUniforms

• `Protected` **globalUniforms**: [`UniformGroup`](components_ClusterNodeContainer._internal_.UniformGroup.md)<[`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\>\>

#### Defined in

node_modules/@pixi/core/index.d.ts:2019

___

### quad

• `Protected` **quad**: [`Quad`](components_ClusterNodeContainer._internal_.Quad.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2016

___

### quadUv

• `Protected` **quadUv**: [`QuadUv`](components_ClusterNodeContainer._internal_.QuadUv.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2017

___

### renderer

• **renderer**: [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2021

___

### roundFrame

• `Private` **roundFrame**: `any`

#### Defined in

node_modules/@pixi/core/index.d.ts:2108

___

### statePool

• **statePool**: [`FilterState`](components_ClusterNodeContainer._internal_.FilterState.md)[]

#### Defined in

node_modules/@pixi/core/index.d.ts:2012

___

### tempRect

• `Private` **tempRect**: `any`

#### Defined in

node_modules/@pixi/core/index.d.ts:2020

___

### texturePool

• **texturePool**: [`RenderTexturePool`](components_ClusterNodeContainer._internal_.RenderTexturePool.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2013

___

### transformAABB

• `Private` **transformAABB**: `any`

**`param`** first param

**`param`** second param

#### Defined in

node_modules/@pixi/core/index.d.ts:2107

___

### useMaxPadding

• **useMaxPadding**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:2015

## Methods

### applyFilter

▸ **applyFilter**(`filter`, `input`, `output`, `clearMode?`): `void`

Draws a filter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter` | [`Filter`](components_ClusterNodeContainer._internal_.Filter.md) | The filter to draw. |
| `input` | [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md) | The input render target. |
| `output` | [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md) | The target to output to. |
| `clearMode?` | [`CLEAR_MODES`](../enums/components_ClusterNodeContainer._internal_.CLEAR_MODES.md) | - |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2053

___

### bindAndClear

▸ **bindAndClear**(`filterTexture`, `clearMode?`): `void`

Binds a renderTexture with corresponding `filterFrame`, clears it if mode corresponds.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filterTexture` | [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md) | renderTexture to bind, should belong to filter pool or filter stack |
| `clearMode?` | [`CLEAR_MODES`](../enums/components_ClusterNodeContainer._internal_.CLEAR_MODES.md) | - |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2044

___

### calculateSpriteMatrix

▸ **calculateSpriteMatrix**(`outputMatrix`, `sprite`): [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

Multiply _input normalized coordinates_ to this matrix to get _sprite texture normalized coordinates_.

Use `outputMatrix * vTextureCoord` in the shader.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outputMatrix` | [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md) | The matrix to output to. |
| `sprite` | [`ISpriteMaskTarget`](../interfaces/components_ClusterNodeContainer._internal_.ISpriteMaskTarget.md) | The sprite to map to. |

#### Returns

[`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

The mapped matrix.

#### Defined in

node_modules/@pixi/core/index.d.ts:2063

___

### destroy

▸ **destroy**(): `void`

Destroys this Filter System.

#### Returns

`void`

#### Implementation of

[ISystem](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md).[destroy](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md#destroy)

#### Defined in

node_modules/@pixi/core/index.d.ts:2067

___

### emptyPool

▸ **emptyPool**(): `void`

Empties the texture pool.

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2098

___

### getFilterTexture

▸ **getFilterTexture**(`input?`, `resolution?`, `multisample?`): [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

Gets extra render texture to use inside current filter
To be compliant with older filters, you can use params in any order

#### Parameters

| Name | Type |
| :------ | :------ |
| `input?` | [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md) |
| `resolution?` | `number` |
| `multisample?` | [`MSAA_QUALITY`](../enums/components_ClusterNodeContainer._internal_.MSAA_QUALITY.md) |

#### Returns

[`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2088

___

### getOptimalFilterTexture

▸ `Protected` **getOptimalFilterTexture**(`minWidth`, `minHeight`, `resolution?`, `multisample?`): [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

Gets a Power-of-Two render texture or fullScreen texture

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minWidth` | `number` | The minimum width of the render texture in real pixels. |
| `minHeight` | `number` | The minimum height of the render texture in real pixels. |
| `resolution?` | `number` | - |
| `multisample?` | [`MSAA_QUALITY`](../enums/components_ClusterNodeContainer._internal_.MSAA_QUALITY.md) | - |

#### Returns

[`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

The new render texture.

#### Defined in

node_modules/@pixi/core/index.d.ts:2078

___

### pop

▸ **pop**(): `void`

Pops off the filter and applies it.

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2037

___

### push

▸ **push**(`target`, `filters`): `void`

Pushes a set of filters to be applied later to the system. This will redirect further rendering into an
input render-texture for the rest of the filtering pipeline.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`IFilterTarget`](../interfaces/components_ClusterNodeContainer._internal_.IFilterTarget.md) | The target of the filter to render. |
| `filters` | [`Filter`](components_ClusterNodeContainer._internal_.Filter.md)[] | The filters to apply. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2033

___

### resize

▸ **resize**(): `void`

calls `texturePool.resize()`, affects fullScreen renderTextures

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2102

___

### returnFilterTexture

▸ **returnFilterTexture**(`renderTexture`): `void`

Frees a render texture back into the pool.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderTexture` | [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md) | The renderTarget to free |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2094