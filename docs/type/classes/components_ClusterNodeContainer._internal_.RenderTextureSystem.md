[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / RenderTextureSystem

# Class: RenderTextureSystem

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).RenderTextureSystem

System plugin to the renderer to manage render textures.

Should be added after FramebufferSystem

### Frames

The `RenderTextureSystem` holds a sourceFrame → destinationFrame projection. The following table explains the different
coordinate spaces used:

| Frame                  | Description                                                      | Coordinate System                                       |
| ---------------------- | ---------------------------------------------------------------- | ------------------------------------------------------- |
| sourceFrame            | The rectangle inside of which display-objects are being rendered | **World Space**: The origin on the top-left             |
| destinationFrame       | The rectangle in the render-target (canvas or texture) into which contents should be rendered | If rendering to the canvas, this is in screen space and the origin is on the top-left. If rendering to a render-texture, this is in its base-texture's space with the origin on the bottom-left.  |
| viewportFrame          | The framebuffer viewport corresponding to the destination-frame  | **Window Coordinates**: The origin is always on the bottom-left. |

**`memberof`** PIXI

## Implements

- [`ISystem`](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.RenderTextureSystem.md#constructor)

### Properties

- [clearColor](components_ClusterNodeContainer._internal_.RenderTextureSystem.md#clearcolor)
- [current](components_ClusterNodeContainer._internal_.RenderTextureSystem.md#current)
- [defaultMaskStack](components_ClusterNodeContainer._internal_.RenderTextureSystem.md#defaultmaskstack)
- [destinationFrame](components_ClusterNodeContainer._internal_.RenderTextureSystem.md#destinationframe)
- [renderer](components_ClusterNodeContainer._internal_.RenderTextureSystem.md#renderer)
- [sourceFrame](components_ClusterNodeContainer._internal_.RenderTextureSystem.md#sourceframe)
- [viewportFrame](components_ClusterNodeContainer._internal_.RenderTextureSystem.md#viewportframe)

### Methods

- [bind](components_ClusterNodeContainer._internal_.RenderTextureSystem.md#bind)
- [clear](components_ClusterNodeContainer._internal_.RenderTextureSystem.md#clear)
- [destroy](components_ClusterNodeContainer._internal_.RenderTextureSystem.md#destroy)
- [reset](components_ClusterNodeContainer._internal_.RenderTextureSystem.md#reset)
- [resize](components_ClusterNodeContainer._internal_.RenderTextureSystem.md#resize)

## Constructors

### constructor

• **new RenderTextureSystem**(`renderer`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) | The renderer this System works for. |

#### Defined in

node_modules/@pixi/core/index.d.ts:4025

## Properties

### clearColor

• **clearColor**: `number`[]

The clear background color as RGBA.

#### Defined in

node_modules/@pixi/core/index.d.ts:3990

___

### current

• **current**: ``null`` \| [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md)

Render texture currently bound. {@code null} if rendering to the canvas.

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:4002

___

### defaultMaskStack

• **defaultMaskStack**: [`MaskData`](components_ClusterNodeContainer._internal_.MaskData.md)[]

List of masks for the {@link PIXI.StencilSystem}.

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:3996

___

### destinationFrame

• `Readonly` **destinationFrame**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

The destination frame for the render-target's projection mapping.

See {@link PIXI.Projection#destinationFrame} for more details.

#### Defined in

node_modules/@pixi/core/index.d.ts:4014

___

### renderer

• `Private` **renderer**: `any`

#### Defined in

node_modules/@pixi/core/index.d.ts:4021

___

### sourceFrame

• `Readonly` **sourceFrame**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

The source frame for the render-target's projection mapping.

See {@link PIXI.ProjectionSystem#sourceFrame} for more details

#### Defined in

node_modules/@pixi/core/index.d.ts:4008

___

### viewportFrame

• `Readonly` **viewportFrame**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

The viewport frame for the render-target's viewport binding. This is equal to the destination-frame
for render-textures, while it is y-flipped when rendering to the screen (i.e. its origin is always on
the bottom-left).

#### Defined in

node_modules/@pixi/core/index.d.ts:4020

## Methods

### bind

▸ **bind**(`renderTexture?`, `sourceFrame?`, `destinationFrame?`): `void`

Bind the current render texture.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderTexture?` | [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md) | RenderTexture to bind, by default its `null` - the screen. |
| `sourceFrame?` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) | Part of world that is mapped to the renderTexture. |
| `destinationFrame?` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) | Part of renderTexture, by default it has the same size as sourceFrame. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4033

___

### clear

▸ **clear**(`clearColor?`, `mask?`): `void`

Erases the render texture and fills the drawing area with a colour.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clearColor?` | `number`[] | The color as rgba, default to use the renderer backgroundColor |
| `mask?` | [`BUFFER_BITS`](../enums/components_ClusterNodeContainer._internal_.BUFFER_BITS.md) | - |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4041

___

### destroy

▸ **destroy**(): `void`

Generic destroy methods to be overridden by the subclass

#### Returns

`void`

#### Implementation of

[ISystem](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md).[destroy](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md#destroy)

#### Defined in

node_modules/@pixi/core/index.d.ts:4045

___

### reset

▸ **reset**(): `void`

Resets render-texture state.

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4044

___

### resize

▸ **resize**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4042