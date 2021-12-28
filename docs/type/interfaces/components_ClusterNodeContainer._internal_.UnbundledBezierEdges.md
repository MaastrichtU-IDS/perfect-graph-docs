[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / UnbundledBezierEdges

# Interface: UnbundledBezierEdges

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).UnbundledBezierEdges

Unbundled bezier edges
For bezier edges with manual control points (curve - style: unbundled - bezier):

http://js.cytoscape.org/#style/unbundled-bezier-edges

## Table of contents

### Properties

- [control-point-distances](components_ClusterNodeContainer._internal_.UnbundledBezierEdges.md#control-point-distances)
- [control-point-weights](components_ClusterNodeContainer._internal_.UnbundledBezierEdges.md#control-point-weights)
- [edge-distances](components_ClusterNodeContainer._internal_.UnbundledBezierEdges.md#edge-distances)

## Properties

### control-point-distances

• **control-point-distances**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`string`\>

A series of values that specify for each control point the
distance perpendicular to a line formed
from source to target, e.g. -20 20 - 20.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3910

___

### control-point-weights

• **control-point-weights**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`string`\>

A series of values that weights control points along
a line from source to target, e.g. 0.25 0.5 0.75.
A value usually ranges on [0, 1], with
0 towards the source node and
1 towards the target node
— but larger or smaller values can also be used.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3919

___

### edge-distances

• **edge-distances**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<``"intersection"`` \| ``"node-position"``\>

With value intersection (default),
the line from source to target for "control-point-weights"
is from the outside of the source node’s shape to the
outside of the target node’s shape.
With value
"node-position", the line is from the source position to the target position.
The "node-position" option makes calculating edge points easier
— but it should be used carefully because you can create
invalid points that intersection would have automatically corrected.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3931
