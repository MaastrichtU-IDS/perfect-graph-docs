[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / BaseTexture

# Class: BaseTexture<R, RO\>

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).BaseTexture

A Texture stores the information that represents an image.
All textures have a base texture, which contains information about the source.
Therefore you can have many textures all using a single BaseTexture

**`memberof`** PIXI

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | extends [`Resource`](components_ClusterNodeContainer._internal_.Resource.md) = [`Resource`](components_ClusterNodeContainer._internal_.Resource.md) | The BaseTexture's Resource type. |
| `RO` | [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions) | The options for constructing resource. |

## Hierarchy

- [`BaseTexture`](../interfaces/components_ClusterNodeContainer._internal_.BaseTexture-1.md)

- [`EventEmitter`](components_ClusterNodeContainer._internal_.EventEmitter-1.md)

  ↳ **`BaseTexture`**

  ↳↳ [`BaseRenderTexture`](components_ClusterNodeContainer._internal_.BaseRenderTexture.md)

  ↳↳ [`BaseRenderTexture`](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseRenderTexture.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.BaseTexture.md#constructor)

### Properties

- [\_batchEnabled](components_ClusterNodeContainer._internal_.BaseTexture.md#_batchenabled)
- [\_batchLocation](components_ClusterNodeContainer._internal_.BaseTexture.md#_batchlocation)
- [\_glTextures](components_ClusterNodeContainer._internal_.BaseTexture.md#_gltextures)
- [\_mipmap](components_ClusterNodeContainer._internal_.BaseTexture.md#_mipmap)
- [\_scaleMode](components_ClusterNodeContainer._internal_.BaseTexture.md#_scalemode)
- [\_wrapMode](components_ClusterNodeContainer._internal_.BaseTexture.md#_wrapmode)
- [alphaMode](components_ClusterNodeContainer._internal_.BaseTexture.md#alphamode)
- [anisotropicLevel](components_ClusterNodeContainer._internal_.BaseTexture.md#anisotropiclevel)
- [cacheId](components_ClusterNodeContainer._internal_.BaseTexture.md#cacheid)
- [destroyed](components_ClusterNodeContainer._internal_.BaseTexture.md#destroyed)
- [dirtyId](components_ClusterNodeContainer._internal_.BaseTexture.md#dirtyid)
- [dirtyStyleId](components_ClusterNodeContainer._internal_.BaseTexture.md#dirtystyleid)
- [format](components_ClusterNodeContainer._internal_.BaseTexture.md#format)
- [height](components_ClusterNodeContainer._internal_.BaseTexture.md#height)
- [isPowerOfTwo](components_ClusterNodeContainer._internal_.BaseTexture.md#ispoweroftwo)
- [parentTextureArray](components_ClusterNodeContainer._internal_.BaseTexture.md#parenttexturearray)
- [resolution](components_ClusterNodeContainer._internal_.BaseTexture.md#resolution)
- [resource](components_ClusterNodeContainer._internal_.BaseTexture.md#resource)
- [target](components_ClusterNodeContainer._internal_.BaseTexture.md#target)
- [textureCacheIds](components_ClusterNodeContainer._internal_.BaseTexture.md#texturecacheids)
- [touched](components_ClusterNodeContainer._internal_.BaseTexture.md#touched)
- [type](components_ClusterNodeContainer._internal_.BaseTexture.md#type)
- [uid](components_ClusterNodeContainer._internal_.BaseTexture.md#uid)
- [valid](components_ClusterNodeContainer._internal_.BaseTexture.md#valid)
- [width](components_ClusterNodeContainer._internal_.BaseTexture.md#width)
- [\_globalBatch](components_ClusterNodeContainer._internal_.BaseTexture.md#_globalbatch)
- [prefixed](components_ClusterNodeContainer._internal_.BaseTexture.md#prefixed)

### Accessors

- [mipmap](components_ClusterNodeContainer._internal_.BaseTexture.md#mipmap)
- [realHeight](components_ClusterNodeContainer._internal_.BaseTexture.md#realheight)
- [realWidth](components_ClusterNodeContainer._internal_.BaseTexture.md#realwidth)
- [scaleMode](components_ClusterNodeContainer._internal_.BaseTexture.md#scalemode)
- [wrapMode](components_ClusterNodeContainer._internal_.BaseTexture.md#wrapmode)

### Methods

- [\_refreshPOT](components_ClusterNodeContainer._internal_.BaseTexture.md#_refreshpot)
- [addListener](components_ClusterNodeContainer._internal_.BaseTexture.md#addlistener)
- [castToBaseTexture](components_ClusterNodeContainer._internal_.BaseTexture.md#casttobasetexture)
- [destroy](components_ClusterNodeContainer._internal_.BaseTexture.md#destroy)
- [dispose](components_ClusterNodeContainer._internal_.BaseTexture.md#dispose)
- [emit](components_ClusterNodeContainer._internal_.BaseTexture.md#emit)
- [eventNames](components_ClusterNodeContainer._internal_.BaseTexture.md#eventnames)
- [listenerCount](components_ClusterNodeContainer._internal_.BaseTexture.md#listenercount)
- [listeners](components_ClusterNodeContainer._internal_.BaseTexture.md#listeners)
- [off](components_ClusterNodeContainer._internal_.BaseTexture.md#off)
- [on](components_ClusterNodeContainer._internal_.BaseTexture.md#on)
- [onError](components_ClusterNodeContainer._internal_.BaseTexture.md#onerror)
- [once](components_ClusterNodeContainer._internal_.BaseTexture.md#once)
- [removeAllListeners](components_ClusterNodeContainer._internal_.BaseTexture.md#removealllisteners)
- [removeListener](components_ClusterNodeContainer._internal_.BaseTexture.md#removelistener)
- [setRealSize](components_ClusterNodeContainer._internal_.BaseTexture.md#setrealsize)
- [setResolution](components_ClusterNodeContainer._internal_.BaseTexture.md#setresolution)
- [setResource](components_ClusterNodeContainer._internal_.BaseTexture.md#setresource)
- [setSize](components_ClusterNodeContainer._internal_.BaseTexture.md#setsize)
- [setStyle](components_ClusterNodeContainer._internal_.BaseTexture.md#setstyle)
- [update](components_ClusterNodeContainer._internal_.BaseTexture.md#update)
- [addToCache](components_ClusterNodeContainer._internal_.BaseTexture.md#addtocache)
- [from](components_ClusterNodeContainer._internal_.BaseTexture.md#from)
- [fromBuffer](components_ClusterNodeContainer._internal_.BaseTexture.md#frombuffer)
- [removeFromCache](components_ClusterNodeContainer._internal_.BaseTexture.md#removefromcache)

## Constructors

### constructor

• **new BaseTexture**<`R`, `RO`\>(`resource?`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends [`Resource`](components_ClusterNodeContainer._internal_.Resource.md)<`R`\> = [`Resource`](components_ClusterNodeContainer._internal_.Resource.md) |
| `RO` | [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resource?` | `any` |
| `options?` | [`IBaseTextureOptions`](../interfaces/components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IBaseTextureOptions.md)<`RO`\> |

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[constructor](components_ClusterNodeContainer._internal_.EventEmitter-1.md#constructor)

#### Defined in

node_modules/@pixi/core/index.d.ts:970

## Properties

### \_batchEnabled

• **\_batchEnabled**: `number`

Number of the texture batch, used by multi-texture renderers

**`member`** {number}

#### Defined in

node_modules/@pixi/core/index.d.ts:935

___

### \_batchLocation

• **\_batchLocation**: `number`

Location inside texture batch, used by multi-texture renderers

**`member`** {number}

#### Defined in

node_modules/@pixi/core/index.d.ts:941

___

### \_glTextures

• `Private` **\_glTextures**: `Object`

The map of render context textures where this is bound

#### Index signature

▪ [key: `number`]: [`GLTexture`](components_ClusterNodeContainer._internal_.GLTexture.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:878

___

### \_mipmap

• `Private` `Optional` **\_mipmap**: `any`

#### Defined in

node_modules/@pixi/core/index.d.ts:948

___

### \_scaleMode

• `Private` `Optional` **\_scaleMode**: `any`

#### Defined in

node_modules/@pixi/core/index.d.ts:949

___

### \_wrapMode

• `Private` `Optional` **\_wrapMode**: `any`

#### Defined in

node_modules/@pixi/core/index.d.ts:950

___

### alphaMode

• `Optional` **alphaMode**: [`ALPHA_MODES`](../enums/components_ClusterNodeContainer._internal_.ALPHA_MODES.md)

How to treat premultiplied alpha, see {@link PIXI.ALPHA_MODES}.

**`member`** {PIXI.ALPHA_MODES}

**`default`** PIXI.ALPHA_MODES.UNPACK

#### Defined in

node_modules/@pixi/core/index.d.ts:827

___

### anisotropicLevel

• `Optional` **anisotropicLevel**: `number`

Anisotropic filtering level of texture

**`member`** {number}

**`default`** PIXI.settings.ANISOTROPIC_LEVEL

#### Defined in

node_modules/@pixi/core/index.d.ts:834

___

### cacheId

• **cacheId**: `string`

Currently default cache ID.

**`member`** {string}

#### Defined in

node_modules/@pixi/core/index.d.ts:899

___

### destroyed

• **destroyed**: `boolean`

Flag if BaseTexture has been destroyed.

**`member`** {boolean}

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:920

___

### dirtyId

• **dirtyId**: `number`

Used by TextureSystem to only update texture to the GPU when needed.
Please call `update()` to increment it.

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:887

___

### dirtyStyleId

• `Protected` **dirtyStyleId**: `number`

Used by TextureSystem to only update texture style when needed.

#### Defined in

node_modules/@pixi/core/index.d.ts:893

___

### format

• `Optional` **format**: [`FORMATS`](../enums/components_ClusterNodeContainer._internal_.FORMATS.md)

The pixel format of the texture

**`default`** PIXI.FORMATS.RGBA

#### Defined in

node_modules/@pixi/core/index.d.ts:840

___

### height

• **height**: `number`

The height of the base texture set when the image has loaded

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:813

___

### isPowerOfTwo

• **isPowerOfTwo**: `boolean`

Whether or not the texture is a power of two, try to use power of two textures as much
as you can

**`readonly`**

**`default`** false

#### Defined in

node_modules/@pixi/core/index.d.ts:872

___

### parentTextureArray

• **parentTextureArray**: [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\>

Whether its a part of another texture, handled by ArrayResource or CubeResource

**`member`** {PIXI.BaseTexture}

#### Defined in

node_modules/@pixi/core/index.d.ts:947

___

### resolution

• **resolution**: `number`

The resolution / device pixel ratio of the texture

**`readonly`**

**`default`** PIXI.settings.RESOLUTION

#### Defined in

node_modules/@pixi/core/index.d.ts:820

___

### resource

• **resource**: `R`

The resource used by this BaseTexture, there can only
be one resource per BaseTexture, but textures can share
resources.

**`member`** {PIXI.Resource}

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:929

___

### target

• `Optional` **target**: [`TARGETS`](../enums/components_ClusterNodeContainer._internal_.TARGETS.md)

The target type

**`default`** PIXI.TARGETS.TEXTURE_2D

#### Defined in

node_modules/@pixi/core/index.d.ts:852

___

### textureCacheIds

• **textureCacheIds**: `string`[]

The collection of alternative cache ids, since some BaseTextures
can have more than one ID, short name and longer full URL

**`member`** {Array<string>}

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:913

___

### touched

• `Protected` **touched**: `number`

Used by automatic texture Garbage Collection, stores last GC tick when it was bound

#### Defined in

node_modules/@pixi/core/index.d.ts:864

___

### type

• `Optional` **type**: [`TYPES`](../enums/components_ClusterNodeContainer._internal_.TYPES.md)

The type of resource data

**`default`** PIXI.TYPES.UNSIGNED_BYTE

#### Defined in

node_modules/@pixi/core/index.d.ts:846

___

### uid

• `Readonly` `Protected` **uid**: `number`

Global unique identifier for this BaseTexture

#### Defined in

node_modules/@pixi/core/index.d.ts:858

___

### valid

• **valid**: `boolean`

Generally speaking means when resource is loaded.

**`readonly`**

**`member`** {boolean}

#### Defined in

node_modules/@pixi/core/index.d.ts:905

___

### width

• **width**: `number`

The width of the base texture set when the image has loaded

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:807

___

### \_globalBatch

▪ `Static` **\_globalBatch**: `number`

Global number of the texture batch, used by multi-texture renderers

**`static`**

**`member`** {number}

#### Defined in

node_modules/@pixi/core/index.d.ts:1131

___

### prefixed

▪ `Static` **prefixed**: `string` \| `boolean`

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[prefixed](components_ClusterNodeContainer._internal_.EventEmitter-1.md#prefixed)

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

#### Defined in

node_modules/@pixi/core/index.d.ts:1007

## Methods

### \_refreshPOT

▸ `Private` **_refreshPOT**(): `void`

Refresh check for isPowerOfTwo texture based on size

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1039

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<`R`, `RO`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<`R`, `RO`\>

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

node_modules/@pixi/core/index.d.ts:1081

___

### destroy

▸ **destroy**(): `void`

Destroys this base texture.
The method stops if resource doesn't want this texture to be destroyed.
Removes texture from all caches.

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1069

___

### dispose

▸ **dispose**(): `void`

Frees the texture from WebGL memory without destroying this texture object.
This means you can still use the texture later which will upload it to GPU
memory again.

**`fires`** PIXI.BaseTexture#dispose

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1077

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

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<`R`, `RO`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<`R`, `RO`\>

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[off](components_ClusterNodeContainer._internal_.EventEmitter-1.md#off)

#### Defined in

node_modules/eventemitter3/index.d.ts:44

___

### on

▸ **on**(`event`, `fn`, `context?`): [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<`R`, `RO`\>

Add a listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<`R`, `RO`\>

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[on](components_ClusterNodeContainer._internal_.EventEmitter-1.md#on)

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

#### Defined in

node_modules/@pixi/core/index.d.ts:1063

___

### once

▸ **once**(`event`, `fn`, `context?`): [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<`R`, `RO`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<`R`, `RO`\>

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[once](components_ClusterNodeContainer._internal_.EventEmitter-1.md#once)

#### Defined in

node_modules/eventemitter3/index.d.ts:38

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<`R`, `RO`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<`R`, `RO`\>

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[removeAllListeners](components_ClusterNodeContainer._internal_.EventEmitter-1.md#removealllisteners)

#### Defined in

node_modules/eventemitter3/index.d.ts:49

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<`R`, `RO`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<`R`, `RO`\>

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[removeListener](components_ClusterNodeContainer._internal_.EventEmitter-1.md#removelistener)

#### Defined in

node_modules/eventemitter3/index.d.ts:43

___

### setRealSize

▸ **setRealSize**(`realWidth`, `realHeight`, `resolution?`): [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<`R`, `RO`\>

Sets real size of baseTexture, preserves current resolution.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `realWidth` | `number` | Full rendered width |
| `realHeight` | `number` | Full rendered height |
| `resolution?` | `number` | - |

#### Returns

[`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<`R`, `RO`\>

this

#### Defined in

node_modules/@pixi/core/index.d.ts:1033

___

### setResolution

▸ **setResolution**(`resolution`): [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<`R`, `RO`\>

Changes resolution

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resolution` | `number` | res |

#### Returns

[`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<`R`, `RO`\>

this

#### Defined in

node_modules/@pixi/core/index.d.ts:1046

___

### setResource

▸ **setResource**(`resource`): [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<`R`, `RO`\>

Sets the resource if it wasn't set. Throws error if resource already present

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resource` | `R` | that is managing this BaseTexture |

#### Returns

[`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<`R`, `RO`\>

this

#### Defined in

node_modules/@pixi/core/index.d.ts:1053

___

### setSize

▸ **setSize**(`desiredWidth`, `desiredHeight`, `resolution?`): [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<`R`, `RO`\>

Changes w/h/resolution. Texture becomes valid if width and height are greater than zero.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `desiredWidth` | `number` | Desired visual width |
| `desiredHeight` | `number` | Desired visual height |
| `resolution?` | `number` | - |

#### Returns

[`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<`R`, `RO`\>

this

#### Defined in

node_modules/@pixi/core/index.d.ts:1024

___

### setStyle

▸ **setStyle**(`scaleMode?`, `mipmap?`): [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<`R`, `RO`\>

Changes style options of BaseTexture

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleMode?` | [`SCALE_MODES`](../enums/components_ClusterNodeContainer._internal_.SCALE_MODES.md) |
| `mipmap?` | [`MIPMAP_MODES`](../enums/components_ClusterNodeContainer._internal_.MIPMAP_MODES.md) |

#### Returns

[`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<`R`, `RO`\>

this

#### Defined in

node_modules/@pixi/core/index.d.ts:1015

___

### update

▸ **update**(): `void`

Invalidates the object. Texture becomes valid if width and height are greater than zero.

#### Returns

`void`

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

#### Defined in

node_modules/@pixi/core/index.d.ts:1124