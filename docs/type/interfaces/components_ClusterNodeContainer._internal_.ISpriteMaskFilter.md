[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / ISpriteMaskFilter

# Interface: ISpriteMaskFilter

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).ISpriteMaskFilter

## Hierarchy

- [`Filter`](../classes/components_ClusterNodeContainer._internal_.Filter.md)

  ↳ **`ISpriteMaskFilter`**

## Table of contents

### Properties

- [\_resolution](components_ClusterNodeContainer._internal_.ISpriteMaskFilter.md#_resolution)
- [autoFit](components_ClusterNodeContainer._internal_.ISpriteMaskFilter.md#autofit)
- [enabled](components_ClusterNodeContainer._internal_.ISpriteMaskFilter.md#enabled)
- [legacy](components_ClusterNodeContainer._internal_.ISpriteMaskFilter.md#legacy)
- [maskSprite](components_ClusterNodeContainer._internal_.ISpriteMaskFilter.md#masksprite)
- [multisample](components_ClusterNodeContainer._internal_.ISpriteMaskFilter.md#multisample)
- [padding](components_ClusterNodeContainer._internal_.ISpriteMaskFilter.md#padding)
- [program](components_ClusterNodeContainer._internal_.ISpriteMaskFilter.md#program)
- [state](components_ClusterNodeContainer._internal_.ISpriteMaskFilter.md#state)
- [uniformGroup](components_ClusterNodeContainer._internal_.ISpriteMaskFilter.md#uniformgroup)

### Accessors

- [blendMode](components_ClusterNodeContainer._internal_.ISpriteMaskFilter.md#blendmode)
- [resolution](components_ClusterNodeContainer._internal_.ISpriteMaskFilter.md#resolution)
- [uniforms](components_ClusterNodeContainer._internal_.ISpriteMaskFilter.md#uniforms)

### Methods

- [apply](components_ClusterNodeContainer._internal_.ISpriteMaskFilter.md#apply)
- [checkUniformExists](components_ClusterNodeContainer._internal_.ISpriteMaskFilter.md#checkuniformexists)
- [destroy](components_ClusterNodeContainer._internal_.ISpriteMaskFilter.md#destroy)

## Properties

### \_resolution

• `Protected` **\_resolution**: `number`

#### Inherited from

[Filter](../classes/components_ClusterNodeContainer._internal_.Filter.md).[_resolution](../classes/components_ClusterNodeContainer._internal_.Filter.md#_resolution)

#### Defined in

node_modules/@pixi/core/index.d.ts:1895

___

### autoFit

• **autoFit**: `boolean`

#### Inherited from

[Filter](../classes/components_ClusterNodeContainer._internal_.Filter.md).[autoFit](../classes/components_ClusterNodeContainer._internal_.Filter.md#autofit)

#### Defined in

node_modules/@pixi/core/index.d.ts:1888

___

### enabled

• **enabled**: `boolean`

#### Inherited from

[Filter](../classes/components_ClusterNodeContainer._internal_.Filter.md).[enabled](../classes/components_ClusterNodeContainer._internal_.Filter.md#enabled)

#### Defined in

node_modules/@pixi/core/index.d.ts:1887

___

### legacy

• **legacy**: `boolean`

Legacy filters use position and uvs from attributes (set by filter system)

**`readonly`**

#### Inherited from

[Filter](../classes/components_ClusterNodeContainer._internal_.Filter.md).[legacy](../classes/components_ClusterNodeContainer._internal_.Filter.md#legacy)

#### Defined in

node_modules/@pixi/core/index.d.ts:1893

___

### maskSprite

• **maskSprite**: [`IMaskTarget`](components_ClusterNodeContainer._internal_.IMaskTarget.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:2981

___

### multisample

• **multisample**: [`MSAA_QUALITY`](../enums/components_ClusterNodeContainer._internal_.MSAA_QUALITY.md)

#### Inherited from

[Filter](../classes/components_ClusterNodeContainer._internal_.Filter.md).[multisample](../classes/components_ClusterNodeContainer._internal_.Filter.md#multisample)

#### Defined in

node_modules/@pixi/core/index.d.ts:1886

___

### padding

• **padding**: `number`

#### Inherited from

[Filter](../classes/components_ClusterNodeContainer._internal_.Filter.md).[padding](../classes/components_ClusterNodeContainer._internal_.Filter.md#padding)

#### Defined in

node_modules/@pixi/core/index.d.ts:1885

___

### program

• **program**: [`Program`](../classes/components_ClusterNodeContainer._internal_.Program.md)

Program that the shader uses.

#### Inherited from

[Filter](../classes/components_ClusterNodeContainer._internal_.Filter.md).[program](../classes/components_ClusterNodeContainer._internal_.Filter.md#program)

#### Defined in

node_modules/@pixi/core/index.d.ts:4223

___

### state

• **state**: [`State`](../classes/components_ClusterNodeContainer._internal_.State.md)

#### Inherited from

[Filter](../classes/components_ClusterNodeContainer._internal_.Filter.md).[state](../classes/components_ClusterNodeContainer._internal_.Filter.md#state)

#### Defined in

node_modules/@pixi/core/index.d.ts:1894

___

### uniformGroup

• **uniformGroup**: [`UniformGroup`](../classes/components_ClusterNodeContainer._internal_.UniformGroup.md)<[`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\>\>

#### Inherited from

[Filter](../classes/components_ClusterNodeContainer._internal_.Filter.md).[uniformGroup](../classes/components_ClusterNodeContainer._internal_.Filter.md#uniformgroup)

#### Defined in

node_modules/@pixi/core/index.d.ts:4224

## Accessors

### blendMode

• `get` **blendMode**(): [`BLEND_MODES`](../enums/components_ClusterNodeContainer._internal_.BLEND_MODES.md)

Sets the blendmode of the filter

**`member`** {number}

**`default`** PIXI.BLEND_MODES.NORMAL

#### Returns

[`BLEND_MODES`](../enums/components_ClusterNodeContainer._internal_.BLEND_MODES.md)

#### Inherited from

Filter.blendMode

#### Defined in

node_modules/@pixi/core/index.d.ts:1920

• `set` **blendMode**(`value`): `void`

Sets the blendmode of the filter

**`member`** {number}

**`default`** PIXI.BLEND_MODES.NORMAL

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BLEND_MODES`](../enums/components_ClusterNodeContainer._internal_.BLEND_MODES.md) |

#### Returns

`void`

#### Inherited from

Filter.blendMode

#### Defined in

node_modules/@pixi/core/index.d.ts:1921

___

### resolution

• `get` **resolution**(): `number`

The resolution of the filter. Setting this to be lower will lower the quality but
increase the performance of the filter.

**`member`** {number}

#### Returns

`number`

#### Inherited from

Filter.resolution

#### Defined in

node_modules/@pixi/core/index.d.ts:1928

• `set` **resolution**(`value`): `void`

The resolution of the filter. Setting this to be lower will lower the quality but
increase the performance of the filter.

**`member`** {number}

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Filter.resolution

#### Defined in

node_modules/@pixi/core/index.d.ts:1929

___

### uniforms

• `get` **uniforms**(): [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\>

Shader uniform values, shortcut for `uniformGroup.uniforms`.

**`readonly`**

#### Returns

[`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\>

#### Inherited from

Filter.uniforms

#### Defined in

node_modules/@pixi/core/index.d.ts:4242

## Methods

### apply

▸ **apply**(`filterManager`, `input`, `output`, `clearMode?`, `_currentState?`): `void`

Applies the filter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filterManager` | [`FilterSystem`](../classes/components_ClusterNodeContainer._internal_.FilterSystem.md) | The renderer to retrieve the filter from |
| `input` | [`RenderTexture`](../classes/components_ClusterNodeContainer._internal_.RenderTexture.md) | The input render target. |
| `output` | [`RenderTexture`](../classes/components_ClusterNodeContainer._internal_.RenderTexture.md) | The target to output to. |
| `clearMode?` | [`CLEAR_MODES`](../enums/components_ClusterNodeContainer._internal_.CLEAR_MODES.md) | - |
| `_currentState?` | [`FilterState`](../classes/components_ClusterNodeContainer._internal_.FilterState.md) | - |

#### Returns

`void`

#### Inherited from

[Filter](../classes/components_ClusterNodeContainer._internal_.Filter.md).[apply](../classes/components_ClusterNodeContainer._internal_.Filter.md#apply)

#### Defined in

node_modules/@pixi/core/index.d.ts:1913

___

### checkUniformExists

▸ **checkUniformExists**(`name`, `group`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `group` | [`UniformGroup`](../classes/components_ClusterNodeContainer._internal_.UniformGroup.md)<[`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\>\> |

#### Returns

`boolean`

#### Inherited from

[Filter](../classes/components_ClusterNodeContainer._internal_.Filter.md).[checkUniformExists](../classes/components_ClusterNodeContainer._internal_.Filter.md#checkuniformexists)

#### Defined in

node_modules/@pixi/core/index.d.ts:4235

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[Filter](../classes/components_ClusterNodeContainer._internal_.Filter.md).[destroy](../classes/components_ClusterNodeContainer._internal_.Filter.md#destroy)

#### Defined in

node_modules/@pixi/core/index.d.ts:4236