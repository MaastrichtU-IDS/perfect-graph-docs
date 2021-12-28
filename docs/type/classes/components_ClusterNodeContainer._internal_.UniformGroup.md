[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / UniformGroup

# Class: UniformGroup<LAYOUT\>

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).UniformGroup

Uniform group holds uniform map and some ID's for work

`UniformGroup` has two modes:

1: Normal mode
Normal mode will upload the uniforms with individual function calls as required

2: Uniform buffer mode
This mode will treat the uniforms as a uniform buffer. You can pass in either a buffer that you manually handle, or
or a generic object that PixiJS will automatically map to a buffer for you.
For maximum benefits, make Ubo UniformGroups static, and only update them each frame.

Rules of UBOs:
- UBOs only work with WebGL2, so make sure you have a fallback!
- Only floats are supported (including vec[2,3,4], mat[2,3,4])
- Samplers cannot be used in ubo's (a GPU limitation)
- You must ensure that the object you pass in exactly matches in the shader ubo structure.
Otherwise, weirdness will ensue!
- The name of the ubo object added to the group must match exactly the name of the ubo in the shader.

```
// ubo in shader:
uniform myCoolData { // declaring a ubo..
mat4 uCoolMatrix;
float uFloatyMcFloatFace

// a new uniform buffer object..
const myCoolData = new UniformBufferGroup({
  uCoolMatrix: new Matrix(),
  uFloatyMcFloatFace: 23,
}}

// build a shader...
const shader = Shader.from(srcVert, srcFrag, {
  myCoolData // name matches the ubo name in the shader. will be processed accordingly.
})

 ```

**`memberof`** PIXI

## Type parameters

| Name | Type |
| :------ | :------ |
| `LAYOUT` | [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\> |

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.UniformGroup.md#constructor)

### Properties

- [autoManage](components_ClusterNodeContainer._internal_.UniformGroup.md#automanage)
- [buffer](components_ClusterNodeContainer._internal_.UniformGroup.md#buffer)
- [dirtyId](components_ClusterNodeContainer._internal_.UniformGroup.md#dirtyid)
- [group](components_ClusterNodeContainer._internal_.UniformGroup.md#group)
- [id](components_ClusterNodeContainer._internal_.UniformGroup.md#id)
- [static](components_ClusterNodeContainer._internal_.UniformGroup.md#static)
- [syncUniforms](components_ClusterNodeContainer._internal_.UniformGroup.md#syncuniforms)
- [ubo](components_ClusterNodeContainer._internal_.UniformGroup.md#ubo)
- [uniforms](components_ClusterNodeContainer._internal_.UniformGroup.md#uniforms)

### Methods

- [add](components_ClusterNodeContainer._internal_.UniformGroup.md#add)
- [update](components_ClusterNodeContainer._internal_.UniformGroup.md#update)
- [from](components_ClusterNodeContainer._internal_.UniformGroup.md#from)
- [uboFrom](components_ClusterNodeContainer._internal_.UniformGroup.md#ubofrom)

## Constructors

### constructor

• **new UniformGroup**<`LAYOUT`\>(`uniforms`, `isStatic?`, `isUbo?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `LAYOUT` | [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `uniforms` | `LAYOUT` \| [`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md) |
| `isStatic?` | `boolean` |
| `isUbo?` | `boolean` |

#### Defined in

node_modules/@pixi/core/index.d.ts:5234

## Properties

### autoManage

• **autoManage**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:5228

___

### buffer

• `Optional` **buffer**: [`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:5227

___

### dirtyId

• **dirtyId**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:5224

___

### group

• `Readonly` **group**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:5221

___

### id

• **id**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:5222

___

### static

• **static**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:5225

___

### syncUniforms

• **syncUniforms**: [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<[`UniformsSyncCallback_2`](../modules/components_ClusterNodeContainer._internal_.md#uniformssynccallback_2)\>

#### Defined in

node_modules/@pixi/core/index.d.ts:5223

___

### ubo

• **ubo**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:5226

___

### uniforms

• `Readonly` **uniforms**: `LAYOUT`

#### Defined in

node_modules/@pixi/core/index.d.ts:5220

## Methods

### add

▸ **add**(`name`, `uniforms`, `_static?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `uniforms` | [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\> |
| `_static?` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:5236

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:5235

___

### from

▸ `Static` **from**(`uniforms`, `_static?`, `_ubo?`): [`UniformGroup`](components_ClusterNodeContainer._internal_.UniformGroup.md)<[`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uniforms` | [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\> \| [`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md) |
| `_static?` | `boolean` |
| `_ubo?` | `boolean` |

#### Returns

[`UniformGroup`](components_ClusterNodeContainer._internal_.UniformGroup.md)<[`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\>\>

#### Defined in

node_modules/@pixi/core/index.d.ts:5237

___

### uboFrom

▸ `Static` **uboFrom**(`uniforms`, `_static?`): [`UniformGroup`](components_ClusterNodeContainer._internal_.UniformGroup.md)<[`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\>\>

A short hand function for creating a static UBO UniformGroup.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uniforms` | [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\> \| [`Buffer_2`](components_ClusterNodeContainer._internal_.Buffer_2.md) | the ubo item |
| `_static?` | `boolean` | should this be updated each time it is used? defaults to true here! |

#### Returns

[`UniformGroup`](components_ClusterNodeContainer._internal_.UniformGroup.md)<[`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\>\>

#### Defined in

node_modules/@pixi/core/index.d.ts:5244