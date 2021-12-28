[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / Wheel

# Class: Wheel

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).Wheel

## Hierarchy

- [`Plugin_2`](components_ClusterNodeContainer._internal_.Plugin_2.md)

  ↳ **`Wheel`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.Wheel.md#constructor)

### Properties

- [keyIsPressed](components_ClusterNodeContainer._internal_.Wheel.md#keyispressed)
- [options](components_ClusterNodeContainer._internal_.Wheel.md#options)
- [parent](components_ClusterNodeContainer._internal_.Wheel.md#parent)
- [paused](components_ClusterNodeContainer._internal_.Wheel.md#paused)
- [pinch](components_ClusterNodeContainer._internal_.Wheel.md#pinch)
- [smoothing](components_ClusterNodeContainer._internal_.Wheel.md#smoothing)
- [smoothingCenter](components_ClusterNodeContainer._internal_.Wheel.md#smoothingcenter)
- [smoothingCount](components_ClusterNodeContainer._internal_.Wheel.md#smoothingcount)

### Methods

- [checkKeyPress](components_ClusterNodeContainer._internal_.Wheel.md#checkkeypress)
- [destroy](components_ClusterNodeContainer._internal_.Wheel.md#destroy)
- [down](components_ClusterNodeContainer._internal_.Wheel.md#down)
- [handleKeyPresses](components_ClusterNodeContainer._internal_.Wheel.md#handlekeypresses)
- [isAxisX](components_ClusterNodeContainer._internal_.Wheel.md#isaxisx)
- [isAxisY](components_ClusterNodeContainer._internal_.Wheel.md#isaxisy)
- [move](components_ClusterNodeContainer._internal_.Wheel.md#move)
- [pause](components_ClusterNodeContainer._internal_.Wheel.md#pause)
- [reset](components_ClusterNodeContainer._internal_.Wheel.md#reset)
- [resize](components_ClusterNodeContainer._internal_.Wheel.md#resize)
- [resume](components_ClusterNodeContainer._internal_.Wheel.md#resume)
- [up](components_ClusterNodeContainer._internal_.Wheel.md#up)
- [update](components_ClusterNodeContainer._internal_.Wheel.md#update)
- [wheel](components_ClusterNodeContainer._internal_.Wheel.md#wheel)

## Constructors

### constructor

• **new Wheel**(`parent`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`Viewport`](components_ClusterNodeContainer._internal_.Viewport.md) |
| `options?` | [`IWheelOptions`](../interfaces/components_ClusterNodeContainer._internal_.IWheelOptions.md) |

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[constructor](components_ClusterNodeContainer._internal_.Plugin_2.md#constructor)

#### Defined in

node_modules/pixi-viewport/index.d.ts:584

## Properties

### keyIsPressed

• `Protected` **keyIsPressed**: `boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:583

___

### options

• `Readonly` **options**: [`Required`](../modules/components_ClusterNodeContainer._internal_.md#required)<[`IWheelOptions`](../interfaces/components_ClusterNodeContainer._internal_.IWheelOptions.md)\>

#### Defined in

node_modules/pixi-viewport/index.d.ts:579

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

### pinch

• `Private` **pinch**: `any`

#### Defined in

node_modules/pixi-viewport/index.d.ts:591

___

### smoothing

• `Protected` `Optional` **smoothing**: ``null`` \| [`IPointData`](../interfaces/components_ClusterNodeContainer._internal_.IPointData.md)

#### Defined in

node_modules/pixi-viewport/index.d.ts:580

___

### smoothingCenter

• `Protected` `Optional` **smoothingCenter**: ``null`` \| [`Point`](components_ClusterNodeContainer._internal_.Point.md)

#### Defined in

node_modules/pixi-viewport/index.d.ts:581

___

### smoothingCount

• `Protected` `Optional` **smoothingCount**: `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:582

## Methods

### checkKeyPress

▸ `Protected` **checkKeyPress**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:586

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

node_modules/pixi-viewport/index.d.ts:587

___

### handleKeyPresses

▸ `Protected` **handleKeyPresses**(`codes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `codes` | `string`[] |

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:585

___

### isAxisX

▸ `Protected` **isAxisX**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:588

___

### isAxisY

▸ `Protected` **isAxisY**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:589

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

#### Inherited from

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[reset](components_ClusterNodeContainer._internal_.Plugin_2.md#reset)

#### Defined in

node_modules/pixi-viewport/index.d.ts:399

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

▸ **up**(`_e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_e` | [`InteractionEvent`](components_ClusterNodeContainer._internal_.InteractionEvent.md) |

#### Returns

`boolean`

#### Inherited from

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[up](components_ClusterNodeContainer._internal_.Plugin_2.md#up)

#### Defined in

node_modules/pixi-viewport/index.d.ts:395

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[update](components_ClusterNodeContainer._internal_.Plugin_2.md#update)

#### Defined in

node_modules/pixi-viewport/index.d.ts:590

___

### wheel

▸ **wheel**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `WheelEvent` |

#### Returns

`boolean`

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[wheel](components_ClusterNodeContainer._internal_.Plugin_2.md#wheel)

#### Defined in

node_modules/pixi-viewport/index.d.ts:592
