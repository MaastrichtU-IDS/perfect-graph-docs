[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / ALPHA\_MODES

# Enumeration: ALPHA\_MODES

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).ALPHA_MODES

How to treat textures with premultiplied alpha

**`name`** ALPHA_MODES

**`memberof`** PIXI

**`static`**

**`property`** {number} NO_PREMULTIPLIED_ALPHA - Source is not premultiplied, leave it like that.
 Option for compressed and data textures that are created from typed arrays.

**`property`** {number} PREMULTIPLY_ON_UPLOAD - Source is not premultiplied, premultiply on upload.
 Default option, used for all loaded images.

**`property`** {number} PREMULTIPLIED_ALPHA - Source is already premultiplied
 Example: spine atlases with `_pma` suffix.

**`property`** {number} NPM - Alias for NO_PREMULTIPLIED_ALPHA.

**`property`** {number} UNPACK - Default option, alias for PREMULTIPLY_ON_UPLOAD.

**`property`** {number} PMA - Alias for PREMULTIPLIED_ALPHA.

## Table of contents

### Enumeration members

- [NO\_PREMULTIPLIED\_ALPHA](components_ClusterNodeContainer._internal_.ALPHA_MODES.md#no_premultiplied_alpha)
- [NPM](components_ClusterNodeContainer._internal_.ALPHA_MODES.md#npm)
- [PMA](components_ClusterNodeContainer._internal_.ALPHA_MODES.md#pma)
- [PREMULTIPLIED\_ALPHA](components_ClusterNodeContainer._internal_.ALPHA_MODES.md#premultiplied_alpha)
- [PREMULTIPLY\_ALPHA](components_ClusterNodeContainer._internal_.ALPHA_MODES.md#premultiply_alpha)
- [PREMULTIPLY\_ON\_UPLOAD](components_ClusterNodeContainer._internal_.ALPHA_MODES.md#premultiply_on_upload)
- [UNPACK](components_ClusterNodeContainer._internal_.ALPHA_MODES.md#unpack)

## Enumeration members

### NO\_PREMULTIPLIED\_ALPHA

• **NO\_PREMULTIPLIED\_ALPHA** = `0`

#### Defined in

node_modules/@pixi/constants/index.d.ts:23

___

### NPM

• **NPM** = `0`

#### Defined in

node_modules/@pixi/constants/index.d.ts:20

___

### PMA

• **PMA** = `2`

#### Defined in

node_modules/@pixi/constants/index.d.ts:22

___

### PREMULTIPLIED\_ALPHA

• **PREMULTIPLIED\_ALPHA** = `2`

#### Defined in

node_modules/@pixi/constants/index.d.ts:26

___

### PREMULTIPLY\_ALPHA

• **PREMULTIPLY\_ALPHA** = `2`

#### Defined in

node_modules/@pixi/constants/index.d.ts:25

___

### PREMULTIPLY\_ON\_UPLOAD

• **PREMULTIPLY\_ON\_UPLOAD** = `1`

#### Defined in

node_modules/@pixi/constants/index.d.ts:24

___

### UNPACK

• **UNPACK** = `1`

#### Defined in

node_modules/@pixi/constants/index.d.ts:21
