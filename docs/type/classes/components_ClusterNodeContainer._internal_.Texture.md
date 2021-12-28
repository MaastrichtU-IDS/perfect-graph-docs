[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Texture

# Class: Texture<R\>

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Texture

A texture stores the information that represents an image or part of an image.

It cannot be added to the display list directly; instead use it as the texture for a Sprite.
If no frame is provided for a texture, then the whole image is used.

You can directly create a texture from an image and then reuse it multiple times like this :

```js
let texture = PIXI.Texture.from('assets/image.png');
let sprite1 = new PIXI.Sprite(texture);
let sprite2 = new PIXI.Sprite(texture);
```

If you didnt pass the texture frame to constructor, it enables `noFrame` mode:
it subscribes on baseTexture events, it automatically resizes at the same time as baseTexture.

Textures made from SVGs, loaded or not, cannot be used before the file finishes processing.
You can check for this by checking the sprite's _textureID property.
```js
var texture = PIXI.Texture.from('assets/image.svg');
var sprite1 = new PIXI.Sprite(texture);
//sprite1._textureID should not be undefined if the texture has finished processing the SVG file
```
You can use a ticker or rAF to ensure your sprites load the finished textures after processing. See issue #3068.

**`memberof`** PIXI

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | extends [`Resource`](components_ClusterNodeContainer._internal_.Resource.md) = [`Resource`](components_ClusterNodeContainer._internal_.Resource.md) | The BaseTexture's Resource type. |

## Hierarchy

- [`Texture`](../interfaces/components_ClusterNodeContainer._internal_.Texture-1.md)

- [`EventEmitter`](components_ClusterNodeContainer._internal_.EventEmitter-1.md)

  ↳ **`Texture`**

  ↳↳ [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

  ↳↳ [`RenderTexture`](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.RenderTexture.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Texture.md#constructor)

### Properties

- [\_frame](components_ClusterNodeContainer._internal_.Texture.md#_frame)
- [\_rotate](components_ClusterNodeContainer._internal_.Texture.md#_rotate)
- [\_updateID](components_ClusterNodeContainer._internal_.Texture.md#_updateid)
- [\_uvs](components_ClusterNodeContainer._internal_.Texture.md#_uvs)
- [baseTexture](components_ClusterNodeContainer._internal_.Texture.md#basetexture)
- [defaultAnchor](components_ClusterNodeContainer._internal_.Texture.md#defaultanchor)
- [noFrame](components_ClusterNodeContainer._internal_.Texture.md#noframe)
- [orig](components_ClusterNodeContainer._internal_.Texture.md#orig)
- [textureCacheIds](components_ClusterNodeContainer._internal_.Texture.md#texturecacheids)
- [trim](components_ClusterNodeContainer._internal_.Texture.md#trim)
- [uvMatrix](components_ClusterNodeContainer._internal_.Texture.md#uvmatrix)
- [valid](components_ClusterNodeContainer._internal_.Texture.md#valid)
- [EMPTY](components_ClusterNodeContainer._internal_.Texture.md#empty)
- [WHITE](components_ClusterNodeContainer._internal_.Texture.md#white)
- [prefixed](components_ClusterNodeContainer._internal_.Texture.md#prefixed)

### Accessors

- [frame](components_ClusterNodeContainer._internal_.Texture.md#frame)
- [height](components_ClusterNodeContainer._internal_.Texture.md#height)
- [resolution](components_ClusterNodeContainer._internal_.Texture.md#resolution)
- [rotate](components_ClusterNodeContainer._internal_.Texture.md#rotate)
- [width](components_ClusterNodeContainer._internal_.Texture.md#width)

### Methods

- [addListener](components_ClusterNodeContainer._internal_.Texture.md#addlistener)
- [castToBaseTexture](components_ClusterNodeContainer._internal_.Texture.md#casttobasetexture)
- [clone](components_ClusterNodeContainer._internal_.Texture.md#clone)
- [destroy](components_ClusterNodeContainer._internal_.Texture.md#destroy)
- [emit](components_ClusterNodeContainer._internal_.Texture.md#emit)
- [eventNames](components_ClusterNodeContainer._internal_.Texture.md#eventnames)
- [listenerCount](components_ClusterNodeContainer._internal_.Texture.md#listenercount)
- [listeners](components_ClusterNodeContainer._internal_.Texture.md#listeners)
- [off](components_ClusterNodeContainer._internal_.Texture.md#off)
- [on](components_ClusterNodeContainer._internal_.Texture.md#on)
- [onBaseTextureUpdated](components_ClusterNodeContainer._internal_.Texture.md#onbasetextureupdated)
- [once](components_ClusterNodeContainer._internal_.Texture.md#once)
- [removeAllListeners](components_ClusterNodeContainer._internal_.Texture.md#removealllisteners)
- [removeListener](components_ClusterNodeContainer._internal_.Texture.md#removelistener)
- [update](components_ClusterNodeContainer._internal_.Texture.md#update)
- [updateUvs](components_ClusterNodeContainer._internal_.Texture.md#updateuvs)
- [addToCache](components_ClusterNodeContainer._internal_.Texture.md#addtocache)
- [from](components_ClusterNodeContainer._internal_.Texture.md#from)
- [fromBuffer](components_ClusterNodeContainer._internal_.Texture.md#frombuffer)
- [fromLoader](components_ClusterNodeContainer._internal_.Texture.md#fromloader)
- [fromURL](components_ClusterNodeContainer._internal_.Texture.md#fromurl)
- [removeFromCache](components_ClusterNodeContainer._internal_.Texture.md#removefromcache)

## Constructors

### constructor

• **new Texture**<`R`\>(`baseTexture`, `frame?`, `orig?`, `trim?`, `rotate?`, `anchor?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends [`Resource`](components_ClusterNodeContainer._internal_.Resource.md)<`R`\> = [`Resource`](components_ClusterNodeContainer._internal_.Resource.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseTexture` | [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<`R`, [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\> | The base texture source to create the texture from |
| `frame?` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) | - |
| `orig?` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) | - |
| `trim?` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) | - |
| `rotate?` | `number` | - |
| `anchor?` | [`IPointData`](../interfaces/components_ClusterNodeContainer._internal_.IPointData.md) | - |

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[constructor](components_ClusterNodeContainer._internal_.EventEmitter-1.md#constructor)

#### Defined in

node_modules/@pixi/core/index.d.ts:4784

## Properties

### \_frame

• **\_frame**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:4773

___

### \_rotate

• `Protected` **\_rotate**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:4771

___

### \_updateID

• **\_updateID**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:4772

___

### \_uvs

• **\_uvs**: [`TextureUvs`](components_ClusterNodeContainer._internal_.TextureUvs.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:4774

___

### baseTexture

• **baseTexture**: [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<`R`, [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\>

#### Defined in

node_modules/@pixi/core/index.d.ts:4764

___

### defaultAnchor

• **defaultAnchor**: [`Point`](components_ClusterNodeContainer._internal_.Point.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:4769

___

### noFrame

• **noFrame**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:4768

___

### orig

• **orig**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:4765

___

### textureCacheIds

• **textureCacheIds**: `string`[]

#### Defined in

node_modules/@pixi/core/index.d.ts:4775

___

### trim

• **trim**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:4766

___

### uvMatrix

• **uvMatrix**: [`TextureMatrix`](components_ClusterNodeContainer._internal_.TextureMatrix.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:4770

___

### valid

• **valid**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:4767

___

### EMPTY

▪ `Static` `Readonly` **EMPTY**: [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`CanvasResource`](components_ClusterNodeContainer._internal_.CanvasResource.md)\>

#### Defined in

node_modules/@pixi/core/index.d.ts:4921

___

### WHITE

▪ `Static` `Readonly` **WHITE**: [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`CanvasResource`](components_ClusterNodeContainer._internal_.CanvasResource.md)\>

#### Defined in

node_modules/@pixi/core/index.d.ts:4922

___

### prefixed

▪ `Static` **prefixed**: `string` \| `boolean`

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[prefixed](components_ClusterNodeContainer._internal_.EventEmitter-1.md#prefixed)

#### Defined in

node_modules/eventemitter3/index.d.ts:6

## Accessors

### frame

• `get` **frame**(): [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

The frame specifies the region of the base texture that this texture uses.
Please call `updateUvs()` after you change coordinates of `frame` manually.

**`member`** {PIXI.Rectangle}

#### Returns

[`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:4892

• `set` **frame**(`frame`): `void`

The frame specifies the region of the base texture that this texture uses.
Please call `updateUvs()` after you change coordinates of `frame` manually.

**`member`** {PIXI.Rectangle}

#### Parameters

| Name | Type |
| :------ | :------ |
| `frame` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4893

___

### height

• `get` **height**(): `number`

The height of the Texture in pixels.

**`member`** {number}

#### Returns

`number`

#### Defined in

node_modules/@pixi/core/index.d.ts:4916

___

### resolution

• `get` **resolution**(): `number`

Returns resolution of baseTexture

**`member`** {number}

**`readonly`**

#### Returns

`number`

#### Defined in

node_modules/@pixi/core/index.d.ts:4885

___

### rotate

• `get` **rotate**(): `number`

Indicates whether the texture is rotated inside the atlas
set to 2 to compensate for texture packer rotation
set to 6 to compensate for spine packer rotation
can be used to rotate or mirror sprites
See {@link PIXI.groupD8} for explanation

**`member`** {number}

#### Returns

`number`

#### Defined in

node_modules/@pixi/core/index.d.ts:4903

• `set` **rotate**(`rotate`): `void`

Indicates whether the texture is rotated inside the atlas
set to 2 to compensate for texture packer rotation
set to 6 to compensate for spine packer rotation
can be used to rotate or mirror sprites
See {@link PIXI.groupD8} for explanation

**`member`** {number}

#### Parameters

| Name | Type |
| :------ | :------ |
| `rotate` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4904

___

### width

• `get` **width**(): `number`

The width of the Texture in pixels.

**`member`** {number}

#### Returns

`number`

#### Defined in

node_modules/@pixi/core/index.d.ts:4910

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<`R`\>

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[addListener](components_ClusterNodeContainer._internal_.EventEmitter-1.md#addlistener)

#### Defined in

node_modules/eventemitter3/index.d.ts:33

___

### castToBaseTexture

▸ **castToBaseTexture**(): [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\>

Utility function for BaseTexture|Texture cast

#### Returns

[`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\>

#### Defined in

node_modules/@pixi/core/index.d.ts:4920

___

### clone

▸ **clone**(): [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>

Creates a new texture object that acts the same as this one.

#### Returns

[`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>

The new texture

#### Defined in

node_modules/@pixi/core/index.d.ts:4812

___

### destroy

▸ **destroy**(`destroyBase?`): `void`

Destroys this texture

#### Parameters

| Name | Type |
| :------ | :------ |
| `destroyBase?` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4806

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[emit](components_ClusterNodeContainer._internal_.EventEmitter-1.md#emit)

#### Defined in

node_modules/eventemitter3/index.d.ts:27

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[eventNames](components_ClusterNodeContainer._internal_.EventEmitter-1.md#eventnames)

#### Defined in

node_modules/eventemitter3/index.d.ts:12

___

### listenerCount

▸ **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`number`

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[listenerCount](components_ClusterNodeContainer._internal_.EventEmitter-1.md#listenercount)

#### Defined in

node_modules/eventemitter3/index.d.ts:22

___

### listeners

▸ **listeners**(`event`): [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md)[]

Return the listeners registered for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

[`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md)[]

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[listeners](components_ClusterNodeContainer._internal_.EventEmitter-1.md#listeners)

#### Defined in

node_modules/eventemitter3/index.d.ts:17

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<`R`\>

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[off](components_ClusterNodeContainer._internal_.EventEmitter-1.md#off)

#### Defined in

node_modules/eventemitter3/index.d.ts:44

___

### on

▸ **on**(`event`, `fn`, `context?`): [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<`R`\>

Add a listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<`R`\>

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[on](components_ClusterNodeContainer._internal_.EventEmitter-1.md#on)

#### Defined in

node_modules/eventemitter3/index.d.ts:32

___

### onBaseTextureUpdated

▸ `Protected` **onBaseTextureUpdated**(`baseTexture`): `void`

Called when the base texture is updated

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseTexture` | [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\> | The base texture. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4800

___

### once

▸ **once**(`event`, `fn`, `context?`): [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<`R`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<`R`\>

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[once](components_ClusterNodeContainer._internal_.EventEmitter-1.md#once)

#### Defined in

node_modules/eventemitter3/index.d.ts:38

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<`R`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<`R`\>

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[removeAllListeners](components_ClusterNodeContainer._internal_.EventEmitter-1.md#removealllisteners)

#### Defined in

node_modules/eventemitter3/index.d.ts:49

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<`R`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<`R`\>

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[removeListener](components_ClusterNodeContainer._internal_.EventEmitter-1.md#removelistener)

#### Defined in

node_modules/eventemitter3/index.d.ts:43

___

### update

▸ **update**(): `void`

Updates this texture on the gpu.

Calls the TextureResource update.

If you adjusted `frame` manually, please call `updateUvs()` instead.

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4793

___

### updateUvs

▸ **updateUvs**(): `void`

Updates the internal WebGL UV cache. Use it after you change `frame` or `trim` of the texture.
Call it after changing the frame

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4817

___

### addToCache

▸ `Static` **addToCache**(`texture`, `id`): `void`

Adds a Texture to the global TextureCache. This cache is shared across the whole PIXI object.

**`static`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `texture` | [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\> | The Texture to add to the cache. |
| `id` | `string` | The id that the Texture will be stored against. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4870

___

### from

▸ `Static` **from**<`R`, `RO`\>(`source`, `options?`, `strict?`): [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<`R`\>

Helper function that creates a new Texture based on the source you provide.
The source can be - frame id, image url, video url, canvas element, video element, base texture

**`static`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends [`Resource`](components_ClusterNodeContainer._internal_.Resource.md)<`R`\> = [`Resource`](components_ClusterNodeContainer._internal_.Resource.md) |
| `RO` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | [`TextureSource`](../modules/components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.md#texturesource) | -        Source to create texture from |
| `options?` | [`IBaseTextureOptions`](../interfaces/components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md)<`RO`\> | - |
| `strict?` | `boolean` | - |

#### Returns

[`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<`R`\>

The newly created texture

#### Defined in

node_modules/@pixi/core/index.d.ts:4830

___

### fromBuffer

▸ `Static` **fromBuffer**(`buffer`, `width`, `height`, `options?`): [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`BufferResource`](components_ClusterNodeContainer._internal_.BufferResource.md)\>

Create a new Texture with a BufferResource from a Float32Array.
RGBA values are floats from 0 to 1.

**`static`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | `Float32Array` \| `Uint8Array` | The optional array to use, if no data        is provided, a new Float32Array is created. |
| `width` | `number` | Width of the resource |
| `height` | `number` | Height of the resource |
| `options?` | [`IBaseTextureOptions`](../interfaces/components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md)<[`ISize`](../interfaces/components_ClusterNodeContainer._internal_.ISize.md)\> | - |

#### Returns

[`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`BufferResource`](components_ClusterNodeContainer._internal_.BufferResource.md)\>

The resulting new BaseTexture

#### Defined in

node_modules/@pixi/core/index.d.ts:4851

___

### fromLoader

▸ `Static` **fromLoader**<`R`\>(`source`, `imageUrl`, `name?`, `options?`): `Promise`<[`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<`R`\>\>

Create a texture from a source and add to the cache.

**`static`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends [`Resource`](components_ClusterNodeContainer._internal_.Resource.md)<`R`\> = [`Resource`](components_ClusterNodeContainer._internal_.Resource.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` \| `HTMLCanvasElement` \| `HTMLImageElement` | The input source. |
| `imageUrl` | `string` | File name of texture, for cache and resolving resolution. |
| `name?` | `string` | - |
| `options?` | [`IBaseTextureOptions`](../interfaces/components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md)<`any`\> | - |

#### Returns

`Promise`<[`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<`R`\>\>

Output texture

#### Defined in

node_modules/@pixi/core/index.d.ts:4862

___

### fromURL

▸ `Static` **fromURL**<`R`, `RO`\>(`url`, `options?`): `Promise`<[`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<`R`\>\>

Useful for loading textures via URLs. Use instead of `Texture.from` because
it does a better job of handling failed URLs more effectively. This also ignores
`PIXI.settings.STRICT_TEXTURE_CACHE`. Works for Videos, SVGs, Images.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends [`Resource`](components_ClusterNodeContainer._internal_.Resource.md)<`R`\> = [`Resource`](components_ClusterNodeContainer._internal_.Resource.md) |
| `RO` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The remote URL to load. |
| `options?` | [`IBaseTextureOptions`](../interfaces/components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md)<`RO`\> | - |

#### Returns

`Promise`<[`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<`R`\>\>

A Promise that resolves to a Texture.

#### Defined in

node_modules/@pixi/core/index.d.ts:4839

___

### removeFromCache

▸ `Static` **removeFromCache**(`texture`): ``null`` \| [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>

Remove a Texture from the global TextureCache.

**`static`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `texture` | `string` \| [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\> | id of a Texture to be removed, or a Texture instance itself |

#### Returns

``null`` \| [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>

The Texture that was removed

#### Defined in

node_modules/@pixi/core/index.d.ts:4878
