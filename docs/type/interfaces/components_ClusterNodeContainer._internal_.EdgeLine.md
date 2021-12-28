[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / EdgeLine

# Interface: EdgeLine

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).EdgeLine

These properties affect the styling of an edge’s line:

http://js.cytoscape.org/#style/edge-line

## Hierarchy

- **`EdgeLine`**

  ↳ [`Edge`](components_ClusterNodeContainer._internal_.Edge.md)

## Table of contents

### Properties

- [curve-style](components_ClusterNodeContainer._internal_.EdgeLine.md#curve-style)
- [line-cap](components_ClusterNodeContainer._internal_.EdgeLine.md#line-cap)
- [line-color](components_ClusterNodeContainer._internal_.EdgeLine.md#line-color)
- [line-dash-offset](components_ClusterNodeContainer._internal_.EdgeLine.md#line-dash-offset)
- [line-dash-pattern](components_ClusterNodeContainer._internal_.EdgeLine.md#line-dash-pattern)
- [line-fill](components_ClusterNodeContainer._internal_.EdgeLine.md#line-fill)
- [line-style](components_ClusterNodeContainer._internal_.EdgeLine.md#line-style)
- [source-distance-from-node](components_ClusterNodeContainer._internal_.EdgeLine.md#source-distance-from-node)
- [target-distance-from-node](components_ClusterNodeContainer._internal_.EdgeLine.md#target-distance-from-node)
- [width](components_ClusterNodeContainer._internal_.EdgeLine.md#width)

## Properties

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

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3809

___

### line-cap

• `Optional` **line-cap**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<``"butt"`` \| ``"round"`` \| ``"square"``\>

The cap of the edge's line.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3821

___

### line-color

• `Optional` **line-color**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`string`\>

The colour of the edge’s line.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3813

___

### line-dash-offset

• `Optional` **line-dash-offset**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`number`\>

The dashed line offset.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3833

___

### line-dash-pattern

• `Optional` **line-dash-pattern**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`number`\>[]

The dashed line pattern which specifies alternating lengths of lines and gaps.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3829

___

### line-fill

• `Optional` **line-fill**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<``"solid"`` \| ``"linear-gradient"`` \| ``"radial-gradient"``\>

The filling style of the edge's line.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3825

___

### line-style

• `Optional` **line-style**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<[`LineStyle`](../modules/components_ClusterNodeContainer._internal_.md#linestyle)\>

The style of the edge’s line.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3817

___

### source-distance-from-node

• `Optional` **source-distance-from-node**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`number`\>

The distance the edge ends from its source.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3841

___

### target-distance-from-node

• `Optional` **target-distance-from-node**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`number`\>

The distance the edge ends from its target.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3837

___

### width

• `Optional` **width**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`string` \| `number`\>

The width of an edge’s line.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3797
