[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / BufferSystem

# Class: BufferSystem

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).BufferSystem

System plugin to the renderer to manage buffers.

WebGL uses Buffers as a way to store objects to the GPU.
This system makes working with them a lot easier.

Buffers are used in three main places in WebGL
- geometry information
- Uniform information (via uniform buffer objects - a WebGL 2 only feature)
- Transform feedback information. (WebGL 2 only feature)

This system will handle the binding of buffers to the GPU as well as uploading
them. With this system, you never need to work directly with GPU buffers, but instead work with
the PIXI.Buffer class.

**`memberof`** PIXI

## Implements

- [`ISystem`](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.BufferSystem.md#constructor)

### Properties

- [CONTEXT\_UID](components_ClusterNodeContainer._internal_.BufferSystem.md#context_uid)
- [boundBufferBases](components_ClusterNodeContainer._internal_.BufferSystem.md#boundbufferbases)
- [gl](components_ClusterNodeContainer._internal_.BufferSystem.md#gl)
- [managedBuffers](components_ClusterNodeContainer._internal_.BufferSystem.md#managedbuffers)
- [renderer](components_ClusterNodeContainer._internal_.BufferSystem.md#renderer)

### Methods

- [bind](components_ClusterNodeContainer._internal_.BufferSystem.md#bind)
- [bindBufferBase](components_ClusterNodeContainer._internal_.BufferSystem.md#bindbufferbase)
- [bindBufferRange](components_ClusterNodeContainer._internal_.BufferSystem.md#bindbufferrange)
- [contextChange](components_ClusterNodeContainer._internal_.BufferSystem.md#contextchange)
- [createGLBuffer](components_ClusterNodeContainer._internal_.BufferSystem.md#createglbuffer)
- [dispose](components_ClusterNodeContainer._internal_.BufferSystem.md#dispose)
- [disposeAll](components_ClusterNodeContainer._internal_.BufferSystem.md#disposeall)
- [update](components_ClusterNodeContainer._internal_.BufferSystem.md#update)

## Constructors

### constructor

• **new BufferSystem**(`renderer`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) | The renderer this System works for. |

#### Defined in

node_modules/@pixi/core/index.d.ts:1457

## Properties

### CONTEXT\_UID

• **CONTEXT\_UID**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:1443

___

### boundBufferBases

• `Readonly` **boundBufferBases**: `Object`

Cache keeping track of the base bound buffer bases

#### Index signature

▪ [key: `number`]: [`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:1450

___

### gl

• **gl**: [`IRenderingContext`](../interfaces/components_ClusterNodeContainer._internal_.IRenderingContext.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:1444

___

### managedBuffers

• `Readonly` **managedBuffers**: `Object`

Cache for all buffers by id, used in case renderer gets destroyed or for profiling

#### Index signature

▪ [key: `number`]: [`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:1446

___

### renderer

• `Private` **renderer**: `any`

#### Defined in

node_modules/@pixi/core/index.d.ts:1453

## Methods

### bind

▸ **bind**(`buffer`): `void`

This binds specified buffer. On first run, it will create the webGL buffers for the context too

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | [`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md) | the buffer to bind to the renderer |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1471

___

### bindBufferBase

▸ **bindBufferBase**(`buffer`, `index`): `void`

Binds an uniform buffer to at the given index.

A cache is used so a buffer will not be bound again if already bound.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | [`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md) | the buffer to bind |
| `index` | `number` | the base index to bind it to. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1480

___

### bindBufferRange

▸ **bindBufferRange**(`buffer`, `index?`, `offset?`): `void`

Binds a buffer whilst also binding its range.
This will make the buffer start from the offset supplied rather than 0 when it is read.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | [`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md) | the buffer to bind |
| `index?` | `number` | the base index to bind at, defaults to 0 |
| `offset?` | `number` | the offset to bind at (this is blocks of 256). 0 = 0, 1 = 256, 2 = 512 etc |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1489

___

### contextChange

▸ `Protected` **contextChange**(): `void`

Sets up the renderer context and necessary buffers.

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1465

___

### createGLBuffer

▸ `Protected` **createGLBuffer**(`buffer`): [`GLBuffer`](components_ClusterNodeContainer._internal_.GLBuffer.md)

creates and attaches a GLBuffer object tied to the current context.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md) |

#### Returns

[`GLBuffer`](components_ClusterNodeContainer._internal_.GLBuffer.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:1511

___

### dispose

▸ **dispose**(`buffer`, `contextLost?`): `void`

Disposes buffer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | [`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md) | buffer with data |
| `contextLost?` | `boolean` | - |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1501

___

### disposeAll

▸ **disposeAll**(`contextLost?`): `void`

dispose all WebGL resources of all managed buffers

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextLost?` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1506

___

### update

▸ **update**(`buffer`): `void`

Will ensure sure the the data in the buffer is uploaded to the GPU.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | [`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md) | the buffer to update |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1495
