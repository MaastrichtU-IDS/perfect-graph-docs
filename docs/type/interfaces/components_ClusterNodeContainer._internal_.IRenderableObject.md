[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / IRenderableObject

# Interface: IRenderableObject

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).IRenderableObject

Interface for DisplayObject to interface with Renderer.
The minimum APIs needed to implement a renderable object.

**`memberof`** PIXI

## Hierarchy

- **`IRenderableObject`**

  ↳ [`IRenderableContainer`](components_ClusterNodeContainer._internal_.IRenderableContainer.md)

  ↳ [`IRenderableContainer`](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IRenderableContainer.md)

## Table of contents

### Properties

- [parent](components_ClusterNodeContainer._internal_.IRenderableObject.md#parent)

### Methods

- [disableTempParent](components_ClusterNodeContainer._internal_.IRenderableObject.md#disabletempparent)
- [enableTempParent](components_ClusterNodeContainer._internal_.IRenderableObject.md#enabletempparent)
- [render](components_ClusterNodeContainer._internal_.IRenderableObject.md#render)
- [updateTransform](components_ClusterNodeContainer._internal_.IRenderableObject.md#updatetransform)

## Properties

### parent

• **parent**: [`IRenderableContainer`](components_ClusterNodeContainer._internal_.IRenderableContainer.md)

Object must have a parent container

#### Defined in

node_modules/@pixi/core/index.d.ts:2904

## Methods

### disableTempParent

▸ **disableTempParent**(`parent`): `void`

After method for transform updates

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`IRenderableContainer`](components_ClusterNodeContainer._internal_.IRenderableContainer.md) |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2910

___

### enableTempParent

▸ **enableTempParent**(): [`IRenderableContainer`](components_ClusterNodeContainer._internal_.IRenderableContainer.md)

Before method for transform updates

#### Returns

[`IRenderableContainer`](components_ClusterNodeContainer._internal_.IRenderableContainer.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2906

___

### render

▸ **render**(`renderer`): `void`

Render object directly

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | [`Renderer`](../classes/components_ClusterNodeContainer._internal_.Renderer.md) |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2912

___

### updateTransform

▸ **updateTransform**(): `void`

Update the transforms

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2908