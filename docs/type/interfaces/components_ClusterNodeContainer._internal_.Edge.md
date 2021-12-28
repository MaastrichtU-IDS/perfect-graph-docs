[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Edge

# Interface: Edge

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Edge

## Hierarchy

- [`EdgeLine`](components_ClusterNodeContainer._internal_.EdgeLine.md)

- [`EdgeArrow`](components_ClusterNodeContainer._internal_.EdgeArrow.md)

- [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`Gradient`](components_ClusterNodeContainer._internal_.Gradient.md)\>

- [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`Overlay`](components_ClusterNodeContainer._internal_.Overlay.md)\>

- [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`BezierEdges`](components_ClusterNodeContainer._internal_.BezierEdges.md)\>

- [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`UnbundledBezierEdges`](components_ClusterNodeContainer._internal_.UnbundledBezierEdges.md)\>

- [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`HaystackEdges`](components_ClusterNodeContainer._internal_.HaystackEdges.md)\>

- [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`SegmentsEdges`](components_ClusterNodeContainer._internal_.SegmentsEdges.md)\>

- [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`Visibility`](components_ClusterNodeContainer._internal_.Visibility.md)<`EdgeSingular`\>\>

- [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`Labels`](components_ClusterNodeContainer._internal_.Labels.md)<`EdgeSingular`\>\>

- [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`Events`](components_ClusterNodeContainer._internal_.Events.md)<`EdgeSingular`\>\>

- [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`EdgeEndpoints`](components_ClusterNodeContainer._internal_.EdgeEndpoints.md)<`EdgeSingular`\>\>

- [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`TransitionAnimation`](components_ClusterNodeContainer._internal_.TransitionAnimation.md)\>

  ↳ **`Edge`**

## Table of contents

### Properties

- [arrow-scale](components_ClusterNodeContainer._internal_.Edge.md#arrow-scale)
- [color](components_ClusterNodeContainer._internal_.Edge.md#color)
- [control-point-distance](components_ClusterNodeContainer._internal_.Edge.md#control-point-distance)
- [control-point-distances](components_ClusterNodeContainer._internal_.Edge.md#control-point-distances)
- [control-point-step-size](components_ClusterNodeContainer._internal_.Edge.md#control-point-step-size)
- [control-point-weight](components_ClusterNodeContainer._internal_.Edge.md#control-point-weight)
- [control-point-weights](components_ClusterNodeContainer._internal_.Edge.md#control-point-weights)
- [curve-style](components_ClusterNodeContainer._internal_.Edge.md#curve-style)
- [display](components_ClusterNodeContainer._internal_.Edge.md#display)
- [edge-distances](components_ClusterNodeContainer._internal_.Edge.md#edge-distances)
- [events](components_ClusterNodeContainer._internal_.Edge.md#events)
- [font-family](components_ClusterNodeContainer._internal_.Edge.md#font-family)
- [font-size](components_ClusterNodeContainer._internal_.Edge.md#font-size)
- [font-style](components_ClusterNodeContainer._internal_.Edge.md#font-style)
- [font-weight](components_ClusterNodeContainer._internal_.Edge.md#font-weight)
- [haystack-radius](components_ClusterNodeContainer._internal_.Edge.md#haystack-radius)
- [label](components_ClusterNodeContainer._internal_.Edge.md#label)
- [line-cap](components_ClusterNodeContainer._internal_.Edge.md#line-cap)
- [line-color](components_ClusterNodeContainer._internal_.Edge.md#line-color)
- [line-dash-offset](components_ClusterNodeContainer._internal_.Edge.md#line-dash-offset)
- [line-dash-pattern](components_ClusterNodeContainer._internal_.Edge.md#line-dash-pattern)
- [line-fill](components_ClusterNodeContainer._internal_.Edge.md#line-fill)
- [line-gradient-stop-colors](components_ClusterNodeContainer._internal_.Edge.md#line-gradient-stop-colors)
- [line-gradient-stop-positions](components_ClusterNodeContainer._internal_.Edge.md#line-gradient-stop-positions)
- [line-style](components_ClusterNodeContainer._internal_.Edge.md#line-style)
- [mid-source-arrow-color](components_ClusterNodeContainer._internal_.Edge.md#mid-source-arrow-color)
- [mid-source-arrow-fill](components_ClusterNodeContainer._internal_.Edge.md#mid-source-arrow-fill)
- [mid-source-arrow-shape](components_ClusterNodeContainer._internal_.Edge.md#mid-source-arrow-shape)
- [mid-target-arrow-color](components_ClusterNodeContainer._internal_.Edge.md#mid-target-arrow-color)
- [mid-target-arrow-fill](components_ClusterNodeContainer._internal_.Edge.md#mid-target-arrow-fill)
- [mid-target-arrow-shape](components_ClusterNodeContainer._internal_.Edge.md#mid-target-arrow-shape)
- [min-zoomed-font-size](components_ClusterNodeContainer._internal_.Edge.md#min-zoomed-font-size)
- [opacity](components_ClusterNodeContainer._internal_.Edge.md#opacity)
- [overlay-color](components_ClusterNodeContainer._internal_.Edge.md#overlay-color)
- [overlay-opacity](components_ClusterNodeContainer._internal_.Edge.md#overlay-opacity)
- [overlay-padding](components_ClusterNodeContainer._internal_.Edge.md#overlay-padding)
- [segment-distances](components_ClusterNodeContainer._internal_.Edge.md#segment-distances)
- [segment-weights](components_ClusterNodeContainer._internal_.Edge.md#segment-weights)
- [source-arrow-color](components_ClusterNodeContainer._internal_.Edge.md#source-arrow-color)
- [source-arrow-fill](components_ClusterNodeContainer._internal_.Edge.md#source-arrow-fill)
- [source-arrow-shape](components_ClusterNodeContainer._internal_.Edge.md#source-arrow-shape)
- [source-distance-from-node](components_ClusterNodeContainer._internal_.Edge.md#source-distance-from-node)
- [source-endpoint](components_ClusterNodeContainer._internal_.Edge.md#source-endpoint)
- [source-label](components_ClusterNodeContainer._internal_.Edge.md#source-label)
- [source-text-margin-x](components_ClusterNodeContainer._internal_.Edge.md#source-text-margin-x)
- [source-text-margin-y](components_ClusterNodeContainer._internal_.Edge.md#source-text-margin-y)
- [source-text-offset](components_ClusterNodeContainer._internal_.Edge.md#source-text-offset)
- [source-text-rotation](components_ClusterNodeContainer._internal_.Edge.md#source-text-rotation)
- [target-arrow-color](components_ClusterNodeContainer._internal_.Edge.md#target-arrow-color)
- [target-arrow-fill](components_ClusterNodeContainer._internal_.Edge.md#target-arrow-fill)
- [target-arrow-shape](components_ClusterNodeContainer._internal_.Edge.md#target-arrow-shape)
- [target-distance-from-node](components_ClusterNodeContainer._internal_.Edge.md#target-distance-from-node)
- [target-endpoint](components_ClusterNodeContainer._internal_.Edge.md#target-endpoint)
- [target-label](components_ClusterNodeContainer._internal_.Edge.md#target-label)
- [target-text-margin-x](components_ClusterNodeContainer._internal_.Edge.md#target-text-margin-x)
- [target-text-margin-y](components_ClusterNodeContainer._internal_.Edge.md#target-text-margin-y)
- [target-text-offset](components_ClusterNodeContainer._internal_.Edge.md#target-text-offset)
- [target-text-rotation](components_ClusterNodeContainer._internal_.Edge.md#target-text-rotation)
- [text-background-color](components_ClusterNodeContainer._internal_.Edge.md#text-background-color)
- [text-background-opacity](components_ClusterNodeContainer._internal_.Edge.md#text-background-opacity)
- [text-background-padding](components_ClusterNodeContainer._internal_.Edge.md#text-background-padding)
- [text-background-shape](components_ClusterNodeContainer._internal_.Edge.md#text-background-shape)
- [text-border-color](components_ClusterNodeContainer._internal_.Edge.md#text-border-color)
- [text-border-opacity](components_ClusterNodeContainer._internal_.Edge.md#text-border-opacity)
- [text-border-style](components_ClusterNodeContainer._internal_.Edge.md#text-border-style)
- [text-border-width](components_ClusterNodeContainer._internal_.Edge.md#text-border-width)
- [text-events](components_ClusterNodeContainer._internal_.Edge.md#text-events)
- [text-halign](components_ClusterNodeContainer._internal_.Edge.md#text-halign)
- [text-margin-x](components_ClusterNodeContainer._internal_.Edge.md#text-margin-x)
- [text-margin-y](components_ClusterNodeContainer._internal_.Edge.md#text-margin-y)
- [text-max-width](components_ClusterNodeContainer._internal_.Edge.md#text-max-width)
- [text-opacity](components_ClusterNodeContainer._internal_.Edge.md#text-opacity)
- [text-outline-color](components_ClusterNodeContainer._internal_.Edge.md#text-outline-color)
- [text-outline-opacity](components_ClusterNodeContainer._internal_.Edge.md#text-outline-opacity)
- [text-outline-width](components_ClusterNodeContainer._internal_.Edge.md#text-outline-width)
- [text-rotation](components_ClusterNodeContainer._internal_.Edge.md#text-rotation)
- [text-shadow-blur](components_ClusterNodeContainer._internal_.Edge.md#text-shadow-blur)
- [text-shadow-color](components_ClusterNodeContainer._internal_.Edge.md#text-shadow-color)
- [text-shadow-offset-x](components_ClusterNodeContainer._internal_.Edge.md#text-shadow-offset-x)
- [text-shadow-offset-y](components_ClusterNodeContainer._internal_.Edge.md#text-shadow-offset-y)
- [text-shadow-opacity](components_ClusterNodeContainer._internal_.Edge.md#text-shadow-opacity)
- [text-transform](components_ClusterNodeContainer._internal_.Edge.md#text-transform)
- [text-valign](components_ClusterNodeContainer._internal_.Edge.md#text-valign)
- [text-wrap](components_ClusterNodeContainer._internal_.Edge.md#text-wrap)
- [transition-delay](components_ClusterNodeContainer._internal_.Edge.md#transition-delay)
- [transition-duration](components_ClusterNodeContainer._internal_.Edge.md#transition-duration)
- [transition-property](components_ClusterNodeContainer._internal_.Edge.md#transition-property)
- [transition-timing-function](components_ClusterNodeContainer._internal_.Edge.md#transition-timing-function)
- [visibility](components_ClusterNodeContainer._internal_.Edge.md#visibility)
- [width](components_ClusterNodeContainer._internal_.Edge.md#width)
- [z-index](components_ClusterNodeContainer._internal_.Edge.md#z-index)

## Properties

### arrow-scale

• `Optional` **arrow-scale**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`number`\>

The size of the arrow.

#### Inherited from

[EdgeArrow](components_ClusterNodeContainer._internal_.EdgeArrow.md).[arrow-scale](components_ClusterNodeContainer._internal_.EdgeArrow.md#arrow-scale)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3995

___

### color

• `Optional` **color**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `string`\>

The colour of the element’s label.

#### Inherited from

Partial.color

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4096

___

### control-point-distance

• `Optional` **control-point-distance**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`number`\>

A single value that overrides "control-point-step-size" with a manual value.
Because it overrides the step size, bezier edges with the same value will overlap.
Thus, it’s best to use this as a one- off value for particular edges if need be.

#### Inherited from

Partial.control-point-distance

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3877

___

### control-point-distances

• `Optional` **control-point-distances**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`string`\>

A series of values that specify for each control point the
distance perpendicular to a line formed
from source to target, e.g. -20 20 - 20.

#### Inherited from

Partial.control-point-distances

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3910

___

### control-point-step-size

• `Optional` **control-point-step-size**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`number`\>

From the line perpendicular from source to target,
this value specifies the distance between successive bezier edges.

#### Inherited from

Partial.control-point-step-size

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3871

___

### control-point-weight

• `Optional` **control-point-weight**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`number`\>

A single value that weights control points along the line from source to target.
The value usually ranges on [0, 1], with
0 towards the source node and
1 towards the target node —
but larger or smaller values can also be used.

#### Inherited from

Partial.control-point-weight

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3885

___

### control-point-weights

• `Optional` **control-point-weights**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`string`\>

A series of values that weights control points along
a line from source to target, e.g. 0.25 0.5 0.75.
A value usually ranges on [0, 1], with
0 towards the source node and
1 towards the target node
— but larger or smaller values can also be used.

#### Inherited from

Partial.control-point-weights

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3919

___

### curve-style

• `Optional` **curve-style**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<``"bezier"`` \| ``"segments"`` \| ``"straight"`` \| ``"haystack"`` \| ``"unbundled-bezier"`` \| ``"taxi"``\>

The curving method used to separate two or more edges between two nodes;
may be
 - haystack (default, very fast, bundled straight edges for which loops and compounds are unsupported),
 - bezier(bundled curved edges),
 - unbundled - bezier(curved edges for use with manual control points), or
 - segments (a series of straight lines).
Note that haystack edges work best with ellipse, rectangle, or similar nodes.
Smaller node shapes, like triangle, will not be as aesthetically pleasing.
Also note that edge arrows are unsupported for haystack edges.

#### Inherited from

[EdgeLine](components_ClusterNodeContainer._internal_.EdgeLine.md).[curve-style](components_ClusterNodeContainer._internal_.EdgeLine.md#curve-style)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3809

___

### display

• `Optional` **display**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, ``"none"`` \| ``"displayed"``\>

Whether to display the element; may be element for displayed or none for not displayed.
Note that a "display: none" bezier edge does not take up space in its bundle.

#### Inherited from

Partial.display

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4043

___

### edge-distances

• `Optional` **edge-distances**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<``"intersection"`` \| ``"node-position"``\>

With value intersection (default),
the line from source to target for "control-point-weight" is
from the outside of the source node’s shape to the outside of
the target node’s shape.With value node- position,
the line is from the source position to the target position.
The "node-position" option makes calculating edge points easier
— but it should be used carefully because you can create invalid
points that intersection would have automatically corrected.

#### Inherited from

Partial.edge-distances

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3896

___

### events

• `Optional` **events**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, ``"no"`` \| ``"yes"``\>

Whether events should occur on an element (e.g.tap, mouseover, etc.).
 * For "no", the element receives no events and events simply pass through to the core/viewport.

#### Inherited from

Partial.events

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4324

___

### font-family

• `Optional` **font-family**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `string`\>

A comma-separated list of font names to use on the label text.

#### Inherited from

Partial.font-family

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4104

___

### font-size

• `Optional` **font-size**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `string` \| `number`\>

The size of the label text.
https://developer.mozilla.org/en-US/docs/Web/CSS/font-family

#### Inherited from

Partial.font-size

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4109

___

### font-style

• `Optional` **font-style**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, [`FontStyle`](../modules/components_ClusterNodeContainer._internal_.md#fontstyle)\>

A CSS font style to be applied to the label text.
https://developer.mozilla.org/en-US/docs/Web/CSS/font-style

#### Inherited from

Partial.font-style

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4114

___

### font-weight

• `Optional` **font-weight**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, [`FontWeight`](../modules/components_ClusterNodeContainer._internal_.md#fontweight)\>

A CSS font weight to be applied to the label text.

#### Inherited from

Partial.font-weight

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4118

___

### haystack-radius

• `Optional` **haystack-radius**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`number`\>

A value between 0 and 1 inclusive that indicates the relative radius used to position haystack edges on their connected nodes.
The outside of the node is at 1, and the centre of the node is at 0.

#### Inherited from

Partial.haystack-radius

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3946

___

### label

• `Optional` **label**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `string`\>

The text to display for an element’s label.

#### Inherited from

Partial.label

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4081

___

### line-cap

• `Optional` **line-cap**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<``"butt"`` \| ``"round"`` \| ``"square"``\>

The cap of the edge's line.

#### Inherited from

[EdgeLine](components_ClusterNodeContainer._internal_.EdgeLine.md).[line-cap](components_ClusterNodeContainer._internal_.EdgeLine.md#line-cap)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3821

___

### line-color

• `Optional` **line-color**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`string`\>

The colour of the edge’s line.

#### Inherited from

[EdgeLine](components_ClusterNodeContainer._internal_.EdgeLine.md).[line-color](components_ClusterNodeContainer._internal_.EdgeLine.md#line-color)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3813

___

### line-dash-offset

• `Optional` **line-dash-offset**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`number`\>

The dashed line offset.

#### Inherited from

[EdgeLine](components_ClusterNodeContainer._internal_.EdgeLine.md).[line-dash-offset](components_ClusterNodeContainer._internal_.EdgeLine.md#line-dash-offset)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3833

___

### line-dash-pattern

• `Optional` **line-dash-pattern**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`number`\>[]

The dashed line pattern which specifies alternating lengths of lines and gaps.

#### Inherited from

[EdgeLine](components_ClusterNodeContainer._internal_.EdgeLine.md).[line-dash-pattern](components_ClusterNodeContainer._internal_.EdgeLine.md#line-dash-pattern)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3829

___

### line-fill

• `Optional` **line-fill**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<``"solid"`` \| ``"linear-gradient"`` \| ``"radial-gradient"``\>

The filling style of the edge's line.

#### Inherited from

[EdgeLine](components_ClusterNodeContainer._internal_.EdgeLine.md).[line-fill](components_ClusterNodeContainer._internal_.EdgeLine.md#line-fill)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3825

___

### line-gradient-stop-colors

• `Optional` **line-gradient-stop-colors**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`string`\>[]

The colors of the gradient stops.

#### Inherited from

Partial.line-gradient-stop-colors

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3853

___

### line-gradient-stop-positions

• `Optional` **line-gradient-stop-positions**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`number`\>[]

The positions of the gradient stops.
If not specified (or invalid), the stops will divide equally.

#### Inherited from

Partial.line-gradient-stop-positions

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3858

___

### line-style

• `Optional` **line-style**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<[`LineStyle`](../modules/components_ClusterNodeContainer._internal_.md#linestyle)\>

The style of the edge’s line.

#### Inherited from

[EdgeLine](components_ClusterNodeContainer._internal_.EdgeLine.md).[line-style](components_ClusterNodeContainer._internal_.EdgeLine.md#line-style)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3817

___

### mid-source-arrow-color

• `Optional` **mid-source-arrow-color**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`string`\>

The colour of the edge’s "mid-source" arrow.

#### Inherited from

[EdgeArrow](components_ClusterNodeContainer._internal_.EdgeArrow.md).[mid-source-arrow-color](components_ClusterNodeContainer._internal_.EdgeArrow.md#mid-source-arrow-color)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4000

___

### mid-source-arrow-fill

• `Optional` **mid-source-arrow-fill**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<[`ArrowFill`](../modules/components_ClusterNodeContainer._internal_.md#arrowfill)\>

The fill state of the edge’s mid-source arrow.

#### Inherited from

[EdgeArrow](components_ClusterNodeContainer._internal_.EdgeArrow.md).[mid-source-arrow-fill](components_ClusterNodeContainer._internal_.EdgeArrow.md#mid-source-arrow-fill)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4018

___

### mid-source-arrow-shape

• `Optional` **mid-source-arrow-shape**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<[`ArrowShape`](../modules/components_ClusterNodeContainer._internal_.md#arrowshape)\>

The shape of the edge’s mid-source arrow.

#### Inherited from

[EdgeArrow](components_ClusterNodeContainer._internal_.EdgeArrow.md).[mid-source-arrow-shape](components_ClusterNodeContainer._internal_.EdgeArrow.md#mid-source-arrow-shape)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4009

___

### mid-target-arrow-color

• `Optional` **mid-target-arrow-color**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`string`\>

The colour of the edge’s "mid-target" arrow.

#### Inherited from

[EdgeArrow](components_ClusterNodeContainer._internal_.EdgeArrow.md).[mid-target-arrow-color](components_ClusterNodeContainer._internal_.EdgeArrow.md#mid-target-arrow-color)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4004

___

### mid-target-arrow-fill

• `Optional` **mid-target-arrow-fill**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<[`ArrowFill`](../modules/components_ClusterNodeContainer._internal_.md#arrowfill)\>

The fill state of the edge’s mid-target arrow.

#### Inherited from

[EdgeArrow](components_ClusterNodeContainer._internal_.EdgeArrow.md).[mid-target-arrow-fill](components_ClusterNodeContainer._internal_.EdgeArrow.md#mid-target-arrow-fill)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4022

___

### mid-target-arrow-shape

• `Optional` **mid-target-arrow-shape**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<[`ArrowShape`](../modules/components_ClusterNodeContainer._internal_.md#arrowshape)\>

The shape of the edge’s mid-target arrow.

#### Inherited from

[EdgeArrow](components_ClusterNodeContainer._internal_.EdgeArrow.md).[mid-target-arrow-shape](components_ClusterNodeContainer._internal_.EdgeArrow.md#mid-target-arrow-shape)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4013

___

### min-zoomed-font-size

• `Optional` **min-zoomed-font-size**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `number`\>

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

• `Optional` **opacity**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `number`\>

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

### segment-distances

• `Optional` **segment-distances**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`string`\>

A series of values that specify for each segment point the distance perpendicular to a line formed from source to target, e.g. -20 20 - 20.

#### Inherited from

Partial.segment-distances

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3957

___

### segment-weights

• `Optional` **segment-weights**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`string`\>

A series of values that weights segment points along a line from source to target,
e.g. 0.25 0.5 0.75.A value usually ranges on [0, 1],
with 0 towards the source node and 1 towards the target node — but larger or smaller values can also be used.

#### Inherited from

Partial.segment-weights

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3963

___

### source-arrow-color

• `Optional` **source-arrow-color**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`string`\>

The colour of the edge’s source arrow.

#### Inherited from

[EdgeArrow](components_ClusterNodeContainer._internal_.EdgeArrow.md).[source-arrow-color](components_ClusterNodeContainer._internal_.EdgeArrow.md#source-arrow-color)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3998

___

### source-arrow-fill

• `Optional` **source-arrow-fill**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<[`ArrowFill`](../modules/components_ClusterNodeContainer._internal_.md#arrowfill)\>

The fill state of the edge’s source arrow.

#### Inherited from

[EdgeArrow](components_ClusterNodeContainer._internal_.EdgeArrow.md).[source-arrow-fill](components_ClusterNodeContainer._internal_.EdgeArrow.md#source-arrow-fill)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4016

___

### source-arrow-shape

• `Optional` **source-arrow-shape**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<[`ArrowShape`](../modules/components_ClusterNodeContainer._internal_.md#arrowshape)\>

The shape of the edge’s source arrow.

#### Inherited from

[EdgeArrow](components_ClusterNodeContainer._internal_.EdgeArrow.md).[source-arrow-shape](components_ClusterNodeContainer._internal_.EdgeArrow.md#source-arrow-shape)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4007

___

### source-distance-from-node

• `Optional` **source-distance-from-node**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`number`\>

The distance the edge ends from its source.

#### Inherited from

[EdgeLine](components_ClusterNodeContainer._internal_.EdgeLine.md).[source-distance-from-node](components_ClusterNodeContainer._internal_.EdgeLine.md#source-distance-from-node)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3841

___

### source-endpoint

• `Optional` **source-endpoint**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `string`\>

Specifies the endpoint of the source side of the edge

#### Inherited from

Partial.source-endpoint

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4030

___

### source-label

• `Optional` **source-label**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `string`\>

The text to display for an edge’s source label.

#### Inherited from

Partial.source-label

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4085

___

### source-text-margin-x

• `Optional` **source-text-margin-x**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `number`\>

(For the source label of an edge.)

#### Inherited from

Partial.source-text-margin-x

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4182

___

### source-text-margin-y

• `Optional` **source-text-margin-y**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `number`\>

(For the source label of an edge.)

#### Inherited from

Partial.source-text-margin-y

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4186

___

### source-text-offset

• `Optional` **source-text-offset**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `number`\>

For the source label of an edge, how far from the source node the label should be placed.

#### Inherited from

Partial.source-text-offset

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4162

___

### source-text-rotation

• `Optional` **source-text-rotation**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `number`\>

(For the source label of an edge.)

#### Inherited from

Partial.source-text-rotation

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4211

___

### target-arrow-color

• `Optional` **target-arrow-color**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`string`\>

The colour of the edge’s target arrow.

#### Inherited from

[EdgeArrow](components_ClusterNodeContainer._internal_.EdgeArrow.md).[target-arrow-color](components_ClusterNodeContainer._internal_.EdgeArrow.md#target-arrow-color)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4002

___

### target-arrow-fill

• `Optional` **target-arrow-fill**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<[`ArrowFill`](../modules/components_ClusterNodeContainer._internal_.md#arrowfill)\>

The fill state of the edge’s target arrow.

#### Inherited from

[EdgeArrow](components_ClusterNodeContainer._internal_.EdgeArrow.md).[target-arrow-fill](components_ClusterNodeContainer._internal_.EdgeArrow.md#target-arrow-fill)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4020

___

### target-arrow-shape

• `Optional` **target-arrow-shape**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<[`ArrowShape`](../modules/components_ClusterNodeContainer._internal_.md#arrowshape)\>

The shape of the edge’s target arrow.

#### Inherited from

[EdgeArrow](components_ClusterNodeContainer._internal_.EdgeArrow.md).[target-arrow-shape](components_ClusterNodeContainer._internal_.EdgeArrow.md#target-arrow-shape)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4011

___

### target-distance-from-node

• `Optional` **target-distance-from-node**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`number`\>

The distance the edge ends from its target.

#### Inherited from

[EdgeLine](components_ClusterNodeContainer._internal_.EdgeLine.md).[target-distance-from-node](components_ClusterNodeContainer._internal_.EdgeLine.md#target-distance-from-node)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3837

___

### target-endpoint

• `Optional` **target-endpoint**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `string`\>

Specifies the endpoint of the target side of the edge

#### Inherited from

Partial.target-endpoint

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4032

___

### target-label

• `Optional` **target-label**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `string`\>

The text to display for an edge’s target label.

#### Inherited from

Partial.target-label

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4089

___

### target-text-margin-x

• `Optional` **target-text-margin-x**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `number`\>

(For the target label of an edge.)

#### Inherited from

Partial.target-text-margin-x

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4190

___

### target-text-margin-y

• `Optional` **target-text-margin-y**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `number`\>

(For the target label of an edge.)

#### Inherited from

Partial.target-text-margin-y

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4194

___

### target-text-offset

• `Optional` **target-text-offset**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `number`\>

For the target label of an edge, how far from the target node the label should be placed.

#### Inherited from

Partial.target-text-offset

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4166

___

### target-text-rotation

• `Optional` **target-text-rotation**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `number`\>

(For the target label of an edge.)

#### Inherited from

Partial.target-text-rotation

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4215

___

### text-background-color

• `Optional` **text-background-color**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `string`\>

A colour to apply on the text background.

#### Inherited from

Partial.text-background-color

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4270

___

### text-background-opacity

• `Optional` **text-background-opacity**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `number`\>

The opacity of the label background; the background is disabled for 0 (default value).

#### Inherited from

Partial.text-background-opacity

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4274

___

### text-background-padding

• `Optional` **text-background-padding**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `string`\>

The padding provides visual spacing between the text and the edge of the background.

#### Inherited from

Partial.text-background-padding

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4266

___

### text-background-shape

• `Optional` **text-background-shape**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, ``"rectangle"`` \| ``"roundrectangle"``\>

The shape to use for the label background.

#### Inherited from

Partial.text-background-shape

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4278

___

### text-border-color

• `Optional` **text-border-color**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `string`\>

The colour of the border around the label.

#### Inherited from

Partial.text-border-color

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4299

___

### text-border-opacity

• `Optional` **text-border-opacity**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `number`\>

The width of the border around the label; the border is disabled for 0 (default value).

#### Inherited from

Partial.text-border-opacity

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4287

___

### text-border-style

• `Optional` **text-border-style**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, [`LineStyle`](../modules/components_ClusterNodeContainer._internal_.md#linestyle)\>

The style of the border around the label.

#### Inherited from

Partial.text-border-style

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4295

___

### text-border-width

• `Optional` **text-border-width**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `number`\>

The width of the border around the label.

#### Inherited from

Partial.text-border-width

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4291

___

### text-events

• `Optional` **text-events**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, ``"no"`` \| ``"yes"``\>

 Whether events should occur on an element if the label receives an event.
You may want a style applied to the text on active so you know the text is activatable.

#### Inherited from

Partial.text-events

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4329

___

### text-halign

• `Optional` **text-halign**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, ``"right"`` \| ``"left"`` \| ``"center"``\>

The vertical alignment of a node’s label.

#### Inherited from

Partial.text-halign

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4149

___

### text-margin-x

• `Optional` **text-margin-x**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `number`\>

A margin that shifts the label along the x- axis.

#### Inherited from

Partial.text-margin-x

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4174

___

### text-margin-y

• `Optional` **text-margin-y**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `number`\>

A margin that shifts the label along the y- axis.

#### Inherited from

Partial.text-margin-y

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4178

___

### text-max-width

• `Optional` **text-max-width**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `string`\>

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

• `Optional` **text-opacity**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `number`\>

The opacity of the label text, including its outline.

#### Inherited from

Partial.text-opacity

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4100

___

### text-outline-color

• `Optional` **text-outline-color**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `string`\>

The colour of the outline around the element’s label text.

#### Inherited from

Partial.text-outline-color

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4224

___

### text-outline-opacity

• `Optional` **text-outline-opacity**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `number`\>

The opacity of the outline on label text.

#### Inherited from

Partial.text-outline-opacity

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4228

___

### text-outline-width

• `Optional` **text-outline-width**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `string` \| `number`\>

The size of the outline on label text.

#### Inherited from

Partial.text-outline-width

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4232

___

### text-rotation

• `Optional` **text-rotation**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `number`\>

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

• `Optional` **text-shadow-blur**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `number`\>

The shadow blur distance.

#### Inherited from

Partial.text-shadow-blur

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4239

___

### text-shadow-color

• `Optional` **text-shadow-color**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `string`\>

The colour of the shadow.

#### Inherited from

Partial.text-shadow-color

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4243

___

### text-shadow-offset-x

• `Optional` **text-shadow-offset-x**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `number`\>

The x offset relative to the text where the shadow will be displayed, can be negative.
If you set blur to 0, add an offset to view your shadow.

#### Inherited from

Partial.text-shadow-offset-x

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4248

___

### text-shadow-offset-y

• `Optional` **text-shadow-offset-y**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `number`\>

The y offset relative to the text where the shadow will be displayed, can be negative.
If you set blur to 0, add an offset to view your shadow.

#### Inherited from

Partial.text-shadow-offset-y

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4253

___

### text-shadow-opacity

• `Optional` **text-shadow-opacity**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `number`\>

The opacity of the shadow on the text; the shadow is disabled for 0 (default value).

#### Inherited from

Partial.text-shadow-opacity

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4257

___

### text-transform

• `Optional` **text-transform**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, [`TextTranformation`](../modules/components_ClusterNodeContainer._internal_.md#texttranformation)\>

A transformation to apply to the label text.

#### Inherited from

Partial.text-transform

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4122

___

### text-valign

• `Optional` **text-valign**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, ``"top"`` \| ``"bottom"`` \| ``"center"``\>

The vertical alignment of a node’s label.

#### Inherited from

Partial.text-valign

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4153

___

### text-wrap

• `Optional` **text-wrap**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, ``"none"`` \| ``"wrap"`` \| ``"ellipsis"``\>

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

• `Optional` **visibility**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, ``"visible"`` \| ``"hidden"``\>

Whether the element is visible; may be visible or hidden.
Note that a "visibility : hidden" bezier edge still takes up space in its bundle.

#### Inherited from

Partial.visibility

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4048

___

### width

• `Optional` **width**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`string` \| `number`\>

The width of an edge’s line.

#### Inherited from

[EdgeLine](components_ClusterNodeContainer._internal_.EdgeLine.md).[width](components_ClusterNodeContainer._internal_.EdgeLine.md#width)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3797

___

### z-index

• `Optional` **z-index**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`EdgeSingular`, `number`\>

An integer value that affects the relative draw order of elements.
In general, an element with a higher "z-index" will be drawn on top of an element with a lower "z-index".
Note that edges are under nodes despite "z-index", except when necessary for compound nodes.

#### Inherited from

Partial.z-index

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4059
