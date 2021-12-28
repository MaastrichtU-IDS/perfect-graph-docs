[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / QuadUv

# Class: QuadUv

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).QuadUv

Helper class to create a quad with uvs like in v4

**`memberof`** PIXI

## Hierarchy

- [`Geometry`](components_ClusterNodeContainer._internal_.Geometry.md)

  ↳ **`QuadUv`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.QuadUv.md#constructor)

### Properties

- [attributes](components_ClusterNodeContainer._internal_.QuadUv.md#attributes)
- [buffers](components_ClusterNodeContainer._internal_.QuadUv.md#buffers)
- [disposeRunner](components_ClusterNodeContainer._internal_.QuadUv.md#disposerunner)
- [glVertexArrayObjects](components_ClusterNodeContainer._internal_.QuadUv.md#glvertexarrayobjects)
- [id](components_ClusterNodeContainer._internal_.QuadUv.md#id)
- [indexBuffer](components_ClusterNodeContainer._internal_.QuadUv.md#indexbuffer)
- [instanceCount](components_ClusterNodeContainer._internal_.QuadUv.md#instancecount)
- [instanced](components_ClusterNodeContainer._internal_.QuadUv.md#instanced)
- [refCount](components_ClusterNodeContainer._internal_.QuadUv.md#refcount)
- [uvBuffer](components_ClusterNodeContainer._internal_.QuadUv.md#uvbuffer)
- [uvs](components_ClusterNodeContainer._internal_.QuadUv.md#uvs)
- [vertexBuffer](components_ClusterNodeContainer._internal_.QuadUv.md#vertexbuffer)
- [vertices](components_ClusterNodeContainer._internal_.QuadUv.md#vertices)

### Methods

- [addAttribute](components_ClusterNodeContainer._internal_.QuadUv.md#addattribute)
- [addIndex](components_ClusterNodeContainer._internal_.QuadUv.md#addindex)
- [clone](components_ClusterNodeContainer._internal_.QuadUv.md#clone)
- [destroy](components_ClusterNodeContainer._internal_.QuadUv.md#destroy)
- [dispose](components_ClusterNodeContainer._internal_.QuadUv.md#dispose)
- [getAttribute](components_ClusterNodeContainer._internal_.QuadUv.md#getattribute)
- [getBuffer](components_ClusterNodeContainer._internal_.QuadUv.md#getbuffer)
- [getIndex](components_ClusterNodeContainer._internal_.QuadUv.md#getindex)
- [getSize](components_ClusterNodeContainer._internal_.QuadUv.md#getsize)
- [interleave](components_ClusterNodeContainer._internal_.QuadUv.md#interleave)
- [invalidate](components_ClusterNodeContainer._internal_.QuadUv.md#invalidate)
- [map](components_ClusterNodeContainer._internal_.QuadUv.md#map)
- [merge](components_ClusterNodeContainer._internal_.QuadUv.md#merge)

## Constructors

### constructor

• **new QuadUv**()

#### Overrides

[Geometry](components_ClusterNodeContainer._internal_.Geometry.md).[constructor](components_ClusterNodeContainer._internal_.Geometry.md#constructor)

#### Defined in

node_modules/@pixi/core/index.d.ts:3470

## Properties

### attributes

• **attributes**: `Object`

#### Index signature

▪ [key: `string`]: [`Attribute`](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.Attribute.md)

#### Inherited from

[Geometry](components_ClusterNodeContainer._internal_.Geometry.md).[attributes](components_ClusterNodeContainer._internal_.Geometry.md#attributes)

#### Defined in

node_modules/@pixi/core/index.d.ts:2368

___

### buffers

• **buffers**: [`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md)[]

#### Inherited from

[Geometry](components_ClusterNodeContainer._internal_.Geometry.md).[buffers](components_ClusterNodeContainer._internal_.Geometry.md#buffers)

#### Defined in

node_modules/@pixi/core/index.d.ts:2366

___

### disposeRunner

• **disposeRunner**: [`Runner`](components_ClusterNodeContainer._internal_.Runner.md)

#### Inherited from

[Geometry](components_ClusterNodeContainer._internal_.Geometry.md).[disposeRunner](components_ClusterNodeContainer._internal_.Geometry.md#disposerunner)

#### Defined in

node_modules/@pixi/core/index.d.ts:2379

___

### glVertexArrayObjects

• **glVertexArrayObjects**: `Object`

#### Index signature

▪ [key: `number`]: { [key: string]: [`WebGLVertexArrayObject`](../modules/components_ClusterNodeContainer._internal_.md#webglvertexarrayobject);  }

#### Inherited from

[Geometry](components_ClusterNodeContainer._internal_.Geometry.md).[glVertexArrayObjects](components_ClusterNodeContainer._internal_.Geometry.md#glvertexarrayobjects)

#### Defined in

node_modules/@pixi/core/index.d.ts:2374

___

### id

• **id**: `number`

#### Inherited from

[Geometry](components_ClusterNodeContainer._internal_.Geometry.md).[id](components_ClusterNodeContainer._internal_.Geometry.md#id)

#### Defined in

node_modules/@pixi/core/index.d.ts:2371

___

### indexBuffer

• **indexBuffer**: [`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md)

#### Inherited from

[Geometry](components_ClusterNodeContainer._internal_.Geometry.md).[indexBuffer](components_ClusterNodeContainer._internal_.Geometry.md#indexbuffer)

#### Defined in

node_modules/@pixi/core/index.d.ts:2367

___

### instanceCount

• **instanceCount**: `number`

#### Inherited from

[Geometry](components_ClusterNodeContainer._internal_.Geometry.md).[instanceCount](components_ClusterNodeContainer._internal_.Geometry.md#instancecount)

#### Defined in

node_modules/@pixi/core/index.d.ts:2373

___

### instanced

• **instanced**: `boolean`

#### Inherited from

[Geometry](components_ClusterNodeContainer._internal_.Geometry.md).[instanced](components_ClusterNodeContainer._internal_.Geometry.md#instanced)

#### Defined in

node_modules/@pixi/core/index.d.ts:2372

___

### refCount

• **refCount**: `number`

#### Inherited from

[Geometry](components_ClusterNodeContainer._internal_.Geometry.md).[refCount](components_ClusterNodeContainer._internal_.Geometry.md#refcount)

#### Defined in

node_modules/@pixi/core/index.d.ts:2380

___

### uvBuffer

• **uvBuffer**: [`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:3467

___

### uvs

• **uvs**: `Float32Array`

#### Defined in

node_modules/@pixi/core/index.d.ts:3469

___

### vertexBuffer

• **vertexBuffer**: [`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:3466

___

### vertices

• **vertices**: `Float32Array`

#### Defined in

node_modules/@pixi/core/index.d.ts:3468

## Methods

### addAttribute

▸ **addAttribute**(`id`, `buffer`, `size?`, `normalized?`, `type?`, `stride?`, `start?`, `instance?`): [`QuadUv`](components_ClusterNodeContainer._internal_.QuadUv.md)

Adds an attribute to the geometry
Note: `stride` and `start` should be `undefined` if you dont know them, not 0!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | the name of the attribute (matching up to a shader) |
| `buffer` | `number`[] \| `Float32Array` \| `Uint32Array` \| [`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md) | the buffer that holds the data of the attribute . You can also provide an Array and a buffer will be created from it. |
| `size?` | `number` | - |
| `normalized?` | `boolean` | - |
| `type?` | [`TYPES`](../enums/components_ClusterNodeContainer._internal_.TYPES.md) | - |
| `stride?` | `number` | - |
| `start?` | `number` | - |
| `instance?` | `boolean` | - |

#### Returns

[`QuadUv`](components_ClusterNodeContainer._internal_.QuadUv.md)

returns self, useful for chaining.

#### Inherited from

[Geometry](components_ClusterNodeContainer._internal_.Geometry.md).[addAttribute](components_ClusterNodeContainer._internal_.Geometry.md#addattribute)

#### Defined in

node_modules/@pixi/core/index.d.ts:2404

___

### addIndex

▸ **addIndex**(`buffer?`): [`Geometry`](components_ClusterNodeContainer._internal_.Geometry.md)

Adds an index buffer to the geometry
The index buffer contains integers, three for each triangle in the geometry, which reference the various attribute buffers (position, colour, UV coordinates, other UV coordinates, normal, …). There is only ONE index buffer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer?` | `number`[] \| [`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md) \| [`IArrayBuffer`](../interfaces/components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IArrayBuffer.md) |

#### Returns

[`Geometry`](components_ClusterNodeContainer._internal_.Geometry.md)

returns self, useful for chaining.

#### Inherited from

[Geometry](components_ClusterNodeContainer._internal_.Geometry.md).[addIndex](components_ClusterNodeContainer._internal_.Geometry.md#addindex)

#### Defined in

node_modules/@pixi/core/index.d.ts:2427

___

### clone

▸ **clone**(): [`Geometry`](components_ClusterNodeContainer._internal_.Geometry.md)

returns a clone of the geometry

#### Returns

[`Geometry`](components_ClusterNodeContainer._internal_.Geometry.md)

a new clone of this geometry

#### Inherited from

[Geometry](components_ClusterNodeContainer._internal_.Geometry.md).[clone](components_ClusterNodeContainer._internal_.Geometry.md#clone)

#### Defined in

node_modules/@pixi/core/index.d.ts:2455

___

### destroy

▸ **destroy**(): `void`

Destroys the geometry.

#### Returns

`void`

#### Inherited from

[Geometry](components_ClusterNodeContainer._internal_.Geometry.md).[destroy](components_ClusterNodeContainer._internal_.Geometry.md#destroy)

#### Defined in

node_modules/@pixi/core/index.d.ts:2449

___

### dispose

▸ **dispose**(): `void`

disposes WebGL resources that are connected to this geometry

#### Returns

`void`

#### Inherited from

[Geometry](components_ClusterNodeContainer._internal_.Geometry.md).[dispose](components_ClusterNodeContainer._internal_.Geometry.md#dispose)

#### Defined in

node_modules/@pixi/core/index.d.ts:2445

___

### getAttribute

▸ **getAttribute**(`id`): [`Attribute`](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.Attribute.md)

returns the requested attribute

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | the name of the attribute required |

#### Returns

[`Attribute`](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.Attribute.md)

the attribute requested.

#### Inherited from

[Geometry](components_ClusterNodeContainer._internal_.Geometry.md).[getAttribute](components_ClusterNodeContainer._internal_.Geometry.md#getattribute)

#### Defined in

node_modules/@pixi/core/index.d.ts:2411

___

### getBuffer

▸ **getBuffer**(`id`): [`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md)

returns the requested buffer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | the name of the buffer required |

#### Returns

[`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md)

the buffer requested.

#### Inherited from

[Geometry](components_ClusterNodeContainer._internal_.Geometry.md).[getBuffer](components_ClusterNodeContainer._internal_.Geometry.md#getbuffer)

#### Defined in

node_modules/@pixi/core/index.d.ts:2418

___

### getIndex

▸ **getIndex**(): [`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md)

returns the index buffer

#### Returns

[`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md)

the index buffer.

#### Inherited from

[Geometry](components_ClusterNodeContainer._internal_.Geometry.md).[getIndex](components_ClusterNodeContainer._internal_.Geometry.md#getindex)

#### Defined in

node_modules/@pixi/core/index.d.ts:2433

___

### getSize

▸ **getSize**(): `number`

#### Returns

`number`

#### Inherited from

[Geometry](components_ClusterNodeContainer._internal_.Geometry.md).[getSize](components_ClusterNodeContainer._internal_.Geometry.md#getsize)

#### Defined in

node_modules/@pixi/core/index.d.ts:2441

___

### interleave

▸ **interleave**(): [`Geometry`](components_ClusterNodeContainer._internal_.Geometry.md)

this function modifies the structure so that all current attributes become interleaved into a single buffer
This can be useful if your model remains static as it offers a little performance boost

#### Returns

[`Geometry`](components_ClusterNodeContainer._internal_.Geometry.md)

returns self, useful for chaining.

#### Inherited from

[Geometry](components_ClusterNodeContainer._internal_.Geometry.md).[interleave](components_ClusterNodeContainer._internal_.Geometry.md#interleave)

#### Defined in

node_modules/@pixi/core/index.d.ts:2440

___

### invalidate

▸ **invalidate**(): [`QuadUv`](components_ClusterNodeContainer._internal_.QuadUv.md)

legacy upload method, just marks buffers dirty

#### Returns

[`QuadUv`](components_ClusterNodeContainer._internal_.QuadUv.md)

Returns itself.

#### Defined in

node_modules/@pixi/core/index.d.ts:3483

___

### map

▸ **map**(`targetTextureFrame`, `destinationFrame`): [`QuadUv`](components_ClusterNodeContainer._internal_.QuadUv.md)

Maps two Rectangle to the quad.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetTextureFrame` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) | the first rectangle |
| `destinationFrame` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) | the second rectangle |

#### Returns

[`QuadUv`](components_ClusterNodeContainer._internal_.QuadUv.md)

Returns itself.

#### Defined in

node_modules/@pixi/core/index.d.ts:3478

___

### merge

▸ `Static` **merge**(`geometries`): [`Geometry`](components_ClusterNodeContainer._internal_.Geometry.md)

merges an array of geometries into a new single one
geometry attribute styles must match for this operation to work

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometries` | [`Geometry`](components_ClusterNodeContainer._internal_.Geometry.md)[] | array of geometries to merge |

#### Returns

[`Geometry`](components_ClusterNodeContainer._internal_.Geometry.md)

shiny new geometry!

#### Inherited from

[Geometry](components_ClusterNodeContainer._internal_.Geometry.md).[merge](components_ClusterNodeContainer._internal_.Geometry.md#merge)

#### Defined in

node_modules/@pixi/core/index.d.ts:2463