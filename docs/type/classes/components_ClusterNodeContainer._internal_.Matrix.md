[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Matrix

# Class: Matrix

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Matrix

The PixiJS Matrix as a class makes it a lot faster.

Here is a representation of it:
```js
| a | c | tx|
| b | d | ty|
| 0 | 0 | 1 |
```

**`memberof`** PIXI

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Matrix.md#constructor)

### Properties

- [a](components_ClusterNodeContainer._internal_.Matrix.md#a)
- [array](components_ClusterNodeContainer._internal_.Matrix.md#array)
- [b](components_ClusterNodeContainer._internal_.Matrix.md#b)
- [c](components_ClusterNodeContainer._internal_.Matrix.md#c)
- [d](components_ClusterNodeContainer._internal_.Matrix.md#d)
- [tx](components_ClusterNodeContainer._internal_.Matrix.md#tx)
- [ty](components_ClusterNodeContainer._internal_.Matrix.md#ty)

### Accessors

- [IDENTITY](components_ClusterNodeContainer._internal_.Matrix.md#identity)
- [TEMP\_MATRIX](components_ClusterNodeContainer._internal_.Matrix.md#temp_matrix)

### Methods

- [append](components_ClusterNodeContainer._internal_.Matrix.md#append)
- [apply](components_ClusterNodeContainer._internal_.Matrix.md#apply)
- [applyInverse](components_ClusterNodeContainer._internal_.Matrix.md#applyinverse)
- [clone](components_ClusterNodeContainer._internal_.Matrix.md#clone)
- [copyFrom](components_ClusterNodeContainer._internal_.Matrix.md#copyfrom)
- [copyTo](components_ClusterNodeContainer._internal_.Matrix.md#copyto)
- [decompose](components_ClusterNodeContainer._internal_.Matrix.md#decompose)
- [fromArray](components_ClusterNodeContainer._internal_.Matrix.md#fromarray)
- [identity](components_ClusterNodeContainer._internal_.Matrix.md#identity)
- [invert](components_ClusterNodeContainer._internal_.Matrix.md#invert)
- [prepend](components_ClusterNodeContainer._internal_.Matrix.md#prepend)
- [rotate](components_ClusterNodeContainer._internal_.Matrix.md#rotate)
- [scale](components_ClusterNodeContainer._internal_.Matrix.md#scale)
- [set](components_ClusterNodeContainer._internal_.Matrix.md#set)
- [setTransform](components_ClusterNodeContainer._internal_.Matrix.md#settransform)
- [toArray](components_ClusterNodeContainer._internal_.Matrix.md#toarray)
- [toString](components_ClusterNodeContainer._internal_.Matrix.md#tostring)
- [translate](components_ClusterNodeContainer._internal_.Matrix.md#translate)

## Constructors

### constructor

• **new Matrix**(`a?`, `b?`, `c?`, `d?`, `tx?`, `ty?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a?` | `number` | x scale |
| `b?` | `number` | y skew |
| `c?` | `number` | x skew |
| `d?` | `number` | y scale |
| `tx?` | `number` | x translation |
| `ty?` | `number` | y translation |

#### Defined in

node_modules/@pixi/math/index.d.ts:404

## Properties

### a

• **a**: `number`

**`default`** 1

#### Defined in

node_modules/@pixi/math/index.d.ts:384

___

### array

• **array**: ``null`` \| `Float32Array`

#### Defined in

node_modules/@pixi/math/index.d.ts:395

___

### b

• **b**: `number`

**`default`** 0

#### Defined in

node_modules/@pixi/math/index.d.ts:386

___

### c

• **c**: `number`

**`default`** 0

#### Defined in

node_modules/@pixi/math/index.d.ts:388

___

### d

• **d**: `number`

**`default`** 1

#### Defined in

node_modules/@pixi/math/index.d.ts:390

___

### tx

• **tx**: `number`

**`default`** 0

#### Defined in

node_modules/@pixi/math/index.d.ts:392

___

### ty

• **ty**: `number`

**`default`** 0

#### Defined in

node_modules/@pixi/math/index.d.ts:394

## Accessors

### IDENTITY

• `Static` `get` **IDENTITY**(): [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

A default (identity) matrix

**`readonly`**

#### Returns

[`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

#### Defined in

node_modules/@pixi/math/index.d.ts:553

___

### TEMP\_MATRIX

• `Static` `get` **TEMP_MATRIX**(): [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

A temp matrix

**`readonly`**

#### Returns

[`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

#### Defined in

node_modules/@pixi/math/index.d.ts:559

## Methods

### append

▸ **append**(`matrix`): [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

Appends the given Matrix to this Matrix.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrix` | [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md) | The matrix to append. |

#### Returns

[`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

This matrix. Good for chaining method calls.

#### Defined in

node_modules/@pixi/math/index.d.ts:485

___

### apply

▸ **apply**<`P`\>(`pos`, `newPos?`): `P`

Get a new position with the current transformation applied.
Can be used to go from a child's coordinate space to the world coordinate space. (e.g. rendering)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`IPointData`](../interfaces/components_ClusterNodeContainer._internal_.IPointData.md) = [`Point`](components_ClusterNodeContainer._internal_.Point.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pos` | [`IPointData`](../interfaces/components_ClusterNodeContainer._internal_.IPointData.md) | The origin |
| `newPos?` | `P` | - |

#### Returns

`P`

The new point, transformed through this matrix

#### Defined in

node_modules/@pixi/math/index.d.ts:446

___

### applyInverse

▸ **applyInverse**<`P`\>(`pos`, `newPos?`): `P`

Get a new position with the inverse of the current transformation applied.
Can be used to go from the world coordinate space to a child's coordinate space. (e.g. input)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`IPointData`](../interfaces/components_ClusterNodeContainer._internal_.IPointData.md) = [`Point`](components_ClusterNodeContainer._internal_.Point.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pos` | [`IPointData`](../interfaces/components_ClusterNodeContainer._internal_.IPointData.md) | The origin |
| `newPos?` | `P` | - |

#### Returns

`P`

The new point, inverse-transformed through this matrix

#### Defined in

node_modules/@pixi/math/index.d.ts:455

___

### clone

▸ **clone**(): [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

Creates a new Matrix object with the same values as this one.

#### Returns

[`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

A copy of this matrix. Good for chaining method calls.

#### Defined in

node_modules/@pixi/math/index.d.ts:532

___

### copyFrom

▸ **copyFrom**(`matrix`): [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

Changes the values of the matrix to be the same as the ones in given matrix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrix` | [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md) | The matrix to copy from. |

#### Returns

[`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

this

#### Defined in

node_modules/@pixi/math/index.d.ts:546

___

### copyTo

▸ **copyTo**(`matrix`): [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

Changes the values of the given matrix to be the same as the ones in this matrix

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrix` | [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md) | The matrix to copy to. |

#### Returns

[`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

The matrix given in parameter with its values updated.

#### Defined in

node_modules/@pixi/math/index.d.ts:539

___

### decompose

▸ **decompose**(`transform`): [`Transform`](components_ClusterNodeContainer._internal_.Transform.md)

Decomposes the matrix (x, y, scaleX, scaleY, and rotation) and sets the properties on to a transform.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transform`](components_ClusterNodeContainer._internal_.Transform.md) | The transform to apply the properties to. |

#### Returns

[`Transform`](components_ClusterNodeContainer._internal_.Transform.md)

The transform with the newly applied properties

#### Defined in

node_modules/@pixi/math/index.d.ts:514

___

### fromArray

▸ **fromArray**(`array`): `void`

Creates a Matrix object based on the given array. The Element to Matrix mapping order is as follows:

a = array[0]
b = array[1]
c = array[3]
d = array[4]
tx = array[2]
ty = array[5]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `number`[] | The array that the matrix will be populated from. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/math/index.d.ts:417

___

### identity

▸ **identity**(): [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

Resets this Matrix to an identity (default) matrix.

#### Returns

[`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

This matrix. Good for chaining method calls.

#### Defined in

node_modules/@pixi/math/index.d.ts:526

___

### invert

▸ **invert**(): [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

Inverts this matrix

#### Returns

[`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

This matrix. Good for chaining method calls.

#### Defined in

node_modules/@pixi/math/index.d.ts:520

___

### prepend

▸ **prepend**(`matrix`): [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

Prepends the given Matrix to this Matrix.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrix` | [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md) | The matrix to prepend |

#### Returns

[`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

This matrix. Good for chaining method calls.

#### Defined in

node_modules/@pixi/math/index.d.ts:507

___

### rotate

▸ **rotate**(`angle`): [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

Applies a rotation transformation to the matrix.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | `number` | The angle in radians. |

#### Returns

[`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

This matrix. Good for chaining method calls.

#### Defined in

node_modules/@pixi/math/index.d.ts:478

___

### scale

▸ **scale**(`x`, `y`): [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

Applies a scale transformation to the matrix.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The amount to scale horizontally |
| `y` | `number` | The amount to scale vertically |

#### Returns

[`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

This matrix. Good for chaining method calls.

#### Defined in

node_modules/@pixi/math/index.d.ts:471

___

### set

▸ **set**(`a`, `b`, `c`, `d`, `tx`, `ty`): [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

Sets the matrix properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | Matrix component |
| `b` | `number` | Matrix component |
| `c` | `number` | Matrix component |
| `d` | `number` | Matrix component |
| `tx` | `number` | Matrix component |
| `ty` | `number` | Matrix component |

#### Returns

[`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

This matrix. Good for chaining method calls.

#### Defined in

node_modules/@pixi/math/index.d.ts:429

___

### setTransform

▸ **setTransform**(`x`, `y`, `pivotX`, `pivotY`, `scaleX`, `scaleY`, `rotation`, `skewX`, `skewY`): [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

Sets the matrix based on all the available properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | Position on the x axis |
| `y` | `number` | Position on the y axis |
| `pivotX` | `number` | Pivot on the x axis |
| `pivotY` | `number` | Pivot on the y axis |
| `scaleX` | `number` | Scale on the x axis |
| `scaleY` | `number` | Scale on the y axis |
| `rotation` | `number` | Rotation in radians |
| `skewX` | `number` | Skew on the x axis |
| `skewY` | `number` | Skew on the y axis |

#### Returns

[`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

This matrix. Good for chaining method calls.

#### Defined in

node_modules/@pixi/math/index.d.ts:500

___

### toArray

▸ **toArray**(`transpose`, `out?`): `Float32Array`

Creates an array from the current Matrix object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transpose` | `boolean` | Whether we need to transpose the matrix or not |
| `out?` | `Float32Array` | - |

#### Returns

`Float32Array`

The newly created array which contains the matrix

#### Defined in

node_modules/@pixi/math/index.d.ts:437

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@pixi/math/index.d.ts:547

___

### translate

▸ **translate**(`x`, `y`): [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

Translates the matrix on the x and y.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | How much to translate x by |
| `y` | `number` | How much to translate y by |

#### Returns

[`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

This matrix. Good for chaining method calls.

#### Defined in

node_modules/@pixi/math/index.d.ts:463
