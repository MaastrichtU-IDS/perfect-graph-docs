[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Labels

# Interface: Labels<SingularType\>

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Labels

Labels
Label text:

http://js.cytoscape.org/#style/labels

## Type parameters

| Name | Type |
| :------ | :------ |
| `SingularType` | extends `NodeSingular` \| `EdgeSingular` |

## Table of contents

### Properties

- [color](components_ClusterNodeContainer._internal_.Labels.md#color)
- [font-family](components_ClusterNodeContainer._internal_.Labels.md#font-family)
- [font-size](components_ClusterNodeContainer._internal_.Labels.md#font-size)
- [font-style](components_ClusterNodeContainer._internal_.Labels.md#font-style)
- [font-weight](components_ClusterNodeContainer._internal_.Labels.md#font-weight)
- [label](components_ClusterNodeContainer._internal_.Labels.md#label)
- [min-zoomed-font-size](components_ClusterNodeContainer._internal_.Labels.md#min-zoomed-font-size)
- [source-label](components_ClusterNodeContainer._internal_.Labels.md#source-label)
- [source-text-margin-x](components_ClusterNodeContainer._internal_.Labels.md#source-text-margin-x)
- [source-text-margin-y](components_ClusterNodeContainer._internal_.Labels.md#source-text-margin-y)
- [source-text-offset](components_ClusterNodeContainer._internal_.Labels.md#source-text-offset)
- [source-text-rotation](components_ClusterNodeContainer._internal_.Labels.md#source-text-rotation)
- [target-label](components_ClusterNodeContainer._internal_.Labels.md#target-label)
- [target-text-margin-x](components_ClusterNodeContainer._internal_.Labels.md#target-text-margin-x)
- [target-text-margin-y](components_ClusterNodeContainer._internal_.Labels.md#target-text-margin-y)
- [target-text-offset](components_ClusterNodeContainer._internal_.Labels.md#target-text-offset)
- [target-text-rotation](components_ClusterNodeContainer._internal_.Labels.md#target-text-rotation)
- [text-background-color](components_ClusterNodeContainer._internal_.Labels.md#text-background-color)
- [text-background-opacity](components_ClusterNodeContainer._internal_.Labels.md#text-background-opacity)
- [text-background-padding](components_ClusterNodeContainer._internal_.Labels.md#text-background-padding)
- [text-background-shape](components_ClusterNodeContainer._internal_.Labels.md#text-background-shape)
- [text-border-color](components_ClusterNodeContainer._internal_.Labels.md#text-border-color)
- [text-border-opacity](components_ClusterNodeContainer._internal_.Labels.md#text-border-opacity)
- [text-border-style](components_ClusterNodeContainer._internal_.Labels.md#text-border-style)
- [text-border-width](components_ClusterNodeContainer._internal_.Labels.md#text-border-width)
- [text-halign](components_ClusterNodeContainer._internal_.Labels.md#text-halign)
- [text-margin-x](components_ClusterNodeContainer._internal_.Labels.md#text-margin-x)
- [text-margin-y](components_ClusterNodeContainer._internal_.Labels.md#text-margin-y)
- [text-max-width](components_ClusterNodeContainer._internal_.Labels.md#text-max-width)
- [text-opacity](components_ClusterNodeContainer._internal_.Labels.md#text-opacity)
- [text-outline-color](components_ClusterNodeContainer._internal_.Labels.md#text-outline-color)
- [text-outline-opacity](components_ClusterNodeContainer._internal_.Labels.md#text-outline-opacity)
- [text-outline-width](components_ClusterNodeContainer._internal_.Labels.md#text-outline-width)
- [text-rotation](components_ClusterNodeContainer._internal_.Labels.md#text-rotation)
- [text-shadow-blur](components_ClusterNodeContainer._internal_.Labels.md#text-shadow-blur)
- [text-shadow-color](components_ClusterNodeContainer._internal_.Labels.md#text-shadow-color)
- [text-shadow-offset-x](components_ClusterNodeContainer._internal_.Labels.md#text-shadow-offset-x)
- [text-shadow-offset-y](components_ClusterNodeContainer._internal_.Labels.md#text-shadow-offset-y)
- [text-shadow-opacity](components_ClusterNodeContainer._internal_.Labels.md#text-shadow-opacity)
- [text-transform](components_ClusterNodeContainer._internal_.Labels.md#text-transform)
- [text-valign](components_ClusterNodeContainer._internal_.Labels.md#text-valign)
- [text-wrap](components_ClusterNodeContainer._internal_.Labels.md#text-wrap)

## Properties

### color

• **color**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `string`\>

The colour of the element’s label.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4096

___

### font-family

• **font-family**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `string`\>

A comma-separated list of font names to use on the label text.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4104

___

### font-size

• **font-size**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `string` \| `number`\>

The size of the label text.
https://developer.mozilla.org/en-US/docs/Web/CSS/font-family

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4109

___

### font-style

• **font-style**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, [`FontStyle`](../modules/components_ClusterNodeContainer._internal_.md#fontstyle)\>

A CSS font style to be applied to the label text.
https://developer.mozilla.org/en-US/docs/Web/CSS/font-style

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4114

___

### font-weight

• **font-weight**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, [`FontWeight`](../modules/components_ClusterNodeContainer._internal_.md#fontweight)\>

A CSS font weight to be applied to the label text.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4118

___

### label

• **label**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `string`\>

The text to display for an element’s label.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4081

___

### min-zoomed-font-size

• **min-zoomed-font-size**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `number`\>

If zooming makes the effective font size of the label smaller than this,
then no label is shown.Note that because of performance optimisations,
the label may be shown at font sizes slightly smaller than this value.

This effect is more pronounced at larger screen pixel ratios.However,
it is guaranteed that the label will be shown at sizes equal to or greater than the value specified.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4313

___

### source-label

• **source-label**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `string`\>

The text to display for an edge’s source label.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4085

___

### source-text-margin-x

• **source-text-margin-x**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `number`\>

(For the source label of an edge.)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4182

___

### source-text-margin-y

• **source-text-margin-y**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `number`\>

(For the source label of an edge.)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4186

___

### source-text-offset

• **source-text-offset**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `number`\>

For the source label of an edge, how far from the source node the label should be placed.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4162

___

### source-text-rotation

• **source-text-rotation**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `number`\>

(For the source label of an edge.)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4211

___

### target-label

• **target-label**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `string`\>

The text to display for an edge’s target label.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4089

___

### target-text-margin-x

• **target-text-margin-x**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `number`\>

(For the target label of an edge.)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4190

___

### target-text-margin-y

• **target-text-margin-y**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `number`\>

(For the target label of an edge.)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4194

___

### target-text-offset

• **target-text-offset**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `number`\>

For the target label of an edge, how far from the target node the label should be placed.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4166

___

### target-text-rotation

• **target-text-rotation**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `number`\>

(For the target label of an edge.)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4215

___

### text-background-color

• **text-background-color**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `string`\>

A colour to apply on the text background.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4270

___

### text-background-opacity

• **text-background-opacity**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `number`\>

The opacity of the label background; the background is disabled for 0 (default value).

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4274

___

### text-background-padding

• **text-background-padding**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `string`\>

The padding provides visual spacing between the text and the edge of the background.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4266

___

### text-background-shape

• **text-background-shape**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, ``"rectangle"`` \| ``"roundrectangle"``\>

The shape to use for the label background.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4278

___

### text-border-color

• **text-border-color**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `string`\>

The colour of the border around the label.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4299

___

### text-border-opacity

• **text-border-opacity**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `number`\>

The width of the border around the label; the border is disabled for 0 (default value).

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4287

___

### text-border-style

• **text-border-style**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, [`LineStyle`](../modules/components_ClusterNodeContainer._internal_.md#linestyle)\>

The style of the border around the label.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4295

___

### text-border-width

• **text-border-width**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `number`\>

The width of the border around the label.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4291

___

### text-halign

• **text-halign**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, ``"right"`` \| ``"left"`` \| ``"center"``\>

The vertical alignment of a node’s label.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4149

___

### text-margin-x

• **text-margin-x**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `number`\>

A margin that shifts the label along the x- axis.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4174

___

### text-margin-y

• **text-margin-y**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `number`\>

A margin that shifts the label along the y- axis.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4178

___

### text-max-width

• **text-max-width**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `string`\>

The maximum width for wrapped text,
applied when "text-wrap" is set to wrap.
For only manual newlines (i.e.\n), set a very large
value like 1000px such that only your newline characters would apply.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4140

___

### text-opacity

• **text-opacity**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `number`\>

The opacity of the label text, including its outline.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4100

___

### text-outline-color

• **text-outline-color**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `string`\>

The colour of the outline around the element’s label text.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4224

___

### text-outline-opacity

• **text-outline-opacity**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `number`\>

The opacity of the outline on label text.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4228

___

### text-outline-width

• **text-outline-width**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `string` \| `number`\>

The size of the outline on label text.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4232

___

### text-rotation

• **text-rotation**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `number`\>

A rotation angle that is applied to the label.
 * For edges, the special value autorotate can be used to align the label to the edge.
 * For nodes, the label is rotated along its anchor point on the node, so a label margin may help for some usecases.
 * The special value none can be used to denote 0deg.
 * Rotations works best with left- to - right text.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4206

___

### text-shadow-blur

• **text-shadow-blur**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `number`\>

The shadow blur distance.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4239

___

### text-shadow-color

• **text-shadow-color**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `string`\>

The colour of the shadow.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4243

___

### text-shadow-offset-x

• **text-shadow-offset-x**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `number`\>

The x offset relative to the text where the shadow will be displayed, can be negative.
If you set blur to 0, add an offset to view your shadow.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4248

___

### text-shadow-offset-y

• **text-shadow-offset-y**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `number`\>

The y offset relative to the text where the shadow will be displayed, can be negative.
If you set blur to 0, add an offset to view your shadow.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4253

___

### text-shadow-opacity

• **text-shadow-opacity**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `number`\>

The opacity of the shadow on the text; the shadow is disabled for 0 (default value).

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4257

___

### text-transform

• **text-transform**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, [`TextTranformation`](../modules/components_ClusterNodeContainer._internal_.md#texttranformation)\>

A transformation to apply to the label text.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4122

___

### text-valign

• **text-valign**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, ``"top"`` \| ``"bottom"`` \| ``"center"``\>

The vertical alignment of a node’s label.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4153

___

### text-wrap

• **text-wrap**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, ``"none"`` \| ``"wrap"`` \| ``"ellipsis"``\>

A wrapping style to apply to the label text; may be
 * "none" for no wrapping (including manual newlines ) or
 * "wrap" for manual and/ or autowrapping.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4133
