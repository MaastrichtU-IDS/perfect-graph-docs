[perfect-graph](../README.md) / [Modules](../modules.md) / [components/EdgeContainer](../modules/components_EdgeContainer.md) / [<internal\>](../modules/components_EdgeContainer._internal_.md) / Victor

# Class: Victor

[components/EdgeContainer](../modules/components_EdgeContainer.md).[<internal>](../modules/components_EdgeContainer._internal_.md).Victor

## Table of contents

### Constructors

- [constructor](components_EdgeContainer._internal_.Victor.md#constructor)

### Properties

- [x](components_EdgeContainer._internal_.Victor.md#x)
- [y](components_EdgeContainer._internal_.Victor.md#y)

### Methods

- [absDistanceX](components_EdgeContainer._internal_.Victor.md#absdistancex)
- [absDistanceY](components_EdgeContainer._internal_.Victor.md#absdistancey)
- [add](components_EdgeContainer._internal_.Victor.md#add)
- [addScalar](components_EdgeContainer._internal_.Victor.md#addscalar)
- [addScalarX](components_EdgeContainer._internal_.Victor.md#addscalarx)
- [addScalarY](components_EdgeContainer._internal_.Victor.md#addscalary)
- [addX](components_EdgeContainer._internal_.Victor.md#addx)
- [addY](components_EdgeContainer._internal_.Victor.md#addy)
- [angle](components_EdgeContainer._internal_.Victor.md#angle)
- [angleDeg](components_EdgeContainer._internal_.Victor.md#angledeg)
- [clone](components_EdgeContainer._internal_.Victor.md#clone)
- [copy](components_EdgeContainer._internal_.Victor.md#copy)
- [copyX](components_EdgeContainer._internal_.Victor.md#copyx)
- [copyY](components_EdgeContainer._internal_.Victor.md#copyy)
- [cross](components_EdgeContainer._internal_.Victor.md#cross)
- [direction](components_EdgeContainer._internal_.Victor.md#direction)
- [distance](components_EdgeContainer._internal_.Victor.md#distance)
- [distanceSq](components_EdgeContainer._internal_.Victor.md#distancesq)
- [distanceX](components_EdgeContainer._internal_.Victor.md#distancex)
- [distanceY](components_EdgeContainer._internal_.Victor.md#distancey)
- [divide](components_EdgeContainer._internal_.Victor.md#divide)
- [divideScalar](components_EdgeContainer._internal_.Victor.md#dividescalar)
- [divideScalarX](components_EdgeContainer._internal_.Victor.md#dividescalarx)
- [divideScalarY](components_EdgeContainer._internal_.Victor.md#dividescalary)
- [divideX](components_EdgeContainer._internal_.Victor.md#dividex)
- [divideY](components_EdgeContainer._internal_.Victor.md#dividey)
- [dot](components_EdgeContainer._internal_.Victor.md#dot)
- [horizontalAngle](components_EdgeContainer._internal_.Victor.md#horizontalangle)
- [horizontalAngleDeg](components_EdgeContainer._internal_.Victor.md#horizontalangledeg)
- [invert](components_EdgeContainer._internal_.Victor.md#invert)
- [invertX](components_EdgeContainer._internal_.Victor.md#invertx)
- [invertY](components_EdgeContainer._internal_.Victor.md#inverty)
- [isEqualTo](components_EdgeContainer._internal_.Victor.md#isequalto)
- [isZero](components_EdgeContainer._internal_.Victor.md#iszero)
- [length](components_EdgeContainer._internal_.Victor.md#length)
- [lengthSq](components_EdgeContainer._internal_.Victor.md#lengthsq)
- [limit](components_EdgeContainer._internal_.Victor.md#limit)
- [magnitude](components_EdgeContainer._internal_.Victor.md#magnitude)
- [mix](components_EdgeContainer._internal_.Victor.md#mix)
- [mixX](components_EdgeContainer._internal_.Victor.md#mixx)
- [mixY](components_EdgeContainer._internal_.Victor.md#mixy)
- [multiply](components_EdgeContainer._internal_.Victor.md#multiply)
- [multiplyScalar](components_EdgeContainer._internal_.Victor.md#multiplyscalar)
- [multiplyScalarX](components_EdgeContainer._internal_.Victor.md#multiplyscalarx)
- [multiplyScalarY](components_EdgeContainer._internal_.Victor.md#multiplyscalary)
- [multiplyX](components_EdgeContainer._internal_.Victor.md#multiplyx)
- [multiplyY](components_EdgeContainer._internal_.Victor.md#multiplyy)
- [norm](components_EdgeContainer._internal_.Victor.md#norm)
- [normalize](components_EdgeContainer._internal_.Victor.md#normalize)
- [projectOnto](components_EdgeContainer._internal_.Victor.md#projectonto)
- [randomize](components_EdgeContainer._internal_.Victor.md#randomize)
- [randomizeAny](components_EdgeContainer._internal_.Victor.md#randomizeany)
- [randomizeX](components_EdgeContainer._internal_.Victor.md#randomizex)
- [randomizeY](components_EdgeContainer._internal_.Victor.md#randomizey)
- [rotate](components_EdgeContainer._internal_.Victor.md#rotate)
- [rotateBy](components_EdgeContainer._internal_.Victor.md#rotateby)
- [rotateByDeg](components_EdgeContainer._internal_.Victor.md#rotatebydeg)
- [rotateDeg](components_EdgeContainer._internal_.Victor.md#rotatedeg)
- [subtract](components_EdgeContainer._internal_.Victor.md#subtract)
- [subtractScalar](components_EdgeContainer._internal_.Victor.md#subtractscalar)
- [subtractScalarX](components_EdgeContainer._internal_.Victor.md#subtractscalarx)
- [subtractScalarY](components_EdgeContainer._internal_.Victor.md#subtractscalary)
- [subtractX](components_EdgeContainer._internal_.Victor.md#subtractx)
- [subtractY](components_EdgeContainer._internal_.Victor.md#subtracty)
- [toArray](components_EdgeContainer._internal_.Victor.md#toarray)
- [toFixed](components_EdgeContainer._internal_.Victor.md#tofixed)
- [toObject](components_EdgeContainer._internal_.Victor.md#toobject)
- [toString](components_EdgeContainer._internal_.Victor.md#tostring)
- [unfloat](components_EdgeContainer._internal_.Victor.md#unfloat)
- [verticalAngle](components_EdgeContainer._internal_.Victor.md#verticalangle)
- [verticalAngleDeg](components_EdgeContainer._internal_.Victor.md#verticalangledeg)
- [zero](components_EdgeContainer._internal_.Victor.md#zero)
- [fromArray](components_EdgeContainer._internal_.Victor.md#fromarray)
- [fromObject](components_EdgeContainer._internal_.Victor.md#fromobject)

## Constructors

### constructor

• **new Victor**(`x`, `y`)

Can be used without the new keyword.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The X component |
| `y` | `number` | The Y component |

#### Defined in

node_modules/@types/victor/index.d.ts:22

## Properties

### x

• **x**: `number`

#### Defined in

node_modules/@types/victor/index.d.ts:14

___

### y

• **y**: `number`

#### Defined in

node_modules/@types/victor/index.d.ts:15

## Methods

### absDistanceX

▸ **absDistanceX**(`vector`): `number`

Same as distanceX but always returns an absolute value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

`number`

#### Defined in

node_modules/@types/victor/index.d.ts:393

___

### absDistanceY

▸ **absDistanceY**(`vector`): `number`

Same as distanceY but always returns an absolute value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

`number`

#### Defined in

node_modules/@types/victor/index.d.ts:405

___

### add

▸ **add**(`vector`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Adds another vector to itself.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:90

___

### addScalar

▸ **addScalar**(`scalar`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Adds the given scalar to both vector axis.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:97

___

### addScalarX

▸ **addScalarX**(`scalar`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Adds the given scalar to the X axis.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:104

___

### addScalarY

▸ **addScalarY**(`scalar`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Adds the given scalar to the Y axis.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:111

___

### addX

▸ **addX**(`vector`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Adds another vector's X component to itself.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:78

___

### addY

▸ **addY**(`vector`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Adds another vector's Y component to itself.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:84

___

### angle

▸ **angle**(): `number`

Alias for horizontalAngle.

#### Returns

`number`

#### Defined in

node_modules/@types/victor/index.d.ts:427

___

### angleDeg

▸ **angleDeg**(): `number`

Alias for horizontalAngleDeg.

#### Returns

`number`

#### Defined in

node_modules/@types/victor/index.d.ts:442

___

### clone

▸ **clone**(): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Creates a new Victor with the same X and Y components.

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:39

___

### copy

▸ **copy**(`vector`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Copies the X and Y components of another vector in to itself.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:57

___

### copyX

▸ **copyX**(`vector`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Copies the X component of another vector in to itself.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:45

___

### copyY

▸ **copyY**(`vector`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Copies the Y component of another vector in to itself.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:51

___

### cross

▸ **cross**(`vector`): `number`

Returns the cross product of two vectors.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

`number`

#### Defined in

node_modules/@types/victor/index.d.ts:366

___

### direction

▸ **direction**(): `number`

Alias for horizontalAngle.

#### Returns

`number`

#### Defined in

node_modules/@types/victor/index.d.ts:432

___

### distance

▸ **distance**(`vector`): `number`

Returns the euclidean distance between two vectors.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

`number`

#### Defined in

node_modules/@types/victor/index.d.ts:411

___

### distanceSq

▸ **distanceSq**(`vector`): `number`

Returns the squared euclidean distance between two vectors. If the distance is only needed for comparison, this function is faster than distance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

`number`

#### Defined in

node_modules/@types/victor/index.d.ts:417

___

### distanceX

▸ **distanceX**(`vector`): `number`

Returns the distance of the X component from another vector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

`number`

#### Defined in

node_modules/@types/victor/index.d.ts:387

___

### distanceY

▸ **distanceY**(`vector`): `number`

Returns the distance of the Y component from another vector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

`number`

#### Defined in

node_modules/@types/victor/index.d.ts:399

___

### divide

▸ **divide**(`scalar`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Divides both components by another vector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:207

___

### divideScalar

▸ **divideScalar**(`scalar`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Divides both vector axis by the given scalar value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:214

___

### divideScalarX

▸ **divideScalarX**(`scalar`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Divides the X axis by the given scalar value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:221

___

### divideScalarY

▸ **divideScalarY**(`scalar`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Divides the Y axis by the given scalar value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:228

___

### divideX

▸ **divideX**(`vector`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Divides the X component by the X component of another vector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:195

___

### divideY

▸ **divideY**(`vector`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Divides the Y component by the Y component of another vector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:201

___

### dot

▸ **dot**(`vector`): `number`

Returns the dot product of two vectors.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

`number`

#### Defined in

node_modules/@types/victor/index.d.ts:360

___

### horizontalAngle

▸ **horizontalAngle**(): `number`

Returns the angle towards X in radians.

#### Returns

`number`

#### Defined in

node_modules/@types/victor/index.d.ts:422

___

### horizontalAngleDeg

▸ **horizontalAngleDeg**(): `number`

Same as horizontalAngle but returns degrees.

#### Returns

`number`

#### Defined in

node_modules/@types/victor/index.d.ts:437

___

### invert

▸ **invert**(): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Inverts both components.

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:243

___

### invertX

▸ **invertX**(): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Inverts the X component.

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:233

___

### invertY

▸ **invertY**(): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Inverts the Y component.

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:238

___

### isEqualTo

▸ **isEqualTo**(`vector`): `boolean`

Returns a true if this vector is the same as another.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/victor/index.d.ts:463

___

### isZero

▸ **isZero**(): `boolean`

Returns a true if vector is (0, 0).

#### Returns

`boolean`

#### Defined in

node_modules/@types/victor/index.d.ts:457

___

### length

▸ **length**(): `number`

Returns the length / magnitude.

#### Returns

`number`

#### Defined in

node_modules/@types/victor/index.d.ts:371

___

### lengthSq

▸ **lengthSq**(): `number`

Returns the squared length / magnitude. If the length is only needed for comparison, this function is faster than length.

#### Returns

`number`

#### Defined in

node_modules/@types/victor/index.d.ts:381

___

### limit

▸ **limit**(`max`, `multiplier`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

If either component is greater than max, multiplies the component by multiplier.

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `number` |
| `multiplier` | `number` |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:281

___

### magnitude

▸ **magnitude**(): `number`

Alias for length.

#### Returns

`number`

#### Defined in

node_modules/@types/victor/index.d.ts:376

___

### mix

▸ **mix**(`vector`, `amount`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Performs a linear blend / interpolation towards another vector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |
| `amount` | `number` |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:264

___

### mixX

▸ **mixX**(`vector`, `amount`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Performs a linear blend / interpolation of the X component towards another vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) | Number amount Value between 0 and 1. Default: 0.5 |
| `amount` | `number` |  |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:250

___

### mixY

▸ **mixY**(`vector`, `amount`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Performs a linear blend / interpolation of the Y component towards another vector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |
| `amount` | `number` |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:257

___

### multiply

▸ **multiply**(`vector`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Multiplies both components with another vector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:168

___

### multiplyScalar

▸ **multiplyScalar**(`scalar`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Multiplies both vector axis by the given scalar value

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:175

___

### multiplyScalarX

▸ **multiplyScalarX**(`scalar`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Multiplies the X axis by the given scalar

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:182

___

### multiplyScalarY

▸ **multiplyScalarY**(`scalar`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Multiplies the Y axis by the given scalar

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:189

___

### multiplyX

▸ **multiplyX**(`vector`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Multiplies the X component with the X component of another vector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:156

___

### multiplyY

▸ **multiplyY**(`vector`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Multiplies the Y component with the Y component of another vector.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:162

___

### norm

▸ **norm**(): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Alias of normalize.

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:274

___

### normalize

▸ **normalize**(): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Normalizes the vector by scaling it down to a length of 1 while keeping its direction.

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:269

___

### projectOnto

▸ **projectOnto**(`vector`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Projects a vector onto another vector, setting itself to the result.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:354

___

### randomize

▸ **randomize**(`topLeft`, `bottomRight`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Randomizes the components with a value between topLeft and bottomRight.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topLeft` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |
| `bottomRight` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:331

___

### randomizeAny

▸ **randomizeAny**(`topLeft`, `bottomRight`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Randomly randomizes either the X component or the Y component with a value between topLeft and bottomRight.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topLeft` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |
| `bottomRight` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:338

___

### randomizeX

▸ **randomizeX**(`topLeft`, `bottomRight`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Randomizes the X component with a value between topLeft and bottomRight.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topLeft` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |
| `bottomRight` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:317

___

### randomizeY

▸ **randomizeY**(`topLeft`, `bottomRight`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Randomizes the Y component with a value between topLeft and bottomRight.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topLeft` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |
| `bottomRight` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:324

___

### rotate

▸ **rotate**(`angle`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Rotates the vector to a certain angle, in radians CCW from +X axis.

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:292

___

### rotateBy

▸ **rotateBy**(`rotation`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Rotates the vector by a rotation angle, given in radians CCW from +X axis.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rotation` | `number` |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:304

___

### rotateByDeg

▸ **rotateByDeg**(`rotation`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Same as rotateBy but uses degrees

#### Parameters

| Name | Type |
| :------ | :------ |
| `rotation` | `number` |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:310

___

### rotateDeg

▸ **rotateDeg**(`angle`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Same as rotate but uses degrees

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:298

___

### subtract

▸ **subtract**(`vector`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Subtracts another vector from itself.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:129

___

### subtractScalar

▸ **subtractScalar**(`scalar`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Subtracts the given scalar from both axis.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:136

___

### subtractScalarX

▸ **subtractScalarX**(`scalar`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Subtracts the given scalar from the X axis.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:143

___

### subtractScalarY

▸ **subtractScalarY**(`scalar`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Subtracts the given scalar from the Y axis.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:150

___

### subtractX

▸ **subtractX**(`vector`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Subtracts another vector's X component from itself.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:117

___

### subtractY

▸ **subtractY**(`vector`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Subtracts another vector's Y component from itself.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vector` | [`Victor`](components_EdgeContainer._internal_.Victor.md) |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:123

___

### toArray

▸ **toArray**(): `number`[]

Returns an array representation of the X and Y components.

#### Returns

`number`[]

#### Defined in

node_modules/@types/victor/index.d.ts:67

___

### toFixed

▸ **toFixed**(): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Rounds both axis to a certain precision.

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:343

___

### toObject

▸ **toObject**(): [`VictorCoordinates`](../interfaces/components_EdgeContainer._internal_.VictorCoordinates.md)

Returns an object representation of tha X and Y components.

#### Returns

[`VictorCoordinates`](../interfaces/components_EdgeContainer._internal_.VictorCoordinates.md)

#### Defined in

node_modules/@types/victor/index.d.ts:72

___

### toString

▸ **toString**(): `string`

Returns a string representation of the X and Y components.

#### Returns

`string`

#### Defined in

node_modules/@types/victor/index.d.ts:62

___

### unfloat

▸ **unfloat**(): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Rounds the components to integer numbers.

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:286

___

### verticalAngle

▸ **verticalAngle**(): `number`

Returns the angle towards Y in radians.

#### Returns

`number`

#### Defined in

node_modules/@types/victor/index.d.ts:447

___

### verticalAngleDeg

▸ **verticalAngleDeg**(): `number`

Same as verticalAngle but returns degrees.

#### Returns

`number`

#### Defined in

node_modules/@types/victor/index.d.ts:452

___

### zero

▸ **zero**(): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Sets the vector to zero (0,0).

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:348

___

### fromArray

▸ `Static` **fromArray**(`arr`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Creates vector from array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `number`[] | array An array that contains the X component in the first element and the Y component in the second |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:28

___

### fromObject

▸ `Static` **fromObject**(`obj`): [`Victor`](components_EdgeContainer._internal_.Victor.md)

Creates vector from object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`VictorCoordinates`](../interfaces/components_EdgeContainer._internal_.VictorCoordinates.md) | An object containing the X component in the x property and the Y component in the y property |

#### Returns

[`Victor`](components_EdgeContainer._internal_.Victor.md)

#### Defined in

node_modules/@types/victor/index.d.ts:34
