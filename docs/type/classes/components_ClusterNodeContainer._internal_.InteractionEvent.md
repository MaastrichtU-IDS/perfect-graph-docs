[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / InteractionEvent

# Class: InteractionEvent

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).InteractionEvent

Event class that mimics native DOM events.

**`memberof`** PIXI

## Table of contents

### Constructors

- [constructor](components_ClusterNodeContainer._internal_.InteractionEvent.md#constructor)

### Properties

- [currentTarget](components_ClusterNodeContainer._internal_.InteractionEvent.md#currenttarget)
- [data](components_ClusterNodeContainer._internal_.InteractionEvent.md#data)
- [stopPropagationHint](components_ClusterNodeContainer._internal_.InteractionEvent.md#stoppropagationhint)
- [stopped](components_ClusterNodeContainer._internal_.InteractionEvent.md#stopped)
- [stopsPropagatingAt](components_ClusterNodeContainer._internal_.InteractionEvent.md#stopspropagatingat)
- [target](components_ClusterNodeContainer._internal_.InteractionEvent.md#target)
- [type](components_ClusterNodeContainer._internal_.InteractionEvent.md#type)

### Methods

- [reset](components_ClusterNodeContainer._internal_.InteractionEvent.md#reset)
- [stopPropagation](components_ClusterNodeContainer._internal_.InteractionEvent.md#stoppropagation)

## Constructors

### constructor

• **new InteractionEvent**()

#### Defined in

node_modules/@pixi/interaction/index.d.ts:94

## Properties

### currentTarget

• **currentTarget**: `DisplayObject`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:91

___

### data

• **data**: [`InteractionData`](components_ClusterNodeContainer._internal_.InteractionData.md)

#### Defined in

node_modules/@pixi/interaction/index.d.ts:93

___

### stopPropagationHint

• **stopPropagationHint**: `boolean`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:89

___

### stopped

• **stopped**: `boolean`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:87

___

### stopsPropagatingAt

• **stopsPropagatingAt**: `DisplayObject`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:88

___

### target

• **target**: `DisplayObject`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:90

___

### type

• **type**: `string`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:92

## Methods

### reset

▸ **reset**(): `void`

Resets the event.

#### Returns

`void`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:103

___

### stopPropagation

▸ **stopPropagation**(): `void`

Prevents event from reaching any objects other than the current object.

#### Returns

`void`

#### Defined in

node_modules/@pixi/interaction/index.d.ts:99
