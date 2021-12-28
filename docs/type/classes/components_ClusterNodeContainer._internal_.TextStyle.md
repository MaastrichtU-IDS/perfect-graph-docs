[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / TextStyle

# Class: TextStyle

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).TextStyle

A TextStyle Object contains information to decorate a Text objects.

An instance can be shared between multiple Text objects; then changing the style will update all text objects using it.

A tool can be used to generate a text style [here](https://pixijs.io/pixi-text-style).

**`memberof`** PIXI

## Implements

- [`ITextStyle`](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.TextStyle.md#constructor)

### Properties

- [\_align](components_ClusterNodeContainer._internal_.TextStyle.md#_align)
- [\_breakWords](components_ClusterNodeContainer._internal_.TextStyle.md#_breakwords)
- [\_dropShadow](components_ClusterNodeContainer._internal_.TextStyle.md#_dropshadow)
- [\_dropShadowAlpha](components_ClusterNodeContainer._internal_.TextStyle.md#_dropshadowalpha)
- [\_dropShadowAngle](components_ClusterNodeContainer._internal_.TextStyle.md#_dropshadowangle)
- [\_dropShadowBlur](components_ClusterNodeContainer._internal_.TextStyle.md#_dropshadowblur)
- [\_dropShadowColor](components_ClusterNodeContainer._internal_.TextStyle.md#_dropshadowcolor)
- [\_dropShadowDistance](components_ClusterNodeContainer._internal_.TextStyle.md#_dropshadowdistance)
- [\_fill](components_ClusterNodeContainer._internal_.TextStyle.md#_fill)
- [\_fillGradientStops](components_ClusterNodeContainer._internal_.TextStyle.md#_fillgradientstops)
- [\_fillGradientType](components_ClusterNodeContainer._internal_.TextStyle.md#_fillgradienttype)
- [\_fontFamily](components_ClusterNodeContainer._internal_.TextStyle.md#_fontfamily)
- [\_fontSize](components_ClusterNodeContainer._internal_.TextStyle.md#_fontsize)
- [\_fontStyle](components_ClusterNodeContainer._internal_.TextStyle.md#_fontstyle)
- [\_fontVariant](components_ClusterNodeContainer._internal_.TextStyle.md#_fontvariant)
- [\_fontWeight](components_ClusterNodeContainer._internal_.TextStyle.md#_fontweight)
- [\_leading](components_ClusterNodeContainer._internal_.TextStyle.md#_leading)
- [\_letterSpacing](components_ClusterNodeContainer._internal_.TextStyle.md#_letterspacing)
- [\_lineHeight](components_ClusterNodeContainer._internal_.TextStyle.md#_lineheight)
- [\_lineJoin](components_ClusterNodeContainer._internal_.TextStyle.md#_linejoin)
- [\_miterLimit](components_ClusterNodeContainer._internal_.TextStyle.md#_miterlimit)
- [\_padding](components_ClusterNodeContainer._internal_.TextStyle.md#_padding)
- [\_stroke](components_ClusterNodeContainer._internal_.TextStyle.md#_stroke)
- [\_strokeThickness](components_ClusterNodeContainer._internal_.TextStyle.md#_strokethickness)
- [\_textBaseline](components_ClusterNodeContainer._internal_.TextStyle.md#_textbaseline)
- [\_trim](components_ClusterNodeContainer._internal_.TextStyle.md#_trim)
- [\_whiteSpace](components_ClusterNodeContainer._internal_.TextStyle.md#_whitespace)
- [\_wordWrap](components_ClusterNodeContainer._internal_.TextStyle.md#_wordwrap)
- [\_wordWrapWidth](components_ClusterNodeContainer._internal_.TextStyle.md#_wordwrapwidth)
- [styleID](components_ClusterNodeContainer._internal_.TextStyle.md#styleid)

### Accessors

- [align](components_ClusterNodeContainer._internal_.TextStyle.md#align)
- [breakWords](components_ClusterNodeContainer._internal_.TextStyle.md#breakwords)
- [dropShadow](components_ClusterNodeContainer._internal_.TextStyle.md#dropshadow)
- [dropShadowAlpha](components_ClusterNodeContainer._internal_.TextStyle.md#dropshadowalpha)
- [dropShadowAngle](components_ClusterNodeContainer._internal_.TextStyle.md#dropshadowangle)
- [dropShadowBlur](components_ClusterNodeContainer._internal_.TextStyle.md#dropshadowblur)
- [dropShadowColor](components_ClusterNodeContainer._internal_.TextStyle.md#dropshadowcolor)
- [dropShadowDistance](components_ClusterNodeContainer._internal_.TextStyle.md#dropshadowdistance)
- [fill](components_ClusterNodeContainer._internal_.TextStyle.md#fill)
- [fillGradientStops](components_ClusterNodeContainer._internal_.TextStyle.md#fillgradientstops)
- [fillGradientType](components_ClusterNodeContainer._internal_.TextStyle.md#fillgradienttype)
- [fontFamily](components_ClusterNodeContainer._internal_.TextStyle.md#fontfamily)
- [fontSize](components_ClusterNodeContainer._internal_.TextStyle.md#fontsize)
- [fontStyle](components_ClusterNodeContainer._internal_.TextStyle.md#fontstyle)
- [fontVariant](components_ClusterNodeContainer._internal_.TextStyle.md#fontvariant)
- [fontWeight](components_ClusterNodeContainer._internal_.TextStyle.md#fontweight)
- [leading](components_ClusterNodeContainer._internal_.TextStyle.md#leading)
- [letterSpacing](components_ClusterNodeContainer._internal_.TextStyle.md#letterspacing)
- [lineHeight](components_ClusterNodeContainer._internal_.TextStyle.md#lineheight)
- [lineJoin](components_ClusterNodeContainer._internal_.TextStyle.md#linejoin)
- [miterLimit](components_ClusterNodeContainer._internal_.TextStyle.md#miterlimit)
- [padding](components_ClusterNodeContainer._internal_.TextStyle.md#padding)
- [stroke](components_ClusterNodeContainer._internal_.TextStyle.md#stroke)
- [strokeThickness](components_ClusterNodeContainer._internal_.TextStyle.md#strokethickness)
- [textBaseline](components_ClusterNodeContainer._internal_.TextStyle.md#textbaseline)
- [trim](components_ClusterNodeContainer._internal_.TextStyle.md#trim)
- [whiteSpace](components_ClusterNodeContainer._internal_.TextStyle.md#whitespace)
- [wordWrap](components_ClusterNodeContainer._internal_.TextStyle.md#wordwrap)
- [wordWrapWidth](components_ClusterNodeContainer._internal_.TextStyle.md#wordwrapwidth)

### Methods

- [clone](components_ClusterNodeContainer._internal_.TextStyle.md#clone)
- [reset](components_ClusterNodeContainer._internal_.TextStyle.md#reset)
- [toFontString](components_ClusterNodeContainer._internal_.TextStyle.md#tofontstring)

## Constructors

### constructor

• **new TextStyle**(`style?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `style?` | [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`ITextStyle`](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md)\> |

#### Defined in

node_modules/@pixi/text/index.d.ts:523

## Properties

### \_align

• `Protected` **\_align**: [`TextStyleAlign`](../modules/components_ClusterNodeContainer._internal_.md#textstylealign)

#### Defined in

node_modules/@pixi/text/index.d.ts:446

___

### \_breakWords

• `Protected` **\_breakWords**: `boolean`

#### Defined in

node_modules/@pixi/text/index.d.ts:447

___

### \_dropShadow

• `Protected` **\_dropShadow**: `boolean`

#### Defined in

node_modules/@pixi/text/index.d.ts:448

___

### \_dropShadowAlpha

• `Protected` **\_dropShadowAlpha**: `number`

#### Defined in

node_modules/@pixi/text/index.d.ts:449

___

### \_dropShadowAngle

• `Protected` **\_dropShadowAngle**: `number`

#### Defined in

node_modules/@pixi/text/index.d.ts:450

___

### \_dropShadowBlur

• `Protected` **\_dropShadowBlur**: `number`

#### Defined in

node_modules/@pixi/text/index.d.ts:451

___

### \_dropShadowColor

• `Protected` **\_dropShadowColor**: `string` \| `number`

#### Defined in

node_modules/@pixi/text/index.d.ts:452

___

### \_dropShadowDistance

• `Protected` **\_dropShadowDistance**: `number`

#### Defined in

node_modules/@pixi/text/index.d.ts:453

___

### \_fill

• `Protected` **\_fill**: [`TextStyleFill`](../modules/components_ClusterNodeContainer._internal_.md#textstylefill)

#### Defined in

node_modules/@pixi/text/index.d.ts:454

___

### \_fillGradientStops

• `Protected` **\_fillGradientStops**: `number`[]

#### Defined in

node_modules/@pixi/text/index.d.ts:456

___

### \_fillGradientType

• `Protected` **\_fillGradientType**: [`TEXT_GRADIENT`](../enums/components_ClusterNodeContainer._internal_.TEXT_GRADIENT.md)

#### Defined in

node_modules/@pixi/text/index.d.ts:455

___

### \_fontFamily

• `Protected` **\_fontFamily**: `string` \| `string`[]

#### Defined in

node_modules/@pixi/text/index.d.ts:457

___

### \_fontSize

• `Protected` **\_fontSize**: `string` \| `number`

#### Defined in

node_modules/@pixi/text/index.d.ts:458

___

### \_fontStyle

• `Protected` **\_fontStyle**: [`TextStyleFontStyle`](../modules/components_ClusterNodeContainer._internal_.md#textstylefontstyle)

#### Defined in

node_modules/@pixi/text/index.d.ts:459

___

### \_fontVariant

• `Protected` **\_fontVariant**: [`TextStyleFontVariant`](../modules/components_ClusterNodeContainer._internal_.md#textstylefontvariant)

#### Defined in

node_modules/@pixi/text/index.d.ts:460

___

### \_fontWeight

• `Protected` **\_fontWeight**: [`TextStyleFontWeight`](../modules/components_ClusterNodeContainer._internal_.md#textstylefontweight)

#### Defined in

node_modules/@pixi/text/index.d.ts:461

___

### \_leading

• `Protected` **\_leading**: `number`

#### Defined in

node_modules/@pixi/text/index.d.ts:474

___

### \_letterSpacing

• `Protected` **\_letterSpacing**: `number`

#### Defined in

node_modules/@pixi/text/index.d.ts:462

___

### \_lineHeight

• `Protected` **\_lineHeight**: `number`

#### Defined in

node_modules/@pixi/text/index.d.ts:463

___

### \_lineJoin

• `Protected` **\_lineJoin**: [`TextStyleLineJoin`](../modules/components_ClusterNodeContainer._internal_.md#textstylelinejoin)

#### Defined in

node_modules/@pixi/text/index.d.ts:464

___

### \_miterLimit

• `Protected` **\_miterLimit**: `number`

#### Defined in

node_modules/@pixi/text/index.d.ts:465

___

### \_padding

• `Protected` **\_padding**: `number`

#### Defined in

node_modules/@pixi/text/index.d.ts:466

___

### \_stroke

• `Protected` **\_stroke**: `string` \| `number`

#### Defined in

node_modules/@pixi/text/index.d.ts:467

___

### \_strokeThickness

• `Protected` **\_strokeThickness**: `number`

#### Defined in

node_modules/@pixi/text/index.d.ts:468

___

### \_textBaseline

• `Protected` **\_textBaseline**: [`TextStyleTextBaseline`](../modules/components_ClusterNodeContainer._internal_.md#textstyletextbaseline)

#### Defined in

node_modules/@pixi/text/index.d.ts:469

___

### \_trim

• `Protected` **\_trim**: `boolean`

#### Defined in

node_modules/@pixi/text/index.d.ts:470

___

### \_whiteSpace

• `Protected` **\_whiteSpace**: [`TextStyleWhiteSpace`](../modules/components_ClusterNodeContainer._internal_.md#textstylewhitespace)

#### Defined in

node_modules/@pixi/text/index.d.ts:471

___

### \_wordWrap

• `Protected` **\_wordWrap**: `boolean`

#### Defined in

node_modules/@pixi/text/index.d.ts:472

___

### \_wordWrapWidth

• `Protected` **\_wordWrapWidth**: `number`

#### Defined in

node_modules/@pixi/text/index.d.ts:473

___

### styleID

• **styleID**: `number`

#### Defined in

node_modules/@pixi/text/index.d.ts:445

## Accessors

### align

• `get` **align**(): [`TextStyleAlign`](../modules/components_ClusterNodeContainer._internal_.md#textstylealign)

Alignment for multiline text ('left', 'center' or 'right'), does not affect single line text

**`member`** {string}

#### Returns

[`TextStyleAlign`](../modules/components_ClusterNodeContainer._internal_.md#textstylealign)

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[align](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#align)

#### Defined in

node_modules/@pixi/text/index.d.ts:538

• `set` **align**(`align`): `void`

Alignment for multiline text ('left', 'center' or 'right'), does not affect single line text

**`member`** {string}

#### Parameters

| Name | Type |
| :------ | :------ |
| `align` | [`TextStyleAlign`](../modules/components_ClusterNodeContainer._internal_.md#textstylealign) |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[align](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#align)

#### Defined in

node_modules/@pixi/text/index.d.ts:539

___

### breakWords

• `get` **breakWords**(): `boolean`

Indicates if lines can be wrapped within words, it needs wordWrap to be set to true.

#### Returns

`boolean`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[breakWords](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#breakwords)

#### Defined in

node_modules/@pixi/text/index.d.ts:541

• `set` **breakWords**(`breakWords`): `void`

Indicates if lines can be wrapped within words, it needs wordWrap to be set to true.

#### Parameters

| Name | Type |
| :------ | :------ |
| `breakWords` | `boolean` |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[breakWords](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#breakwords)

#### Defined in

node_modules/@pixi/text/index.d.ts:542

___

### dropShadow

• `get` **dropShadow**(): `boolean`

Set a drop shadow for the text.

#### Returns

`boolean`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[dropShadow](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#dropshadow)

#### Defined in

node_modules/@pixi/text/index.d.ts:544

• `set` **dropShadow**(`dropShadow`): `void`

Set a drop shadow for the text.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dropShadow` | `boolean` |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[dropShadow](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#dropshadow)

#### Defined in

node_modules/@pixi/text/index.d.ts:545

___

### dropShadowAlpha

• `get` **dropShadowAlpha**(): `number`

Set alpha for the drop shadow.

#### Returns

`number`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[dropShadowAlpha](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#dropshadowalpha)

#### Defined in

node_modules/@pixi/text/index.d.ts:547

• `set` **dropShadowAlpha**(`dropShadowAlpha`): `void`

Set alpha for the drop shadow.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dropShadowAlpha` | `number` |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[dropShadowAlpha](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#dropshadowalpha)

#### Defined in

node_modules/@pixi/text/index.d.ts:548

___

### dropShadowAngle

• `get` **dropShadowAngle**(): `number`

Set a angle of the drop shadow.

#### Returns

`number`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[dropShadowAngle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#dropshadowangle)

#### Defined in

node_modules/@pixi/text/index.d.ts:550

• `set` **dropShadowAngle**(`dropShadowAngle`): `void`

Set a angle of the drop shadow.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dropShadowAngle` | `number` |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[dropShadowAngle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#dropshadowangle)

#### Defined in

node_modules/@pixi/text/index.d.ts:551

___

### dropShadowBlur

• `get` **dropShadowBlur**(): `number`

Set a shadow blur radius.

#### Returns

`number`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[dropShadowBlur](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#dropshadowblur)

#### Defined in

node_modules/@pixi/text/index.d.ts:553

• `set` **dropShadowBlur**(`dropShadowBlur`): `void`

Set a shadow blur radius.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dropShadowBlur` | `number` |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[dropShadowBlur](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#dropshadowblur)

#### Defined in

node_modules/@pixi/text/index.d.ts:554

___

### dropShadowColor

• `get` **dropShadowColor**(): `string` \| `number`

A fill style to be used on the dropshadow e.g 'red', '#00FF00'.

#### Returns

`string` \| `number`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[dropShadowColor](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#dropshadowcolor)

#### Defined in

node_modules/@pixi/text/index.d.ts:556

• `set` **dropShadowColor**(`dropShadowColor`): `void`

A fill style to be used on the dropshadow e.g 'red', '#00FF00'.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dropShadowColor` | `string` \| `number` |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[dropShadowColor](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#dropshadowcolor)

#### Defined in

node_modules/@pixi/text/index.d.ts:557

___

### dropShadowDistance

• `get` **dropShadowDistance**(): `number`

Set a distance of the drop shadow.

#### Returns

`number`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[dropShadowDistance](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#dropshadowdistance)

#### Defined in

node_modules/@pixi/text/index.d.ts:559

• `set` **dropShadowDistance**(`dropShadowDistance`): `void`

Set a distance of the drop shadow.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dropShadowDistance` | `number` |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[dropShadowDistance](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#dropshadowdistance)

#### Defined in

node_modules/@pixi/text/index.d.ts:560

___

### fill

• `get` **fill**(): [`TextStyleFill`](../modules/components_ClusterNodeContainer._internal_.md#textstylefill)

A canvas fillstyle that will be used on the text e.g 'red', '#00FF00'.

Can be an array to create a gradient eg ['#000000','#FFFFFF']
[MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle)

**`member`** {string|string[]|number|number[]|CanvasGradient|CanvasPattern}

#### Returns

[`TextStyleFill`](../modules/components_ClusterNodeContainer._internal_.md#textstylefill)

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[fill](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#fill)

#### Defined in

node_modules/@pixi/text/index.d.ts:569

• `set` **fill**(`fill`): `void`

A canvas fillstyle that will be used on the text e.g 'red', '#00FF00'.

Can be an array to create a gradient eg ['#000000','#FFFFFF']
[MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle)

**`member`** {string|string[]|number|number[]|CanvasGradient|CanvasPattern}

#### Parameters

| Name | Type |
| :------ | :------ |
| `fill` | [`TextStyleFill`](../modules/components_ClusterNodeContainer._internal_.md#textstylefill) |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[fill](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#fill)

#### Defined in

node_modules/@pixi/text/index.d.ts:570

___

### fillGradientStops

• `get` **fillGradientStops**(): `number`[]

If fill is an array of colours to create a gradient, this array can set the stop points
(numbers between 0 and 1) for the color, overriding the default behaviour of evenly spacing them.

#### Returns

`number`[]

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[fillGradientStops](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#fillgradientstops)

#### Defined in

node_modules/@pixi/text/index.d.ts:582

• `set` **fillGradientStops**(`fillGradientStops`): `void`

If fill is an array of colours to create a gradient, this array can set the stop points
(numbers between 0 and 1) for the color, overriding the default behaviour of evenly spacing them.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fillGradientStops` | `number`[] |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[fillGradientStops](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#fillgradientstops)

#### Defined in

node_modules/@pixi/text/index.d.ts:583

___

### fillGradientType

• `get` **fillGradientType**(): [`TEXT_GRADIENT`](../enums/components_ClusterNodeContainer._internal_.TEXT_GRADIENT.md)

If fill is an array of colours to create a gradient, this can change the type/direction of the gradient.

**`see`** PIXI.TEXT_GRADIENT

#### Returns

[`TEXT_GRADIENT`](../enums/components_ClusterNodeContainer._internal_.TEXT_GRADIENT.md)

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[fillGradientType](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#fillgradienttype)

#### Defined in

node_modules/@pixi/text/index.d.ts:576

• `set` **fillGradientType**(`fillGradientType`): `void`

If fill is an array of colours to create a gradient, this can change the type/direction of the gradient.

**`see`** PIXI.TEXT_GRADIENT

#### Parameters

| Name | Type |
| :------ | :------ |
| `fillGradientType` | [`TEXT_GRADIENT`](../enums/components_ClusterNodeContainer._internal_.TEXT_GRADIENT.md) |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[fillGradientType](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#fillgradienttype)

#### Defined in

node_modules/@pixi/text/index.d.ts:577

___

### fontFamily

• `get` **fontFamily**(): `string` \| `string`[]

The font family.

#### Returns

`string` \| `string`[]

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[fontFamily](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#fontfamily)

#### Defined in

node_modules/@pixi/text/index.d.ts:585

• `set` **fontFamily**(`fontFamily`): `void`

The font family.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontFamily` | `string` \| `string`[] |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[fontFamily](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#fontfamily)

#### Defined in

node_modules/@pixi/text/index.d.ts:586

___

### fontSize

• `get` **fontSize**(): `string` \| `number`

The font size
(as a number it converts to px, but as a string, equivalents are '26px','20pt','160%' or '1.6em')

#### Returns

`string` \| `number`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[fontSize](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#fontsize)

#### Defined in

node_modules/@pixi/text/index.d.ts:591

• `set` **fontSize**(`fontSize`): `void`

The font size
(as a number it converts to px, but as a string, equivalents are '26px','20pt','160%' or '1.6em')

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontSize` | `string` \| `number` |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[fontSize](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#fontsize)

#### Defined in

node_modules/@pixi/text/index.d.ts:592

___

### fontStyle

• `get` **fontStyle**(): [`TextStyleFontStyle`](../modules/components_ClusterNodeContainer._internal_.md#textstylefontstyle)

The font style
('normal', 'italic' or 'oblique')

**`member`** {string}

#### Returns

[`TextStyleFontStyle`](../modules/components_ClusterNodeContainer._internal_.md#textstylefontstyle)

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[fontStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#fontstyle)

#### Defined in

node_modules/@pixi/text/index.d.ts:599

• `set` **fontStyle**(`fontStyle`): `void`

The font style
('normal', 'italic' or 'oblique')

**`member`** {string}

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontStyle` | [`TextStyleFontStyle`](../modules/components_ClusterNodeContainer._internal_.md#textstylefontstyle) |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[fontStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#fontstyle)

#### Defined in

node_modules/@pixi/text/index.d.ts:600

___

### fontVariant

• `get` **fontVariant**(): [`TextStyleFontVariant`](../modules/components_ClusterNodeContainer._internal_.md#textstylefontvariant)

The font variant
('normal' or 'small-caps')

**`member`** {string}

#### Returns

[`TextStyleFontVariant`](../modules/components_ClusterNodeContainer._internal_.md#textstylefontvariant)

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[fontVariant](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#fontvariant)

#### Defined in

node_modules/@pixi/text/index.d.ts:607

• `set` **fontVariant**(`fontVariant`): `void`

The font variant
('normal' or 'small-caps')

**`member`** {string}

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontVariant` | [`TextStyleFontVariant`](../modules/components_ClusterNodeContainer._internal_.md#textstylefontvariant) |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[fontVariant](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#fontvariant)

#### Defined in

node_modules/@pixi/text/index.d.ts:608

___

### fontWeight

• `get` **fontWeight**(): [`TextStyleFontWeight`](../modules/components_ClusterNodeContainer._internal_.md#textstylefontweight)

The font weight
('normal', 'bold', 'bolder', 'lighter' and '100', '200', '300', '400', '500', '600', '700', 800' or '900')

**`member`** {string}

#### Returns

[`TextStyleFontWeight`](../modules/components_ClusterNodeContainer._internal_.md#textstylefontweight)

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[fontWeight](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#fontweight)

#### Defined in

node_modules/@pixi/text/index.d.ts:615

• `set` **fontWeight**(`fontWeight`): `void`

The font weight
('normal', 'bold', 'bolder', 'lighter' and '100', '200', '300', '400', '500', '600', '700', 800' or '900')

**`member`** {string}

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontWeight` | [`TextStyleFontWeight`](../modules/components_ClusterNodeContainer._internal_.md#textstylefontweight) |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[fontWeight](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#fontweight)

#### Defined in

node_modules/@pixi/text/index.d.ts:616

___

### leading

• `get` **leading**(): `number`

The space between lines.

#### Returns

`number`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[leading](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#leading)

#### Defined in

node_modules/@pixi/text/index.d.ts:624

• `set` **leading**(`leading`): `void`

The space between lines.

#### Parameters

| Name | Type |
| :------ | :------ |
| `leading` | `number` |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[leading](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#leading)

#### Defined in

node_modules/@pixi/text/index.d.ts:625

___

### letterSpacing

• `get` **letterSpacing**(): `number`

The amount of spacing between letters, default is 0.

#### Returns

`number`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[letterSpacing](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#letterspacing)

#### Defined in

node_modules/@pixi/text/index.d.ts:618

• `set` **letterSpacing**(`letterSpacing`): `void`

The amount of spacing between letters, default is 0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `letterSpacing` | `number` |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[letterSpacing](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#letterspacing)

#### Defined in

node_modules/@pixi/text/index.d.ts:619

___

### lineHeight

• `get` **lineHeight**(): `number`

The line height, a number that represents the vertical space that a letter uses.

#### Returns

`number`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[lineHeight](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#lineheight)

#### Defined in

node_modules/@pixi/text/index.d.ts:621

• `set` **lineHeight**(`lineHeight`): `void`

The line height, a number that represents the vertical space that a letter uses.

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineHeight` | `number` |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[lineHeight](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#lineheight)

#### Defined in

node_modules/@pixi/text/index.d.ts:622

___

### lineJoin

• `get` **lineJoin**(): [`TextStyleLineJoin`](../modules/components_ClusterNodeContainer._internal_.md#textstylelinejoin)

The lineJoin property sets the type of corner created, it can resolve spiked text issues.
Default is 'miter' (creates a sharp corner).

**`member`** {string}

#### Returns

[`TextStyleLineJoin`](../modules/components_ClusterNodeContainer._internal_.md#textstylelinejoin)

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[lineJoin](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#linejoin)

#### Defined in

node_modules/@pixi/text/index.d.ts:632

• `set` **lineJoin**(`lineJoin`): `void`

The lineJoin property sets the type of corner created, it can resolve spiked text issues.
Default is 'miter' (creates a sharp corner).

**`member`** {string}

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineJoin` | [`TextStyleLineJoin`](../modules/components_ClusterNodeContainer._internal_.md#textstylelinejoin) |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[lineJoin](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#linejoin)

#### Defined in

node_modules/@pixi/text/index.d.ts:633

___

### miterLimit

• `get` **miterLimit**(): `number`

The miter limit to use when using the 'miter' lineJoin mode.

This can reduce or increase the spikiness of rendered text.

#### Returns

`number`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[miterLimit](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#miterlimit)

#### Defined in

node_modules/@pixi/text/index.d.ts:639

• `set` **miterLimit**(`miterLimit`): `void`

The miter limit to use when using the 'miter' lineJoin mode.

This can reduce or increase the spikiness of rendered text.

#### Parameters

| Name | Type |
| :------ | :------ |
| `miterLimit` | `number` |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[miterLimit](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#miterlimit)

#### Defined in

node_modules/@pixi/text/index.d.ts:640

___

### padding

• `get` **padding**(): `number`

Occasionally some fonts are cropped. Adding some padding will prevent this from happening
by adding padding to all sides of the text.

#### Returns

`number`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[padding](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#padding)

#### Defined in

node_modules/@pixi/text/index.d.ts:645

• `set` **padding**(`padding`): `void`

Occasionally some fonts are cropped. Adding some padding will prevent this from happening
by adding padding to all sides of the text.

#### Parameters

| Name | Type |
| :------ | :------ |
| `padding` | `number` |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[padding](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#padding)

#### Defined in

node_modules/@pixi/text/index.d.ts:646

___

### stroke

• `get` **stroke**(): `string` \| `number`

A canvas fillstyle that will be used on the text stroke
e.g 'blue', '#FCFF00'

#### Returns

`string` \| `number`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[stroke](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#stroke)

#### Defined in

node_modules/@pixi/text/index.d.ts:651

• `set` **stroke**(`stroke`): `void`

A canvas fillstyle that will be used on the text stroke
e.g 'blue', '#FCFF00'

#### Parameters

| Name | Type |
| :------ | :------ |
| `stroke` | `string` \| `number` |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[stroke](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#stroke)

#### Defined in

node_modules/@pixi/text/index.d.ts:652

___

### strokeThickness

• `get` **strokeThickness**(): `number`

A number that represents the thickness of the stroke.

**`default`** 0

#### Returns

`number`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[strokeThickness](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#strokethickness)

#### Defined in

node_modules/@pixi/text/index.d.ts:658

• `set` **strokeThickness**(`strokeThickness`): `void`

A number that represents the thickness of the stroke.

**`default`** 0

#### Parameters

| Name | Type |
| :------ | :------ |
| `strokeThickness` | `number` |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[strokeThickness](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#strokethickness)

#### Defined in

node_modules/@pixi/text/index.d.ts:659

___

### textBaseline

• `get` **textBaseline**(): [`TextStyleTextBaseline`](../modules/components_ClusterNodeContainer._internal_.md#textstyletextbaseline)

The baseline of the text that is rendered.

**`member`** {string}

#### Returns

[`TextStyleTextBaseline`](../modules/components_ClusterNodeContainer._internal_.md#textstyletextbaseline)

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[textBaseline](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#textbaseline)

#### Defined in

node_modules/@pixi/text/index.d.ts:665

• `set` **textBaseline**(`textBaseline`): `void`

The baseline of the text that is rendered.

**`member`** {string}

#### Parameters

| Name | Type |
| :------ | :------ |
| `textBaseline` | [`TextStyleTextBaseline`](../modules/components_ClusterNodeContainer._internal_.md#textstyletextbaseline) |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[textBaseline](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#textbaseline)

#### Defined in

node_modules/@pixi/text/index.d.ts:666

___

### trim

• `get` **trim**(): `boolean`

Trim transparent borders.

#### Returns

`boolean`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[trim](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#trim)

#### Defined in

node_modules/@pixi/text/index.d.ts:668

• `set` **trim**(`trim`): `void`

Trim transparent borders.

#### Parameters

| Name | Type |
| :------ | :------ |
| `trim` | `boolean` |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[trim](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#trim)

#### Defined in

node_modules/@pixi/text/index.d.ts:669

___

### whiteSpace

• `get` **whiteSpace**(): [`TextStyleWhiteSpace`](../modules/components_ClusterNodeContainer._internal_.md#textstylewhitespace)

How newlines and spaces should be handled.
Default is 'pre' (preserve, preserve).

 value       | New lines     |   Spaces
 ---         | ---           |   ---
'normal'     | Collapse      |   Collapse
'pre'        | Preserve      |   Preserve
'pre-line'   | Preserve      |   Collapse

**`member`** {string}

#### Returns

[`TextStyleWhiteSpace`](../modules/components_ClusterNodeContainer._internal_.md#textstylewhitespace)

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[whiteSpace](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#whitespace)

#### Defined in

node_modules/@pixi/text/index.d.ts:682

• `set` **whiteSpace**(`whiteSpace`): `void`

How newlines and spaces should be handled.
Default is 'pre' (preserve, preserve).

 value       | New lines     |   Spaces
 ---         | ---           |   ---
'normal'     | Collapse      |   Collapse
'pre'        | Preserve      |   Preserve
'pre-line'   | Preserve      |   Collapse

**`member`** {string}

#### Parameters

| Name | Type |
| :------ | :------ |
| `whiteSpace` | [`TextStyleWhiteSpace`](../modules/components_ClusterNodeContainer._internal_.md#textstylewhitespace) |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[whiteSpace](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#whitespace)

#### Defined in

node_modules/@pixi/text/index.d.ts:683

___

### wordWrap

• `get` **wordWrap**(): `boolean`

Indicates if word wrap should be used.

#### Returns

`boolean`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[wordWrap](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#wordwrap)

#### Defined in

node_modules/@pixi/text/index.d.ts:685

• `set` **wordWrap**(`wordWrap`): `void`

Indicates if word wrap should be used.

#### Parameters

| Name | Type |
| :------ | :------ |
| `wordWrap` | `boolean` |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[wordWrap](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#wordwrap)

#### Defined in

node_modules/@pixi/text/index.d.ts:686

___

### wordWrapWidth

• `get` **wordWrapWidth**(): `number`

The width at which text will wrap, it needs wordWrap to be set to true.

#### Returns

`number`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[wordWrapWidth](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#wordwrapwidth)

#### Defined in

node_modules/@pixi/text/index.d.ts:688

• `set` **wordWrapWidth**(`wordWrapWidth`): `void`

The width at which text will wrap, it needs wordWrap to be set to true.

#### Parameters

| Name | Type |
| :------ | :------ |
| `wordWrapWidth` | `number` |

#### Returns

`void`

#### Implementation of

[ITextStyle](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md).[wordWrapWidth](../interfaces/components_ClusterNodeContainer._internal_.ITextStyle.md#wordwrapwidth)

#### Defined in

node_modules/@pixi/text/index.d.ts:689

## Methods

### clone

▸ **clone**(): [`TextStyle`](components_ClusterNodeContainer._internal_.TextStyle.md)

Creates a new TextStyle object with the same values as this one.
Note that the only the properties of the object are cloned.

#### Returns

[`TextStyle`](components_ClusterNodeContainer._internal_.TextStyle.md)

New cloned TextStyle object

#### Defined in

node_modules/@pixi/text/index.d.ts:530

___

### reset

▸ **reset**(): `void`

Resets all properties to the defaults specified in TextStyle.prototype._default

#### Returns

`void`

#### Defined in

node_modules/@pixi/text/index.d.ts:532

___

### toFontString

▸ **toFontString**(): `string`

Generates a font style string to use for `TextMetrics.measureFont()`.

#### Returns

`string`

Font style string, for passing to `TextMetrics.measureFont()`

#### Defined in

node_modules/@pixi/text/index.d.ts:695
