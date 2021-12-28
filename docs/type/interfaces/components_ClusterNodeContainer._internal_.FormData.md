[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / FormData

# Interface: FormData

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).FormData

Provides a way to easily construct a set of key/value pairs representing form fields and their values, which can then be easily sent using the XMLHttpRequest.send() method. It uses the same format a form would use if the encoding type were set to "multipart/form-data".

## Table of contents

### Methods

- [append](components_ClusterNodeContainer._internal_.FormData.md#append)
- [delete](components_ClusterNodeContainer._internal_.FormData.md#delete)
- [forEach](components_ClusterNodeContainer._internal_.FormData.md#foreach)
- [get](components_ClusterNodeContainer._internal_.FormData.md#get)
- [getAll](components_ClusterNodeContainer._internal_.FormData.md#getall)
- [has](components_ClusterNodeContainer._internal_.FormData.md#has)
- [set](components_ClusterNodeContainer._internal_.FormData.md#set)

## Methods

### append

▸ **append**(`name`, `value`, `fileName?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` \| `Blob` |
| `fileName?` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5200

___

### delete

▸ **delete**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5201

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: [`FormDataEntryValue`](../modules/components_ClusterNodeContainer._internal_.md#formdataentryvalue), `key`: `string`, `parent`: [`FormData`](../modules/components_ClusterNodeContainer._internal_.md#formdata)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5206

___

### get

▸ **get**(`name`): ``null`` \| [`FormDataEntryValue`](../modules/components_ClusterNodeContainer._internal_.md#formdataentryvalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| [`FormDataEntryValue`](../modules/components_ClusterNodeContainer._internal_.md#formdataentryvalue)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5202

___

### getAll

▸ **getAll**(`name`): [`FormDataEntryValue`](../modules/components_ClusterNodeContainer._internal_.md#formdataentryvalue)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`FormDataEntryValue`](../modules/components_ClusterNodeContainer._internal_.md#formdataentryvalue)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5203

___

### has

▸ **has**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5204

___

### set

▸ **set**(`name`, `value`, `fileName?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` \| `Blob` |
| `fileName?` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5205
