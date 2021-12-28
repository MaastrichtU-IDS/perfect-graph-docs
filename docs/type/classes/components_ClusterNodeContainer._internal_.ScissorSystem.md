[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / ScissorSystem

# Class: ScissorSystem

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).ScissorSystem

System plugin to the renderer to manage scissor masking.

Scissor masking discards pixels outside of a rectangle called the scissor box. The scissor box is in the framebuffer
viewport's space; however, the mask's rectangle is projected from world-space to viewport space automatically
by this system.

**`memberof`** PIXI

## Hierarchy

- [`AbstractMaskSystem`](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md)

  ↳ **`ScissorSystem`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.ScissorSystem.md#constructor)

### Properties

- [glConst](components_ClusterNodeContainer._internal_.ScissorSystem.md#glconst)
- [maskStack](components_ClusterNodeContainer._internal_.ScissorSystem.md#maskstack)
- [renderer](components_ClusterNodeContainer._internal_.ScissorSystem.md#renderer)
- [roundFrameToPixels](components_ClusterNodeContainer._internal_.ScissorSystem.md#roundframetopixels)
- [isMatrixRotated](components_ClusterNodeContainer._internal_.ScissorSystem.md#ismatrixrotated)

### Methods

- [\_useCurrent](components_ClusterNodeContainer._internal_.ScissorSystem.md#_usecurrent)
- [calcScissorRect](components_ClusterNodeContainer._internal_.ScissorSystem.md#calcscissorrect)
- [destroy](components_ClusterNodeContainer._internal_.ScissorSystem.md#destroy)
- [getStackLength](components_ClusterNodeContainer._internal_.ScissorSystem.md#getstacklength)
- [pop](components_ClusterNodeContainer._internal_.ScissorSystem.md#pop)
- [push](components_ClusterNodeContainer._internal_.ScissorSystem.md#push)
- [setMaskStack](components_ClusterNodeContainer._internal_.ScissorSystem.md#setmaskstack)
- [testScissor](components_ClusterNodeContainer._internal_.ScissorSystem.md#testscissor)

## Constructors

### constructor

• **new ScissorSystem**(`renderer`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) | The renderer this System works for. |

#### Overrides

[AbstractMaskSystem](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md).[constructor](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md#constructor)

#### Defined in

node_modules/@pixi/core/index.d.ts:4179

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

___

### roundFrameToPixels

• `Private` **roundFrameToPixels**: `any`

#### Defined in

node_modules/@pixi/core/index.d.ts:4194

___

### isMatrixRotated

▪ `Static` `Private` **isMatrixRotated**: `any`

#### Defined in

node_modules/@pixi/core/index.d.ts:4186

## Methods

### \_useCurrent

▸ `Private` **_useCurrent**(): `void`

Setup renderer to use the current scissor data.

#### Returns

`void`

#### Overrides

[AbstractMaskSystem](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md).[_useCurrent](components_ClusterNodeContainer._internal_.AbstractMaskSystem.md#_usecurrent)

#### Defined in

node_modules/@pixi/core/index.d.ts:4213

___

### calcScissorRect

▸ **calcScissorRect**(`maskData`): `void`

evaluates _boundsTransformed, _scissorRect for MaskData

#### Parameters

| Name | Type |
| :------ | :------ |
| `maskData` | [`MaskData`](components_ClusterNodeContainer._internal_.MaskData.md) |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4185

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

node_modules/@pixi/core/index.d.ts:4180

___

### pop

▸ **pop**(): `void`

This should be called after a mask is popped off the mask stack. It will rebind the scissor box to be latest with the
last mask in the stack.

This can also be called when you directly modify the scissor box and want to restore PixiJS state.

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4208

___

### push

▸ **push**(`maskData`): `void`

Applies the Mask and adds it to the current stencil stack.

**`author`** alvin

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maskData` | [`MaskData`](components_ClusterNodeContainer._internal_.MaskData.md) | The mask data. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4201

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

___

### testScissor

▸ **testScissor**(`maskData`): `boolean`

Test, whether the object can be scissor mask with current renderer projection.
Calls "calcScissorRect()" if its true.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maskData` | [`MaskData`](components_ClusterNodeContainer._internal_.MaskData.md) | mask data |

#### Returns

`boolean`

whether Whether the object can be scissor mask

#### Defined in

node_modules/@pixi/core/index.d.ts:4193
