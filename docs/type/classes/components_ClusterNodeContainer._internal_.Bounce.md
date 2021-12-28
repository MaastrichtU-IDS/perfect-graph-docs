[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Bounce

# Class: Bounce

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Bounce

## Hierarchy

- [`Plugin_2`](components_ClusterNodeContainer._internal_.Plugin_2.md)

  ↳ **`Bounce`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Bounce.md#constructor)

### Properties

- [bottom](components_ClusterNodeContainer._internal_.Bounce.md#bottom)
- [ease](components_ClusterNodeContainer._internal_.Bounce.md#ease)
- [left](components_ClusterNodeContainer._internal_.Bounce.md#left)
- [oob](components_ClusterNodeContainer._internal_.Bounce.md#oob)
- [options](components_ClusterNodeContainer._internal_.Bounce.md#options)
- [parent](components_ClusterNodeContainer._internal_.Bounce.md#parent)
- [paused](components_ClusterNodeContainer._internal_.Bounce.md#paused)
- [right](components_ClusterNodeContainer._internal_.Bounce.md#right)
- [toX](components_ClusterNodeContainer._internal_.Bounce.md#tox)
- [toY](components_ClusterNodeContainer._internal_.Bounce.md#toy)
- [top](components_ClusterNodeContainer._internal_.Bounce.md#top)
- [underflowX](components_ClusterNodeContainer._internal_.Bounce.md#underflowx)
- [underflowY](components_ClusterNodeContainer._internal_.Bounce.md#underflowy)

### Methods

- [bounce](components_ClusterNodeContainer._internal_.Bounce.md#bounce)
- [calcUnderflowX](components_ClusterNodeContainer._internal_.Bounce.md#calcunderflowx)
- [calcUnderflowY](components_ClusterNodeContainer._internal_.Bounce.md#calcunderflowy)
- [destroy](components_ClusterNodeContainer._internal_.Bounce.md#destroy)
- [down](components_ClusterNodeContainer._internal_.Bounce.md#down)
- [isActive](components_ClusterNodeContainer._internal_.Bounce.md#isactive)
- [move](components_ClusterNodeContainer._internal_.Bounce.md#move)
- [pause](components_ClusterNodeContainer._internal_.Bounce.md#pause)
- [reset](components_ClusterNodeContainer._internal_.Bounce.md#reset)
- [resize](components_ClusterNodeContainer._internal_.Bounce.md#resize)
- [resume](components_ClusterNodeContainer._internal_.Bounce.md#resume)
- [up](components_ClusterNodeContainer._internal_.Bounce.md#up)
- [update](components_ClusterNodeContainer._internal_.Bounce.md#update)
- [wheel](components_ClusterNodeContainer._internal_.Bounce.md#wheel)

## Constructors

### constructor

• **new Bounce**(`parent`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`Viewport`](components_ClusterNodeContainer._internal_.Viewport.md) |
| `options?` | [`IBounceOptions`](../interfaces/components_ClusterNodeContainer._internal_.IBounceOptions.md) |

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[constructor](components_ClusterNodeContainer._internal_.Plugin_2.md#constructor)

#### Defined in

node_modules/pixi-viewport/index.d.ts:48

## Properties

### bottom

• `Readonly` **bottom**: `boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:42

___

### ease

• `Protected` **ease**: `any`

#### Defined in

node_modules/pixi-viewport/index.d.ts:45

___

### left

• `Readonly` **left**: `boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:39

___

### oob

• `Private` **oob**: `any`

#### Defined in

node_modules/pixi-viewport/index.d.ts:55

___

### options

• `Readonly` **options**: [`Readonly`](../modules/components_ClusterNodeContainer._internal_.md#readonly)<[`Required`](../modules/components_ClusterNodeContainer._internal_.md#required)<[`IBounceOptions`](../interfaces/components_ClusterNodeContainer._internal_.IBounceOptions.md)\>\>

#### Defined in

node_modules/pixi-viewport/index.d.ts:38

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

### right

• `Readonly` **right**: `boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:41

___

### toX

• `Protected` **toX**: ``null`` \| [`IBounceState`](../interfaces/components_ClusterNodeContainer._internal_.IBounceState.md)

#### Defined in

node_modules/pixi-viewport/index.d.ts:46

___

### toY

• `Protected` **toY**: ``null`` \| [`IBounceState`](../interfaces/components_ClusterNodeContainer._internal_.IBounceState.md)

#### Defined in

node_modules/pixi-viewport/index.d.ts:47

___

### top

• `Readonly` **top**: `boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:40

___

### underflowX

• `Readonly` **underflowX**: ``0`` \| ``1`` \| ``-1``

#### Defined in

node_modules/pixi-viewport/index.d.ts:43

___

### underflowY

• `Readonly` **underflowY**: ``0`` \| ``1`` \| ``-1``

#### Defined in

node_modules/pixi-viewport/index.d.ts:44

## Methods

### bounce

▸ **bounce**(): `void`

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:56

___

### calcUnderflowX

▸ `Protected` **calcUnderflowX**(): `number`

#### Returns

`number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:53

___

### calcUnderflowY

▸ `Protected` **calcUnderflowY**(): `number`

#### Returns

`number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:54

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

node_modules/pixi-viewport/index.d.ts:50

___

### isActive

▸ **isActive**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:49

___

### move

▸ **move**(`_e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_e` | [`InteractionEvent`](components_ClusterNodeContainer._internal_.InteractionEvent.md) |

#### Returns

`boolean`

#### Inherited from

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[move](components_ClusterNodeContainer._internal_.Plugin_2.md#move)

#### Defined in

node_modules/pixi-viewport/index.d.ts:394

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

node_modules/pixi-viewport/index.d.ts:57

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

node_modules/pixi-viewport/index.d.ts:51

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

node_modules/pixi-viewport/index.d.ts:52

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
