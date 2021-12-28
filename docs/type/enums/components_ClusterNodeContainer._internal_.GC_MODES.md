[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / GC\_MODES

# Enumeration: GC\_MODES

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).GC_MODES

The gc modes that are supported by pixi.

The {@link PIXI.settings.GC_MODE} Garbage Collection mode for PixiJS textures is AUTO
If set to GC_MODE, the renderer will occasionally check textures usage. If they are not
used for a specified period of time they will be removed from the GPU. They will of course
be uploaded again when they are required. This is a silent behind the scenes process that
should ensure that the GPU does not  get filled up.

Handy for mobile devices!
This property only affects WebGL.

**`name`** GC_MODES

**`static`**

**`memberof`** PIXI

**`property`** {number} AUTO - Garbage collection will happen periodically automatically

**`property`** {number} MANUAL - Garbage collection will need to be called manually

## Table of contents

### Enumeration members

- [AUTO](components_ClusterNodeContainer._internal_.GC_MODES.md#auto)
- [MANUAL](components_ClusterNodeContainer._internal_.GC_MODES.md#manual)

## Enumeration members

### AUTO

• **AUTO** = `0`

#### Defined in

node_modules/@pixi/constants/index.d.ts:269

___

### MANUAL

• **MANUAL** = `1`

#### Defined in

node_modules/@pixi/constants/index.d.ts:270
