[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / IApplicationPlugin

# Interface: IApplicationPlugin

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).IApplicationPlugin

Any plugin that's usable for Application should contain these methods.

**`memberof`** PIXI

**`see`** {@link PIXI.Application.registerPlugin}

## Table of contents

### Methods

- [destroy](components_ClusterNodeContainer._internal_.IApplicationPlugin.md#destroy)
- [init](components_ClusterNodeContainer._internal_.IApplicationPlugin.md#init)

## Methods

### destroy

▸ **destroy**(): `void`

Called when destroying Application, scoped to Application instance.

#### Returns

`void`

#### Defined in

node_modules/@pixi/app/index.d.ts:133

___

### init

▸ **init**(`options`): `void`

Called when Application is constructed, scoped to Application instance.
Passes in `options` as the only argument, which are Application constructor options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IApplicationOptions`](components_ClusterNodeContainer._internal_.IApplicationOptions.md) | Application options. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/app/index.d.ts:129
