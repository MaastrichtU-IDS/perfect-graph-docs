[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / PieChartBackground

# Interface: PieChartBackground

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).PieChartBackground

These properties allow you to create pie chart backgrounds on nodes.
Note that 16 slices maximum are supported per node,
so in the properties 1 <= i <= 16.
Of course, you must specify a numerical value for each property in place of i.
Each nonzero sized slice is placed in order of i,
starting from the 12 o’clock position and working clockwise.

You may find it useful to reserve a number to a particular
colour for all nodes in your stylesheet.
Then you can specify values for pie-i-background-size
accordingly for each node via a mapper.
This would allow you to create consistently coloured
pie charts in each node of the graph based on element data.

http://js.cytoscape.org/#style/pie-chart-background

## Table of contents

### Properties

- [pie-i-background-color](components_ClusterNodeContainer._internal_.PieChartBackground.md#pie-i-background-color)
- [pie-i-background-opacity](components_ClusterNodeContainer._internal_.PieChartBackground.md#pie-i-background-opacity)
- [pie-i-background-size](components_ClusterNodeContainer._internal_.PieChartBackground.md#pie-i-background-size)
- [pie-size](components_ClusterNodeContainer._internal_.PieChartBackground.md#pie-size)

## Properties

### pie-i-background-color

• **pie-i-background-color**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`string`\>

The colour of the node’s ith pie chart slice.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3772

___

### pie-i-background-opacity

• **pie-i-background-opacity**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`number`\>

The opacity of the node’s ith pie chart slice.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3780

___

### pie-i-background-size

• **pie-i-background-size**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`number`\>

The size of the node’s ith pie chart slice, measured in percent (e.g. 25% or 25).

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3776

___

### pie-size

• **pie-size**: [`PropertyValueNode`](../modules/components_ClusterNodeContainer._internal_.md#propertyvaluenode)<`string`\>

The diameter of the pie, measured as a percent of node size (e.g. 100%) or an absolute length (e.g. 25px).

#### Defined in

node_modules/@types/cytoscape/index.d.ts:3768
