[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / UPDATE\_PRIORITY

# Enumeration: UPDATE\_PRIORITY

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).UPDATE_PRIORITY

Represents the update priorities used by internal PIXI classes when registered with
the {@link PIXI.Ticker} object. Higher priority items are updated first and lower
priority items, such as render, should go later.

**`static`**

**`constant`**

**`name`** UPDATE_PRIORITY

**`memberof`** PIXI

**`property`** {number} INTERACTION=50 Highest priority, used for {@link PIXI.InteractionManager}

**`property`** {number} HIGH=25 High priority updating, {@link PIXI.VideoBaseTexture} and {@link PIXI.AnimatedSprite}

**`property`** {number} NORMAL=0 Default priority for ticker events, see {@link PIXI.Ticker#add}.

**`property`** {number} LOW=-25 Low priority used for {@link PIXI.Application} rendering.

**`property`** {number} UTILITY=-50 Lowest priority used for {@link PIXI.BasePrepare} utility.

## Table of contents

### Enumeration members

- [HIGH](components_ClusterNodeContainer._internal_.UPDATE_PRIORITY.md#high)
- [INTERACTION](components_ClusterNodeContainer._internal_.UPDATE_PRIORITY.md#interaction)
- [LOW](components_ClusterNodeContainer._internal_.UPDATE_PRIORITY.md#low)
- [NORMAL](components_ClusterNodeContainer._internal_.UPDATE_PRIORITY.md#normal)
- [UTILITY](components_ClusterNodeContainer._internal_.UPDATE_PRIORITY.md#utility)

## Enumeration members

### HIGH

• **HIGH** = `25`

#### Defined in

node_modules/@pixi/ticker/index.d.ts:354

___

### INTERACTION

• **INTERACTION** = `50`

#### Defined in

node_modules/@pixi/ticker/index.d.ts:353

___

### LOW

• **LOW** = `-25`

#### Defined in

node_modules/@pixi/ticker/index.d.ts:356

___

### NORMAL

• **NORMAL** = `0`

#### Defined in

node_modules/@pixi/ticker/index.d.ts:355

___

### UTILITY

• **UTILITY** = `-50`

#### Defined in

node_modules/@pixi/ticker/index.d.ts:357
