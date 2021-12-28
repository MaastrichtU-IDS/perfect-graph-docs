[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](components_ClusterNodeContainer.md) / [<internal\>](components_ClusterNodeContainer._internal_.md) / Loader

# Namespace: Loader

[components/ClusterNodeContainer](components_ClusterNodeContainer.md).[<internal>](components_ClusterNodeContainer._internal_.md).Loader

## Table of contents

### Type aliases

- [OnCompleteSignal](components_ClusterNodeContainer._internal_.Loader.md#oncompletesignal)
- [OnErrorSignal](components_ClusterNodeContainer._internal_.Loader.md#onerrorsignal)
- [OnLoadSignal](components_ClusterNodeContainer._internal_.Loader.md#onloadsignal)
- [OnProgressSignal](components_ClusterNodeContainer._internal_.Loader.md#onprogresssignal)
- [OnStartSignal](components_ClusterNodeContainer._internal_.Loader.md#onstartsignal)

## Type aliases

### OnCompleteSignal

Ƭ **OnCompleteSignal**: (`loader`: [`Loader`](../classes/components_ClusterNodeContainer._internal_.Loader-1.md), `resources`: [`Dict`](components_ClusterNodeContainer._internal_.md#dict)<[`LoaderResource`](../classes/components_ClusterNodeContainer._internal_.LoaderResource-1.md)\>) => `void`

#### Type declaration

▸ (`loader`, `resources`): `void`

When the loader starts loading resources it dispatches this callback.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `loader` | [`Loader`](../classes/components_ClusterNodeContainer._internal_.Loader-1.md) | The loader that has started loading resources. |
| `resources` | [`Dict`](components_ClusterNodeContainer._internal_.md#dict)<[`LoaderResource`](../classes/components_ClusterNodeContainer._internal_.LoaderResource-1.md)\> | - |

##### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:533

___

### OnErrorSignal

Ƭ **OnErrorSignal**: (`error`: [`Error`](components_ClusterNodeContainer._internal_.md#error), `loader`: [`Loader`](../classes/components_ClusterNodeContainer._internal_.Loader-1.md), `resource`: [`LoaderResource`](../classes/components_ClusterNodeContainer._internal_.LoaderResource-1.md)) => `void`

#### Type declaration

▸ (`error`, `loader`, `resource`): `void`

When an error occurs the loader and resource are dispatched.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | [`Error`](components_ClusterNodeContainer._internal_.md#error) | - |
| `loader` | [`Loader`](../classes/components_ClusterNodeContainer._internal_.Loader-1.md) | The loader the error happened in. |
| `resource` | [`LoaderResource`](../classes/components_ClusterNodeContainer._internal_.LoaderResource-1.md) | The resource that caused the error. |

##### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:539

___

### OnLoadSignal

Ƭ **OnLoadSignal**: (`loader`: [`Loader`](../classes/components_ClusterNodeContainer._internal_.Loader-1.md), `resource`: [`LoaderResource`](../classes/components_ClusterNodeContainer._internal_.LoaderResource-1.md)) => `void`

#### Type declaration

▸ (`loader`, `resource`): `void`

When a load completes without error the loader and resource are dispatched.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `loader` | [`Loader`](../classes/components_ClusterNodeContainer._internal_.Loader-1.md) | The loader that has started loading resources. |
| `resource` | [`LoaderResource`](../classes/components_ClusterNodeContainer._internal_.LoaderResource-1.md) | The resource that has completed. |

##### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:528

___

### OnProgressSignal

Ƭ **OnProgressSignal**: (`loader`: [`Loader`](../classes/components_ClusterNodeContainer._internal_.Loader-1.md), `resource`: [`LoaderResource`](../classes/components_ClusterNodeContainer._internal_.LoaderResource-1.md)) => `void`

#### Type declaration

▸ (`loader`, `resource`): `void`

When the progress changes the loader and resource are dispatched.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `loader` | [`Loader`](../classes/components_ClusterNodeContainer._internal_.Loader-1.md) | The loader the progress is advancing on. |
| `resource` | [`LoaderResource`](../classes/components_ClusterNodeContainer._internal_.LoaderResource-1.md) | The resource that has completed or failed to cause the progress to advance. |

##### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:522

___

### OnStartSignal

Ƭ **OnStartSignal**: (`loader`: [`Loader`](../classes/components_ClusterNodeContainer._internal_.Loader-1.md)) => `void`

#### Type declaration

▸ (`loader`): `void`

When the resource starts to load.

##### Parameters

| Name | Type |
| :------ | :------ |
| `loader` | [`Loader`](../classes/components_ClusterNodeContainer._internal_.Loader-1.md) |

##### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:516
