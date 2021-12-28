[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / ILoaderPlugin

# Interface: ILoaderPlugin

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).ILoaderPlugin

Plugin to be installed for handling specific Loader resources.

**`property`** [add] - Function to call immediate after registering plugin.

**`property`** [pre] - Middleware function to run before load, the
          arguments for this are `(resource, next)`

**`property`** [use] - Middleware function to run after load, the
          arguments for this are `(resource, next)`

## Table of contents

### Methods

- [add](components_ClusterNodeContainer._internal_.ILoaderPlugin.md#add)
- [pre](components_ClusterNodeContainer._internal_.ILoaderPlugin.md#pre)
- [use](components_ClusterNodeContainer._internal_.ILoaderPlugin.md#use)

## Methods

### add

▸ `Optional` **add**(): `void`

Function to call immediate after registering plugin.

#### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:160

___

### pre

▸ `Optional` **pre**(`resource`, `next`): `void`

Middleware function to run before load

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resource` | [`LoaderResource`](../classes/components_ClusterNodeContainer._internal_.LoaderResource-1.md) | resource |
| `next` | (...`args`: `any`[]) => `void` | next middleware |

#### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:166

___

### use

▸ `Optional` **use**(`resource`, `next`): `void`

Middleware function to run after load

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resource` | [`LoaderResource`](../classes/components_ClusterNodeContainer._internal_.LoaderResource-1.md) | resource |
| `next` | (...`args`: `any`[]) => `void` | next middleware |

#### Returns

`void`

#### Defined in

node_modules/@pixi/loaders/index.d.ts:172
