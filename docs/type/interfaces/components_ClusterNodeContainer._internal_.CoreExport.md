[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / CoreExport

# Interface: CoreExport

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).CoreExport

## Hierarchy

- **`CoreExport`**

  ↳ [`Core`](components_ClusterNodeContainer._internal_.Core.md)

## Table of contents

### Methods

- [jpeg](components_ClusterNodeContainer._internal_.CoreExport.md#jpeg)
- [jpg](components_ClusterNodeContainer._internal_.CoreExport.md#jpg)
- [json](components_ClusterNodeContainer._internal_.CoreExport.md#json)
- [png](components_ClusterNodeContainer._internal_.CoreExport.md#png)

## Methods

### jpeg

▸ **jpeg**(`options?`): `string`

Export the current graph view as a JPG image in Base64 representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ExportJpgStringOptions`](components_ClusterNodeContainer._internal_.ExportJpgStringOptions.md) |

#### Returns

`string`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1183

▸ **jpeg**(`options?`): `Blob`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ExportJpgBlobOptions`](components_ClusterNodeContainer._internal_.ExportJpgBlobOptions.md) |

#### Returns

`Blob`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1184

___

### jpg

▸ **jpg**(`options?`): `string`

Export the current graph view as a JPG image in Base64 representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ExportJpgStringOptions`](components_ClusterNodeContainer._internal_.ExportJpgStringOptions.md) |

#### Returns

`string`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1177

▸ **jpg**(`options?`): `Blob`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ExportJpgBlobOptions`](components_ClusterNodeContainer._internal_.ExportJpgBlobOptions.md) |

#### Returns

`Blob`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1178

___

### json

▸ **json**(): `object`

Export the graph as JSON, the same format used at initialisation.

#### Returns

`object`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1189

▸ **json**(`json`): [`CoreExport`](components_ClusterNodeContainer._internal_.CoreExport.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `object` |

#### Returns

[`CoreExport`](components_ClusterNodeContainer._internal_.CoreExport.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1190

___

### png

▸ **png**(`options?`): `string`

Export the current graph view as a PNG image in Base64 representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ExportStringOptions`](components_ClusterNodeContainer._internal_.ExportStringOptions.md) |

#### Returns

`string`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1171

▸ **png**(`options?`): `Blob`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ExportBlobOptions`](components_ClusterNodeContainer._internal_.ExportBlobOptions.md) |

#### Returns

`Blob`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1172
