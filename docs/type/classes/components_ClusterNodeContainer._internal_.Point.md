[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Point

# Class: Point

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Point

The Point object represents a location in a two-dimensional coordinate system, where `x` represents
the position on the horizontal axis and `y` represents the position on the vertical axis

**`memberof`** PIXI

**`implements`** IPoint

## Hierarchy

- [`Point`](../interfaces/components_ClusterNodeContainer._internal_.Point-1.md)

- [`IPoint`](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md)

  ↳ **`Point`**

## Implements

- [`IPoint`](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Point.md#constructor)

### Properties

- [x](components_ClusterNodeContainer._internal_.Point.md#x)
- [y](components_ClusterNodeContainer._internal_.Point.md#y)

### Methods

- [clone](components_ClusterNodeContainer._internal_.Point.md#clone)
- [copyFrom](components_ClusterNodeContainer._internal_.Point.md#copyfrom)
- [copyTo](components_ClusterNodeContainer._internal_.Point.md#copyto)
- [equals](components_ClusterNodeContainer._internal_.Point.md#equals)
- [set](components_ClusterNodeContainer._internal_.Point.md#set)
- [toString](components_ClusterNodeContainer._internal_.Point.md#tostring)

## Constructors

### constructor

• **new Point**(`x?`, `y?`)

Creates a new `Point`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |

#### Inherited from

GlobalMixins.Point.constructor

#### Defined in

node_modules/@pixi/math/index.d.ts:668

## Properties

### x

• **x**: `number`

Position of the point on the x axis

#### Implementation of

[IPoint](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md).[x](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md#x)

#### Inherited from

[IPoint](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md).[x](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md#x)

#### Defined in

node_modules/@pixi/math/index.d.ts:661

___

### y

• **y**: `number`

Position of the point on the y axis

#### Implementation of

[IPoint](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md).[y](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md#y)

#### Inherited from

[IPoint](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md).[y](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md#y)

#### Defined in

node_modules/@pixi/math/index.d.ts:663

## Methods

### clone

▸ **clone**(): [`Point`](components_ClusterNodeContainer._internal_.Point.md)

Creates a clone of this point

#### Returns

[`Point`](components_ClusterNodeContainer._internal_.Point.md)

A clone of this point

#### Defined in

node_modules/@pixi/math/index.d.ts:672

___

### copyFrom

▸ **copyFrom**(`p`): [`Point`](components_ClusterNodeContainer._internal_.Point.md)

Copies `x` and `y` from the given point into this point

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | [`IPointData`](../interfaces/components_ClusterNodeContainer._internal_.IPointData.md) | The point to copy from |

#### Returns

[`Point`](components_ClusterNodeContainer._internal_.Point.md)

The point instance itself

#### Inherited from

[IPoint](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md).[copyFrom](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md#copyfrom)

#### Defined in

node_modules/@pixi/math/index.d.ts:679

___

### copyTo

▸ **copyTo**<`T`\>(`p`): `T`

Copies this point's x and y into the given point (`p`).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IPoint`](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `T` | The point to copy to. Can be any of type that is or extends `IPointData` |

#### Returns

`T`

The point (`p`) with values updated

#### Inherited from

[IPoint](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md).[copyTo](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md#copyto)

#### Defined in

node_modules/@pixi/math/index.d.ts:686

___

### equals

▸ **equals**(`p`): `boolean`

Accepts another point (`p`) and returns `true` if the given point is equal to this point

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | [`IPointData`](../interfaces/components_ClusterNodeContainer._internal_.IPointData.md) | The point to check |

#### Returns

`boolean`

Returns `true` if both `x` and `y` are equal

#### Inherited from

[IPoint](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md).[equals](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md#equals)

#### Defined in

node_modules/@pixi/math/index.d.ts:693

___

### set

▸ **set**(`x?`, `y?`): [`Point`](components_ClusterNodeContainer._internal_.Point.md)

Sets the point to a new `x` and `y` position.
If `y` is omitted, both `x` and `y` will be set to `x`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |

#### Returns

[`Point`](components_ClusterNodeContainer._internal_.Point.md)

The point instance itself

#### Inherited from

[IPoint](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md).[set](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md#set)

#### Defined in

node_modules/@pixi/math/index.d.ts:702

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@pixi/math/index.d.ts:703
