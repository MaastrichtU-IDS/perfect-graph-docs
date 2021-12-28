[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / NodeDefinition

# Interface: NodeDefinition

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).NodeDefinition

## Hierarchy

- [`ElementDefinition`](components_ClusterNodeContainer._internal_.ElementDefinition.md)

  ↳ **`NodeDefinition`**

## Table of contents

### Properties

- [classes](components_ClusterNodeContainer._internal_.NodeDefinition.md#classes)
- [css](components_ClusterNodeContainer._internal_.NodeDefinition.md#css)
- [data](components_ClusterNodeContainer._internal_.NodeDefinition.md#data)
- [grabbable](components_ClusterNodeContainer._internal_.NodeDefinition.md#grabbable)
- [group](components_ClusterNodeContainer._internal_.NodeDefinition.md#group)
- [locked](components_ClusterNodeContainer._internal_.NodeDefinition.md#locked)
- [position](components_ClusterNodeContainer._internal_.NodeDefinition.md#position)
- [renderedPosition](components_ClusterNodeContainer._internal_.NodeDefinition.md#renderedposition)
- [scratch](components_ClusterNodeContainer._internal_.NodeDefinition.md#scratch)
- [selectable](components_ClusterNodeContainer._internal_.NodeDefinition.md#selectable)
- [selected](components_ClusterNodeContainer._internal_.NodeDefinition.md#selected)
- [style](components_ClusterNodeContainer._internal_.NodeDefinition.md#style)

## Properties

### classes

• `Optional` **classes**: `string`

a space separated list of class names that the element has

#### Inherited from

[ElementDefinition](components_ClusterNodeContainer._internal_.ElementDefinition.md).[classes](components_ClusterNodeContainer._internal_.ElementDefinition.md#classes)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:118

___

### css

• `Optional` **css**: [`Node`](components_ClusterNodeContainer._internal_.Node.md) \| [`Edge`](components_ClusterNodeContainer._internal_.Edge.md)

you should only use `style`/`css` for very special cases; use classes instead

#### Inherited from

[ElementDefinition](components_ClusterNodeContainer._internal_.ElementDefinition.md).[css](components_ClusterNodeContainer._internal_.ElementDefinition.md#css)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:126

___

### data

• **data**: [`NodeDataDefinition`](components_ClusterNodeContainer._internal_.NodeDataDefinition.md)

#### Overrides

[ElementDefinition](components_ClusterNodeContainer._internal_.ElementDefinition.md).[data](components_ClusterNodeContainer._internal_.ElementDefinition.md#data)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:157

___

### grabbable

• `Optional` **grabbable**: `boolean`

Wether the node can be grabbed and moved by the user

#### Inherited from

[ElementDefinition](components_ClusterNodeContainer._internal_.ElementDefinition.md).[grabbable](components_ClusterNodeContainer._internal_.ElementDefinition.md#grabbable)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:114

___

### group

• `Optional` **group**: [`ElementGroup`](../modules/components_ClusterNodeContainer._internal_.md#elementgroup)

#### Inherited from

[ElementDefinition](components_ClusterNodeContainer._internal_.ElementDefinition.md).[group](components_ClusterNodeContainer._internal_.ElementDefinition.md#group)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:85

___

### locked

• `Optional` **locked**: `boolean`

When locked a node's position is immutable (default false)

#### Inherited from

[ElementDefinition](components_ClusterNodeContainer._internal_.ElementDefinition.md).[locked](components_ClusterNodeContainer._internal_.ElementDefinition.md#locked)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:110

___

### position

• `Optional` **position**: [`Position`](components_ClusterNodeContainer._internal_.Position.md)

The model position of the node (optional on init, mandatory after)

#### Inherited from

[ElementDefinition](components_ClusterNodeContainer._internal_.ElementDefinition.md).[position](components_ClusterNodeContainer._internal_.ElementDefinition.md#position)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:94

___

### renderedPosition

• `Optional` **renderedPosition**: [`Position`](components_ClusterNodeContainer._internal_.Position.md)

can alternatively specify position in rendered on-screen pixels

#### Inherited from

[ElementDefinition](components_ClusterNodeContainer._internal_.ElementDefinition.md).[renderedPosition](components_ClusterNodeContainer._internal_.ElementDefinition.md#renderedposition)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:98

___

### scratch

• `Optional` **scratch**: `any`

Scratchpad data (usually temp or nonserialisable data)

#### Inherited from

[ElementDefinition](components_ClusterNodeContainer._internal_.ElementDefinition.md).[scratch](components_ClusterNodeContainer._internal_.ElementDefinition.md#scratch)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:90

___

### selectable

• `Optional` **selectable**: `boolean`

Whether the selection state is mutable (default true)

#### Inherited from

[ElementDefinition](components_ClusterNodeContainer._internal_.ElementDefinition.md).[selectable](components_ClusterNodeContainer._internal_.ElementDefinition.md#selectable)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:106

___

### selected

• `Optional` **selected**: `boolean`

Whether the element is selected (default false)

#### Inherited from

[ElementDefinition](components_ClusterNodeContainer._internal_.ElementDefinition.md).[selected](components_ClusterNodeContainer._internal_.ElementDefinition.md#selected)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:102

___

### style

• `Optional` **style**: `any`

 CssStyleDeclaration;

#### Inherited from

[ElementDefinition](components_ClusterNodeContainer._internal_.ElementDefinition.md).[style](components_ClusterNodeContainer._internal_.ElementDefinition.md#style)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:122
