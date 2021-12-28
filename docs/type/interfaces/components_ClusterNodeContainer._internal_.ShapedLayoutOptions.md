[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / ShapedLayoutOptions

# Interface: ShapedLayoutOptions

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).ShapedLayoutOptions

## Hierarchy

- [`BaseLayoutOptions`](components_ClusterNodeContainer._internal_.BaseLayoutOptions.md)

- [`AnimatedLayoutOptions`](components_ClusterNodeContainer._internal_.AnimatedLayoutOptions.md)

  ↳ **`ShapedLayoutOptions`**

  ↳↳ [`GridLayoutOptions`](components_ClusterNodeContainer._internal_.GridLayoutOptions.md)

  ↳↳ [`CircleLayoutOptions`](components_ClusterNodeContainer._internal_.CircleLayoutOptions.md)

  ↳↳ [`ConcentricLayoutOptions`](components_ClusterNodeContainer._internal_.ConcentricLayoutOptions.md)

  ↳↳ [`BreadthFirstLayoutOptions`](components_ClusterNodeContainer._internal_.BreadthFirstLayoutOptions.md)

  ↳↳ [`CoseLayoutOptions`](components_ClusterNodeContainer._internal_.CoseLayoutOptions.md)

## Table of contents

### Properties

- [animate](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#animate)
- [animationDuration](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#animationduration)
- [animationEasing](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#animationeasing)
- [avoidOverlap](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#avoidoverlap)
- [boundingBox](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#boundingbox)
- [fit](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#fit)
- [name](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#name)
- [nodeDimensionsIncludeLabels](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#nodedimensionsincludelabels)
- [padding](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#padding)
- [ready](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#ready)
- [sort](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#sort)
- [spacingFactor](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#spacingfactor)
- [stop](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#stop)

## Properties

### animate

• `Optional` **animate**: `boolean`

#### Inherited from

[AnimatedLayoutOptions](components_ClusterNodeContainer._internal_.AnimatedLayoutOptions.md).[animate](components_ClusterNodeContainer._internal_.AnimatedLayoutOptions.md#animate)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4685

___

### animationDuration

• `Optional` **animationDuration**: `number`

#### Inherited from

[AnimatedLayoutOptions](components_ClusterNodeContainer._internal_.AnimatedLayoutOptions.md).[animationDuration](components_ClusterNodeContainer._internal_.AnimatedLayoutOptions.md#animationduration)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4687

___

### animationEasing

• `Optional` **animationEasing**: [`TransitionTimingFunction`](../modules/components_ClusterNodeContainer._internal_.md#transitiontimingfunction)

#### Inherited from

[AnimatedLayoutOptions](components_ClusterNodeContainer._internal_.AnimatedLayoutOptions.md).[animationEasing](components_ClusterNodeContainer._internal_.AnimatedLayoutOptions.md#animationeasing)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4689

___

### avoidOverlap

• `Optional` **avoidOverlap**: `boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4739

___

### boundingBox

• `Optional` **boundingBox**: [`BoundingBox12`](components_ClusterNodeContainer._internal_.BoundingBox12.md) \| [`BoundingBoxWH`](components_ClusterNodeContainer._internal_.BoundingBoxWH.md)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4736

___

### fit

• **fit**: `boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4732

___

### name

• **name**: `string`

#### Inherited from

[BaseLayoutOptions](components_ClusterNodeContainer._internal_.BaseLayoutOptions.md).[name](components_ClusterNodeContainer._internal_.BaseLayoutOptions.md#name)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4659

___

### nodeDimensionsIncludeLabels

• **nodeDimensionsIncludeLabels**: `boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4742

___

### padding

• `Optional` **padding**: `number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4734

___

### ready

• `Optional` **ready**: [`LayoutHandler`](../modules/components_ClusterNodeContainer._internal_.md#layouthandler)

#### Inherited from

[BaseLayoutOptions](components_ClusterNodeContainer._internal_.BaseLayoutOptions.md).[ready](components_ClusterNodeContainer._internal_.BaseLayoutOptions.md#ready)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4661

___

### sort

• `Optional` **sort**: [`SortingFunction`](../modules/components_ClusterNodeContainer._internal_.md#sortingfunction)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4747

___

### spacingFactor

• `Optional` **spacingFactor**: `number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4744

___

### stop

• `Optional` **stop**: [`LayoutHandler`](../modules/components_ClusterNodeContainer._internal_.md#layouthandler)

#### Inherited from

[BaseLayoutOptions](components_ClusterNodeContainer._internal_.BaseLayoutOptions.md).[stop](components_ClusterNodeContainer._internal_.BaseLayoutOptions.md#stop)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4663
