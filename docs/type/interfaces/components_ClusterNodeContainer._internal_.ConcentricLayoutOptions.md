[perfect-graph](../README.md) / [Modules](../modules.md) / [components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md) / [<internal\>](../modules/components_ClusterNodeContainer._internal_.md) / ConcentricLayoutOptions

# Interface: ConcentricLayoutOptions

[components/ClusterNodeContainer](../modules/components_ClusterNodeContainer.md).[<internal>](../modules/components_ClusterNodeContainer._internal_.md).ConcentricLayoutOptions

http://js.cytoscape.org/#layouts/concentric

## Hierarchy

- [`ShapedLayoutOptions`](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md)

  ↳ **`ConcentricLayoutOptions`**

## Table of contents

### Properties

- [animate](components_ClusterNodeContainer._internal_.ConcentricLayoutOptions.md#animate)
- [animationDuration](components_ClusterNodeContainer._internal_.ConcentricLayoutOptions.md#animationduration)
- [animationEasing](components_ClusterNodeContainer._internal_.ConcentricLayoutOptions.md#animationeasing)
- [avoidOverlap](components_ClusterNodeContainer._internal_.ConcentricLayoutOptions.md#avoidoverlap)
- [boundingBox](components_ClusterNodeContainer._internal_.ConcentricLayoutOptions.md#boundingbox)
- [clockwise](components_ClusterNodeContainer._internal_.ConcentricLayoutOptions.md#clockwise)
- [equidistant](components_ClusterNodeContainer._internal_.ConcentricLayoutOptions.md#equidistant)
- [fit](components_ClusterNodeContainer._internal_.ConcentricLayoutOptions.md#fit)
- [height](components_ClusterNodeContainer._internal_.ConcentricLayoutOptions.md#height)
- [minNodeSpacing](components_ClusterNodeContainer._internal_.ConcentricLayoutOptions.md#minnodespacing)
- [name](components_ClusterNodeContainer._internal_.ConcentricLayoutOptions.md#name)
- [nodeDimensionsIncludeLabels](components_ClusterNodeContainer._internal_.ConcentricLayoutOptions.md#nodedimensionsincludelabels)
- [padding](components_ClusterNodeContainer._internal_.ConcentricLayoutOptions.md#padding)
- [ready](components_ClusterNodeContainer._internal_.ConcentricLayoutOptions.md#ready)
- [sort](components_ClusterNodeContainer._internal_.ConcentricLayoutOptions.md#sort)
- [spacingFactor](components_ClusterNodeContainer._internal_.ConcentricLayoutOptions.md#spacingfactor)
- [startAngle](components_ClusterNodeContainer._internal_.ConcentricLayoutOptions.md#startangle)
- [stop](components_ClusterNodeContainer._internal_.ConcentricLayoutOptions.md#stop)
- [sweep](components_ClusterNodeContainer._internal_.ConcentricLayoutOptions.md#sweep)
- [width](components_ClusterNodeContainer._internal_.ConcentricLayoutOptions.md#width)

### Methods

- [concentric](components_ClusterNodeContainer._internal_.ConcentricLayoutOptions.md#concentric)
- [levelWidth](components_ClusterNodeContainer._internal_.ConcentricLayoutOptions.md#levelwidth)

## Properties

### animate

• `Optional` **animate**: `boolean`

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[animate](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#animate)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4685

___

### animationDuration

• `Optional` **animationDuration**: `number`

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[animationDuration](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#animationduration)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4687

___

### animationEasing

• `Optional` **animationEasing**: [`TransitionTimingFunction`](../modules/components_ClusterNodeContainer._internal_.md#transitiontimingfunction)

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[animationEasing](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#animationeasing)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4689

___

### avoidOverlap

• `Optional` **avoidOverlap**: `boolean`

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[avoidOverlap](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#avoidoverlap)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4739

___

### boundingBox

• `Optional` **boundingBox**: [`BoundingBox12`](components_ClusterNodeContainer._internal_.BoundingBox12.md) \| [`BoundingBoxWH`](components_ClusterNodeContainer._internal_.BoundingBoxWH.md)

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[boundingBox](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#boundingbox)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4736

___

### clockwise

• `Optional` **clockwise**: `boolean`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4795

___

### equidistant

• **equidistant**: ``false``

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4798

___

### fit

• **fit**: `boolean`

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[fit](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#fit)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4732

___

### height

• **height**: `undefined`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4801

___

### minNodeSpacing

• **minNodeSpacing**: ``10``

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4799

___

### name

• **name**: ``"concentric"``

#### Overrides

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[name](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#name)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4788

___

### nodeDimensionsIncludeLabels

• **nodeDimensionsIncludeLabels**: `boolean`

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[nodeDimensionsIncludeLabels](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#nodedimensionsincludelabels)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4742

___

### padding

• `Optional` **padding**: `number`

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[padding](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#padding)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4734

___

### ready

• `Optional` **ready**: [`LayoutHandler`](../modules/components_ClusterNodeContainer._internal_.md#layouthandler)

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[ready](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#ready)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4661

___

### sort

• `Optional` **sort**: [`SortingFunction`](../modules/components_ClusterNodeContainer._internal_.md#sortingfunction)

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[sort](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#sort)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4747

___

### spacingFactor

• **spacingFactor**: `undefined`

#### Overrides

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[spacingFactor](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#spacingfactor)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4805

___

### startAngle

• **startAngle**: `number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4791

___

### stop

• `Optional` **stop**: [`LayoutHandler`](../modules/components_ClusterNodeContainer._internal_.md#layouthandler)

#### Inherited from

[ShapedLayoutOptions](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md).[stop](components_ClusterNodeContainer._internal_.ShapedLayoutOptions.md#stop)

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4663

___

### sweep

• `Optional` **sweep**: `number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4793

___

### width

• **width**: `undefined`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4803

## Methods

### concentric

▸ **concentric**(`node`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `Object` |
| `node.degree` | () => `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4807

___

### levelWidth

▸ **levelWidth**(`node`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `Object` |
| `node.maxDegree` | () => `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/cytoscape/index.d.ts:4809
