[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / BufferResource

# Class: BufferResource

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).BufferResource

Buffer resource with data of typed array.

**`memberof`** PIXI

## Hierarchy

- [`Resource`](components_ClusterNodeContainer._internal_.Resource.md)

  ↳ **`BufferResource`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.BufferResource.md#constructor)

### Properties

- [\_height](components_ClusterNodeContainer._internal_.BufferResource.md#_height)
- [\_width](components_ClusterNodeContainer._internal_.BufferResource.md#_width)
- [data](components_ClusterNodeContainer._internal_.BufferResource.md#data)
- [destroyed](components_ClusterNodeContainer._internal_.BufferResource.md#destroyed)
- [internal](components_ClusterNodeContainer._internal_.BufferResource.md#internal)
- [onError](components_ClusterNodeContainer._internal_.BufferResource.md#onerror)
- [onResize](components_ClusterNodeContainer._internal_.BufferResource.md#onresize)
- [onUpdate](components_ClusterNodeContainer._internal_.BufferResource.md#onupdate)

### Accessors

- [height](components_ClusterNodeContainer._internal_.BufferResource.md#height)
- [valid](components_ClusterNodeContainer._internal_.BufferResource.md#valid)
- [width](components_ClusterNodeContainer._internal_.BufferResource.md#width)

### Methods

- [bind](components_ClusterNodeContainer._internal_.BufferResource.md#bind)
- [destroy](components_ClusterNodeContainer._internal_.BufferResource.md#destroy)
- [dispose](components_ClusterNodeContainer._internal_.BufferResource.md#dispose)
- [load](components_ClusterNodeContainer._internal_.BufferResource.md#load)
- [resize](components_ClusterNodeContainer._internal_.BufferResource.md#resize)
- [style](components_ClusterNodeContainer._internal_.BufferResource.md#style)
- [unbind](components_ClusterNodeContainer._internal_.BufferResource.md#unbind)
- [update](components_ClusterNodeContainer._internal_.BufferResource.md#update)
- [upload](components_ClusterNodeContainer._internal_.BufferResource.md#upload)
- [test](components_ClusterNodeContainer._internal_.BufferResource.md#test)

## Constructors

### constructor

• **new BufferResource**(`source`, `options`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `Uint16Array` \| `Float32Array` \| `Uint32Array` \| `Uint8Array` | Source buffer |
| `options` | [`ISize`](../interfaces/components_ClusterNodeContainer._internal_.ISize.md) | Options |

#### Overrides

[Resource](components_ClusterNodeContainer._internal_.Resource.md).[constructor](components_ClusterNodeContainer._internal_.Resource.md#constructor)

#### Defined in

node_modules/@pixi/core/index.d.ts:1399

## Properties

### \_height

• `Protected` **\_height**: `number`

#### Inherited from

[Resource](components_ClusterNodeContainer._internal_.Resource.md).[_height](components_ClusterNodeContainer._internal_.Resource.md#_height)

#### Defined in

node_modules/@pixi/core/index.d.ts:4060

___

### \_width

• `Protected` **\_width**: `number`

#### Inherited from

[Resource](components_ClusterNodeContainer._internal_.Resource.md).[_width](components_ClusterNodeContainer._internal_.Resource.md#_width)

#### Defined in

node_modules/@pixi/core/index.d.ts:4059

___

### data

• **data**: `Uint16Array` \| `Float32Array` \| `Uint32Array` \| `Uint8Array`

#### Defined in

node_modules/@pixi/core/index.d.ts:1392

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

[Resource](components_ClusterNodeContainer._internal_.Resource.md).[destroyed](components_ClusterNodeContainer._internal_.Resource.md#destroyed)

#### Defined in

node_modules/@pixi/core/index.d.ts:4057

___

### internal

• **internal**: `boolean`

#### Inherited from

[Resource](components_ClusterNodeContainer._internal_.Resource.md).[internal](components_ClusterNodeContainer._internal_.Resource.md#internal)

#### Defined in

node_modules/@pixi/core/index.d.ts:4058

___

### onError

• `Protected` **onError**: [`Runner`](components_ClusterNodeContainer._internal_.Runner.md)

#### Inherited from

[Resource](components_ClusterNodeContainer._internal_.Resource.md).[onError](components_ClusterNodeContainer._internal_.Resource.md#onerror)

#### Defined in

node_modules/@pixi/core/index.d.ts:4063

___

### onResize

• `Protected` **onResize**: [`Runner`](components_ClusterNodeContainer._internal_.Runner.md)

#### Inherited from

[Resource](components_ClusterNodeContainer._internal_.Resource.md).[onResize](components_ClusterNodeContainer._internal_.Resource.md#onresize)

#### Defined in

node_modules/@pixi/core/index.d.ts:4061

___

### onUpdate

• `Protected` **onUpdate**: [`Runner`](components_ClusterNodeContainer._internal_.Runner.md)

#### Inherited from

[Resource](components_ClusterNodeContainer._internal_.Resource.md).[onUpdate](components_ClusterNodeContainer._internal_.Resource.md#onupdate)

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

#### Inherited from

Resource.height

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

Resource.valid

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

Resource.width

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

[Resource](components_ClusterNodeContainer._internal_.Resource.md).[bind](components_ClusterNodeContainer._internal_.Resource.md#bind)

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

[Resource](components_ClusterNodeContainer._internal_.Resource.md).[destroy](components_ClusterNodeContainer._internal_.Resource.md#destroy)

#### Defined in

node_modules/@pixi/core/index.d.ts:4147

___

### dispose

▸ **dispose**(): `void`

Destroy and don't use after this

**`override`**

#### Returns

`void`

#### Overrides

[Resource](components_ClusterNodeContainer._internal_.Resource.md).[dispose](components_ClusterNodeContainer._internal_.Resource.md#dispose)

#### Defined in

node_modules/@pixi/core/index.d.ts:1412

___

### load

▸ `Protected` **load**(): `Promise`<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>

This can be overridden to start preloading a resource
or do any other prepare step.

#### Returns

`Promise`<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md)\>

Handle the validate event

#### Inherited from

[Resource](components_ClusterNodeContainer._internal_.Resource.md).[load](components_ClusterNodeContainer._internal_.Resource.md#load)

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

[Resource](components_ClusterNodeContainer._internal_.Resource.md).[resize](components_ClusterNodeContainer._internal_.Resource.md#resize)

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

[Resource](components_ClusterNodeContainer._internal_.Resource.md).[style](components_ClusterNodeContainer._internal_.Resource.md#style)

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

[Resource](components_ClusterNodeContainer._internal_.Resource.md).[unbind](components_ClusterNodeContainer._internal_.Resource.md#unbind)

#### Defined in

node_modules/@pixi/core/index.d.ts:4080

___

### update

▸ **update**(): `void`

Has been updated trigger event

#### Returns

`void`

#### Inherited from

[Resource](components_ClusterNodeContainer._internal_.Resource.md).[update](components_ClusterNodeContainer._internal_.Resource.md#update)

#### Defined in

node_modules/@pixi/core/index.d.ts:4096

___

### upload

▸ **upload**(`renderer`, `baseTexture`, `glTexture`): `boolean`

Upload the texture to the GPU.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | [`Renderer`](components_ClusterNodeContainer._internal_.Renderer.md) | Upload to the renderer |
| `baseTexture` | [`BaseTexture`](components_ClusterNodeContainer._internal_.BaseTexture.md)<[`Resource`](components_ClusterNodeContainer._internal_.Resource.md), [`IAutoDetectOptions`](../modules/components_ClusterNodeContainer._internal_.md#iautodetectoptions)\> | Reference to parent texture |
| `glTexture` | [`GLTexture`](components_ClusterNodeContainer._internal_.GLTexture.md) | glTexture |

#### Returns

`boolean`

true is success

#### Overrides

[Resource](components_ClusterNodeContainer._internal_.Resource.md).[upload](components_ClusterNodeContainer._internal_.Resource.md#upload)

#### Defined in

node_modules/@pixi/core/index.d.ts:1407

___

### test

▸ `Static` **test**(`source`): source is Float32Array \| Uint32Array \| Uint8Array

Used to auto-detect the type of resource.

**`static`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `unknown` | The source object |

#### Returns

source is Float32Array \| Uint32Array \| Uint8Array

`true` if <canvas>

#### Overrides

[Resource](components_ClusterNodeContainer._internal_.Resource.md).[test](components_ClusterNodeContainer._internal_.Resource.md#test)

#### Defined in

node_modules/@pixi/core/index.d.ts:1420
