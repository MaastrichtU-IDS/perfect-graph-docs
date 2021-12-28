[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / InteractionTrackingData

# Class: InteractionTrackingData

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).InteractionTrackingData

DisplayObjects with the {@link PIXI.interactiveTarget} mixin use this class to track interactions

**`memberof`** PIXI

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.InteractionTrackingData.md#constructor)

### Properties

- [\_doSet](components_ClusterNodeContainer._internal_.InteractionTrackingData.md#_doset)
- [\_flags](components_ClusterNodeContainer._internal_.InteractionTrackingData.md#_flags)
- [\_pointerId](components_ClusterNodeContainer._internal_.InteractionTrackingData.md#_pointerid)
- [FLAGS](components_ClusterNodeContainer._internal_.InteractionTrackingData.md#flags)

### Accessors

- [flags](components_ClusterNodeContainer._internal_.InteractionTrackingData.md#flags)
- [leftDown](components_ClusterNodeContainer._internal_.InteractionTrackingData.md#leftdown)
- [none](components_ClusterNodeContainer._internal_.InteractionTrackingData.md#none)
- [over](components_ClusterNodeContainer._internal_.InteractionTrackingData.md#over)
- [pointerId](components_ClusterNodeContainer._internal_.InteractionTrackingData.md#pointerid)
- [rightDown](components_ClusterNodeContainer._internal_.InteractionTrackingData.md#rightdown)

## Constructors

### constructor

• `Private` **new InteractionTrackingData**(`pointerId`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointerId` | `number` | Unique pointer id of the event |

#### Defined in

node_modules/@pixi/interaction/index.d.ts:434

## Properties

### \_doSet

• `Private` **\_doSet**: `any`

**`param`** The interaction flag to set

**`param`** Should the flag be set or unset

#### Defined in

node_modules/@pixi/interaction/index.d.ts:441

___

### \_flags

• `Private` **\_flags**: `any`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:429

___

### \_pointerId

• `Private` `Readonly` **\_pointerId**: `any`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:428

___

### FLAGS

▪ `Static` **FLAGS**: [`Readonly`](../modules/components_ClusterNodeContainer._internal_.md#readonly)<[`InteractionTrackingFlags`](../interfaces/components_ClusterNodeContainer._internal_.InteractionTrackingFlags.md)\>

#### Defined in

node_modules/@pixi/interaction/index.d.ts:427

## Accessors

### flags

• `Private` `get` **flags**(): `number`

State of the tracking data, expressed as bit flags

**`member`** {number}

#### Returns

`number`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:456

• `Private` `set` **flags**(`flags`): `void`

State of the tracking data, expressed as bit flags

**`member`** {number}

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:457

___

### leftDown

• `Private` `get` **leftDown**(): `boolean`

Did the left mouse button come down in the DisplayObject?

**`member`** {boolean}

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:487

• `Private` `set` **leftDown**(`yn`): `void`

Did the left mouse button come down in the DisplayObject?

**`member`** {boolean}

#### Parameters

| Name | Type |
| :------ | :------ |
| `yn` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:488

___

### none

• `Private` `get` **none**(): `boolean`

Is the tracked event inactive (not over or down)?

**`member`** {number}

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:464

___

### over

• `Private` `get` **over**(): `boolean`

Is the tracked event over the DisplayObject?

**`member`** {boolean}

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:471

• `Private` `set` **over**(`yn`): `void`

Is the tracked event over the DisplayObject?

**`member`** {boolean}

#### Parameters

| Name | Type |
| :------ | :------ |
| `yn` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:472

___

### pointerId

• `Private` `get` **pointerId**(): `number`

Unique pointer id of the event

**`readonly`**

**`member`** {number}

#### Returns

`number`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:449

___

### rightDown

• `Private` `get` **rightDown**(): `boolean`

Did the right mouse button come down in the DisplayObject?

**`member`** {boolean}

#### Returns

`boolean`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:479

• `Private` `set` **rightDown**(`yn`): `void`

Did the right mouse button come down in the DisplayObject?

**`member`** {boolean}

#### Parameters

| Name | Type |
| :------ | :------ |
| `yn` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:480
