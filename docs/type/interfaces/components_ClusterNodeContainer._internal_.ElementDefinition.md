[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / ElementDefinition

# Interface: ElementDefinition

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).ElementDefinition

## Hierarchy

- **`ElementDefinition`**

  ↳ [`NodeDefinition`](components_ClusterNodeContainer._internal_.NodeDefinition.md)

  ↳ [`EdgeDefinition`](components_ClusterNodeContainer._internal_.EdgeDefinition.md)

## Table of contents

### Properties

- [classes](components_ClusterNodeContainer._internal_.ElementDefinition.md#classes)
- [css](components_ClusterNodeContainer._internal_.ElementDefinition.md#css)
- [data](components_ClusterNodeContainer._internal_.ElementDefinition.md#data)
- [grabbable](components_ClusterNodeContainer._internal_.ElementDefinition.md#grabbable)
- [group](components_ClusterNodeContainer._internal_.ElementDefinition.md#group)
- [locked](components_ClusterNodeContainer._internal_.ElementDefinition.md#locked)
- [position](components_ClusterNodeContainer._internal_.ElementDefinition.md#position)
- [renderedPosition](components_ClusterNodeContainer._internal_.ElementDefinition.md#renderedposition)
- [scratch](components_ClusterNodeContainer._internal_.ElementDefinition.md#scratch)
- [selectable](components_ClusterNodeContainer._internal_.ElementDefinition.md#selectable)
- [selected](components_ClusterNodeContainer._internal_.ElementDefinition.md#selected)
- [style](components_ClusterNodeContainer._internal_.ElementDefinition.md#style)

## Properties

### classes

• `Optional` **classes**: `string`

a space separated list of class names that the element has

#### Defined in

node_modules/@types/cytoscape/index.d.ts:118

___

### css

• `Optional` **css**: [`Node`](components_ClusterNodeContainer._internal_.Node.md) \| [`Edge`](components_ClusterNodeContainer._internal_.Edge.md)

you should only use `style`/`css` for very special cases; use classes instead

#### Defined in

node_modules/@types/cytoscape/index.d.ts:126

___

### data

• **data**: [`NodeDataDefinition`](components_ClusterNodeContainer._internal_.NodeDataDefinition.md) \| [`EdgeDataDefinition`](components_ClusterNodeContainer._internal_.EdgeDataDefinition.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:86

___

### grabbable

• `Optional` **grabbable**: `boolean`

Wether the node can be grabbed and moved by the user

#### Defined in

node_modules/@types/cytoscape/index.d.ts:114

___

### group

• `Optional` **group**: [`ElementGroup`](../modules/components_ClusterNodeContainer._internal_.md#elementgroup)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:85

___

### locked

• `Optional` **locked**: `boolean`

When locked a node's position is immutable (default false)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:110

___

### position

• `Optional` **position**: [`Position`](components_ClusterNodeContainer._internal_.Position.md)

The model position of the node (optional on init, mandatory after)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:94

___

### renderedPosition

• `Optional` **renderedPosition**: [`Position`](components_ClusterNodeContainer._internal_.Position.md)

can alternatively specify position in rendered on-screen pixels

#### Defined in

node_modules/@types/cytoscape/index.d.ts:98

___

### scratch

• `Optional` **scratch**: `any`

Scratchpad data (usually temp or nonserialisable data)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:90

___

### selectable

• `Optional` **selectable**: `boolean`

Whether the selection state is mutable (default true)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:106

___

### selected

• `Optional` **selected**: `boolean`

Whether the element is selected (default false)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:102

___

### style

• `Optional` **style**: `any`

 CssStyleDeclaration;

#### Defined in

node_modules/@types/cytoscape/index.d.ts:122
