[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / TextureGCSystem

# Class: TextureGCSystem

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).TextureGCSystem

System plugin to the renderer to manage texture garbage collection on the GPU,
ensuring that it does not get clogged up with textures that are no longer being used.

**`memberof`** PIXI

## Implements

- [`ISystem`](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.TextureGCSystem.md#constructor)

### Properties

- [checkCount](components_ClusterNodeContainer._internal_.TextureGCSystem.md#checkcount)
- [checkCountMax](components_ClusterNodeContainer._internal_.TextureGCSystem.md#checkcountmax)
- [count](components_ClusterNodeContainer._internal_.TextureGCSystem.md#count)
- [maxIdle](components_ClusterNodeContainer._internal_.TextureGCSystem.md#maxidle)
- [mode](components_ClusterNodeContainer._internal_.TextureGCSystem.md#mode)
- [renderer](components_ClusterNodeContainer._internal_.TextureGCSystem.md#renderer)

### Methods

- [postrender](components_ClusterNodeContainer._internal_.TextureGCSystem.md#postrender)
- [run](components_ClusterNodeContainer._internal_.TextureGCSystem.md#run)
- [unload](components_ClusterNodeContainer._internal_.TextureGCSystem.md#unload)

## Constructors

### constructor

• **new TextureGCSystem**(`renderer`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) | The renderer this System works for. |

#### Defined in

node_modules/@pixi/core/index.d.ts:4943

## Properties

### checkCount

• **checkCount**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:4935

___

### checkCountMax

• **checkCountMax**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:4937

___

### count

• **count**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:4934

___

### maxIdle

• **maxIdle**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:4936

___

### mode

• **mode**: [`GC_MODES`](../enums/components_ClusterNodeContainer._internal_.GC_MODES.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:4938

___

### renderer

• `Private` **renderer**: `any`

#### Defined in

node_modules/@pixi/core/index.d.ts:4939

## Methods

### postrender

▸ `Protected` **postrender**(): `void`

Checks to see when the last time a texture was used
if the texture has not been used for a specified amount of time it will be removed from the GPU

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4948

___

### run

▸ **run**(): `void`

Checks to see when the last time a texture was used
if the texture has not been used for a specified amount of time it will be removed from the GPU

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4953

___

### unload

▸ **unload**(`displayObject`): `void`

Removes all the textures within the specified displayObject and its children from the GPU

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `displayObject` | [`IUnloadableTexture`](../interfaces/components_ClusterNodeContainer._internal_.IUnloadableTexture.md) | the displayObject to remove the textures from. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4959