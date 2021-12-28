[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / InputManager

# Class: InputManager

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).InputManager

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.InputManager.md#constructor)

### Properties

- [addListeners](components_ClusterNodeContainer._internal_.InputManager.md#addlisteners)
- [clickedAvailable](components_ClusterNodeContainer._internal_.InputManager.md#clickedavailable)
- [isMouseDown](components_ClusterNodeContainer._internal_.InputManager.md#ismousedown)
- [last](components_ClusterNodeContainer._internal_.InputManager.md#last)
- [touches](components_ClusterNodeContainer._internal_.InputManager.md#touches)
- [viewport](components_ClusterNodeContainer._internal_.InputManager.md#viewport)
- [wheelFunction](components_ClusterNodeContainer._internal_.InputManager.md#wheelfunction)

### Methods

- [checkThreshold](components_ClusterNodeContainer._internal_.InputManager.md#checkthreshold)
- [clear](components_ClusterNodeContainer._internal_.InputManager.md#clear)
- [count](components_ClusterNodeContainer._internal_.InputManager.md#count)
- [destroy](components_ClusterNodeContainer._internal_.InputManager.md#destroy)
- [down](components_ClusterNodeContainer._internal_.InputManager.md#down)
- [get](components_ClusterNodeContainer._internal_.InputManager.md#get)
- [getPointerPosition](components_ClusterNodeContainer._internal_.InputManager.md#getpointerposition)
- [handleWheel](components_ClusterNodeContainer._internal_.InputManager.md#handlewheel)
- [move](components_ClusterNodeContainer._internal_.InputManager.md#move)
- [pause](components_ClusterNodeContainer._internal_.InputManager.md#pause)
- [remove](components_ClusterNodeContainer._internal_.InputManager.md#remove)
- [up](components_ClusterNodeContainer._internal_.InputManager.md#up)

## Constructors

### constructor

• **new InputManager**(`viewport`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewport` | [`Viewport`](components_ClusterNodeContainer._internal_.Viewport.md) |

#### Defined in

node_modules/pixi-viewport/index.d.ts:260

## Properties

### addListeners

• `Private` **addListeners**: `any`

#### Defined in

node_modules/pixi-viewport/index.d.ts:261

___

### clickedAvailable

• `Optional` **clickedAvailable**: `boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:255

___

### isMouseDown

• `Optional` **isMouseDown**: `boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:256

___

### last

• `Optional` **last**: ``null`` \| [`Point`](components_ClusterNodeContainer._internal_.Point.md)

#### Defined in

node_modules/pixi-viewport/index.d.ts:257

___

### touches

• **touches**: [`IViewportTouch`](../interfaces/components_ClusterNodeContainer._internal_.IViewportTouch.md)[]

#### Defined in

node_modules/pixi-viewport/index.d.ts:259

___

### viewport

• `Readonly` **viewport**: [`Viewport`](components_ClusterNodeContainer._internal_.Viewport.md)

#### Defined in

node_modules/pixi-viewport/index.d.ts:254

___

### wheelFunction

• `Optional` **wheelFunction**: (`e`: `WheelEvent`) => `void`

#### Type declaration

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `WheelEvent` |

##### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:258

## Methods

### checkThreshold

▸ **checkThreshold**(`change`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `change` | `number` |

#### Returns

`boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:265

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:264

___

### count

▸ **count**(): `number`

#### Returns

`number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:273

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:262

___

### down

▸ **down**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`InteractionEvent`](components_ClusterNodeContainer._internal_.InteractionEvent.md) |

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:263

___

### get

▸ **get**(`id`): ``null`` \| [`IViewportTouch`](../interfaces/components_ClusterNodeContainer._internal_.IViewportTouch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

``null`` \| [`IViewportTouch`](../interfaces/components_ClusterNodeContainer._internal_.IViewportTouch.md)

#### Defined in

node_modules/pixi-viewport/index.d.ts:271

___

### getPointerPosition

▸ **getPointerPosition**(`event`): [`Point`](components_ClusterNodeContainer._internal_.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `WheelEvent` |

#### Returns

[`Point`](components_ClusterNodeContainer._internal_.Point.md)

#### Defined in

node_modules/pixi-viewport/index.d.ts:268

___

### handleWheel

▸ **handleWheel**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `WheelEvent` |

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:269

___

### move

▸ **move**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`InteractionEvent`](components_ClusterNodeContainer._internal_.InteractionEvent.md) |

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:266

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:270

___

### remove

▸ **remove**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:272

___

### up

▸ **up**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`InteractionEvent`](components_ClusterNodeContainer._internal_.InteractionEvent.md) |

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:267
