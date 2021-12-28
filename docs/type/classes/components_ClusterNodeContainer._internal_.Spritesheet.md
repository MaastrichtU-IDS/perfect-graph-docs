[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Spritesheet

# Class: Spritesheet

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Spritesheet

Utility class for maintaining reference to a collection
of Textures on a single Spritesheet.

To access a sprite sheet from your code pass its JSON data file to Pixi's loader:

```js
PIXI.Loader.shared.add("images/spritesheet.json").load(setup);

function setup() {
  let sheet = PIXI.Loader.shared.resources["images/spritesheet.json"].spritesheet;
  ...
}
```
With the `sheet.textures` you can create Sprite objects,`sheet.animations` can be used to create an AnimatedSprite.

Sprite sheets can be packed using tools like [TexturePacker](https://codeandweb.com/texturepacker),
[Shoebox](https://renderhjs.net/shoebox/) or [Spritesheet.js](https://github.com/krzysztof-o/spritesheet.js).
Default anchor points (see {@link PIXI.Texture#defaultAnchor}) and grouping of animation sprites are currently only
supported by TexturePacker.

**`memberof`** PIXI

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Spritesheet.md#constructor)

### Properties

- [\_batchIndex](components_ClusterNodeContainer._internal_.Spritesheet.md#_batchindex)
- [\_callback](components_ClusterNodeContainer._internal_.Spritesheet.md#_callback)
- [\_frameKeys](components_ClusterNodeContainer._internal_.Spritesheet.md#_framekeys)
- [\_frames](components_ClusterNodeContainer._internal_.Spritesheet.md#_frames)
- [\_nextBatch](components_ClusterNodeContainer._internal_.Spritesheet.md#_nextbatch)
- [\_parseComplete](components_ClusterNodeContainer._internal_.Spritesheet.md#_parsecomplete)
- [\_processAnimations](components_ClusterNodeContainer._internal_.Spritesheet.md#_processanimations)
- [\_processFrames](components_ClusterNodeContainer._internal_.Spritesheet.md#_processframes)
- [\_texture](components_ClusterNodeContainer._internal_.Spritesheet.md#_texture)
- [\_updateResolution](components_ClusterNodeContainer._internal_.Spritesheet.md#_updateresolution)
- [animations](components_ClusterNodeContainer._internal_.Spritesheet.md#animations)
- [baseTexture](components_ClusterNodeContainer._internal_.Spritesheet.md#basetexture)
- [data](components_ClusterNodeContainer._internal_.Spritesheet.md#data)
- [resolution](components_ClusterNodeContainer._internal_.Spritesheet.md#resolution)
- [textures](components_ClusterNodeContainer._internal_.Spritesheet.md#textures)
- [BATCH\_SIZE](components_ClusterNodeContainer._internal_.Spritesheet.md#batch_size)

### Methods

- [destroy](components_ClusterNodeContainer._internal_.Spritesheet.md#destroy)
- [parse](components_ClusterNodeContainer._internal_.Spritesheet.md#parse)

## Constructors

### constructor

• **new Spritesheet**(`texture`, `data`, `resolutionFilename?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `texture` | [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\> \| [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\> | - |
| `data` | [`ISpritesheetData`](../interfaces/components_ClusterNodeContainer._internal_.ISpritesheetData.md) | Spritesheet image data. |
| `resolutionFilename?` | `string` | The filename to consider when determining        the resolution of the spritesheet. If not provided, the imageUrl will        be used on the BaseTexture. |

#### Defined in

node_modules/@pixi/spritesheet/index.d.ts:120

## Properties

### \_batchIndex

• `Private` **\_batchIndex**: `any`

Current batch index being processed.

#### Defined in

node_modules/@pixi/spritesheet/index.d.ts:107

___

### \_callback

• `Private` **\_callback**: `any`

Callback when parse is completed.

#### Defined in

node_modules/@pixi/spritesheet/index.d.ts:112

___

### \_frameKeys

• `Private` **\_frameKeys**: `any`

Collection of frame names.

#### Defined in

node_modules/@pixi/spritesheet/index.d.ts:105

___

### \_frames

• `Private` **\_frames**: `any`

Map of spritesheet frames.

#### Defined in

node_modules/@pixi/spritesheet/index.d.ts:103

___

### \_nextBatch

• `Private` **\_nextBatch**: `any`

Begin the next batch of textures.

#### Defined in

node_modules/@pixi/spritesheet/index.d.ts:149

___

### \_parseComplete

• `Private` **\_parseComplete**: `any`

The parse has completed.

#### Defined in

node_modules/@pixi/spritesheet/index.d.ts:147

___

### \_processAnimations

• `Private` **\_processAnimations**: `any`

Parse animations config.

#### Defined in

node_modules/@pixi/spritesheet/index.d.ts:145

___

### \_processFrames

• `Private` **\_processFrames**: `any`

Process a batch of frames

**`param`** The index of frame to start.

#### Defined in

node_modules/@pixi/spritesheet/index.d.ts:143

___

### \_texture

• `Private` **\_texture**: `any`

Reference to original source image from the Loader. This reference is retained so we
can destroy the Texture later on. It is never used internally.

#### Defined in

node_modules/@pixi/spritesheet/index.d.ts:98

___

### \_updateResolution

• `Private` **\_updateResolution**: `any`

Generate the resolution from the filename or fallback
to the meta.scale field of the JSON data.

**`param`** The filename to use for resolving
       the default resolution.

**`returns`** Resolution to use for spritesheet.

#### Defined in

node_modules/@pixi/spritesheet/index.d.ts:129

___

### animations

• **animations**: [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<[`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>[]\>

A map containing the textures for each animation.
Can be used to create an {@link PIXI.AnimatedSprite|AnimatedSprite}:
```js
new PIXI.AnimatedSprite(sheet.animations["anim_name"])
```

#### Defined in

node_modules/@pixi/spritesheet/index.d.ts:86

___

### baseTexture

• **baseTexture**: [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\>

Reference to ths source texture.

#### Defined in

node_modules/@pixi/spritesheet/index.d.ts:70

___

### data

• **data**: [`ISpritesheetData`](../interfaces/components_ClusterNodeContainer._internal_.ISpritesheetData.md)

Reference to the original JSON data.

#### Defined in

node_modules/@pixi/spritesheet/index.d.ts:91

___

### resolution

• **resolution**: `number`

The resolution of the spritesheet.

#### Defined in

node_modules/@pixi/spritesheet/index.d.ts:93

___

### textures

• **textures**: [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<[`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>\>

A map containing all textures of the sprite sheet.
Can be used to create a {@link PIXI.Sprite|Sprite}:
```js
new PIXI.Sprite(sheet.textures["image.png"]);
```

#### Defined in

node_modules/@pixi/spritesheet/index.d.ts:78

___

### BATCH\_SIZE

▪ `Static` `Readonly` **BATCH\_SIZE**: ``1000``

The maximum number of Textures to build per process.

#### Defined in

node_modules/@pixi/spritesheet/index.d.ts:68

## Methods

### destroy

▸ **destroy**(`destroyBase?`): `void`

Destroy Spritesheet and don't use after this.

#### Parameters

| Name | Type |
| :------ | :------ |
| `destroyBase?` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/spritesheet/index.d.ts:155

___

### parse

▸ **parse**(`callback`): `void`

Parser spritesheet from loaded data. This is done asynchronously
to prevent creating too many Texture within a single process.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`textures?`: [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<[`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>\>) => `void` | Callback when complete returns        a map of the Textures for this spritesheet. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/spritesheet/index.d.ts:137
