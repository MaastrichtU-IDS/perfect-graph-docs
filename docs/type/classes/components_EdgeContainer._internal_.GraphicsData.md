[perfect-graph](../README.md) / [Modules](../modules.md) / [components/EdgeContainer](../modules/components_EdgeContainer.md) / [<internal\>](../modules/components_EdgeContainer._internal_.md) / GraphicsData

# Class: GraphicsData

[components/EdgeContainer](../modules/components_EdgeContainer.md).[<internal>](../modules/components_EdgeContainer._internal_.md).GraphicsData

A class to contain data useful for Graphics objects

**`memberof`** PIXI

## Table of contents

### Constructors

- [constructor](components_EdgeContainer._internal_.GraphicsData.md#constructor)

### Properties

- [fillStyle](components_EdgeContainer._internal_.GraphicsData.md#fillstyle)
- [holes](components_EdgeContainer._internal_.GraphicsData.md#holes)
- [lineStyle](components_EdgeContainer._internal_.GraphicsData.md#linestyle)
- [matrix](components_EdgeContainer._internal_.GraphicsData.md#matrix)
- [points](components_EdgeContainer._internal_.GraphicsData.md#points)
- [shape](components_EdgeContainer._internal_.GraphicsData.md#shape)
- [type](components_EdgeContainer._internal_.GraphicsData.md#type)

### Methods

- [clone](components_EdgeContainer._internal_.GraphicsData.md#clone)
- [destroy](components_EdgeContainer._internal_.GraphicsData.md#destroy)

## Constructors

### constructor

• **new GraphicsData**(`shape`, `fillStyle?`, `lineStyle?`, `matrix?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`IShape`](../modules/components_EdgeContainer._internal_.md#ishape) | The shape object to draw. |
| `fillStyle?` | [`FillStyle`](components_EdgeContainer._internal_.FillStyle.md) | - |
| `lineStyle?` | [`LineStyle`](components_EdgeContainer._internal_.LineStyle.md) | - |
| `matrix?` | [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md) | - |

#### Defined in

node_modules/@pixi/graphics/index.d.ts:696

## Properties

### fillStyle

• **fillStyle**: [`FillStyle`](components_EdgeContainer._internal_.FillStyle.md)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:678

___

### holes

• **holes**: [`GraphicsData`](components_EdgeContainer._internal_.GraphicsData.md)[]

The collection of holes.

**`member`** {PIXI.GraphicsData[]}

#### Defined in

node_modules/@pixi/graphics/index.d.ts:688

___

### lineStyle

• **lineStyle**: [`LineStyle`](components_EdgeContainer._internal_.LineStyle.md)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:677

___

### matrix

• **matrix**: [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:679

___

### points

• **points**: `number`[]

The collection of points.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:682

___

### shape

• **shape**: [`IShape`](../modules/components_EdgeContainer._internal_.md#ishape)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:676

___

### type

• **type**: [`SHAPES`](../enums/components_EdgeContainer._internal_.SHAPES.md)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:680

## Methods

### clone

▸ **clone**(): [`GraphicsData`](components_EdgeContainer._internal_.GraphicsData.md)

Creates a new GraphicsData object with the same values as this one.

#### Returns

[`GraphicsData`](components_EdgeContainer._internal_.GraphicsData.md)

Cloned GraphicsData object

#### Defined in

node_modules/@pixi/graphics/index.d.ts:702

___

### destroy

▸ **destroy**(): `void`

Destroys the Graphics data.

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:707
