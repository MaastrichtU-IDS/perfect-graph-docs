[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / TextureSystem

# Class: TextureSystem

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).TextureSystem

System plugin to the renderer to manage textures.

**`memberof`** PIXI

## Implements

- [`ISystem`](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.TextureSystem.md#constructor)

### Properties

- [CONTEXT\_UID](components_ClusterNodeContainer._internal_.TextureSystem.md#context_uid)
- [\_unknownBoundTextures](components_ClusterNodeContainer._internal_.TextureSystem.md#_unknownboundtextures)
- [boundTextures](components_ClusterNodeContainer._internal_.TextureSystem.md#boundtextures)
- [currentLocation](components_ClusterNodeContainer._internal_.TextureSystem.md#currentlocation)
- [emptyTextures](components_ClusterNodeContainer._internal_.TextureSystem.md#emptytextures)
- [gl](components_ClusterNodeContainer._internal_.TextureSystem.md#gl)
- [hasIntegerTextures](components_ClusterNodeContainer._internal_.TextureSystem.md#hasintegertextures)
- [internalFormats](components_ClusterNodeContainer._internal_.TextureSystem.md#internalformats)
- [managedTextures](components_ClusterNodeContainer._internal_.TextureSystem.md#managedtextures)
- [renderer](components_ClusterNodeContainer._internal_.TextureSystem.md#renderer)
- [unknownTexture](components_ClusterNodeContainer._internal_.TextureSystem.md#unknowntexture)
- [webGLVersion](components_ClusterNodeContainer._internal_.TextureSystem.md#webglversion)

### Methods

- [bind](components_ClusterNodeContainer._internal_.TextureSystem.md#bind)
- [contextChange](components_ClusterNodeContainer._internal_.TextureSystem.md#contextchange)
- [destroyTexture](components_ClusterNodeContainer._internal_.TextureSystem.md#destroytexture)
- [ensureSamplerType](components_ClusterNodeContainer._internal_.TextureSystem.md#ensuresamplertype)
- [initTexture](components_ClusterNodeContainer._internal_.TextureSystem.md#inittexture)
- [initTextureType](components_ClusterNodeContainer._internal_.TextureSystem.md#inittexturetype)
- [reset](components_ClusterNodeContainer._internal_.TextureSystem.md#reset)
- [setStyle](components_ClusterNodeContainer._internal_.TextureSystem.md#setstyle)
- [unbind](components_ClusterNodeContainer._internal_.TextureSystem.md#unbind)
- [updateTexture](components_ClusterNodeContainer._internal_.TextureSystem.md#updatetexture)
- [updateTextureStyle](components_ClusterNodeContainer._internal_.TextureSystem.md#updatetexturestyle)

## Constructors

### constructor

• **new TextureSystem**(`renderer`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) | The renderer this System works for. |

#### Defined in

node_modules/@pixi/core/index.d.ts:5053

## Properties

### CONTEXT\_UID

• `Protected` **CONTEXT\_UID**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:5035

___

### \_unknownBoundTextures

• `Protected` **\_unknownBoundTextures**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:5044

___

### boundTextures

• **boundTextures**: [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\>[]

#### Defined in

node_modules/@pixi/core/index.d.ts:5031

___

### currentLocation

• **currentLocation**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:5045

___

### emptyTextures

• **emptyTextures**: `Object`

#### Index signature

▪ [key: `number`]: [`GLTexture`](components_ClusterNodeContainer._internal_.GLTexture.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:5046

___

### gl

• `Protected` **gl**: [`IRenderingContext`](../interfaces/components_ClusterNodeContainer._internal_.IRenderingContext.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:5036

___

### hasIntegerTextures

• `Protected` **hasIntegerTextures**: `boolean`

Whether glTexture with int/uint sampler type was uploaded.

#### Defined in

node_modules/@pixi/core/index.d.ts:5034

___

### internalFormats

• `Protected` **internalFormats**: `Object`

#### Index signature

▪ [type: `number`]: { [format: number]: `number`;  }

#### Defined in

node_modules/@pixi/core/index.d.ts:5037

___

### managedTextures

• **managedTextures**: [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\>[]

#### Defined in

node_modules/@pixi/core/index.d.ts:5032

___

### renderer

• `Private` **renderer**: `any`

#### Defined in

node_modules/@pixi/core/index.d.ts:5049

___

### unknownTexture

• `Protected` **unknownTexture**: [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\>

#### Defined in

node_modules/@pixi/core/index.d.ts:5043

___

### webGLVersion

• `Protected` **webGLVersion**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:5042

## Methods

### bind

▸ **bind**(`texture`, `location?`): `void`

Bind a texture to a specific location

If you want to unbind something, please use `unbind(texture)` instead of `bind(null, textureLocation)`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\> \| [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\> |
| `location?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:5066

___

### contextChange

▸ **contextChange**(): `void`

Sets up the renderer context and necessary buffers.

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:5057

___

### destroyTexture

▸ `Private` **destroyTexture**(`texture`, `skipRemove?`): `void`

Deletes the texture from WebGL

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\> \| [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\> |
| `skipRemove?` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:5107

___

### ensureSamplerType

▸ **ensureSamplerType**(`maxTextures`): `void`

Ensures that current boundTextures all have FLOAT sampler type,
see {@link PIXI.SAMPLER_TYPES} for explanation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxTextures` | `number` | number of locations to check |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:5084

___

### initTexture

▸ `Private` **initTexture**(`texture`): [`GLTexture`](components_ClusterNodeContainer._internal_.GLTexture.md)

Initialize a texture

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `texture` | [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\> | Texture to initialize |

#### Returns

[`GLTexture`](components_ClusterNodeContainer._internal_.GLTexture.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:5091

___

### initTextureType

▸ **initTextureType**(`texture`, `glTexture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\> |
| `glTexture` | [`GLTexture`](components_ClusterNodeContainer._internal_.GLTexture.md) |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:5092

___

### reset

▸ **reset**(): `void`

Resets texture location and bound textures

Actual `bind(null, i)` calls will be performed at next `unbind()` call

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:5072

___

### setStyle

▸ `Private` **setStyle**(`texture`, `glTexture`): `void`

Set style for texture

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `texture` | [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\> | Texture to update |
| `glTexture` | [`GLTexture`](components_ClusterNodeContainer._internal_.GLTexture.md) |  |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:5122

___

### unbind

▸ **unbind**(`texture?`): `void`

Unbind a texture

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `texture?` | [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\> | Texture to bind |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:5077

___

### updateTexture

▸ `Private` **updateTexture**(`texture`): `void`

Update a texture

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `texture` | [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\> | Texture to initialize |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:5099

___

### updateTextureStyle

▸ `Private` **updateTextureStyle**(`texture`): `void`

Update texture style such as mipmap flag

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `texture` | [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\> | Texture to update |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:5114
