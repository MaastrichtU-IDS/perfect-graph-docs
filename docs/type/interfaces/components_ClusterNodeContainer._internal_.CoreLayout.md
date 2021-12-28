[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / CoreLayout

# Interface: CoreLayout

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).CoreLayout

http://js.cytoscape.org/#core/layout

## Hierarchy

- **`CoreLayout`**

  ↳ [`Core`](components_ClusterNodeContainer._internal_.Core.md)

## Table of contents

### Methods

- [createLayout](components_ClusterNodeContainer._internal_.CoreLayout.md#createlayout)
- [layout](components_ClusterNodeContainer._internal_.CoreLayout.md#layout)
- [makeLayout](components_ClusterNodeContainer._internal_.CoreLayout.md#makelayout)

## Methods

### createLayout

▸ **createLayout**(`options`): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`LayoutOptions`](../modules/components_ClusterNodeContainer._internal_.md#layoutoptions) |

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1073

___

### layout

▸ **layout**(`layout`): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

Run a layout, which algorithmically positions the nodes in the graph.
For layouts included with Cytoscape.js, you can find their
options documented in the Layouts section.
For external layouts, please refer to their accompanying documentation.

An analogue to run a layout on a subset of the graph exists as eles.layout().
http://js.cytoscape.org/#cy.layout

#### Parameters

| Name | Type |
| :------ | :------ |
| `layout` | [`LayoutOptions`](../modules/components_ClusterNodeContainer._internal_.md#layoutoptions) |

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1059

___

### makeLayout

▸ **makeLayout**(`options`): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

Get a new layout, which can be used to algorithmically
position the nodes in the graph.

You must specify options.name with the name of the layout you wish to use.

This function creates and returns a layout object.
You may want to keep a reference to the layout for more advanced usecases,
such as running multiple layouts simultaneously.
Note that you must call layout.run() in order for it to affect the graph.
An analogue to make a layout on a subset of the graph exists as eles.makeLayout().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`LayoutOptions`](../modules/components_ClusterNodeContainer._internal_.md#layoutoptions) |

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1072
