[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / ContextSystem

# Class: ContextSystem

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).ContextSystem

System plugin to the renderer to manage the context.

**`memberof`** PIXI

## Implements

- [`ISystem`](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.ContextSystem.md#constructor)

### Properties

- [CONTEXT\_UID](components_ClusterNodeContainer._internal_.ContextSystem.md#context_uid)
- [extensions](components_ClusterNodeContainer._internal_.ContextSystem.md#extensions)
- [gl](components_ClusterNodeContainer._internal_.ContextSystem.md#gl)
- [renderer](components_ClusterNodeContainer._internal_.ContextSystem.md#renderer)
- [supports](components_ClusterNodeContainer._internal_.ContextSystem.md#supports)
- [webGLVersion](components_ClusterNodeContainer._internal_.ContextSystem.md#webglversion)

### Accessors

- [isLost](components_ClusterNodeContainer._internal_.ContextSystem.md#islost)

### Methods

- [contextChange](components_ClusterNodeContainer._internal_.ContextSystem.md#contextchange)
- [createContext](components_ClusterNodeContainer._internal_.ContextSystem.md#createcontext)
- [destroy](components_ClusterNodeContainer._internal_.ContextSystem.md#destroy)
- [getExtensions](components_ClusterNodeContainer._internal_.ContextSystem.md#getextensions)
- [handleContextLost](components_ClusterNodeContainer._internal_.ContextSystem.md#handlecontextlost)
- [handleContextRestored](components_ClusterNodeContainer._internal_.ContextSystem.md#handlecontextrestored)
- [initFromContext](components_ClusterNodeContainer._internal_.ContextSystem.md#initfromcontext)
- [initFromOptions](components_ClusterNodeContainer._internal_.ContextSystem.md#initfromoptions)
- [postrender](components_ClusterNodeContainer._internal_.ContextSystem.md#postrender)
- [validateContext](components_ClusterNodeContainer._internal_.ContextSystem.md#validatecontext)

## Constructors

### constructor

• **new ContextSystem**(`renderer`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) | The renderer this System works for. |

#### Defined in

node_modules/@pixi/core/index.d.ts:1577

## Properties

### CONTEXT\_UID

• `Protected` **CONTEXT\_UID**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:1560

___

### extensions

• **extensions**: [`WebGLExtensions`](../interfaces/components_ClusterNodeContainer._internal_.WebGLExtensions.md)

Extensions available.

**`readonly`**

**`property`** {WEBGL_draw_buffers} drawBuffers - WebGL v1 extension

**`property`** {WEBGL_depth_texture} depthTexture - WebGL v1 extension

**`property`** {OES_texture_float} floatTexture - WebGL v1 extension

**`property`** {WEBGL_lose_context} loseContext - WebGL v1 extension

**`property`** {OES_vertex_array_object} vertexArrayObject - WebGL v1 extension

**`property`** {EXT_texture_filter_anisotropic} anisotropicFiltering - WebGL v1 and v2 extension

#### Defined in

node_modules/@pixi/core/index.d.ts:1574

___

### gl

• `Protected` **gl**: [`IRenderingContext`](../interfaces/components_ClusterNodeContainer._internal_.IRenderingContext.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:1561

___

### renderer

• `Private` **renderer**: `any`

#### Defined in

node_modules/@pixi/core/index.d.ts:1575

___

### supports

• `Readonly` **supports**: [`ISupportDict`](../interfaces/components_ClusterNodeContainer._internal_.ISupportDict.md)

Features supported by current context.

**`readonly`**

**`property`** {boolean} uint32Indices - Support for 32-bit indices buffer.

#### Defined in

node_modules/@pixi/core/index.d.ts:1559

___

### webGLVersion

• **webGLVersion**: `number`

Either 1 or 2 to reflect the WebGL version being used.

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:1551

## Accessors

### isLost

• `get` **isLost**(): `boolean`

`true` if the context is lost

**`readonly`**

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:1583

## Methods

### contextChange

▸ `Protected` **contextChange**(`gl`): `void`

Handles the context change event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gl` | [`IRenderingContext`](../interfaces/components_ClusterNodeContainer._internal_.IRenderingContext.md) | New WebGL context. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1589

___

### createContext

▸ **createContext**(`canvas`, `options`): [`IRenderingContext`](../interfaces/components_ClusterNodeContainer._internal_.IRenderingContext.md)

Helper class to create a WebGL Context

**`see`** https://developer.mozilla.org/en/docs/Web/API/HTMLCanvasElement/getContext

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvas` | `HTMLCanvasElement` | the canvas element that we will get the context from |
| `options` | [`WebGLContextAttributes`](../interfaces/components_ClusterNodeContainer._internal_.WebGLContextAttributes.md) | An options object that gets passed in to the canvas element containing the    context attributes |

#### Returns

[`IRenderingContext`](../interfaces/components_ClusterNodeContainer._internal_.IRenderingContext.md)

the WebGL context

#### Defined in

node_modules/@pixi/core/index.d.ts:1614

___

### destroy

▸ **destroy**(): `void`

Generic destroy methods to be overridden by the subclass

#### Returns

`void`

#### Implementation of

[ISystem](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md).[destroy](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md#destroy)

#### Defined in

node_modules/@pixi/core/index.d.ts:1625

___

### getExtensions

▸ `Protected` **getExtensions**(): `void`

Auto-populate the {@link PIXI.ContextSystem.extensions extensions}.

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1616

___

### handleContextLost

▸ `Protected` **handleContextLost**(`event`): `void`

Handles a lost webgl context

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | [`WebGLContextEvent`](../modules/components_ClusterNodeContainer._internal_.md#webglcontextevent) | The context lost event. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1622

___

### handleContextRestored

▸ `Protected` **handleContextRestored**(): `void`

Handles a restored webgl context.

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1624

___

### initFromContext

▸ `Protected` **initFromContext**(`gl`): `void`

Initializes the context.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gl` | [`IRenderingContext`](../interfaces/components_ClusterNodeContainer._internal_.IRenderingContext.md) | WebGL context |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1596

___

### initFromOptions

▸ `Protected` **initFromOptions**(`options`): `void`

Initialize from context options

**`see`** https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`WebGLContextAttributes`](../interfaces/components_ClusterNodeContainer._internal_.WebGLContextAttributes.md) | context attributes |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1604

___

### postrender

▸ `Protected` **postrender**(): `void`

Handle the post-render runner event.

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1627

___

### validateContext

▸ `Protected` **validateContext**(`gl`): `void`

Validate context.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gl` | [`IRenderingContext`](../interfaces/components_ClusterNodeContainer._internal_.IRenderingContext.md) | Render context. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1633
