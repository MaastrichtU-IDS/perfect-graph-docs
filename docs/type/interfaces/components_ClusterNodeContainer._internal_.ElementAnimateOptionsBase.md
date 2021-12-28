[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / ElementAnimateOptionsBase

# Interface: ElementAnimateOptionsBase

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).ElementAnimateOptionsBase

http://js.cytoscape.org/#collection/animation

## Hierarchy

- **`ElementAnimateOptionsBase`**

  ↳ [`ElementAnimateOptionPos`](components_ClusterNodeContainer._internal_.ElementAnimateOptionPos.md)

  ↳ [`ElementAnimateOptionRen`](components_ClusterNodeContainer._internal_.ElementAnimateOptionRen.md)

## Table of contents

### Properties

- [duration](components_ClusterNodeContainer._internal_.ElementAnimateOptionsBase.md#duration)
- [easing](components_ClusterNodeContainer._internal_.ElementAnimateOptionsBase.md#easing)
- [queue](components_ClusterNodeContainer._internal_.ElementAnimateOptionsBase.md#queue)
- [style](components_ClusterNodeContainer._internal_.ElementAnimateOptionsBase.md#style)

### Methods

- [complete](components_ClusterNodeContainer._internal_.ElementAnimateOptionsBase.md#complete)
- [step](components_ClusterNodeContainer._internal_.ElementAnimateOptionsBase.md#step)

## Properties

### duration

• `Optional` **duration**: `number`

The duration of the animation in milliseconds.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2131

___

### easing

• `Optional` **easing**: [`TransitionTimingFunction`](../modules/components_ClusterNodeContainer._internal_.md#transitiontimingfunction)

A transition-timing-function easing style string that shapes the animation progress curve.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2139

___

### queue

• `Optional` **queue**: `boolean`

A boolean indicating whether to queue the animation.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2133

___

### style

• `Optional` **style**: `Object`

An object containing name-value pairs of style properties to animate.

#### Index signature

▪ [name: `string`]: `any`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2129

## Methods

### complete

▸ `Optional` **complete**(): `void`

A function to call when the animation is done.

#### Returns

`void`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2135

___

### step

▸ `Optional` **step**(): `void`

A function to call each time the animation steps.

#### Returns

`void`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2137
