[perfect-graph](../README.md) / [Modules](../modules.md) / [components/EdgeContainer](../modules/components_EdgeContainer.md) / [<internal\>](../modules/components_EdgeContainer._internal_.md) / RoundedRectangle

# Class: RoundedRectangle

[components/EdgeContainer](../modules/components_EdgeContainer.md).[<internal>](../modules/components_EdgeContainer._internal_.md).RoundedRectangle

The Rounded Rectangle object is an area that has nice rounded corners, as indicated by its
top-left corner point (x, y) and by its width and its height and its radius.

**`memberof`** PIXI

## Table of contents

### Constructors

- [constructor](components_EdgeContainer._internal_.RoundedRectangle.md#constructor)

### Properties

- [height](components_EdgeContainer._internal_.RoundedRectangle.md#height)
- [radius](components_EdgeContainer._internal_.RoundedRectangle.md#radius)
- [type](components_EdgeContainer._internal_.RoundedRectangle.md#type)
- [width](components_EdgeContainer._internal_.RoundedRectangle.md#width)
- [x](components_EdgeContainer._internal_.RoundedRectangle.md#x)
- [y](components_EdgeContainer._internal_.RoundedRectangle.md#y)

### Methods

- [clone](components_EdgeContainer._internal_.RoundedRectangle.md#clone)
- [contains](components_EdgeContainer._internal_.RoundedRectangle.md#contains)
- [toString](components_EdgeContainer._internal_.RoundedRectangle.md#tostring)

## Constructors

### constructor

• **new RoundedRectangle**(`x?`, `y?`, `width?`, `height?`, `radius?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |
| `width?` | `number` |
| `height?` | `number` |
| `radius?` | `number` |

#### Defined in

node_modules/@pixi/math/index.d.ts:891

## Properties

### height

• **height**: `number`

#### Defined in

node_modules/@pixi/math/index.d.ts:881

___

### radius

• **radius**: `number`

#### Defined in

node_modules/@pixi/math/index.d.ts:882

___

### type

• `Readonly` **type**: [`RREC`](../modules/components_EdgeContainer._internal_.md#rrec)

#### Defined in

node_modules/@pixi/math/index.d.ts:883

___

### width

• **width**: `number`

#### Defined in

node_modules/@pixi/math/index.d.ts:880

___

### x

• **x**: `number`

#### Defined in

node_modules/@pixi/math/index.d.ts:878

___

### y

• **y**: `number`

#### Defined in

node_modules/@pixi/math/index.d.ts:879

## Methods

### clone

▸ **clone**(): [`RoundedRectangle`](components_EdgeContainer._internal_.RoundedRectangle.md)

Creates a clone of this Rounded Rectangle

#### Returns

[`RoundedRectangle`](components_EdgeContainer._internal_.RoundedRectangle.md)

a copy of the rounded rectangle

#### Defined in

node_modules/@pixi/math/index.d.ts:897

___

### contains

▸ **contains**(`x`, `y`): `boolean`

Checks whether the x and y coordinates given are contained within this Rounded Rectangle

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The X coordinate of the point to test |
| `y` | `number` | The Y coordinate of the point to test |

#### Returns

`boolean`

Whether the x/y coordinates are within this Rounded Rectangle

#### Defined in

node_modules/@pixi/math/index.d.ts:905

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@pixi/math/index.d.ts:906
