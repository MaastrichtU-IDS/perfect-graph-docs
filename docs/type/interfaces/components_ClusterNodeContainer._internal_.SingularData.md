[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SingularData

# Interface: SingularData

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SingularData

http://js.cytoscape.org/#collection/data

## Hierarchy

- **`SingularData`**

  ↳ [`Singular`](components_ClusterNodeContainer._internal_.Singular.md)

## Table of contents

### Methods

- [attr](components_ClusterNodeContainer._internal_.SingularData.md#attr)
- [data](components_ClusterNodeContainer._internal_.SingularData.md#data)
- [group](components_ClusterNodeContainer._internal_.SingularData.md#group)
- [id](components_ClusterNodeContainer._internal_.SingularData.md#id)
- [isEdge](components_ClusterNodeContainer._internal_.SingularData.md#isedge)
- [isNode](components_ClusterNodeContainer._internal_.SingularData.md#isnode)
- [json](components_ClusterNodeContainer._internal_.SingularData.md#json)
- [removeScratch](components_ClusterNodeContainer._internal_.SingularData.md#removescratch)
- [scratch](components_ClusterNodeContainer._internal_.SingularData.md#scratch)

## Methods

### attr

▸ **attr**(`name?`): `any`

Get a particular data field for the element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | The name of the field to get. |

#### Returns

`any`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1438

▸ **attr**(`name`, `value`): [`SingularData`](components_ClusterNodeContainer._internal_.SingularData.md)

Set a particular data field for the element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the field to set. |
| `value` | `any` | The value to set for the field. |

#### Returns

[`SingularData`](components_ClusterNodeContainer._internal_.SingularData.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1444

▸ **attr**(`obj`): [`SingularData`](components_ClusterNodeContainer._internal_.SingularData.md)

Update multiple data fields at once via an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `any` | The object containing name- value pairs to update data fields. |

#### Returns

[`SingularData`](components_ClusterNodeContainer._internal_.SingularData.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1449

___

### data

▸ **data**(`name?`): `any`

Get a particular data field for the element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | The name of the field to get. |

#### Returns

`any`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1422

▸ **data**(`name`, `value`): [`SingularData`](components_ClusterNodeContainer._internal_.SingularData.md)

Set a particular data field for the element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the field to set. |
| `value` | `any` | The value to set for the field. |

#### Returns

[`SingularData`](components_ClusterNodeContainer._internal_.SingularData.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1428

▸ **data**(`obj`): [`SingularData`](components_ClusterNodeContainer._internal_.SingularData.md)

Update multiple data fields at once via an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `any` | The object containing name- value pairs to update data fields. |

#### Returns

[`SingularData`](components_ClusterNodeContainer._internal_.SingularData.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1433

___

### group

▸ **group**(): [`ElementGroup`](../modules/components_ClusterNodeContainer._internal_.md#elementgroup)

Get the group string that defines the type of the element.

The group strings are 'nodes' for nodes and 'edges' for edges.
In general, you should be using ele.isEdge()
and ele.isNode() instead of ele.group().
http://js.cytoscape.org/#ele.group

#### Returns

[`ElementGroup`](../modules/components_ClusterNodeContainer._internal_.md#elementgroup)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1492

___

### id

▸ **id**(): `string`

A shortcut to get the ID of an element.
http://js.cytoscape.org/#ele.id

#### Returns

`string`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1476

___

### isEdge

▸ **isEdge**(): this is EdgeSingular

Get whether the element is an edge.
http://js.cytoscape.org/#ele.isEdge

#### Returns

this is EdgeSingular

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1504

___

### isNode

▸ **isNode**(): this is NodeSingular

Get whether the element is a node.
http://js.cytoscape.org/#ele.isNode

#### Returns

this is NodeSingular

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1498

___

### json

▸ **json**(): `string`

Get the element's plain JavaScript object representation.
http://js.cytoscape.org/#ele.json

#### Returns

`string`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1482

___

### removeScratch

▸ **removeScratch**(`namespace`): [`SingularData`](components_ClusterNodeContainer._internal_.SingularData.md)

Remove scratchpad data.
You should remove scratchpad data only at your own namespaces.
http://js.cytoscape.org/#ele.removeScratch

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace` | `string` | A namespace string. |

#### Returns

[`SingularData`](components_ClusterNodeContainer._internal_.SingularData.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1470

___

### scratch

▸ **scratch**(`namespace?`): `any`

Get or set the scratchpad at a particular namespace,
where temporary or non-JSON data can be stored.
Get scratchpad if one or no parameter provided.
App-level scratchpad data should use namespaces
prefixed with underscore, like '_foo'.
http://js.cytoscape.org/#ele.scratch

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace?` | `string` | A namespace string. |

#### Returns

`any`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1461

▸ **scratch**(`namespace`, `value`): [`SingularData`](components_ClusterNodeContainer._internal_.SingularData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `value` | `any` |

#### Returns

[`SingularData`](components_ClusterNodeContainer._internal_.SingularData.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:1462
