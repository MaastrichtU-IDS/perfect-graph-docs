[perfect-graph](../README.md) / [Modules](../modules.md) / [components/EdgeContainer](../modules/components_EdgeContainer.md) / [<internal\>](../modules/components_EdgeContainer._internal_.md) / Ellipse

# Class: Ellipse

[components/EdgeContainer](../modules/components_EdgeContainer.md).[<internal>](../modules/components_EdgeContainer._internal_.md).Ellipse

The Ellipse object is used to help draw graphics and can also be used to specify a hit area for displayObjects.

**`memberof`** PIXI

## Table of contents

### Constructors

- [constructor](components_EdgeContainer._internal_.Ellipse.md#constructor)

### Properties

- [height](components_EdgeContainer._internal_.Ellipse.md#height)
- [type](components_EdgeContainer._internal_.Ellipse.md#type)
- [width](components_EdgeContainer._internal_.Ellipse.md#width)
- [x](components_EdgeContainer._internal_.Ellipse.md#x)
- [y](components_EdgeContainer._internal_.Ellipse.md#y)

### Methods

- [clone](components_EdgeContainer._internal_.Ellipse.md#clone)
- [contains](components_EdgeContainer._internal_.Ellipse.md#contains)
- [getBounds](components_EdgeContainer._internal_.Ellipse.md#getbounds)
- [toString](components_EdgeContainer._internal_.Ellipse.md#tostring)

## Constructors

### constructor

• **new Ellipse**(`x?`, `y?`, `halfWidth?`, `halfHeight?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | The X coordinate of the center of this ellipse |
| `y?` | `number` | The Y coordinate of the center of this ellipse |
| `halfWidth?` | `number` | The half width of this ellipse |
| `halfHeight?` | `number` | The half height of this ellipse |

#### Defined in

node_modules/@pixi/math/index.d.ts:88

## Properties

### height

• **height**: `number`

**`default`** 0

#### Defined in

node_modules/@pixi/math/index.d.ts:74

___

### type

• `Readonly` **type**: [`ELIP`](../modules/components_EdgeContainer._internal_.md#elip)

The type of the object, mainly used to avoid `instanceof` checks

**`default`** PIXI.SHAPES.ELIP

**`see`** PIXI.SHAPES

#### Defined in

node_modules/@pixi/math/index.d.ts:81

___

### width

• **width**: `number`

**`default`** 0

#### Defined in

node_modules/@pixi/math/index.d.ts:72

___

### x

• **x**: `number`

**`default`** 0

#### Defined in

node_modules/@pixi/math/index.d.ts:68

___

### y

• **y**: `number`

**`default`** 0

#### Defined in

node_modules/@pixi/math/index.d.ts:70

## Methods

### clone

▸ **clone**(): [`Ellipse`](components_EdgeContainer._internal_.Ellipse.md)

Creates a clone of this Ellipse instance

#### Returns

[`Ellipse`](components_EdgeContainer._internal_.Ellipse.md)

A copy of the ellipse

#### Defined in

node_modules/@pixi/math/index.d.ts:94

___

### contains

▸ **contains**(`x`, `y`): `boolean`

Checks whether the x and y coordinates given are contained within this ellipse

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The X coordinate of the point to test |
| `y` | `number` | The Y coordinate of the point to test |

#### Returns

`boolean`

Whether the x/y coords are within this ellipse

#### Defined in

node_modules/@pixi/math/index.d.ts:102

___

### getBounds

▸ **getBounds**(): [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

Returns the framing rectangle of the ellipse as a Rectangle object

#### Returns

[`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

The framing rectangle

#### Defined in

node_modules/@pixi/math/index.d.ts:108

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@pixi/math/index.d.ts:109
