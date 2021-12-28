[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / MouseEdges

# Class: MouseEdges

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).MouseEdges

## Hierarchy

- [`Plugin_2`](components_ClusterNodeContainer._internal_.Plugin_2.md)

  ↳ **`MouseEdges`**

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.MouseEdges.md#constructor)

### Properties

- [bottom](components_ClusterNodeContainer._internal_.MouseEdges.md#bottom)
- [decelerateHorizontal](components_ClusterNodeContainer._internal_.MouseEdges.md#deceleratehorizontal)
- [decelerateVertical](components_ClusterNodeContainer._internal_.MouseEdges.md#deceleratevertical)
- [horizontal](components_ClusterNodeContainer._internal_.MouseEdges.md#horizontal)
- [left](components_ClusterNodeContainer._internal_.MouseEdges.md#left)
- [options](components_ClusterNodeContainer._internal_.MouseEdges.md#options)
- [parent](components_ClusterNodeContainer._internal_.MouseEdges.md#parent)
- [paused](components_ClusterNodeContainer._internal_.MouseEdges.md#paused)
- [radiusSquared](components_ClusterNodeContainer._internal_.MouseEdges.md#radiussquared)
- [reverse](components_ClusterNodeContainer._internal_.MouseEdges.md#reverse)
- [right](components_ClusterNodeContainer._internal_.MouseEdges.md#right)
- [top](components_ClusterNodeContainer._internal_.MouseEdges.md#top)
- [vertical](components_ClusterNodeContainer._internal_.MouseEdges.md#vertical)

### Methods

- [destroy](components_ClusterNodeContainer._internal_.MouseEdges.md#destroy)
- [down](components_ClusterNodeContainer._internal_.MouseEdges.md#down)
- [move](components_ClusterNodeContainer._internal_.MouseEdges.md#move)
- [pause](components_ClusterNodeContainer._internal_.MouseEdges.md#pause)
- [reset](components_ClusterNodeContainer._internal_.MouseEdges.md#reset)
- [resize](components_ClusterNodeContainer._internal_.MouseEdges.md#resize)
- [resume](components_ClusterNodeContainer._internal_.MouseEdges.md#resume)
- [up](components_ClusterNodeContainer._internal_.MouseEdges.md#up)
- [update](components_ClusterNodeContainer._internal_.MouseEdges.md#update)
- [wheel](components_ClusterNodeContainer._internal_.MouseEdges.md#wheel)

## Constructors

### constructor

• **new MouseEdges**(`parent`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`Viewport`](components_ClusterNodeContainer._internal_.Viewport.md) |
| `options?` | [`IMouseEdgesOptions`](../interfaces/components_ClusterNodeContainer._internal_.IMouseEdgesOptions.md) |

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[constructor](components_ClusterNodeContainer._internal_.Plugin_2.md#constructor)

#### Defined in

node_modules/pixi-viewport/index.d.ts:364

## Properties

### bottom

• `Protected` **bottom**: ``null`` \| `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:361

___

### decelerateHorizontal

• `Private` **decelerateHorizontal**: `any`

#### Defined in

node_modules/pixi-viewport/index.d.ts:368

___

### decelerateVertical

• `Private` **decelerateVertical**: `any`

#### Defined in

node_modules/pixi-viewport/index.d.ts:369

___

### horizontal

• `Protected` `Optional` **horizontal**: ``null`` \| `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:362

___

### left

• `Protected` **left**: ``null`` \| `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:358

___

### options

• `Readonly` **options**: [`Readonly`](../modules/components_ClusterNodeContainer._internal_.md#readonly)<[`Required`](../modules/components_ClusterNodeContainer._internal_.md#required)<[`IMouseEdgesOptions`](../interfaces/components_ClusterNodeContainer._internal_.IMouseEdgesOptions.md)\>\>

#### Defined in

node_modules/pixi-viewport/index.d.ts:355

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

### radiusSquared

• `Protected` `Readonly` **radiusSquared**: ``null`` \| `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:357

___

### reverse

• `Protected` `Readonly` **reverse**: ``1`` \| ``-1``

#### Defined in

node_modules/pixi-viewport/index.d.ts:356

___

### right

• `Protected` **right**: ``null`` \| `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:360

___

### top

• `Protected` **top**: ``null`` \| `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:359

___

### vertical

• `Protected` `Optional` **vertical**: ``null`` \| `number`

#### Defined in

node_modules/pixi-viewport/index.d.ts:363

## Methods

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

node_modules/pixi-viewport/index.d.ts:366

___

### move

▸ **move**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`InteractionEvent`](components_ClusterNodeContainer._internal_.InteractionEvent.md) |

#### Returns

`boolean`

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[move](components_ClusterNodeContainer._internal_.Plugin_2.md#move)

#### Defined in

node_modules/pixi-viewport/index.d.ts:367

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

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[resize](components_ClusterNodeContainer._internal_.Plugin_2.md#resize)

#### Defined in

node_modules/pixi-viewport/index.d.ts:365

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

node_modules/pixi-viewport/index.d.ts:370

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Overrides

[Plugin_2](components_ClusterNodeContainer._internal_.Plugin_2.md).[update](components_ClusterNodeContainer._internal_.Plugin_2.md#update)

#### Defined in

node_modules/pixi-viewport/index.d.ts:371

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
