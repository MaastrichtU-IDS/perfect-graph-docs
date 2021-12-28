[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / BitmapFont

# Class: BitmapFont

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).BitmapFont

BitmapFont represents a typeface available for use with the BitmapText class. Use the `install`
method for adding a font to be used.

**`memberof`** PIXI

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.BitmapFont.md#constructor)

### Properties

- [\_ownsTextures](components_ClusterNodeContainer._internal_.BitmapFont.md#_ownstextures)
- [chars](components_ClusterNodeContainer._internal_.BitmapFont.md#chars)
- [distanceFieldRange](components_ClusterNodeContainer._internal_.BitmapFont.md#distancefieldrange)
- [distanceFieldType](components_ClusterNodeContainer._internal_.BitmapFont.md#distancefieldtype)
- [font](components_ClusterNodeContainer._internal_.BitmapFont.md#font)
- [lineHeight](components_ClusterNodeContainer._internal_.BitmapFont.md#lineheight)
- [pageTextures](components_ClusterNodeContainer._internal_.BitmapFont.md#pagetextures)
- [size](components_ClusterNodeContainer._internal_.BitmapFont.md#size)
- [ALPHA](components_ClusterNodeContainer._internal_.BitmapFont.md#alpha)
- [ALPHANUMERIC](components_ClusterNodeContainer._internal_.BitmapFont.md#alphanumeric)
- [ASCII](components_ClusterNodeContainer._internal_.BitmapFont.md#ascii)
- [NUMERIC](components_ClusterNodeContainer._internal_.BitmapFont.md#numeric)
- [available](components_ClusterNodeContainer._internal_.BitmapFont.md#available)
- [defaultOptions](components_ClusterNodeContainer._internal_.BitmapFont.md#defaultoptions)

### Methods

- [destroy](components_ClusterNodeContainer._internal_.BitmapFont.md#destroy)
- [from](components_ClusterNodeContainer._internal_.BitmapFont.md#from)
- [install](components_ClusterNodeContainer._internal_.BitmapFont.md#install)
- [uninstall](components_ClusterNodeContainer._internal_.BitmapFont.md#uninstall)

## Constructors

### constructor

• **new BitmapFont**(`data`, `textures`, `ownsTextures?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`BitmapFontData`](components_ClusterNodeContainer._internal_.BitmapFontData.md) |  |
| `textures` | [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<[`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>\> \| [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>[] |  |
| `ownsTextures?` | `boolean` | Setting to `true` will destroy page textures        when the font is uninstalled. |

#### Defined in

node_modules/@pixi/text-bitmap/index.d.ts:86

## Properties

### \_ownsTextures

• `Private` **\_ownsTextures**: `any`

#### Defined in

node_modules/@pixi/text-bitmap/index.d.ts:79

___

### chars

• `Readonly` **chars**: [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<[`IBitmapFontCharacter`](../interfaces/components_ClusterNodeContainer._internal_.IBitmapFontCharacter.md)\>

The map of characters by character code.

#### Defined in

node_modules/@pixi/text-bitmap/index.d.ts:72

___

### distanceFieldRange

• `Readonly` **distanceFieldRange**: `number`

The range of the distance field in pixels.

#### Defined in

node_modules/@pixi/text-bitmap/index.d.ts:76

___

### distanceFieldType

• `Readonly` **distanceFieldType**: `string`

The kind of distance field for this font or "none".

#### Defined in

node_modules/@pixi/text-bitmap/index.d.ts:78

___

### font

• `Readonly` **font**: `string`

The name of the font face.

#### Defined in

node_modules/@pixi/text-bitmap/index.d.ts:66

___

### lineHeight

• `Readonly` **lineHeight**: `number`

The line-height of the font face in pixels.

#### Defined in

node_modules/@pixi/text-bitmap/index.d.ts:70

___

### pageTextures

• `Readonly` **pageTextures**: [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<[`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>\>

The map of base page textures (i.e., sheets of glyphs).

#### Defined in

node_modules/@pixi/text-bitmap/index.d.ts:74

___

### size

• `Readonly` **size**: `number`

The size of the font face in pixels.

#### Defined in

node_modules/@pixi/text-bitmap/index.d.ts:68

___

### ALPHA

▪ `Static` `Readonly` **ALPHA**: (`string` \| `string`[])[]

This character set includes all the letters in the alphabet (both lower- and upper- case).

**`example`**
BitmapFont.from("ExampleFont", style, { chars: BitmapFont.ALPHA })

#### Defined in

node_modules/@pixi/text-bitmap/index.d.ts:31

___

### ALPHANUMERIC

▪ `Static` `Readonly` **ALPHANUMERIC**: (`string` \| `string`[])[]

This character set is the union of `BitmapFont.ALPHA` and `BitmapFont.NUMERIC`.

#### Defined in

node_modules/@pixi/text-bitmap/index.d.ts:45

___

### ASCII

▪ `Static` `Readonly` **ASCII**: `string`[][]

This character set consists of all the ASCII table.

**`member`** {string[][]}

**`see`** http://www.asciitable.com/

#### Defined in

node_modules/@pixi/text-bitmap/index.d.ts:52

___

### NUMERIC

▪ `Static` `Readonly` **NUMERIC**: `string`[][]

This character set includes all decimal digits (from 0 to 9).

**`example`**
BitmapFont.from("ExampleFont", style, { chars: BitmapFont.NUMERIC })

#### Defined in

node_modules/@pixi/text-bitmap/index.d.ts:39

___

### available

▪ `Static` `Readonly` **available**: [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<[`BitmapFont`](components_ClusterNodeContainer._internal_.BitmapFont.md)\>

Collection of available/installed fonts.

#### Defined in

node_modules/@pixi/text-bitmap/index.d.ts:64

___

### defaultOptions

▪ `Static` `Readonly` **defaultOptions**: [`IBitmapFontOptions`](../interfaces/components_ClusterNodeContainer._internal_.IBitmapFontOptions.md)

Collection of default options when using `BitmapFont.from`.

**`property`** {number} resolution=1

**`property`** {number} textureWidth=512

**`property`** {number} textureHeight=512

**`property`** {number} padding=4

**`property`** {string|string[]|string[][]} chars = PIXI.BitmapFont.ALPHANUMERIC

#### Defined in

node_modules/@pixi/text-bitmap/index.d.ts:62

## Methods

### destroy

▸ **destroy**(): `void`

Remove references to created glyph textures.

#### Returns

`void`

#### Defined in

node_modules/@pixi/text-bitmap/index.d.ts:88

___

### from

▸ `Static` **from**(`name`, `textStyle?`, `options?`): [`BitmapFont`](components_ClusterNodeContainer._internal_.BitmapFont.md)

Generates a bitmap-font for the given style and character set. This does not support
kernings yet. With `style` properties, only the following non-layout properties are used:

- {@link PIXI.TextStyle#dropShadow|dropShadow}
- {@link PIXI.TextStyle#dropShadowDistance|dropShadowDistance}
- {@link PIXI.TextStyle#dropShadowColor|dropShadowColor}
- {@link PIXI.TextStyle#dropShadowBlur|dropShadowBlur}
- {@link PIXI.TextStyle#dropShadowAngle|dropShadowAngle}
- {@link PIXI.TextStyle#fill|fill}
- {@link PIXI.TextStyle#fillGradientStops|fillGradientStops}
- {@link PIXI.TextStyle#fillGradientType|fillGradientType}
- {@link PIXI.TextStyle#fontFamily|fontFamily}
- {@link PIXI.TextStyle#fontSize|fontSize}
- {@link PIXI.TextStyle#fontVariant|fontVariant}
- {@link PIXI.TextStyle#fontWeight|fontWeight}
- {@link PIXI.TextStyle#lineJoin|lineJoin}
- {@link PIXI.TextStyle#miterLimit|miterLimit}
- {@link PIXI.TextStyle#stroke|stroke}
- {@link PIXI.TextStyle#strokeThickness|strokeThickness}
- {@link PIXI.TextStyle#textBaseline|textBaseline}

**`example`**
PIXI.BitmapFont.from("TitleFont", {
    fontFamily: "Arial",
    fontSize: 12,
    strokeThickness: 2,
    fill: "purple"
});

const title = new PIXI.BitmapText("This is the title", { fontName: "TitleFont" });

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the custom font to use with BitmapText. |
| `textStyle?` | [`TextStyle`](components_ClusterNodeContainer._internal_.TextStyle.md) \| [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`ITextStyle`](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md)\> | - |
| `options?` | [`IBitmapFontOptions`](../interfaces/components_ClusterNodeContainer._internal_.IBitmapFontOptions.md) | Setup options for font or name of the font. |

#### Returns

[`BitmapFont`](components_ClusterNodeContainer._internal_.BitmapFont.md)

Font generated by style options.

#### Defined in

node_modules/@pixi/text-bitmap/index.d.ts:151

___

### install

▸ `Static` **install**(`data`, `textures`, `ownsTextures?`): [`BitmapFont`](components_ClusterNodeContainer._internal_.BitmapFont.md)

Register a new bitmap font.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` \| [`XMLDocument`](../modules/components_ClusterNodeContainer._internal_.md#xmldocument) \| [`BitmapFontData`](components_ClusterNodeContainer._internal_.BitmapFontData.md) | The        characters map that could be provided as xml or raw string. |
| `textures` | [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\> \| [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<[`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>\> \| [`Texture`](components_ClusterNodeContainer._internal_.Texture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>[] | List of textures for each page. |
| `ownsTextures?` | `boolean` | Set to `true` to destroy page textures        when the font is uninstalled. By default fonts created with        `BitmapFont.from` or from the `BitmapFontLoader` are `true`. |

#### Returns

[`BitmapFont`](components_ClusterNodeContainer._internal_.BitmapFont.md)

Result font object with font, size, lineHeight
        and char fields.

#### Defined in

node_modules/@pixi/text-bitmap/index.d.ts:101

___

### uninstall

▸ `Static` **uninstall**(`name`): `void`

Remove bitmap font by name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of the font to uninstall. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/text-bitmap/index.d.ts:107
