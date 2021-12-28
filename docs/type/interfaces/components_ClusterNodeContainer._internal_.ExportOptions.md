[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / ExportOptions

# Interface: ExportOptions

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).ExportOptions

http://js.cytoscape.org/#core/export

## Hierarchy

- **`ExportOptions`**

  ↳ [`ExportStringOptions`](components_ClusterNodeContainer._internal_.ExportStringOptions.md)

  ↳ [`ExportBlobOptions`](components_ClusterNodeContainer._internal_.ExportBlobOptions.md)

  ↳ [`ExportJpgOptions`](components_ClusterNodeContainer._internal_.ExportJpgOptions.md)

## Table of contents

### Properties

- [bg](components_ClusterNodeContainer._internal_.ExportOptions.md#bg)
- [full](components_ClusterNodeContainer._internal_.ExportOptions.md#full)
- [maxHeight](components_ClusterNodeContainer._internal_.ExportOptions.md#maxheight)
- [maxWidth](components_ClusterNodeContainer._internal_.ExportOptions.md#maxwidth)
- [scale](components_ClusterNodeContainer._internal_.ExportOptions.md#scale)

## Properties

### bg

• `Optional` **bg**: `string`

The background colour of the image (transparent by default).

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1123

___

### full

• `Optional` **full**: `boolean`

Whether to export the current viewport view (false, default) or the entire graph (true).

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1127

___

### maxHeight

• `Optional` **maxHeight**: `number`

Specifies the scale automatically in combination with maxWidth such that the resultant image is no taller than maxHeight.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1139

___

### maxWidth

• `Optional` **maxWidth**: `number`

Specifies the scale automatically in combination with maxHeight such that the resultant image is no wider than maxWidth.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1135

___

### scale

• `Optional` **scale**: `number`

This value specifies a positive number that scales the size of the resultant image.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1131
