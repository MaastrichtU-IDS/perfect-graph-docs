[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SingularGraphManipulation

# Interface: SingularGraphManipulation

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SingularGraphManipulation

http://js.cytoscape.org/#collection/graph-manipulation

## Hierarchy

- **`SingularGraphManipulation`**

  ↳ [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)

## Table of contents

### Methods

- [cy](components_ClusterNodeContainer._internal_.SingularGraphManipulation.md#cy)
- [inside](components_ClusterNodeContainer._internal_.SingularGraphManipulation.md#inside)
- [removed](components_ClusterNodeContainer._internal_.SingularGraphManipulation.md#removed)

## Methods

### cy

▸ **cy**(): [`Core`](components_ClusterNodeContainer._internal_.Core.md)

Get the core instance that owns the element.

#### Returns

[`Core`](components_ClusterNodeContainer._internal_.Core.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1314

___

### inside

▸ **inside**(): `boolean`

Get whether the element is inside the graph (i.e. not removed).
http://js.cytoscape.org/#ele.inside

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1324

___

### removed

▸ **removed**(): `boolean`

Get whether the element has been removed from the graph.
http://js.cytoscape.org/#ele.removed

#### Returns

`boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1319
