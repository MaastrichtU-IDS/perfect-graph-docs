[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / ExportJpgBlobOptions

# Interface: ExportJpgBlobOptions

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).ExportJpgBlobOptions

## Hierarchy

- [`ExportJpgOptions`](components_ClusterNodeContainer._internal_.ExportJpgOptions.md)

- [`ExportBlobOptions`](components_ClusterNodeContainer._internal_.ExportBlobOptions.md)

  ↳ **`ExportJpgBlobOptions`**

## Table of contents

### Properties

- [bg](components_ClusterNodeContainer._internal_.ExportJpgBlobOptions.md#bg)
- [full](components_ClusterNodeContainer._internal_.ExportJpgBlobOptions.md#full)
- [maxHeight](components_ClusterNodeContainer._internal_.ExportJpgBlobOptions.md#maxheight)
- [maxWidth](components_ClusterNodeContainer._internal_.ExportJpgBlobOptions.md#maxwidth)
- [output](components_ClusterNodeContainer._internal_.ExportJpgBlobOptions.md#output)
- [quality](components_ClusterNodeContainer._internal_.ExportJpgBlobOptions.md#quality)
- [scale](components_ClusterNodeContainer._internal_.ExportJpgBlobOptions.md#scale)

## Properties

### bg

• `Optional` **bg**: `string`

The background colour of the image (transparent by default).

#### Inherited from

[ExportBlobOptions](components_ClusterNodeContainer._internal_.ExportBlobOptions.md).[bg](components_ClusterNodeContainer._internal_.ExportBlobOptions.md#bg)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1123

___

### full

• `Optional` **full**: `boolean`

Whether to export the current viewport view (false, default) or the entire graph (true).

#### Inherited from

[ExportBlobOptions](components_ClusterNodeContainer._internal_.ExportBlobOptions.md).[full](components_ClusterNodeContainer._internal_.ExportBlobOptions.md#full)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1127

___

### maxHeight

• `Optional` **maxHeight**: `number`

Specifies the scale automatically in combination with maxWidth such that the resultant image is no taller than maxHeight.

#### Inherited from

[ExportBlobOptions](components_ClusterNodeContainer._internal_.ExportBlobOptions.md).[maxHeight](components_ClusterNodeContainer._internal_.ExportBlobOptions.md#maxheight)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1139

___

### maxWidth

• `Optional` **maxWidth**: `number`

Specifies the scale automatically in combination with maxHeight such that the resultant image is no wider than maxWidth.

#### Inherited from

[ExportBlobOptions](components_ClusterNodeContainer._internal_.ExportBlobOptions.md).[maxWidth](components_ClusterNodeContainer._internal_.ExportBlobOptions.md#maxwidth)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1135

___

### output

• `Optional` **output**: ``"blob"``

output Whether the output should be 'base64uri' (default), 'base64', or 'blob'.

#### Inherited from

[ExportBlobOptions](components_ClusterNodeContainer._internal_.ExportBlobOptions.md).[output](components_ClusterNodeContainer._internal_.ExportBlobOptions.md#output)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1151

___

### quality

• `Optional` **quality**: `number`

quality Specifies the quality of the image from 0
(low quality, low filesize) to 1 (high quality, high filesize).
If not set, the browser's default quality value is used.

#### Inherited from

[ExportJpgOptions](components_ClusterNodeContainer._internal_.ExportJpgOptions.md).[quality](components_ClusterNodeContainer._internal_.ExportJpgOptions.md#quality)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1160

___

### scale

• `Optional` **scale**: `number`

This value specifies a positive number that scales the size of the resultant image.

#### Inherited from

[ExportBlobOptions](components_ClusterNodeContainer._internal_.ExportBlobOptions.md).[scale](components_ClusterNodeContainer._internal_.ExportBlobOptions.md#scale)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1131
