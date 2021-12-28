[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / CLEAR\_MODES

# Enumeration: CLEAR\_MODES

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).CLEAR_MODES

Configure whether filter textures are cleared after binding.

Filter textures need not be cleared if the filter does not use pixel blending. [CLEAR_MODES.BLIT](components_ClusterNodeContainer._internal_.CLEAR_MODES.md#blit) will detect
this and skip clearing as an optimization.

**`name`** CLEAR_MODES

**`memberof`** PIXI

**`static`**

**`property`** {number} BLEND - Do not clear the filter texture. The filter's output will blend on top of the output texture.

**`property`** {number} CLEAR - Always clear the filter texture.

**`property`** {number} BLIT - Clear only if [FilterSystem.forceClear](../classes/components_ClusterNodeContainer._internal_.FilterSystem.md#forceclear) is set or if the filter uses pixel blending.

**`property`** {number} NO - Alias for BLEND, same as `false` in earlier versions

**`property`** {number} YES - Alias for CLEAR, same as `true` in earlier versions

**`property`** {number} AUTO - Alias for BLIT

## Table of contents

### Enumeration members

- [AUTO](components_ClusterNodeContainer._internal_.CLEAR_MODES.md#auto)
- [BLEND](components_ClusterNodeContainer._internal_.CLEAR_MODES.md#blend)
- [BLIT](components_ClusterNodeContainer._internal_.CLEAR_MODES.md#blit)
- [CLEAR](components_ClusterNodeContainer._internal_.CLEAR_MODES.md#clear)
- [NO](components_ClusterNodeContainer._internal_.CLEAR_MODES.md#no)
- [YES](components_ClusterNodeContainer._internal_.CLEAR_MODES.md#yes)

## Enumeration members

### AUTO

• **AUTO** = `2`

#### Defined in

node_modules/@pixi/constants/index.d.ts:162

___

### BLEND

• **BLEND** = `0`

#### Defined in

node_modules/@pixi/constants/index.d.ts:163

___

### BLIT

• **BLIT** = `2`

#### Defined in

node_modules/@pixi/constants/index.d.ts:165

___

### CLEAR

• **CLEAR** = `1`

#### Defined in

node_modules/@pixi/constants/index.d.ts:164

___

### NO

• **NO** = `0`

#### Defined in

node_modules/@pixi/constants/index.d.ts:160

___

### YES

• **YES** = `1`

#### Defined in

node_modules/@pixi/constants/index.d.ts:161
