[perfect-graph](../README.md) / [Modules](../modules.md) / [components/EdgeContainer](../modules/components_EdgeContainer.md) / [<internal\>](../modules/components_EdgeContainer._internal_.md) / FillStyle

# Class: FillStyle

[components/EdgeContainer](../modules/components_EdgeContainer.md).[<internal>](../modules/components_EdgeContainer._internal_.md).FillStyle

Fill style object for Graphics.

**`memberof`** PIXI

## Hierarchy

- **`FillStyle`**

  ↳ [`LineStyle`](components_EdgeContainer._internal_.LineStyle.md)

## Table of contents

### Constructors

- [constructor](components_EdgeContainer._internal_.FillStyle.md#constructor)

### Properties

- [alpha](components_EdgeContainer._internal_.FillStyle.md#alpha)
- [color](components_EdgeContainer._internal_.FillStyle.md#color)
- [matrix](components_EdgeContainer._internal_.FillStyle.md#matrix)
- [texture](components_EdgeContainer._internal_.FillStyle.md#texture)
- [visible](components_EdgeContainer._internal_.FillStyle.md#visible)

### Methods

- [clone](components_EdgeContainer._internal_.FillStyle.md#clone)
- [destroy](components_EdgeContainer._internal_.FillStyle.md#destroy)
- [reset](components_EdgeContainer._internal_.FillStyle.md#reset)

## Constructors

### constructor

• **new FillStyle**()

#### Defined in

node_modules/@pixi/graphics/index.d.ts:177

## Properties

### alpha

• **alpha**: `number`

The alpha value used when filling the Graphics object.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:160

___

### color

• **color**: `number`

The hex color value used when coloring the Graphics object.

**`default`** 0xFFFFFF

#### Defined in

node_modules/@pixi/graphics/index.d.ts:158

___

### matrix

• **matrix**: [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

The transform applied to the texture.

**`member`** {PIXI.Matrix}

**`default`** null

#### Defined in

node_modules/@pixi/graphics/index.d.ts:174

___

### texture

• **texture**: [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>

The texture to be used for the fill.

**`member`** {PIXI.Texture}

**`default`** 0

#### Defined in

node_modules/@pixi/graphics/index.d.ts:167

___

### visible

• **visible**: `boolean`

If the current fill is visible.

#### Defined in

node_modules/@pixi/graphics/index.d.ts:176

## Methods

### clone

▸ **clone**(): [`FillStyle`](components_EdgeContainer._internal_.FillStyle.md)

Clones the object

#### Returns

[`FillStyle`](components_EdgeContainer._internal_.FillStyle.md)

#### Defined in

node_modules/@pixi/graphics/index.d.ts:183

___

### destroy

▸ **destroy**(): `void`

Destroy and don't use after this

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:191

___

### reset

▸ **reset**(): `void`

Reset

#### Returns

`void`

#### Defined in

node_modules/@pixi/graphics/index.d.ts:187
