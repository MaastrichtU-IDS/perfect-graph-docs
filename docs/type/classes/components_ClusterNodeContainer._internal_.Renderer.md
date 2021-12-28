[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Renderer

# Class: Renderer

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Renderer

The Renderer draws the scene and all its content onto a WebGL enabled canvas.

This renderer should be used for browsers that support WebGL.

This renderer works by automatically managing WebGLBatchesm, so no need for Sprite Batches or Sprite Clouds.
Don't forget to add the view to your DOM or you will not see anything!

Renderer is composed of systems that manage specific tasks. The following systems are added by default
whenever you create a renderer:

| System                               | Description                                                                   |
| ------------------------------------ | ----------------------------------------------------------------------------- |
| {@link PIXI.BatchSystem}             | This manages object renderers that defer rendering until a flush.             |
| {@link PIXI.ContextSystem}           | This manages the WebGL context and extensions.                                |
| {@link PIXI.EventSystem}             | This manages UI events.                                                       |
| {@link PIXI.FilterSystem}            | This manages the filtering pipeline for post-processing effects.              |
| {@link PIXI.FramebufferSystem}       | This manages framebuffers, which are used for offscreen rendering.            |
| {@link PIXI.GeometrySystem}          | This manages geometries & buffers, which are used to draw object meshes.      |
| {@link PIXI.MaskSystem}              | This manages masking operations.                                              |
| {@link PIXI.ProjectionSystem}        | This manages the `projectionMatrix`, used by shaders to get NDC coordinates.  |
| {@link PIXI.RenderTextureSystem}     | This manages render-textures, which are an abstraction over framebuffers.     |
| {@link PIXI.ScissorSystem}           | This handles scissor masking, and is used internally by [MaskSystem](components_ClusterNodeContainer._internal_.MaskSystem.md)    |
| {@link PIXI.ShaderSystem}            | This manages shaders, programs that run on the GPU to calculate 'em pixels.   |
| {@link PIXI.StateSystem}             | This manages the WebGL state variables like blend mode, depth testing, etc.   |
| {@link PIXI.StencilSystem}           | This handles stencil masking, and is used internally by [MaskSystem](components_ClusterNodeContainer._internal_.MaskSystem.md)    |
| {@link PIXI.TextureSystem}           | This manages textures and their resources on the GPU.                         |
| {@link PIXI.TextureGCSystem}         | This will automatically remove textures from the GPU if they are not used.    |

The breadth of the API surface provided by the renderer is contained within these systems.

**`memberof`** PIXI

## Hierarchy

- [`AbstractRenderer`](components_ClusterNodeContainer._internal_.AbstractRenderer.md)

  ↳ **`Renderer`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Renderer.md#constructor)

### Properties

- [CONTEXT\_UID](components_ClusterNodeContainer._internal_.Renderer.md#context_uid)
- [\_backgroundColor](components_ClusterNodeContainer._internal_.Renderer.md#_backgroundcolor)
- [\_backgroundColorRgba](components_ClusterNodeContainer._internal_.Renderer.md#_backgroundcolorrgba)
- [\_backgroundColorString](components_ClusterNodeContainer._internal_.Renderer.md#_backgroundcolorstring)
- [\_lastObjectRendered](components_ClusterNodeContainer._internal_.Renderer.md#_lastobjectrendered)
- [autoDensity](components_ClusterNodeContainer._internal_.Renderer.md#autodensity)
- [batch](components_ClusterNodeContainer._internal_.Renderer.md#batch)
- [buffer](components_ClusterNodeContainer._internal_.Renderer.md#buffer)
- [clearBeforeRender](components_ClusterNodeContainer._internal_.Renderer.md#clearbeforerender)
- [context](components_ClusterNodeContainer._internal_.Renderer.md#context)
- [filter](components_ClusterNodeContainer._internal_.Renderer.md#filter)
- [framebuffer](components_ClusterNodeContainer._internal_.Renderer.md#framebuffer)
- [geometry](components_ClusterNodeContainer._internal_.Renderer.md#geometry)
- [gl](components_ClusterNodeContainer._internal_.Renderer.md#gl)
- [globalUniforms](components_ClusterNodeContainer._internal_.Renderer.md#globaluniforms)
- [mask](components_ClusterNodeContainer._internal_.Renderer.md#mask)
- [multisample](components_ClusterNodeContainer._internal_.Renderer.md#multisample)
- [options](components_ClusterNodeContainer._internal_.Renderer.md#options)
- [plugins](components_ClusterNodeContainer._internal_.Renderer.md#plugins)
- [preserveDrawingBuffer](components_ClusterNodeContainer._internal_.Renderer.md#preservedrawingbuffer)
- [projection](components_ClusterNodeContainer._internal_.Renderer.md#projection)
- [renderTexture](components_ClusterNodeContainer._internal_.Renderer.md#rendertexture)
- [renderingToScreen](components_ClusterNodeContainer._internal_.Renderer.md#renderingtoscreen)
- [resolution](components_ClusterNodeContainer._internal_.Renderer.md#resolution)
- [runners](components_ClusterNodeContainer._internal_.Renderer.md#runners)
- [scissor](components_ClusterNodeContainer._internal_.Renderer.md#scissor)
- [screen](components_ClusterNodeContainer._internal_.Renderer.md#screen)
- [shader](components_ClusterNodeContainer._internal_.Renderer.md#shader)
- [state](components_ClusterNodeContainer._internal_.Renderer.md#state)
- [stencil](components_ClusterNodeContainer._internal_.Renderer.md#stencil)
- [texture](components_ClusterNodeContainer._internal_.Renderer.md#texture)
- [textureGC](components_ClusterNodeContainer._internal_.Renderer.md#texturegc)
- [type](components_ClusterNodeContainer._internal_.Renderer.md#type)
- [useContextAlpha](components_ClusterNodeContainer._internal_.Renderer.md#usecontextalpha)
- [view](components_ClusterNodeContainer._internal_.Renderer.md#view)
- [\_\_plugins](components_ClusterNodeContainer._internal_.Renderer.md#__plugins)
- [prefixed](components_ClusterNodeContainer._internal_.Renderer.md#prefixed)

### Accessors

- [backgroundAlpha](components_ClusterNodeContainer._internal_.Renderer.md#backgroundalpha)
- [backgroundColor](components_ClusterNodeContainer._internal_.Renderer.md#backgroundcolor)
- [extract](components_ClusterNodeContainer._internal_.Renderer.md#extract)
- [height](components_ClusterNodeContainer._internal_.Renderer.md#height)
- [width](components_ClusterNodeContainer._internal_.Renderer.md#width)

### Methods

- [addListener](components_ClusterNodeContainer._internal_.Renderer.md#addlistener)
- [addSystem](components_ClusterNodeContainer._internal_.Renderer.md#addsystem)
- [clear](components_ClusterNodeContainer._internal_.Renderer.md#clear)
- [contextChange](components_ClusterNodeContainer._internal_.Renderer.md#contextchange)
- [destroy](components_ClusterNodeContainer._internal_.Renderer.md#destroy)
- [emit](components_ClusterNodeContainer._internal_.Renderer.md#emit)
- [eventNames](components_ClusterNodeContainer._internal_.Renderer.md#eventnames)
- [initPlugins](components_ClusterNodeContainer._internal_.Renderer.md#initplugins)
- [listenerCount](components_ClusterNodeContainer._internal_.Renderer.md#listenercount)
- [listeners](components_ClusterNodeContainer._internal_.Renderer.md#listeners)
- [off](components_ClusterNodeContainer._internal_.Renderer.md#off)
- [on](components_ClusterNodeContainer._internal_.Renderer.md#on)
- [once](components_ClusterNodeContainer._internal_.Renderer.md#once)
- [removeAllListeners](components_ClusterNodeContainer._internal_.Renderer.md#removealllisteners)
- [removeListener](components_ClusterNodeContainer._internal_.Renderer.md#removelistener)
- [render](components_ClusterNodeContainer._internal_.Renderer.md#render)
- [reset](components_ClusterNodeContainer._internal_.Renderer.md#reset)
- [resize](components_ClusterNodeContainer._internal_.Renderer.md#resize)
- [create](components_ClusterNodeContainer._internal_.Renderer.md#create)
- [registerPlugin](components_ClusterNodeContainer._internal_.Renderer.md#registerplugin)

## Constructors

### constructor

• **new Renderer**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IRendererOptions`](../interfaces/components_ClusterNodeContainer._internal_.IRendererOptions.md) |

#### Overrides

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[constructor](components_ClusterNodeContainer._internal_.AbstractRenderer.md#constructor)

#### Defined in

node_modules/@pixi/core/index.d.ts:3670

## Properties

### CONTEXT\_UID

• **CONTEXT\_UID**: `number`

Unique UID assigned to the renderer's WebGL context.

#### Defined in

node_modules/@pixi/core/index.d.ts:3530

___

### \_backgroundColor

• `Protected` **\_backgroundColor**: `number`

#### Inherited from

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[_backgroundColor](components_ClusterNodeContainer._internal_.AbstractRenderer.md#_backgroundcolor)

#### Defined in

node_modules/@pixi/core/index.d.ts:405

___

### \_backgroundColorRgba

• **\_backgroundColorRgba**: `number`[]

#### Inherited from

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[_backgroundColorRgba](components_ClusterNodeContainer._internal_.AbstractRenderer.md#_backgroundcolorrgba)

#### Defined in

node_modules/@pixi/core/index.d.ts:407

___

### \_backgroundColorString

• `Protected` **\_backgroundColorString**: `string`

#### Inherited from

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[_backgroundColorString](components_ClusterNodeContainer._internal_.AbstractRenderer.md#_backgroundcolorstring)

#### Defined in

node_modules/@pixi/core/index.d.ts:406

___

### \_lastObjectRendered

• **\_lastObjectRendered**: [`IRenderableObject`](../interfaces/components_ClusterNodeContainer._internal_.IRenderableObject.md)

#### Inherited from

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[_lastObjectRendered](components_ClusterNodeContainer._internal_.AbstractRenderer.md#_lastobjectrendered)

#### Defined in

node_modules/@pixi/core/index.d.ts:408

___

### autoDensity

• `Readonly` **autoDensity**: `boolean`

#### Inherited from

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[autoDensity](components_ClusterNodeContainer._internal_.AbstractRenderer.md#autodensity)

#### Defined in

node_modules/@pixi/core/index.d.ts:403

___

### batch

• **batch**: [`BatchSystem`](components_ClusterNodeContainer._internal_.BatchSystem.md)

Batch system instance

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:3617

___

### buffer

• **buffer**: [`BufferSystem`](components_ClusterNodeContainer._internal_.BufferSystem.md)

Buffer system instance

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:3572

___

### clearBeforeRender

• `Optional` **clearBeforeRender**: `boolean`

#### Inherited from

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[clearBeforeRender](components_ClusterNodeContainer._internal_.AbstractRenderer.md#clearbeforerender)

#### Defined in

node_modules/@pixi/core/index.d.ts:396

___

### context

• **context**: [`ContextSystem`](components_ClusterNodeContainer._internal_.ContextSystem.md)

Context system instance

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:3552

___

### filter

• **filter**: [`FilterSystem`](components_ClusterNodeContainer._internal_.FilterSystem.md)

Filter system instance

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:3607

___

### framebuffer

• **framebuffer**: [`FramebufferSystem`](components_ClusterNodeContainer._internal_.FramebufferSystem.md)

Framebuffer system instance

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:3582

___

### geometry

• **geometry**: [`GeometrySystem`](components_ClusterNodeContainer._internal_.GeometrySystem.md)

Geometry system instance

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:3577

___

### gl

• **gl**: [`IRenderingContext`](../interfaces/components_ClusterNodeContainer._internal_.IRenderingContext.md)

WebGL context, set by {@link PIXI.ContextSystem this.context}.

**`readonly`**

**`member`** {WebGLRenderingContext}

#### Defined in

node_modules/@pixi/core/index.d.ts:3526

___

### globalUniforms

• **globalUniforms**: [`UniformGroup`](components_ClusterNodeContainer._internal_.UniformGroup.md)<[`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\>\>

Global uniforms

#### Defined in

node_modules/@pixi/core/index.d.ts:3528

___

### mask

• **mask**: [`MaskSystem`](components_ClusterNodeContainer._internal_.MaskSystem.md)

Mask system instance

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:3547

___

### multisample

• **multisample**: [`MSAA_QUALITY`](../enums/components_ClusterNodeContainer._internal_.MSAA_QUALITY.md)

The number of msaa samples of the canvas.

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:3542

___

### options

• `Readonly` **options**: [`IRendererOptions`](../interfaces/components_ClusterNodeContainer._internal_.IRendererOptions.md)

#### Inherited from

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[options](components_ClusterNodeContainer._internal_.AbstractRenderer.md#options)

#### Defined in

node_modules/@pixi/core/index.d.ts:397

___

### plugins

• `Readonly` **plugins**: [`IRendererPlugins`](../interfaces/components_ClusterNodeContainer._internal_.IRendererPlugins.md)

#### Inherited from

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[plugins](components_ClusterNodeContainer._internal_.AbstractRenderer.md#plugins)

#### Defined in

node_modules/@pixi/core/index.d.ts:401

___

### preserveDrawingBuffer

• `Readonly` **preserveDrawingBuffer**: `boolean`

#### Inherited from

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[preserveDrawingBuffer](components_ClusterNodeContainer._internal_.AbstractRenderer.md#preservedrawingbuffer)

#### Defined in

node_modules/@pixi/core/index.d.ts:404

___

### projection

• **projection**: [`ProjectionSystem`](components_ClusterNodeContainer._internal_.ProjectionSystem.md)

Projection system instance

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:3597

___

### renderTexture

• **renderTexture**: [`RenderTextureSystem`](components_ClusterNodeContainer._internal_.RenderTextureSystem.md)

RenderTexture system instance

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:3612

___

### renderingToScreen

• **renderingToScreen**: `boolean`

Flag if we are rendering to the screen vs renderTexture

**`readonly`**

**`default`** true

#### Defined in

node_modules/@pixi/core/index.d.ts:3537

___

### resolution

• **resolution**: `number`

#### Inherited from

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[resolution](components_ClusterNodeContainer._internal_.AbstractRenderer.md#resolution)

#### Defined in

node_modules/@pixi/core/index.d.ts:395

___

### runners

• `Private` **runners**: `Object`

Internal signal instances of **runner**, these
are assigned to each system created.

**`see`** PIXI.Runner

**`name`** runners

**`readonly`**

**`property`** {PIXI.Runner} destroy - Destroy runner

**`property`** {PIXI.Runner} contextChange - Context change runner

**`property`** {PIXI.Runner} reset - Reset runner

**`property`** {PIXI.Runner} update - Update runner

**`property`** {PIXI.Runner} postrender - Post-render runner

**`property`** {PIXI.Runner} prerender - Pre-render runner

**`property`** {PIXI.Runner} resize - Resize runner

#### Index signature

▪ [key: `string`]: [`Runner`](components_ClusterNodeContainer._internal_.Runner.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:3634

___

### scissor

• **scissor**: [`ScissorSystem`](components_ClusterNodeContainer._internal_.ScissorSystem.md)

Scissor system instance

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:3587

___

### screen

• `Readonly` **screen**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Inherited from

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[screen](components_ClusterNodeContainer._internal_.AbstractRenderer.md#screen)

#### Defined in

node_modules/@pixi/core/index.d.ts:399

___

### shader

• **shader**: [`ShaderSystem`](components_ClusterNodeContainer._internal_.ShaderSystem.md)

Shader system instance

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:3562

___

### state

• **state**: [`StateSystem`](components_ClusterNodeContainer._internal_.StateSystem.md)

State system instance

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:3557

___

### stencil

• **stencil**: [`StencilSystem`](components_ClusterNodeContainer._internal_.StencilSystem.md)

Stencil system instance

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:3592

___

### texture

• **texture**: [`TextureSystem`](components_ClusterNodeContainer._internal_.TextureSystem.md)

Texture system instance

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:3567

___

### textureGC

• **textureGC**: [`TextureGCSystem`](components_ClusterNodeContainer._internal_.TextureGCSystem.md)

Texture garbage collector system instance

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:3602

___

### type

• `Readonly` **type**: [`RENDERER_TYPE`](../enums/components_ClusterNodeContainer._internal_.RENDERER_TYPE.md)

#### Inherited from

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[type](components_ClusterNodeContainer._internal_.AbstractRenderer.md#type)

#### Defined in

node_modules/@pixi/core/index.d.ts:398

___

### useContextAlpha

• `Readonly` **useContextAlpha**: `boolean` \| ``"notMultiplied"``

#### Inherited from

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[useContextAlpha](components_ClusterNodeContainer._internal_.AbstractRenderer.md#usecontextalpha)

#### Defined in

node_modules/@pixi/core/index.d.ts:402

___

### view

• `Readonly` **view**: `HTMLCanvasElement`

#### Inherited from

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[view](components_ClusterNodeContainer._internal_.AbstractRenderer.md#view)

#### Defined in

node_modules/@pixi/core/index.d.ts:400

___

### \_\_plugins

▪ `Static` **\_\_plugins**: [`IRendererPlugins`](../interfaces/components_ClusterNodeContainer._internal_.IRendererPlugins.md)

Collection of installed plugins. These are included by default in PIXI, but can be excluded
by creating a custom build. Consult the README for more information about creating custom
builds and excluding plugins.

**`readonly`**

**`property`** {PIXI.AccessibilityManager} accessibility Support tabbing interactive elements.

**`property`** {PIXI.Extract} extract Extract image data from renderer.

**`property`** {PIXI.InteractionManager} interaction Handles mouse, touch and pointer events.

**`property`** {PIXI.ParticleRenderer} particle Renderer for ParticleContainer objects.

**`property`** {PIXI.Prepare} prepare Pre-render display objects.

**`property`** {PIXI.BatchRenderer} batch Batching of Sprite, Graphics and Mesh objects.

**`property`** {PIXI.TilingSpriteRenderer} tilingSprite Renderer for TilingSprite objects.

#### Defined in

node_modules/@pixi/core/index.d.ts:3752

___

### prefixed

▪ `Static` **prefixed**: `string` \| `boolean`

#### Inherited from

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[prefixed](components_ClusterNodeContainer._internal_.AbstractRenderer.md#prefixed)

#### Defined in

node_modules/eventemitter3/index.d.ts:6

## Accessors

### backgroundAlpha

• `get` **backgroundAlpha**(): `number`

The background color alpha. Setting this to 0 will make the canvas transparent.

**`member`** {number}

#### Returns

`number`

#### Inherited from

AbstractRenderer.backgroundAlpha

#### Defined in

node_modules/@pixi/core/index.d.ts:509

• `set` **backgroundAlpha**(`value`): `void`

The background color alpha. Setting this to 0 will make the canvas transparent.

**`member`** {number}

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

AbstractRenderer.backgroundAlpha

#### Defined in

node_modules/@pixi/core/index.d.ts:510

___

### backgroundColor

• `get` **backgroundColor**(): `number`

The background color to fill if not transparent

**`member`** {number}

#### Returns

`number`

#### Inherited from

AbstractRenderer.backgroundColor

#### Defined in

node_modules/@pixi/core/index.d.ts:502

• `set` **backgroundColor**(`value`): `void`

The background color to fill if not transparent

**`member`** {number}

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

AbstractRenderer.backgroundColor

#### Defined in

node_modules/@pixi/core/index.d.ts:503

___

### extract

• `get` **extract**(): `any`

Please use `plugins.extract` instead.

**`member`** {PIXI.Extract} extract

**`deprecated`** since 6.0.0

**`readonly`**

#### Returns

`any`

#### Defined in

node_modules/@pixi/core/index.d.ts:3737

___

### height

• `get` **height**(): `number`

Same as view.height, actual number of pixels in the canvas by vertical.

**`member`** {number}

**`readonly`**

**`default`** 600

#### Returns

`number`

#### Inherited from

AbstractRenderer.height

#### Defined in

node_modules/@pixi/core/index.d.ts:453

___

### width

• `get` **width**(): `number`

Same as view.width, actual number of pixels in the canvas by horizontal.

**`member`** {number}

**`readonly`**

**`default`** 800

#### Returns

`number`

#### Inherited from

AbstractRenderer.width

#### Defined in

node_modules/@pixi/core/index.d.ts:445

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md)

#### Inherited from

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[addListener](components_ClusterNodeContainer._internal_.AbstractRenderer.md#addlistener)

#### Defined in

node_modules/eventemitter3/index.d.ts:33

___

### addSystem

▸ **addSystem**(`ClassRef`, `name`): [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md)

Add a new system to the renderer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ClassRef` | `ISystemConstructor`<[`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md)\> | Class reference |
| `name` | `string` | - |

#### Returns

[`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md)

Return instance of renderer

#### Defined in

node_modules/@pixi/core/index.d.ts:3681

___

### clear

▸ **clear**(): `void`

Clear the frame buffer.

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:3723

___

### contextChange

▸ `Protected` **contextChange**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:3671

___

### destroy

▸ **destroy**(`removeView?`): `void`

Removes everything from the renderer (event listeners, spritebatch, etc...)

#### Parameters

| Name | Type |
| :------ | :------ |
| `removeView?` | `boolean` |

#### Returns

`void`

#### Overrides

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[destroy](components_ClusterNodeContainer._internal_.AbstractRenderer.md#destroy)

#### Defined in

node_modules/@pixi/core/index.d.ts:3730

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

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[emit](components_ClusterNodeContainer._internal_.AbstractRenderer.md#emit)

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

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[eventNames](components_ClusterNodeContainer._internal_.AbstractRenderer.md#eventnames)

#### Defined in

node_modules/eventemitter3/index.d.ts:12

___

### initPlugins

▸ `Protected` **initPlugins**(`staticMap`): `void`

Initialize the plugins.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `staticMap` | [`IRendererPlugins`](../interfaces/components_ClusterNodeContainer._internal_.IRendererPlugins.md) | The dictionary of statically saved plugins. |

#### Returns

`void`

#### Inherited from

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[initPlugins](components_ClusterNodeContainer._internal_.AbstractRenderer.md#initplugins)

#### Defined in

node_modules/@pixi/core/index.d.ts:437

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

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[listenerCount](components_ClusterNodeContainer._internal_.AbstractRenderer.md#listenercount)

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

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[listeners](components_ClusterNodeContainer._internal_.AbstractRenderer.md#listeners)

#### Defined in

node_modules/eventemitter3/index.d.ts:17

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md)

#### Inherited from

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[off](components_ClusterNodeContainer._internal_.AbstractRenderer.md#off)

#### Defined in

node_modules/eventemitter3/index.d.ts:44

___

### on

▸ **on**(`event`, `fn`, `context?`): [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md)

Add a listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md)

#### Inherited from

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[on](components_ClusterNodeContainer._internal_.AbstractRenderer.md#on)

#### Defined in

node_modules/eventemitter3/index.d.ts:32

___

### once

▸ **once**(`event`, `fn`, `context?`): [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md)

#### Inherited from

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[once](components_ClusterNodeContainer._internal_.AbstractRenderer.md#once)

#### Defined in

node_modules/eventemitter3/index.d.ts:38

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md)

#### Inherited from

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[removeAllListeners](components_ClusterNodeContainer._internal_.AbstractRenderer.md#removealllisteners)

#### Defined in

node_modules/eventemitter3/index.d.ts:49

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md)

#### Inherited from

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[removeListener](components_ClusterNodeContainer._internal_.AbstractRenderer.md#removelistener)

#### Defined in

node_modules/eventemitter3/index.d.ts:43

___

### render

▸ **render**(`displayObject`, `options?`): `void`

Renders the object to its WebGL view.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `displayObject` | [`IRenderableObject`](../interfaces/components_ClusterNodeContainer._internal_.IRenderableObject.md) | The object to be rendered. |
| `options?` | [`IRendererRenderOptions`](../interfaces/components_ClusterNodeContainer._internal_.IRendererRenderOptions.md) | - |

#### Returns

`void`

#### Overrides

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[render](components_ClusterNodeContainer._internal_.AbstractRenderer.md#render)

#### Defined in

node_modules/@pixi/core/index.d.ts:3692

▸ **render**(`displayObject`, `renderTexture?`, `clear?`, `transform?`, `skipUpdateTransform?`): `void`

Please use the `option` render arguments instead.

**`deprecated`** Since 6.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayObject` | [`IRenderableObject`](../interfaces/components_ClusterNodeContainer._internal_.IRenderableObject.md) |
| `renderTexture?` | [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md) |
| `clear?` | `boolean` |
| `transform?` | [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md) |
| `skipUpdateTransform?` | `boolean` |

#### Returns

`void`

#### Overrides

AbstractRenderer.render

#### Defined in

node_modules/@pixi/core/index.d.ts:3703

___

### reset

▸ **reset**(): [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md)

Resets the WebGL state so you can render things however you fancy!

#### Returns

[`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md)

Returns itself.

#### Defined in

node_modules/@pixi/core/index.d.ts:3721

___

### resize

▸ **resize**(`desiredScreenWidth`, `desiredScreenHeight`): `void`

Resizes the WebGL view to the specified width and height.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `desiredScreenWidth` | `number` | The desired width of the screen. |
| `desiredScreenHeight` | `number` | The desired height of the screen. |

#### Returns

`void`

#### Overrides

[AbstractRenderer](components_ClusterNodeContainer._internal_.AbstractRenderer.md).[resize](components_ClusterNodeContainer._internal_.AbstractRenderer.md#resize)

#### Defined in

node_modules/@pixi/core/index.d.ts:3715

___

### create

▸ `Static` `Private` **create**(`options?`): [`AbstractRenderer`](components_ClusterNodeContainer._internal_.AbstractRenderer.md)

Create renderer if WebGL is available. Overrideable
by the **@pixi/canvas-renderer** package to allow fallback.
throws error if WebGL is not available.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IRendererOptions`](../interfaces/components_ClusterNodeContainer._internal_.IRendererOptions.md) |

#### Returns

[`AbstractRenderer`](components_ClusterNodeContainer._internal_.AbstractRenderer.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:3644

___

### registerPlugin

▸ `Static` **registerPlugin**(`pluginName`, `ctor`): `void`

Adds a plugin to the renderer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pluginName` | `string` | The name of the plugin. |
| `ctor` | [`IRendererPluginConstructor`](../interfaces/components_ClusterNodeContainer._internal_.IRendererPluginConstructor.md) | The constructor function or class for the plugin. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:3759
