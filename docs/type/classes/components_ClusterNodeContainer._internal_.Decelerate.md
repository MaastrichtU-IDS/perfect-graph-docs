[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Decelerate

# Class: Decelerate

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Decelerate

## Hierarchy

- [`Plugin_2`](components_ClusterNodeContainer._internal_.Plugin_2.md)

  ↳ **`Decelerate`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Decelerate.md#constructor)

### Properties

- [options](components_ClusterNodeContainer._internal_.Decelerate.md#options)
- [parent](components_ClusterNodeContainer._internal_.Decelerate.md#parent)
- [paused](components_ClusterNodeContainer._internal_.Decelerate.md#paused)
- [percentChangeX](components_ClusterNodeContainer._internal_.Decelerate.md#percentchangex)
- [percentChangeY](components_ClusterNodeContainer._internal_.Decelerate.md#percentchangey)
- [saved](components_ClusterNodeContainer._internal_.Decelerate.md#saved)
- [timeSinceRelease](components_ClusterNodeContainer._internal_.Decelerate.md#timesincerelease)
- [x](components_ClusterNodeContainer._internal_.Decelerate.md#x)
- [y](components_ClusterNodeContainer._internal_.Decelerate.md#y)

### Methods

- [activate](components_ClusterNodeContainer._internal_.Decelerate.md#activate)
- [destroy](components_ClusterNodeContainer._internal_.Decelerate.md#destroy)
- [down](components_ClusterNodeContainer._internal_.Decelerate.md#down)
- [isActive](components_ClusterNodeContainer._internal_.Decelerate.md#isactive)
- [move](components_ClusterNodeContainer._internal_.Decelerate.md#move)
- [moved](components_ClusterNodeContainer._internal_.Decelerate.md#moved)
- [pause](components_ClusterNodeContainer._internal_.Decelerate.md#pause)
- [reset](components_ClusterNodeContainer._internal_.Decelerate.md#reset)
- [resize](components_ClusterNodeContainer._internal_.Decelerate.md#resize)
- [resume](components_ClusterNodeContainer._internal_.Decelerate.md#resume)
- [up](components_ClusterNodeContainer._internal_.Decelerate.md#up)
- [update](components_ClusterNodeContainer._internal_.Decelerate.md#update)
- [wheel](components_ClusterNodeContainer._internal_.Decelerate.md#wheel)

## Constructors

### constructor

• **new Decelerate**(`parent`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`Viewport`](components_ClusterNodeContainer._internal_.Viewport.md) |
| `options?` | [`IDecelerateOptions`](../interfaces/components_ClusterNodeContainer._internal_.IDecelerateOptions.md) |

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[constructor](components_ClusterNodeContainer._internal_.Plugin_2.md#constructor)

#### Defined in

node_modules/pixi-viewport/index.d.ts:94

## Properties

### options

• `Readonly` **options**: [`Required`](../modules/components_ClusterNodeContainer._internal_.md#required)<[`IDecelerateOptions`](../interfaces/components_ClusterNodeContainer._internal_.IDecelerateOptions.md)\>

#### Defined in

node_modules/pixi-viewport/index.d.ts:87

___

### parent

• `Readonly` **parent**: [`Viewport`](components_ClusterNodeContainer._internal_.Viewport.md)

#### Inherited from

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[parent](components_ClusterNodeContainer._internal_.Plugin_2.md#parent)

#### Defined in

node_modules/pixi-viewport/index.d.ts:389

___

### paused

• **paused**: `boolean`

#### Inherited from

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[paused](components_ClusterNodeContainer._internal_.Plugin_2.md#paused)

#### Defined in

node_modules/pixi-viewport/index.d.ts:390

___

### percentChangeX

• **percentChangeX**: `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:90

___

### percentChangeY

• **percentChangeY**: `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:91

___

### saved

• `Protected` **saved**: [`IDecelerateSnapshot`](../interfaces/components_ClusterNodeContainer._internal_.IDecelerateSnapshot.md)[]

#### Defined in

node_modules/pixi-viewport/index.d.ts:92

___

### timeSinceRelease

• `Protected` **timeSinceRelease**: `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:93

___

### x

• **x**: ``null`` \| `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:88

___

### y

• **y**: ``null`` \| `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:89

## Methods

### activate

▸ **activate**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.x?` | `number` |
| `options.y?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:103

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[destroy](components_ClusterNodeContainer._internal_.Plugin_2.md#destroy)

#### Defined in

node_modules/pixi-viewport/index.d.ts:392

___

### down

▸ **down**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[down](components_ClusterNodeContainer._internal_.Plugin_2.md#down)

#### Defined in

node_modules/pixi-viewport/index.d.ts:95

___

### isActive

▸ **isActive**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:96

___

### move

▸ **move**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[move](components_ClusterNodeContainer._internal_.Plugin_2.md#move)

#### Defined in

node_modules/pixi-viewport/index.d.ts:97

___

### moved

▸ `Protected` **moved**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.original` | [`Point`](components_ClusterNodeContainer._internal_.Point.md) |
| `data.type` | ``"clamp-x"`` \| ``"clamp-y"`` |

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:98

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Inherited from

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[pause](components_ClusterNodeContainer._internal_.Plugin_2.md#pause)

#### Defined in

node_modules/pixi-viewport/index.d.ts:400

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[reset](components_ClusterNodeContainer._internal_.Plugin_2.md#reset)

#### Defined in

node_modules/pixi-viewport/index.d.ts:108

___

### resize

▸ **resize**(): `void`

#### Returns

`void`

#### Inherited from

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[resize](components_ClusterNodeContainer._internal_.Plugin_2.md#resize)

#### Defined in

node_modules/pixi-viewport/index.d.ts:398

___

### resume

▸ **resume**(): `void`

#### Returns

`void`

#### Inherited from

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[resume](components_ClusterNodeContainer._internal_.Plugin_2.md#resume)

#### Defined in

node_modules/pixi-viewport/index.d.ts:401

___

### up

▸ **up**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[up](components_ClusterNodeContainer._internal_.Plugin_2.md#up)

#### Defined in

node_modules/pixi-viewport/index.d.ts:102

___

### update

▸ **update**(`elapsed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `elapsed` | `number` |

#### Returns

`void`

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[update](components_ClusterNodeContainer._internal_.Plugin_2.md#update)

#### Defined in

node_modules/pixi-viewport/index.d.ts:107

___

### wheel

▸ **wheel**(`_e`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_e` | `WheelEvent` |

#### Returns

`undefined` \| `boolean`

#### Inherited from

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[wheel](components_ClusterNodeContainer._internal_.Plugin_2.md#wheel)

#### Defined in

node_modules/pixi-viewport/index.d.ts:396
