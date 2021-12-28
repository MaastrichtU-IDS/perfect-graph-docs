[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Node

# Interface: Node

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Node

http://js.cytoscape.org/#style/node-body

## Hierarchy

- [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`Overlay`](components_ClusterNodeContainer._internal_.Overlay.md)\>

- [`PaddingNode`](components_ClusterNodeContainer._internal_.PaddingNode.md)

- [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`Labels`](components_ClusterNodeContainer._internal_.Labels.md)<`NodeSingular`\>\>

- [`BackgroundImage`](components_ClusterNodeContainer._internal_.BackgroundImage.md)

- [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`Ghost`](components_ClusterNodeContainer._internal_.Ghost.md)\>

- [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`Visibility`](components_ClusterNodeContainer._internal_.Visibility.md)<`NodeSingular`\>\>

- [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`PieChartBackground`](components_ClusterNodeContainer._internal_.PieChartBackground.md)\>

- [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`Events`](components_ClusterNodeContainer._internal_.Events.md)<`NodeSingular`\>\>

- [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`TransitionAnimation`](components_ClusterNodeContainer._internal_.TransitionAnimation.md)\>

  ↳ **`Node`**

## Table of contents

### Properties

- [background-blacken](components_ClusterNodeContainer._internal_.Node.md#background-blacken)
- [background-clip](components_ClusterNodeContainer._internal_.Node.md#background-clip)
- [background-color](components_ClusterNodeContainer._internal_.Node.md#background-color)
- [background-fit](components_ClusterNodeContainer._internal_.Node.md#background-fit)
- [background-height](components_ClusterNodeContainer._internal_.Node.md#background-height)
- [background-image](components_ClusterNodeContainer._internal_.Node.md#background-image)
- [background-image-opacity](components_ClusterNodeContainer._internal_.Node.md#background-image-opacity)
- [background-opacity](components_ClusterNodeContainer._internal_.Node.md#background-opacity)
- [background-position-x](components_ClusterNodeContainer._internal_.Node.md#background-position-x)
- [background-position-y](components_ClusterNodeContainer._internal_.Node.md#background-position-y)
- [background-repeat](components_ClusterNodeContainer._internal_.Node.md#background-repeat)
- [background-width](components_ClusterNodeContainer._internal_.Node.md#background-width)
- [backgroundColor](components_ClusterNodeContainer._internal_.Node.md#backgroundcolor)
- [border-color](components_ClusterNodeContainer._internal_.Node.md#border-color)
- [border-opacity](components_ClusterNodeContainer._internal_.Node.md#border-opacity)
- [border-style](components_ClusterNodeContainer._internal_.Node.md#border-style)
- [border-width](components_ClusterNodeContainer._internal_.Node.md#border-width)
- [color](components_ClusterNodeContainer._internal_.Node.md#color)
- [content](components_ClusterNodeContainer._internal_.Node.md#content)
- [display](components_ClusterNodeContainer._internal_.Node.md#display)
- [events](components_ClusterNodeContainer._internal_.Node.md#events)
- [font-family](components_ClusterNodeContainer._internal_.Node.md#font-family)
- [font-size](components_ClusterNodeContainer._internal_.Node.md#font-size)
- [font-style](components_ClusterNodeContainer._internal_.Node.md#font-style)
- [font-weight](components_ClusterNodeContainer._internal_.Node.md#font-weight)
- [ghost](components_ClusterNodeContainer._internal_.Node.md#ghost)
- [ghost-offset-x](components_ClusterNodeContainer._internal_.Node.md#ghost-offset-x)
- [ghost-offset-y](components_ClusterNodeContainer._internal_.Node.md#ghost-offset-y)
- [ghost-opacity](components_ClusterNodeContainer._internal_.Node.md#ghost-opacity)
- [height](components_ClusterNodeContainer._internal_.Node.md#height)
- [label](components_ClusterNodeContainer._internal_.Node.md#label)
- [min-zoomed-font-size](components_ClusterNodeContainer._internal_.Node.md#min-zoomed-font-size)
- [opacity](components_ClusterNodeContainer._internal_.Node.md#opacity)
- [overlay-color](components_ClusterNodeContainer._internal_.Node.md#overlay-color)
- [overlay-opacity](components_ClusterNodeContainer._internal_.Node.md#overlay-opacity)
- [overlay-padding](components_ClusterNodeContainer._internal_.Node.md#overlay-padding)
- [padding-bottom](components_ClusterNodeContainer._internal_.Node.md#padding-bottom)
- [padding-left](components_ClusterNodeContainer._internal_.Node.md#padding-left)
- [padding-right](components_ClusterNodeContainer._internal_.Node.md#padding-right)
- [padding-top](components_ClusterNodeContainer._internal_.Node.md#padding-top)
- [pie-i-background-color](components_ClusterNodeContainer._internal_.Node.md#pie-i-background-color)
- [pie-i-background-opacity](components_ClusterNodeContainer._internal_.Node.md#pie-i-background-opacity)
- [pie-i-background-size](components_ClusterNodeContainer._internal_.Node.md#pie-i-background-size)
- [pie-size](components_ClusterNodeContainer._internal_.Node.md#pie-size)
- [shape](components_ClusterNodeContainer._internal_.Node.md#shape)
- [shape-polygon-points](components_ClusterNodeContainer._internal_.Node.md#shape-polygon-points)
- [source-label](components_ClusterNodeContainer._internal_.Node.md#source-label)
- [source-text-margin-x](components_ClusterNodeContainer._internal_.Node.md#source-text-margin-x)
- [source-text-margin-y](components_ClusterNodeContainer._internal_.Node.md#source-text-margin-y)
- [source-text-offset](components_ClusterNodeContainer._internal_.Node.md#source-text-offset)
- [source-text-rotation](components_ClusterNodeContainer._internal_.Node.md#source-text-rotation)
- [target-label](components_ClusterNodeContainer._internal_.Node.md#target-label)
- [target-text-margin-x](components_ClusterNodeContainer._internal_.Node.md#target-text-margin-x)
- [target-text-margin-y](components_ClusterNodeContainer._internal_.Node.md#target-text-margin-y)
- [target-text-offset](components_ClusterNodeContainer._internal_.Node.md#target-text-offset)
- [target-text-rotation](components_ClusterNodeContainer._internal_.Node.md#target-text-rotation)
- [text-background-color](components_ClusterNodeContainer._internal_.Node.md#text-background-color)
- [text-background-opacity](components_ClusterNodeContainer._internal_.Node.md#text-background-opacity)
- [text-background-padding](components_ClusterNodeContainer._internal_.Node.md#text-background-padding)
- [text-background-shape](components_ClusterNodeContainer._internal_.Node.md#text-background-shape)
- [text-border-color](components_ClusterNodeContainer._internal_.Node.md#text-border-color)
- [text-border-opacity](components_ClusterNodeContainer._internal_.Node.md#text-border-opacity)
- [text-border-style](components_ClusterNodeContainer._internal_.Node.md#text-border-style)
- [text-border-width](components_ClusterNodeContainer._internal_.Node.md#text-border-width)
- [text-events](components_ClusterNodeContainer._internal_.Node.md#text-events)
- [text-halign](components_ClusterNodeContainer._internal_.Node.md#text-halign)
- [text-margin-x](components_ClusterNodeContainer._internal_.Node.md#text-margin-x)
- [text-margin-y](components_ClusterNodeContainer._internal_.Node.md#text-margin-y)
- [text-max-width](components_ClusterNodeContainer._internal_.Node.md#text-max-width)
- [text-opacity](components_ClusterNodeContainer._internal_.Node.md#text-opacity)
- [text-outline-color](components_ClusterNodeContainer._internal_.Node.md#text-outline-color)
- [text-outline-opacity](components_ClusterNodeContainer._internal_.Node.md#text-outline-opacity)
- [text-outline-width](components_ClusterNodeContainer._internal_.Node.md#text-outline-width)
- [text-rotation](components_ClusterNodeContainer._internal_.Node.md#text-rotation)
- [text-shadow-blur](components_ClusterNodeContainer._internal_.Node.md#text-shadow-blur)
- [text-shadow-color](components_ClusterNodeContainer._internal_.Node.md#text-shadow-color)
- [text-shadow-offset-x](components_ClusterNodeContainer._internal_.Node.md#text-shadow-offset-x)
- [text-shadow-offset-y](components_ClusterNodeContainer._internal_.Node.md#text-shadow-offset-y)
- [text-shadow-opacity](components_ClusterNodeContainer._internal_.Node.md#text-shadow-opacity)
- [text-transform](components_ClusterNodeContainer._internal_.Node.md#text-transform)
- [text-valign](components_ClusterNodeContainer._internal_.Node.md#text-valign)
- [text-wrap](components_ClusterNodeContainer._internal_.Node.md#text-wrap)
- [transition-delay](components_ClusterNodeContainer._internal_.Node.md#transition-delay)
- [transition-duration](components_ClusterNodeContainer._internal_.Node.md#transition-duration)
- [transition-property](components_ClusterNodeContainer._internal_.Node.md#transition-property)
- [transition-timing-function](components_ClusterNodeContainer._internal_.Node.md#transition-timing-function)
- [visibility](components_ClusterNodeContainer._internal_.Node.md#visibility)
- [width](components_ClusterNodeContainer._internal_.Node.md#width)
- [z-index](components_ClusterNodeContainer._internal_.Node.md#z-index)

## Properties

### background-blacken

• `Optional` **background-blacken**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`number`\>

Blackens the node’s body for values from 0 to 1;
whitens the node’s body for values from 0 to -1.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3618

___

### background-clip

• `Optional` **background-clip**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<``"none"`` \| ``"clipped"``\>

How background image clipping is handled;
may be node for clipped to node shape or none for no clipping.

#### Inherited from

[BackgroundImage](components_ClusterNodeContainer._internal_.BackgroundImage.md).[background-clip](components_ClusterNodeContainer._internal_.BackgroundImage.md#background-clip)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3721

___

### background-color

• `Optional` **background-color**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`string`\>

The colour of the node’s body.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3613

___

### background-fit

• `Optional` **background-fit**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<``"none"`` \| ``"contain"`` \| ``"cover"``\>

How the background image is fit to the node;
may be none for original size,
contain to fit inside node,
or cover to cover the node.

#### Inherited from

[BackgroundImage](components_ClusterNodeContainer._internal_.BackgroundImage.md).[background-fit](components_ClusterNodeContainer._internal_.BackgroundImage.md#background-fit)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3701

___

### background-height

• `Optional` **background-height**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`string` \| `number`\>

Specifies the height of the image.
A percent value (e.g. 50%) may be used to set the image
height relative to the node height.
If used in combination with background- fit,
then this value overrides the height of the image in calculating
the fitting — thereby overriding the aspect ratio.
The auto value is used by default, which uses the height of the image.

#### Inherited from

[BackgroundImage](components_ClusterNodeContainer._internal_.BackgroundImage.md).[background-height](components_ClusterNodeContainer._internal_.BackgroundImage.md#background-height)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3694

___

### background-image

• `Optional` **background-image**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`string`\>

The URL that points to the image that should be used as the node’s background.
PNG, JPG, and SVG are supported formats.
You may use a data URI to use embedded images,
thereby saving a HTTP request.

#### Inherited from

[BackgroundImage](components_ClusterNodeContainer._internal_.BackgroundImage.md).[background-image](components_ClusterNodeContainer._internal_.BackgroundImage.md#background-image)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3670

___

### background-image-opacity

• `Optional` **background-image-opacity**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`number`\>

The opacity of the background image. [0 1]

#### Inherited from

[BackgroundImage](components_ClusterNodeContainer._internal_.BackgroundImage.md).[background-image-opacity](components_ClusterNodeContainer._internal_.BackgroundImage.md#background-image-opacity)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3674

___

### background-opacity

• `Optional` **background-opacity**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`number`\>

The opacity level of the node’s background colour.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3622

___

### background-position-x

• `Optional` **background-position-x**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`string` \| `number`\>

The x position of the background image,
measured in percent(e.g. 50%) or pixels (e.g. 10px).

#### Inherited from

[BackgroundImage](components_ClusterNodeContainer._internal_.BackgroundImage.md).[background-position-x](components_ClusterNodeContainer._internal_.BackgroundImage.md#background-position-x)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3711

___

### background-position-y

• `Optional` **background-position-y**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`string` \| `number`\>

The y position of the background image,
measured in percent(e.g. 50%) or pixels (e.g. 10px).

#### Inherited from

[BackgroundImage](components_ClusterNodeContainer._internal_.BackgroundImage.md).[background-position-y](components_ClusterNodeContainer._internal_.BackgroundImage.md#background-position-y)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3716

___

### background-repeat

• `Optional` **background-repeat**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<``"repeat"`` \| ``"no-repeat"`` \| ``"repeat-x"`` \| ``"repeat-y"``\>

Whether to repeat the background image;
may be no-repeat, repeat-x, repeat-y, or repeat.

#### Inherited from

[BackgroundImage](components_ClusterNodeContainer._internal_.BackgroundImage.md).[background-repeat](components_ClusterNodeContainer._internal_.BackgroundImage.md#background-repeat)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3706

___

### background-width

• `Optional` **background-width**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`string` \| `number`\>

Specifies the width of the image.
A percent value (e.g. 50%) may be used to set
the image width relative to the node width.
If used in combination with background- fit,
then this value overrides the width of the image
in calculating the fitting — thereby overriding the aspect ratio.
The auto value is used by default, which uses the width of the image.

#### Inherited from

[BackgroundImage](components_ClusterNodeContainer._internal_.BackgroundImage.md).[background-width](components_ClusterNodeContainer._internal_.BackgroundImage.md#background-width)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3684

___

### backgroundColor

• `Optional` **backgroundColor**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`string`\>

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3609

___

### border-color

• `Optional` **border-color**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`string`\>

The colour of the node’s border.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3634

___

### border-opacity

• `Optional` **border-opacity**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`number`\>

The opacity of the node’s border.
A value between [0 1].

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3639

___

### border-style

• `Optional` **border-style**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<[`LineStyle`](../modules/components_ClusterNodeContainer._internal_.md#linestyle)\>

The style of the node’s border.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3630

___

### border-width

• `Optional` **border-width**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`string` \| `number`\>

The size of the node’s border.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3626

___

### color

• `Optional` **color**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `string`\>

The colour of the element’s label.

#### Inherited from

Partial.color

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4096

___

### content

• `Optional` **content**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`string`\>

The CSS content field

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3591

___

### display

• `Optional` **display**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, ``"none"`` \| ``"displayed"``\>

Whether to display the element; may be element for displayed or none for not displayed.
Note that a "display: none" bezier edge does not take up space in its bundle.

#### Inherited from

Partial.display

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4043

___

### events

• `Optional` **events**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, ``"no"`` \| ``"yes"``\>

Whether events should occur on an element (e.g.tap, mouseover, etc.).
 * For "no", the element receives no events and events simply pass through to the core/viewport.

#### Inherited from

Partial.events

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4324

___

### font-family

• `Optional` **font-family**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `string`\>

A comma-separated list of font names to use on the label text.

#### Inherited from

Partial.font-family

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4104

___

### font-size

• `Optional` **font-size**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `string` \| `number`\>

The size of the label text.
https://developer.mozilla.org/en-US/docs/Web/CSS/font-family

#### Inherited from

Partial.font-size

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4109

___

### font-style

• `Optional` **font-style**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, [`FontStyle`](../modules/components_ClusterNodeContainer._internal_.md#fontstyle)\>

A CSS font style to be applied to the label text.
https://developer.mozilla.org/en-US/docs/Web/CSS/font-style

#### Inherited from

Partial.font-style

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4114

___

### font-weight

• `Optional` **font-weight**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, [`FontWeight`](../modules/components_ClusterNodeContainer._internal_.md#fontweight)\>

A CSS font weight to be applied to the label text.

#### Inherited from

Partial.font-weight

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4118

___

### ghost

• `Optional` **ghost**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<``"no"`` \| ``"yes"``\>

Whether to use the ghost effect; may be yes or no.

#### Inherited from

Partial.ghost

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3732

___

### ghost-offset-x

• `Optional` **ghost-offset-x**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`number`\>

The horizontal offset used to position the ghost effect.

#### Inherited from

Partial.ghost-offset-x

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3736

___

### ghost-offset-y

• `Optional` **ghost-offset-y**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`number`\>

The vertical offset used to position the ghost effect.

#### Inherited from

Partial.ghost-offset-y

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3740

___

### ghost-opacity

• `Optional` **ghost-opacity**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`number`\>

The opacity of the ghost effect.

#### Inherited from

Partial.ghost-opacity

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3744

___

### height

• `Optional` **height**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`string` \| `number`\>

The height of the node’s body.
This property can take on the special value label
so the height is automatically based on the node’s label.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3603

___

### label

• `Optional` **label**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `string`\>

The text to display for an element’s label.

#### Inherited from

Partial.label

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4081

___

### min-zoomed-font-size

• `Optional` **min-zoomed-font-size**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `number`\>

If zooming makes the effective font size of the label smaller than this,
then no label is shown.Note that because of performance optimisations,
the label may be shown at font sizes slightly smaller than this value.

This effect is more pronounced at larger screen pixel ratios.However,
it is guaranteed that the label will be shown at sizes equal to or greater than the value specified.

#### Inherited from

Partial.min-zoomed-font-size

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4313

___

### opacity

• `Optional` **opacity**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `number`\>

The opacity of the element, ranging from 0 to 1.
Note that the opacity of a compound node parent affects the effective opacity of its children.

#### Inherited from

Partial.opacity

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4053

___

### overlay-color

• `Optional` **overlay-color**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`string`\>

The colour of the overlay.

#### Inherited from

Partial.overlay-color

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4341

___

### overlay-opacity

• `Optional` **overlay-opacity**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`number`\>

The opacity of the overlay.

#### Inherited from

Partial.overlay-opacity

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4349

___

### overlay-padding

• `Optional` **overlay-padding**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`string` \| `number`\>

The area outside of the element within which the overlay is shown.

#### Inherited from

Partial.overlay-padding

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4345

___

### padding-bottom

• `Optional` **padding-bottom**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`string`\>

#### Inherited from

[PaddingNode](components_ClusterNodeContainer._internal_.PaddingNode.md).[padding-bottom](components_ClusterNodeContainer._internal_.PaddingNode.md#padding-bottom)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3652

___

### padding-left

• `Optional` **padding-left**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`string`\>

#### Inherited from

[PaddingNode](components_ClusterNodeContainer._internal_.PaddingNode.md).[padding-left](components_ClusterNodeContainer._internal_.PaddingNode.md#padding-left)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3649

___

### padding-right

• `Optional` **padding-right**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`string`\>

#### Inherited from

[PaddingNode](components_ClusterNodeContainer._internal_.PaddingNode.md).[padding-right](components_ClusterNodeContainer._internal_.PaddingNode.md#padding-right)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3650

___

### padding-top

• `Optional` **padding-top**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`string`\>

#### Inherited from

[PaddingNode](components_ClusterNodeContainer._internal_.PaddingNode.md).[padding-top](components_ClusterNodeContainer._internal_.PaddingNode.md#padding-top)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3651

___

### pie-i-background-color

• `Optional` **pie-i-background-color**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`string`\>

The colour of the node’s ith pie chart slice.

#### Inherited from

Partial.pie-i-background-color

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3772

___

### pie-i-background-opacity

• `Optional` **pie-i-background-opacity**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`number`\>

The opacity of the node’s ith pie chart slice.

#### Inherited from

Partial.pie-i-background-opacity

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3780

___

### pie-i-background-size

• `Optional` **pie-i-background-size**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`number`\>

The size of the node’s ith pie chart slice, measured in percent (e.g. 25% or 25).

#### Inherited from

Partial.pie-i-background-size

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3776

___

### pie-size

• `Optional` **pie-size**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`string`\>

The diameter of the pie, measured as a percent of node size (e.g. 100%) or an absolute length (e.g. 25px).

#### Inherited from

Partial.pie-size

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3768

___

### shape

• `Optional` **shape**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<[`NodeShape`](../modules/components_ClusterNodeContainer._internal_.md#nodeshape)\>

The shape of the node’s body.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3607

___

### shape-polygon-points

• `Optional` **shape-polygon-points**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`string`\>

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3608

___

### source-label

• `Optional` **source-label**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `string`\>

The text to display for an edge’s source label.

#### Inherited from

Partial.source-label

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4085

___

### source-text-margin-x

• `Optional` **source-text-margin-x**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `number`\>

(For the source label of an edge.)

#### Inherited from

Partial.source-text-margin-x

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4182

___

### source-text-margin-y

• `Optional` **source-text-margin-y**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `number`\>

(For the source label of an edge.)

#### Inherited from

Partial.source-text-margin-y

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4186

___

### source-text-offset

• `Optional` **source-text-offset**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `number`\>

For the source label of an edge, how far from the source node the label should be placed.

#### Inherited from

Partial.source-text-offset

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4162

___

### source-text-rotation

• `Optional` **source-text-rotation**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `number`\>

(For the source label of an edge.)

#### Inherited from

Partial.source-text-rotation

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4211

___

### target-label

• `Optional` **target-label**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `string`\>

The text to display for an edge’s target label.

#### Inherited from

Partial.target-label

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4089

___

### target-text-margin-x

• `Optional` **target-text-margin-x**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `number`\>

(For the target label of an edge.)

#### Inherited from

Partial.target-text-margin-x

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4190

___

### target-text-margin-y

• `Optional` **target-text-margin-y**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `number`\>

(For the target label of an edge.)

#### Inherited from

Partial.target-text-margin-y

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4194

___

### target-text-offset

• `Optional` **target-text-offset**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `number`\>

For the target label of an edge, how far from the target node the label should be placed.

#### Inherited from

Partial.target-text-offset

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4166

___

### target-text-rotation

• `Optional` **target-text-rotation**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `number`\>

(For the target label of an edge.)

#### Inherited from

Partial.target-text-rotation

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4215

___

### text-background-color

• `Optional` **text-background-color**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `string`\>

A colour to apply on the text background.

#### Inherited from

Partial.text-background-color

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4270

___

### text-background-opacity

• `Optional` **text-background-opacity**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `number`\>

The opacity of the label background; the background is disabled for 0 (default value).

#### Inherited from

Partial.text-background-opacity

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4274

___

### text-background-padding

• `Optional` **text-background-padding**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `string`\>

The padding provides visual spacing between the text and the edge of the background.

#### Inherited from

Partial.text-background-padding

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4266

___

### text-background-shape

• `Optional` **text-background-shape**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, ``"rectangle"`` \| ``"roundrectangle"``\>

The shape to use for the label background.

#### Inherited from

Partial.text-background-shape

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4278

___

### text-border-color

• `Optional` **text-border-color**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `string`\>

The colour of the border around the label.

#### Inherited from

Partial.text-border-color

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4299

___

### text-border-opacity

• `Optional` **text-border-opacity**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `number`\>

The width of the border around the label; the border is disabled for 0 (default value).

#### Inherited from

Partial.text-border-opacity

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4287

___

### text-border-style

• `Optional` **text-border-style**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, [`LineStyle`](../modules/components_ClusterNodeContainer._internal_.md#linestyle)\>

The style of the border around the label.

#### Inherited from

Partial.text-border-style

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4295

___

### text-border-width

• `Optional` **text-border-width**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `number`\>

The width of the border around the label.

#### Inherited from

Partial.text-border-width

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4291

___

### text-events

• `Optional` **text-events**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, ``"no"`` \| ``"yes"``\>

 Whether events should occur on an element if the label receives an event.
You may want a style applied to the text on active so you know the text is activatable.

#### Inherited from

Partial.text-events

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4329

___

### text-halign

• `Optional` **text-halign**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, ``"right"`` \| ``"left"`` \| ``"center"``\>

The vertical alignment of a node’s label.

#### Inherited from

Partial.text-halign

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4149

___

### text-margin-x

• `Optional` **text-margin-x**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `number`\>

A margin that shifts the label along the x- axis.

#### Inherited from

Partial.text-margin-x

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4174

___

### text-margin-y

• `Optional` **text-margin-y**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `number`\>

A margin that shifts the label along the y- axis.

#### Inherited from

Partial.text-margin-y

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4178

___

### text-max-width

• `Optional` **text-max-width**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `string`\>

The maximum width for wrapped text,
applied when "text-wrap" is set to wrap.
For only manual newlines (i.e.\n), set a very large
value like 1000px such that only your newline characters would apply.

#### Inherited from

Partial.text-max-width

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4140

___

### text-opacity

• `Optional` **text-opacity**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `number`\>

The opacity of the label text, including its outline.

#### Inherited from

Partial.text-opacity

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4100

___

### text-outline-color

• `Optional` **text-outline-color**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `string`\>

The colour of the outline around the element’s label text.

#### Inherited from

Partial.text-outline-color

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4224

___

### text-outline-opacity

• `Optional` **text-outline-opacity**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `number`\>

The opacity of the outline on label text.

#### Inherited from

Partial.text-outline-opacity

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4228

___

### text-outline-width

• `Optional` **text-outline-width**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `string` \| `number`\>

The size of the outline on label text.

#### Inherited from

Partial.text-outline-width

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4232

___

### text-rotation

• `Optional` **text-rotation**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `number`\>

A rotation angle that is applied to the label.
 * For edges, the special value autorotate can be used to align the label to the edge.
 * For nodes, the label is rotated along its anchor point on the node, so a label margin may help for some usecases.
 * The special value none can be used to denote 0deg.
 * Rotations works best with left- to - right text.

#### Inherited from

Partial.text-rotation

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4206

___

### text-shadow-blur

• `Optional` **text-shadow-blur**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `number`\>

The shadow blur distance.

#### Inherited from

Partial.text-shadow-blur

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4239

___

### text-shadow-color

• `Optional` **text-shadow-color**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `string`\>

The colour of the shadow.

#### Inherited from

Partial.text-shadow-color

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4243

___

### text-shadow-offset-x

• `Optional` **text-shadow-offset-x**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `number`\>

The x offset relative to the text where the shadow will be displayed, can be negative.
If you set blur to 0, add an offset to view your shadow.

#### Inherited from

Partial.text-shadow-offset-x

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4248

___

### text-shadow-offset-y

• `Optional` **text-shadow-offset-y**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `number`\>

The y offset relative to the text where the shadow will be displayed, can be negative.
If you set blur to 0, add an offset to view your shadow.

#### Inherited from

Partial.text-shadow-offset-y

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4253

___

### text-shadow-opacity

• `Optional` **text-shadow-opacity**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `number`\>

The opacity of the shadow on the text; the shadow is disabled for 0 (default value).

#### Inherited from

Partial.text-shadow-opacity

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4257

___

### text-transform

• `Optional` **text-transform**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, [`TextTranformation`](../modules/components_ClusterNodeContainer._internal_.md#texttranformation)\>

A transformation to apply to the label text.

#### Inherited from

Partial.text-transform

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4122

___

### text-valign

• `Optional` **text-valign**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, ``"top"`` \| ``"bottom"`` \| ``"center"``\>

The vertical alignment of a node’s label.

#### Inherited from

Partial.text-valign

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4153

___

### text-wrap

• `Optional` **text-wrap**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, ``"none"`` \| ``"wrap"`` \| ``"ellipsis"``\>

A wrapping style to apply to the label text; may be
 * "none" for no wrapping (including manual newlines ) or
 * "wrap" for manual and/ or autowrapping.

#### Inherited from

Partial.text-wrap

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4133

___

### transition-delay

• `Optional` **transition-delay**: `number`

The length of the delay in seconds before the transition occurs (e.g. 250ms).

#### Inherited from

Partial.transition-delay

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4377

___

### transition-duration

• `Optional` **transition-duration**: `number`

The length of the transition in seconds(e.g. 0.5s).

#### Inherited from

Partial.transition-duration

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4373

___

### transition-property

• `Optional` **transition-property**: `string`

A comma separated list of style properties to animate in this state.

#### Inherited from

Partial.transition-property

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4369

___

### transition-timing-function

• `Optional` **transition-timing-function**: [`TransitionTimingFunction`](../modules/components_ClusterNodeContainer._internal_.md#transitiontimingfunction)

An easing function that controls the animation progress curve (a visualisation of easings serves as a reference).

#### Inherited from

Partial.transition-timing-function

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4381

___

### visibility

• `Optional` **visibility**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, ``"visible"`` \| ``"hidden"``\>

Whether the element is visible; may be visible or hidden.
Note that a "visibility : hidden" bezier edge still takes up space in its bundle.

#### Inherited from

Partial.visibility

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4048

___

### width

• `Optional` **width**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`string` \| `number`\>

The width of the node’s body.
This property can take on the special value label
so the width is automatically based on the node’s label.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3597

___

### z-index

• `Optional` **z-index**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`NodeSingular`, `number`\>

An integer value that affects the relative draw order of elements.
In general, an element with a higher "z-index" will be drawn on top of an element with a lower "z-index".
Note that edges are under nodes despite "z-index", except when necessary for compound nodes.

#### Inherited from

Partial.z-index

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4059
