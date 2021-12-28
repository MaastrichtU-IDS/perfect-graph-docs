[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / GeometrySystem

# Class: GeometrySystem

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).GeometrySystem

System plugin to the renderer to manage geometry.

**`memberof`** PIXI

## Implements

- [`ISystem`](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.GeometrySystem.md#constructor)

### Properties

- [CONTEXT\_UID](components_ClusterNodeContainer._internal_.GeometrySystem.md#context_uid)
- [\_activeGeometry](components_ClusterNodeContainer._internal_.GeometrySystem.md#_activegeometry)
- [\_activeVao](components_ClusterNodeContainer._internal_.GeometrySystem.md#_activevao)
- [\_boundBuffer](components_ClusterNodeContainer._internal_.GeometrySystem.md#_boundbuffer)
- [canUseUInt32ElementIndex](components_ClusterNodeContainer._internal_.GeometrySystem.md#canuseuint32elementindex)
- [gl](components_ClusterNodeContainer._internal_.GeometrySystem.md#gl)
- [hasInstance](components_ClusterNodeContainer._internal_.GeometrySystem.md#hasinstance)
- [hasVao](components_ClusterNodeContainer._internal_.GeometrySystem.md#hasvao)
- [managedBuffers](components_ClusterNodeContainer._internal_.GeometrySystem.md#managedbuffers)
- [managedGeometries](components_ClusterNodeContainer._internal_.GeometrySystem.md#managedgeometries)
- [renderer](components_ClusterNodeContainer._internal_.GeometrySystem.md#renderer)

### Methods

- [activateVao](components_ClusterNodeContainer._internal_.GeometrySystem.md#activatevao)
- [bind](components_ClusterNodeContainer._internal_.GeometrySystem.md#bind)
- [checkCompatibility](components_ClusterNodeContainer._internal_.GeometrySystem.md#checkcompatibility)
- [contextChange](components_ClusterNodeContainer._internal_.GeometrySystem.md#contextchange)
- [disposeAll](components_ClusterNodeContainer._internal_.GeometrySystem.md#disposeall)
- [disposeGeometry](components_ClusterNodeContainer._internal_.GeometrySystem.md#disposegeometry)
- [draw](components_ClusterNodeContainer._internal_.GeometrySystem.md#draw)
- [getSignature](components_ClusterNodeContainer._internal_.GeometrySystem.md#getsignature)
- [initGeometryVao](components_ClusterNodeContainer._internal_.GeometrySystem.md#initgeometryvao)
- [reset](components_ClusterNodeContainer._internal_.GeometrySystem.md#reset)
- [unbind](components_ClusterNodeContainer._internal_.GeometrySystem.md#unbind)
- [updateBuffers](components_ClusterNodeContainer._internal_.GeometrySystem.md#updatebuffers)

## Constructors

### constructor

• **new GeometrySystem**(`renderer`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) | The renderer this System works for. |

#### Defined in

node_modules/@pixi/core/index.d.ts:2492

## Properties

### CONTEXT\_UID

• `Protected` **CONTEXT\_UID**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:2477

___

### \_activeGeometry

• `Protected` **\_activeGeometry**: [`Geometry`](components_ClusterNodeContainer._internal_.Geometry.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2479

___

### \_activeVao

• `Protected` **\_activeVao**: [`WebGLVertexArrayObject`](../modules/components_ClusterNodeContainer._internal_.md#webglvertexarrayobject)

#### Defined in

node_modules/@pixi/core/index.d.ts:2480

___

### \_boundBuffer

• `Protected` **\_boundBuffer**: [`GLBuffer`](components_ClusterNodeContainer._internal_.GLBuffer.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2481

___

### canUseUInt32ElementIndex

• **canUseUInt32ElementIndex**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:2476

___

### gl

• `Protected` **gl**: [`IRenderingContext`](../interfaces/components_ClusterNodeContainer._internal_.IRenderingContext.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2478

___

### hasInstance

• **hasInstance**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:2475

___

### hasVao

• **hasVao**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:2474

___

### managedBuffers

• `Readonly` **managedBuffers**: `Object`

#### Index signature

▪ [key: `number`]: [`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2485

___

### managedGeometries

• `Readonly` **managedGeometries**: `Object`

#### Index signature

▪ [key: `number`]: [`Geometry`](components_ClusterNodeContainer._internal_.Geometry.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2482

___

### renderer

• `Private` **renderer**: `any`

#### Defined in

node_modules/@pixi/core/index.d.ts:2488

## Methods

### activateVao

▸ `Protected` **activateVao**(`geometry`, `program`): `void`

Activate vertex array object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometry` | [`Geometry`](components_ClusterNodeContainer._internal_.Geometry.md) | Geometry instance |
| `program` | [`Program`](components_ClusterNodeContainer._internal_.Program.md) | Shader program instance |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2558

___

### bind

▸ **bind**(`geometry?`, `shader?`): `void`

Binds geometry so that is can be drawn. Creating a Vao if required

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometry?` | [`Geometry`](components_ClusterNodeContainer._internal_.Geometry.md) | instance of geometry to bind |
| `shader?` | [`Shader`](components_ClusterNodeContainer._internal_.Shader.md) | - |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2503

___

### checkCompatibility

▸ `Protected` **checkCompatibility**(`geometry`, `program`): `void`

Check compatibility between a geometry and a program

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometry` | [`Geometry`](components_ClusterNodeContainer._internal_.Geometry.md) | Geometry instance |
| `program` | [`Program`](components_ClusterNodeContainer._internal_.Program.md) | Program instance |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2519

___

### contextChange

▸ `Protected` **contextChange**(): `void`

Sets up the renderer context and necessary buffers.

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2496

___

### disposeAll

▸ **disposeAll**(`contextLost?`): `void`

dispose all WebGL resources of all managed geometries

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextLost?` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2550

___

### disposeGeometry

▸ **disposeGeometry**(`geometry`, `contextLost?`): `void`

Disposes geometry

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometry` | [`Geometry`](components_ClusterNodeContainer._internal_.Geometry.md) | Geometry with buffers. Only VAO will be disposed |
| `contextLost?` | `boolean` | - |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2545

___

### draw

▸ **draw**(`type`, `size?`, `start?`, `instanceCount?`): [`GeometrySystem`](components_ClusterNodeContainer._internal_.GeometrySystem.md)

Draw the geometry

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`DRAW_MODES`](../enums/components_ClusterNodeContainer._internal_.DRAW_MODES.md) | the type primitive to render |
| `size?` | `number` | - |
| `start?` | `number` | - |
| `instanceCount?` | `number` | - |

#### Returns

[`GeometrySystem`](components_ClusterNodeContainer._internal_.GeometrySystem.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2567

___

### getSignature

▸ `Protected` **getSignature**(`geometry`, `program`): `string`

Takes a geometry and program and generates a unique signature for them.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometry` | [`Geometry`](components_ClusterNodeContainer._internal_.Geometry.md) | to get signature from |
| `program` | [`Program`](components_ClusterNodeContainer._internal_.Program.md) | to test geometry against |

#### Returns

`string`

Unique signature of the geometry and program

#### Defined in

node_modules/@pixi/core/index.d.ts:2528

___

### initGeometryVao

▸ `Protected` **initGeometryVao**(`geometry`, `shader`, `incRefCount?`): [`WebGLVertexArrayObject`](../modules/components_ClusterNodeContainer._internal_.md#webglvertexarrayobject)

Creates or gets Vao with the same structure as the geometry and stores it on the geometry.
If vao is created, it is bound automatically. We use a shader to infer what and how to set up the
attribute locations.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometry` | [`Geometry`](components_ClusterNodeContainer._internal_.Geometry.md) | Instance of geometry to to generate Vao for |
| `shader` | [`Shader`](components_ClusterNodeContainer._internal_.Shader.md) | Instance of the shader |
| `incRefCount?` | `boolean` | - |

#### Returns

[`WebGLVertexArrayObject`](../modules/components_ClusterNodeContainer._internal_.md#webglvertexarrayobject)

#### Defined in

node_modules/@pixi/core/index.d.ts:2539

___

### reset

▸ **reset**(): `void`

Reset and unbind any active VAO and geometry

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2507

___

### unbind

▸ `Protected` **unbind**(): `void`

Unbind/reset everything

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2572

___

### updateBuffers

▸ `Protected` **updateBuffers**(): `void`

Update buffers

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2512
