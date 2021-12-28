[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Shader

# Class: Shader

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Shader

A helper class for shaders.

**`memberof`** PIXI

## Hierarchy

- **`Shader`**

  ↳ [`Filter`](components_ClusterNodeContainer._internal_.Filter.md)

  ↳ [`Filter`](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.Filter.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Shader.md#constructor)

### Properties

- [program](components_ClusterNodeContainer._internal_.Shader.md#program)
- [uniformGroup](components_ClusterNodeContainer._internal_.Shader.md#uniformgroup)

### Accessors

- [uniforms](components_ClusterNodeContainer._internal_.Shader.md#uniforms)

### Methods

- [checkUniformExists](components_ClusterNodeContainer._internal_.Shader.md#checkuniformexists)
- [destroy](components_ClusterNodeContainer._internal_.Shader.md#destroy)
- [from](components_ClusterNodeContainer._internal_.Shader.md#from)

## Constructors

### constructor

• **new Shader**(`program`, `uniforms?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `program` | [`Program`](components_ClusterNodeContainer._internal_.Program.md) | The program the shader will use. |
| `uniforms?` | [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\> | Custom uniforms to use to augment the built-in ones. |

#### Defined in

node_modules/@pixi/core/index.d.ts:4234

## Properties

### program

• **program**: [`Program`](components_ClusterNodeContainer._internal_.Program.md)

Program that the shader uses.

#### Defined in

node_modules/@pixi/core/index.d.ts:4223

___

### uniformGroup

• **uniformGroup**: [`UniformGroup`](components_ClusterNodeContainer._internal_.UniformGroup.md)<[`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\>\>

#### Defined in

node_modules/@pixi/core/index.d.ts:4224

## Accessors

### uniforms

• `get` **uniforms**(): [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\>

Shader uniform values, shortcut for `uniformGroup.uniforms`.

**`readonly`**

#### Returns

[`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\>

#### Defined in

node_modules/@pixi/core/index.d.ts:4242

## Methods

### checkUniformExists

▸ **checkUniformExists**(`name`, `group`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `group` | [`UniformGroup`](components_ClusterNodeContainer._internal_.UniformGroup.md)<[`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\>\> |

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:4235

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4236

___

### from

▸ `Static` **from**(`vertexSrc?`, `fragmentSrc?`, `uniforms?`): [`Shader`](components_ClusterNodeContainer._internal_.Shader.md)

A short hand function to create a shader based of a vertex and fragment shader.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vertexSrc?` | `string` | The source of the vertex shader. |
| `fragmentSrc?` | `string` | The source of the fragment shader. |
| `uniforms?` | [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\> | Custom uniforms to use to augment the built-in ones. |

#### Returns

[`Shader`](components_ClusterNodeContainer._internal_.Shader.md)

A shiny new PixiJS shader!

#### Defined in

node_modules/@pixi/core/index.d.ts:4251
