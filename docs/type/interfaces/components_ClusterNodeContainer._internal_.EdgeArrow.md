[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / EdgeArrow

# Interface: EdgeArrow

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).EdgeArrow

Edge arrow
 * <pos>-arrow-color : The colour of the edge’s source arrow.
 * <pos>-arrow-shape : The shape of the edge’s source arrow.
 * <pos>-arrow-fill : The fill state of the edge’s source arrow.

For each edge arrow property above, replace <pos> with one of
 * source : Pointing towards the source node, at the end of the edge.
 * mid-source : Pointing towards the source node, at the middle of the edge.
 * target : Pointing towards the target node, at the end of the edge.
 * mid-target: Pointing towards the target node, at the middle of the edge.

Only mid arrows are supported on haystack edges.
http://js.cytoscape.org/#style/edge-arrow

## Hierarchy

- **`EdgeArrow`**

  ↳ [`Edge`](components_ClusterNodeContainer._internal_.Edge.md)

## Table of contents

### Properties

- [arrow-scale](components_ClusterNodeContainer._internal_.EdgeArrow.md#arrow-scale)
- [mid-source-arrow-color](components_ClusterNodeContainer._internal_.EdgeArrow.md#mid-source-arrow-color)
- [mid-source-arrow-fill](components_ClusterNodeContainer._internal_.EdgeArrow.md#mid-source-arrow-fill)
- [mid-source-arrow-shape](components_ClusterNodeContainer._internal_.EdgeArrow.md#mid-source-arrow-shape)
- [mid-target-arrow-color](components_ClusterNodeContainer._internal_.EdgeArrow.md#mid-target-arrow-color)
- [mid-target-arrow-fill](components_ClusterNodeContainer._internal_.EdgeArrow.md#mid-target-arrow-fill)
- [mid-target-arrow-shape](components_ClusterNodeContainer._internal_.EdgeArrow.md#mid-target-arrow-shape)
- [source-arrow-color](components_ClusterNodeContainer._internal_.EdgeArrow.md#source-arrow-color)
- [source-arrow-fill](components_ClusterNodeContainer._internal_.EdgeArrow.md#source-arrow-fill)
- [source-arrow-shape](components_ClusterNodeContainer._internal_.EdgeArrow.md#source-arrow-shape)
- [target-arrow-color](components_ClusterNodeContainer._internal_.EdgeArrow.md#target-arrow-color)
- [target-arrow-fill](components_ClusterNodeContainer._internal_.EdgeArrow.md#target-arrow-fill)
- [target-arrow-shape](components_ClusterNodeContainer._internal_.EdgeArrow.md#target-arrow-shape)

## Properties

### arrow-scale

• `Optional` **arrow-scale**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`number`\>

The size of the arrow.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3995

___

### mid-source-arrow-color

• `Optional` **mid-source-arrow-color**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`string`\>

The colour of the edge’s "mid-source" arrow.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4000

___

### mid-source-arrow-fill

• `Optional` **mid-source-arrow-fill**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<[`ArrowFill`](../modules/components_ClusterNodeContainer._internal_.md#arrowfill)\>

The fill state of the edge’s mid-source arrow.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4018

___

### mid-source-arrow-shape

• `Optional` **mid-source-arrow-shape**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<[`ArrowShape`](../modules/components_ClusterNodeContainer._internal_.md#arrowshape)\>

The shape of the edge’s mid-source arrow.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4009

___

### mid-target-arrow-color

• `Optional` **mid-target-arrow-color**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`string`\>

The colour of the edge’s "mid-target" arrow.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4004

___

### mid-target-arrow-fill

• `Optional` **mid-target-arrow-fill**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<[`ArrowFill`](../modules/components_ClusterNodeContainer._internal_.md#arrowfill)\>

The fill state of the edge’s mid-target arrow.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4022

___

### mid-target-arrow-shape

• `Optional` **mid-target-arrow-shape**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<[`ArrowShape`](../modules/components_ClusterNodeContainer._internal_.md#arrowshape)\>

The shape of the edge’s mid-target arrow.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4013

___

### source-arrow-color

• `Optional` **source-arrow-color**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`string`\>

The colour of the edge’s source arrow.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3998

___

### source-arrow-fill

• `Optional` **source-arrow-fill**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<[`ArrowFill`](../modules/components_ClusterNodeContainer._internal_.md#arrowfill)\>

The fill state of the edge’s source arrow.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4016

___

### source-arrow-shape

• `Optional` **source-arrow-shape**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<[`ArrowShape`](../modules/components_ClusterNodeContainer._internal_.md#arrowshape)\>

The shape of the edge’s source arrow.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4007

___

### target-arrow-color

• `Optional` **target-arrow-color**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`string`\>

The colour of the edge’s target arrow.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4002

___

### target-arrow-fill

• `Optional` **target-arrow-fill**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<[`ArrowFill`](../modules/components_ClusterNodeContainer._internal_.md#arrowfill)\>

The fill state of the edge’s target arrow.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4020

___

### target-arrow-shape

• `Optional` **target-arrow-shape**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<[`ArrowShape`](../modules/components_ClusterNodeContainer._internal_.md#arrowshape)\>

The shape of the edge’s target arrow.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4011
