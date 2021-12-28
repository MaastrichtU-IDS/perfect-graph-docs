[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / SpriteMaskFilter

# Class: SpriteMaskFilter

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).SpriteMaskFilter

This handles a Sprite acting as a mask, as opposed to a Graphic.

WebGL only.

**`memberof`** PIXI

## Hierarchy

- [`Filter`](components_ClusterNodeContainer._internal_.Filter.md)

  ↳ **`SpriteMaskFilter`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.SpriteMaskFilter.md#constructor)

### Properties

- [\_maskSprite](components_ClusterNodeContainer._internal_.SpriteMaskFilter.md#_masksprite)
- [\_resolution](components_ClusterNodeContainer._internal_.SpriteMaskFilter.md#_resolution)
- [autoFit](components_ClusterNodeContainer._internal_.SpriteMaskFilter.md#autofit)
- [enabled](components_ClusterNodeContainer._internal_.SpriteMaskFilter.md#enabled)
- [legacy](components_ClusterNodeContainer._internal_.SpriteMaskFilter.md#legacy)
- [maskMatrix](components_ClusterNodeContainer._internal_.SpriteMaskFilter.md#maskmatrix)
- [multisample](components_ClusterNodeContainer._internal_.SpriteMaskFilter.md#multisample)
- [padding](components_ClusterNodeContainer._internal_.SpriteMaskFilter.md#padding)
- [program](components_ClusterNodeContainer._internal_.SpriteMaskFilter.md#program)
- [state](components_ClusterNodeContainer._internal_.SpriteMaskFilter.md#state)
- [uniformGroup](components_ClusterNodeContainer._internal_.SpriteMaskFilter.md#uniformgroup)
- [SOURCE\_KEY\_MAP](components_ClusterNodeContainer._internal_.SpriteMaskFilter.md#source_key_map)

### Accessors

- [blendMode](components_ClusterNodeContainer._internal_.SpriteMaskFilter.md#blendmode)
- [maskSprite](components_ClusterNodeContainer._internal_.SpriteMaskFilter.md#masksprite)
- [resolution](components_ClusterNodeContainer._internal_.SpriteMaskFilter.md#resolution)
- [uniforms](components_ClusterNodeContainer._internal_.SpriteMaskFilter.md#uniforms)
- [defaultFragmentSrc](components_ClusterNodeContainer._internal_.SpriteMaskFilter.md#defaultfragmentsrc)
- [defaultVertexSrc](components_ClusterNodeContainer._internal_.SpriteMaskFilter.md#defaultvertexsrc)

### Methods

- [apply](components_ClusterNodeContainer._internal_.SpriteMaskFilter.md#apply)
- [checkUniformExists](components_ClusterNodeContainer._internal_.SpriteMaskFilter.md#checkuniformexists)
- [destroy](components_ClusterNodeContainer._internal_.SpriteMaskFilter.md#destroy)
- [from](components_ClusterNodeContainer._internal_.SpriteMaskFilter.md#from)

## Constructors

### constructor

• **new SpriteMaskFilter**(`sprite`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sprite` | [`IMaskTarget`](../interfaces/components_ClusterNodeContainer._internal_.IMaskTarget.md) | The target sprite. |

#### Overrides

[Filter](components_ClusterNodeContainer._internal_.Filter.md).[constructor](components_ClusterNodeContainer._internal_.Filter.md#constructor)

#### Defined in

node_modules/@pixi/core/index.d.ts:4371

• **new SpriteMaskFilter**(`vertexSrc?`, `fragmentSrc?`, `uniforms?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertexSrc?` | `string` |
| `fragmentSrc?` | `string` |
| `uniforms?` | [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\> |

#### Overrides

Filter.constructor

#### Defined in

node_modules/@pixi/core/index.d.ts:4377

## Properties

### \_maskSprite

• **\_maskSprite**: [`IMaskTarget`](../interfaces/components_ClusterNodeContainer._internal_.IMaskTarget.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:4366

___

### \_resolution

• `Protected` **\_resolution**: `number`

#### Inherited from

[Filter](components_ClusterNodeContainer._internal_.Filter.md).[_resolution](components_ClusterNodeContainer._internal_.Filter.md#_resolution)

#### Defined in

node_modules/@pixi/core/index.d.ts:1895

___

### autoFit

• **autoFit**: `boolean`

#### Inherited from

[Filter](components_ClusterNodeContainer._internal_.Filter.md).[autoFit](components_ClusterNodeContainer._internal_.Filter.md#autofit)

#### Defined in

node_modules/@pixi/core/index.d.ts:1888

___

### enabled

• **enabled**: `boolean`

#### Inherited from

[Filter](components_ClusterNodeContainer._internal_.Filter.md).[enabled](components_ClusterNodeContainer._internal_.Filter.md#enabled)

#### Defined in

node_modules/@pixi/core/index.d.ts:1887

___

### legacy

• **legacy**: `boolean`

Legacy filters use position and uvs from attributes (set by filter system)

**`readonly`**

#### Inherited from

[Filter](components_ClusterNodeContainer._internal_.Filter.md).[legacy](components_ClusterNodeContainer._internal_.Filter.md#legacy)

#### Defined in

node_modules/@pixi/core/index.d.ts:1893

___

### maskMatrix

• **maskMatrix**: [`Matrix`](components_ClusterNodeContainer._internal_.Matrix.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:4367

___

### multisample

• **multisample**: [`MSAA_QUALITY`](../enums/components_ClusterNodeContainer._internal_.MSAA_QUALITY.md)

#### Inherited from

[Filter](components_ClusterNodeContainer._internal_.Filter.md).[multisample](components_ClusterNodeContainer._internal_.Filter.md#multisample)

#### Defined in

node_modules/@pixi/core/index.d.ts:1886

___

### padding

• **padding**: `number`

#### Inherited from

[Filter](components_ClusterNodeContainer._internal_.Filter.md).[padding](components_ClusterNodeContainer._internal_.Filter.md#padding)

#### Defined in

node_modules/@pixi/core/index.d.ts:1885

___

### program

• **program**: [`Program`](components_ClusterNodeContainer._internal_.Program.md)

Program that the shader uses.

#### Inherited from

[Filter](components_ClusterNodeContainer._internal_.Filter.md).[program](components_ClusterNodeContainer._internal_.Filter.md#program)

#### Defined in

node_modules/@pixi/core/index.d.ts:4223

___

### state

• **state**: [`State`](components_ClusterNodeContainer._internal_.State.md)

#### Inherited from

[Filter](components_ClusterNodeContainer._internal_.Filter.md).[state](components_ClusterNodeContainer._internal_.Filter.md#state)

#### Defined in

node_modules/@pixi/core/index.d.ts:1894

___

### uniformGroup

• **uniformGroup**: [`UniformGroup`](components_ClusterNodeContainer._internal_.UniformGroup.md)<[`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\>\>

#### Inherited from

[Filter](components_ClusterNodeContainer._internal_.Filter.md).[uniformGroup](components_ClusterNodeContainer._internal_.Filter.md#uniformgroup)

#### Defined in

node_modules/@pixi/core/index.d.ts:4224

___

### SOURCE\_KEY\_MAP

▪ `Static` `Protected` **SOURCE\_KEY\_MAP**: [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`string`\>

Used for caching shader IDs

**`static`**

#### Inherited from

[Filter](components_ClusterNodeContainer._internal_.Filter.md).[SOURCE_KEY_MAP](components_ClusterNodeContainer._internal_.Filter.md#source_key_map)

#### Defined in

node_modules/@pixi/core/index.d.ts:1953

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

### maskSprite

• `get` **maskSprite**(): [`IMaskTarget`](../interfaces/components_ClusterNodeContainer._internal_.IMaskTarget.md)

#### Returns

[`IMaskTarget`](../interfaces/components_ClusterNodeContainer._internal_.IMaskTarget.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:4378

• `set` **maskSprite**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IMaskTarget`](../interfaces/components_ClusterNodeContainer._internal_.IMaskTarget.md) |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4379

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

___

### defaultFragmentSrc

• `Static` `get` **defaultFragmentSrc**(): `string`

The default fragment shader source

**`static`**

**`constant`**

#### Returns

`string`

#### Inherited from

Filter.defaultFragmentSrc

#### Defined in

node_modules/@pixi/core/index.d.ts:1945

___

### defaultVertexSrc

• `Static` `get` **defaultVertexSrc**(): `string`

The default vertex shader source

**`static`**

**`constant`**

#### Returns

`string`

#### Inherited from

Filter.defaultVertexSrc

#### Defined in

node_modules/@pixi/core/index.d.ts:1937

## Methods

### apply

▸ **apply**(`filterManager`, `input`, `output`, `clearMode`): `void`

Applies the filter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filterManager` | [`FilterSystem`](components_ClusterNodeContainer._internal_.FilterSystem.md) | The renderer to retrieve the filter from |
| `input` | [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md) | The input render target. |
| `output` | [`RenderTexture`](components_ClusterNodeContainer._internal_.RenderTexture.md) | The target to output to. |
| `clearMode` | [`CLEAR_MODES`](../enums/components_ClusterNodeContainer._internal_.CLEAR_MODES.md) | Should the output be cleared before rendering to it. |

#### Returns

`void`

#### Overrides

[Filter](components_ClusterNodeContainer._internal_.Filter.md).[apply](components_ClusterNodeContainer._internal_.Filter.md#apply)

#### Defined in

node_modules/@pixi/core/index.d.ts:4388

___

### checkUniformExists

▸ **checkUniformExists**(`name`, `group`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `group` | [`UniformGroup`](components_ClusterNodeContainer._internal_.UniformGroup.md)<[`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\>\> |

#### Returns

`boolean`

#### Inherited from

[Filter](components_ClusterNodeContainer._internal_.Filter.md).[checkUniformExists](components_ClusterNodeContainer._internal_.Filter.md#checkuniformexists)

#### Defined in

node_modules/@pixi/core/index.d.ts:4235

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[Filter](components_ClusterNodeContainer._internal_.Filter.md).[destroy](components_ClusterNodeContainer._internal_.Filter.md#destroy)

#### Defined in

node_modules/@pixi/core/index.d.ts:4236

___

### from

▸ `Static` **from**(`vertexSrc?`, `fragmentSrc?`, `uniforms?`): [`Shader`](components_ClusterNodeContainer._internal_.Shader.md)

A short hand function to create a shader based of a vertex and fragment shader.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vertexSrc?` | `string` | The source of the vertex shader. |
| `fragmentSrc?` | `string` | The source of the fragment shader. |
| `uniforms?` | [`Dict`](../modules/components_ClusterNodeContainer._internal_.md#dict)<`any`\> | Custom uniforms to use to augment the built-in ones. |

#### Returns

[`Shader`](components_ClusterNodeContainer._internal_.Shader.md)

A shiny new PixiJS shader!

#### Inherited from

[Filter](components_ClusterNodeContainer._internal_.Filter.md).[from](components_ClusterNodeContainer._internal_.Filter.md#from)

#### Defined in

node_modules/@pixi/core/index.d.ts:4251
