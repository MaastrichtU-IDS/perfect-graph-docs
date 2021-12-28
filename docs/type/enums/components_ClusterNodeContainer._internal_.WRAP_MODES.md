[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / WRAP\_MODES

# Enumeration: WRAP\_MODES

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).WRAP_MODES

The wrap modes that are supported by pixi.

The {@link PIXI.settings.WRAP_MODE} wrap mode affects the default wrapping mode of future operations.
It can be re-assigned to either CLAMP or REPEAT, depending upon suitability.
If the texture is non power of two then clamp will be used regardless as WebGL can
only use REPEAT if the texture is po2.

This property only affects WebGL.

**`name`** WRAP_MODES

**`memberof`** PIXI

**`static`**

**`property`** {number} CLAMP - The textures uvs are clamped

**`property`** {number} REPEAT - The texture uvs tile and repeat

**`property`** {number} MIRRORED_REPEAT - The texture uvs tile and repeat with mirroring

## Table of contents

### Enumeration members

- [CLAMP](components_ClusterNodeContainer._internal_.WRAP_MODES.md#clamp)
- [MIRRORED\_REPEAT](components_ClusterNodeContainer._internal_.WRAP_MODES.md#mirrored_repeat)
- [REPEAT](components_ClusterNodeContainer._internal_.WRAP_MODES.md#repeat)

## Enumeration members

### CLAMP

• **CLAMP** = `33071`

#### Defined in

node_modules/@pixi/constants/index.d.ts:503

___

### MIRRORED\_REPEAT

• **MIRRORED\_REPEAT** = `33648`

#### Defined in

node_modules/@pixi/constants/index.d.ts:505

___

### REPEAT

• **REPEAT** = `10497`

#### Defined in

node_modules/@pixi/constants/index.d.ts:504
