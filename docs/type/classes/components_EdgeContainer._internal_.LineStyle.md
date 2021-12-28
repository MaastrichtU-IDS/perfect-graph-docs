[perfect-graph](../README.md) / [Modules](../modules.md) / [components/EdgeContainer](../modules/components_EdgeContainer.md) / [<internal\>](../modules/components_EdgeContainer._internal_.md) / LineStyle

# Class: LineStyle

[components/EdgeContainer](../modules/components_EdgeContainer.md).[<internal>](../modules/components_EdgeContainer._internal_.md).LineStyle

Represents the line style for Graphics.

**`memberof`** PIXI

## Hierarchy

- [`FillStyle`](components_EdgeContainer._internal_.FillStyle.md)

  ↳ **`LineStyle`**

## Table of contents

### Constructors

- [constructor](components_EdgeContainer._internal_.LineStyle.md#constructor)

### Properties

- [alignment](components_EdgeContainer._internal_.LineStyle.md#alignment)
- [alpha](components_EdgeContainer._internal_.LineStyle.md#alpha)
- [cap](components_EdgeContainer._internal_.LineStyle.md#cap)
- [color](components_EdgeContainer._internal_.LineStyle.md#color)
- [join](components_EdgeContainer._internal_.LineStyle.md#join)
- [matrix](components_EdgeContainer._internal_.LineStyle.md#matrix)
- [miterLimit](components_EdgeContainer._internal_.LineStyle.md#miterlimit)
- [native](components_EdgeContainer._internal_.LineStyle.md#native)
- [texture](components_EdgeContainer._internal_.LineStyle.md#texture)
- [visible](components_EdgeContainer._internal_.LineStyle.md#visible)
- [width](components_EdgeContainer._internal_.LineStyle.md#width)

### Methods

- [clone](components_EdgeContainer._internal_.LineStyle.md#clone)
- [destroy](components_EdgeContainer._internal_.LineStyle.md#destroy)
- [reset](components_EdgeContainer._internal_.LineStyle.md#reset)

## Constructors

### constructor

• **new LineStyle**()

#### Inherited from

[FillStyle](components_EdgeContainer._internal_.FillStyle.md).[constructor](components_EdgeContainer._internal_.FillStyle.md#constructor)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:177

## Properties

### alignment

• **alignment**: `number`

The alignment of any lines drawn (0.5 = middle, 1 = outer, 0 = inner). WebGL only.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:1078

___

### alpha

• **alpha**: `number`

The alpha value used when filling the Graphics object.

#### Inherited from

[FillStyle](components_EdgeContainer._internal_.FillStyle.md).[alpha](components_EdgeContainer._internal_.FillStyle.md#alpha)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:160

___

### cap

• **cap**: [`LINE_CAP`](../enums/components_EdgeContainer._internal_.LINE_CAP.md)

Line cap style.

**`member`** {PIXI.LINE_CAP}

**`default`** PIXI.LINE_CAP.BUTT

#### Defined in

node_modules/@pixi/graphics/index.d.ts:1087

___

### color

• **color**: `number`

The hex color value used when coloring the Graphics object.

**`default`** 0xFFFFFF

#### Inherited from

[FillStyle](components_EdgeContainer._internal_.FillStyle.md).[color](components_EdgeContainer._internal_.FillStyle.md#color)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:158

___

### join

• **join**: [`LINE_JOIN`](../enums/components_EdgeContainer._internal_.LINE_JOIN.md)

Line join style.

**`member`** {PIXI.LINE_JOIN}

**`default`** PIXI.LINE_JOIN.MITER

#### Defined in

node_modules/@pixi/graphics/index.d.ts:1094

___

### matrix

• **matrix**: [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

The transform applied to the texture.

**`member`** {PIXI.Matrix}

**`default`** null

#### Inherited from

[FillStyle](components_EdgeContainer._internal_.FillStyle.md).[matrix](components_EdgeContainer._internal_.FillStyle.md#matrix)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:174

___

### miterLimit

• **miterLimit**: `number`

Miter limit.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:1096

___

### native

• **native**: `boolean`

If true the lines will be draw using LINES instead of TRIANGLE_STRIP

#### Defined in

node_modules/@pixi/graphics/index.d.ts:1080

___

### texture

• **texture**: [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>

The texture to be used for the fill.

**`member`** {PIXI.Texture}

**`default`** 0

#### Inherited from

[FillStyle](components_EdgeContainer._internal_.FillStyle.md).[texture](components_EdgeContainer._internal_.FillStyle.md#texture)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:167

___

### visible

• **visible**: `boolean`

If the current fill is visible.

#### Inherited from

[FillStyle](components_EdgeContainer._internal_.FillStyle.md).[visible](components_EdgeContainer._internal_.FillStyle.md#visible)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:176

___

### width

• **width**: `number`

The width (thickness) of any lines drawn.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:1076

## Methods

### clone

▸ **clone**(): [`LineStyle`](components_EdgeContainer._internal_.LineStyle.md)

Clones the object

#### Returns

[`LineStyle`](components_EdgeContainer._internal_.LineStyle.md)

#### Overrides

[FillStyle](components_EdgeContainer._internal_.FillStyle.md).[clone](components_EdgeContainer._internal_.FillStyle.md#clone)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:1102

___

### destroy

▸ **destroy**(): `void`

Destroy and don't use after this

#### Returns

`void`

#### Inherited from

[FillStyle](components_EdgeContainer._internal_.FillStyle.md).[destroy](components_EdgeContainer._internal_.FillStyle.md#destroy)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:191

___

### reset

▸ **reset**(): `void`

Reset the line style to default.

#### Returns

`void`

#### Overrides

[FillStyle](components_EdgeContainer._internal_.FillStyle.md).[reset](components_EdgeContainer._internal_.FillStyle.md#reset)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:1106
