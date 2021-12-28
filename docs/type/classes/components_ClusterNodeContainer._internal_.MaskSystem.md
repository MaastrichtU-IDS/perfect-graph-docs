[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / MaskSystem

# Class: MaskSystem

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).MaskSystem

System plugin to the renderer to manage masks.

There are three built-in types of masking:
* **Scissor Masking**: Scissor masking discards pixels that are outside of a rectangle called the scissor box. It is
 the most performant as the scissor test is inexpensive. However, it can only be used when the mask is rectangular.
* **Stencil Masking**: Stencil masking discards pixels that don't overlap with the pixels rendered into the stencil
 buffer. It is the next fastest option as it does not require rendering into a separate framebuffer. However, it does
 cause the mask to be rendered **twice** for each masking operation; hence, minimize the rendering cost of your masks.
* **Sprite Mask Filtering**: Sprite mask filtering discards pixels based on the red channel of the sprite-mask's
 texture. (Generally, the masking texture is grayscale). Using advanced techniques, you might be able to embed this
 type of masking in a custom shader - and hence, bypassing the masking system fully for performance wins.

The best type of masking is auto-detected when you `push` one. To use scissor masking, you must pass in a `Graphics`
object with just a rectangle drawn.

## Mask Stacks

In the scene graph, masks can be applied recursively, i.e. a mask can be applied during a masking operation. The mask
stack stores the currently applied masks in order. Each {@link PIXI.BaseRenderTexture} holds its own mask stack, i.e.
when you switch render-textures, the old masks only applied when you switch back to rendering to the old render-target.

**`memberof`** PIXI

## Implements

- [`ISystem`](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.MaskSystem.md#constructor)

### Properties

- [alphaMaskIndex](components_ClusterNodeContainer._internal_.MaskSystem.md#alphamaskindex)
- [alphaMaskPool](components_ClusterNodeContainer._internal_.MaskSystem.md#alphamaskpool)
- [enableScissor](components_ClusterNodeContainer._internal_.MaskSystem.md#enablescissor)
- [maskDataPool](components_ClusterNodeContainer._internal_.MaskSystem.md#maskdatapool)
- [maskStack](components_ClusterNodeContainer._internal_.MaskSystem.md#maskstack)
- [renderer](components_ClusterNodeContainer._internal_.MaskSystem.md#renderer)

### Methods

- [destroy](components_ClusterNodeContainer._internal_.MaskSystem.md#destroy)
- [detect](components_ClusterNodeContainer._internal_.MaskSystem.md#detect)
- [pop](components_ClusterNodeContainer._internal_.MaskSystem.md#pop)
- [popSpriteMask](components_ClusterNodeContainer._internal_.MaskSystem.md#popspritemask)
- [push](components_ClusterNodeContainer._internal_.MaskSystem.md#push)
- [pushSpriteMask](components_ClusterNodeContainer._internal_.MaskSystem.md#pushspritemask)
- [setMaskStack](components_ClusterNodeContainer._internal_.MaskSystem.md#setmaskstack)

## Constructors

### constructor

• **new MaskSystem**(`renderer`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) | The renderer this System works for. |

#### Defined in

node_modules/@pixi/core/index.d.ts:3203

## Properties

### alphaMaskIndex

• `Protected` **alphaMaskIndex**: `number`

Current index of alpha mask pool.

**`default`** 0

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:3195

___

### alphaMaskPool

• `Protected` `Readonly` **alphaMaskPool**: [`SpriteMaskFilter`](components_ClusterNodeContainer._internal_.SpriteMaskFilter.md)[][]

Pool of used sprite mask filters.

#### Defined in

node_modules/@pixi/core/index.d.ts:3189

___

### enableScissor

• **enableScissor**: `boolean`

Flag to enable scissor masking.

**`default`** true

#### Defined in

node_modules/@pixi/core/index.d.ts:3187

___

### maskDataPool

• `Private` `Readonly` **maskDataPool**: `any`

Pool of mask data.

#### Defined in

node_modules/@pixi/core/index.d.ts:3197

___

### maskStack

• `Private` **maskStack**: `any`

#### Defined in

node_modules/@pixi/core/index.d.ts:3198

___

### renderer

• `Private` **renderer**: `any`

#### Defined in

node_modules/@pixi/core/index.d.ts:3199

## Methods

### destroy

▸ **destroy**(): `void`

Generic destroy methods to be overridden by the subclass

#### Returns

`void`

#### Implementation of

[ISystem](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md).[destroy](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md#destroy)

#### Defined in

node_modules/@pixi/core/index.d.ts:3241

___

### detect

▸ **detect**(`maskData`): `void`

Sets type of MaskData based on its maskObject.

#### Parameters

| Name | Type |
| :------ | :------ |
| `maskData` | [`MaskData`](components_ClusterNodeContainer._internal_.MaskData.md) |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:3228

___

### pop

▸ **pop**(`target`): `void`

Removes the last mask from the mask stack and doesn't return it.

NOTE: The batch renderer should be flushed beforehand to render the masked contents before the mask is removed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`IMaskTarget`](../interfaces/components_ClusterNodeContainer._internal_.IMaskTarget.md) | Display Object to pop the mask from |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:3226

___

### popSpriteMask

▸ **popSpriteMask**(`maskData`): `void`

Removes the last filter from the filter stack and doesn't return it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maskData` | [`MaskData`](components_ClusterNodeContainer._internal_.MaskData.md) | Sprite to be used as the mask. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:3240

___

### push

▸ **push**(`target`, `maskDataOrTarget`): `void`

Enables the mask and appends it to the current mask stack.

NOTE: The batch renderer should be flushed beforehand to prevent pending renders from being masked.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`IMaskTarget`](../interfaces/components_ClusterNodeContainer._internal_.IMaskTarget.md) | Display Object to push the mask to |
| `maskDataOrTarget` | [`MaskData`](components_ClusterNodeContainer._internal_.MaskData.md) \| [`IMaskTarget`](../interfaces/components_ClusterNodeContainer._internal_.IMaskTarget.md) | - |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:3218

___

### pushSpriteMask

▸ **pushSpriteMask**(`maskData`): `void`

Applies the Mask and adds it to the current filter stack.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maskData` | [`MaskData`](components_ClusterNodeContainer._internal_.MaskData.md) | Sprite to be used as the mask. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:3234

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

node_modules/@pixi/core/index.d.ts:3209