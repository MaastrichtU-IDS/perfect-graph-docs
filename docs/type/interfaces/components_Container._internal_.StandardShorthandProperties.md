[perfect-graph](../README.md) / [Modules](../modules.md) / [components/Container](../modules/components_Container.md) / [<internal\>](../modules/components_Container._internal_.md) / StandardShorthandProperties

# Interface: StandardShorthandProperties<TLength, TTime\>

[components/Container](../modules/components_Container.md).[<internal>](../modules/components_Container._internal_.md).StandardShorthandProperties

## Type parameters

| Name | Type |
| :------ | :------ |
| `TLength` | `string` & {} \| ``0`` |
| `TTime` | `string` & {} |

## Hierarchy

- **`StandardShorthandProperties`**

  ↳ [`StandardProperties`](components_Container._internal_.StandardProperties.md)

## Table of contents

### Properties

- [all](components_Container._internal_.StandardShorthandProperties.md#all)
- [animation](components_Container._internal_.StandardShorthandProperties.md#animation)
- [background](components_Container._internal_.StandardShorthandProperties.md#background)
- [backgroundPosition](components_Container._internal_.StandardShorthandProperties.md#backgroundposition)
- [border](components_Container._internal_.StandardShorthandProperties.md#border)
- [borderBlock](components_Container._internal_.StandardShorthandProperties.md#borderblock)
- [borderBlockEnd](components_Container._internal_.StandardShorthandProperties.md#borderblockend)
- [borderBlockStart](components_Container._internal_.StandardShorthandProperties.md#borderblockstart)
- [borderBottom](components_Container._internal_.StandardShorthandProperties.md#borderbottom)
- [borderColor](components_Container._internal_.StandardShorthandProperties.md#bordercolor)
- [borderImage](components_Container._internal_.StandardShorthandProperties.md#borderimage)
- [borderInline](components_Container._internal_.StandardShorthandProperties.md#borderinline)
- [borderInlineEnd](components_Container._internal_.StandardShorthandProperties.md#borderinlineend)
- [borderInlineStart](components_Container._internal_.StandardShorthandProperties.md#borderinlinestart)
- [borderLeft](components_Container._internal_.StandardShorthandProperties.md#borderleft)
- [borderRadius](components_Container._internal_.StandardShorthandProperties.md#borderradius)
- [borderRight](components_Container._internal_.StandardShorthandProperties.md#borderright)
- [borderStyle](components_Container._internal_.StandardShorthandProperties.md#borderstyle)
- [borderTop](components_Container._internal_.StandardShorthandProperties.md#bordertop)
- [borderWidth](components_Container._internal_.StandardShorthandProperties.md#borderwidth)
- [columnRule](components_Container._internal_.StandardShorthandProperties.md#columnrule)
- [columns](components_Container._internal_.StandardShorthandProperties.md#columns)
- [flex](components_Container._internal_.StandardShorthandProperties.md#flex)
- [flexFlow](components_Container._internal_.StandardShorthandProperties.md#flexflow)
- [font](components_Container._internal_.StandardShorthandProperties.md#font)
- [gap](components_Container._internal_.StandardShorthandProperties.md#gap)
- [grid](components_Container._internal_.StandardShorthandProperties.md#grid)
- [gridArea](components_Container._internal_.StandardShorthandProperties.md#gridarea)
- [gridColumn](components_Container._internal_.StandardShorthandProperties.md#gridcolumn)
- [gridRow](components_Container._internal_.StandardShorthandProperties.md#gridrow)
- [gridTemplate](components_Container._internal_.StandardShorthandProperties.md#gridtemplate)
- [lineClamp](components_Container._internal_.StandardShorthandProperties.md#lineclamp)
- [listStyle](components_Container._internal_.StandardShorthandProperties.md#liststyle)
- [margin](components_Container._internal_.StandardShorthandProperties.md#margin)
- [mask](components_Container._internal_.StandardShorthandProperties.md#mask)
- [maskBorder](components_Container._internal_.StandardShorthandProperties.md#maskborder)
- [motion](components_Container._internal_.StandardShorthandProperties.md#motion)
- [offset](components_Container._internal_.StandardShorthandProperties.md#offset)
- [outline](components_Container._internal_.StandardShorthandProperties.md#outline)
- [overflow](components_Container._internal_.StandardShorthandProperties.md#overflow)
- [overscrollBehavior](components_Container._internal_.StandardShorthandProperties.md#overscrollbehavior)
- [padding](components_Container._internal_.StandardShorthandProperties.md#padding)
- [placeItems](components_Container._internal_.StandardShorthandProperties.md#placeitems)
- [placeSelf](components_Container._internal_.StandardShorthandProperties.md#placeself)
- [textDecoration](components_Container._internal_.StandardShorthandProperties.md#textdecoration)
- [textEmphasis](components_Container._internal_.StandardShorthandProperties.md#textemphasis)
- [transition](components_Container._internal_.StandardShorthandProperties.md#transition)

## Properties

### all

• `Optional` **all**: [`Globals`](../modules/components_Container._internal_.md#globals)

The `**all**` shorthand CSS property resets all of an element's properties except `unicode-bidi`, `direction`, and CSS Custom Properties. It can set properties to their initial or inherited values, or to the values specified in another stylesheet origin.

**Syntax**: `initial | inherit | unset | revert`

**Initial value**: There is no practical initial value for it.

| Chrome | Firefox | Safari  |  Edge  | IE  |
| :----: | :-----: | :-----: | :----: | :-: |
| **37** | **27**  | **9.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/all

#### Defined in

node_modules/csstype/index.d.ts:5146

___

### animation

• `Optional` **animation**: [`Animation`](../modules/components_Container._internal_.md#animation)<`TTime`\>

The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

**Syntax**: `<single-animation>#`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/animation

#### Defined in

node_modules/csstype/index.d.ts:5159

___

### background

• `Optional` **background**: [`Background`](../modules/components_Container._internal_.md#background)<`TLength`\>

The **`background`** shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.

**Syntax**: `[ <bg-layer> , ]* <final-bg-layer>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/background

#### Defined in

node_modules/csstype/index.d.ts:5171

___

### backgroundPosition

• `Optional` **backgroundPosition**: [`BackgroundPosition`](../modules/components_Container._internal_.md#backgroundposition)<`TLength`\>

The **`background-position`** CSS property sets the initial position for each background image. The position is relative to the position layer set by `background-origin`.

**Syntax**: `<bg-position>#`

**Initial value**: `0% 0%`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/background-position

#### Defined in

node_modules/csstype/index.d.ts:5185

___

### border

• `Optional` **border**: [`Border`](../modules/components_Container._internal_.md#border)<`TLength`\>

The **`border`** shorthand CSS property sets an element's border. It sets the values of `border-width`, `border-style`, and `border-color`.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border

#### Defined in

node_modules/csstype/index.d.ts:5197

___

### borderBlock

• `Optional` **borderBlock**: [`BorderBlock`](../modules/components_Container._internal_.md#borderblock)<`TLength`\>

The **`border-block`** CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block

#### Defined in

node_modules/csstype/index.d.ts:5209

___

### borderBlockEnd

• `Optional` **borderBlockEnd**: [`BorderBlockEnd`](../modules/components_Container._internal_.md#borderblockend)<`TLength`\>

The **`border-block-end`** CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block-end

#### Defined in

node_modules/csstype/index.d.ts:5221

___

### borderBlockStart

• `Optional` **borderBlockStart**: [`BorderBlockStart`](../modules/components_Container._internal_.md#borderblockstart)<`TLength`\>

The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-block-start

#### Defined in

node_modules/csstype/index.d.ts:5233

___

### borderBottom

• `Optional` **borderBottom**: [`BorderBottom`](../modules/components_Container._internal_.md#borderbottom)<`TLength`\>

The **`border-bottom`** shorthand CSS property sets an element's bottom border. It sets the values of `border-bottom-width`, `border-bottom-style` and `border-bottom-color`.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-bottom

#### Defined in

node_modules/csstype/index.d.ts:5245

___

### borderColor

• `Optional` **borderColor**: [`BorderColor`](../modules/components_Container._internal_.md#bordercolor)

The **`border-color`** shorthand CSS property sets the color of an element's border.

**Syntax**: `<color>{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-color

#### Defined in

node_modules/csstype/index.d.ts:5257

___

### borderImage

• `Optional` **borderImage**: [`BorderImage`](../modules/components_Container._internal_.md#borderimage)

The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.

**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`

| Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
| :-----: | :-------: | :-----: | :----: | :----: |
| **16**  |  **15**   |  **6**  | **12** | **11** |
| 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-image

#### Defined in

node_modules/csstype/index.d.ts:5270

___

### borderInline

• `Optional` **borderInline**: [`BorderInline`](../modules/components_Container._internal_.md#borderinline)<`TLength`\>

The **`border-inline`** CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **87** | **66**  | **14.1** | **87** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline

#### Defined in

node_modules/csstype/index.d.ts:5282

___

### borderInlineEnd

• `Optional` **borderInlineEnd**: [`BorderInlineEnd`](../modules/components_Container._internal_.md#borderinlineend)<`TLength`\>

The **`border-inline-end`** CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline-end

#### Defined in

node_modules/csstype/index.d.ts:5294

___

### borderInlineStart

• `Optional` **borderInlineStart**: [`BorderInlineStart`](../modules/components_Container._internal_.md#borderinlinestart)<`TLength`\>

The **`border-inline-start`** CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-inline-start

#### Defined in

node_modules/csstype/index.d.ts:5306

___

### borderLeft

• `Optional` **borderLeft**: [`BorderLeft`](../modules/components_Container._internal_.md#borderleft)<`TLength`\>

The **`border-left`** shorthand CSS property sets all the properties of an element's left border.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-left

#### Defined in

node_modules/csstype/index.d.ts:5318

___

### borderRadius

• `Optional` **borderRadius**: [`BorderRadius`](../modules/components_Container._internal_.md#borderradius)<`TLength`\>

The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.

**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **4**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-radius

#### Defined in

node_modules/csstype/index.d.ts:5331

___

### borderRight

• `Optional` **borderRight**: [`BorderRight`](../modules/components_Container._internal_.md#borderright)<`TLength`\>

The **`border-right`** shorthand CSS property sets all the properties of an element's right border.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-right

#### Defined in

node_modules/csstype/index.d.ts:5343

___

### borderStyle

• `Optional` **borderStyle**: [`BorderStyle`](../modules/components_Container._internal_.md#borderstyle)

The **`border-style`** shorthand CSS property sets the line style for all four sides of an element's border.

**Syntax**: `<line-style>{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-style

#### Defined in

node_modules/csstype/index.d.ts:5355

___

### borderTop

• `Optional` **borderTop**: [`BorderTop`](../modules/components_Container._internal_.md#bordertop)<`TLength`\>

The **`border-top`** shorthand CSS property sets all the properties of an element's top border.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-top

#### Defined in

node_modules/csstype/index.d.ts:5367

___

### borderWidth

• `Optional` **borderWidth**: [`BorderWidth`](../modules/components_Container._internal_.md#borderwidth)<`TLength`\>

The **`border-width`** shorthand CSS property sets the width of an element's border.

**Syntax**: `<line-width>{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/border-width

#### Defined in

node_modules/csstype/index.d.ts:5379

___

### columnRule

• `Optional` **columnRule**: [`ColumnRule`](../modules/components_Container._internal_.md#columnrule)<`TLength`\>

The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.

**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **52**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/column-rule

#### Defined in

node_modules/csstype/index.d.ts:5392

___

### columns

• `Optional` **columns**: [`Columns`](../modules/components_Container._internal_.md#columns)<`TLength`\>

The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.

**Syntax**: `<'column-width'> || <'column-count'>`

| Chrome | Firefox | Safari  |  Edge  |   IE   |
| :----: | :-----: | :-----: | :----: | :----: |
| **50** | **52**  |  **9**  | **12** | **10** |
|        |         | 3 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/columns

#### Defined in

node_modules/csstype/index.d.ts:5405

___

### flex

• `Optional` **flex**: [`Flex`](../modules/components_Container._internal_.md#flex)<`TLength`\>

The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.

**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`

|  Chrome  | Firefox | Safari  |  Edge  |    IE    |
| :------: | :-----: | :-----: | :----: | :------: |
|  **29**  | **20**  |  **9**  | **12** |  **11**  |
| 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |

**`see`** https://developer.mozilla.org/docs/Web/CSS/flex

#### Defined in

node_modules/csstype/index.d.ts:5418

___

### flexFlow

• `Optional` **flexFlow**: [`FlexFlow`](../modules/components_Container._internal_.md#flexflow)

The **`flex-flow`** CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.

**Syntax**: `<'flex-direction'> || <'flex-wrap'>`

|  Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :------: | :-----: | :-----: | :----: | :----: |
|  **29**  | **28**  |  **9**  | **12** | **11** |
| 21 _-x-_ |         | 7 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/flex-flow

#### Defined in

node_modules/csstype/index.d.ts:5431

___

### font

• `Optional` **font**: [`Font`](../modules/components_Container._internal_.md#font)

The **`font`** CSS shorthand property sets all the different properties of an element's font. Alternatively, it sets an element's font to a system font.

**Syntax**: `[ [ <'font-style'> || <font-variant-css21> || <'font-weight'> || <'font-stretch'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/font

#### Defined in

node_modules/csstype/index.d.ts:5443

___

### gap

• `Optional` **gap**: [`Gap`](../modules/components_Container._internal_.md#gap)<`TLength`\>

The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.

**Syntax**: `<'row-gap'> <'column-gap'>?`

---

_Supported in Flex Layout_

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **84** | **63**  | **14.1** | **84** | No  |

---

_Supported in Grid Layout_

|     Chrome      |     Firefox     |      Safari       |  Edge  | IE  |
| :-------------: | :-------------: | :---------------: | :----: | :-: |
|     **66**      |     **61**      |      **12**       | **16** | No  |
| 57 _(grid-gap)_ | 52 _(grid-gap)_ | 10.1 _(grid-gap)_ |        |     |

---

_Supported in Multi-column Layout_

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **66** | **61**  |   No   | **16** | No  |

---

**`see`** https://developer.mozilla.org/docs/Web/CSS/gap

#### Defined in

node_modules/csstype/index.d.ts:5478

___

### grid

• `Optional` **grid**: [`Grid`](../modules/components_Container._internal_.md#grid)

The **`grid`** CSS property is a shorthand property that sets all of the explicit and implicit grid properties in a single declaration.

**Syntax**: `<'grid-template'> | <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>? | [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid

#### Defined in

node_modules/csstype/index.d.ts:5490

___

### gridArea

• `Optional` **gridArea**: [`GridArea`](../modules/components_Container._internal_.md#gridarea)

The **`grid-area`** CSS shorthand property specifies a grid item’s size and location within a grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.

**Syntax**: `<grid-line> [ / <grid-line> ]{0,3}`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-area

#### Defined in

node_modules/csstype/index.d.ts:5502

___

### gridColumn

• `Optional` **gridColumn**: [`GridColumn`](../modules/components_Container._internal_.md#gridcolumn)

The **`grid-column`** CSS shorthand property specifies a grid item's size and location within a grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.

**Syntax**: `<grid-line> [ / <grid-line> ]?`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-column

#### Defined in

node_modules/csstype/index.d.ts:5514

___

### gridRow

• `Optional` **gridRow**: [`GridRow`](../modules/components_Container._internal_.md#gridrow)

The **`grid-row`** CSS shorthand property specifies a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.

**Syntax**: `<grid-line> [ / <grid-line> ]?`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-row

#### Defined in

node_modules/csstype/index.d.ts:5526

___

### gridTemplate

• `Optional` **gridTemplate**: [`GridTemplate`](../modules/components_Container._internal_.md#gridtemplate)

The **`grid-template`** CSS property is a shorthand property for defining grid columns, rows, and areas.

**Syntax**: `none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/grid-template

#### Defined in

node_modules/csstype/index.d.ts:5538

___

### lineClamp

• `Optional` **lineClamp**: [`LineClamp`](../modules/components_Container._internal_.md#lineclamp)

**Syntax**: `none | <integer>`

**Initial value**: `none`

#### Defined in

node_modules/csstype/index.d.ts:5544

___

### listStyle

• `Optional` **listStyle**: [`ListStyle`](../modules/components_Container._internal_.md#liststyle)

The **`list-style`** CSS shorthand property allows you set all the list style properties at once.

**Syntax**: `<'list-style-type'> || <'list-style-position'> || <'list-style-image'>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/list-style

#### Defined in

node_modules/csstype/index.d.ts:5556

___

### margin

• `Optional` **margin**: [`Margin`](../modules/components_Container._internal_.md#margin)<`TLength`\>

The **`margin`** CSS property sets the margin area on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.

**Syntax**: `[ <length> | <percentage> | auto ]{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/margin

#### Defined in

node_modules/csstype/index.d.ts:5568

___

### mask

• `Optional` **mask**: [`Mask`](../modules/components_Container._internal_.md#mask)<`TLength`\>

The **`mask`** CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.

**Syntax**: `<mask-layer>#`

| Chrome | Firefox | Safari  | Edge  | IE  |
| :----: | :-----: | :-----: | :---: | :-: |
| **1**  |  **2**  | **3.1** | 12-79 | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask

#### Defined in

node_modules/csstype/index.d.ts:5580

___

### maskBorder

• `Optional` **maskBorder**: [`MaskBorder`](../modules/components_Container._internal_.md#maskborder)

The **`mask-border`** CSS shorthand property lets you create a mask along the edge of an element's border.

**Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`

|              Chrome              | Firefox |               Safari               |               Edge                | IE  |
| :------------------------------: | :-----: | :--------------------------------: | :-------------------------------: | :-: |
| **1** _(-webkit-mask-box-image)_ |   No    | **3.1** _(-webkit-mask-box-image)_ | **79** _(-webkit-mask-box-image)_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/mask-border

#### Defined in

node_modules/csstype/index.d.ts:5592

___

### motion

• `Optional` **motion**: [`Offset`](../modules/components_Container._internal_.md#offset)<`TLength`\>

The **`offset`** CSS shorthand property sets all the properties required for animating an element along a defined path.

**Syntax**: `[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`

|    Chrome     | Firefox | Safari |  Edge  | IE  |
| :-----------: | :-----: | :----: | :----: | :-: |
|    **55**     | **72**  |   No   | **79** | No  |
| 46 _(motion)_ |         |        |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/offset

#### Defined in

node_modules/csstype/index.d.ts:5605

___

### offset

• `Optional` **offset**: [`Offset`](../modules/components_Container._internal_.md#offset)<`TLength`\>

The **`offset`** CSS shorthand property sets all the properties required for animating an element along a defined path.

**Syntax**: `[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`

|    Chrome     | Firefox | Safari |  Edge  | IE  |
| :-----------: | :-----: | :----: | :----: | :-: |
|    **55**     | **72**  |   No   | **79** | No  |
| 46 _(motion)_ |         |        |        |     |

**`see`** https://developer.mozilla.org/docs/Web/CSS/offset

#### Defined in

node_modules/csstype/index.d.ts:5618

___

### outline

• `Optional` **outline**: [`Outline`](../modules/components_Container._internal_.md#outline)<`TLength`\>

The **`outline`** CSS shorthand property set all the outline properties in a single declaration.

**Syntax**: `[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  | **1.5** | **1.2** | **12** | **8** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/outline

#### Defined in

node_modules/csstype/index.d.ts:5630

___

### overflow

• `Optional` **overflow**: [`Overflow`](../modules/components_Container._internal_.md#overflow)

The **`overflow`** CSS shorthand property sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions.

**Syntax**: `[ visible | hidden | clip | scroll | auto ]{1,2}`

**Initial value**: `visible`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overflow

#### Defined in

node_modules/csstype/index.d.ts:5644

___

### overscrollBehavior

• `Optional` **overscrollBehavior**: [`OverscrollBehavior`](../modules/components_Container._internal_.md#overscrollbehavior)

The **`overscroll-behavior`** CSS property sets what a browser does when reaching the boundary of a scrolling area. It's a shorthand for `overscroll-behavior-x` and `overscroll-behavior-y`.

**Syntax**: `[ contain | none | auto ]{1,2}`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **63** | **59**  |   No   | **18** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior

#### Defined in

node_modules/csstype/index.d.ts:5658

___

### padding

• `Optional` **padding**: [`Padding`](../modules/components_Container._internal_.md#padding)<`TLength`\>

The **`padding`** CSS shorthand property sets the padding area on all four sides of an element at once.

**Syntax**: `[ <length> | <percentage> ]{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/padding

#### Defined in

node_modules/csstype/index.d.ts:5670

___

### placeItems

• `Optional` **placeItems**: [`PlaceItems`](../modules/components_Container._internal_.md#placeitems)

The CSS **`place-items`** shorthand property allows you to align items along both the block and inline directions at once (i.e. the `align-items` and `justify-items` properties) in a relevant layout system such as Grid or Flexbox. If the second value is not set, the first value is also used for it.

**Syntax**: `<'align-items'> <'justify-items'>?`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **59** | **45**  | **11** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/place-items

#### Defined in

node_modules/csstype/index.d.ts:5682

___

### placeSelf

• `Optional` **placeSelf**: [`PlaceSelf`](../modules/components_Container._internal_.md#placeself)

The **`place-self`** CSS shorthand property allows you to align an individual item in both the block and inline directions at once (i.e. the `align-self` and `justify-self` properties) in a relevant layout system such as Grid or Flexbox. If the second value is not present, the first value is also used for it.

**Syntax**: `<'align-self'> <'justify-self'>?`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **59** | **45**  | **11** | **79** | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/place-self

#### Defined in

node_modules/csstype/index.d.ts:5694

___

### textDecoration

• `Optional` **textDecoration**: [`TextDecoration`](../modules/components_Container._internal_.md#textdecoration)<`TLength`\>

The **`text-decoration`** shorthand CSS property sets the appearance of decorative lines on text. It is a shorthand for `text-decoration-line`, `text-decoration-color`, `text-decoration-style`, and the newer `text-decoration-thickness` property.

**Syntax**: `<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'> || <'text-decoration-thickness'>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-decoration

#### Defined in

node_modules/csstype/index.d.ts:5706

___

### textEmphasis

• `Optional` **textEmphasis**: [`TextEmphasis`](../modules/components_Container._internal_.md#textemphasis)

The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.

**Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`

|    Chrome    | Firefox | Safari |     Edge     | IE  |
| :----------: | :-----: | :----: | :----------: | :-: |
| **25** _-x-_ | **46**  | **7**  | **79** _-x-_ | No  |

**`see`** https://developer.mozilla.org/docs/Web/CSS/text-emphasis

#### Defined in

node_modules/csstype/index.d.ts:5718

___

### transition

• `Optional` **transition**: [`Transition`](../modules/components_Container._internal_.md#transition)<`TTime`\>

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

| Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :-----: | :-----: | :-------: | :----: | :----: |
| **26**  | **16**  |   **9**   | **12** | **10** |
| 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |

**`see`** https://developer.mozilla.org/docs/Web/CSS/transition

#### Defined in

node_modules/csstype/index.d.ts:5731
