[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / RenderTexturePool

# Class: RenderTexturePool

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).RenderTexturePool

Texture pool, used by FilterSystem and plugins.

Stores collection of temporary pow2 or screen-sized renderTextures

If you use custom RenderTexturePool for your filters, you can use methods
`getFilterTexture` and `returnFilterTexture` same as in

**`memberof`** PIXI

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.RenderTexturePool.md#constructor)

### Properties

- [\_pixelsHeight](components_ClusterNodeContainer._internal_.RenderTexturePool.md#_pixelsheight)
- [\_pixelsWidth](components_ClusterNodeContainer._internal_.RenderTexturePool.md#_pixelswidth)
- [enableFullScreen](components_ClusterNodeContainer._internal_.RenderTexturePool.md#enablefullscreen)
- [textureOptions](components_ClusterNodeContainer._internal_.RenderTexturePool.md#textureoptions)
- [texturePool](components_ClusterNodeContainer._internal_.RenderTexturePool.md#texturepool)
- [SCREEN\_KEY](components_ClusterNodeContainer._internal_.RenderTexturePool.md#screen_key)

### Methods

- [clear](components_ClusterNodeContainer._internal_.RenderTexturePool.md#clear)
- [createTexture](components_ClusterNodeContainer._internal_.RenderTexturePool.md#createtexture)
- [getFilterTexture](components_ClusterNodeContainer._internal_.RenderTexturePool.md#getfiltertexture)
- [getOptimalTexture](components_ClusterNodeContainer._internal_.RenderTexturePool.md#getoptimaltexture)
- [returnFilterTexture](components_ClusterNodeContainer._internal_.RenderTexturePool.md#returnfiltertexture)
- [returnTexture](components_ClusterNodeContainer._internal_.RenderTexturePool.md#returntexture)
- [setScreenSize](components_ClusterNodeContainer._internal_.RenderTexturePool.md#setscreensize)

## Constructors

### constructor

• **new RenderTexturePool**(`textureOptions?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `textureOptions?` | [`IBaseTextureOptions`](../interfaces/components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md)<`any`\> | options that will be passed to BaseRenderTexture constructor |

#### Defined in

node_modules/@pixi/core/index.d.ts:3904

## Properties

### \_pixelsHeight

• `Private` **\_pixelsHeight**: `any`

#### Defined in

node_modules/@pixi/core/index.d.ts:3899

___

### \_pixelsWidth

• `Private` **\_pixelsWidth**: `any`

#### Defined in

node_modules/@pixi/core/index.d.ts:3898

___

### enableFullScreen

• **enableFullScreen**: `boolean`

Allow renderTextures of the same size as screen, not just pow2

Automatically sets to true after `setScreenSize`

**`default`** false

#### Defined in

node_modules/@pixi/core/index.d.ts:3894

___

### textureOptions

• **textureOptions**: [`IBaseTextureOptions`](../interfaces/components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md)<`any`\>

#### Defined in

node_modules/@pixi/core/index.d.ts:3886

___

### texturePool

• **texturePool**: `Object`

#### Defined in

node_modules/@pixi/core/index.d.ts:3895

___

### SCREEN\_KEY

▪ `Static` **SCREEN\_KEY**: `number`

Key that is used to store fullscreen renderTextures in a pool

**`constant`**

#### Defined in

node_modules/@pixi/core/index.d.ts:3967

## Methods

### clear

▸ **clear**(`destroyTextures?`): `void`

Clears the pool.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destroyTextures?` | `boolean` | Destroy all stored textures. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:3952

___

### createTexture

▸ **createTexture**(`realWidth`, `realHeight`, `multisample?`): [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

Creates texture with params that were specified in pool constructor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `realWidth` | `number` | Width of texture in pixels. |
| `realHeight` | `number` | Height of texture in pixels. |
| `multisample?` | [`MSAA_QUALITY`](../enums/components_ClusterNodeContainer._internal_.MSAA_QUALITY.md) | Number of samples of the framebuffer. |

#### Returns

[`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:3912

___

### getFilterTexture

▸ **getFilterTexture**(`input`, `resolution?`, `multisample?`): [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

Gets extra texture of the same size as input renderTexture

`getFilterTexture(input, 0.5)` or `getFilterTexture(0.5, input)`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md) | renderTexture from which size and resolution will be copied |
| `resolution?` | `number` | override resolution of the renderTexture  It overrides, it does not multiply |
| `multisample?` | [`MSAA_QUALITY`](../enums/components_ClusterNodeContainer._internal_.MSAA_QUALITY.md) | number of samples of the renderTexture |

#### Returns

[`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:3934

___

### getOptimalTexture

▸ **getOptimalTexture**(`minWidth`, `minHeight`, `resolution?`, `multisample?`): [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

Gets a Power-of-Two render texture or fullScreen texture

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minWidth` | `number` | The minimum width of the render texture. |
| `minHeight` | `number` | The minimum height of the render texture. |
| `resolution?` | `number` | The resolution of the render texture. |
| `multisample?` | [`MSAA_QUALITY`](../enums/components_ClusterNodeContainer._internal_.MSAA_QUALITY.md) | Number of samples of the render texture. |

#### Returns

[`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

The new render texture.

#### Defined in

node_modules/@pixi/core/index.d.ts:3922

___

### returnFilterTexture

▸ **returnFilterTexture**(`renderTexture`): `void`

Alias for returnTexture, to be compliant with FilterSystem interface.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderTexture` | [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md) | The renderTexture to free |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:3946

___

### returnTexture

▸ **returnTexture**(`renderTexture`): `void`

Place a render texture back into the pool.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderTexture` | [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md) | The renderTexture to free |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:3940

___

### setScreenSize

▸ **setScreenSize**(`size`): `void`

If screen size was changed, drops all screen-sized textures,
sets new screen size, sets `enableFullScreen` to true

Size is measured in pixels, `renderer.view` can be passed here, not `renderer.screen`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | [`ISize`](../interfaces/components_ClusterNodeContainer._internal_.ISize.md) | Initial size of screen. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:3961
