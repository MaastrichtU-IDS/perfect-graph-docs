[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / ObjectRenderer

# Class: ObjectRenderer

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).ObjectRenderer

Base for a common object renderer that can be used as a
system renderer plugin.

**`memberof`** PIXI

## Hierarchy

- **`ObjectRenderer`**

  ↳ [`AbstractBatchRenderer`](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.AbstractBatchRenderer.md)

## Implements

- [`ISystem`](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.ObjectRenderer.md#constructor)

### Properties

- [renderer](components_ClusterNodeContainer._internal_.ObjectRenderer.md#renderer)

### Methods

- [destroy](components_ClusterNodeContainer._internal_.ObjectRenderer.md#destroy)
- [flush](components_ClusterNodeContainer._internal_.ObjectRenderer.md#flush)
- [render](components_ClusterNodeContainer._internal_.ObjectRenderer.md#render)
- [start](components_ClusterNodeContainer._internal_.ObjectRenderer.md#start)
- [stop](components_ClusterNodeContainer._internal_.ObjectRenderer.md#stop)

## Constructors

### constructor

• **new ObjectRenderer**(`renderer`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) | The renderer this manager works for. |

#### Defined in

node_modules/@pixi/core/index.d.ts:3256

## Properties

### renderer

• `Protected` **renderer**: [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md)

The renderer this manager works for.

#### Defined in

node_modules/@pixi/core/index.d.ts:3252

## Methods

### destroy

▸ **destroy**(): `void`

Generic destruction method that frees all resources. This
should be called by subclasses.

#### Returns

`void`

#### Implementation of

[ISystem](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md).[destroy](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md#destroy)

#### Defined in

node_modules/@pixi/core/index.d.ts:3266

___

### flush

▸ **flush**(): `void`

Stub method that should be used to empty the current
batch by rendering objects now.

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:3261

___

### render

▸ **render**(`_object`): `void`

Keeps the object to render. It doesn't have to be
rendered immediately.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_object` | `any` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:3285

___

### start

▸ **start**(): `void`

Stub method that initializes any state required before
rendering starts. It is different from the `prerender`
signal, which occurs every frame, in that it is called
whenever an object requests _this_ renderer specifically.

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:3273

___

### stop

▸ **stop**(): `void`

Stops the renderer. It should free up any state and
become dormant.

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:3278
