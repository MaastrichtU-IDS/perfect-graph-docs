[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / ElementAnimateOptionPos

# Interface: ElementAnimateOptionPos

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).ElementAnimateOptionPos

## Hierarchy

- [`ElementAnimateOptionsBase`](components_ClusterNodeContainer._internal_.ElementAnimateOptionsBase.md)

  ↳ **`ElementAnimateOptionPos`**

## Table of contents

### Properties

- [duration](components_ClusterNodeContainer._internal_.ElementAnimateOptionPos.md#duration)
- [easing](components_ClusterNodeContainer._internal_.ElementAnimateOptionPos.md#easing)
- [position](components_ClusterNodeContainer._internal_.ElementAnimateOptionPos.md#position)
- [queue](components_ClusterNodeContainer._internal_.ElementAnimateOptionPos.md#queue)
- [style](components_ClusterNodeContainer._internal_.ElementAnimateOptionPos.md#style)

### Methods

- [complete](components_ClusterNodeContainer._internal_.ElementAnimateOptionPos.md#complete)
- [step](components_ClusterNodeContainer._internal_.ElementAnimateOptionPos.md#step)

## Properties

### duration

• `Optional` **duration**: `number`

The duration of the animation in milliseconds.

#### Inherited from

[ElementAnimateOptionsBase](components_ClusterNodeContainer._internal_.ElementAnimateOptionsBase.md).[duration](components_ClusterNodeContainer._internal_.ElementAnimateOptionsBase.md#duration)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2131

___

### easing

• `Optional` **easing**: [`TransitionTimingFunction`](../modules/components_ClusterNodeContainer._internal_.md#transitiontimingfunction)

A transition-timing-function easing style string that shapes the animation progress curve.

#### Inherited from

[ElementAnimateOptionsBase](components_ClusterNodeContainer._internal_.ElementAnimateOptionsBase.md).[easing](components_ClusterNodeContainer._internal_.ElementAnimateOptionsBase.md#easing)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2139

___

### position

• `Optional` **position**: [`Position`](components_ClusterNodeContainer._internal_.Position.md)

A position to which the elements will be animated.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2143

___

### queue

• `Optional` **queue**: `boolean`

A boolean indicating whether to queue the animation.

#### Inherited from

[ElementAnimateOptionsBase](components_ClusterNodeContainer._internal_.ElementAnimateOptionsBase.md).[queue](components_ClusterNodeContainer._internal_.ElementAnimateOptionsBase.md#queue)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2133

___

### style

• `Optional` **style**: `Object`

An object containing name-value pairs of style properties to animate.

#### Index signature

▪ [name: `string`]: `any`

#### Inherited from

[ElementAnimateOptionsBase](components_ClusterNodeContainer._internal_.ElementAnimateOptionsBase.md).[style](components_ClusterNodeContainer._internal_.ElementAnimateOptionsBase.md#style)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2129

## Methods

### complete

▸ `Optional` **complete**(): `void`

A function to call when the animation is done.

#### Returns

`void`

#### Inherited from

[ElementAnimateOptionsBase](components_ClusterNodeContainer._internal_.ElementAnimateOptionsBase.md).[complete](components_ClusterNodeContainer._internal_.ElementAnimateOptionsBase.md#complete)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2135

___

### step

▸ `Optional` **step**(): `void`

A function to call each time the animation steps.

#### Returns

`void`

#### Inherited from

[ElementAnimateOptionsBase](components_ClusterNodeContainer._internal_.ElementAnimateOptionsBase.md).[step](components_ClusterNodeContainer._internal_.ElementAnimateOptionsBase.md#step)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:2137
