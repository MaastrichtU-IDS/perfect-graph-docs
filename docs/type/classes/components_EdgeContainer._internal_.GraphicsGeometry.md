[perfect-graph](../README.md) / [Modules](../modules.md) / [components/EdgeContainer](../modules/components_EdgeContainer.md) / [<internal\>](../modules/components_EdgeContainer._internal_.md) / GraphicsGeometry

# Class: GraphicsGeometry

[components/EdgeContainer](../modules/components_EdgeContainer.md).[<internal>](../modules/components_EdgeContainer._internal_.md).GraphicsGeometry

The Graphics class contains methods used to draw primitive shapes such as lines, circles and
rectangles to the display, and to color and fill them.

GraphicsGeometry is designed to not be continually updating the geometry since it's expensive
to re-tesselate using **earcut**. Consider using {@link PIXI.Mesh} for this use-case, it's much faster.

**`memberof`** PIXI

## Hierarchy

- [`BatchGeometry`](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md)

  ↳ **`GraphicsGeometry`**

## Table of contents

### Constructors

- [constructor](components_EdgeContainer._internal_.GraphicsGeometry.md#constructor)

### Properties

- [\_bounds](components_EdgeContainer._internal_.GraphicsGeometry.md#_bounds)
- [\_buffer](components_EdgeContainer._internal_.GraphicsGeometry.md#_buffer)
- [\_indexBuffer](components_EdgeContainer._internal_.GraphicsGeometry.md#_indexbuffer)
- [attributes](components_EdgeContainer._internal_.GraphicsGeometry.md#attributes)
- [batchDirty](components_EdgeContainer._internal_.GraphicsGeometry.md#batchdirty)
- [batchable](components_EdgeContainer._internal_.GraphicsGeometry.md#batchable)
- [batches](components_EdgeContainer._internal_.GraphicsGeometry.md#batches)
- [boundsDirty](components_EdgeContainer._internal_.GraphicsGeometry.md#boundsdirty)
- [boundsPadding](components_EdgeContainer._internal_.GraphicsGeometry.md#boundspadding)
- [buffers](components_EdgeContainer._internal_.GraphicsGeometry.md#buffers)
- [cacheDirty](components_EdgeContainer._internal_.GraphicsGeometry.md#cachedirty)
- [clearDirty](components_EdgeContainer._internal_.GraphicsGeometry.md#cleardirty)
- [closePointEps](components_EdgeContainer._internal_.GraphicsGeometry.md#closepointeps)
- [colors](components_EdgeContainer._internal_.GraphicsGeometry.md#colors)
- [dirty](components_EdgeContainer._internal_.GraphicsGeometry.md#dirty)
- [disposeRunner](components_EdgeContainer._internal_.GraphicsGeometry.md#disposerunner)
- [drawCalls](components_EdgeContainer._internal_.GraphicsGeometry.md#drawcalls)
- [glVertexArrayObjects](components_EdgeContainer._internal_.GraphicsGeometry.md#glvertexarrayobjects)
- [graphicsData](components_EdgeContainer._internal_.GraphicsGeometry.md#graphicsdata)
- [id](components_EdgeContainer._internal_.GraphicsGeometry.md#id)
- [indexBuffer](components_EdgeContainer._internal_.GraphicsGeometry.md#indexbuffer)
- [indices](components_EdgeContainer._internal_.GraphicsGeometry.md#indices)
- [indicesUint16](components_EdgeContainer._internal_.GraphicsGeometry.md#indicesuint16)
- [instanceCount](components_EdgeContainer._internal_.GraphicsGeometry.md#instancecount)
- [instanced](components_EdgeContainer._internal_.GraphicsGeometry.md#instanced)
- [points](components_EdgeContainer._internal_.GraphicsGeometry.md#points)
- [refCount](components_EdgeContainer._internal_.GraphicsGeometry.md#refcount)
- [shapeIndex](components_EdgeContainer._internal_.GraphicsGeometry.md#shapeindex)
- [textureIds](components_EdgeContainer._internal_.GraphicsGeometry.md#textureids)
- [uvs](components_EdgeContainer._internal_.GraphicsGeometry.md#uvs)
- [uvsFloat32](components_EdgeContainer._internal_.GraphicsGeometry.md#uvsfloat32)
- [BATCHABLE\_SIZE](components_EdgeContainer._internal_.GraphicsGeometry.md#batchable_size)

### Accessors

- [bounds](components_EdgeContainer._internal_.GraphicsGeometry.md#bounds)

### Methods

- [\_compareStyles](components_EdgeContainer._internal_.GraphicsGeometry.md#_comparestyles)
- [addAttribute](components_EdgeContainer._internal_.GraphicsGeometry.md#addattribute)
- [addColors](components_EdgeContainer._internal_.GraphicsGeometry.md#addcolors)
- [addIndex](components_EdgeContainer._internal_.GraphicsGeometry.md#addindex)
- [addTextureIds](components_EdgeContainer._internal_.GraphicsGeometry.md#addtextureids)
- [addUvs](components_EdgeContainer._internal_.GraphicsGeometry.md#adduvs)
- [adjustUvs](components_EdgeContainer._internal_.GraphicsGeometry.md#adjustuvs)
- [buildDrawCalls](components_EdgeContainer._internal_.GraphicsGeometry.md#builddrawcalls)
- [calculateBounds](components_EdgeContainer._internal_.GraphicsGeometry.md#calculatebounds)
- [clear](components_EdgeContainer._internal_.GraphicsGeometry.md#clear)
- [clone](components_EdgeContainer._internal_.GraphicsGeometry.md#clone)
- [containsPoint](components_EdgeContainer._internal_.GraphicsGeometry.md#containspoint)
- [destroy](components_EdgeContainer._internal_.GraphicsGeometry.md#destroy)
- [dispose](components_EdgeContainer._internal_.GraphicsGeometry.md#dispose)
- [drawHole](components_EdgeContainer._internal_.GraphicsGeometry.md#drawhole)
- [drawShape](components_EdgeContainer._internal_.GraphicsGeometry.md#drawshape)
- [getAttribute](components_EdgeContainer._internal_.GraphicsGeometry.md#getattribute)
- [getBuffer](components_EdgeContainer._internal_.GraphicsGeometry.md#getbuffer)
- [getIndex](components_EdgeContainer._internal_.GraphicsGeometry.md#getindex)
- [getSize](components_EdgeContainer._internal_.GraphicsGeometry.md#getsize)
- [interleave](components_EdgeContainer._internal_.GraphicsGeometry.md#interleave)
- [invalidate](components_EdgeContainer._internal_.GraphicsGeometry.md#invalidate)
- [isBatchable](components_EdgeContainer._internal_.GraphicsGeometry.md#isbatchable)
- [packAttributes](components_EdgeContainer._internal_.GraphicsGeometry.md#packattributes)
- [packBatches](components_EdgeContainer._internal_.GraphicsGeometry.md#packbatches)
- [processFill](components_EdgeContainer._internal_.GraphicsGeometry.md#processfill)
- [processHoles](components_EdgeContainer._internal_.GraphicsGeometry.md#processholes)
- [processLine](components_EdgeContainer._internal_.GraphicsGeometry.md#processline)
- [transformPoints](components_EdgeContainer._internal_.GraphicsGeometry.md#transformpoints)
- [updateBatches](components_EdgeContainer._internal_.GraphicsGeometry.md#updatebatches)
- [validateBatching](components_EdgeContainer._internal_.GraphicsGeometry.md#validatebatching)
- [merge](components_EdgeContainer._internal_.GraphicsGeometry.md#merge)

## Constructors

### constructor

• **new GraphicsGeometry**()

#### Overrides

[BatchGeometry](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md).[constructor](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md#constructor)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:784

## Properties

### \_bounds

• `Protected` **\_bounds**: [`Bounds`](components_ClusterNodeContainer._internal_.Bounds.md)

Cached bounds.

**`member`** {PIXI.Bounds}

#### Defined in

node_modules/@pixi/graphics/index.d.ts:781

___

### \_buffer

• `Protected` **\_buffer**: [`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md)

Buffer used for position, color, texture IDs

#### Inherited from

[BatchGeometry](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md).[_buffer](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md#_buffer)

#### Defined in

node_modules/@pixi/core/index.d.ts:1162

___

### \_indexBuffer

• `Protected` **\_indexBuffer**: [`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md)

Index buffer data

#### Inherited from

[BatchGeometry](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md).[_indexBuffer](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md#_indexbuffer)

#### Defined in

node_modules/@pixi/core/index.d.ts:1168

___

### attributes

• **attributes**: `Object`

#### Index signature

▪ [key: `string`]: [`Attribute`](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.Attribute.md)

#### Inherited from

[BatchGeometry](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md).[attributes](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md#attributes)

#### Defined in

node_modules/@pixi/core/index.d.ts:2368

___

### batchDirty

• **batchDirty**: `number`

Batches need to regenerated if the geometry is updated.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:760

___

### batchable

• **batchable**: `boolean`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:736

___

### batches

• **batches**: [`BatchPart`](components_EdgeContainer._internal_.BatchPart.md)[]

Intermediate abstract format sent to batch system.
Can be converted to drawCalls or to batchable objects.

**`member`** {PIXI.graphicsUtils.BatchPart[]}

#### Defined in

node_modules/@pixi/graphics/index.d.ts:767

___

### boundsDirty

• `Protected` **boundsDirty**: `number`

The bounds dirty flag.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:783

___

### boundsPadding

• **boundsPadding**: `number`

Padding to add to the bounds.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:733

___

### buffers

• **buffers**: [`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md)[]

#### Inherited from

[BatchGeometry](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md).[buffers](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md#buffers)

#### Defined in

node_modules/@pixi/core/index.d.ts:2366

___

### cacheDirty

• `Protected` **cacheDirty**: `number`

Used to check if the cache is dirty.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:771

___

### clearDirty

• `Protected` **clearDirty**: `number`

Used to detect if we cleared the graphicsData.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:773

___

### closePointEps

• **closePointEps**: `number`

Minimal distance between points that are considered different.
Affects line tesselation.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:731

___

### colors

• **colors**: `number`[]

The collection of colors

#### Defined in

node_modules/@pixi/graphics/index.d.ts:740

___

### dirty

• `Protected` **dirty**: `number`

Used to detect if the graphics object has changed.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:769

___

### disposeRunner

• **disposeRunner**: [`Runner`](components_ClusterNodeContainer._internal_.Runner.md)

#### Inherited from

[BatchGeometry](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md).[disposeRunner](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md#disposerunner)

#### Defined in

node_modules/@pixi/core/index.d.ts:2379

___

### drawCalls

• **drawCalls**: [`BatchDrawCall`](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchDrawCall.md)[]

List of current draw calls drived from the batches.

**`member`** {PIXI.BatchDrawCall[]}

#### Defined in

node_modules/@pixi/graphics/index.d.ts:758

___

### glVertexArrayObjects

• **glVertexArrayObjects**: `Object`

#### Index signature

▪ [key: `number`]: { [key: string]: [`WebGLVertexArrayObject`](../modules/components_ClusterNodeContainer._internal_.md#webglvertexarrayobject);  }

#### Inherited from

[BatchGeometry](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md).[glVertexArrayObjects](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md#glvertexarrayobjects)

#### Defined in

node_modules/@pixi/core/index.d.ts:2374

___

### graphicsData

• **graphicsData**: [`GraphicsData`](components_EdgeContainer._internal_.GraphicsData.md)[]

The collection of drawn shapes.

**`member`** {PIXI.GraphicsData[]}

#### Defined in

node_modules/@pixi/graphics/index.d.ts:752

___

### id

• **id**: `number`

#### Inherited from

[BatchGeometry](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md).[id](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md#id)

#### Defined in

node_modules/@pixi/core/index.d.ts:2371

___

### indexBuffer

• **indexBuffer**: [`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md)

#### Inherited from

[BatchGeometry](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md).[indexBuffer](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md#indexbuffer)

#### Defined in

node_modules/@pixi/core/index.d.ts:2367

___

### indices

• **indices**: `number`[]

The indices of the vertices

#### Defined in

node_modules/@pixi/graphics/index.d.ts:744

___

### indicesUint16

• **indicesUint16**: `Uint16Array` \| `Uint32Array`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:735

___

### instanceCount

• **instanceCount**: `number`

#### Inherited from

[BatchGeometry](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md).[instanceCount](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md#instancecount)

#### Defined in

node_modules/@pixi/core/index.d.ts:2373

___

### instanced

• **instanced**: `boolean`

#### Inherited from

[BatchGeometry](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md).[instanced](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md#instanced)

#### Defined in

node_modules/@pixi/core/index.d.ts:2372

___

### points

• **points**: `number`[]

An array of points to draw, 2 numbers per point

#### Defined in

node_modules/@pixi/graphics/index.d.ts:738

___

### refCount

• **refCount**: `number`

#### Inherited from

[BatchGeometry](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md).[refCount](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md#refcount)

#### Defined in

node_modules/@pixi/core/index.d.ts:2380

___

### shapeIndex

• `Protected` **shapeIndex**: `number`

Index of the last batched shape in the stack of calls.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:775

___

### textureIds

• **textureIds**: `number`[]

Reference to the texture IDs.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:746

___

### uvs

• **uvs**: `number`[]

The UVs collection

#### Defined in

node_modules/@pixi/graphics/index.d.ts:742

___

### uvsFloat32

• **uvsFloat32**: `Float32Array`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:734

___

### BATCHABLE\_SIZE

▪ `Static` **BATCHABLE\_SIZE**: `number`

The maximum number of points to consider an object "batchable",
able to be batched by the renderer's batch system.
\

#### Defined in

node_modules/@pixi/graphics/index.d.ts:726

## Accessors

### bounds

• `get` **bounds**(): [`Bounds`](components_ClusterNodeContainer._internal_.Bounds.md)

Get the current bounds of the graphic geometry.

**`member`** {PIXI.Bounds}

**`readonly`**

#### Returns

[`Bounds`](components_ClusterNodeContainer._internal_.Bounds.md)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:791

## Methods

### \_compareStyles

▸ `Protected` **_compareStyles**(`styleA`, `styleB`): `boolean`

Affinity check

#### Parameters

| Name | Type |
| :------ | :------ |
| `styleA` | [`FillStyle`](components_EdgeContainer._internal_.FillStyle.md) \| [`LineStyle`](components_EdgeContainer._internal_.LineStyle.md) |
| `styleB` | [`FillStyle`](components_EdgeContainer._internal_.FillStyle.md) \| [`LineStyle`](components_EdgeContainer._internal_.LineStyle.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:846

___

### addAttribute

▸ **addAttribute**(`id`, `buffer`, `size?`, `normalized?`, `type?`, `stride?`, `start?`, `instance?`): [`GraphicsGeometry`](components_EdgeContainer._internal_.GraphicsGeometry.md)

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

[`GraphicsGeometry`](components_EdgeContainer._internal_.GraphicsGeometry.md)

returns self, useful for chaining.

#### Inherited from

[BatchGeometry](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md).[addAttribute](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md#addattribute)

#### Defined in

node_modules/@pixi/core/index.d.ts:2404

___

### addColors

▸ `Protected` **addColors**(`colors`, `color`, `alpha`, `size`, `offset?`): `void`

Add colors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colors` | `number`[] | List of colors to add to |
| `color` | `number` | Color to add |
| `alpha` | `number` | Alpha to use |
| `size` | `number` | Number of colors to add |
| `offset?` | `number` |  |

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:923

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

[BatchGeometry](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md).[addIndex](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md#addindex)

#### Defined in

node_modules/@pixi/core/index.d.ts:2427

___

### addTextureIds

▸ `Protected` **addTextureIds**(`textureIds`, `id`, `size`, `offset?`): `void`

Add texture id that the shader/fragment wants to use.

#### Parameters

| Name | Type |
| :------ | :------ |
| `textureIds` | `number`[] |
| `id` | `number` |
| `size` | `number` |
| `offset?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:933

___

### addUvs

▸ `Protected` **addUvs**(`verts`, `uvs`, `texture`, `start`, `size`, `matrix?`): `void`

Generates the UVs for a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `verts` | `number`[] | Vertices |
| `uvs` | `number`[] | UVs |
| `texture` | [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\> | Reference to Texture |
| `start` | `number` | Index buffer start index. |
| `size` | `number` | The size/length for index buffer. |
| `matrix?` | [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md) | - |

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:945

___

### adjustUvs

▸ `Protected` **adjustUvs**(`uvs`, `texture`, `start`, `size`): `void`

Modify uvs array according to position of texture region
Does not work with rotated or trimmed textures

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uvs` | `number`[] | array |
| `texture` | [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\> | region |
| `start` | `number` | starting index for uvs |
| `size` | `number` | how many points to adjust |

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:955

___

### buildDrawCalls

▸ `Protected` **buildDrawCalls**(): `void`

Converts intermediate batches data to drawCalls.

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:871

___

### calculateBounds

▸ `Protected` **calculateBounds**(): `void`

Update the local bounds of the object. Expensive to use performance-wise.

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:904

___

### clear

▸ **clear**(): [`GraphicsGeometry`](components_EdgeContainer._internal_.GraphicsGeometry.md)

Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.

#### Returns

[`GraphicsGeometry`](components_EdgeContainer._internal_.GraphicsGeometry.md)

This GraphicsGeometry object. Good for chaining method calls

#### Defined in

node_modules/@pixi/graphics/index.d.ts:802

___

### clone

▸ **clone**(): [`Geometry`](components_ClusterNodeContainer._internal_.Geometry.md)

returns a clone of the geometry

#### Returns

[`Geometry`](components_ClusterNodeContainer._internal_.Geometry.md)

a new clone of this geometry

#### Inherited from

[BatchGeometry](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md).[clone](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md#clone)

#### Defined in

node_modules/@pixi/core/index.d.ts:2455

___

### containsPoint

▸ **containsPoint**(`point`): `boolean`

Check to see if a point is contained within this geometry.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`IPointData`](../interfaces/components_ClusterNodeContainer._internal_.IPointData.md) | Point to check if it's contained. |

#### Returns

`boolean`

`true` if the point is contained within geometry.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:832

___

### destroy

▸ **destroy**(): `void`

Destroys the GraphicsGeometry object.

#### Returns

`void`

#### Overrides

[BatchGeometry](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md).[destroy](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md#destroy)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:825

___

### dispose

▸ **dispose**(): `void`

disposes WebGL resources that are connected to this geometry

#### Returns

`void`

#### Inherited from

[BatchGeometry](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md).[dispose](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md#dispose)

#### Defined in

node_modules/@pixi/core/index.d.ts:2445

___

### drawHole

▸ **drawHole**(`shape`, `matrix?`): [`GraphicsGeometry`](components_EdgeContainer._internal_.GraphicsGeometry.md)

Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`IShape_2`](../modules/components_EdgeContainer._internal_.md#ishape_2) | The shape object to draw. |
| `matrix?` | [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md) | Transform applied to the points of the shape. |

#### Returns

[`GraphicsGeometry`](components_EdgeContainer._internal_.GraphicsGeometry.md)

Returns geometry for chaining.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:820

___

### drawShape

▸ **drawShape**(`shape`, `fillStyle?`, `lineStyle?`, `matrix?`): [`GraphicsGeometry`](components_EdgeContainer._internal_.GraphicsGeometry.md)

Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`IShape_2`](../modules/components_EdgeContainer._internal_.md#ishape_2) | The shape object to draw. |
| `fillStyle?` | [`FillStyle`](components_EdgeContainer._internal_.FillStyle.md) | Defines style of the fill. |
| `lineStyle?` | [`LineStyle`](components_EdgeContainer._internal_.LineStyle.md) | Defines style of the lines. |
| `matrix?` | [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md) | Transform applied to the points of the shape. |

#### Returns

[`GraphicsGeometry`](components_EdgeContainer._internal_.GraphicsGeometry.md)

Returns geometry for chaining.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:812

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

[BatchGeometry](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md).[getAttribute](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md#getattribute)

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

[BatchGeometry](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md).[getBuffer](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md#getbuffer)

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

[BatchGeometry](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md).[getIndex](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md#getindex)

#### Defined in

node_modules/@pixi/core/index.d.ts:2433

___

### getSize

▸ **getSize**(): `number`

#### Returns

`number`

#### Inherited from

[BatchGeometry](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md).[getSize](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md#getsize)

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

[BatchGeometry](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md).[interleave](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md#interleave)

#### Defined in

node_modules/@pixi/core/index.d.ts:2440

___

### invalidate

▸ `Protected` **invalidate**(): `void`

Call if you changed graphicsData manually.
Empties all batch buffers.

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:796

___

### isBatchable

▸ `Protected` **isBatchable**(): `boolean`

Checks to see if this graphics geometry can be batched.
Currently it needs to be small enough and not contain any native lines.

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:865

___

### packAttributes

▸ `Protected` **packAttributes**(): `void`

Packs attributes to single buffer.

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:877

___

### packBatches

▸ `Protected` **packBatches**(): `void`

Offset the indices so that it works with the batcher.

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:858

___

### processFill

▸ `Protected` **processFill**(`data`): `void`

Process fill part of Graphics.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`GraphicsData`](components_EdgeContainer._internal_.GraphicsData.md) |

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:884

___

### processHoles

▸ `Protected` **processHoles**(`holes`): `void`

Process the holes data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `holes` | [`GraphicsData`](components_EdgeContainer._internal_.GraphicsData.md)[] | Holes to render |

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:898

___

### processLine

▸ `Protected` **processLine**(`data`): `void`

Process line part of Graphics.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`GraphicsData`](components_EdgeContainer._internal_.GraphicsData.md) |

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:891

___

### transformPoints

▸ `Protected` **transformPoints**(`points`, `matrix`): `void`

Transform points using matrix.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `points` | `number`[] | Points to transform |
| `matrix` | [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md) | Transform matrix |

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:912

___

### updateBatches

▸ **updateBatches**(`allow32Indices?`): `void`

Generates intermediate batch data. Either gets converted to drawCalls
or used to convert to batch objects directly by the Graphics object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `allow32Indices?` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:839

___

### validateBatching

▸ `Protected` **validateBatching**(): `boolean`

Test geometry for batching process.

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:852

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

[BatchGeometry](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md).[merge](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BatchGeometry.md#merge)

#### Defined in

node_modules/@pixi/core/index.d.ts:2463
