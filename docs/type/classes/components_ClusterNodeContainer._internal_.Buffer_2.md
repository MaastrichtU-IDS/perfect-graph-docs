[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Buffer\_2

# Class: Buffer\_2

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Buffer_2

A wrapper for data so that it can be used and uploaded by WebGL

**`memberof`** PIXI

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Buffer_2.md#constructor)

### Properties

- [\_glBuffers](components_ClusterNodeContainer._internal_.Buffer_2.md#_glbuffers)
- [\_updateID](components_ClusterNodeContainer._internal_.Buffer_2.md#_updateid)
- [data](components_ClusterNodeContainer._internal_.Buffer_2.md#data)
- [disposeRunner](components_ClusterNodeContainer._internal_.Buffer_2.md#disposerunner)
- [id](components_ClusterNodeContainer._internal_.Buffer_2.md#id)
- [static](components_ClusterNodeContainer._internal_.Buffer_2.md#static)
- [type](components_ClusterNodeContainer._internal_.Buffer_2.md#type)

### Accessors

- [index](components_ClusterNodeContainer._internal_.Buffer_2.md#index)

### Methods

- [destroy](components_ClusterNodeContainer._internal_.Buffer_2.md#destroy)
- [dispose](components_ClusterNodeContainer._internal_.Buffer_2.md#dispose)
- [update](components_ClusterNodeContainer._internal_.Buffer_2.md#update)
- [from](components_ClusterNodeContainer._internal_.Buffer_2.md#from)

## Constructors

### constructor

• **new Buffer_2**(`data?`, `_static?`, `index?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data?` | [`IArrayBuffer`](../interfaces/components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IArrayBuffer.md) | the data to store in the buffer. |
| `_static?` | `boolean` | - |
| `index?` | `boolean` | - |

#### Defined in

node_modules/@pixi/core/index.d.ts:1347

## Properties

### \_glBuffers

• **\_glBuffers**: `Object`

#### Index signature

▪ [key: `number`]: [`GLBuffer`](components_ClusterNodeContainer._internal_.GLBuffer.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:1338

___

### \_updateID

• **\_updateID**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:1341

___

### data

• **data**: [`ITypedArray`](../interfaces/components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.ITypedArray.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:1327

___

### disposeRunner

• **disposeRunner**: [`Runner`](components_ClusterNodeContainer._internal_.Runner.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:1337

___

### id

• **id**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:1336

___

### static

• **static**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:1335

___

### type

• **type**: [`BUFFER_TYPE`](../enums/components_ClusterNodeContainer._internal_.BUFFER_TYPE.md)

The type of buffer this is, one of:
+ ELEMENT_ARRAY_BUFFER - used as an index buffer
+ ARRAY_BUFFER - used as an attribute buffer
+ UNIFORM_BUFFER - used as a uniform buffer (if available)

#### Defined in

node_modules/@pixi/core/index.d.ts:1334

## Accessors

### index

• `get` **index**(): `boolean`

Flags whether this is an index buffer.

Index buffers are of type `ELEMENT_ARRAY_BUFFER`. Note that setting this property to false will make
the buffer of type `ARRAY_BUFFER`.

For backwards compatibility.

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:1370

• `set` **index**(`value`): `void`

Flags whether this is an index buffer.

Index buffers are of type `ELEMENT_ARRAY_BUFFER`. Note that setting this property to false will make
the buffer of type `ARRAY_BUFFER`.

For backwards compatibility.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1369

## Methods

### destroy

▸ **destroy**(): `void`

Destroys the buffer

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1360

___

### dispose

▸ **dispose**(): `void`

disposes WebGL resources that are connected to this geometry

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1356

___

### update

▸ **update**(`data?`): `void`

flags this buffer as requiring an upload to the GPU

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `number`[] \| [`IArrayBuffer`](../interfaces/components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IArrayBuffer.md) |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1352

___

### from

▸ `Static` **from**(`data`): [`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md)

Helper function that creates a buffer based on an array or TypedArray

**`static`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `number`[] \| [`IArrayBuffer`](../interfaces/components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IArrayBuffer.md) | the TypedArray that the buffer will store. If this is a regular Array it will be converted to a Float32Array. |

#### Returns

[`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md)

A new Buffer based on the data provided.

#### Defined in

node_modules/@pixi/core/index.d.ts:1378
