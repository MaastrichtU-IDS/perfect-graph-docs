[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / FramebufferSystem

# Class: FramebufferSystem

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).FramebufferSystem

System plugin to the renderer to manage framebuffers.

**`memberof`** PIXI

## Implements

- [`ISystem`](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.FramebufferSystem.md#constructor)

### Properties

- [CONTEXT\_UID](components_ClusterNodeContainer._internal_.FramebufferSystem.md#context_uid)
- [current](components_ClusterNodeContainer._internal_.FramebufferSystem.md#current)
- [gl](components_ClusterNodeContainer._internal_.FramebufferSystem.md#gl)
- [hasMRT](components_ClusterNodeContainer._internal_.FramebufferSystem.md#hasmrt)
- [managedFramebuffers](components_ClusterNodeContainer._internal_.FramebufferSystem.md#managedframebuffers)
- [msaaSamples](components_ClusterNodeContainer._internal_.FramebufferSystem.md#msaasamples)
- [renderer](components_ClusterNodeContainer._internal_.FramebufferSystem.md#renderer)
- [unknownFramebuffer](components_ClusterNodeContainer._internal_.FramebufferSystem.md#unknownframebuffer)
- [viewport](components_ClusterNodeContainer._internal_.FramebufferSystem.md#viewport)
- [writeDepthTexture](components_ClusterNodeContainer._internal_.FramebufferSystem.md#writedepthtexture)

### Accessors

- [size](components_ClusterNodeContainer._internal_.FramebufferSystem.md#size)

### Methods

- [bind](components_ClusterNodeContainer._internal_.FramebufferSystem.md#bind)
- [blit](components_ClusterNodeContainer._internal_.FramebufferSystem.md#blit)
- [canMultisampleFramebuffer](components_ClusterNodeContainer._internal_.FramebufferSystem.md#canmultisampleframebuffer)
- [clear](components_ClusterNodeContainer._internal_.FramebufferSystem.md#clear)
- [contextChange](components_ClusterNodeContainer._internal_.FramebufferSystem.md#contextchange)
- [detectSamples](components_ClusterNodeContainer._internal_.FramebufferSystem.md#detectsamples)
- [disposeAll](components_ClusterNodeContainer._internal_.FramebufferSystem.md#disposeall)
- [disposeFramebuffer](components_ClusterNodeContainer._internal_.FramebufferSystem.md#disposeframebuffer)
- [forceStencil](components_ClusterNodeContainer._internal_.FramebufferSystem.md#forcestencil)
- [initFramebuffer](components_ClusterNodeContainer._internal_.FramebufferSystem.md#initframebuffer)
- [reset](components_ClusterNodeContainer._internal_.FramebufferSystem.md#reset)
- [resizeFramebuffer](components_ClusterNodeContainer._internal_.FramebufferSystem.md#resizeframebuffer)
- [setViewport](components_ClusterNodeContainer._internal_.FramebufferSystem.md#setviewport)
- [updateFramebuffer](components_ClusterNodeContainer._internal_.FramebufferSystem.md#updateframebuffer)

## Constructors

### constructor

• **new FramebufferSystem**(`renderer`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) | The renderer this System works for. |

#### Defined in

node_modules/@pixi/core/index.d.ts:2206

## Properties

### CONTEXT\_UID

• `Protected` **CONTEXT\_UID**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:2198

___

### current

• **current**: [`Framebuffer`](components_ClusterNodeContainer._internal_.Framebuffer.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2194

___

### gl

• `Protected` **gl**: [`IRenderingContext`](../interfaces/components_ClusterNodeContainer._internal_.IRenderingContext.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2199

___

### hasMRT

• **hasMRT**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:2196

___

### managedFramebuffers

• `Readonly` **managedFramebuffers**: [`Framebuffer`](components_ClusterNodeContainer._internal_.Framebuffer.md)[]

#### Defined in

node_modules/@pixi/core/index.d.ts:2193

___

### msaaSamples

• `Protected` **msaaSamples**: `number`[]

#### Defined in

node_modules/@pixi/core/index.d.ts:2201

___

### renderer

• **renderer**: [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2202

___

### unknownFramebuffer

• `Protected` **unknownFramebuffer**: [`Framebuffer`](components_ClusterNodeContainer._internal_.Framebuffer.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2200

___

### viewport

• **viewport**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2195

___

### writeDepthTexture

• **writeDepthTexture**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:2197

## Accessors

### size

• `get` **size**(): `Object`

Get the size of the current width and height. Returns object with `width` and `height` values.

**`member`** {object}

**`readonly`**

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Defined in

node_modules/@pixi/core/index.d.ts:2234

## Methods

### bind

▸ **bind**(`framebuffer?`, `frame?`, `mipLevel?`): `void`

Bind a framebuffer

#### Parameters

| Name | Type |
| :------ | :------ |
| `framebuffer?` | [`Framebuffer`](components_ClusterNodeContainer._internal_.Framebuffer.md) |
| `frame?` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) |
| `mipLevel?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2218

___

### blit

▸ **blit**(`framebuffer?`, `sourcePixels?`, `destPixels?`): `void`

Only works with WebGL2

blits framebuffer to another of the same or bigger size
after that target framebuffer is bound

Fails with WebGL warning if blits multisample framebuffer to different size

#### Parameters

| Name | Type |
| :------ | :------ |
| `framebuffer?` | [`Framebuffer`](components_ClusterNodeContainer._internal_.Framebuffer.md) |
| `sourcePixels?` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) |
| `destPixels?` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2300

___

### canMultisampleFramebuffer

▸ `Protected` **canMultisampleFramebuffer**(`framebuffer`): `boolean`

Returns true if the frame buffer can be multisampled

#### Parameters

| Name | Type |
| :------ | :------ |
| `framebuffer` | [`Framebuffer`](components_ClusterNodeContainer._internal_.Framebuffer.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:2280

___

### clear

▸ **clear**(`r`, `g`, `b`, `a`, `mask?`): `void`

Clear the color of the context

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r` | `number` | Red value from 0 to 1 |
| `g` | `number` | Green value from 0 to 1 |
| `b` | `number` | Blue value from 0 to 1 |
| `a` | `number` | Alpha value from 0 to 1 |
| `mask?` | [`BUFFER_BITS`](../enums/components_ClusterNodeContainer._internal_.BUFFER_BITS.md) | - |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2250

___

### contextChange

▸ `Protected` **contextChange**(): `void`

Sets up the renderer context and necessary buffers.

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2210

___

### detectSamples

▸ `Protected` **detectSamples**(`samples`): [`MSAA_QUALITY`](../enums/components_ClusterNodeContainer._internal_.MSAA_QUALITY.md)

Detects number of samples that is not more than a param but as close to it as possible

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `samples` | [`MSAA_QUALITY`](../enums/components_ClusterNodeContainer._internal_.MSAA_QUALITY.md) | number of samples |

#### Returns

[`MSAA_QUALITY`](../enums/components_ClusterNodeContainer._internal_.MSAA_QUALITY.md)

- recommended number of samples

#### Defined in

node_modules/@pixi/core/index.d.ts:2287

___

### disposeAll

▸ **disposeAll**(`contextLost?`): `void`

Disposes all framebuffers, but not textures bound to them

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextLost?` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2311

___

### disposeFramebuffer

▸ **disposeFramebuffer**(`framebuffer`, `contextLost?`): `void`

Disposes framebuffer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `framebuffer` | [`Framebuffer`](components_ClusterNodeContainer._internal_.Framebuffer.md) | framebuffer that has to be disposed of |
| `contextLost?` | `boolean` | - |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2306

___

### forceStencil

▸ `Private` **forceStencil**(): `void`

Forcing creation of stencil buffer for current framebuffer, if it wasn't done before.
Used by MaskSystem, when its time to use stencil mask for Graphics element.

Its an alternative for public lazy `framebuffer.enableStencil`, in case we need stencil without rebind.

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2320

___

### initFramebuffer

▸ `Protected` **initFramebuffer**(`framebuffer`): [`GLFramebuffer`](components_ClusterNodeContainer._internal_.GLFramebuffer.md)

Initialize framebuffer for this context

#### Parameters

| Name | Type |
| :------ | :------ |
| `framebuffer` | [`Framebuffer`](components_ClusterNodeContainer._internal_.Framebuffer.md) |

#### Returns

[`GLFramebuffer`](components_ClusterNodeContainer._internal_.GLFramebuffer.md)

created GLFramebuffer

#### Defined in

node_modules/@pixi/core/index.d.ts:2258

___

### reset

▸ **reset**(): `void`

resets framebuffer stored state, binds screen framebuffer

should be called before renderTexture reset()

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2326

___

### resizeFramebuffer

▸ `Protected` **resizeFramebuffer**(`framebuffer`): `void`

Resize the framebuffer

#### Parameters

| Name | Type |
| :------ | :------ |
| `framebuffer` | [`Framebuffer`](components_ClusterNodeContainer._internal_.Framebuffer.md) |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2265

___

### setViewport

▸ **setViewport**(`x`, `y`, `width`, `height`): `void`

Set the WebGLRenderingContext's viewport.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | X position of viewport |
| `y` | `number` | Y position of viewport |
| `width` | `number` | Width of viewport |
| `height` | `number` | Height of viewport |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2227

___

### updateFramebuffer

▸ `Protected` **updateFramebuffer**(`framebuffer`, `mipLevel`): `void`

Update the framebuffer

#### Parameters

| Name | Type |
| :------ | :------ |
| `framebuffer` | [`Framebuffer`](components_ClusterNodeContainer._internal_.Framebuffer.md) |
| `mipLevel` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2273