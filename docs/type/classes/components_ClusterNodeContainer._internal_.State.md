[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / State

# Class: State

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).State

This is a WebGL state, and is is passed to {@link PIXI.StateSystem}.

Each mesh rendered may require WebGL to be in a different state.
For example you may want different blend mode or to enable polygon offsets

**`memberof`** PIXI

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.State.md#constructor)

### Properties

- [\_blendMode](components_ClusterNodeContainer._internal_.State.md#_blendmode)
- [\_polygonOffset](components_ClusterNodeContainer._internal_.State.md#_polygonoffset)
- [data](components_ClusterNodeContainer._internal_.State.md#data)

### Accessors

- [blend](components_ClusterNodeContainer._internal_.State.md#blend)
- [blendMode](components_ClusterNodeContainer._internal_.State.md#blendmode)
- [clockwiseFrontFace](components_ClusterNodeContainer._internal_.State.md#clockwisefrontface)
- [culling](components_ClusterNodeContainer._internal_.State.md#culling)
- [depthMask](components_ClusterNodeContainer._internal_.State.md#depthmask)
- [depthTest](components_ClusterNodeContainer._internal_.State.md#depthtest)
- [offsets](components_ClusterNodeContainer._internal_.State.md#offsets)
- [polygonOffset](components_ClusterNodeContainer._internal_.State.md#polygonoffset)

### Methods

- [toString](components_ClusterNodeContainer._internal_.State.md#tostring)
- [for2d](components_ClusterNodeContainer._internal_.State.md#for2d)

## Constructors

### constructor

• **new State**()

#### Defined in

node_modules/@pixi/core/index.d.ts:4403

## Properties

### \_blendMode

• **\_blendMode**: [`BLEND_MODES`](../enums/components_ClusterNodeContainer._internal_.BLEND_MODES.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:4401

___

### \_polygonOffset

• **\_polygonOffset**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:4402

___

### data

• **data**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:4400

## Accessors

### blend

• `get` **blend**(): `boolean`

Activates blending of the computed fragment color values.

**`default`** true

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:4409

• `set` **blend**(`value`): `void`

Activates blending of the computed fragment color values.

**`default`** true

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4410

___

### blendMode

• `get` **blendMode**(): [`BLEND_MODES`](../enums/components_ClusterNodeContainer._internal_.BLEND_MODES.md)

The blend mode to be applied when this state is set. Apply a value of `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
Setting this mode to anything other than NO_BLEND will automatically switch blending on.

**`default`** PIXI.BLEND_MODES.NORMAL

#### Returns

[`BLEND_MODES`](../enums/components_ClusterNodeContainer._internal_.BLEND_MODES.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:4452

• `set` **blendMode**(`value`): `void`

The blend mode to be applied when this state is set. Apply a value of `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
Setting this mode to anything other than NO_BLEND will automatically switch blending on.

**`default`** PIXI.BLEND_MODES.NORMAL

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BLEND_MODES`](../enums/components_ClusterNodeContainer._internal_.BLEND_MODES.md) |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4453

___

### clockwiseFrontFace

• `get` **clockwiseFrontFace**(): `boolean`

Specifies whether or not front or back-facing polygons can be culled.

**`default`** false

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:4444

• `set` **clockwiseFrontFace**(`value`): `void`

Specifies whether or not front or back-facing polygons can be culled.

**`default`** false

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4445

___

### culling

• `get` **culling**(): `boolean`

Activates culling of polygons.

**`default`** false

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:4423

• `set` **culling**(`value`): `void`

Activates culling of polygons.

**`default`** false

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4424

___

### depthMask

• `get` **depthMask**(): `boolean`

Enables or disables writing to the depth buffer.

**`default`** true

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:4437

• `set` **depthMask**(`value`): `void`

Enables or disables writing to the depth buffer.

**`default`** true

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4438

___

### depthTest

• `get` **depthTest**(): `boolean`

Activates depth comparisons and updates to the depth buffer.

**`default`** false

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:4430

• `set` **depthTest**(`value`): `void`

Activates depth comparisons and updates to the depth buffer.

**`default`** false

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4431

___

### offsets

• `get` **offsets**(): `boolean`

Activates adding an offset to depth values of polygon's fragments

**`default`** false

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:4416

• `set` **offsets**(`value`): `void`

Activates adding an offset to depth values of polygon's fragments

**`default`** false

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4417

___

### polygonOffset

• `get` **polygonOffset**(): `number`

The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.

**`default`** 0

#### Returns

`number`

#### Defined in

node_modules/@pixi/core/index.d.ts:4459

• `set` **polygonOffset**(`value`): `void`

The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.

**`default`** 0

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4460

## Methods

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@pixi/core/index.d.ts:4461

___

### for2d

▸ `Static` **for2d**(): [`State`](components_ClusterNodeContainer._internal_.State.md)

#### Returns

[`State`](components_ClusterNodeContainer._internal_.State.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:4462
