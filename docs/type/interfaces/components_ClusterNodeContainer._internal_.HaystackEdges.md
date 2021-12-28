[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / HaystackEdges

# Interface: HaystackEdges

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).HaystackEdges

Haystack edges
Loop edges and compound parent nodes are not supported by haystack edges.
Haystack edges are a more performant replacement for plain, straight line edges.

For fast, straight line edges (curve - style: haystack):
http://js.cytoscape.org/#style/haystack-edges

## Table of contents

### Properties

- [haystack-radius](components_ClusterNodeContainer._internal_.HaystackEdges.md#haystack-radius)

## Properties

### haystack-radius

• **haystack-radius**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`number`\>

A value between 0 and 1 inclusive that indicates the relative radius used to position haystack edges on their connected nodes.
The outside of the node is at 1, and the centre of the node is at 0.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3946
