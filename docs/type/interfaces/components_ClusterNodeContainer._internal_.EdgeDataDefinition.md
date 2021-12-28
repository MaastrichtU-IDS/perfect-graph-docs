[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / EdgeDataDefinition

# Interface: EdgeDataDefinition

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).EdgeDataDefinition

## Hierarchy

- [`ElementDataDefinition`](components_ClusterNodeContainer._internal_.ElementDataDefinition.md)

  ↳ **`EdgeDataDefinition`**

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [id](components_ClusterNodeContainer._internal_.EdgeDataDefinition.md#id)
- [position](components_ClusterNodeContainer._internal_.EdgeDataDefinition.md#position)
- [source](components_ClusterNodeContainer._internal_.EdgeDataDefinition.md#source)
- [target](components_ClusterNodeContainer._internal_.EdgeDataDefinition.md#target)

## Properties

### id

• `Optional` **id**: `string`

elided id => autogenerated id

#### Overrides

[ElementDataDefinition](components_ClusterNodeContainer._internal_.ElementDataDefinition.md).[id](components_ClusterNodeContainer._internal_.ElementDataDefinition.md#id)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:142

___

### position

• `Optional` **position**: [`Position`](components_ClusterNodeContainer._internal_.Position.md)

#### Inherited from

[ElementDataDefinition](components_ClusterNodeContainer._internal_.ElementDataDefinition.md).[position](components_ClusterNodeContainer._internal_.ElementDataDefinition.md#position)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:134

___

### source

• **source**: `string`

the source node id (edge comes from this node)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:147

___

### target

• **target**: `string`

the target node id (edge goes to this node)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:151