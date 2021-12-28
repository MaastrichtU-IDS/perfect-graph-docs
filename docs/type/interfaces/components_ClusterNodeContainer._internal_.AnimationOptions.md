[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / AnimationOptions

# Interface: AnimationOptions

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).AnimationOptions

## Hierarchy

- **`AnimationOptions`**

  ↳ [`AnimateOptions`](components_ClusterNodeContainer._internal_.AnimateOptions.md)

## Table of contents

### Properties

- [center](components_ClusterNodeContainer._internal_.AnimationOptions.md#center)
- [duration](components_ClusterNodeContainer._internal_.AnimationOptions.md#duration)
- [easing](components_ClusterNodeContainer._internal_.AnimationOptions.md#easing)
- [fit](components_ClusterNodeContainer._internal_.AnimationOptions.md#fit)
- [pan](components_ClusterNodeContainer._internal_.AnimationOptions.md#pan)
- [panBy](components_ClusterNodeContainer._internal_.AnimationOptions.md#panby)
- [zoom](components_ClusterNodeContainer._internal_.AnimationOptions.md#zoom)

## Properties

### center

• `Optional` **center**: [`CenterOptions`](components_ClusterNodeContainer._internal_.CenterOptions.md)

An object containing centring options from which the graph will be animated.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:977

___

### duration

• `Optional` **duration**: `number`

duration - The duration of the animation in milliseconds.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:982

___

### easing

• `Optional` **easing**: [`TransitionTimingFunction`](../modules/components_ClusterNodeContainer._internal_.md#transitiontimingfunction)

easing - A transition-timing-function easing style string that shapes the animation progress curve.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:979

___

### fit

• `Optional` **fit**: [`AnimationFitOptions`](components_ClusterNodeContainer._internal_.AnimationFitOptions.md)

An object containing fitting options from which the graph will be animated.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:975

___

### pan

• `Optional` **pan**: [`Position`](components_ClusterNodeContainer._internal_.Position.md)

A panning position to which the graph will be animated.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:971

___

### panBy

• `Optional` **panBy**: [`Position`](components_ClusterNodeContainer._internal_.Position.md)

A relative panning position to which the graph will be animated.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:973

___

### zoom

• `Optional` **zoom**: [`ZoomOptions`](../modules/components_ClusterNodeContainer._internal_.md#zoomoptions)

A zoom level to which the graph will be animated.

#### Defined in

node_modules/@types/cytoscape/index.d.ts:969
