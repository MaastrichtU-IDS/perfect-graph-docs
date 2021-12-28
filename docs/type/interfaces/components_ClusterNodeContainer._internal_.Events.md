[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Events

# Interface: Events<SingularType\>

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Events

http://js.cytoscape.org/#style/events

## Type parameters

| Name | Type |
| :------ | :------ |
| `SingularType` | extends `NodeSingular` \| `EdgeSingular` |

## Table of contents

### Properties

- [events](components_ClusterNodeContainer._internal_.Events.md#events)
- [text-events](components_ClusterNodeContainer._internal_.Events.md#text-events)

## Properties

### events

• **events**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, ``"no"`` \| ``"yes"``\>

Whether events should occur on an element (e.g.tap, mouseover, etc.).
 * For "no", the element receives no events and events simply pass through to the core/viewport.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4324

___

### text-events

• **text-events**: [`PropertyValue`](../modules/components_ClusterNodeContainer._internal_.md#propertyvalue)<`SingularType`, ``"no"`` \| ``"yes"``\>

 Whether events should occur on an element if the label receives an event.
You may want a style applied to the text on active so you know the text is activatable.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4329
