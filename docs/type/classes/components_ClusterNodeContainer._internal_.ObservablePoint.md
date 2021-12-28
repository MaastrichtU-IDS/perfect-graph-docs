[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / ObservablePoint

# Class: ObservablePoint<T\>

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).ObservablePoint

The ObservablePoint object represents a location in a two-dimensional coordinate system, where `x` represents
the position on the horizontal axis and `y` represents the position on the vertical axis.

An `ObservablePoint` is a point that triggers a callback when the point's position is changed.

**`memberof`** PIXI

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- [`Point`](../interfaces/components_ClusterNodeContainer._internal_.Point-1.md)

- [`IPoint`](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md)

  ↳ **`ObservablePoint`**

## Implements

- [`IPoint`](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.ObservablePoint.md#constructor)

### Properties

- [\_x](components_ClusterNodeContainer._internal_.ObservablePoint.md#_x)
- [\_y](components_ClusterNodeContainer._internal_.ObservablePoint.md#_y)
- [cb](components_ClusterNodeContainer._internal_.ObservablePoint.md#cb)
- [scope](components_ClusterNodeContainer._internal_.ObservablePoint.md#scope)

### Accessors

- [x](components_ClusterNodeContainer._internal_.ObservablePoint.md#x)
- [y](components_ClusterNodeContainer._internal_.ObservablePoint.md#y)

### Methods

- [clone](components_ClusterNodeContainer._internal_.ObservablePoint.md#clone)
- [copyFrom](components_ClusterNodeContainer._internal_.ObservablePoint.md#copyfrom)
- [copyTo](components_ClusterNodeContainer._internal_.ObservablePoint.md#copyto)
- [equals](components_ClusterNodeContainer._internal_.ObservablePoint.md#equals)
- [set](components_ClusterNodeContainer._internal_.ObservablePoint.md#set)
- [toString](components_ClusterNodeContainer._internal_.ObservablePoint.md#tostring)

## Constructors

### constructor

• **new ObservablePoint**<`T`\>(`cb`, `scope`, `x?`, `y?`)

Creates a new `ObservablePoint`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | () => `any` | callback function triggered when `x` and/or `y` are changed |
| `scope` | `T` | owner of callback |
| `x?` | `number` | - |
| `y?` | `number` | - |

#### Inherited from

GlobalMixins.Point.constructor

#### Defined in

node_modules/@pixi/math/index.d.ts:588

## Properties

### \_x

• **\_x**: `number`

#### Defined in

node_modules/@pixi/math/index.d.ts:578

___

### \_y

• **\_y**: `number`

#### Defined in

node_modules/@pixi/math/index.d.ts:579

___

### cb

• **cb**: () => `any`

#### Type declaration

▸ (): `any`

The callback function triggered when `x` and/or `y` are changed

##### Returns

`any`

#### Defined in

node_modules/@pixi/math/index.d.ts:575

___

### scope

• **scope**: `any`

The owner of the callback

#### Defined in

node_modules/@pixi/math/index.d.ts:577

## Accessors

### x

• `get` **x**(): `number`

Position of the observable point on the x axis.

#### Returns

`number`

#### Implementation of

[IPoint](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md).[x](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md#x)

#### Inherited from

IPoint.x

#### Defined in

node_modules/@pixi/math/index.d.ts:632

• `set` **x**(`value`): `void`

Position of the observable point on the x axis.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Implementation of

[IPoint](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md).[x](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md#x)

#### Inherited from

IPoint.x

#### Defined in

node_modules/@pixi/math/index.d.ts:633

___

### y

• `get` **y**(): `number`

Position of the observable point on the y axis.

#### Returns

`number`

#### Implementation of

[IPoint](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md).[y](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md#y)

#### Inherited from

IPoint.y

#### Defined in

node_modules/@pixi/math/index.d.ts:635

• `set` **y**(`value`): `void`

Position of the observable point on the y axis.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Implementation of

[IPoint](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md).[y](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md#y)

#### Inherited from

IPoint.y

#### Defined in

node_modules/@pixi/math/index.d.ts:636

## Methods

### clone

▸ **clone**(`cb?`, `scope?`): [`ObservablePoint`](components_ClusterNodeContainer._internal_.ObservablePoint.md)<`any`\>

Creates a clone of this point.
The callback and scope params can be overridden otherwise they will default
to the clone object's values.

**`override`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb?` | () => `any` | The callback function triggered when `x` and/or `y` are changed |
| `scope?` | `any` | The owner of the callback |

#### Returns

[`ObservablePoint`](components_ClusterNodeContainer._internal_.ObservablePoint.md)<`any`\>

a copy of this observable point

#### Defined in

node_modules/@pixi/math/index.d.ts:599

___

### copyFrom

▸ **copyFrom**(`p`): [`ObservablePoint`](components_ClusterNodeContainer._internal_.ObservablePoint.md)<`T`\>

Copies x and y from the given point (`p`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | [`IPointData`](../interfaces/components_ClusterNodeContainer._internal_.IPointData.md) | The point to copy from. Can be any of type that is or extends `IPointData` |

#### Returns

[`ObservablePoint`](components_ClusterNodeContainer._internal_.ObservablePoint.md)<`T`\>

The observable point instance itself

#### Inherited from

[IPoint](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md).[copyFrom](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md#copyfrom)

#### Defined in

node_modules/@pixi/math/index.d.ts:615

___

### copyTo

▸ **copyTo**<`T`\>(`p`): `T`

Copies this point's x and y into that of the given point (`p`)

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

node_modules/@pixi/math/index.d.ts:622

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

node_modules/@pixi/math/index.d.ts:629

___

### set

▸ **set**(`x?`, `y?`): [`ObservablePoint`](components_ClusterNodeContainer._internal_.ObservablePoint.md)<`T`\>

Sets the point to a new `x` and `y` position.
If `y` is omitted, both `x` and `y` will be set to `x`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |

#### Returns

[`ObservablePoint`](components_ClusterNodeContainer._internal_.ObservablePoint.md)<`T`\>

The observable point instance itself

#### Inherited from

[IPoint](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md).[set](../interfaces/components_ClusterNodeContainer._internal_.IPoint.md#set)

#### Defined in

node_modules/@pixi/math/index.d.ts:608

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@pixi/math/index.d.ts:630
