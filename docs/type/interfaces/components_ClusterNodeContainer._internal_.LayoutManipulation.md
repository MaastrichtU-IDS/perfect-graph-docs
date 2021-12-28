[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / LayoutManipulation

# Interface: LayoutManipulation

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).LayoutManipulation

http://js.cytoscape.org/#layouts/layout-manipulation
Layouts have a set of functions available to them,
which allow for more complex behaviour than the primary run-one-layout-at-a-time usecase.
A new, developer accessible layout can be made via cy.makeLayout().

## Hierarchy

- **`LayoutManipulation`**

  ↳ [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

## Table of contents

### Methods

- [run](components_ClusterNodeContainer._internal_.LayoutManipulation.md#run)
- [start](components_ClusterNodeContainer._internal_.LayoutManipulation.md#start)
- [stop](components_ClusterNodeContainer._internal_.LayoutManipulation.md#stop)

## Methods

### run

▸ **run**(): [`LayoutManipulation`](components_ClusterNodeContainer._internal_.LayoutManipulation.md)

Start running the layout
http://js.cytoscape.org/#layout.run

#### Returns

[`LayoutManipulation`](components_ClusterNodeContainer._internal_.LayoutManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4878

___

### start

▸ **start**(): [`LayoutManipulation`](components_ClusterNodeContainer._internal_.LayoutManipulation.md)

#### Returns

[`LayoutManipulation`](components_ClusterNodeContainer._internal_.LayoutManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4879

___

### stop

▸ **stop**(): [`LayoutManipulation`](components_ClusterNodeContainer._internal_.LayoutManipulation.md)

Stop running the (asynchronous/discrete) layout
http://js.cytoscape.org/#layout.stop

#### Returns

[`LayoutManipulation`](components_ClusterNodeContainer._internal_.LayoutManipulation.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4884
