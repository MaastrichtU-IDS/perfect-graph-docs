[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](components_ClusterNodeContainer.md) / [<internal\>](components_ClusterNodeContainer._internal_.md) / LoaderResource

# Namespace: LoaderResource

[components/ClusterNodeContainer](components_ClusterNodeContainer.md).[<internal>](components_ClusterNodeContainer._internal_.md).LoaderResource

## Table of contents

### Enumerations

- [LOAD\_TYPE](../enums/components_ClusterNodeContainer._internal_.LoaderResource.LOAD_TYPE.md)
- [STATUS\_FLAGS](../enums/components_ClusterNodeContainer._internal_.LoaderResource.STATUS_FLAGS.md)
- [TYPE](../enums/components_ClusterNodeContainer._internal_.LoaderResource.TYPE.md)
- [XHR\_RESPONSE\_TYPE](../enums/components_ClusterNodeContainer._internal_.LoaderResource.XHR_RESPONSE_TYPE.md)

### Type aliases

- [OnCompleteSignal](components_ClusterNodeContainer._internal_.LoaderResource.md#oncompletesignal)
- [OnProgressSignal](components_ClusterNodeContainer._internal_.LoaderResource.md#onprogresssignal)
- [OnStartSignal](components_ClusterNodeContainer._internal_.LoaderResource.md#onstartsignal)

### Variables

- [EMPTY\_GIF](components_ClusterNodeContainer._internal_.LoaderResource.md#empty_gif)
- [\_loadTypeMap](components_ClusterNodeContainer._internal_.LoaderResource.md#_loadtypemap)
- [\_xhrTypeMap](components_ClusterNodeContainer._internal_.LoaderResource.md#_xhrtypemap)

## Type aliases

### OnCompleteSignal

Ƭ **OnCompleteSignal**: (`resource`: [`LoaderResource`](../classes/components_ClusterNodeContainer._internal_.LoaderResource-1.md)) => `void`

#### Type declaration

▸ (`resource`): `void`

When the resource finishes loading.

**`memberof`** PIXI.LoaderResource

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resource` | [`LoaderResource`](../classes/components_ClusterNodeContainer._internal_.LoaderResource-1.md) | The resource that the event happened on. |

##### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:1016

___

### OnProgressSignal

Ƭ **OnProgressSignal**: (`resource`: [`LoaderResource`](../classes/components_ClusterNodeContainer._internal_.LoaderResource-1.md), `percentage`: `number`) => `void`

#### Type declaration

▸ (`resource`, `percentage`): `void`

When the resource reports loading progress.

**`memberof`** PIXI.LoaderResource

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resource` | [`LoaderResource`](../classes/components_ClusterNodeContainer._internal_.LoaderResource-1.md) | The resource that the event happened on. |
| `percentage` | `number` | The progress of the load in the range [0, 1]. |

##### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:1008

___

### OnStartSignal

Ƭ **OnStartSignal**: (`resource`: [`LoaderResource`](../classes/components_ClusterNodeContainer._internal_.LoaderResource-1.md)) => `void`

#### Type declaration

▸ (`resource`): `void`

When the resource starts to load.

**`memberof`** PIXI.LoaderResource

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resource` | [`LoaderResource`](../classes/components_ClusterNodeContainer._internal_.LoaderResource-1.md) | The resource that the event happened on. |

##### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:999

## Variables

### EMPTY\_GIF

• **EMPTY\_GIF**: ``"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="``

#### Defined in

node_modules/@pixi/loaders/index.d.ts:1101

___

### \_loadTypeMap

• **\_loadTypeMap**: [`Dict`](components_ClusterNodeContainer._internal_.md#dict)<`number`\>

#### Defined in

node_modules/@pixi/loaders/index.d.ts:1099

___

### \_xhrTypeMap

• **\_xhrTypeMap**: [`Dict`](components_ClusterNodeContainer._internal_.md#dict)<[`XHR_RESPONSE_TYPE`](../enums/components_ClusterNodeContainer._internal_.LoaderResource.XHR_RESPONSE_TYPE.md)\>

#### Defined in

node_modules/@pixi/loaders/index.d.ts:1100
