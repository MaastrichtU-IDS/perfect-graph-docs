[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / AbstractRenderer

# Class: AbstractRenderer

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).AbstractRenderer

The AbstractRenderer is the base for a PixiJS Renderer. It is extended by the {@link PIXI.CanvasRenderer}
and {@link PIXI.Renderer} which can be used for rendering a PixiJS scene.

**`abstract`**

**`memberof`** PIXI

## Hierarchy

- [`EventEmitter`](components_ClusterNodeContainer._internal_.EventEmitter-1.md)

  ↳ **`AbstractRenderer`**

  ↳↳ [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md)

  ↳↳ [`Renderer`](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.Renderer.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.AbstractRenderer.md#constructor)

### Properties

- [\_backgroundColor](components_ClusterNodeContainer._internal_.AbstractRenderer.md#_backgroundcolor)
- [\_backgroundColorRgba](components_ClusterNodeContainer._internal_.AbstractRenderer.md#_backgroundcolorrgba)
- [\_backgroundColorString](components_ClusterNodeContainer._internal_.AbstractRenderer.md#_backgroundcolorstring)
- [\_lastObjectRendered](components_ClusterNodeContainer._internal_.AbstractRenderer.md#_lastobjectrendered)
- [autoDensity](components_ClusterNodeContainer._internal_.AbstractRenderer.md#autodensity)
- [clearBeforeRender](components_ClusterNodeContainer._internal_.AbstractRenderer.md#clearbeforerender)
- [options](components_ClusterNodeContainer._internal_.AbstractRenderer.md#options)
- [plugins](components_ClusterNodeContainer._internal_.AbstractRenderer.md#plugins)
- [preserveDrawingBuffer](components_ClusterNodeContainer._internal_.AbstractRenderer.md#preservedrawingbuffer)
- [resolution](components_ClusterNodeContainer._internal_.AbstractRenderer.md#resolution)
- [screen](components_ClusterNodeContainer._internal_.AbstractRenderer.md#screen)
- [type](components_ClusterNodeContainer._internal_.AbstractRenderer.md#type)
- [useContextAlpha](components_ClusterNodeContainer._internal_.AbstractRenderer.md#usecontextalpha)
- [view](components_ClusterNodeContainer._internal_.AbstractRenderer.md#view)
- [prefixed](components_ClusterNodeContainer._internal_.AbstractRenderer.md#prefixed)

### Accessors

- [backgroundAlpha](components_ClusterNodeContainer._internal_.AbstractRenderer.md#backgroundalpha)
- [backgroundColor](components_ClusterNodeContainer._internal_.AbstractRenderer.md#backgroundcolor)
- [height](components_ClusterNodeContainer._internal_.AbstractRenderer.md#height)
- [width](components_ClusterNodeContainer._internal_.AbstractRenderer.md#width)

### Methods

- [addListener](components_ClusterNodeContainer._internal_.AbstractRenderer.md#addlistener)
- [destroy](components_ClusterNodeContainer._internal_.AbstractRenderer.md#destroy)
- [emit](components_ClusterNodeContainer._internal_.AbstractRenderer.md#emit)
- [eventNames](components_ClusterNodeContainer._internal_.AbstractRenderer.md#eventnames)
- [generateTexture](components_ClusterNodeContainer._internal_.AbstractRenderer.md#generatetexture)
- [initPlugins](components_ClusterNodeContainer._internal_.AbstractRenderer.md#initplugins)
- [listenerCount](components_ClusterNodeContainer._internal_.AbstractRenderer.md#listenercount)
- [listeners](components_ClusterNodeContainer._internal_.AbstractRenderer.md#listeners)
- [off](components_ClusterNodeContainer._internal_.AbstractRenderer.md#off)
- [on](components_ClusterNodeContainer._internal_.AbstractRenderer.md#on)
- [once](components_ClusterNodeContainer._internal_.AbstractRenderer.md#once)
- [removeAllListeners](components_ClusterNodeContainer._internal_.AbstractRenderer.md#removealllisteners)
- [removeListener](components_ClusterNodeContainer._internal_.AbstractRenderer.md#removelistener)
- [render](components_ClusterNodeContainer._internal_.AbstractRenderer.md#render)
- [resize](components_ClusterNodeContainer._internal_.AbstractRenderer.md#resize)

## Constructors

### constructor

• **new AbstractRenderer**(`type?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`RENDERER_TYPE`](../enums/components_ClusterNodeContainer._internal_.RENDERER_TYPE.md) |
| `options?` | [`IRendererOptions`](../interfaces/components_ClusterNodeContainer._internal_.IRendererOptions.md) |

#### Overrides

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[constructor](components_ClusterNodeContainer._internal_.EventEmitter-1.md#constructor)

#### Defined in

node_modules/@pixi/core/index.d.ts:430

## Properties

### \_backgroundColor

• `Protected` **\_backgroundColor**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:405

___

### \_backgroundColorRgba

• **\_backgroundColorRgba**: `number`[]

#### Defined in

node_modules/@pixi/core/index.d.ts:407

___

### \_backgroundColorString

• `Protected` **\_backgroundColorString**: `string`

#### Defined in

node_modules/@pixi/core/index.d.ts:406

___

### \_lastObjectRendered

• **\_lastObjectRendered**: [`IRenderableObject`](../interfaces/components_ClusterNodeContainer._internal_.IRenderableObject.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:408

___

### autoDensity

• `Readonly` **autoDensity**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:403

___

### clearBeforeRender

• `Optional` **clearBeforeRender**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:396

___

### options

• `Readonly` **options**: [`IRendererOptions`](../interfaces/components_ClusterNodeContainer._internal_.IRendererOptions.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:397

___

### plugins

• `Readonly` **plugins**: [`IRendererPlugins`](../interfaces/components_ClusterNodeContainer._internal_.IRendererPlugins.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:401

___

### preserveDrawingBuffer

• `Readonly` **preserveDrawingBuffer**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:404

___

### resolution

• **resolution**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:395

___

### screen

• `Readonly` **screen**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:399

___

### type

• `Readonly` **type**: [`RENDERER_TYPE`](../enums/components_ClusterNodeContainer._internal_.RENDERER_TYPE.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:398

___

### useContextAlpha

• `Readonly` **useContextAlpha**: `boolean` \| ``"notMultiplied"``

#### Defined in

node_modules/@pixi/core/index.d.ts:402

___

### view

• `Readonly` **view**: `HTMLCanvasElement`

#### Defined in

node_modules/@pixi/core/index.d.ts:400

___

### prefixed

▪ `Static` **prefixed**: `string` \| `boolean`

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[prefixed](components_ClusterNodeContainer._internal_.EventEmitter-1.md#prefixed)

#### Defined in

node_modules/eventemitter3/index.d.ts:6

## Accessors

### backgroundAlpha

• `get` **backgroundAlpha**(): `number`

The background color alpha. Setting this to 0 will make the canvas transparent.

**`member`** {number}

#### Returns

`number`

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

#### Defined in

node_modules/@pixi/core/index.d.ts:510

___

### backgroundColor

• `get` **backgroundColor**(): `number`

The background color to fill if not transparent

**`member`** {number}

#### Returns

`number`

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

#### Defined in

node_modules/@pixi/core/index.d.ts:503

___

### height

• `get` **height**(): `number`

Same as view.height, actual number of pixels in the canvas by vertical.

**`member`** {number}

**`readonly`**

**`default`** 600

#### Returns

`number`

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

#### Defined in

node_modules/@pixi/core/index.d.ts:445

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`AbstractRenderer`](components_ClusterNodeContainer._internal_.AbstractRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`AbstractRenderer`](components_ClusterNodeContainer._internal_.AbstractRenderer.md)

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[addListener](components_ClusterNodeContainer._internal_.EventEmitter-1.md#addlistener)

#### Defined in

node_modules/eventemitter3/index.d.ts:33

___

### destroy

▸ **destroy**(`removeView?`): `void`

Removes everything from the renderer and optionally removes the Canvas DOM element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `removeView?` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:496

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

### generateTexture

▸ **generateTexture**(`displayObject`, `options?`): [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

Useful function that returns a texture of the display object that can then be used to create sprites
This can be quite useful if your displayObject is complicated and needs to be reused multiple times.

**`method`** PIXI.AbstractRenderer#generateTexture

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `displayObject` | [`IRenderableObject`](../interfaces/components_ClusterNodeContainer._internal_.IRenderableObject.md) | The displayObject the object will be generated from. |
| `options?` | [`IGenerateTextureOptions`](../interfaces/components_ClusterNodeContainer._internal_.IGenerateTextureOptions.md) | Generate texture options. |

#### Returns

[`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

A texture of the graphics object.

#### Defined in

node_modules/@pixi/core/index.d.ts:476

▸ **generateTexture**(`displayObject`, `scaleMode?`, `resolution?`, `region?`): [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

Please use the options argument instead.

**`method`** PIXI.AbstractRenderer#generateTexture

**`deprecated`** Since 6.1.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `displayObject` | [`IRenderableObject`](../interfaces/components_ClusterNodeContainer._internal_.IRenderableObject.md) | The displayObject the object will be generated from. |
| `scaleMode?` | [`SCALE_MODES`](../enums/components_ClusterNodeContainer._internal_.SCALE_MODES.md) | The scale mode of the texture. |
| `resolution?` | `number` | The resolution / device pixel ratio of the texture being generated. |
| `region?` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) | The region of the displayObject, that shall be rendered,        if no region is specified, defaults to the local bounds of the displayObject. |

#### Returns

[`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

A texture of the graphics object.

#### Defined in

node_modules/@pixi/core/index.d.ts:489

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

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`AbstractRenderer`](components_ClusterNodeContainer._internal_.AbstractRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`AbstractRenderer`](components_ClusterNodeContainer._internal_.AbstractRenderer.md)

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[off](components_ClusterNodeContainer._internal_.EventEmitter-1.md#off)

#### Defined in

node_modules/eventemitter3/index.d.ts:44

___

### on

▸ **on**(`event`, `fn`, `context?`): [`AbstractRenderer`](components_ClusterNodeContainer._internal_.AbstractRenderer.md)

Add a listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`AbstractRenderer`](components_ClusterNodeContainer._internal_.AbstractRenderer.md)

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[on](components_ClusterNodeContainer._internal_.EventEmitter-1.md#on)

#### Defined in

node_modules/eventemitter3/index.d.ts:32

___

### once

▸ **once**(`event`, `fn`, `context?`): [`AbstractRenderer`](components_ClusterNodeContainer._internal_.AbstractRenderer.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |

#### Returns

[`AbstractRenderer`](components_ClusterNodeContainer._internal_.AbstractRenderer.md)

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[once](components_ClusterNodeContainer._internal_.EventEmitter-1.md#once)

#### Defined in

node_modules/eventemitter3/index.d.ts:38

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`AbstractRenderer`](components_ClusterNodeContainer._internal_.AbstractRenderer.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`AbstractRenderer`](components_ClusterNodeContainer._internal_.AbstractRenderer.md)

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[removeAllListeners](components_ClusterNodeContainer._internal_.EventEmitter-1.md#removealllisteners)

#### Defined in

node_modules/eventemitter3/index.d.ts:49

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`AbstractRenderer`](components_ClusterNodeContainer._internal_.AbstractRenderer.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | [`ListenerFn`](../interfaces/components_ClusterNodeContainer._internal_.EventEmitter.ListenerFn.md) |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`AbstractRenderer`](components_ClusterNodeContainer._internal_.AbstractRenderer.md)

#### Inherited from

[EventEmitter](components_ClusterNodeContainer._internal_.EventEmitter-1.md).[removeListener](components_ClusterNodeContainer._internal_.EventEmitter-1.md#removelistener)

#### Defined in

node_modules/eventemitter3/index.d.ts:43

___

### render

▸ `Abstract` **render**(`displayObject`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayObject` | [`IRenderableObject`](../interfaces/components_ClusterNodeContainer._internal_.IRenderableObject.md) |
| `options?` | [`IRendererRenderOptions`](../interfaces/components_ClusterNodeContainer._internal_.IRendererRenderOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:490

___

### resize

▸ **resize**(`desiredScreenWidth`, `desiredScreenHeight`): `void`

Resizes the screen and canvas as close as possible to the specified width and height.
Canvas dimensions are multiplied by resolution and rounded to the nearest integers.
The new canvas dimensions divided by the resolution become the new screen dimensions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `desiredScreenWidth` | `number` | The desired width of the screen. |
| `desiredScreenHeight` | `number` | The desired height of the screen. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:462
