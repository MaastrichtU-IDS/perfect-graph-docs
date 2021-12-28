[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / PluginManager

# Class: PluginManager

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).PluginManager

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.PluginManager.md#constructor)

### Properties

- [list](components_ClusterNodeContainer._internal_.PluginManager.md#list)
- [plugins](components_ClusterNodeContainer._internal_.PluginManager.md#plugins)
- [viewport](components_ClusterNodeContainer._internal_.PluginManager.md#viewport)

### Methods

- [add](components_ClusterNodeContainer._internal_.PluginManager.md#add)
- [down](components_ClusterNodeContainer._internal_.PluginManager.md#down)
- [get](components_ClusterNodeContainer._internal_.PluginManager.md#get)
- [move](components_ClusterNodeContainer._internal_.PluginManager.md#move)
- [pause](components_ClusterNodeContainer._internal_.PluginManager.md#pause)
- [remove](components_ClusterNodeContainer._internal_.PluginManager.md#remove)
- [removeAll](components_ClusterNodeContainer._internal_.PluginManager.md#removeall)
- [reset](components_ClusterNodeContainer._internal_.PluginManager.md#reset)
- [resize](components_ClusterNodeContainer._internal_.PluginManager.md#resize)
- [resume](components_ClusterNodeContainer._internal_.PluginManager.md#resume)
- [sort](components_ClusterNodeContainer._internal_.PluginManager.md#sort)
- [up](components_ClusterNodeContainer._internal_.PluginManager.md#up)
- [update](components_ClusterNodeContainer._internal_.PluginManager.md#update)
- [wheel](components_ClusterNodeContainer._internal_.PluginManager.md#wheel)

## Constructors

### constructor

• **new PluginManager**(`viewport`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewport` | [`Viewport`](components_ClusterNodeContainer._internal_.Viewport.md) |

#### Defined in

node_modules/pixi-viewport/index.d.ts:409

## Properties

### list

• **list**: [`Plugin_2`](components_ClusterNodeContainer._internal_.Plugin_2.md)[]

#### Defined in

node_modules/pixi-viewport/index.d.ts:407

___

### plugins

• **plugins**: [`Partial`](../modules/components_ClusterNodeContainer._internal_.md#partial)<[`Record`](../modules/components_ClusterNodeContainer._internal_.md#record)<`string`, [`Plugin_2`](components_ClusterNodeContainer._internal_.Plugin_2.md)\>\>

#### Defined in

node_modules/pixi-viewport/index.d.ts:406

___

### viewport

• `Readonly` **viewport**: [`Viewport`](components_ClusterNodeContainer._internal_.Viewport.md)

#### Defined in

node_modules/pixi-viewport/index.d.ts:408

## Methods

### add

▸ **add**(`name`, `plugin`, `index?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `plugin` | [`Plugin_2`](components_ClusterNodeContainer._internal_.Plugin_2.md) |
| `index?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:410

___

### down

▸ **down**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`InteractionEvent`](components_ClusterNodeContainer._internal_.InteractionEvent.md) |

#### Returns

`boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:432

___

### get

▸ **get**(`name`, `ignorePaused?`): `undefined` \| ``null`` \| [`Animate`](components_ClusterNodeContainer._internal_.Animate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"animate"`` |
| `ignorePaused?` | `boolean` |

#### Returns

`undefined` \| ``null`` \| [`Animate`](components_ClusterNodeContainer._internal_.Animate.md)

#### Defined in

node_modules/pixi-viewport/index.d.ts:411

▸ **get**(`name`, `ignorePaused?`): `undefined` \| ``null`` \| [`Bounce`](components_ClusterNodeContainer._internal_.Bounce.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"bounce"`` |
| `ignorePaused?` | `boolean` |

#### Returns

`undefined` \| ``null`` \| [`Bounce`](components_ClusterNodeContainer._internal_.Bounce.md)

#### Defined in

node_modules/pixi-viewport/index.d.ts:412

▸ **get**(`name`, `ignorePaused?`): `undefined` \| ``null`` \| [`Clamp`](components_ClusterNodeContainer._internal_.Clamp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"clamp"`` |
| `ignorePaused?` | `boolean` |

#### Returns

`undefined` \| ``null`` \| [`Clamp`](components_ClusterNodeContainer._internal_.Clamp.md)

#### Defined in

node_modules/pixi-viewport/index.d.ts:413

▸ **get**(`name`, `ignorePaused?`): `undefined` \| ``null`` \| [`ClampZoom`](components_ClusterNodeContainer._internal_.ClampZoom.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"clamp-zoom"`` |
| `ignorePaused?` | `boolean` |

#### Returns

`undefined` \| ``null`` \| [`ClampZoom`](components_ClusterNodeContainer._internal_.ClampZoom.md)

#### Defined in

node_modules/pixi-viewport/index.d.ts:414

▸ **get**(`name`, `ignorePaused?`): `undefined` \| ``null`` \| [`Decelerate`](components_ClusterNodeContainer._internal_.Decelerate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"decelerate"`` |
| `ignorePaused?` | `boolean` |

#### Returns

`undefined` \| ``null`` \| [`Decelerate`](components_ClusterNodeContainer._internal_.Decelerate.md)

#### Defined in

node_modules/pixi-viewport/index.d.ts:415

▸ **get**(`name`, `ignorePaused?`): `undefined` \| ``null`` \| [`Drag`](components_ClusterNodeContainer._internal_.Drag.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"drag"`` |
| `ignorePaused?` | `boolean` |

#### Returns

`undefined` \| ``null`` \| [`Drag`](components_ClusterNodeContainer._internal_.Drag.md)

#### Defined in

node_modules/pixi-viewport/index.d.ts:416

▸ **get**(`name`, `ignorePaused?`): `undefined` \| ``null`` \| [`Follow`](components_ClusterNodeContainer._internal_.Follow.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"follow"`` |
| `ignorePaused?` | `boolean` |

#### Returns

`undefined` \| ``null`` \| [`Follow`](components_ClusterNodeContainer._internal_.Follow.md)

#### Defined in

node_modules/pixi-viewport/index.d.ts:417

▸ **get**(`name`, `ignorePaused?`): `undefined` \| ``null`` \| [`MouseEdges`](components_ClusterNodeContainer._internal_.MouseEdges.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"mouse-edges"`` |
| `ignorePaused?` | `boolean` |

#### Returns

`undefined` \| ``null`` \| [`MouseEdges`](components_ClusterNodeContainer._internal_.MouseEdges.md)

#### Defined in

node_modules/pixi-viewport/index.d.ts:418

▸ **get**(`name`, `ignorePaused?`): `undefined` \| ``null`` \| [`Pinch`](components_ClusterNodeContainer._internal_.Pinch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"pinch"`` |
| `ignorePaused?` | `boolean` |

#### Returns

`undefined` \| ``null`` \| [`Pinch`](components_ClusterNodeContainer._internal_.Pinch.md)

#### Defined in

node_modules/pixi-viewport/index.d.ts:419

▸ **get**(`name`, `ignorePaused?`): `undefined` \| ``null`` \| [`Snap`](components_ClusterNodeContainer._internal_.Snap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"snap"`` |
| `ignorePaused?` | `boolean` |

#### Returns

`undefined` \| ``null`` \| [`Snap`](components_ClusterNodeContainer._internal_.Snap.md)

#### Defined in

node_modules/pixi-viewport/index.d.ts:420

▸ **get**(`name`, `ignorePaused?`): `undefined` \| ``null`` \| [`SnapZoom`](components_ClusterNodeContainer._internal_.SnapZoom.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"snap-zoom"`` |
| `ignorePaused?` | `boolean` |

#### Returns

`undefined` \| ``null`` \| [`SnapZoom`](components_ClusterNodeContainer._internal_.SnapZoom.md)

#### Defined in

node_modules/pixi-viewport/index.d.ts:421

▸ **get**(`name`, `ignorePaused?`): `undefined` \| ``null`` \| [`Wheel`](components_ClusterNodeContainer._internal_.Wheel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | ``"wheel"`` |
| `ignorePaused?` | `boolean` |

#### Returns

`undefined` \| ``null`` \| [`Wheel`](components_ClusterNodeContainer._internal_.Wheel.md)

#### Defined in

node_modules/pixi-viewport/index.d.ts:422

▸ **get**<`T`\>(`name`, `ignorePaused?`): `undefined` \| ``null`` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Plugin_2`](components_ClusterNodeContainer._internal_.Plugin_2.md)<`T`\> = [`Plugin_2`](components_ClusterNodeContainer._internal_.Plugin_2.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `ignorePaused?` | `boolean` |

#### Returns

`undefined` \| ``null`` \| `T`

#### Defined in

node_modules/pixi-viewport/index.d.ts:423

___

### move

▸ **move**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`InteractionEvent`](components_ClusterNodeContainer._internal_.InteractionEvent.md) |

#### Returns

`boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:433

___

### pause

▸ **pause**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:429

___

### remove

▸ **remove**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:428

___

### removeAll

▸ **removeAll**(): `void`

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:427

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:426

___

### resize

▸ **resize**(): `void`

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:425

___

### resume

▸ **resume**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:430

___

### sort

▸ **sort**(): `void`

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:431

___

### up

▸ **up**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`InteractionEvent`](components_ClusterNodeContainer._internal_.InteractionEvent.md) |

#### Returns

`boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:434

___

### update

▸ **update**(`elapsed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `elapsed` | `number` |

#### Returns

`void`

#### Defined in

node_modules/pixi-viewport/index.d.ts:424

___

### wheel

▸ **wheel**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `WheelEvent` |

#### Returns

`boolean`

#### Defined in

node_modules/pixi-viewport/index.d.ts:435
