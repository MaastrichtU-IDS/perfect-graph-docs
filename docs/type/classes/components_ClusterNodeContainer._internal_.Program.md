[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Program

# Class: Program

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Program

Helper class to create a shader program.

**`memberof`** PIXI

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Program.md#constructor)

### Properties

- [attributeData](components_ClusterNodeContainer._internal_.Program.md#attributedata)
- [fragmentSrc](components_ClusterNodeContainer._internal_.Program.md#fragmentsrc)
- [glPrograms](components_ClusterNodeContainer._internal_.Program.md#glprograms)
- [id](components_ClusterNodeContainer._internal_.Program.md#id)
- [nameCache](components_ClusterNodeContainer._internal_.Program.md#namecache)
- [syncUniforms](components_ClusterNodeContainer._internal_.Program.md#syncuniforms)
- [uniformData](components_ClusterNodeContainer._internal_.Program.md#uniformdata)
- [vertexSrc](components_ClusterNodeContainer._internal_.Program.md#vertexsrc)

### Accessors

- [defaultFragmentSrc](components_ClusterNodeContainer._internal_.Program.md#defaultfragmentsrc)
- [defaultVertexSrc](components_ClusterNodeContainer._internal_.Program.md#defaultvertexsrc)

### Methods

- [from](components_ClusterNodeContainer._internal_.Program.md#from)

## Constructors

### constructor

• **new Program**(`vertexSrc?`, `fragmentSrc?`, `name?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vertexSrc?` | `string` | The source of the vertex shader. |
| `fragmentSrc?` | `string` | The source of the fragment shader. |
| `name?` | `string` | Name for shader |

#### Defined in

node_modules/@pixi/core/index.d.ts:3317

## Properties

### attributeData

• **attributeData**: `Object`

Assigned when a program is first bound to the shader system.

#### Index signature

▪ [key: `string`]: [`IAttributeData`](../interfaces/components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IAttributeData.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:3305

___

### fragmentSrc

• **fragmentSrc**: `string`

Source code for the fragment shader.

#### Defined in

node_modules/@pixi/core/index.d.ts:3298

___

### glPrograms

• **glPrograms**: `Object`

#### Index signature

▪ [key: `number`]: [`GLProgram`](components_ClusterNodeContainer._internal_.GLProgram.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:3300

___

### id

• **id**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:3294

___

### nameCache

• **nameCache**: `any`

#### Defined in

node_modules/@pixi/core/index.d.ts:3299

___

### syncUniforms

• **syncUniforms**: `any`

#### Defined in

node_modules/@pixi/core/index.d.ts:3303

___

### uniformData

• **uniformData**: `Object`

Assigned when a program is first bound to the shader system.

#### Index signature

▪ [key: `string`]: [`IUniformData`](../interfaces/components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.IUniformData.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:3309

___

### vertexSrc

• **vertexSrc**: `string`

Source code for the vertex shader.

#### Defined in

node_modules/@pixi/core/index.d.ts:3296

## Accessors

### defaultFragmentSrc

• `Static` `get` **defaultFragmentSrc**(): `string`

The default fragment shader source.

**`constant`**

#### Returns

`string`

#### Defined in

node_modules/@pixi/core/index.d.ts:3329

___

### defaultVertexSrc

• `Static` `get` **defaultVertexSrc**(): `string`

The default vertex shader source.

**`constant`**

#### Returns

`string`

#### Defined in

node_modules/@pixi/core/index.d.ts:3323

## Methods

### from

▸ `Static` **from**(`vertexSrc?`, `fragmentSrc?`, `name?`): [`Program`](components_ClusterNodeContainer._internal_.Program.md)

A short hand function to create a program based of a vertex and fragment shader.

This method will also check to see if there is a cached program.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vertexSrc?` | `string` | The source of the vertex shader. |
| `fragmentSrc?` | `string` | The source of the fragment shader. |
| `name?` | `string` | Name for shader |

#### Returns

[`Program`](components_ClusterNodeContainer._internal_.Program.md)

A shiny new PixiJS shader program!

#### Defined in

node_modules/@pixi/core/index.d.ts:3340