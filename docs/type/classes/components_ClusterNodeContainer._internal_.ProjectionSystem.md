[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / ProjectionSystem

# Class: ProjectionSystem

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).ProjectionSystem

System plugin to the renderer to manage the projection matrix.

The `projectionMatrix` is a global uniform provided to all shaders. It is used to transform points in world space to
normalized device coordinates.

**`memberof`** PIXI

## Implements

- [`ISystem`](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.ProjectionSystem.md#constructor)

### Properties

- [defaultFrame](components_ClusterNodeContainer._internal_.ProjectionSystem.md#defaultframe)
- [destinationFrame](components_ClusterNodeContainer._internal_.ProjectionSystem.md#destinationframe)
- [projectionMatrix](components_ClusterNodeContainer._internal_.ProjectionSystem.md#projectionmatrix)
- [renderer](components_ClusterNodeContainer._internal_.ProjectionSystem.md#renderer)
- [sourceFrame](components_ClusterNodeContainer._internal_.ProjectionSystem.md#sourceframe)
- [transform](components_ClusterNodeContainer._internal_.ProjectionSystem.md#transform)

### Methods

- [calculateProjection](components_ClusterNodeContainer._internal_.ProjectionSystem.md#calculateprojection)
- [destroy](components_ClusterNodeContainer._internal_.ProjectionSystem.md#destroy)
- [setTransform](components_ClusterNodeContainer._internal_.ProjectionSystem.md#settransform)
- [update](components_ClusterNodeContainer._internal_.ProjectionSystem.md#update)

## Constructors

### constructor

• **new ProjectionSystem**(`renderer`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) | The renderer this System works for. |

#### Defined in

node_modules/@pixi/core/index.d.ts:3410

## Properties

### defaultFrame

• **defaultFrame**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

Default destination frame

This is not used internally. It is not advised to use this feature specifically unless you know what
you're doing. The `update` method will default to this frame if you do not pass the destination frame.

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:3386

___

### destinationFrame

• **destinationFrame**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

The destination frame used to calculate the current projection matrix.

The destination frame is the rectangle in the render-target into which contents are rendered. If rendering
to the screen, the origin is on the top-left. If rendering to a framebuffer, the origin is on the
bottom-left. This "flipping" phenomenon is because of WebGL convention for (shader) texture coordinates, where
the bottom-left corner is (0,0). It allows display-objects to map their (0,0) position in local-space (top-left)
to (0,0) in texture space (bottom-left). In other words, a sprite's top-left corner actually renders the
texture's bottom-left corner. You will also notice this when using a tool like SpectorJS to view your textures
at runtime.

The destination frame's dimensions (width,height) should be equal to the source frame. This is because,
otherwise, the contents will be scaled to fill the destination frame. Similarly, the destination frame's (x,y)
coordinates are (0,0) unless you know what you're doing.

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:3369

___

### projectionMatrix

• **projectionMatrix**: [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

Projection matrix

This matrix can be used to transform points from world space to normalized device coordinates, and is calculated
from the sourceFrame → destinationFrame mapping provided.

The renderer's `globalUniforms` keeps a reference to this, and so it is available for all shaders to use as a
uniform.

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:3398

___

### renderer

• `Private` **renderer**: `any`

#### Defined in

node_modules/@pixi/core/index.d.ts:3408

___

### sourceFrame

• **sourceFrame**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

The source frame used to calculate the current projection matrix.

The source frame is the rectangle in world space containing the contents to be rendered.

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:3377

___

### transform

• **transform**: [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

A transform to be appended to the projection matrix.

This can be used to transform points in world-space one last time before they are outputted by the shader. You can
use to rotate the whole scene, for example. Remember to clear it once you've rendered everything.

**`member`** {PIXI.Matrix}

#### Defined in

node_modules/@pixi/core/index.d.ts:3407

## Methods

### calculateProjection

▸ **calculateProjection**(`_destinationFrame`, `sourceFrame`, `_resolution`, `root`): `void`

Calculates the `projectionMatrix` to map points inside `sourceFrame` to inside `destinationFrame`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_destinationFrame` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) | - |
| `sourceFrame` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) | The source frame in world space. |
| `_resolution` | `number` | - |
| `root` | `boolean` | Whether rendering into the screen. Otherwise, if rendering to a framebuffer, the projection  is y-flipped. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:3438

___

### destroy

▸ **destroy**(): `void`

Generic destroy methods to be overridden by the subclass

#### Returns

`void`

#### Implementation of

[ISystem](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md).[destroy](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md#destroy)

#### Defined in

node_modules/@pixi/core/index.d.ts:3445

___

### setTransform

▸ **setTransform**(`_matrix`): `void`

Sets the transform of the active render target to the given matrix.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_matrix` | [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md) |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:3444

___

### update

▸ **update**(`destinationFrame`, `sourceFrame`, `resolution`, `root`): `void`

Updates the projection-matrix based on the sourceFrame → destinationFrame mapping provided.

NOTE: It is expected you call `renderer.framebuffer.setViewport(destinationFrame)` after this. This is because
the framebuffer viewport converts shader vertex output in normalized device coordinates to window coordinates.

NOTE-2: {@link RenderTextureSystem#bind} updates the projection-matrix when you bind a render-texture. It is expected
that you dirty the current bindings when calling this manually.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destinationFrame` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) | The rectangle in the render-target to render the contents into. If rendering to the canvas,  the origin is on the top-left; if rendering to a render-texture, the origin is on the bottom-left. |
| `sourceFrame` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) | The rectangle in world space that contains the contents being rendered. |
| `resolution` | `number` | The resolution of the render-target, which is the ratio of  world-space (or CSS) pixels to physical pixels. |
| `root` | `boolean` | Whether the render-target is the screen. This is required because rendering to textures  is y-flipped (i.e. upside down relative to the screen). |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:3428
