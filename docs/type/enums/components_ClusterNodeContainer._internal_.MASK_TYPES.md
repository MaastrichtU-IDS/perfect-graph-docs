[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / MASK\_TYPES

# Enumeration: MASK\_TYPES

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).MASK_TYPES

Constants for mask implementations.
We use `type` suffix because it leads to very different behaviours

**`name`** MASK_TYPES

**`memberof`** PIXI

**`static`**

**`property`** {number} NONE - Mask is ignored

**`property`** {number} SCISSOR - Scissor mask, rectangle on screen, cheap

**`property`** {number} STENCIL - Stencil mask, 1-bit, medium, works only if renderer supports stencil

**`property`** {number} SPRITE - Mask that uses SpriteMaskFilter, uses temporary RenderTexture

## Table of contents

### Enumeration members

- [NONE](components_ClusterNodeContainer._internal_.MASK_TYPES.md#none)
- [SCISSOR](components_ClusterNodeContainer._internal_.MASK_TYPES.md#scissor)
- [SPRITE](components_ClusterNodeContainer._internal_.MASK_TYPES.md#sprite)
- [STENCIL](components_ClusterNodeContainer._internal_.MASK_TYPES.md#stencil)

## Enumeration members

### NONE

• **NONE** = `0`

#### Defined in

node_modules/@pixi/constants/index.d.ts:287

___

### SCISSOR

• **SCISSOR** = `1`

#### Defined in

node_modules/@pixi/constants/index.d.ts:288

___

### SPRITE

• **SPRITE** = `3`

#### Defined in

node_modules/@pixi/constants/index.d.ts:290

___

### STENCIL

• **STENCIL** = `2`

#### Defined in

node_modules/@pixi/constants/index.d.ts:289
