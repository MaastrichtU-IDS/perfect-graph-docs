[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / BatchTextureArray

# Class: BatchTextureArray

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).BatchTextureArray

Used by the batcher to build texture batches.
Holds list of textures and their respective locations.

**`memberof`** PIXI

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.BatchTextureArray.md#constructor)

### Properties

- [count](components_ClusterNodeContainer._internal_.BatchTextureArray.md#count)
- [elements](components_ClusterNodeContainer._internal_.BatchTextureArray.md#elements)
- [ids](components_ClusterNodeContainer._internal_.BatchTextureArray.md#ids)

### Methods

- [clear](components_ClusterNodeContainer._internal_.BatchTextureArray.md#clear)

## Constructors

### constructor

• **new BatchTextureArray**()

#### Defined in

node_modules/@pixi/core/index.d.ts:1316

## Properties

### count

• **count**: `number`

Number of filled elements.

#### Defined in

node_modules/@pixi/core/index.d.ts:1315

___

### elements

• **elements**: [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\>[]

Inside textures array.

#### Defined in

node_modules/@pixi/core/index.d.ts:1311

___

### ids

• **ids**: `number`[]

Respective locations for textures.

#### Defined in

node_modules/@pixi/core/index.d.ts:1313

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:1317
