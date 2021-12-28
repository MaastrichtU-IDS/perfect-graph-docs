[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / CollectionLayout

# Interface: CollectionLayout

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).CollectionLayout

http://js.cytoscape.org/#collection/layout

## Hierarchy

- **`CollectionLayout`**

  ↳ [`Collection`](components_ClusterNodeContainer._internal_.Collection.md)

## Table of contents

### Methods

- [createLayout](components_ClusterNodeContainer._internal_.CollectionLayout.md#createlayout)
- [layout](components_ClusterNodeContainer._internal_.CollectionLayout.md#layout)
- [makeLayout](components_ClusterNodeContainer._internal_.CollectionLayout.md#makelayout)

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

node_modules/@types/cytoscape/index.d.ts:1876

___

### layout

▸ **layout**(`options`): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

Get a new layout, which can be used to algorithmically position the nodes in the collection.
This function is useful for running a layout on a subset of the elements in the graph, perhaps in parallel to other layouts.

You must specify options.name with the name of the layout you wish to use.

Note: that you must call layout.run() in order for it to affect the graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`LayoutOptions`](../modules/components_ClusterNodeContainer._internal_.md#layoutoptions) | The layout options. |

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1874

___

### makeLayout

▸ **makeLayout**(`options`): [`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`LayoutOptions`](../modules/components_ClusterNodeContainer._internal_.md#layoutoptions) |

#### Returns

[`Layouts`](components_ClusterNodeContainer._internal_.Layouts.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1875
