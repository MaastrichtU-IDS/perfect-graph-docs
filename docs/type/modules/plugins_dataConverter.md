[perfect-graph](../README.md) / [Modules](../modules.md) / plugins/dataConverter

# Module: plugins/dataConverter

## Table of contents

### Functions

- [convertJSONLDToGraphData](plugins_dataConverter.md#convertjsonldtographdata)
- [convertRDFToGraphData](plugins_dataConverter.md#convertrdftographdata)
- [convertToJSONLD](plugins_dataConverter.md#converttojsonld)
- [filterEdges](plugins_dataConverter.md#filteredges)
- [sparqlResultToRDF](plugins_dataConverter.md#sparqlresulttordf)

## Functions

### convertJSONLDToGraphData

▸ `Const` **convertJSONLDToGraphData**(`jsonLDList`, `graph?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonLDList` | [`Record`](components_ClusterNodeContainer._internal_.md#record)<`string`, `any`\>[] |
| `graph` | `Object` |
| `graph.edges` | `Object` |
| `graph.nodes` | `Object` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `edges` | { `source`: `string` ; `target`: `string`  }[] |
| `nodes` | `unknown`[] |

#### Defined in

[src/plugins/dataConverter/index.ts:164](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/plugins/dataConverter/index.ts#L164)

___

### convertRDFToGraphData

▸ `Const` **convertRDFToGraphData**(): `Promise`<{ `edges`: { `source`: `string` ; `target`: `string`  }[] ; `nodes`: `unknown`[] = nodeList }\>

#### Returns

`Promise`<{ `edges`: { `source`: `string` ; `target`: `string`  }[] ; `nodes`: `unknown`[] = nodeList }\>

#### Defined in

[src/plugins/dataConverter/index.ts:328](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/plugins/dataConverter/index.ts#L328)

___

### convertToJSONLD

▸ `Const` **convertToJSONLD**(`text`): `Promise`<[`Record`](components_ClusterNodeContainer._internal_.md#record)<`string`, `any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`Promise`<[`Record`](components_ClusterNodeContainer._internal_.md#record)<`string`, `any`\>[]\>

#### Defined in

[src/plugins/dataConverter/index.ts:57](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/plugins/dataConverter/index.ts#L57)

___

### filterEdges

▸ `Const` **filterEdges**(`nodes`): (`edges`: { `source`: `string` ; `target`: `string`  }[]) => { `source`: `string` ; `target`: `string`  }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | { `id`: `string`  }[] |

#### Returns

`fn`

▸ (`edges`): { `source`: `string` ; `target`: `string`  }[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `edges` | { `source`: `string` ; `target`: `string`  }[] |

##### Returns

{ `source`: `string` ; `target`: `string`  }[]

#### Defined in

[src/plugins/dataConverter/index.ts:228](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/plugins/dataConverter/index.ts#L228)

___

### sparqlResultToRDF

▸ `Const` **sparqlResultToRDF**(`sparqlResult`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sparqlResult` | `any` |

#### Returns

`string`

#### Defined in

[src/plugins/dataConverter/index.ts:283](https://github.com/MaastrichtU-IDS/perfect-graph/blob/27ebaf3/src/plugins/dataConverter/index.ts#L283)
