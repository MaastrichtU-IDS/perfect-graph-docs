[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Bounds

# Class: Bounds

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Bounds

'Builder' pattern for bounds rectangles.

This could be called an Axis-Aligned Bounding Box.
It is not an actual shape. It is a mutable thing; no 'EMPTY' or those kind of problems.

**`memberof`** PIXI

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Bounds.md#constructor)

### Properties

- [maxX](components_ClusterNodeContainer._internal_.Bounds.md#maxx)
- [maxY](components_ClusterNodeContainer._internal_.Bounds.md#maxy)
- [minX](components_ClusterNodeContainer._internal_.Bounds.md#minx)
- [minY](components_ClusterNodeContainer._internal_.Bounds.md#miny)
- [rect](components_ClusterNodeContainer._internal_.Bounds.md#rect)
- [updateID](components_ClusterNodeContainer._internal_.Bounds.md#updateid)

### Methods

- [addBounds](components_ClusterNodeContainer._internal_.Bounds.md#addbounds)
- [addBoundsArea](components_ClusterNodeContainer._internal_.Bounds.md#addboundsarea)
- [addBoundsMask](components_ClusterNodeContainer._internal_.Bounds.md#addboundsmask)
- [addBoundsMatrix](components_ClusterNodeContainer._internal_.Bounds.md#addboundsmatrix)
- [addFrame](components_ClusterNodeContainer._internal_.Bounds.md#addframe)
- [addFrameMatrix](components_ClusterNodeContainer._internal_.Bounds.md#addframematrix)
- [addFramePad](components_ClusterNodeContainer._internal_.Bounds.md#addframepad)
- [addPoint](components_ClusterNodeContainer._internal_.Bounds.md#addpoint)
- [addPointMatrix](components_ClusterNodeContainer._internal_.Bounds.md#addpointmatrix)
- [addQuad](components_ClusterNodeContainer._internal_.Bounds.md#addquad)
- [addVertexData](components_ClusterNodeContainer._internal_.Bounds.md#addvertexdata)
- [addVertices](components_ClusterNodeContainer._internal_.Bounds.md#addvertices)
- [addVerticesMatrix](components_ClusterNodeContainer._internal_.Bounds.md#addverticesmatrix)
- [clear](components_ClusterNodeContainer._internal_.Bounds.md#clear)
- [getRectangle](components_ClusterNodeContainer._internal_.Bounds.md#getrectangle)
- [isEmpty](components_ClusterNodeContainer._internal_.Bounds.md#isempty)
- [pad](components_ClusterNodeContainer._internal_.Bounds.md#pad)

## Constructors

### constructor

• **new Bounds**()

#### Defined in

node_modules/@pixi/display/index.d.ts:31

## Properties

### maxX

• **maxX**: `number`

#### Defined in

node_modules/@pixi/display/index.d.ts:27

___

### maxY

• **maxY**: `number`

#### Defined in

node_modules/@pixi/display/index.d.ts:28

___

### minX

• **minX**: `number`

#### Defined in

node_modules/@pixi/display/index.d.ts:25

___

### minY

• **minY**: `number`

#### Defined in

node_modules/@pixi/display/index.d.ts:26

___

### rect

• **rect**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

#### Defined in

node_modules/@pixi/display/index.d.ts:29

___

### updateID

• **updateID**: `number`

#### Defined in

node_modules/@pixi/display/index.d.ts:30

## Methods

### addBounds

▸ **addBounds**(`bounds`): `void`

Adds other Bounds.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bounds` | [`Bounds`](components_ClusterNodeContainer._internal_.Bounds.md) | The Bounds to be added |

#### Returns

`void`

#### Defined in

node_modules/@pixi/display/index.d.ts:123

___

### addBoundsArea

▸ **addBoundsArea**(`bounds`, `area`): `void`

Adds other Bounds, masked with Rectangle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bounds` | [`Bounds`](components_ClusterNodeContainer._internal_.Bounds.md) | TODO |
| `area` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) | TODO |

#### Returns

`void`

#### Defined in

node_modules/@pixi/display/index.d.ts:144

___

### addBoundsMask

▸ **addBoundsMask**(`bounds`, `mask`): `void`

Adds other Bounds, masked with Bounds.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bounds` | [`Bounds`](components_ClusterNodeContainer._internal_.Bounds.md) | The Bounds to be added. |
| `mask` | [`Bounds`](components_ClusterNodeContainer._internal_.Bounds.md) | TODO |

#### Returns

`void`

#### Defined in

node_modules/@pixi/display/index.d.ts:130

___

### addBoundsMatrix

▸ **addBoundsMatrix**(`bounds`, `matrix`): `void`

Adds other Bounds, multiplied by matrix. Bounds shouldn't be empty.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bounds` | [`Bounds`](components_ClusterNodeContainer._internal_.Bounds.md) | other bounds |
| `matrix` | [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md) | multiplicator |

#### Returns

`void`

#### Defined in

node_modules/@pixi/display/index.d.ts:137

___

### addFrame

▸ **addFrame**(`transform`, `x0`, `y0`, `x1`, `y1`): `void`

Adds sprite frame, transformed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transform`](components_ClusterNodeContainer._internal_.Transform.md) | transform to apply |
| `x0` | `number` | left X of frame |
| `y0` | `number` | top Y of frame |
| `x1` | `number` | right X of frame |
| `y1` | `number` | bottom Y of frame |

#### Returns

`void`

#### Defined in

node_modules/@pixi/display/index.d.ts:79

___

### addFrameMatrix

▸ **addFrameMatrix**(`matrix`, `x0`, `y0`, `x1`, `y1`): `void`

Adds sprite frame, multiplied by matrix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrix` | [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md) | matrix to apply |
| `x0` | `number` | left X of frame |
| `y0` | `number` | top Y of frame |
| `x1` | `number` | right X of frame |
| `y1` | `number` | bottom Y of frame |

#### Returns

`void`

#### Defined in

node_modules/@pixi/display/index.d.ts:89

___

### addFramePad

▸ **addFramePad**(`x0`, `y0`, `x1`, `y1`, `padX`, `padY`): `void`

Adds padded frame. (x0, y0) should be strictly less than (x1, y1)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x0` | `number` | left X of frame |
| `y0` | `number` | top Y of frame |
| `x1` | `number` | right X of frame |
| `y1` | `number` | bottom Y of frame |
| `padX` | `number` | padding X |
| `padY` | `number` | padding Y |

#### Returns

`void`

#### Defined in

node_modules/@pixi/display/index.d.ts:163

___

### addPoint

▸ **addPoint**(`point`): `void`

This function should be inlined when its possible.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`IPointData`](../interfaces/components_ClusterNodeContainer._internal_.IPointData.md) | The point to add. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/display/index.d.ts:56

___

### addPointMatrix

▸ **addPointMatrix**(`matrix`, `point`): `void`

Adds a point, after transformed. This should be inlined when its possible.

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md) |
| `point` | [`IPointData`](../interfaces/components_ClusterNodeContainer._internal_.IPointData.md) |

#### Returns

`void`

#### Defined in

node_modules/@pixi/display/index.d.ts:63

___

### addQuad

▸ **addQuad**(`vertices`): `void`

Adds a quad, not transformed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vertices` | `Float32Array` | The verts to add. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/display/index.d.ts:69

___

### addVertexData

▸ **addVertexData**(`vertexData`, `beginOffset`, `endOffset`): `void`

Adds screen vertices from array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vertexData` | `Float32Array` | calculated vertices |
| `beginOffset` | `number` | begin offset |
| `endOffset` | `number` | end offset, excluded |

#### Returns

`void`

#### Defined in

node_modules/@pixi/display/index.d.ts:97

___

### addVertices

▸ **addVertices**(`transform`, `vertices`, `beginOffset`, `endOffset`): `void`

Add an array of mesh vertices

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transform`](components_ClusterNodeContainer._internal_.Transform.md) | mesh transform |
| `vertices` | `Float32Array` | mesh coordinates in array |
| `beginOffset` | `number` | begin offset |
| `endOffset` | `number` | end offset, excluded |

#### Returns

`void`

#### Defined in

node_modules/@pixi/display/index.d.ts:106

___

### addVerticesMatrix

▸ **addVerticesMatrix**(`matrix`, `vertices`, `beginOffset`, `endOffset`, `padX?`, `padY?`): `void`

Add an array of mesh vertices.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrix` | [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md) | mesh matrix |
| `vertices` | `Float32Array` | mesh coordinates in array |
| `beginOffset` | `number` | begin offset |
| `endOffset` | `number` | end offset, excluded |
| `padX?` | `number` | - |
| `padY?` | `number` | - |

#### Returns

`void`

#### Defined in

node_modules/@pixi/display/index.d.ts:117

___

### clear

▸ **clear**(): `void`

Clears the bounds and resets.

#### Returns

`void`

#### Defined in

node_modules/@pixi/display/index.d.ts:42

___

### getRectangle

▸ **getRectangle**(`rect?`): [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

Can return Rectangle.EMPTY constant, either construct new rectangle, either use your rectangle
It is not guaranteed that it will return tempRect

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rect?` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) | temporary object will be used if AABB is not empty |

#### Returns

[`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

A rectangle of the bounds

#### Defined in

node_modules/@pixi/display/index.d.ts:50

___

### isEmpty

▸ **isEmpty**(): `boolean`

Checks if bounds are empty.

#### Returns

`boolean`

True if empty.

#### Defined in

node_modules/@pixi/display/index.d.ts:37

___

### pad

▸ **pad**(`paddingX?`, `paddingY?`): `void`

Pads bounds object, making it grow in all directions.
If paddingY is omitted, both paddingX and paddingY will be set to paddingX.

#### Parameters

| Name | Type |
| :------ | :------ |
| `paddingX?` | `number` |
| `paddingY?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/display/index.d.ts:152
