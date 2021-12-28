[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Rectangle

# Class: Rectangle

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Rectangle

Rectangle object is an area defined by its position, as indicated by its top-left corner
point (x, y) and by its width and its height.

**`memberof`** PIXI

## Hierarchy

- [`Rectangle`](../interfaces/components_ClusterNodeContainer._internal_.Rectangle-1.md)

  ↳ **`Rectangle`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Rectangle.md#constructor)

### Properties

- [height](components_ClusterNodeContainer._internal_.Rectangle.md#height)
- [type](components_ClusterNodeContainer._internal_.Rectangle.md#type)
- [width](components_ClusterNodeContainer._internal_.Rectangle.md#width)
- [x](components_ClusterNodeContainer._internal_.Rectangle.md#x)
- [y](components_ClusterNodeContainer._internal_.Rectangle.md#y)

### Accessors

- [bottom](components_ClusterNodeContainer._internal_.Rectangle.md#bottom)
- [left](components_ClusterNodeContainer._internal_.Rectangle.md#left)
- [right](components_ClusterNodeContainer._internal_.Rectangle.md#right)
- [top](components_ClusterNodeContainer._internal_.Rectangle.md#top)
- [EMPTY](components_ClusterNodeContainer._internal_.Rectangle.md#empty)

### Methods

- [ceil](components_ClusterNodeContainer._internal_.Rectangle.md#ceil)
- [clone](components_ClusterNodeContainer._internal_.Rectangle.md#clone)
- [contains](components_ClusterNodeContainer._internal_.Rectangle.md#contains)
- [copyFrom](components_ClusterNodeContainer._internal_.Rectangle.md#copyfrom)
- [copyTo](components_ClusterNodeContainer._internal_.Rectangle.md#copyto)
- [enlarge](components_ClusterNodeContainer._internal_.Rectangle.md#enlarge)
- [fit](components_ClusterNodeContainer._internal_.Rectangle.md#fit)
- [pad](components_ClusterNodeContainer._internal_.Rectangle.md#pad)
- [toString](components_ClusterNodeContainer._internal_.Rectangle.md#tostring)

## Constructors

### constructor

• **new Rectangle**(`x?`, `y?`, `width?`, `height?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |
| `width?` | `number` |
| `height?` | `number` |

#### Inherited from

GlobalMixins.Rectangle.constructor

#### Defined in

node_modules/@pixi/math/index.d.ts:774

## Properties

### height

• **height**: `number`

#### Defined in

node_modules/@pixi/math/index.d.ts:766

___

### type

• `Readonly` **type**: [`RECT`](../modules/components_ClusterNodeContainer._internal_.md#rect)

#### Defined in

node_modules/@pixi/math/index.d.ts:767

___

### width

• **width**: `number`

#### Defined in

node_modules/@pixi/math/index.d.ts:765

___

### x

• **x**: `number`

#### Defined in

node_modules/@pixi/math/index.d.ts:763

___

### y

• **y**: `number`

#### Defined in

node_modules/@pixi/math/index.d.ts:764

## Accessors

### bottom

• `get` **bottom**(): `number`

returns the bottom edge of the rectangle

**`member`** {number}

#### Returns

`number`

#### Defined in

node_modules/@pixi/math/index.d.ts:798

___

### left

• `get` **left**(): `number`

returns the left edge of the rectangle

**`member`** {number}

#### Returns

`number`

#### Defined in

node_modules/@pixi/math/index.d.ts:780

___

### right

• `get` **right**(): `number`

returns the right edge of the rectangle

**`member`** {number}

#### Returns

`number`

#### Defined in

node_modules/@pixi/math/index.d.ts:786

___

### top

• `get` **top**(): `number`

returns the top edge of the rectangle

**`member`** {number}

#### Returns

`number`

#### Defined in

node_modules/@pixi/math/index.d.ts:792

___

### EMPTY

• `Static` `get` **EMPTY**(): [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

A constant empty rectangle.

**`static`**

**`constant`**

**`member`** {PIXI.Rectangle}

#### Returns

[`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

An empty rectangle

#### Defined in

node_modules/@pixi/math/index.d.ts:807

## Methods

### ceil

▸ **ceil**(`resolution?`, `eps?`): [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

Enlarges rectangle that way its corners lie on grid

#### Parameters

| Name | Type |
| :------ | :------ |
| `resolution?` | `number` |
| `eps?` | `number` |

#### Returns

[`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

Returns itself.

#### Defined in

node_modules/@pixi/math/index.d.ts:859

___

### clone

▸ **clone**(): [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

Creates a clone of this Rectangle

#### Returns

[`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

a copy of the rectangle

#### Defined in

node_modules/@pixi/math/index.d.ts:813

___

### contains

▸ **contains**(`x`, `y`): `boolean`

Checks whether the x and y coordinates given are contained within this Rectangle

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The X coordinate of the point to test |
| `y` | `number` | The Y coordinate of the point to test |

#### Returns

`boolean`

Whether the x/y coordinates are within this Rectangle

#### Defined in

node_modules/@pixi/math/index.d.ts:835

___

### copyFrom

▸ **copyFrom**(`rectangle`): [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

Copies another rectangle to this one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rectangle` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) | The rectangle to copy from. |

#### Returns

[`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

Returns itself.

#### Defined in

node_modules/@pixi/math/index.d.ts:820

___

### copyTo

▸ **copyTo**(`rectangle`): [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

Copies this rectangle to another one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rectangle` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) | The rectangle to copy to. |

#### Returns

[`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

Returns given parameter.

#### Defined in

node_modules/@pixi/math/index.d.ts:827

___

### enlarge

▸ **enlarge**(`rectangle`): [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

Enlarges this rectangle to include the passed rectangle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rectangle` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) | The rectangle to include. |

#### Returns

[`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

Returns itself.

#### Defined in

node_modules/@pixi/math/index.d.ts:866

___

### fit

▸ **fit**(`rectangle`): [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

Fits this rectangle around the passed one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rectangle` | [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md) | The rectangle to fit. |

#### Returns

[`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

Returns itself.

#### Defined in

node_modules/@pixi/math/index.d.ts:851

___

### pad

▸ **pad**(`paddingX?`, `paddingY?`): [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

Pads the rectangle making it grow in all directions.
If paddingY is omitted, both paddingX and paddingY will be set to paddingX.

#### Parameters

| Name | Type |
| :------ | :------ |
| `paddingX?` | `number` |
| `paddingY?` | `number` |

#### Returns

[`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

Returns itself.

#### Defined in

node_modules/@pixi/math/index.d.ts:844

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@pixi/math/index.d.ts:867
