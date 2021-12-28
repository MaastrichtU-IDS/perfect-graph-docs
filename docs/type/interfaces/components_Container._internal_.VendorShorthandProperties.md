[perfect-graph](../README.md) / [Modules](../modules.md) / [components/Container](../modules/components_Container.md) / [<internal\>](../modules/components_Container._internal_.md) / VendorShorthandProperties

# Interface: VendorShorthandProperties<TLength, TTime\>

[components/Container](../modules/components_Container.md).[<internal>](../modules/components_Container._internal_.md).VendorShorthandProperties

## Type parameters

| Name | Type |
| :------ | :------ |
| `TLength` | `string` & {} \| ``0`` |
| `TTime` | `string` & {} |

## Hierarchy

- **`VendorShorthandProperties`**

  ↳ [`VendorProperties`](components_Container._internal_.VendorProperties.md)

## Table of contents

### Properties

- [MozAnimation](components_Container._internal_.VendorShorthandProperties.md#mozanimation)
- [MozBorderImage](components_Container._internal_.VendorShorthandProperties.md#mozborderimage)
- [MozColumnRule](components_Container._internal_.VendorShorthandProperties.md#mozcolumnrule)
- [MozColumns](components_Container._internal_.VendorShorthandProperties.md#mozcolumns)
- [MozTransition](components_Container._internal_.VendorShorthandProperties.md#moztransition)
- [WebkitAnimation](components_Container._internal_.VendorShorthandProperties.md#webkitanimation)
- [WebkitBorderBefore](components_Container._internal_.VendorShorthandProperties.md#webkitborderbefore)
- [WebkitBorderImage](components_Container._internal_.VendorShorthandProperties.md#webkitborderimage)
- [WebkitBorderRadius](components_Container._internal_.VendorShorthandProperties.md#webkitborderradius)
- [WebkitColumnRule](components_Container._internal_.VendorShorthandProperties.md#webkitcolumnrule)
- [WebkitColumns](components_Container._internal_.VendorShorthandProperties.md#webkitcolumns)
- [WebkitFlex](components_Container._internal_.VendorShorthandProperties.md#webkitflex)
- [WebkitFlexFlow](components_Container._internal_.VendorShorthandProperties.md#webkitflexflow)
- [WebkitMask](components_Container._internal_.VendorShorthandProperties.md#webkitmask)
- [WebkitMaskBoxImage](components_Container._internal_.VendorShorthandProperties.md#webkitmaskboximage)
- [WebkitTextEmphasis](components_Container._internal_.VendorShorthandProperties.md#webkittextemphasis)
- [WebkitTextStroke](components_Container._internal_.VendorShorthandProperties.md#webkittextstroke)
- [WebkitTransition](components_Container._internal_.VendorShorthandProperties.md#webkittransition)
- [msContentZoomLimit](components_Container._internal_.VendorShorthandProperties.md#mscontentzoomlimit)
- [msContentZoomSnap](components_Container._internal_.VendorShorthandProperties.md#mscontentzoomsnap)
- [msFlex](components_Container._internal_.VendorShorthandProperties.md#msflex)
- [msScrollLimit](components_Container._internal_.VendorShorthandProperties.md#msscrolllimit)
- [msScrollSnapX](components_Container._internal_.VendorShorthandProperties.md#msscrollsnapx)
- [msScrollSnapY](components_Container._internal_.VendorShorthandProperties.md#msscrollsnapy)
- [msTransition](components_Container._internal_.VendorShorthandProperties.md#mstransition)

## Properties

### MozAnimation

• `Optional` **MozAnimation**: [`Animation`](../modules/components_Container._internal_.md#animation)<`TTime`\>

The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

**Syntax**: `<single-animation>#`

#### Defined in

node_modules/csstype/index.d.ts:7539

___

### MozBorderImage

• `Optional` **MozBorderImage**: [`BorderImage`](../modules/components_Container._internal_.md#borderimage)

The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.

**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`

#### Defined in

node_modules/csstype/index.d.ts:7545

___

### MozColumnRule

• `Optional` **MozColumnRule**: [`ColumnRule`](../modules/components_Container._internal_.md#columnrule)<`TLength`\>

The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.

**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`

#### Defined in

node_modules/csstype/index.d.ts:7551

___

### MozColumns

• `Optional` **MozColumns**: [`Columns`](../modules/components_Container._internal_.md#columns)<`TLength`\>

The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.

**Syntax**: `<'column-width'> || <'column-count'>`

#### Defined in

node_modules/csstype/index.d.ts:7557

___

### MozTransition

• `Optional` **MozTransition**: [`Transition`](../modules/components_Container._internal_.md#transition)<`TTime`\>

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

#### Defined in

node_modules/csstype/index.d.ts:7563

___

### WebkitAnimation

• `Optional` **WebkitAnimation**: [`Animation`](../modules/components_Container._internal_.md#animation)<`TTime`\>

The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

**Syntax**: `<single-animation>#`

#### Defined in

node_modules/csstype/index.d.ts:7611

___

### WebkitBorderBefore

• `Optional` **WebkitBorderBefore**: [`WebkitBorderBefore`](../modules/components_Container._internal_.md#webkitborderbefore)<`TLength`\>

The **`-webkit-border-before`** CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet.

**Syntax**: `<'border-width'> || <'border-style'> || <color>`

#### Defined in

node_modules/csstype/index.d.ts:7617

___

### WebkitBorderImage

• `Optional` **WebkitBorderImage**: [`BorderImage`](../modules/components_Container._internal_.md#borderimage)

The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.

**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`

#### Defined in

node_modules/csstype/index.d.ts:7623

___

### WebkitBorderRadius

• `Optional` **WebkitBorderRadius**: [`BorderRadius`](../modules/components_Container._internal_.md#borderradius)<`TLength`\>

The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.

**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`

#### Defined in

node_modules/csstype/index.d.ts:7629

___

### WebkitColumnRule

• `Optional` **WebkitColumnRule**: [`ColumnRule`](../modules/components_Container._internal_.md#columnrule)<`TLength`\>

The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.

**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`

#### Defined in

node_modules/csstype/index.d.ts:7635

___

### WebkitColumns

• `Optional` **WebkitColumns**: [`Columns`](../modules/components_Container._internal_.md#columns)<`TLength`\>

The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.

**Syntax**: `<'column-width'> || <'column-count'>`

#### Defined in

node_modules/csstype/index.d.ts:7641

___

### WebkitFlex

• `Optional` **WebkitFlex**: [`Flex`](../modules/components_Container._internal_.md#flex)<`TLength`\>

The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.

**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`

#### Defined in

node_modules/csstype/index.d.ts:7647

___

### WebkitFlexFlow

• `Optional` **WebkitFlexFlow**: [`FlexFlow`](../modules/components_Container._internal_.md#flexflow)

The **`flex-flow`** CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.

**Syntax**: `<'flex-direction'> || <'flex-wrap'>`

#### Defined in

node_modules/csstype/index.d.ts:7653

___

### WebkitMask

• `Optional` **WebkitMask**: [`WebkitMask`](../modules/components_Container._internal_.md#webkitmask)<`TLength`\>

The **`mask`** CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.

**Syntax**: `[ <mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || [ <box> | border | padding | content | text ] || [ <box> | border | padding | content ] ]#`

#### Defined in

node_modules/csstype/index.d.ts:7659

___

### WebkitMaskBoxImage

• `Optional` **WebkitMaskBoxImage**: [`MaskBorder`](../modules/components_Container._internal_.md#maskborder)

The **`mask-border`** CSS shorthand property lets you create a mask along the edge of an element's border.

**Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`

#### Defined in

node_modules/csstype/index.d.ts:7665

___

### WebkitTextEmphasis

• `Optional` **WebkitTextEmphasis**: [`TextEmphasis`](../modules/components_Container._internal_.md#textemphasis)

The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.

**Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`

#### Defined in

node_modules/csstype/index.d.ts:7671

___

### WebkitTextStroke

• `Optional` **WebkitTextStroke**: [`WebkitTextStroke`](../modules/components_Container._internal_.md#webkittextstroke)<`TLength`\>

The **`-webkit-text-stroke`** CSS property specifies the width and color of strokes for text characters. This is a shorthand property for the longhand properties `-webkit-text-stroke-width` and `-webkit-text-stroke-color`.

**Syntax**: `<length> || <color>`

#### Defined in

node_modules/csstype/index.d.ts:7677

___

### WebkitTransition

• `Optional` **WebkitTransition**: [`Transition`](../modules/components_Container._internal_.md#transition)<`TTime`\>

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

#### Defined in

node_modules/csstype/index.d.ts:7683

___

### msContentZoomLimit

• `Optional` **msContentZoomLimit**: [`MsContentZoomLimit`](../modules/components_Container._internal_.md#mscontentzoomlimit)

The **`-ms-content-zoom-limit`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-limit-min` and `-ms-content-zoom-limit-max` properties.

**Syntax**: `<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>`

#### Defined in

node_modules/csstype/index.d.ts:7569

___

### msContentZoomSnap

• `Optional` **msContentZoomSnap**: [`MsContentZoomSnap`](../modules/components_Container._internal_.md#mscontentzoomsnap)

The **`-ms-content-zoom-snap`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-snap-type` and `-ms-content-zoom-snap-points` properties.

**Syntax**: `<'-ms-content-zoom-snap-type'> || <'-ms-content-zoom-snap-points'>`

#### Defined in

node_modules/csstype/index.d.ts:7575

___

### msFlex

• `Optional` **msFlex**: [`Flex`](../modules/components_Container._internal_.md#flex)<`TLength`\>

The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.

**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`

#### Defined in

node_modules/csstype/index.d.ts:7581

___

### msScrollLimit

• `Optional` **msScrollLimit**: [`MsScrollLimit`](../modules/components_Container._internal_.md#msscrolllimit)

The **\-ms-scroll-limit** CSS property is a Microsoft extension that specifies values for the `-ms-scroll-limit-x-min`, `-ms-scroll-limit-y-min`, `-ms-scroll-limit-x-max`, and `-ms-scroll-limit-y-max` properties.

**Syntax**: `<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>`

#### Defined in

node_modules/csstype/index.d.ts:7587

___

### msScrollSnapX

• `Optional` **msScrollSnapX**: [`MsScrollSnapX`](../modules/components_Container._internal_.md#msscrollsnapx)

The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-x` properties.

**Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>`

#### Defined in

node_modules/csstype/index.d.ts:7593

___

### msScrollSnapY

• `Optional` **msScrollSnapY**: [`MsScrollSnapY`](../modules/components_Container._internal_.md#msscrollsnapy)

The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-y` properties.

**Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>`

#### Defined in

node_modules/csstype/index.d.ts:7599

___

### msTransition

• `Optional` **msTransition**: [`Transition`](../modules/components_Container._internal_.md#transition)<`TTime`\>

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

#### Defined in

node_modules/csstype/index.d.ts:7605
