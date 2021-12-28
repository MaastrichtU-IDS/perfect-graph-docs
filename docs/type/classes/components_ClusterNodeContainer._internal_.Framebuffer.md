[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Framebuffer

# Class: Framebuffer

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Framebuffer

A framebuffer can be used to render contents off of the screen. {@link PIXI.BaseRenderTexture} uses
one internally to render into itself. You can attach a depth or stencil buffer to a framebuffer.

On WebGL 2 machines, shaders can output to multiple textures simultaneously with GLSL 300 ES.

**`memberof`** PIXI

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Framebuffer.md#constructor)

### Properties

- [colorTextures](components_ClusterNodeContainer._internal_.Framebuffer.md#colortextures)
- [depth](components_ClusterNodeContainer._internal_.Framebuffer.md#depth)
- [depthTexture](components_ClusterNodeContainer._internal_.Framebuffer.md#depthtexture)
- [dirtyFormat](components_ClusterNodeContainer._internal_.Framebuffer.md#dirtyformat)
- [dirtyId](components_ClusterNodeContainer._internal_.Framebuffer.md#dirtyid)
- [dirtySize](components_ClusterNodeContainer._internal_.Framebuffer.md#dirtysize)
- [disposeRunner](components_ClusterNodeContainer._internal_.Framebuffer.md#disposerunner)
- [glFramebuffers](components_ClusterNodeContainer._internal_.Framebuffer.md#glframebuffers)
- [height](components_ClusterNodeContainer._internal_.Framebuffer.md#height)
- [multisample](components_ClusterNodeContainer._internal_.Framebuffer.md#multisample)
- [stencil](components_ClusterNodeContainer._internal_.Framebuffer.md#stencil)
- [width](components_ClusterNodeContainer._internal_.Framebuffer.md#width)

### Accessors

- [colorTexture](components_ClusterNodeContainer._internal_.Framebuffer.md#colortexture)

### Methods

- [addColorTexture](components_ClusterNodeContainer._internal_.Framebuffer.md#addcolortexture)
- [addDepthTexture](components_ClusterNodeContainer._internal_.Framebuffer.md#adddepthtexture)
- [destroyDepthTexture](components_ClusterNodeContainer._internal_.Framebuffer.md#destroydepthtexture)
- [dispose](components_ClusterNodeContainer._internal_.Framebuffer.md#dispose)
- [enableDepth](components_ClusterNodeContainer._internal_.Framebuffer.md#enabledepth)
- [enableStencil](components_ClusterNodeContainer._internal_.Framebuffer.md#enablestencil)
- [resize](components_ClusterNodeContainer._internal_.Framebuffer.md#resize)

## Constructors

### constructor

• **new Framebuffer**(`width`, `height`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | Width of the frame buffer |
| `height` | `number` | Height of the frame buffer |

#### Defined in

node_modules/@pixi/core/index.d.ts:2139

## Properties

### colorTextures

• **colorTextures**: [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\>[]

#### Defined in

node_modules/@pixi/core/index.d.ts:2130

___

### depth

• **depth**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:2125

___

### depthTexture

• **depthTexture**: [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\>

#### Defined in

node_modules/@pixi/core/index.d.ts:2129

___

### dirtyFormat

• **dirtyFormat**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:2127

___

### dirtyId

• **dirtyId**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:2126

___

### dirtySize

• **dirtySize**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:2128

___

### disposeRunner

• **disposeRunner**: [`Runner`](components_ClusterNodeContainer._internal_.Runner.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2134

___

### glFramebuffers

• **glFramebuffers**: `Object`

#### Index signature

▪ [key: `string`]: [`GLFramebuffer`](components_ClusterNodeContainer._internal_.GLFramebuffer.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2131

___

### height

• **height**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:2122

___

### multisample

• **multisample**: [`MSAA_QUALITY`](../enums/components_ClusterNodeContainer._internal_.MSAA_QUALITY.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2123

___

### stencil

• **stencil**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:2124

___

### width

• **width**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:2121

## Accessors

### colorTexture

• `get` **colorTexture**(): [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\>

Reference to the colorTexture.

**`member`** {PIXI.BaseTexture[]}

**`readonly`**

#### Returns

[`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\>

#### Defined in

node_modules/@pixi/core/index.d.ts:2146

## Methods

### addColorTexture

▸ **addColorTexture**(`index?`, `texture?`): [`Framebuffer`](components_ClusterNodeContainer._internal_.Framebuffer.md)

Add texture to the colorTexture array

#### Parameters

| Name | Type |
| :------ | :------ |
| `index?` | `number` |
| `texture?` | [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\> |

#### Returns

[`Framebuffer`](components_ClusterNodeContainer._internal_.Framebuffer.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2153

___

### addDepthTexture

▸ **addDepthTexture**(`texture?`): [`Framebuffer`](components_ClusterNodeContainer._internal_.Framebuffer.md)

Add a depth texture to the frame buffer

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture?` | [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\> |

#### Returns

[`Framebuffer`](components_ClusterNodeContainer._internal_.Framebuffer.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2159

___

### destroyDepthTexture

▸ **destroyDepthTexture**(): `void`

Destroys and removes the depth texture added to this framebuffer.

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2182

___

### dispose

▸ **dispose**(): `void`

Disposes WebGL resources that are connected to this geometry

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2178

___

### enableDepth

▸ **enableDepth**(): [`Framebuffer`](components_ClusterNodeContainer._internal_.Framebuffer.md)

Enable depth on the frame buffer

#### Returns

[`Framebuffer`](components_ClusterNodeContainer._internal_.Framebuffer.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2163

___

### enableStencil

▸ **enableStencil**(): [`Framebuffer`](components_ClusterNodeContainer._internal_.Framebuffer.md)

Enable stencil on the frame buffer

#### Returns

[`Framebuffer`](components_ClusterNodeContainer._internal_.Framebuffer.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2167

___

### resize

▸ **resize**(`width`, `height`): `void`

Resize the frame buffer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | Width of the frame buffer to resize to |
| `height` | `number` | Height of the frame buffer to resize to |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2174