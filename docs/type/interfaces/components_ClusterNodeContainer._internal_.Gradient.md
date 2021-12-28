[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Gradient

# Interface: Gradient

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Gradient

These properties specify the gradient colouration of an edge's line:

https://js.cytoscape.org/#style/gradient

## Table of contents

### Properties

- [line-gradient-stop-colors](components_ClusterNodeContainer._internal_.Gradient.md#line-gradient-stop-colors)
- [line-gradient-stop-positions](components_ClusterNodeContainer._internal_.Gradient.md#line-gradient-stop-positions)

## Properties

### line-gradient-stop-colors

• `Optional` **line-gradient-stop-colors**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`string`\>[]

The colors of the gradient stops.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3853

___

### line-gradient-stop-positions

• `Optional` **line-gradient-stop-positions**: [`PropertyValueEdge`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalueedge)<`number`\>[]

The positions of the gradient stops.
If not specified (or invalid), the stops will divide equally.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3858
