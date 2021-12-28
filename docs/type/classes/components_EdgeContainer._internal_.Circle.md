[perfect-graph](../README.md) / [Modules](../modules.md) / [components/EdgeContainer](../modules/components_EdgeContainer.md) / [<internal\>](../modules/components_EdgeContainer._internal_.md) / Circle

# Class: Circle

[components/EdgeContainer](../modules/components_EdgeContainer.md).[<internal>](../modules/components_EdgeContainer._internal_.md).Circle

The Circle object is used to help draw graphics and can also be used to specify a hit area for displayObjects.

**`memberof`** PIXI

## Table of contents

### Constructors

- [constructor](components_EdgeContainer._internal_.Circle.md#constructor)

### Properties

- [radius](components_EdgeContainer._internal_.Circle.md#radius)
- [type](components_EdgeContainer._internal_.Circle.md#type)
- [x](components_EdgeContainer._internal_.Circle.md#x)
- [y](components_EdgeContainer._internal_.Circle.md#y)

### Methods

- [clone](components_EdgeContainer._internal_.Circle.md#clone)
- [contains](components_EdgeContainer._internal_.Circle.md#contains)
- [getBounds](components_EdgeContainer._internal_.Circle.md#getbounds)
- [toString](components_EdgeContainer._internal_.Circle.md#tostring)

## Constructors

### constructor

• **new Circle**(`x?`, `y?`, `radius?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | The X coordinate of the center of this circle |
| `y?` | `number` | The Y coordinate of the center of this circle |
| `radius?` | `number` | The radius of the circle |

#### Defined in

node_modules/@pixi/math/index.d.ts:28

## Properties

### radius

• **radius**: `number`

**`default`** 1

#### Defined in

node_modules/@pixi/math/index.d.ts:15

___

### type

• `Readonly` **type**: [`CIRC`](../modules/components_EdgeContainer._internal_.md#circ)

The type of the object, mainly used to avoid `instanceof` checks

**`default`** PIXI.SHAPES.CIRC

**`see`** PIXI.SHAPES

#### Defined in

node_modules/@pixi/math/index.d.ts:22

___

### x

• **x**: `number`

**`default`** 0

#### Defined in

node_modules/@pixi/math/index.d.ts:11

___

### y

• **y**: `number`

**`default`** 0

#### Defined in

node_modules/@pixi/math/index.d.ts:13

## Methods

### clone

▸ **clone**(): [`Circle`](components_EdgeContainer._internal_.Circle.md)

Creates a clone of this Circle instance

#### Returns

[`Circle`](components_EdgeContainer._internal_.Circle.md)

A copy of the Circle

#### Defined in

node_modules/@pixi/math/index.d.ts:34

___

### contains

▸ **contains**(`x`, `y`): `boolean`

Checks whether the x and y coordinates given are contained within this circle

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The X coordinate of the point to test |
| `y` | `number` | The Y coordinate of the point to test |

#### Returns

`boolean`

Whether the x/y coordinates are within this Circle

#### Defined in

node_modules/@pixi/math/index.d.ts:42

___

### getBounds

▸ **getBounds**(): [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

Returns the framing rectangle of the circle as a Rectangle object

#### Returns

[`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

The framing rectangle

#### Defined in

node_modules/@pixi/math/index.d.ts:48

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@pixi/math/index.d.ts:49
