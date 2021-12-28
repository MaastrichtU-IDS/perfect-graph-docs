[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / BaseRenderTexture

# Class: BaseRenderTexture

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).BaseRenderTexture

A BaseRenderTexture is a special texture that allows any PixiJS display object to be rendered to it.

__Hint__: All DisplayObjects (i.e. Sprites) that render to a BaseRenderTexture should be preloaded
otherwise black rectangles will be drawn instead.

A BaseRenderTexture takes a snapshot of any Display Object given to its render method. The position
and rotation of the given Display Objects is ignored. For example:

```js
let renderer = PIXI.autoDetectRenderer();
let baseRenderTexture = new PIXI.BaseRenderTexture({ width: 800, height: 600 });
let renderTexture = new PIXI.RenderTexture(baseRenderTexture);
let sprite = PIXI.Sprite.from("spinObj_01.png");

sprite.position.x = 800/2;
sprite.position.y = 600/2;
sprite.anchor.x = 0.5;
sprite.anchor.y = 0.5;

renderer.render(sprite, {renderTexture});
```

The Sprite in this case will be rendered using its local transform. To render this sprite at 0,0
you can clear the transform

```js

sprite.setTransform()

let baseRenderTexture = new PIXI.BaseRenderTexture({ width: 100, height: 100 });
let renderTexture = new PIXI.RenderTexture(baseRenderTexture);

renderer.render(sprite, {renderTexture});  // Renders to center of RenderTexture
```

**`memberof`** PIXI

## Hierarchy

- [`BaseRenderTexture`](../interfaces/components_ClusterNodeContainer._internal_.BaseRenderTexture-1.md)

- [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)

  ↳ **`BaseRenderTexture`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#constructor)

### Properties

- [\_batchEnabled](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#_batchenabled)
- [\_batchLocation](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#_batchlocation)
- [\_glTextures](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#_gltextures)
- [alphaMode](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#alphamode)
- [anisotropicLevel](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#anisotropiclevel)
- [cacheId](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#cacheid)
- [clearColor](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#clearcolor)
- [destroyed](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#destroyed)
- [dirtyId](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#dirtyid)
- [dirtyStyleId](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#dirtystyleid)
- [filterStack](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#filterstack)
- [format](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#format)
- [framebuffer](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#framebuffer)
- [height](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#height)
- [isPowerOfTwo](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#ispoweroftwo)
- [maskStack](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#maskstack)
- [parentTextureArray](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#parenttexturearray)
- [resolution](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#resolution)
- [resource](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#resource)
- [target](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#target)
- [textureCacheIds](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#texturecacheids)
- [touched](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#touched)
- [type](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#type)
- [uid](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#uid)
- [valid](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#valid)
- [width](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#width)
- [\_globalBatch](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#_globalbatch)
- [prefixed](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#prefixed)

### Accessors

- [mipmap](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#mipmap)
- [realHeight](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#realheight)
- [realWidth](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#realwidth)
- [scaleMode](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#scalemode)
- [wrapMode](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#wrapmode)

### Methods

- [\_refreshPOT](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#_refreshpot)
- [addListener](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#addlistener)
- [castToBaseTexture](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#casttobasetexture)
- [destroy](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#destroy)
- [dispose](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#dispose)
- [emit](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#emit)
- [eventNames](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#eventnames)
- [listenerCount](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#listenercount)
- [listeners](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#listeners)
- [off](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#off)
- [on](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#on)
- [onError](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#onerror)
- [once](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#once)
- [removeAllListeners](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#removealllisteners)
- [removeListener](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#removelistener)
- [resize](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#resize)
- [setRealSize](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#setrealsize)
- [setResolution](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#setresolution)
- [setResource](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#setresource)
- [setSize](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#setsize)
- [setStyle](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#setstyle)
- [update](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#update)
- [addToCache](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#addtocache)
- [from](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#from)
- [fromBuffer](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#frombuffer)
- [removeFromCache](components_ClusterNodeContainer._internal_.BaseRenderTexture.md#removefromcache)

## Constructors

### constructor

• **new BaseRenderTexture**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IBaseTextureOptions`](../interfaces/components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md)<`any`\> |

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[constructor](components_ClusterNodeContainer._internal_.BaseTexture.md#constructor)

#### Defined in

node_modules/@pixi/core/index.d.ts:765

## Properties

### \_batchEnabled

• **\_batchEnabled**: `number`

Number of the texture batch, used by multi-texture renderers

**`member`** {number}

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[_batchEnabled](components_ClusterNodeContainer._internal_.BaseTexture.md#_batchenabled)

#### Defined in

node_modules/@pixi/core/index.d.ts:935

___

### \_batchLocation

• **\_batchLocation**: `number`

Location inside texture batch, used by multi-texture renderers

**`member`** {number}

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[_batchLocation](components_ClusterNodeContainer._internal_.BaseTexture.md#_batchlocation)

#### Defined in

node_modules/@pixi/core/index.d.ts:941

___

### \_glTextures

• `Private` **\_glTextures**: `Object`

The map of render context textures where this is bound

#### Index signature

▪ [key: `number`]: [`GLTexture`](components_ClusterNodeContainer._internal_.GLTexture.md)

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[_glTextures](components_ClusterNodeContainer._internal_.BaseTexture.md#_gltextures)

#### Defined in

node_modules/@pixi/core/index.d.ts:878

___

### alphaMode

• `Optional` **alphaMode**: [`ALPHA_MODES`](../enums/components_ClusterNodeContainer._internal_.ALPHA_MODES.md)

How to treat premultiplied alpha, see {@link PIXI.ALPHA_MODES}.

**`member`** {PIXI.ALPHA_MODES}

**`default`** PIXI.ALPHA_MODES.UNPACK

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[alphaMode](components_ClusterNodeContainer._internal_.BaseTexture.md#alphamode)

#### Defined in

node_modules/@pixi/core/index.d.ts:827

___

### anisotropicLevel

• `Optional` **anisotropicLevel**: `number`

Anisotropic filtering level of texture

**`member`** {number}

**`default`** PIXI.settings.ANISOTROPIC_LEVEL

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[anisotropicLevel](components_ClusterNodeContainer._internal_.BaseTexture.md#anisotropiclevel)

#### Defined in

node_modules/@pixi/core/index.d.ts:834

___

### cacheId

• **cacheId**: `string`

Currently default cache ID.

**`member`** {string}

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[cacheId](components_ClusterNodeContainer._internal_.BaseTexture.md#cacheid)

#### Defined in

node_modules/@pixi/core/index.d.ts:899

___

### clearColor

• **clearColor**: `number`[]

#### Defined in

node_modules/@pixi/core/index.d.ts:751

___

### destroyed

• **destroyed**: `boolean`

Flag if BaseTexture has been destroyed.

**`member`** {boolean}

**`readonly`**

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[destroyed](components_ClusterNodeContainer._internal_.BaseTexture.md#destroyed)

#### Defined in

node_modules/@pixi/core/index.d.ts:920

___

### dirtyId

• **dirtyId**: `number`

Used by TextureSystem to only update texture to the GPU when needed.
Please call `update()` to increment it.

**`readonly`**

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[dirtyId](components_ClusterNodeContainer._internal_.BaseTexture.md#dirtyid)

#### Defined in

node_modules/@pixi/core/index.d.ts:887

___

### dirtyStyleId

• `Protected` **dirtyStyleId**: `number`

Used by TextureSystem to only update texture style when needed.

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[dirtyStyleId](components_ClusterNodeContainer._internal_.BaseTexture.md#dirtystyleid)

#### Defined in

node_modules/@pixi/core/index.d.ts:893

___

### filterStack

• **filterStack**: `any`[]

#### Defined in

node_modules/@pixi/core/index.d.ts:754

___

### format

• `Optional` **format**: [`FORMATS`](../enums/components_ClusterNodeContainer._internal_.FORMATS.md)

The pixel format of the texture

**`default`** PIXI.FORMATS.RGBA

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[format](components_ClusterNodeContainer._internal_.BaseTexture.md#format)

#### Defined in

node_modules/@pixi/core/index.d.ts:840

___

### framebuffer

• **framebuffer**: [`Framebuffer`](components_ClusterNodeContainer._internal_.Framebuffer.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:752

___

### height

• **height**: `number`

The height of the base texture set when the image has loaded

**`readonly`**

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[height](components_ClusterNodeContainer._internal_.BaseTexture.md#height)

#### Defined in

node_modules/@pixi/core/index.d.ts:813

___

### isPowerOfTwo

• **isPowerOfTwo**: `boolean`

Whether or not the texture is a power of two, try to use power of two textures as much
as you can

**`readonly`**

**`default`** false

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[isPowerOfTwo](components_ClusterNodeContainer._internal_.BaseTexture.md#ispoweroftwo)

#### Defined in

node_modules/@pixi/core/index.d.ts:872

___

### maskStack

• **maskStack**: [`MaskData`](components_ClusterNodeContainer._internal_.MaskData.md)[]

#### Defined in

node_modules/@pixi/core/index.d.ts:753

___

### parentTextureArray

• **parentTextureArray**: [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\>

Whether its a part of another texture, handled by ArrayResource or CubeResource

**`member`** {PIXI.BaseTexture}

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[parentTextureArray](components_ClusterNodeContainer._internal_.BaseTexture.md#parenttexturearray)

#### Defined in

node_modules/@pixi/core/index.d.ts:947

___

### resolution

• **resolution**: `number`

The resolution / device pixel ratio of the texture

**`readonly`**

**`default`** PIXI.settings.RESOLUTION

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[resolution](components_ClusterNodeContainer._internal_.BaseTexture.md#resolution)

#### Defined in

node_modules/@pixi/core/index.d.ts:820

___

### resource

• **resource**: [`Resource`](components_ClusterNodeContainer._internal_.Resource.md)

The resource used by this BaseTexture, there can only
be one resource per BaseTexture, but textures can share
resources.

**`member`** {PIXI.Resource}

**`readonly`**

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[resource](components_ClusterNodeContainer._internal_.BaseTexture.md#resource)

#### Defined in

node_modules/@pixi/core/index.d.ts:929

___

### target

• `Optional` **target**: [`TARGETS`](../enums/components_ClusterNodeContainer._internal_.TARGETS.md)

The target type

**`default`** PIXI.TARGETS.TEXTURE_2D

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[target](components_ClusterNodeContainer._internal_.BaseTexture.md#target)

#### Defined in

node_modules/@pixi/core/index.d.ts:852

___

### textureCacheIds

• **textureCacheIds**: `string`[]

The collection of alternative cache ids, since some BaseTextures
can have more than one ID, short name and longer full URL

**`member`** {Array<string>}

**`readonly`**

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[textureCacheIds](components_ClusterNodeContainer._internal_.BaseTexture.md#texturecacheids)

#### Defined in

node_modules/@pixi/core/index.d.ts:913

___

### touched

• `Protected` **touched**: `number`

Used by automatic texture Garbage Collection, stores last GC tick when it was bound

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[touched](components_ClusterNodeContainer._internal_.BaseTexture.md#touched)

#### Defined in

node_modules/@pixi/core/index.d.ts:864

___

### type

• `Optional` **type**: [`TYPES`](../enums/components_ClusterNodeContainer._internal_.TYPES.md)

The type of resource data

**`default`** PIXI.TYPES.UNSIGNED_BYTE

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[type](components_ClusterNodeContainer._internal_.BaseTexture.md#type)

#### Defined in

node_modules/@pixi/core/index.d.ts:846

___

### uid

• `Readonly` `Protected` **uid**: `number`

Global unique identifier for this BaseTexture

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[uid](components_ClusterNodeContainer._internal_.BaseTexture.md#uid)

#### Defined in

node_modules/@pixi/core/index.d.ts:858

___

### valid

• **valid**: `boolean`

Generally speaking means when resource is loaded.

**`readonly`**

**`member`** {boolean}

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[valid](components_ClusterNodeContainer._internal_.BaseTexture.md#valid)

#### Defined in

node_modules/@pixi/core/index.d.ts:905

___

### width

• **width**: `number`

The width of the base texture set when the image has loaded

**`readonly`**

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[width](components_ClusterNodeContainer._internal_.BaseTexture.md#width)

#### Defined in

node_modules/@pixi/core/index.d.ts:807

___

### \_globalBatch

▪ `Static` **\_globalBatch**: `number`

Global number of the texture batch, used by multi-texture renderers

**`static`**

**`member`** {number}

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[_globalBatch](components_ClusterNodeContainer._internal_.BaseTexture.md#_globalbatch)

#### Defined in

node_modules/@pixi/core/index.d.ts:1131

___

### prefixed

▪ `Static` **prefixed**: `string` \| `boolean`

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[prefixed](components_ClusterNodeContainer._internal_.BaseTexture.md#prefixed)

#### Defined in

node_modules/eventemitter3/index.d.ts:6

## Accessors

### mipmap

• `get` **mipmap**(): [`MIPMAP_MODES`](../enums/components_ClusterNodeContainer._internal_.MIPMAP_MODES.md)

Mipmap mode of the texture, affects downscaled images

**`member`** {PIXI.MIPMAP_MODES}

**`default`** PIXI.settings.MIPMAP_TEXTURES

#### Returns

[`MIPMAP_MODES`](../enums/components_ClusterNodeContainer._internal_.MIPMAP_MODES.md)

#### Inherited from

BaseTexture.mipmap

#### Defined in

node_modules/@pixi/core/index.d.ts:991

• `set` **mipmap**(`value`): `void`

Mipmap mode of the texture, affects downscaled images

**`member`** {PIXI.MIPMAP_MODES}

**`default`** PIXI.settings.MIPMAP_TEXTURES

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`MIPMAP_MODES`](../enums/components_ClusterNodeContainer._internal_.MIPMAP_MODES.md) |

#### Returns

`void`

#### Inherited from

BaseTexture.mipmap

#### Defined in

node_modules/@pixi/core/index.d.ts:992

___

### realHeight

• `get` **realHeight**(): `number`

Pixel height of the source of this texture

**`readonly`**

**`member`** {number}

#### Returns

`number`

#### Inherited from

BaseTexture.realHeight

#### Defined in

node_modules/@pixi/core/index.d.ts:984

___

### realWidth

• `get` **realWidth**(): `number`

Pixel width of the source of this texture

**`readonly`**

**`member`** {number}

#### Returns

`number`

#### Inherited from

BaseTexture.realWidth

#### Defined in

node_modules/@pixi/core/index.d.ts:977

___

### scaleMode

• `get` **scaleMode**(): [`SCALE_MODES`](../enums/components_ClusterNodeContainer._internal_.SCALE_MODES.md)

The scale mode to apply when scaling this texture

**`member`** {PIXI.SCALE_MODES}

**`default`** PIXI.settings.SCALE_MODE

#### Returns

[`SCALE_MODES`](../enums/components_ClusterNodeContainer._internal_.SCALE_MODES.md)

#### Inherited from

BaseTexture.scaleMode

#### Defined in

node_modules/@pixi/core/index.d.ts:999

• `set` **scaleMode**(`value`): `void`

The scale mode to apply when scaling this texture

**`member`** {PIXI.SCALE_MODES}

**`default`** PIXI.settings.SCALE_MODE

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`SCALE_MODES`](../enums/components_ClusterNodeContainer._internal_.SCALE_MODES.md) |

#### Returns

`void`

#### Inherited from

BaseTexture.scaleMode

#### Defined in

node_modules/@pixi/core/index.d.ts:1000

___

### wrapMode

• `get` **wrapMode**(): [`WRAP_MODES`](../enums/components_ClusterNodeContainer._internal_.WRAP_MODES.md)

How the texture wraps

**`member`** {PIXI.WRAP_MODES}

**`default`** PIXI.settings.WRAP_MODE

#### Returns

[`WRAP_MODES`](../enums/components_ClusterNodeContainer._internal_.WRAP_MODES.md)

#### Inherited from

BaseTexture.wrapMode

#### Defined in

node_modules/@pixi/core/index.d.ts:1006

• `set` **wrapMode**(`value`): `void`

How the texture wraps

**`member`** {PIXI.WRAP_MODES}

**`default`** PIXI.settings.WRAP_MODE

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`WRAP_MODES`](../enums/components_ClusterNodeContainer._internal_.WRAP_MODES.md) |

#### Returns

`void`

#### Inherited from

BaseTexture.wrapMode

#### Defined in

node_modules/@pixi/core/index.d.ts:1007

## Methods

### \_refreshPOT

▸ `Private` **_refreshPOT**(): `void`

Refresh check for isPowerOfTwo texture based on size

#### Returns

`void`

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[_refreshPOT](components_ClusterNodeContainer._internal_.BaseTexture.md#_refreshpot)

#### Defined in

node_modules/@pixi/core/index.d.ts:1039

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`BaseRenderTexture`](components_ClusterNodeContainer._internal_.BaseRenderTexture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`BaseRenderTexture`](components_ClusterNodeContainer._internal_.BaseRenderTexture.md)

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[addListener](components_ClusterNodeContainer._internal_.BaseTexture.md#addlistener)

#### Defined in

node_modules/eventemitter3/index.d.ts:33

___

### castToBaseTexture

▸ **castToBaseTexture**(): [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\>

Utility function for BaseTexture|Texture cast

#### Returns

[`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\>

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[castToBaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md#casttobasetexture)

#### Defined in

node_modules/@pixi/core/index.d.ts:1081

___

### destroy

▸ **destroy**(): `void`

Destroys this texture.

#### Returns

`void`

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[destroy](components_ClusterNodeContainer._internal_.BaseTexture.md#destroy)

#### Defined in

node_modules/@pixi/core/index.d.ts:784

___

### dispose

▸ **dispose**(): `void`

Frees the texture and framebuffer from WebGL memory without destroying this texture object.
This means you can still use the texture later which will upload it to GPU
memory again.

**`fires`** PIXI.BaseTexture#dispose

#### Returns

`void`

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[dispose](components_ClusterNodeContainer._internal_.BaseTexture.md#dispose)

#### Defined in

node_modules/@pixi/core/index.d.ts:780

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

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[emit](components_ClusterNodeContainer._internal_.BaseTexture.md#emit)

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

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[eventNames](components_ClusterNodeContainer._internal_.BaseTexture.md#eventnames)

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

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[listenerCount](components_ClusterNodeContainer._internal_.BaseTexture.md#listenercount)

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

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[listeners](components_ClusterNodeContainer._internal_.BaseTexture.md#listeners)

#### Defined in

node_modules/eventemitter3/index.d.ts:17

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`BaseRenderTexture`](components_ClusterNodeContainer._internal_.BaseRenderTexture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`BaseRenderTexture`](components_ClusterNodeContainer._internal_.BaseRenderTexture.md)

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[off](components_ClusterNodeContainer._internal_.BaseTexture.md#off)

#### Defined in

node_modules/eventemitter3/index.d.ts:44

___

### on

▸ **on**(`event`, `fn`, `context?`): [`BaseRenderTexture`](components_ClusterNodeContainer._internal_.BaseRenderTexture.md)

Add a listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`BaseRenderTexture`](components_ClusterNodeContainer._internal_.BaseRenderTexture.md)

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[on](components_ClusterNodeContainer._internal_.BaseTexture.md#on)

#### Defined in

node_modules/eventemitter3/index.d.ts:32

___

### onError

▸ `Private` **onError**(`event`): `void`

Handle errors with resources.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | [`ErrorEvent`](../modules/components_ClusterNodeContainer._internal_.md#errorevent) | Error event emitted. |

#### Returns

`void`

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[onError](components_ClusterNodeContainer._internal_.BaseTexture.md#onerror)

#### Defined in

node_modules/@pixi/core/index.d.ts:1063

___

### once

▸ **once**(`event`, `fn`, `context?`): [`BaseRenderTexture`](components_ClusterNodeContainer._internal_.BaseRenderTexture.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`BaseRenderTexture`](components_ClusterNodeContainer._internal_.BaseRenderTexture.md)

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[once](components_ClusterNodeContainer._internal_.BaseTexture.md#once)

#### Defined in

node_modules/eventemitter3/index.d.ts:38

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`BaseRenderTexture`](components_ClusterNodeContainer._internal_.BaseRenderTexture.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`BaseRenderTexture`](components_ClusterNodeContainer._internal_.BaseRenderTexture.md)

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[removeAllListeners](components_ClusterNodeContainer._internal_.BaseTexture.md#removealllisteners)

#### Defined in

node_modules/eventemitter3/index.d.ts:49

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`BaseRenderTexture`](components_ClusterNodeContainer._internal_.BaseRenderTexture.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`BaseRenderTexture`](components_ClusterNodeContainer._internal_.BaseRenderTexture.md)

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[removeListener](components_ClusterNodeContainer._internal_.BaseTexture.md#removelistener)

#### Defined in

node_modules/eventemitter3/index.d.ts:43

___

### resize

▸ **resize**(`desiredWidth`, `desiredHeight`): `void`

Resizes the BaseRenderTexture.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `desiredWidth` | `number` | The desired width to resize to. |
| `desiredHeight` | `number` | The desired height to resize to. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:772

___

### setRealSize

▸ **setRealSize**(`realWidth`, `realHeight`, `resolution?`): [`BaseRenderTexture`](components_ClusterNodeContainer._internal_.BaseRenderTexture.md)

Sets real size of baseTexture, preserves current resolution.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `realWidth` | `number` | Full rendered width |
| `realHeight` | `number` | Full rendered height |
| `resolution?` | `number` | - |

#### Returns

[`BaseRenderTexture`](components_ClusterNodeContainer._internal_.BaseRenderTexture.md)

this

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[setRealSize](components_ClusterNodeContainer._internal_.BaseTexture.md#setrealsize)

#### Defined in

node_modules/@pixi/core/index.d.ts:1033

___

### setResolution

▸ **setResolution**(`resolution`): [`BaseRenderTexture`](components_ClusterNodeContainer._internal_.BaseRenderTexture.md)

Changes resolution

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resolution` | `number` | res |

#### Returns

[`BaseRenderTexture`](components_ClusterNodeContainer._internal_.BaseRenderTexture.md)

this

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[setResolution](components_ClusterNodeContainer._internal_.BaseTexture.md#setresolution)

#### Defined in

node_modules/@pixi/core/index.d.ts:1046

___

### setResource

▸ **setResource**(`resource`): [`BaseRenderTexture`](components_ClusterNodeContainer._internal_.BaseRenderTexture.md)

Sets the resource if it wasn't set. Throws error if resource already present

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resource` | [`Resource`](components_ClusterNodeContainer._internal_.Resource.md) | that is managing this BaseTexture |

#### Returns

[`BaseRenderTexture`](components_ClusterNodeContainer._internal_.BaseRenderTexture.md)

this

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[setResource](components_ClusterNodeContainer._internal_.BaseTexture.md#setresource)

#### Defined in

node_modules/@pixi/core/index.d.ts:1053

___

### setSize

▸ **setSize**(`desiredWidth`, `desiredHeight`, `resolution?`): [`BaseRenderTexture`](components_ClusterNodeContainer._internal_.BaseRenderTexture.md)

Changes w/h/resolution. Texture becomes valid if width and height are greater than zero.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `desiredWidth` | `number` | Desired visual width |
| `desiredHeight` | `number` | Desired visual height |
| `resolution?` | `number` | - |

#### Returns

[`BaseRenderTexture`](components_ClusterNodeContainer._internal_.BaseRenderTexture.md)

this

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[setSize](components_ClusterNodeContainer._internal_.BaseTexture.md#setsize)

#### Defined in

node_modules/@pixi/core/index.d.ts:1024

___

### setStyle

▸ **setStyle**(`scaleMode?`, `mipmap?`): [`BaseRenderTexture`](components_ClusterNodeContainer._internal_.BaseRenderTexture.md)

Changes style options of BaseTexture

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleMode?` | [`SCALE_MODES`](../enums/components_ClusterNodeContainer._internal_.SCALE_MODES.md) |
| `mipmap?` | [`MIPMAP_MODES`](../enums/components_ClusterNodeContainer._internal_.MIPMAP_MODES.md) |

#### Returns

[`BaseRenderTexture`](components_ClusterNodeContainer._internal_.BaseRenderTexture.md)

this

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[setStyle](components_ClusterNodeContainer._internal_.BaseTexture.md#setstyle)

#### Defined in

node_modules/@pixi/core/index.d.ts:1015

___

### update

▸ **update**(): `void`

Invalidates the object. Texture becomes valid if width and height are greater than zero.

#### Returns

`void`

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[update](components_ClusterNodeContainer._internal_.BaseTexture.md#update)

#### Defined in

node_modules/@pixi/core/index.d.ts:1057

___

### addToCache

▸ `Static` **addToCache**(`baseTexture`, `id`): `void`

Adds a BaseTexture to the global BaseTextureCache. This cache is shared across the whole PIXI object.

**`static`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseTexture` | [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\> | The BaseTexture to add to the cache. |
| `id` | `string` | The id that the BaseTexture will be stored against. |

#### Returns

`void`

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[addToCache](components_ClusterNodeContainer._internal_.BaseTexture.md#addtocache)

#### Defined in

node_modules/@pixi/core/index.d.ts:1116

___

### from

▸ `Static` **from**<`R`, `RO`\>(`source`, `options?`, `strict?`): [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<`R`, [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\>

Helper function that creates a base texture based on the source you provide.
The source can be - image url, image element, canvas element. If the
source is an image url or an image element and not in the base texture
cache, it will be created and loaded.

**`static`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends [`Resource`](components_ClusterNodeContainer._internal_.Resource.md)<`R`\> = [`Resource`](components_ClusterNodeContainer._internal_.Resource.md) |
| `RO` | [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` \| [`ImageSource`](../modules/components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.md#imagesource) | The        source to create base texture from. |
| `options?` | [`IBaseTextureOptions`](../interfaces/components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md)<`RO`\> | - |
| `strict?` | `boolean` | - |

#### Returns

[`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<`R`, [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\>

The new base texture.

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[from](components_ClusterNodeContainer._internal_.BaseTexture.md#from)

#### Defined in

node_modules/@pixi/core/index.d.ts:1096

___

### fromBuffer

▸ `Static` **fromBuffer**(`buffer`, `width`, `height`, `options?`): [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`BufferResource`](components_ClusterNodeContainer._internal_.BufferResource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\>

Create a new BaseTexture with a BufferResource from a Float32Array.
RGBA values are floats from 0 to 1.

**`static`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | `Float32Array` \| `Uint8Array` | The optional array to use, if no data        is provided, a new Float32Array is created. |
| `width` | `number` | Width of the resource |
| `height` | `number` | Height of the resource |
| `options?` | [`IBaseTextureOptions`](../interfaces/components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md)<`any`\> | - |

#### Returns

[`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`BufferResource`](components_ClusterNodeContainer._internal_.BufferResource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\>

The resulting new BaseTexture

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[fromBuffer](components_ClusterNodeContainer._internal_.BaseTexture.md#frombuffer)

#### Defined in

node_modules/@pixi/core/index.d.ts:1108

___

### removeFromCache

▸ `Static` **removeFromCache**(`baseTexture`): ``null`` \| [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\>

Remove a BaseTexture from the global BaseTextureCache.

**`static`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseTexture` | `string` \| [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\> | id of a BaseTexture to be removed, or a BaseTexture instance itself. |

#### Returns

``null`` \| [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\>

The BaseTexture that was removed.

#### Inherited from

[BaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md).[removeFromCache](components_ClusterNodeContainer._internal_.BaseTexture.md#removefromcache)

#### Defined in

node_modules/@pixi/core/index.d.ts:1124