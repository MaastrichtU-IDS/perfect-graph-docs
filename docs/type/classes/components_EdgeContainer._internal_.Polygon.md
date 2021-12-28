[perfect-graph](../README.md) / [Modules](../modules.md) / [components/EdgeContainer](../modules/components_EdgeContainer.md) / [<internal\>](../modules/components_EdgeContainer._internal_.md) / Polygon

# Class: Polygon

[components/EdgeContainer](../modules/components_EdgeContainer.md).[<internal>](../modules/components_EdgeContainer._internal_.md).Polygon

A class to define a shape via user defined coordinates.

**`memberof`** PIXI

## Table of contents

### Constructors

- [constructor](components_EdgeContainer._internal_.Polygon.md#constructor)

### Properties

- [closeStroke](components_EdgeContainer._internal_.Polygon.md#closestroke)
- [points](components_EdgeContainer._internal_.Polygon.md#points)
- [type](components_EdgeContainer._internal_.Polygon.md#type)

### Methods

- [clone](components_EdgeContainer._internal_.Polygon.md#clone)
- [contains](components_EdgeContainer._internal_.Polygon.md#contains)
- [toString](components_EdgeContainer._internal_.Polygon.md#tostring)

## Constructors

### constructor

• **new Polygon**(`points`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | `number`[] \| [`IPointData`](../interfaces/components_ClusterNodeContainer._internal_.IPointData.md)[] |

#### Defined in

node_modules/@pixi/math/index.d.ts:716

• **new Polygon**(...`points`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...points` | `number`[] \| [`IPointData`](../interfaces/components_ClusterNodeContainer._internal_.IPointData.md)[] |

#### Defined in

node_modules/@pixi/math/index.d.ts:717

## Properties

### closeStroke

• **closeStroke**: `boolean`

#### Defined in

node_modules/@pixi/math/index.d.ts:714

___

### points

• **points**: `number`[]

#### Defined in

node_modules/@pixi/math/index.d.ts:713

___

### type

• `Readonly` **type**: [`POLY`](../modules/components_EdgeContainer._internal_.md#poly)

#### Defined in

node_modules/@pixi/math/index.d.ts:715

## Methods

### clone

▸ **clone**(): [`Polygon`](components_EdgeContainer._internal_.Polygon.md)

Creates a clone of this polygon

#### Returns

[`Polygon`](components_EdgeContainer._internal_.Polygon.md)

a copy of the polygon

#### Defined in

node_modules/@pixi/math/index.d.ts:723

___

### contains

▸ **contains**(`x`, `y`): `boolean`

Checks whether the x and y coordinates passed to this function are contained within this polygon

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The X coordinate of the point to test |
| `y` | `number` | The Y coordinate of the point to test |

#### Returns

`boolean`

Whether the x/y coordinates are within this polygon

#### Defined in

node_modules/@pixi/math/index.d.ts:731

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@pixi/math/index.d.ts:732
