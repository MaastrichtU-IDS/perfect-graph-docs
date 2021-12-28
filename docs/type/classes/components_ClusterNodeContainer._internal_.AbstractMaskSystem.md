[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / AbstractMaskSystem

# Class: AbstractMaskSystem

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).AbstractMaskSystem

System plugin to the renderer to manage specific types of masking operations.

**`memberof`** PIXI

## Hierarchy

- **`AbstractMaskSystem`**

  ↳ [`ScissorSystem`](components_ClusterNodeContainer._internal_.ScissorSystem.md)

  ↳ [`StencilSystem`](components_ClusterNodeContainer._internal_.StencilSystem.md)

  ↳ [`ScissorSystem`](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.ScissorSystem.md)

  ↳ [`StencilSystem`](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.StencilSystem.md)

## Implements

- [`ISystem`](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md#constructor)

### Properties

- [glConst](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md#glconst)
- [maskStack](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md#maskstack)
- [renderer](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md#renderer)

### Methods

- [\_useCurrent](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md#_usecurrent)
- [destroy](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md#destroy)
- [getStackLength](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md#getstacklength)
- [setMaskStack](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md#setmaskstack)

## Constructors

### constructor

• **new AbstractMaskSystem**(`renderer`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) | The renderer this System works for. |

#### Defined in

node_modules/@pixi/core/index.d.ts:296

## Properties

### glConst

• `Private` **glConst**: `number`

Constant for gl.enable

#### Defined in

node_modules/@pixi/core/index.d.ts:291

___

### maskStack

• `Protected` **maskStack**: [`MaskData`](components_ClusterNodeContainer._internal_.MaskData.md)[]

The mask stack

**`member`** {PIXI.MaskData[]}

#### Defined in

node_modules/@pixi/core/index.d.ts:286

___

### renderer

• `Protected` **renderer**: [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:292

## Methods

### \_useCurrent

▸ `Private` **_useCurrent**(): `void`

Setup renderer to use the current mask data.

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:309

___

### destroy

▸ **destroy**(): `void`

Destroys the mask stack.

#### Returns

`void`

#### Implementation of

[ISystem](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md).[destroy](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md#destroy)

#### Defined in

node_modules/@pixi/core/index.d.ts:311

___

### getStackLength

▸ **getStackLength**(): `number`

Gets count of masks of certain type.

#### Returns

`number`

#### Defined in

node_modules/@pixi/core/index.d.ts:298

___

### setMaskStack

▸ **setMaskStack**(`maskStack`): `void`

Changes the mask stack that is used by this System.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maskStack` | [`MaskData`](components_ClusterNodeContainer._internal_.MaskData.md)[] | The mask stack |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:304
