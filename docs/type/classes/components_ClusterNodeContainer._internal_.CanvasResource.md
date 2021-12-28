[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / CanvasResource

# Class: CanvasResource

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).CanvasResource

Resource type for HTMLCanvasElement.

**`memberof`** PIXI

## Hierarchy

- [`BaseImageResource`](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md)

  ↳ **`CanvasResource`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.CanvasResource.md#constructor)

### Properties

- [\_height](components_ClusterNodeContainer._internal_.CanvasResource.md#_height)
- [\_width](components_ClusterNodeContainer._internal_.CanvasResource.md#_width)
- [destroyed](components_ClusterNodeContainer._internal_.CanvasResource.md#destroyed)
- [internal](components_ClusterNodeContainer._internal_.CanvasResource.md#internal)
- [noSubImage](components_ClusterNodeContainer._internal_.CanvasResource.md#nosubimage)
- [onError](components_ClusterNodeContainer._internal_.CanvasResource.md#onerror)
- [onResize](components_ClusterNodeContainer._internal_.CanvasResource.md#onresize)
- [onUpdate](components_ClusterNodeContainer._internal_.CanvasResource.md#onupdate)
- [source](components_ClusterNodeContainer._internal_.CanvasResource.md#source)

### Accessors

- [height](components_ClusterNodeContainer._internal_.CanvasResource.md#height)
- [valid](components_ClusterNodeContainer._internal_.CanvasResource.md#valid)
- [width](components_ClusterNodeContainer._internal_.CanvasResource.md#width)

### Methods

- [bind](components_ClusterNodeContainer._internal_.CanvasResource.md#bind)
- [destroy](components_ClusterNodeContainer._internal_.CanvasResource.md#destroy)
- [dispose](components_ClusterNodeContainer._internal_.CanvasResource.md#dispose)
- [load](components_ClusterNodeContainer._internal_.CanvasResource.md#load)
- [resize](components_ClusterNodeContainer._internal_.CanvasResource.md#resize)
- [style](components_ClusterNodeContainer._internal_.CanvasResource.md#style)
- [unbind](components_ClusterNodeContainer._internal_.CanvasResource.md#unbind)
- [update](components_ClusterNodeContainer._internal_.CanvasResource.md#update)
- [upload](components_ClusterNodeContainer._internal_.CanvasResource.md#upload)
- [crossOrigin](components_ClusterNodeContainer._internal_.CanvasResource.md#crossorigin)
- [test](components_ClusterNodeContainer._internal_.CanvasResource.md#test)

## Constructors

### constructor

• **new CanvasResource**(`source`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `HTMLCanvasElement` | Canvas element to use |

#### Overrides

[BaseImageResource](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md).[constructor](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md#constructor)

#### Defined in

node_modules/@pixi/core/index.d.ts:1527

## Properties

### \_height

• `Protected` **\_height**: `number`

#### Inherited from

[BaseImageResource](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md).[_height](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md#_height)

#### Defined in

node_modules/@pixi/core/index.d.ts:4060

___

### \_width

• `Protected` **\_width**: `number`

#### Inherited from

[BaseImageResource](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md).[_width](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md#_width)

#### Defined in

node_modules/@pixi/core/index.d.ts:4059

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

[BaseImageResource](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md).[destroyed](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md#destroyed)

#### Defined in

node_modules/@pixi/core/index.d.ts:4057

___

### internal

• **internal**: `boolean`

#### Inherited from

[BaseImageResource](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md).[internal](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md#internal)

#### Defined in

node_modules/@pixi/core/index.d.ts:4058

___

### noSubImage

• **noSubImage**: `boolean`

#### Inherited from

[BaseImageResource](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md).[noSubImage](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md#nosubimage)

#### Defined in

node_modules/@pixi/core/index.d.ts:673

___

### onError

• `Protected` **onError**: [`Runner`](components_ClusterNodeContainer._internal_.Runner.md)

#### Inherited from

[BaseImageResource](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md).[onError](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md#onerror)

#### Defined in

node_modules/@pixi/core/index.d.ts:4063

___

### onResize

• `Protected` **onResize**: [`Runner`](components_ClusterNodeContainer._internal_.Runner.md)

#### Inherited from

[BaseImageResource](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md).[onResize](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md#onresize)

#### Defined in

node_modules/@pixi/core/index.d.ts:4061

___

### onUpdate

• `Protected` **onUpdate**: [`Runner`](components_ClusterNodeContainer._internal_.Runner.md)

#### Inherited from

[BaseImageResource](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md).[onUpdate](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md#onupdate)

#### Defined in

node_modules/@pixi/core/index.d.ts:4062

___

### source

• **source**: [`ImageSource`](../modules/components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.md#imagesource)

#### Inherited from

[BaseImageResource](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md).[source](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md#source)

#### Defined in

node_modules/@pixi/core/index.d.ts:672

## Accessors

### height

• `get` **height**(): `number`

The height of the resource.

**`member`** {number}

**`readonly`**

#### Returns

`number`

#### Inherited from

BaseImageResource.height

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

#### Inherited from

BaseImageResource.valid

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

#### Inherited from

BaseImageResource.width

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

#### Inherited from

[BaseImageResource](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md).[bind](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md#bind)

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

#### Inherited from

[BaseImageResource](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md).[destroy](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md#destroy)

#### Defined in

node_modules/@pixi/core/index.d.ts:4147

___

### dispose

▸ **dispose**(): `void`

Destroy this BaseImageResource

**`override`**

#### Returns

`void`

#### Inherited from

[BaseImageResource](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md).[dispose](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md#dispose)

#### Defined in

node_modules/@pixi/core/index.d.ts:704

___

### load

▸ `Protected` **load**(): `Promise`<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>

This can be overridden to start preloading a resource
or do any other prepare step.

#### Returns

`Promise`<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>

Handle the validate event

#### Inherited from

[BaseImageResource](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md).[load](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md#load)

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

#### Inherited from

[BaseImageResource](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md).[resize](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md#resize)

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

#### Inherited from

[BaseImageResource](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md).[style](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md#style)

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

#### Inherited from

[BaseImageResource](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md).[unbind](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md#unbind)

#### Defined in

node_modules/@pixi/core/index.d.ts:4080

___

### update

▸ **update**(): `void`

Checks if source width/height was changed, resize can cause extra baseTexture update.
Triggers one update in any case.

#### Returns

`void`

#### Inherited from

[BaseImageResource](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md).[update](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md#update)

#### Defined in

node_modules/@pixi/core/index.d.ts:699

___

### upload

▸ **upload**(`renderer`, `baseTexture`, `glTexture`, `source?`): `boolean`

Upload the texture to the GPU.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) | Upload to the renderer |
| `baseTexture` | [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\> | Reference to parent texture |
| `glTexture` | [`GLTexture`](components_ClusterNodeContainer._internal_.GLTexture.md) |  |
| `source?` | [`ImageSource`](../modules/components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.md#imagesource) | - |

#### Returns

`boolean`

true is success

#### Inherited from

[BaseImageResource](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md).[upload](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md#upload)

#### Defined in

node_modules/@pixi/core/index.d.ts:694

___

### crossOrigin

▸ `Static` `Protected` **crossOrigin**(`element`, `url`, `crossorigin?`): `void`

Set cross origin based detecting the url and the crossorigin

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `HTMLImageElement` \| `HTMLVideoElement` | Element to apply crossOrigin |
| `url` | `string` | URL to check |
| `crossorigin?` | `string` \| `boolean` | - |

#### Returns

`void`

#### Inherited from

[BaseImageResource](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md).[crossOrigin](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md#crossorigin)

#### Defined in

node_modules/@pixi/core/index.d.ts:685

___

### test

▸ `Static` **test**(`source`): source is any

Used to auto-detect the type of resource.

**`static`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `unknown` | The source object |

#### Returns

source is any

`true` if source is HTMLCanvasElement or OffscreenCanvas

#### Overrides

[BaseImageResource](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md).[test](components_ClusterNodeContainer._internal_.__Users_turgaysaba_Desktop_projects_perfect_graph_node_modules__pixi_core_index_.BaseImageResource.md#test)

#### Defined in

node_modules/@pixi/core/index.d.ts:1535
