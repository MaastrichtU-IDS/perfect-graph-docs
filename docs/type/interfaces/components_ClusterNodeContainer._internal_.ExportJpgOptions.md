[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / ExportJpgOptions

# Interface: ExportJpgOptions

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).ExportJpgOptions

## Hierarchy

- [`ExportOptions`](components_ClusterNodeContainer._internal_.ExportOptions.md)

  ↳ **`ExportJpgOptions`**

  ↳↳ [`ExportJpgStringOptions`](components_ClusterNodeContainer._internal_.ExportJpgStringOptions.md)

  ↳↳ [`ExportJpgBlobOptions`](components_ClusterNodeContainer._internal_.ExportJpgBlobOptions.md)

## Table of contents

### Properties

- [bg](components_ClusterNodeContainer._internal_.ExportJpgOptions.md#bg)
- [full](components_ClusterNodeContainer._internal_.ExportJpgOptions.md#full)
- [maxHeight](components_ClusterNodeContainer._internal_.ExportJpgOptions.md#maxheight)
- [maxWidth](components_ClusterNodeContainer._internal_.ExportJpgOptions.md#maxwidth)
- [quality](components_ClusterNodeContainer._internal_.ExportJpgOptions.md#quality)
- [scale](components_ClusterNodeContainer._internal_.ExportJpgOptions.md#scale)

## Properties

### bg

• `Optional` **bg**: `string`

The background colour of the image (transparent by default).

#### Inherited from

[ExportOptions](components_ClusterNodeContainer._internal_.ExportOptions.md).[bg](components_ClusterNodeContainer._internal_.ExportOptions.md#bg)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1123

___

### full

• `Optional` **full**: `boolean`

Whether to export the current viewport view (false, default) or the entire graph (true).

#### Inherited from

[ExportOptions](components_ClusterNodeContainer._internal_.ExportOptions.md).[full](components_ClusterNodeContainer._internal_.ExportOptions.md#full)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1127

___

### maxHeight

• `Optional` **maxHeight**: `number`

Specifies the scale automatically in combination with maxWidth such that the resultant image is no taller than maxHeight.

#### Inherited from

[ExportOptions](components_ClusterNodeContainer._internal_.ExportOptions.md).[maxHeight](components_ClusterNodeContainer._internal_.ExportOptions.md#maxheight)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1139

___

### maxWidth

• `Optional` **maxWidth**: `number`

Specifies the scale automatically in combination with maxHeight such that the resultant image is no wider than maxWidth.

#### Inherited from

[ExportOptions](components_ClusterNodeContainer._internal_.ExportOptions.md).[maxWidth](components_ClusterNodeContainer._internal_.ExportOptions.md#maxwidth)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1135

___

### quality

• `Optional` **quality**: `number`

quality Specifies the quality of the image from 0
(low quality, low filesize) to 1 (high quality, high filesize).
If not set, the browser's default quality value is used.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1160

___

### scale

• `Optional` **scale**: `number`

This value specifies a positive number that scales the size of the resultant image.

#### Inherited from

[ExportOptions](components_ClusterNodeContainer._internal_.ExportOptions.md).[scale](components_ClusterNodeContainer._internal_.ExportOptions.md#scale)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1131
