[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / StateSystem

# Class: StateSystem

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).StateSystem

System plugin to the renderer to manage WebGL state machines.

**`memberof`** PIXI

## Implements

- [`ISystem`](../interfaces/components_ClusterNodeContainer._internal_.ISystem.md)

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.StateSystem.md#constructor)

### Properties

- [\_blendEq](components_ClusterNodeContainer._internal_.StateSystem.md#_blendeq)
- [blendMode](components_ClusterNodeContainer._internal_.StateSystem.md#blendmode)
- [blendModes](components_ClusterNodeContainer._internal_.StateSystem.md#blendmodes)
- [checks](components_ClusterNodeContainer._internal_.StateSystem.md#checks)
- [defaultState](components_ClusterNodeContainer._internal_.StateSystem.md#defaultstate)
- [gl](components_ClusterNodeContainer._internal_.StateSystem.md#gl)
- [map](components_ClusterNodeContainer._internal_.StateSystem.md#map)
- [polygonOffset](components_ClusterNodeContainer._internal_.StateSystem.md#polygonoffset)
- [stateId](components_ClusterNodeContainer._internal_.StateSystem.md#stateid)
- [checkBlendMode](components_ClusterNodeContainer._internal_.StateSystem.md#checkblendmode)
- [checkPolygonOffset](components_ClusterNodeContainer._internal_.StateSystem.md#checkpolygonoffset)

### Methods

- [contextChange](components_ClusterNodeContainer._internal_.StateSystem.md#contextchange)
- [forceState](components_ClusterNodeContainer._internal_.StateSystem.md#forcestate)
- [reset](components_ClusterNodeContainer._internal_.StateSystem.md#reset)
- [set](components_ClusterNodeContainer._internal_.StateSystem.md#set)
- [setBlend](components_ClusterNodeContainer._internal_.StateSystem.md#setblend)
- [setBlendMode](components_ClusterNodeContainer._internal_.StateSystem.md#setblendmode)
- [setCullFace](components_ClusterNodeContainer._internal_.StateSystem.md#setcullface)
- [setDepthMask](components_ClusterNodeContainer._internal_.StateSystem.md#setdepthmask)
- [setDepthTest](components_ClusterNodeContainer._internal_.StateSystem.md#setdepthtest)
- [setFrontFace](components_ClusterNodeContainer._internal_.StateSystem.md#setfrontface)
- [setOffset](components_ClusterNodeContainer._internal_.StateSystem.md#setoffset)
- [setPolygonOffset](components_ClusterNodeContainer._internal_.StateSystem.md#setpolygonoffset)
- [updateCheck](components_ClusterNodeContainer._internal_.StateSystem.md#updatecheck)

## Constructors

### constructor

• **new StateSystem**()

#### Defined in

node_modules/@pixi/core/index.d.ts:4511

## Properties

### \_blendEq

• `Protected` **\_blendEq**: `boolean`

Whether current blend equation is different

#### Defined in

node_modules/@pixi/core/index.d.ts:4488

___

### blendMode

• **blendMode**: [`BLEND_MODES`](../enums/components_ClusterNodeContainer._internal_.BLEND_MODES.md)

Blend mode

**`default`** PIXI.BLEND_MODES.NONE

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:4486

___

### blendModes

• `Protected` **blendModes**: `number`[][]

#### Defined in

node_modules/@pixi/core/index.d.ts:4495

___

### checks

• `Protected` `Readonly` **checks**: (`system`: [`StateSystem`](components_ClusterNodeContainer._internal_.StateSystem.md), `state`: [`State`](components_ClusterNodeContainer._internal_.State.md)) => `void`[]

Collection of check calls

**`member`** {function[]}

#### Defined in

node_modules/@pixi/core/index.d.ts:4505

___

### defaultState

• `Protected` **defaultState**: [`State`](components_ClusterNodeContainer._internal_.State.md)

Default WebGL State

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:4510

___

### gl

• `Protected` **gl**: [`IRenderingContext`](../interfaces/components_ClusterNodeContainer._internal_.IRenderingContext.md)

GL context

**`member`** {WebGLRenderingContext}

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:4494

___

### map

• `Protected` `Readonly` **map**: (`value`: `boolean`) => `void`[]

Collection of calls

**`member`** {function[]}

#### Defined in

node_modules/@pixi/core/index.d.ts:4500

___

### polygonOffset

• **polygonOffset**: `number`

Polygon offset

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:4480

___

### stateId

• **stateId**: `number`

State ID

**`readonly`**

#### Defined in

node_modules/@pixi/core/index.d.ts:4475

___

### checkBlendMode

▪ `Static` `Private` **checkBlendMode**: `any`

A private little wrapper function that we call to check the blend mode.

**`param`** the System to perform the state check on

**`param`** the state that the blendMode will pulled from

#### Defined in

node_modules/@pixi/core/index.d.ts:4593

___

### checkPolygonOffset

▪ `Static` `Private` **checkPolygonOffset**: `any`

A private little wrapper function that we call to check the polygon offset.

**`param`** the System to perform the state check on

**`param`** the state that the blendMode will pulled from

#### Defined in

node_modules/@pixi/core/index.d.ts:4600

## Methods

### contextChange

▸ **contextChange**(`gl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gl` | [`IRenderingContext`](../interfaces/components_ClusterNodeContainer._internal_.IRenderingContext.md) |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4512

___

### forceState

▸ **forceState**(`state`): `void`

Sets the state, when previous state is unknown.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`State`](components_ClusterNodeContainer._internal_.State.md) | The state to set |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4524

___

### reset

▸ **reset**(): `void`

Resets all the logic and disables the VAOs.

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4575

___

### set

▸ **set**(`state`): `void`

Sets the current state

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`State`](components_ClusterNodeContainer._internal_.State.md) | The state to set. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4518

___

### setBlend

▸ **setBlend**(`value`): `void`

Sets whether to enable or disable blending.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | Turn on or off WebGl blending. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4530

___

### setBlendMode

▸ **setBlendMode**(`value`): `void`

Sets the blend mode.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The blend mode to set to. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4566

___

### setCullFace

▸ **setCullFace**(`value`): `void`

Sets whether to enable or disable cull face.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | Turn on or off webgl cull face. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4554

___

### setDepthMask

▸ **setDepthMask**(`value`): `void`

Sets whether to enable or disable depth mask.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | Turn on or off webgl depth mask. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4548

___

### setDepthTest

▸ **setDepthTest**(`value`): `void`

Sets whether to enable or disable depth test.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | Turn on or off webgl depth testing. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4542

___

### setFrontFace

▸ **setFrontFace**(`value`): `void`

Sets the gl front face.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | true is clockwise and false is counter-clockwise |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4560

___

### setOffset

▸ **setOffset**(`value`): `void`

Sets whether to enable or disable polygon offset fill.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | Turn on or off webgl polygon offset testing. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4536

___

### setPolygonOffset

▸ **setPolygonOffset**(`value`, `scale`): `void`

Sets the polygon offset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | the polygon offset |
| `scale` | `number` | the polygon offset scale |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4573

___

### updateCheck

▸ **updateCheck**(`func`, `value`): `void`

Checks to see which updates should be checked based on which settings have been activated.

For example, if blend is enabled then we should check the blend modes each time the state is changed
or if polygon fill is activated then we need to check if the polygon offset changes.
The idea is that we only check what we have too.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | (`system`: [`StateSystem`](components_ClusterNodeContainer._internal_.StateSystem.md), `state`: [`State`](components_ClusterNodeContainer._internal_.State.md)) => `void` | the checking function to add or remove |
| `value` | `boolean` | should the check function be added or removed. |

#### Returns

`void`

#### Defined in

node_modules/@pixi/core/index.d.ts:4586