[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / MIPMAP\_MODES

# Enumeration: MIPMAP\_MODES

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).MIPMAP_MODES

Mipmap filtering modes that are supported by pixi.

The {@link PIXI.settings.MIPMAP_TEXTURES} affects default texture filtering.
Mipmaps are generated for a baseTexture if its `mipmap` field is `ON`,
or its `POW2` and texture dimensions are powers of 2.
Due to platform restriction, `ON` option will work like `POW2` for webgl-1.

This property only affects WebGL.

**`name`** MIPMAP_MODES

**`memberof`** PIXI

**`static`**

**`property`** {number} OFF - No mipmaps

**`property`** {number} POW2 - Generate mipmaps if texture dimensions are pow2

**`property`** {number} ON - Always generate mipmaps

**`property`** {number} ON_MANUAL - Use mipmaps, but do not auto-generate them; this is used with a resource
  that supports buffering each level-of-detail.

## Table of contents

### Enumeration members

- [OFF](components_ClusterNodeContainer._internal_.MIPMAP_MODES.md#off)
- [ON](components_ClusterNodeContainer._internal_.MIPMAP_MODES.md#on)
- [ON\_MANUAL](components_ClusterNodeContainer._internal_.MIPMAP_MODES.md#on_manual)
- [POW2](components_ClusterNodeContainer._internal_.MIPMAP_MODES.md#pow2)

## Enumeration members

### OFF

• **OFF** = `0`

#### Defined in

node_modules/@pixi/constants/index.d.ts:314

___

### ON

• **ON** = `2`

#### Defined in

node_modules/@pixi/constants/index.d.ts:316

___

### ON\_MANUAL

• **ON\_MANUAL** = `3`

#### Defined in

node_modules/@pixi/constants/index.d.ts:317

___

### POW2

• **POW2** = `1`

#### Defined in

node_modules/@pixi/constants/index.d.ts:315
