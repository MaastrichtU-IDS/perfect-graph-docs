[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / RenderTexture

# Class: RenderTexture

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).RenderTexture

A RenderTexture is a special texture that allows any PixiJS display object to be rendered to it.

__Hint__: All DisplayObjects (i.e. Sprites) that render to a RenderTexture should be preloaded
otherwise black rectangles will be drawn instead.

__Hint-2__: The actual memory allocation will happen on first render.
You shouldn't create renderTextures each frame just to delete them after, try to reuse them.

A RenderTexture takes a snapshot of any Display Object given to its render method. For example:

```js
let renderer = PIXI.autoDetectRenderer();
let renderTexture = PIXI.RenderTexture.create({ width: 800, height: 600 });
let sprite = PIXI.Sprite.from("spinObj_01.png");

sprite.position.x = 800/2;
sprite.position.y = 600/2;
sprite.anchor.x = 0.5;
sprite.anchor.y = 0.5;

renderer.render(sprite, {renderTexture});
```
Note that you should not create a new renderer, but reuse the same one as the rest of the application.

The Sprite in this case will be rendered using its local transform. To render this sprite at 0,0
you can clear the transform

```js

sprite.setTransform()

let renderTexture = new PIXI.RenderTexture.create({ width: 100, height: 100 });

renderer.render(sprite, {renderTexture});  // Renders to center of RenderTexture
```

**`memberof`** PIXI

## Hierarchy

- [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)

  ↳ **`RenderTexture`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.RenderTexture.md#constructor)

### Properties

- [\_frame](components_ClusterNodeContainer._internal_.RenderTexture.md#_frame)
- [\_rotate](components_ClusterNodeContainer._internal_.RenderTexture.md#_rotate)
- [\_updateID](components_ClusterNodeContainer._internal_.RenderTexture.md#_updateid)
- [\_uvs](components_ClusterNodeContainer._internal_.RenderTexture.md#_uvs)
- [baseTexture](components_ClusterNodeContainer._internal_.RenderTexture.md#basetexture)
- [defaultAnchor](components_ClusterNodeContainer._internal_.RenderTexture.md#defaultanchor)
- [filterFrame](components_ClusterNodeContainer._internal_.RenderTexture.md#filterframe)
- [filterPoolKey](components_ClusterNodeContainer._internal_.RenderTexture.md#filterpoolkey)
- [noFrame](components_ClusterNodeContainer._internal_.RenderTexture.md#noframe)
- [orig](components_ClusterNodeContainer._internal_.RenderTexture.md#orig)
- [textureCacheIds](components_ClusterNodeContainer._internal_.RenderTexture.md#texturecacheids)
- [trim](components_ClusterNodeContainer._internal_.RenderTexture.md#trim)
- [uvMatrix](components_ClusterNodeContainer._internal_.RenderTexture.md#uvmatrix)
- [valid](components_ClusterNodeContainer._internal_.RenderTexture.md#valid)
- [EMPTY](components_ClusterNodeContainer._internal_.RenderTexture.md#empty)
- [WHITE](components_ClusterNodeContainer._internal_.RenderTexture.md#white)
- [prefixed](components_ClusterNodeContainer._internal_.RenderTexture.md#prefixed)

### Accessors

- [frame](components_ClusterNodeContainer._internal_.RenderTexture.md#frame)
- [framebuffer](components_ClusterNodeContainer._internal_.RenderTexture.md#framebuffer)
- [height](components_ClusterNodeContainer._internal_.RenderTexture.md#height)
- [multisample](components_ClusterNodeContainer._internal_.RenderTexture.md#multisample)
- [resolution](components_ClusterNodeContainer._internal_.RenderTexture.md#resolution)
- [rotate](components_ClusterNodeContainer._internal_.RenderTexture.md#rotate)
- [width](components_ClusterNodeContainer._internal_.RenderTexture.md#width)

### Methods

- [addListener](components_ClusterNodeContainer._internal_.RenderTexture.md#addlistener)
- [castToBaseTexture](components_ClusterNodeContainer._internal_.RenderTexture.md#casttobasetexture)
- [clone](components_ClusterNodeContainer._internal_.RenderTexture.md#clone)
- [destroy](components_ClusterNodeContainer._internal_.RenderTexture.md#destroy)
- [emit](components_ClusterNodeContainer._internal_.RenderTexture.md#emit)
- [eventNames](components_ClusterNodeContainer._internal_.RenderTexture.md#eventnames)
- [listenerCount](components_ClusterNodeContainer._internal_.RenderTexture.md#listenercount)
- [listeners](components_ClusterNodeContainer._internal_.RenderTexture.md#listeners)
- [off](components_ClusterNodeContainer._internal_.RenderTexture.md#off)
- [on](components_ClusterNodeContainer._internal_.RenderTexture.md#on)
- [onBaseTextureUpdated](components_ClusterNodeContainer._internal_.RenderTexture.md#onbasetextureupdated)
- [once](components_ClusterNodeContainer._internal_.RenderTexture.md#once)
- [removeAllListeners](components_ClusterNodeContainer._internal_.RenderTexture.md#removealllisteners)
- [removeListener](components_ClusterNodeContainer._internal_.RenderTexture.md#removelistener)
- [resize](components_ClusterNodeContainer._internal_.RenderTexture.md#resize)
- [setResolution](components_ClusterNodeContainer._internal_.RenderTexture.md#setresolution)
- [update](components_ClusterNodeContainer._internal_.RenderTexture.md#update)
- [updateUvs](components_ClusterNodeContainer._internal_.RenderTexture.md#updateuvs)
- [addToCache](components_ClusterNodeContainer._internal_.RenderTexture.md#addtocache)
- [create](components_ClusterNodeContainer._internal_.RenderTexture.md#create)
- [from](components_ClusterNodeContainer._internal_.RenderTexture.md#from)
- [fromBuffer](components_ClusterNodeContainer._internal_.RenderTexture.md#frombuffer)
- [fromLoader](components_ClusterNodeContainer._internal_.RenderTexture.md#fromloader)
- [fromURL](components_ClusterNodeContainer._internal_.RenderTexture.md#fromurl)
- [removeFromCache](components_ClusterNodeContainer._internal_.RenderTexture.md#removefromcache)

## Constructors

### constructor

• **new RenderTexture**(`baseRenderTexture`, `frame?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseRenderTexture` | [`BaseRenderTexture`](components_ClusterNodeContainer._internal_.BaseRenderTexture.md) | The base texture object that this texture uses. |
| `frame?` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) | The rectangle frame of the texture to show. |

#### Overrides

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[constructor](components_ClusterNodeContainer._internal_.Texture.md#constructor)

#### Defined in

node_modules/@pixi/core/index.d.ts:3821

## Properties

### \_frame

• **\_frame**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[_frame](components_ClusterNodeContainer._internal_.Texture.md#_frame)

#### Defined in

node_modules/@pixi/core/index.d.ts:4773

___

### \_rotate

• `Protected` **\_rotate**: `number`

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[_rotate](components_ClusterNodeContainer._internal_.Texture.md#_rotate)

#### Defined in

node_modules/@pixi/core/index.d.ts:4771

___

### \_updateID

• **\_updateID**: `number`

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[_updateID](components_ClusterNodeContainer._internal_.Texture.md#_updateid)

#### Defined in

node_modules/@pixi/core/index.d.ts:4772

___

### \_uvs

• **\_uvs**: [`TextureUvs`](components_ClusterNodeContainer._internal_.TextureUvs.md)

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[_uvs](components_ClusterNodeContainer._internal_.Texture.md#_uvs)

#### Defined in

node_modules/@pixi/core/index.d.ts:4774

___

### baseTexture

• **baseTexture**: [`BaseRenderTexture`](components_ClusterNodeContainer._internal_.BaseRenderTexture.md)

#### Overrides

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[baseTexture](components_ClusterNodeContainer._internal_.Texture.md#basetexture)

#### Defined in

node_modules/@pixi/core/index.d.ts:3802

___

### defaultAnchor

• **defaultAnchor**: [`Point`](components_ClusterNodeContainer._internal_.Point.md)

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[defaultAnchor](components_ClusterNodeContainer._internal_.Texture.md#defaultanchor)

#### Defined in

node_modules/@pixi/core/index.d.ts:4769

___

### filterFrame

• **filterFrame**: ``null`` \| [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

Stores `sourceFrame` when this texture is inside current filter stack.

You can read it inside filters.

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:3810

___

### filterPoolKey

• **filterPoolKey**: ``null`` \| `string` \| `number`

The key for pooled texture of FilterSystem.

**`see`** PIXI.RenderTexturePool

#### Defined in

node_modules/@pixi/core/index.d.ts:3816

___

### noFrame

• **noFrame**: `boolean`

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[noFrame](components_ClusterNodeContainer._internal_.Texture.md#noframe)

#### Defined in

node_modules/@pixi/core/index.d.ts:4768

___

### orig

• **orig**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[orig](components_ClusterNodeContainer._internal_.Texture.md#orig)

#### Defined in

node_modules/@pixi/core/index.d.ts:4765

___

### textureCacheIds

• **textureCacheIds**: `string`[]

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[textureCacheIds](components_ClusterNodeContainer._internal_.Texture.md#texturecacheids)

#### Defined in

node_modules/@pixi/core/index.d.ts:4775

___

### trim

• **trim**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[trim](components_ClusterNodeContainer._internal_.Texture.md#trim)

#### Defined in

node_modules/@pixi/core/index.d.ts:4766

___

### uvMatrix

• **uvMatrix**: [`TextureMatrix`](components_ClusterNodeContainer._internal_.TextureMatrix.md)

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[uvMatrix](components_ClusterNodeContainer._internal_.Texture.md#uvmatrix)

#### Defined in

node_modules/@pixi/core/index.d.ts:4770

___

### valid

• **valid**: `boolean`

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[valid](components_ClusterNodeContainer._internal_.Texture.md#valid)

#### Defined in

node_modules/@pixi/core/index.d.ts:4767

___

### EMPTY

▪ `Static` `Readonly` **EMPTY**: [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`CanvasResource`](components_ClusterNodeContainer._internal_.CanvasResource.md)\>

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[EMPTY](components_ClusterNodeContainer._internal_.Texture.md#empty)

#### Defined in

node_modules/@pixi/core/index.d.ts:4921

___

### WHITE

▪ `Static` `Readonly` **WHITE**: [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`CanvasResource`](components_ClusterNodeContainer._internal_.CanvasResource.md)\>

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[WHITE](components_ClusterNodeContainer._internal_.Texture.md#white)

#### Defined in

node_modules/@pixi/core/index.d.ts:4922

___

### prefixed

▪ `Static` **prefixed**: `string` \| `boolean`

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[prefixed](components_ClusterNodeContainer._internal_.Texture.md#prefixed)

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

#### Inherited from

Texture.frame

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

#### Inherited from

Texture.frame

#### Defined in

node_modules/@pixi/core/index.d.ts:4893

___

### framebuffer

• `get` **framebuffer**(): [`Framebuffer`](components_ClusterNodeContainer._internal_.Framebuffer.md)

Shortcut to `this.baseTexture.framebuffer`, saves baseTexture cast.

**`readonly`**

#### Returns

[`Framebuffer`](components_ClusterNodeContainer._internal_.Framebuffer.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:3827

___

### height

• `get` **height**(): `number`

The height of the Texture in pixels.

**`member`** {number}

#### Returns

`number`

#### Inherited from

Texture.height

#### Defined in

node_modules/@pixi/core/index.d.ts:4916

___

### multisample

• `get` **multisample**(): [`MSAA_QUALITY`](../enums/components_ClusterNodeContainer._internal_.MSAA_QUALITY.md)

Shortcut to `this.framebuffer.multisample`.

**`default`** PIXI.MSAA_QUALITY.NONE

#### Returns

[`MSAA_QUALITY`](../enums/components_ClusterNodeContainer._internal_.MSAA_QUALITY.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:3833

• `set` **multisample**(`value`): `void`

Shortcut to `this.framebuffer.multisample`.

**`default`** PIXI.MSAA_QUALITY.NONE

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`MSAA_QUALITY`](../enums/components_ClusterNodeContainer._internal_.MSAA_QUALITY.md) |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:3834

___

### resolution

• `get` **resolution**(): `number`

Returns resolution of baseTexture

**`member`** {number}

**`readonly`**

#### Returns

`number`

#### Inherited from

Texture.resolution

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

#### Inherited from

Texture.rotate

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

#### Inherited from

Texture.rotate

#### Defined in

node_modules/@pixi/core/index.d.ts:4904

___

### width

• `get` **width**(): `number`

The width of the Texture in pixels.

**`member`** {number}

#### Returns

`number`

#### Inherited from

Texture.width

#### Defined in

node_modules/@pixi/core/index.d.ts:4910

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[addListener](components_ClusterNodeContainer._internal_.Texture.md#addlistener)

#### Defined in

node_modules/eventemitter3/index.d.ts:33

___

### castToBaseTexture

▸ **castToBaseTexture**(): [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\>

Utility function for BaseTexture|Texture cast

#### Returns

[`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\>

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[castToBaseTexture](components_ClusterNodeContainer._internal_.Texture.md#casttobasetexture)

#### Defined in

node_modules/@pixi/core/index.d.ts:4920

___

### clone

▸ **clone**(): [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>

Creates a new texture object that acts the same as this one.

#### Returns

[`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>

The new texture

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[clone](components_ClusterNodeContainer._internal_.Texture.md#clone)

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

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[destroy](components_ClusterNodeContainer._internal_.Texture.md#destroy)

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

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[emit](components_ClusterNodeContainer._internal_.Texture.md#emit)

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

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[eventNames](components_ClusterNodeContainer._internal_.Texture.md#eventnames)

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

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[listenerCount](components_ClusterNodeContainer._internal_.Texture.md#listenercount)

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

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[listeners](components_ClusterNodeContainer._internal_.Texture.md#listeners)

#### Defined in

node_modules/eventemitter3/index.d.ts:17

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[off](components_ClusterNodeContainer._internal_.Texture.md#off)

#### Defined in

node_modules/eventemitter3/index.d.ts:44

___

### on

▸ **on**(`event`, `fn`, `context?`): [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

Add a listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[on](components_ClusterNodeContainer._internal_.Texture.md#on)

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

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[onBaseTextureUpdated](components_ClusterNodeContainer._internal_.Texture.md#onbasetextureupdated)

#### Defined in

node_modules/@pixi/core/index.d.ts:4800

___

### once

▸ **once**(`event`, `fn`, `context?`): [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[once](components_ClusterNodeContainer._internal_.Texture.md#once)

#### Defined in

node_modules/eventemitter3/index.d.ts:38

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[removeAllListeners](components_ClusterNodeContainer._internal_.Texture.md#removealllisteners)

#### Defined in

node_modules/eventemitter3/index.d.ts:49

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[removeListener](components_ClusterNodeContainer._internal_.Texture.md#removelistener)

#### Defined in

node_modules/eventemitter3/index.d.ts:43

___

### resize

▸ **resize**(`desiredWidth`, `desiredHeight`, `resizeBaseTexture?`): `void`

Resizes the RenderTexture.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `desiredWidth` | `number` | The desired width to resize to. |
| `desiredHeight` | `number` | The desired height to resize to. |
| `resizeBaseTexture?` | `boolean` | Should the baseTexture.width and height values be resized as well? |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:3842

___

### setResolution

▸ **setResolution**(`resolution`): `void`

Changes the resolution of baseTexture, but does not change framebuffer size.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resolution` | `number` | The new resolution to apply to RenderTexture |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:3848

___

### update

▸ **update**(): `void`

Updates this texture on the gpu.

Calls the TextureResource update.

If you adjusted `frame` manually, please call `updateUvs()` instead.

#### Returns

`void`

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[update](components_ClusterNodeContainer._internal_.Texture.md#update)

#### Defined in

node_modules/@pixi/core/index.d.ts:4793

___

### updateUvs

▸ **updateUvs**(): `void`

Updates the internal WebGL UV cache. Use it after you change `frame` or `trim` of the texture.
Call it after changing the frame

#### Returns

`void`

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[updateUvs](components_ClusterNodeContainer._internal_.Texture.md#updateuvs)

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

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[addToCache](components_ClusterNodeContainer._internal_.Texture.md#addtocache)

#### Defined in

node_modules/@pixi/core/index.d.ts:4870

___

### create

▸ `Static` **create**(`width`, `height`, `scaleMode?`, `resolution?`): [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

Use the object-based construction instead.

**`deprecated`** since 6.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |
| `scaleMode?` | [`SCALE_MODES`](../enums/components_ClusterNodeContainer._internal_.SCALE_MODES.md) |
| `resolution?` | `number` |

#### Returns

[`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

The new render texture

#### Defined in

node_modules/@pixi/core/index.d.ts:3858

▸ `Static` **create**(`options?`): [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

A short hand way of creating a render texture.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`IBaseTextureOptions`](../interfaces/components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md)<`any`\> | Options |

#### Returns

[`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

The new render texture

#### Defined in

node_modules/@pixi/core/index.d.ts:3872

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

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[from](components_ClusterNodeContainer._internal_.Texture.md#from)

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

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[fromBuffer](components_ClusterNodeContainer._internal_.Texture.md#frombuffer)

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

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[fromLoader](components_ClusterNodeContainer._internal_.Texture.md#fromloader)

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

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[fromURL](components_ClusterNodeContainer._internal_.Texture.md#fromurl)

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

#### Inherited from

[Texture](components_ClusterNodeContainer._internal_.Texture.md).[removeFromCache](components_ClusterNodeContainer._internal_.Texture.md#removefromcache)

#### Defined in

node_modules/@pixi/core/index.d.ts:4878