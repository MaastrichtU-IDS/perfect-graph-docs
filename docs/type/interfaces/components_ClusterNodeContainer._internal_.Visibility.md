[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Visibility

# Interface: Visibility<SingularType\>

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Visibility

http://js.cytoscape.org/#style/visibility

## Type parameters

| Name | Type |
| :------ | :------ |
| `SingularType` | extends `NodeSingular` \| `EdgeSingular` |

## Table of contents

### Properties

- [display](components_ClusterNodeContainer._internal_.Visibility.md#display)
- [opacity](components_ClusterNodeContainer._internal_.Visibility.md#opacity)
- [visibility](components_ClusterNodeContainer._internal_.Visibility.md#visibility)
- [z-index](components_ClusterNodeContainer._internal_.Visibility.md#z-index)

## Properties

### display

• **display**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, ``"none"`` \| ``"displayed"``\>

Whether to display the element; may be element for displayed or none for not displayed.
Note that a "display: none" bezier edge does not take up space in its bundle.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4043

___

### opacity

• **opacity**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `number`\>

The opacity of the element, ranging from 0 to 1.
Note that the opacity of a compound node parent affects the effective opacity of its children.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4053

___

### visibility

• **visibility**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, ``"visible"`` \| ``"hidden"``\>

Whether the element is visible; may be visible or hidden.
Note that a "visibility : hidden" bezier edge still takes up space in its bundle.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4048

___

### z-index

• **z-index**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, `number`\>

An integer value that affects the relative draw order of elements.
In general, an element with a higher "z-index" will be drawn on top of an element with a lower "z-index".
Note that edges are under nodes despite "z-index", except when necessary for compound nodes.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4059
