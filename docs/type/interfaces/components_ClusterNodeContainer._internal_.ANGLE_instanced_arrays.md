[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / ANGLE\_instanced\_arrays

# Interface: ANGLE\_instanced\_arrays

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).ANGLE_instanced_arrays

The ANGLE_instanced_arrays extension is part of the WebGL API and allows to draw the same object, or groups of similar objects multiple times, if they share the same vertex data, primitive count and type.

## Table of contents

### Properties

- [VERTEX\_ATTRIB\_ARRAY\_DIVISOR\_ANGLE](components_ClusterNodeContainer._internal_.ANGLE_instanced_arrays.md#vertex_attrib_array_divisor_angle)

### Methods

- [drawArraysInstancedANGLE](components_ClusterNodeContainer._internal_.ANGLE_instanced_arrays.md#drawarraysinstancedangle)
- [drawElementsInstancedANGLE](components_ClusterNodeContainer._internal_.ANGLE_instanced_arrays.md#drawelementsinstancedangle)
- [vertexAttribDivisorANGLE](components_ClusterNodeContainer._internal_.ANGLE_instanced_arrays.md#vertexattribdivisorangle)

## Properties

### VERTEX\_ATTRIB\_ARRAY\_DIVISOR\_ANGLE

• `Readonly` **VERTEX\_ATTRIB\_ARRAY\_DIVISOR\_ANGLE**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1823

## Methods

### drawArraysInstancedANGLE

▸ **drawArraysInstancedANGLE**(`mode`, `first`, `count`, `primcount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `first` | `number` |
| `count` | `number` |
| `primcount` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1820

___

### drawElementsInstancedANGLE

▸ **drawElementsInstancedANGLE**(`mode`, `count`, `type`, `offset`, `primcount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `count` | `number` |
| `type` | `number` |
| `offset` | `number` |
| `primcount` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1821

___

### vertexAttribDivisorANGLE

▸ **vertexAttribDivisorANGLE**(`index`, `divisor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `divisor` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1822
