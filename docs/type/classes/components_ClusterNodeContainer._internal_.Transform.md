[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Transform

# Class: Transform

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Transform

Transform that takes care about its versions.

**`memberof`** PIXI

## Hierarchy

- [`Transform`](../interfaces/components_ClusterNodeContainer._internal_.Transform-1.md)

  ↳ **`Transform`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Transform.md#constructor)

### Properties

- [\_currentLocalID](components_ClusterNodeContainer._internal_.Transform.md#_currentlocalid)
- [\_cx](components_ClusterNodeContainer._internal_.Transform.md#_cx)
- [\_cy](components_ClusterNodeContainer._internal_.Transform.md#_cy)
- [\_localID](components_ClusterNodeContainer._internal_.Transform.md#_localid)
- [\_parentID](components_ClusterNodeContainer._internal_.Transform.md#_parentid)
- [\_rotation](components_ClusterNodeContainer._internal_.Transform.md#_rotation)
- [\_sx](components_ClusterNodeContainer._internal_.Transform.md#_sx)
- [\_sy](components_ClusterNodeContainer._internal_.Transform.md#_sy)
- [\_worldID](components_ClusterNodeContainer._internal_.Transform.md#_worldid)
- [localTransform](components_ClusterNodeContainer._internal_.Transform.md#localtransform)
- [pivot](components_ClusterNodeContainer._internal_.Transform.md#pivot)
- [position](components_ClusterNodeContainer._internal_.Transform.md#position)
- [scale](components_ClusterNodeContainer._internal_.Transform.md#scale)
- [skew](components_ClusterNodeContainer._internal_.Transform.md#skew)
- [worldTransform](components_ClusterNodeContainer._internal_.Transform.md#worldtransform)
- [IDENTITY](components_ClusterNodeContainer._internal_.Transform.md#identity)

### Accessors

- [rotation](components_ClusterNodeContainer._internal_.Transform.md#rotation)

### Methods

- [onChange](components_ClusterNodeContainer._internal_.Transform.md#onchange)
- [setFromMatrix](components_ClusterNodeContainer._internal_.Transform.md#setfrommatrix)
- [toString](components_ClusterNodeContainer._internal_.Transform.md#tostring)
- [updateLocalTransform](components_ClusterNodeContainer._internal_.Transform.md#updatelocaltransform)
- [updateSkew](components_ClusterNodeContainer._internal_.Transform.md#updateskew)
- [updateTransform](components_ClusterNodeContainer._internal_.Transform.md#updatetransform)

## Constructors

### constructor

• **new Transform**()

#### Inherited from

GlobalMixins.Transform.constructor

#### Defined in

node_modules/@pixi/math/index.d.ts:988

## Properties

### \_currentLocalID

• `Protected` **\_currentLocalID**: `number`

The locally unique ID of the local transform
used to calculate the current local transformation matrix.

#### Defined in

node_modules/@pixi/math/index.d.ts:987

___

### \_cx

• `Protected` **\_cx**: `number`

The X-coordinate value of the normalized local X axis,
the first column of the local transformation matrix without a scale.

#### Defined in

node_modules/@pixi/math/index.d.ts:965

___

### \_cy

• `Protected` **\_cy**: `number`

The X-coordinate value of the normalized local Y axis,
the second column of the local transformation matrix without a scale.

#### Defined in

node_modules/@pixi/math/index.d.ts:975

___

### \_localID

• `Protected` **\_localID**: `number`

The locally unique ID of the local transform.

#### Defined in

node_modules/@pixi/math/index.d.ts:982

___

### \_parentID

• **\_parentID**: `number`

The locally unique ID of the parent's world transform
used to calculate the current world transformation matrix.

#### Defined in

node_modules/@pixi/math/index.d.ts:956

___

### \_rotation

• `Protected` **\_rotation**: `number`

The rotation amount.

#### Defined in

node_modules/@pixi/math/index.d.ts:960

___

### \_sx

• `Protected` **\_sx**: `number`

The Y-coordinate value of the normalized local X axis,
the first column of the local transformation matrix without a scale.

#### Defined in

node_modules/@pixi/math/index.d.ts:970

___

### \_sy

• `Protected` **\_sy**: `number`

The Y-coordinate value of the normalized local Y axis,
the second column of the local transformation matrix without a scale.

#### Defined in

node_modules/@pixi/math/index.d.ts:980

___

### \_worldID

• **\_worldID**: `number`

The locally unique ID of the world transform.

#### Defined in

node_modules/@pixi/math/index.d.ts:958

___

### localTransform

• **localTransform**: [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

The local transformation matrix.

#### Defined in

node_modules/@pixi/math/index.d.ts:943

___

### pivot

• **pivot**: [`ObservablePoint`](components_ClusterNodeContainer._internal_.ObservablePoint.md)<`any`\>

The pivot point of the displayObject that it rotates around.

#### Defined in

node_modules/@pixi/math/index.d.ts:949

___

### position

• **position**: [`ObservablePoint`](components_ClusterNodeContainer._internal_.ObservablePoint.md)<`any`\>

The coordinate of the object relative to the local coordinates of the parent.

#### Defined in

node_modules/@pixi/math/index.d.ts:945

___

### scale

• **scale**: [`ObservablePoint`](components_ClusterNodeContainer._internal_.ObservablePoint.md)<`any`\>

The scale factor of the object.

#### Defined in

node_modules/@pixi/math/index.d.ts:947

___

### skew

• **skew**: [`ObservablePoint`](components_ClusterNodeContainer._internal_.ObservablePoint.md)<`any`\>

The skew amount, on the x and y axis.

#### Defined in

node_modules/@pixi/math/index.d.ts:951

___

### worldTransform

• **worldTransform**: [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

The world transformation matrix.

#### Defined in

node_modules/@pixi/math/index.d.ts:941

___

### IDENTITY

▪ `Static` `Readonly` **IDENTITY**: [`Transform`](components_ClusterNodeContainer._internal_.Transform.md)

A default (identity) transform.

#### Defined in

node_modules/@pixi/math/index.d.ts:939

## Accessors

### rotation

• `get` **rotation**(): `number`

The rotation of the object in radians.

#### Returns

`number`

#### Defined in

node_modules/@pixi/math/index.d.ts:1009

• `set` **rotation**(`value`): `void`

The rotation of the object in radians.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/math/index.d.ts:1010

## Methods

### onChange

▸ `Protected` **onChange**(): `void`

Called when a value changes.

#### Returns

`void`

#### Defined in

node_modules/@pixi/math/index.d.ts:990

___

### setFromMatrix

▸ **setFromMatrix**(`matrix`): `void`

Decomposes a matrix and sets the transforms properties based on it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrix` | [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md) | The matrix to decompose |

#### Returns

`void`

#### Defined in

node_modules/@pixi/math/index.d.ts:1007

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@pixi/math/index.d.ts:993

___

### updateLocalTransform

▸ **updateLocalTransform**(): `void`

Updates the local transformation matrix.

#### Returns

`void`

#### Defined in

node_modules/@pixi/math/index.d.ts:995

___

### updateSkew

▸ `Protected` **updateSkew**(): `void`

Called when the skew or the rotation changes.

#### Returns

`void`

#### Defined in

node_modules/@pixi/math/index.d.ts:992

___

### updateTransform

▸ **updateTransform**(`parentTransform`): `void`

Updates the local and the world transformation matrices.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parentTransform` | [`Transform`](components_ClusterNodeContainer._internal_.Transform.md) | The parent transform |

#### Returns

`void`

#### Defined in

node_modules/@pixi/math/index.d.ts:1001
