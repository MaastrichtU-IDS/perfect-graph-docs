[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / GLProgram

# Class: GLProgram

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).GLProgram

Helper class to create a WebGL Program

**`memberof`** PIXI

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.GLProgram.md#constructor)

### Properties

- [program](components_ClusterNodeContainer._internal_.GLProgram.md#program)
- [uniformBufferBindings](components_ClusterNodeContainer._internal_.GLProgram.md#uniformbufferbindings)
- [uniformData](components_ClusterNodeContainer._internal_.GLProgram.md#uniformdata)
- [uniformDirtyGroups](components_ClusterNodeContainer._internal_.GLProgram.md#uniformdirtygroups)
- [uniformGroups](components_ClusterNodeContainer._internal_.GLProgram.md#uniformgroups)
- [uniformSync](components_ClusterNodeContainer._internal_.GLProgram.md#uniformsync)

### Methods

- [destroy](components_ClusterNodeContainer._internal_.GLProgram.md#destroy)

## Constructors

### constructor

• **new GLProgram**(`program`, `uniformData`)

Makes a new Pixi program

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram) | webgl program |
| `uniformData` | `Object` | uniforms |

#### Defined in

node_modules/@pixi/core/index.d.ts:2646

## Properties

### program

• **program**: [`WebGLProgram`](../modules/components_ClusterNodeContainer._internal_.md#webglprogram)

#### Defined in

node_modules/@pixi/core/index.d.ts:2623

___

### uniformBufferBindings

• **uniformBufferBindings**: [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\>

A hash that stores where UBOs are bound to on the program.

#### Defined in

node_modules/@pixi/core/index.d.ts:2629

___

### uniformData

• **uniformData**: [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\>

#### Defined in

node_modules/@pixi/core/index.d.ts:2624

___

### uniformDirtyGroups

• **uniformDirtyGroups**: [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\>

a place where dirty ticks are stored for groups
If a tick here does not match with the Higher level Programs tick, it means
we should re upload the data.

#### Defined in

node_modules/@pixi/core/index.d.ts:2639

___

### uniformGroups

• **uniformGroups**: [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\>

#### Defined in

node_modules/@pixi/core/index.d.ts:2625

___

### uniformSync

• **uniformSync**: [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\>

A hash for lazily-generated uniform uploading functions.

#### Defined in

node_modules/@pixi/core/index.d.ts:2633

## Methods

### destroy

▸ **destroy**(): `void`

Destroys this program

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:2652
