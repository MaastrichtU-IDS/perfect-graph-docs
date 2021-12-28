[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / IRenderableContainer

# Interface: IRenderableContainer

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).IRenderableContainer

Interface for Container to interface with Renderer.

**`memberof`** PIXI

## Hierarchy

- [`IRenderableObject`](components_ClusterNodeContainer._internal_.IRenderableObject.md)

  ↳ **`IRenderableContainer`**

## Table of contents

### Properties

- [parent](components_ClusterNodeContainer._internal_.IRenderableContainer.md#parent)

### Methods

- [disableTempParent](components_ClusterNodeContainer._internal_.IRenderableContainer.md#disabletempparent)
- [enableTempParent](components_ClusterNodeContainer._internal_.IRenderableContainer.md#enabletempparent)
- [getLocalBounds](components_ClusterNodeContainer._internal_.IRenderableContainer.md#getlocalbounds)
- [render](components_ClusterNodeContainer._internal_.IRenderableContainer.md#render)
- [updateTransform](components_ClusterNodeContainer._internal_.IRenderableContainer.md#updatetransform)

## Properties

### parent

• **parent**: [`IRenderableContainer`](components_ClusterNodeContainer._internal_.IRenderableContainer.md)

Object must have a parent container

#### Inherited from

[IRenderableObject](components_ClusterNodeContainer._internal_.IRenderableObject.md).[parent](components_ClusterNodeContainer._internal_.IRenderableObject.md#parent)

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

#### Inherited from

[IRenderableObject](components_ClusterNodeContainer._internal_.IRenderableObject.md).[disableTempParent](components_ClusterNodeContainer._internal_.IRenderableObject.md#disabletempparent)

#### Defined in

node_modules/@pixi/core/index.d.ts:2910

___

### enableTempParent

▸ **enableTempParent**(): [`IRenderableContainer`](components_ClusterNodeContainer._internal_.IRenderableContainer.md)

Before method for transform updates

#### Returns

[`IRenderableContainer`](components_ClusterNodeContainer._internal_.IRenderableContainer.md)

#### Inherited from

[IRenderableObject](components_ClusterNodeContainer._internal_.IRenderableObject.md).[enableTempParent](components_ClusterNodeContainer._internal_.IRenderableObject.md#enabletempparent)

#### Defined in

node_modules/@pixi/core/index.d.ts:2906

___

### getLocalBounds

▸ **getLocalBounds**(`rect?`, `skipChildrenUpdate?`): [`Rectangle`](../classes/components_ClusterNodeContainer._internal_.Rectangle.md)

Get Local bounds for container

#### Parameters

| Name | Type |
| :------ | :------ |
| `rect?` | [`Rectangle`](../classes/components_ClusterNodeContainer._internal_.Rectangle.md) |
| `skipChildrenUpdate?` | `boolean` |

#### Returns

[`Rectangle`](../classes/components_ClusterNodeContainer._internal_.Rectangle.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2894

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

#### Inherited from

[IRenderableObject](components_ClusterNodeContainer._internal_.IRenderableObject.md).[render](components_ClusterNodeContainer._internal_.IRenderableObject.md#render)

#### Defined in

node_modules/@pixi/core/index.d.ts:2912

___

### updateTransform

▸ **updateTransform**(): `void`

Update the transforms

#### Returns

`void`

#### Inherited from

[IRenderableObject](components_ClusterNodeContainer._internal_.IRenderableObject.md).[updateTransform](components_ClusterNodeContainer._internal_.IRenderableObject.md#updatetransform)

#### Defined in

node_modules/@pixi/core/index.d.ts:2908
