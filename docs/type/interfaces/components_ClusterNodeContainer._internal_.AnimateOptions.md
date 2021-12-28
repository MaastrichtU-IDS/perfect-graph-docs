[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / AnimateOptions

# Interface: AnimateOptions

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).AnimateOptions

## Hierarchy

- [`AnimationOptions`](components_ClusterNodeContainer._internal_.AnimationOptions.md)

  ↳ **`AnimateOptions`**

## Table of contents

### Properties

- [center](components_ClusterNodeContainer._internal_.AnimateOptions.md#center)
- [duration](components_ClusterNodeContainer._internal_.AnimateOptions.md#duration)
- [easing](components_ClusterNodeContainer._internal_.AnimateOptions.md#easing)
- [fit](components_ClusterNodeContainer._internal_.AnimateOptions.md#fit)
- [pan](components_ClusterNodeContainer._internal_.AnimateOptions.md#pan)
- [panBy](components_ClusterNodeContainer._internal_.AnimateOptions.md#panby)
- [queue](components_ClusterNodeContainer._internal_.AnimateOptions.md#queue)
- [zoom](components_ClusterNodeContainer._internal_.AnimateOptions.md#zoom)

### Methods

- [complete](components_ClusterNodeContainer._internal_.AnimateOptions.md#complete)
- [step](components_ClusterNodeContainer._internal_.AnimateOptions.md#step)

## Properties

### center

• `Optional` **center**: [`CenterOptions`](components_ClusterNodeContainer._internal_.CenterOptions.md)

An object containing centring options from which the graph will be animated.

#### Inherited from

[AnimationOptions](components_ClusterNodeContainer._internal_.AnimationOptions.md).[center](components_ClusterNodeContainer._internal_.AnimationOptions.md#center)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:977

___

### duration

• `Optional` **duration**: `number`

duration - The duration of the animation in milliseconds.

#### Inherited from

[AnimationOptions](components_ClusterNodeContainer._internal_.AnimationOptions.md).[duration](components_ClusterNodeContainer._internal_.AnimationOptions.md#duration)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:982

___

### easing

• `Optional` **easing**: [`TransitionTimingFunction`](../modules/components_ClusterNodeContainer._internal_.md#transitiontimingfunction)

easing - A transition-timing-function easing style string that shapes the animation progress curve.

#### Inherited from

[AnimationOptions](components_ClusterNodeContainer._internal_.AnimationOptions.md).[easing](components_ClusterNodeContainer._internal_.AnimationOptions.md#easing)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:979

___

### fit

• `Optional` **fit**: [`AnimationFitOptions`](components_ClusterNodeContainer._internal_.AnimationFitOptions.md)

An object containing fitting options from which the graph will be animated.

#### Inherited from

[AnimationOptions](components_ClusterNodeContainer._internal_.AnimationOptions.md).[fit](components_ClusterNodeContainer._internal_.AnimationOptions.md#fit)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:975

___

### pan

• `Optional` **pan**: [`Position`](components_ClusterNodeContainer._internal_.Position.md)

A panning position to which the graph will be animated.

#### Inherited from

[AnimationOptions](components_ClusterNodeContainer._internal_.AnimationOptions.md).[pan](components_ClusterNodeContainer._internal_.AnimationOptions.md#pan)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:971

___

### panBy

• `Optional` **panBy**: [`Position`](components_ClusterNodeContainer._internal_.Position.md)

A relative panning position to which the graph will be animated.

#### Inherited from

[AnimationOptions](components_ClusterNodeContainer._internal_.AnimationOptions.md).[panBy](components_ClusterNodeContainer._internal_.AnimationOptions.md#panby)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:973

___

### queue

• `Optional` **queue**: `boolean`

queue - A boolean indicating whether to queue the animation.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:986

___

### zoom

• `Optional` **zoom**: [`ZoomOptions`](../modules/components_ClusterNodeContainer._internal_.md#zoomoptions)

A zoom level to which the graph will be animated.

#### Inherited from

[AnimationOptions](components_ClusterNodeContainer._internal_.AnimationOptions.md).[zoom](components_ClusterNodeContainer._internal_.AnimationOptions.md#zoom)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:969

## Methods

### complete

▸ `Optional` **complete**(): `void`

complete - A function to call when the animation is done.

#### Returns

`void`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:988

___

### step

▸ `Optional` **step**(): `void`

step - A function to call each time the animation steps.

#### Returns

`void`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:990
