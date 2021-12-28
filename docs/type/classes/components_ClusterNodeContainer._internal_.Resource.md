[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Resource

# Class: Resource

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Resource

Base resource class for textures that manages validation and uploading, depending on its type.

Uploading of a base texture to the GPU is required.

**`memberof`** PIXI

## Hierarchy

- **`Resource`**

  ↳ [`BufferResource`](components_ClusterNodeContainer._internal_.BufferResource.md)

  ↳ [`AbstractMultiResource`](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.AbstractMultiResource.md)

  ↳ [`BaseImageResource`](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md)

  ↳ [`BufferResource`](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BufferResource.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Resource.md#constructor)

### Properties

- [\_height](components_ClusterNodeContainer._internal_.Resource.md#_height)
- [\_width](components_ClusterNodeContainer._internal_.Resource.md#_width)
- [destroyed](components_ClusterNodeContainer._internal_.Resource.md#destroyed)
- [internal](components_ClusterNodeContainer._internal_.Resource.md#internal)
- [onError](components_ClusterNodeContainer._internal_.Resource.md#onerror)
- [onResize](components_ClusterNodeContainer._internal_.Resource.md#onresize)
- [onUpdate](components_ClusterNodeContainer._internal_.Resource.md#onupdate)

### Accessors

- [height](components_ClusterNodeContainer._internal_.Resource.md#height)
- [valid](components_ClusterNodeContainer._internal_.Resource.md#valid)
- [width](components_ClusterNodeContainer._internal_.Resource.md#width)

### Methods

- [bind](components_ClusterNodeContainer._internal_.Resource.md#bind)
- [destroy](components_ClusterNodeContainer._internal_.Resource.md#destroy)
- [dispose](components_ClusterNodeContainer._internal_.Resource.md#dispose)
- [load](components_ClusterNodeContainer._internal_.Resource.md#load)
- [resize](components_ClusterNodeContainer._internal_.Resource.md#resize)
- [style](components_ClusterNodeContainer._internal_.Resource.md#style)
- [unbind](components_ClusterNodeContainer._internal_.Resource.md#unbind)
- [update](components_ClusterNodeContainer._internal_.Resource.md#update)
- [upload](components_ClusterNodeContainer._internal_.Resource.md#upload)
- [test](components_ClusterNodeContainer._internal_.Resource.md#test)

## Constructors

### constructor

• **new Resource**(`width?`, `height?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `width?` | `number` |
| `height?` | `number` |

#### Defined in

node_modules/@pixi/core/index.d.ts:4068

## Properties

### \_height

• `Protected` **\_height**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:4060

___

### \_width

• `Protected` **\_width**: `number`

#### Defined in

node_modules/@pixi/core/index.d.ts:4059

___

### destroyed

• **destroyed**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:4057

___

### internal

• **internal**: `boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:4058

___

### onError

• `Protected` **onError**: [`Runner`](components_ClusterNodeContainer._internal_.Runner.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:4063

___

### onResize

• `Protected` **onResize**: [`Runner`](components_ClusterNodeContainer._internal_.Runner.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:4061

___

### onUpdate

• `Protected` **onUpdate**: [`Runner`](components_ClusterNodeContainer._internal_.Runner.md)

#### Defined in

node_modules/@pixi/core/index.d.ts:4062

## Accessors

### height

• `get` **height**(): `number`

The height of the resource.

**`member`** {number}

**`readonly`**

#### Returns

`number`

#### Defined in

node_modules/@pixi/core/index.d.ts:4117

___

### valid

• `get` **valid**(): `boolean`

Has been validated

**`readonly`**

**`member`** {boolean}

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:4092

___

### width

• `get` **width**(): `number`

The width of the resource.

**`member`** {number}

**`readonly`**

#### Returns

`number`

#### Defined in

node_modules/@pixi/core/index.d.ts:4110

## Methods

### bind

▸ **bind**(`baseTexture`): `void`

Bind to a parent BaseTexture

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseTexture` | [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\> | Parent texture |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4074

___

### destroy

▸ **destroy**(): `void`

Call when destroying resource, unbind any BaseTexture object
before calling this method, as reference counts are maintained
internally.

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4147

___

### dispose

▸ `Protected` **dispose**(): `void`

Clean up anything, this happens when destroying is ready.

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4141

___

### load

▸ `Protected` **load**(): `Promise`<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>

This can be overridden to start preloading a resource
or do any other prepare step.

#### Returns

`Promise`<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>

Handle the validate event

#### Defined in

node_modules/@pixi/core/index.d.ts:4103

___

### resize

▸ **resize**(`width`, `height`): `void`

Trigger a resize event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | X dimension |
| `height` | `number` | Y dimension |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4086

___

### style

▸ **style**(`_renderer`, `_baseTexture`, `_glTexture`): `boolean`

Set the style, optional to override

#### Parameters

| Name | Type |
| :------ | :------ |
| `_renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) |
| `_baseTexture` | [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\> |
| `_glTexture` | [`GLTexture`](components_ClusterNodeContainer._internal_.GLTexture.md) |

#### Returns

`boolean`

`true` is success

#### Defined in

node_modules/@pixi/core/index.d.ts:4135

___

### unbind

▸ **unbind**(`baseTexture`): `void`

Unbind to a parent BaseTexture

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseTexture` | [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\> | Parent texture |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4080

___

### update

▸ **update**(): `void`

Has been updated trigger event

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4096

___

### upload

▸ `Abstract` **upload**(`renderer`, `baseTexture`, `glTexture`): `boolean`

Uploads the texture or returns false if it cant for some reason. Override this.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) | yeah, renderer! |
| `baseTexture` | [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\> | the texture |
| `glTexture` | [`GLTexture`](components_ClusterNodeContainer._internal_.GLTexture.md) | texture instance for this webgl context |

#### Returns

`boolean`

true is success

#### Defined in

node_modules/@pixi/core/index.d.ts:4126

___

### test

▸ `Static` **test**(`_source`, `_extension?`): `boolean`

Abstract, used to auto-detect resource type

**`static`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `_source` | `unknown` |
| `_extension?` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/core/index.d.ts:4155