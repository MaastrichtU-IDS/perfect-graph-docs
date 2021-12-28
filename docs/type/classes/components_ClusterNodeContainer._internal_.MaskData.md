[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / MaskData

# Class: MaskData

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).MaskData

Component for masked elements.

Holds mask mode and temporary data about current mask.

**`memberof`** PIXI

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.MaskData.md#constructor)

### Properties

- [\_filters](components_ClusterNodeContainer._internal_.MaskData.md#_filters)
- [\_scissorCounter](components_ClusterNodeContainer._internal_.MaskData.md#_scissorcounter)
- [\_scissorRect](components_ClusterNodeContainer._internal_.MaskData.md#_scissorrect)
- [\_scissorRectLocal](components_ClusterNodeContainer._internal_.MaskData.md#_scissorrectlocal)
- [\_stencilCounter](components_ClusterNodeContainer._internal_.MaskData.md#_stencilcounter)
- [\_target](components_ClusterNodeContainer._internal_.MaskData.md#_target)
- [autoDetect](components_ClusterNodeContainer._internal_.MaskData.md#autodetect)
- [enabled](components_ClusterNodeContainer._internal_.MaskData.md#enabled)
- [isMaskData](components_ClusterNodeContainer._internal_.MaskData.md#ismaskdata)
- [maskObject](components_ClusterNodeContainer._internal_.MaskData.md#maskobject)
- [multisample](components_ClusterNodeContainer._internal_.MaskData.md#multisample)
- [pooled](components_ClusterNodeContainer._internal_.MaskData.md#pooled)
- [resolution](components_ClusterNodeContainer._internal_.MaskData.md#resolution)
- [type](components_ClusterNodeContainer._internal_.MaskData.md#type)

### Accessors

- [filter](components_ClusterNodeContainer._internal_.MaskData.md#filter)

### Methods

- [copyCountersOrReset](components_ClusterNodeContainer._internal_.MaskData.md#copycountersorreset)
- [reset](components_ClusterNodeContainer._internal_.MaskData.md#reset)

## Constructors

### constructor

• **new MaskData**(`maskObject?`)

Create MaskData

#### Parameters

| Name | Type |
| :------ | :------ |
| `maskObject?` | [`IMaskTarget`](../interfaces/components_ClusterNodeContainer._internal_.IMaskTarget.md) |

#### Defined in

node_modules/@pixi/core/index.d.ts:3143

## Properties

### \_filters

• `Private` **\_filters**: [`ISpriteMaskFilter`](../interfaces/components_ClusterNodeContainer._internal_.ISpriteMaskFilter.md)[]

The sprite mask filter wrapped in an array.

#### Defined in

node_modules/@pixi/core/index.d.ts:3111

___

### \_scissorCounter

• `Private` **\_scissorCounter**: `number`

Scissor counter above the mask in stack

#### Defined in

node_modules/@pixi/core/index.d.ts:3121

___

### \_scissorRect

• **\_scissorRect**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

Scissor operation above the mask in stack.
Null if _scissorCounter is zero, rectangle instance if positive.

#### Defined in

node_modules/@pixi/core/index.d.ts:3126

___

### \_scissorRectLocal

• **\_scissorRectLocal**: [`Rectangle`](components_ClusterNodeContainer._internal_.Rectangle.md)

pre-computed scissor rect
does become _scissorRect when mask is actually pushed

#### Defined in

node_modules/@pixi/core/index.d.ts:3131

___

### \_stencilCounter

• `Private` **\_stencilCounter**: `number`

Stencil counter above the mask in stack

#### Defined in

node_modules/@pixi/core/index.d.ts:3116

___

### \_target

• `Private` **\_target**: [`IMaskTarget`](../interfaces/components_ClusterNodeContainer._internal_.IMaskTarget.md)

Targeted element. Temporary variable set by MaskSystem

**`member`** {PIXI.DisplayObject}

#### Defined in

node_modules/@pixi/core/index.d.ts:3137

___

### autoDetect

• **autoDetect**: `boolean`

Whether we know the mask type beforehand

**`default`** true

#### Defined in

node_modules/@pixi/core/index.d.ts:3083

___

### enabled

• **enabled**: `boolean`

If enabled is true the mask is applied, if false it will not.

#### Defined in

node_modules/@pixi/core/index.d.ts:3106

___

### isMaskData

• **isMaskData**: `boolean`

Indicator of the type (always true for [MaskData](components_ClusterNodeContainer._internal_.MaskData.md) objects)

#### Defined in

node_modules/@pixi/core/index.d.ts:3092

___

### maskObject

• **maskObject**: [`IMaskTarget`](../interfaces/components_ClusterNodeContainer._internal_.IMaskTarget.md)

Which element we use to mask

**`member`** {PIXI.DisplayObject}

#### Defined in

node_modules/@pixi/core/index.d.ts:3088

___

### multisample

• **multisample**: [`MSAA_QUALITY`](../enums/components_ClusterNodeContainer._internal_.MSAA_QUALITY.md)

Number of samples of the sprite mask filter.
If set to `null`, the sample count of the current render target is used.

**`default`** PIXI.settings.FILTER_MULTISAMPLE

#### Defined in

node_modules/@pixi/core/index.d.ts:3104

___

### pooled

• **pooled**: `boolean`

Whether it belongs to MaskSystem pool

#### Defined in

node_modules/@pixi/core/index.d.ts:3090

___

### resolution

• **resolution**: `number`

Resolution of the sprite mask filter.
If set to `null` or `0`, the resolution of the current render target is used.

**`default`** null

#### Defined in

node_modules/@pixi/core/index.d.ts:3098

___

### type

• **type**: [`MASK_TYPES`](../enums/components_ClusterNodeContainer._internal_.MASK_TYPES.md)

Mask type

#### Defined in

node_modules/@pixi/core/index.d.ts:3078

## Accessors

### filter

• `get` **filter**(): [`ISpriteMaskFilter`](../interfaces/components_ClusterNodeContainer._internal_.ISpriteMaskFilter.md)

The sprite mask filter.
If set to `null`, the default sprite mask filter is used.

**`default`** null

#### Returns

[`ISpriteMaskFilter`](../interfaces/components_ClusterNodeContainer._internal_.ISpriteMaskFilter.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:3149

• `set` **filter**(`value`): `void`

The sprite mask filter.
If set to `null`, the default sprite mask filter is used.

**`default`** null

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ISpriteMaskFilter`](../interfaces/components_ClusterNodeContainer._internal_.ISpriteMaskFilter.md) |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:3150

## Methods

### copyCountersOrReset

▸ **copyCountersOrReset**(`maskAbove?`): `void`

Copies counters from maskData above, called from pushMask().

#### Parameters

| Name | Type |
| :------ | :------ |
| `maskAbove?` | [`MaskData`](components_ClusterNodeContainer._internal_.MaskData.md) |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:3154

___

### reset

▸ **reset**(): `void`

Resets the mask data after popMask().

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:3152