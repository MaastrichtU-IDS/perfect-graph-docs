[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / TextureMatrix

# Class: TextureMatrix

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).TextureMatrix

Class controls uv mapping from Texture normal space to BaseTexture normal space.

Takes `trim` and `rotate` into account. May contain clamp settings for Meshes and TilingSprite.

Can be used in Texture `uvMatrix` field, or separately, you can use different clamp settings on the same texture.
If you want to add support for texture region of certain feature or filter, that's what you're looking for.

Takes track of Texture changes through `_lastTextureID` private field.
Use `update()` method call to track it from outside.

**`see`** PIXI.Texture

**`see`** PIXI.Mesh

**`see`** PIXI.TilingSprite

**`memberof`** PIXI

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.TextureMatrix.md#constructor)

### Properties

- [\_texture](components_ClusterNodeContainer._internal_.TextureMatrix.md#_texture)
- [\_textureID](components_ClusterNodeContainer._internal_.TextureMatrix.md#_textureid)
- [\_updateID](components_ClusterNodeContainer._internal_.TextureMatrix.md#_updateid)
- [clampMargin](components_ClusterNodeContainer._internal_.TextureMatrix.md#clampmargin)
- [clampOffset](components_ClusterNodeContainer._internal_.TextureMatrix.md#clampoffset)
- [isSimple](components_ClusterNodeContainer._internal_.TextureMatrix.md#issimple)
- [mapCoord](components_ClusterNodeContainer._internal_.TextureMatrix.md#mapcoord)
- [uClampFrame](components_ClusterNodeContainer._internal_.TextureMatrix.md#uclampframe)
- [uClampOffset](components_ClusterNodeContainer._internal_.TextureMatrix.md#uclampoffset)

### Accessors

- [texture](components_ClusterNodeContainer._internal_.TextureMatrix.md#texture)

### Methods

- [multiplyUvs](components_ClusterNodeContainer._internal_.TextureMatrix.md#multiplyuvs)
- [update](components_ClusterNodeContainer._internal_.TextureMatrix.md#update)

## Constructors

### constructor

• **new TextureMatrix**(`texture`, `clampMargin?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `texture` | [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\> | observed texture |
| `clampMargin?` | `number` | - |

#### Defined in

node_modules/@pixi/core/index.d.ts:4999

## Properties

### \_texture

• **\_texture**: [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>

#### Defined in

node_modules/@pixi/core/index.d.ts:4991

___

### \_textureID

• **\_textureID**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:4989

___

### \_updateID

• **\_updateID**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:4990

___

### clampMargin

• **clampMargin**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:4986

___

### clampOffset

• **clampOffset**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:4985

___

### isSimple

• **isSimple**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:4992

___

### mapCoord

• **mapCoord**: [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:4984

___

### uClampFrame

• `Readonly` **uClampFrame**: `Float32Array`

#### Defined in

node_modules/@pixi/core/index.d.ts:4987

___

### uClampOffset

• `Readonly` **uClampOffset**: `Float32Array`

#### Defined in

node_modules/@pixi/core/index.d.ts:4988

## Accessors

### texture

• `get` **texture**(): [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>

texture property

**`member`** {PIXI.Texture}

#### Returns

[`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>

#### Defined in

node_modules/@pixi/core/index.d.ts:5004

• `set` **texture**(`value`): `void`

texture property

**`member`** {PIXI.Texture}

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\> |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:5005

## Methods

### multiplyUvs

▸ **multiplyUvs**(`uvs`, `out?`): `Float32Array`

Multiplies uvs array to transform

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uvs` | `Float32Array` | mesh uvs |
| `out?` | `Float32Array` | - |

#### Returns

`Float32Array`

output

#### Defined in

node_modules/@pixi/core/index.d.ts:5012

___

### update

▸ **update**(`forceUpdate?`): `boolean`

updates matrices if texture was changed

#### Parameters

| Name | Type |
| :------ | :------ |
| `forceUpdate?` | `boolean` |

#### Returns

`boolean`

whether or not it was updated

#### Defined in

node_modules/@pixi/core/index.d.ts:5018