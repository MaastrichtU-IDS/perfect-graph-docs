[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / BatchSystem

# Class: BatchSystem

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).BatchSystem

System plugin to the renderer to manage batching.

**`memberof`** PIXI

## Implements

- [`ISystem`](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.BatchSystem.md#constructor)

### Properties

- [currentRenderer](components_ClusterNodeContainer._internal_.BatchSystem.md#currentrenderer)
- [emptyRenderer](components_ClusterNodeContainer._internal_.BatchSystem.md#emptyrenderer)
- [renderer](components_ClusterNodeContainer._internal_.BatchSystem.md#renderer)

### Methods

- [boundArray](components_ClusterNodeContainer._internal_.BatchSystem.md#boundarray)
- [copyBoundTextures](components_ClusterNodeContainer._internal_.BatchSystem.md#copyboundtextures)
- [flush](components_ClusterNodeContainer._internal_.BatchSystem.md#flush)
- [reset](components_ClusterNodeContainer._internal_.BatchSystem.md#reset)
- [setObjectRenderer](components_ClusterNodeContainer._internal_.BatchSystem.md#setobjectrenderer)

## Constructors

### constructor

• **new BatchSystem**(`renderer`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) | The renderer this System works for. |

#### Defined in

node_modules/@pixi/core/index.d.ts:1262

## Properties

### currentRenderer

• **currentRenderer**: [`ObjectRenderer`](components_ClusterNodeContainer._internal_.ObjectRenderer.md)

The currently active ObjectRenderer.

#### Defined in

node_modules/@pixi/core/index.d.ts:1257

___

### emptyRenderer

• `Readonly` **emptyRenderer**: [`ObjectRenderer`](components_ClusterNodeContainer._internal_.ObjectRenderer.md)

An empty renderer.

#### Defined in

node_modules/@pixi/core/index.d.ts:1255

___

### renderer

• `Private` **renderer**: `any`

#### Defined in

node_modules/@pixi/core/index.d.ts:1258

## Methods

### boundArray

▸ **boundArray**(`texArray`, `boundTextures`, `batchId`, `maxTextures`): `void`

Assigns batch locations to textures in array based on boundTextures state.
All textures in texArray should have `_batchEnabled = _batchId`,
and their count should be less than `maxTextures`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `texArray` | [`BatchTextureArray`](components_ClusterNodeContainer._internal_.BatchTextureArray.md) | textures to bound |
| `boundTextures` | [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\>[] | current state of bound textures |
| `batchId` | `number` | marker for _batchEnabled param of textures in texArray |
| `maxTextures` | `number` | number of texture locations to manipulate |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1296

___

### copyBoundTextures

▸ **copyBoundTextures**(`arr`, `maxTextures`): `void`

Handy function for batch renderers: copies bound textures in first maxTextures locations to array
sets actual _batchLocation for them

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\>[] | arr copy destination |
| `maxTextures` | `number` | number of copied elements |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1285

___

### flush

▸ **flush**(): `void`

This should be called if you wish to do some custom rendering
It will basically render anything that may be batched up such as sprites

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1273

___

### reset

▸ **reset**(): `void`

Reset the system to an empty renderer

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1277

___

### setObjectRenderer

▸ **setObjectRenderer**(`objectRenderer`): `void`

Changes the current renderer to the one given in parameter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objectRenderer` | [`ObjectRenderer`](components_ClusterNodeContainer._internal_.ObjectRenderer.md) | The object renderer to use. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1268
