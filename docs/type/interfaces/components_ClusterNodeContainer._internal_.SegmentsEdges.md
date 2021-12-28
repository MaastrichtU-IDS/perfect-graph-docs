[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SegmentsEdges

# Interface: SegmentsEdges

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SegmentsEdges

Segments edges
For edges made of several straight lines (curve - style: segments):
http://js.cytoscape.org/#style/segments-edges

## Table of contents

### Properties

- [edge-distances](components_ClusterNodeContainer._internal_.SegmentsEdges.md#edge-distances)
- [segment-distances](components_ClusterNodeContainer._internal_.SegmentsEdges.md#segment-distances)
- [segment-weights](components_ClusterNodeContainer._internal_.SegmentsEdges.md#segment-weights)

## Properties

### edge-distances

• **edge-distances**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<``"intersection"`` \| ``"node-position"``\>

With value
 * "intersection" (default), the line from source to target
 * for "segment-weights" is from the outside of the source node’s shape to the outside of the target node’s shape.
 * With value "node-position", the line is from the source position to the target position.
The "node-position" option makes calculating edge points easier
— but it should be used carefully because you can create
invalid points that intersection would have automatically corrected.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3973

___

### segment-distances

• **segment-distances**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`string`\>

A series of values that specify for each segment point the distance perpendicular to a line formed from source to target, e.g. -20 20 - 20.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3957

___

### segment-weights

• **segment-weights**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`string`\>

A series of values that weights segment points along a line from source to target,
e.g. 0.25 0.5 0.75.A value usually ranges on [0, 1],
with 0 towards the source node and 1 towards the target node — but larger or smaller values can also be used.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3963
