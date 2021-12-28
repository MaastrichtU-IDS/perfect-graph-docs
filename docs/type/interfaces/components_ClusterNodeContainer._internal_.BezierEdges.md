[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / BezierEdges

# Interface: BezierEdges

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).BezierEdges

For automatic, bundled bezier edges (curve - style: bezier):

http://js.cytoscape.org/#style/bezier-edges

## Table of contents

### Properties

- [control-point-distance](components_ClusterNodeContainer._internal_.BezierEdges.md#control-point-distance)
- [control-point-step-size](components_ClusterNodeContainer._internal_.BezierEdges.md#control-point-step-size)
- [control-point-weight](components_ClusterNodeContainer._internal_.BezierEdges.md#control-point-weight)
- [edge-distances](components_ClusterNodeContainer._internal_.BezierEdges.md#edge-distances)

## Properties

### control-point-distance

• **control-point-distance**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`number`\>

A single value that overrides "control-point-step-size" with a manual value.
Because it overrides the step size, bezier edges with the same value will overlap.
Thus, it’s best to use this as a one- off value for particular edges if need be.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3877

___

### control-point-step-size

• **control-point-step-size**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`number`\>

From the line perpendicular from source to target,
this value specifies the distance between successive bezier edges.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3871

___

### control-point-weight

• **control-point-weight**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`number`\>

A single value that weights control points along the line from source to target.
The value usually ranges on [0, 1], with
0 towards the source node and
1 towards the target node —
but larger or smaller values can also be used.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3885

___

### edge-distances

• **edge-distances**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<``"intersection"`` \| ``"node-position"``\>

With value intersection (default),
the line from source to target for "control-point-weight" is
from the outside of the source node’s shape to the outside of
the target node’s shape.With value node- position,
the line is from the source position to the target position.
The "node-position" option makes calculating edge points easier
— but it should be used carefully because you can create invalid
points that intersection would have automatically corrected.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3896
