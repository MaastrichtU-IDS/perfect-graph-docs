[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / StencilSystem

# Class: StencilSystem

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).StencilSystem

System plugin to the renderer to manage stencils (used for masks).

**`memberof`** PIXI

## Hierarchy

- [`AbstractMaskSystem`](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md)

  ↳ **`StencilSystem`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.StencilSystem.md#constructor)

### Properties

- [glConst](components_ClusterNodeContainer._internal_.StencilSystem.md#glconst)
- [maskStack](components_ClusterNodeContainer._internal_.StencilSystem.md#maskstack)
- [renderer](components_ClusterNodeContainer._internal_.StencilSystem.md#renderer)

### Methods

- [\_useCurrent](components_ClusterNodeContainer._internal_.StencilSystem.md#_usecurrent)
- [destroy](components_ClusterNodeContainer._internal_.StencilSystem.md#destroy)
- [getStackLength](components_ClusterNodeContainer._internal_.StencilSystem.md#getstacklength)
- [pop](components_ClusterNodeContainer._internal_.StencilSystem.md#pop)
- [push](components_ClusterNodeContainer._internal_.StencilSystem.md#push)
- [setMaskStack](components_ClusterNodeContainer._internal_.StencilSystem.md#setmaskstack)

## Constructors

### constructor

• **new StencilSystem**(`renderer`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) | The renderer this System works for. |

#### Overrides

[AbstractMaskSystem](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md).[constructor](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md#constructor)

#### Defined in

node_modules/@pixi/core/index.d.ts:4616

## Properties

### glConst

• `Private` **glConst**: `number`

Constant for gl.enable

#### Inherited from

[AbstractMaskSystem](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md).[glConst](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md#glconst)

#### Defined in

node_modules/@pixi/core/index.d.ts:291

___

### maskStack

• `Protected` **maskStack**: [`MaskData`](components_ClusterNodeContainer._internal_.MaskData.md)[]

The mask stack

**`member`** {PIXI.MaskData[]}

#### Inherited from

[AbstractMaskSystem](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md).[maskStack](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md#maskstack)

#### Defined in

node_modules/@pixi/core/index.d.ts:286

___

### renderer

• `Protected` **renderer**: [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md)

#### Inherited from

[AbstractMaskSystem](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md).[renderer](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md#renderer)

#### Defined in

node_modules/@pixi/core/index.d.ts:292

## Methods

### \_useCurrent

▸ `Private` **_useCurrent**(): `void`

Setup renderer to use the current stencil data.

#### Returns

`void`

#### Overrides

[AbstractMaskSystem](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md).[_useCurrent](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md#_usecurrent)

#### Defined in

node_modules/@pixi/core/index.d.ts:4634

___

### destroy

▸ **destroy**(): `void`

Destroys the mask stack.

#### Returns

`void`

#### Inherited from

[AbstractMaskSystem](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md).[destroy](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md#destroy)

#### Defined in

node_modules/@pixi/core/index.d.ts:311

___

### getStackLength

▸ **getStackLength**(): `number`

Gets count of masks of certain type.

#### Returns

`number`

#### Overrides

[AbstractMaskSystem](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md).[getStackLength](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md#getstacklength)

#### Defined in

node_modules/@pixi/core/index.d.ts:4617

___

### pop

▸ **pop**(`maskObject`): `void`

Pops stencil mask. MaskData is already removed from stack

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maskObject` | [`IMaskTarget`](../interfaces/components_ClusterNodeContainer._internal_.IMaskTarget.md) | object of popped mask data |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4629

___

### push

▸ **push**(`maskData`): `void`

Applies the Mask and adds it to the current stencil stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maskData` | [`MaskData`](components_ClusterNodeContainer._internal_.MaskData.md) | The mask data |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4623

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

#### Inherited from

[AbstractMaskSystem](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md).[setMaskStack](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md#setmaskstack)

#### Defined in

node_modules/@pixi/core/index.d.ts:304
